// ==================== 应用初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// ==================== 自动刷新功能 ====================
let refreshTimer = null;
let autoRefreshEnabled = true;
let refreshInterval = 60000;

function initAutoRefresh() {
    const toggleEl = document.getElementById('auto-refresh-toggle');
    const intervalEl = document.getElementById('refresh-interval');
    
    // 从localStorage读取设置
    const savedEnabled = localStorage.getItem('autoRefreshEnabled');
    const savedInterval = localStorage.getItem('refreshInterval');
    
    if (savedEnabled !== null) {
        autoRefreshEnabled = savedEnabled === 'true';
        toggleEl.checked = autoRefreshEnabled;
    }
    if (savedInterval) {
        refreshInterval = parseInt(savedInterval) * 1000;
        intervalEl.value = savedInterval;
    }
    
    // 设置自动刷新
    setupAutoRefresh();
    
    // 监听设置变化
    toggleEl.addEventListener('change', () => {
        autoRefreshEnabled = toggleEl.checked;
        localStorage.setItem('autoRefreshEnabled', autoRefreshEnabled);
        setupAutoRefresh();
    });
    
    intervalEl.addEventListener('change', () => {
        refreshInterval = parseInt(intervalEl.value) * 1000;
        localStorage.setItem('refreshInterval', intervalEl.value);
        setupAutoRefresh();
    });
}

function setupAutoRefresh() {
    if (refreshTimer) {
        clearInterval(refreshTimer);
        refreshTimer = null;
    }
    
    if (autoRefreshEnabled) {
        refreshTimer = setInterval(async () => {
            await DataManager.refresh();
            renderAllData();
        }, refreshInterval);
    }
}

// ==================== 初始化应用 ====================
async function initApp() {
    // 初始化自动刷新
    initAutoRefresh();
    
    // 显示加载状态
    document.getElementById('update-time').textContent = '正在加载实时数据...';
    
    // 初始化数据
    const success = await DataManager.init();
    
    if (success) {
        // 渲染所有数据
        renderAllData();
        
        // 显示更新时间
        document.getElementById('update-time').textContent = 
            `数据更新时间：${new Date().toLocaleString()}（实时数据来自天天基金）`;
    } else {
        // 使用静态数据作为后备
        renderStaticData();
    }
    
    // 绑定事件
    bindEvents();
}

// ==================== 渲染所有数据 ====================
function renderAllData() {
    renderRealtimeIndex();
    renderCapitalFlow();
    renderFavorableSectors();
    renderRecommendFunds();
    renderRealtimeNews();
    renderMyFunds();
}

// ==================== 渲染静态数据（后备） ====================
function renderStaticData() {
    // 使用原有SAMPLE_DATA渲染
    renderRealtimeIndex();
    renderCapitalFlow();
    renderFavorableSectors();
    renderRecommendFunds();
    renderRealtimeNews();
    renderMyFunds();
}

// ==================== 渲染实时大盘指数 ====================
async function renderRealtimeIndex() {
    const indices = ['shangzhi', 'shengzheng', 'chuangye', 'zhuanke50'];
    
    // 尝试从实时数据获取
    const indexData = await IndexService.getIndexData();
    
    indices.forEach(index => {
        const valueEl = document.getElementById(`${index}-value`);
        const changeEl = document.getElementById(`${index}-change`);
        const volumeEl = document.getElementById(`${index}-volume`);
        
        // 优先使用实时数据，如果无效则使用SAMPLE_DATA的静态数据
        const realtimeData = indexData?.[index];
        const staticData = SAMPLE_DATA.realtimeIndex?.[index];
        
        // 判断实时数据是否有效（不是 '--'）
        const hasValidRealtime = realtimeData && realtimeData.value && realtimeData.value !== '--';
        const data = hasValidRealtime ? realtimeData : staticData;
        
        if (data) {
            valueEl.textContent = parseFloat(data.value).toFixed(2);
            changeEl.textContent = data.change;
            volumeEl.textContent = data.volume || '';
            
            // 设置颜色
            const changeValue = parseFloat(data.change);
            setColorClass(valueEl, changeValue);
            setColorClass(changeEl, changeValue);
        }
    });
}

function setColorClass(el, value) {
    if (value > 0) {
        el.className = el.className.replace(/neutral|positive|negative/g, '').trim() + ' positive';
    } else if (value < 0) {
        el.className = el.className.replace(/neutral|positive|negative/g, '').trim() + ' negative';
    } else {
        el.className = el.className.replace(/neutral|positive|negative/g, '').trim() + ' neutral';
    }
}

// ==================== 渲染我的基金 ====================
function renderMyFunds() {
    const container = document.getElementById('my-funds-list');
    container.innerHTML = '';
    
    const fundCodes = ['510300', '588000', '515080', '510500', '006546', '110017'];
    
    fundCodes.forEach(code => {
        const realtimeData = DataManager.getFund(code);
        
        // 从原有数据获取基本信息
        const staticData = SAMPLE_DATA.fundData[code] || {};
        
        const card = document.createElement('div');
        card.className = 'my-fund-card';
        
        // 使用实时数据或静态数据
        const name = realtimeData?.name || staticData.name || code;
        const price = realtimeData?.gsz || staticData.price || '--';
        const change = realtimeData?.gszzl || staticData.change || '0';
        const nav = realtimeData?.dwjz || staticData.nav || '--';
        const navDate = realtimeData?.jzrq || staticData.navDate || '--';
        
        const changeClass = getChangeClass(change);
        
        card.innerHTML = `
            <div class="my-fund-header">
                <span class="my-fund-name">${name}</span>
                <span class="my-fund-change ${changeClass}">${formatChange(change)}</span>
            </div>
            <div class="my-fund-meta">
                <span>实时估值: ${price}</span>
                <span>净值(${navDate}): ${nav}</span>
            </div>
        `;
        
        card.addEventListener('click', () => openFundModalWithRealtime(code));
        container.appendChild(card);
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
    }
}

// ==================== 渲染买卖建议 ====================
function renderRecommendFunds() {
    const { buyList, sellList, holdList } = SAMPLE_DATA.recommendedFunds;
    
    // 买入建议
    const buyContainer = document.getElementById('buy-list');
    buyContainer.innerHTML = '';
    if (buyList && buyList.length > 0) {
        buyList.forEach(fund => {
            const realtimeData = DataManager.getFund(fund.code);
            const card = createRecommendCard(fund, 'buy', realtimeData);
            buyContainer.appendChild(card);
        });
    } else {
        buyContainer.innerHTML = '<div class="empty-state"><p>暂无买入建议</p></div>';
    }
    
    // 卖出建议
    const sellContainer = document.getElementById('sell-list');
    sellContainer.innerHTML = '';
    if (sellList && sellList.length > 0) {
        sellList.forEach(fund => {
            const realtimeData = DataManager.getFund(fund.code);
            const card = createRecommendCard(fund, 'sell', realtimeData);
            sellContainer.appendChild(card);
        });
    } else {
        sellContainer.innerHTML = '<div class="empty-state"><p>暂无卖出建议</p></div>';
    }
    
    // 持有观望
    const holdContainer = document.getElementById('hold-list');
    holdContainer.innerHTML = '';
    if (holdList && holdList.length > 0) {
        holdList.forEach(fund => {
            const realtimeData = DataManager.getFund(fund.code);
            const card = createRecommendCard(fund, 'hold', realtimeData);
            holdContainer.appendChild(card);
        });
    } else {
        holdContainer.innerHTML = '<div class="empty-state"><p>暂无持有建议</p></div>';
    }
}

function createRecommendCard(fund, type, realtimeData) {
    const card = document.createElement('div');
    card.className = 'recommend-card';
    
    // 优先使用实时数据
    const realtimePrice = realtimeData?.gsz || fund.price;
    const realtimeChange = realtimeData?.gszzl || fund.change;
    
    if (type === 'buy') {
        const changeClass = getChangeClass(realtimeChange);
        card.innerHTML = `
            <div class="recommend-header">
                <span class="recommend-name">${fund.name}</span>
                <span class="recommend-code">${fund.code}</span>
            </div>
            <div class="recommend-stats">
                <div class="recommend-stat">
                    <span class="recommend-stat-label">实时估值</span>
                    <span class="recommend-stat-value">${realtimePrice || fund.nav}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">今日涨跌</span>
                    <span class="recommend-stat-value ${changeClass}">${formatChange(realtimeChange)}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">风险等级</span>
                    <span class="recommend-stat-value">${fund.riskLevel || '中'}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">预期收益</span>
                    <span class="recommend-stat-value positive">${fund.expectedReturn || '--'}</span>
                </div>
            </div>
            <div class="recommend-prices">
                <div class="price-item">
                    <span class="price-label">建议买入价</span>
                    <span class="price-value positive">${fund.buyPrice || '--'}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">目标价</span>
                    <span class="price-value">${fund.targetPrice || '--'}</span>
                </div>
                <div class="price-item">
                    <span class="price-label">止损价</span>
                    <span class="price-value negative">${fund.stopLoss || '--'}</span>
                </div>
            </div>
            <div class="recommend-reason">${fund.reason}</div>
        `;
    } else if (type === 'sell') {
        const profitClass = getChangeClass(fund.profit);
        card.innerHTML = `
            <div class="recommend-header">
                <span class="recommend-name">${fund.name}</span>
                <span class="recommend-code">${fund.code}</span>
            </div>
            <div class="recommend-stats">
                <div class="recommend-stat">
                    <span class="recommend-stat-label">当前价</span>
                    <span class="recommend-stat-value">${realtimePrice || fund.price}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">持仓天数</span>
                    <span class="recommend-stat-value">${fund.holdDays || '--'}天</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">盈亏</span>
                    <span class="recommend-stat-value ${profitClass}">${fund.profit}</span>
                </div>
            </div>
            <div class="recommend-reason">${fund.reason}</div>
        `;
    } else {
        const changeClass = getChangeClass(realtimeChange);
        card.innerHTML = `
            <div class="recommend-header">
                <span class="recommend-name">${fund.name}</span>
                <span class="recommend-code">${fund.code}</span>
            </div>
            <div class="recommend-stats">
                <div class="recommend-stat">
                    <span class="recommend-stat-label">实时估值</span>
                    <span class="recommend-stat-value">${realtimePrice || fund.nav}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">今日涨跌</span>
                    <span class="recommend-stat-value ${changeClass}">${formatChange(realtimeChange)}</span>
                </div>
            </div>
            <div class="recommend-reason">${fund.reason || '建议继续持有观望'}</div>
        `;
    }
    
    card.addEventListener('click', () => openFundModalWithRealtime(fund.code));
    return card;
}

// ==================== 辅助函数 ====================
function getChangeClass(change) {
    if (!change) return 'neutral';
    const value = parseFloat(String(change).replace('%', ''));
    if (value > 0) return 'positive';
    if (value < 0) return 'negative';
    return 'neutral';
}

function formatChange(change) {
    if (!change && change !== 0) return '--';
    const value = parseFloat(change);
    const prefix = value > 0 ? '+' : '';
    return `${prefix}${value.toFixed(2)}%`;
}

function getImpactClass(impact) {
    if (impact.includes('利好')) return 'positive';
    if (impact.includes('利空')) return 'negative';
    return 'neutral';
}

function openSectorLink(name) {
    window.open(`https://quote.eastmoney.com/center/boardlist.html#${encodeURIComponent(name)}`, '_blank');
}

// ==================== 基金详情模态框 ====================
function openFundModalWithRealtime(code) {
    const staticData = SAMPLE_DATA.fundData[code];
    const realtimeData = DataManager.getFund(code);
    
    if (!staticData && !realtimeData) return;
    
    const modal = document.getElementById('fund-modal');
    
    // 合并数据
    const fund = {
        ...staticData,
        ...realtimeData,
        code: code
    };
    
    document.getElementById('modal-fund-name').textContent = fund.name || code;
    document.getElementById('modal-fund-code').textContent = code;
    document.getElementById('modal-fund-nav').textContent = fund.dwjz || fund.nav || '--';
    document.getElementById('modal-nav-date').textContent = fund.jzrq || fund.navDate || '--';
    
    const change = fund.gszzl || fund.change;
    const changeEl = document.getElementById('modal-fund-change');
    changeEl.textContent = formatChange(change);
    changeEl.className = `info-value ${getChangeClass(change)}`;
    
    // 实时估值
    const gsz = fund.gsz;
    const gszEl = document.getElementById('modal-fund-gsz');
    if (gszEl) {
        gszEl.textContent = gsz || '--';
    }
    
    document.getElementById('modal-fund-scale').textContent = fund.scale || '--';
    document.getElementById('modal-fund-manager').textContent = fund.manager || '--';
    document.getElementById('modal-tracking').textContent = fund.tracking || '--';
    
    // 渲染图表
    if (fund.navHistory && fund.navHistory.length > 0) {
        renderNavChart(fund.navHistory);
    }
    if (fund.klineData && fund.klineData.length > 0) {
        renderKlineChart(fund.klineData);
    }
    
    modal.classList.add('active');
}

// ==================== 渲染图表 ====================
function renderNavChart(data) {
    const chartDom = document.getElementById('fund-chart');
    const myChart = echarts.init(chartDom);
    
    const dates = data.map(d => d.date).reverse();
    const values = data.map(d => d.value).reverse();
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
            type: 'category',
            data: dates,
            axisLabel: { color: '#aaa', fontSize: 10 }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#aaa', fontSize: 10 }
        },
        series: [{
            data: values,
            type: 'line',
            smooth: true,
            lineStyle: { color: '#e64340', width: 2 },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(230, 67, 64, 0.3)' },
                        { offset: 1, color: 'rgba(230, 67, 64, 0)' }
                    ]
                }
            }
        }]
    };
    
    myChart.setOption(option);
}

function renderKlineChart(data) {
    const chartDom = document.getElementById('kline-chart');
    const myChart = echarts.init(chartDom);
    
    const dates = data.map(d => d.date).reverse();
    const ohlc = data.map(d => [d.open, d.close, d.low, d.high]).reverse();
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
            type: 'category',
            data: dates,
            axisLabel: { color: '#aaa', fontSize: 10 }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#aaa', fontSize: 10 }
        },
        series: [{
            type: 'candlestick',
            data: ohlc,
            itemStyle: {
                color: '#e64340',
                color0: '#09bb07',
                borderColor: '#e64340',
                borderColor0: '#09bb07'
            }
        }]
    };
    
    myChart.setOption(option);
}

// ==================== 事件绑定 ====================
function bindEvents() {
    // 模态框关闭
    const modal = document.getElementById('fund-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    
    // 指数点击
    document.querySelectorAll('.index-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = item.dataset.index;
            const indexNames = {
                shangzhi: '上证指数',
                shengzheng: '深证成指',
                chuangye: '创业板指',
                zhuanke50: '科创50'
            };
            window.open(`https://quote.eastmoney.com/center/gridlist.html#${indexNames[index]}`, '_blank');
        });
    });
    
    // 新闻筛选
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.news-item').forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = item.dataset.impact === filter ? 'block' : 'none';
                }
            });
        });
    });
    
    // 手动刷新按钮
    document.getElementById('refresh-btn').addEventListener('click', async () => {
        document.getElementById('update-time').textContent = '正在刷新数据...';
        await DataManager.refresh();
        renderAllData();
        document.getElementById('update-time').textContent = 
            `数据更新时间：${new Date().toLocaleString()}（实时数据来自天天基金）`;
    });
}

// ==================== 渲染其他静态数据模块 ====================
// 这些模块暂时使用静态数据
function renderCapitalFlow() {
    const mainFund = SAMPLE_DATA.capitalFlow.mainFund;
    const northFund = SAMPLE_DATA.capitalFlow.northFund;
    
    if (mainFund.value !== 0) {
        const mainValueEl = document.getElementById('main-fund-value');
        const mainAnalysisEl = document.getElementById('main-fund-analysis');
        const prefix = mainFund.value > 0 ? '+' : '';
        mainValueEl.textContent = `${prefix}${mainFund.value} ${mainFund.unit}`;
        mainValueEl.className = mainFund.value > 0 ? 'capital-value positive' : 'capital-value negative';
        mainAnalysisEl.textContent = mainFund.analysis || mainFund.trend || '';
    }
    
    if (northFund.value !== 0) {
        const northValueEl = document.getElementById('north-fund-value');
        const northAnalysisEl = document.getElementById('north-fund-analysis');
        const prefix = northFund.value > 0 ? '+' : '';
        northValueEl.textContent = `${prefix}${northFund.value} ${northFund.unit}`;
        northValueEl.className = northFund.value > 0 ? 'capital-value positive' : 'capital-value negative';
        northAnalysisEl.textContent = northFund.analysis || northFund.trend || '';
    }
    
    renderSectorFlow();
    renderFundFlow();
}

function renderSectorFlow() {
    const inflowList = document.getElementById('inflow-sectors');
    const outflowList = document.getElementById('outflow-sectors');
    
    // 清空容器
    inflowList.innerHTML = '';
    outflowList.innerHTML = '';
    
    if (SAMPLE_DATA.capitalFlow.sectorFunds) {
        const inflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.netFlow > 0).sort((a, b) => b.netFlow - a.netFlow).slice(0, 10);
        inflows.forEach(sector => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="sector-name">${sector.name}</span>
                <span class="sector-amount positive">+${sector.netFlow}亿</span>
            `;
            li.addEventListener('click', () => openSectorLink(sector.name));
            inflowList.appendChild(li);
        });
        
        const outflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.netFlow < 0).sort((a, b) => a.netFlow - b.netFlow).slice(0, 10);
        outflows.forEach(sector => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="sector-name">${sector.name}</span>
                <span class="sector-amount negative">${sector.netFlow}亿</span>
            `;
            li.addEventListener('click', () => openSectorLink(sector.name));
            outflowList.appendChild(li);
        });
    }
    
    if (inflowList.children.length === 0) {
        inflowList.innerHTML = '<li class="empty-state"><p>暂无数据</p></li>';
    }
    if (outflowList.children.length === 0) {
        outflowList.innerHTML = '<li class="empty-state"><p>暂无数据</p></li>';
    }
}

function renderFundFlow() {
    const container = document.getElementById('fund-flow-list');
    
    // 清空容器
    container.innerHTML = '';
    
    const fundCodes = ['510300', '588000', '515080', '510500'];
    
    fundCodes.forEach(code => {
        const realtimeData = DataManager.getFund(code);
        const staticData = SAMPLE_DATA.fundData[code];
        
        if (staticData) {
            const item = document.createElement('div');
            item.className = 'fund-flow-item';
            
            // 估算资金流向（基于涨跌幅变化）
            const change = parseFloat(realtimeData?.gszzl || staticData.change || 0);
            const flowClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
            const prefix = change > 0 ? '+' : '';
            
            item.innerHTML = `
                <span class="fund-flow-name">${realtimeData?.name || staticData.name}</span>
                <span class="fund-flow-value ${flowClass}">${prefix}${change.toFixed(2)}%</span>
            `;
            item.addEventListener('click', () => openFundModalWithRealtime(code));
            container.appendChild(item);
        }
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
    }
}

function renderFavorableSectors() {
    const currentList = document.getElementById('current-favorable-list');
    const current = SAMPLE_DATA.favorableSectors.current || [];
    
    // 清空容器
    currentList.innerHTML = '';
    
    current.forEach(sector => {
        const item = document.createElement('div');
        item.className = 'favorable-item';
        const tagClass = sector.sustainability === '强' ? '' : sector.sustainability === '中' ? 'medium' : 'low';
        item.innerHTML = `
            <div class="favorable-header">
                <span class="favorable-name">${sector.name}</span>
                <span class="favorable-tag ${tagClass}">${sector.sustainability || '中'}</span>
            </div>
            <div class="favorable-reason">${sector.reason}</div>
            <div class="favorable-meta">
                <span>资金流入：${sector.inflow > 0 ? '+' : ''}${sector.inflow}亿</span>
                <span>热点：${sector.hotStocks ? sector.hotStocks.slice(0, 3).join('、') : '--'}</span>
            </div>
        `;
        item.addEventListener('click', () => openSectorLink(sector.name));
        currentList.appendChild(item);
    });
    
    if (currentList.children.length === 0) {
        currentList.innerHTML = '<div class="empty-state"><p>暂无数据</p></li>';
    }
    
    // 未来利好板块
    const futureList = document.getElementById('future-favorable-list');
    const future = SAMPLE_DATA.favorableSectors.future || [];
    
    // 清空容器
    futureList.innerHTML = '';
    
    future.forEach(sector => {
        const item = document.createElement('div');
        item.className = 'favorable-item future';
        const tagClass = sector.potential === '高' ? '' : sector.potential === '中' ? 'medium' : 'low';
        item.innerHTML = `
            <div class="favorable-header">
                <span class="favorable-name">${sector.name}</span>
                <span class="favorable-tag ${tagClass}">${sector.potential || '中'}潜力</span>
            </div>
            <div class="favorable-reason">催化事件：${sector.catalyst}</div>
            <div class="favorable-meta">
                <span>预期时间：${sector.expectedTime}</span>
            </div>
        `;
        item.addEventListener('click', () => openSectorLink(sector.name));
        futureList.appendChild(item);
    });
    
    if (futureList.children.length === 0) {
        futureList.innerHTML = '<div class="empty-state"><p>暂无数据</p></li>';
    }
    
    // 板块轮动
    const rotation = SAMPLE_DATA.favorableSectors.rotation || {};
    document.getElementById('rotation-from').textContent = rotation.from ? rotation.from.join('、') : '--';
    document.getElementById('rotation-to').textContent = rotation.to ? rotation.to.join('、') : '--';
    document.getElementById('rotation-analysis').textContent = rotation.analysis || '--';
}

function renderRealtimeNews() {
    const container = document.getElementById('realtime-news');
    const news = SAMPLE_DATA.realtimeNews || [];
    
    // 清空容器
    container.innerHTML = '';
    
    if (news.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
        return;
    }
    
    news.forEach(item => {
        const newsItem = document.createElement('div');
        let impactClass = 'neutral';
        if (item.impact.includes('利好')) {
            impactClass = 'positive-news';
        } else if (item.impact.includes('利空')) {
            impactClass = 'negative-news';
        }
        
        newsItem.className = `news-item ${impactClass}`;
        newsItem.dataset.impact = item.impact.includes('利好') ? 'positive' : item.impact.includes('利空') ? 'negative' : 'neutral';
        
        newsItem.innerHTML = `
            <div class="news-header">
                <span class="news-title">${item.title}</span>
                <span class="news-time">${item.time}</span>
            </div>
            <div class="news-meta">
                <span>来源：${item.source}</span>
                <span class="news-impact ${getImpactClass(item.impact)}">${item.impact}</span>
                ${item.importance === '高' ? '<span class="news-importance">重要</span>' : ''}
            </div>
            <div class="news-summary">${item.summary}</div>
            ${item.relatedSectors && item.relatedSectors.length > 0 ? `
                <div class="news-sectors">
                    ${item.relatedSectors.map(s => `<span class="sector-tag">${s}</span>`).join('')}
                </div>
            ` : ''}
        `;
        
        newsItem.addEventListener('click', () => {
            if (item.sourceUrl) {
                window.open(item.sourceUrl, '_blank');
            }
        });
        
        container.appendChild(newsItem);
    });
}
