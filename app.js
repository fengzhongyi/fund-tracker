// ==================== 应用初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    initAutoRefresh();
});

// ==================== 自动刷新功能 ====================
let refreshTimer = null;

function initAutoRefresh() {
    const toggleEl = document.getElementById('auto-refresh-toggle');
    const intervalEl = document.getElementById('refresh-interval');
    
    // 从localStorage读取设置
    const savedEnabled = localStorage.getItem('autoRefreshEnabled');
    const savedInterval = localStorage.getItem('autoRefreshInterval');
    
    if (savedEnabled !== null) {
        toggleEl.checked = savedEnabled === 'true';
    }
    if (savedInterval) {
        intervalEl.value = savedInterval;
    }
    
    // 设置自动刷新
    setupAutoRefresh();
    
    // 监听设置变化
    toggleEl.addEventListener('change', () => {
        localStorage.setItem('autoRefreshEnabled', toggleEl.checked);
        setupAutoRefresh();
    });
    
    intervalEl.addEventListener('change', () => {
        localStorage.setItem('autoRefreshInterval', intervalEl.value);
        setupAutoRefresh();
    });
}

function setupAutoRefresh() {
    const toggleEl = document.getElementById('auto-refresh-toggle');
    const intervalEl = document.getElementById('refresh-interval');
    
    // 清除现有定时器
    if (refreshTimer) {
        clearInterval(refreshTimer);
        refreshTimer = null;
    }
    
    // 如果启用自动刷新
    if (toggleEl.checked) {
        const interval = parseInt(intervalEl.value) * 1000;
        refreshTimer = setInterval(() => {
            checkForUpdates();
        }, interval);
    }
}

// 检查数据更新（通过比较更新时间）
let lastUpdateTime = DATA_UPDATE_TIME;

function checkForUpdates() {
    // 重新加载页面以获取最新数据
    // 使用fetch检查data.js是否有更新
    fetch('data.js?t=' + Date.now())
        .then(response => response.text())
        .then(text => {
            const match = text.match(/DATA_UPDATE_TIME\s*=\s*'([^']+)'/);
            if (match) {
                const newTime = match[1];
                if (newTime && newTime !== lastUpdateTime && newTime !== '') {
                    // 数据有更新，刷新页面
                    location.reload();
                }
            }
        })
        .catch(() => {
            // 忽略错误
        });
}

function initApp() {
    // 更新时间显示
    if (DATA_UPDATE_TIME) {
        document.getElementById('update-time').textContent = `数据更新时间：${DATA_UPDATE_TIME}`;
    } else {
        document.getElementById('update-time').textContent = '等待数据更新...';
    }
    
    // 渲染各模块
    renderRealtimeIndex();
    renderCapitalFlow();
    renderFavorableSectors();
    renderRecommendFunds();
    renderRealtimeNews();
    renderMyFunds();
    
    // 绑定事件
    bindEvents();
}

// ==================== 渲染实时大盘指数 ====================
function renderRealtimeIndex() {
    const indices = ['shangzhi', 'shengzheng', 'chuangye', 'zhuanke50'];
    const data = SAMPLE_DATA.realtimeIndex;
    
    indices.forEach(index => {
        const indexData = data[index];
        if (indexData && indexData.value) {
            const valueEl = document.getElementById(`${index}-value`);
            const changeEl = document.getElementById(`${index}-change`);
            const volumeEl = document.getElementById(`${index}-volume`);
            
            valueEl.textContent = indexData.value.toFixed(2);
            changeEl.textContent = indexData.change;
            volumeEl.textContent = indexData.volume || '';
            
            // 设置颜色：红涨绿跌
            const changeValue = parseFloat(indexData.change);
            if (changeValue > 0) {
                valueEl.className = 'index-value positive';
                changeEl.className = 'index-change positive';
            } else if (changeValue < 0) {
                valueEl.className = 'index-value negative';
                changeEl.className = 'index-change negative';
            } else {
                valueEl.className = 'index-value neutral';
                changeEl.className = 'index-change neutral';
            }
        }
    });
}

// ==================== 渲染资金流向 ====================
function renderCapitalFlow() {
    const mainFund = SAMPLE_DATA.capitalFlow.mainFund;
    const northFund = SAMPLE_DATA.capitalFlow.northFund;
    
    // 主力资金
    if (mainFund.value !== 0) {
        const mainValueEl = document.getElementById('main-fund-value');
        const mainAnalysisEl = document.getElementById('main-fund-analysis');
        const prefix = mainFund.value > 0 ? '+' : '';
        mainValueEl.textContent = `${prefix}${mainFund.value} ${mainFund.unit}`;
        mainValueEl.className = mainFund.value > 0 ? 'capital-value positive' : 'capital-value negative';
        mainAnalysisEl.textContent = mainFund.analysis || mainFund.trend || '';
    }
    
    // 北向资金
    if (northFund.value !== 0) {
        const northValueEl = document.getElementById('north-fund-value');
        const northAnalysisEl = document.getElementById('north-fund-analysis');
        const prefix = northFund.value > 0 ? '+' : '';
        northValueEl.textContent = `${prefix}${northFund.value} ${northFund.unit}`;
        northValueEl.className = northFund.value > 0 ? 'capital-value positive' : 'capital-value negative';
        northAnalysisEl.textContent = northFund.analysis || northFund.trend || '';
    }
    
    // 板块资金流向
    renderSectorFlow();
    
    // 基金资金流向
    renderFundFlow();
}

function renderSectorFlow() {
    const inflowList = document.getElementById('inflow-sectors');
    const outflowList = document.getElementById('outflow-sectors');
    
    if (SAMPLE_DATA.capitalFlow.sectorFunds) {
        const inflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.flow > 0).slice(0, 10);
        inflows.forEach(sector => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="sector-name">${sector.name}</span>
                <span class="sector-amount positive">+${sector.flow}亿</span>
            `;
            li.addEventListener('click', () => openSectorLink(sector.name));
            inflowList.appendChild(li);
        });
        
        const outflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.flow < 0).slice(0, 10);
        outflows.forEach(sector => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="sector-name">${sector.name}</span>
                <span class="sector-amount negative">${sector.flow}亿</span>
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
    const fundFlows = SAMPLE_DATA.capitalFlow.fundFlows || [];
    
    if (fundFlows.length === 0) {
        // 从fundData中获取
        const codes = Object.keys(SAMPLE_DATA.fundData);
        codes.forEach(code => {
            const fund = SAMPLE_DATA.fundData[code];
            if (fund.netFlow) {
                const item = document.createElement('div');
                item.className = 'fund-flow-item';
                const flowClass = fund.netFlow > 0 ? 'positive' : fund.netFlow < 0 ? 'negative' : 'neutral';
                const prefix = fund.netFlow > 0 ? '+' : '';
                item.innerHTML = `
                    <span class="fund-flow-name">${fund.name}</span>
                    <span class="fund-flow-value ${flowClass}">${prefix}${fund.netFlow}亿</span>
                `;
                item.addEventListener('click', () => openFundModal(code));
                container.appendChild(item);
            }
        });
    } else {
        fundFlows.forEach(fund => {
            const item = document.createElement('div');
            item.className = 'fund-flow-item';
            const flowClass = fund.netFlow > 0 ? 'positive' : fund.netFlow < 0 ? 'negative' : 'neutral';
            const prefix = fund.netFlow > 0 ? '+' : '';
            item.innerHTML = `
                <span class="fund-flow-name">${fund.name}</span>
                <span class="fund-flow-value ${flowClass}">${prefix}${fund.netFlow}亿</span>
            `;
            item.addEventListener('click', () => openFundModal(fund.code));
            container.appendChild(item);
        });
    }
    
    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
    }
}

// ==================== 渲染利好板块 ====================
function renderFavorableSectors() {
    // 当前利好板块
    const currentList = document.getElementById('current-favorable-list');
    const current = SAMPLE_DATA.favorableSectors.current || [];
    
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
        currentList.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
    }
    
    // 未来利好板块
    const futureList = document.getElementById('future-favorable-list');
    const future = SAMPLE_DATA.favorableSectors.future || [];
    
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
        futureList.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
    }
    
    // 板块轮动
    const rotation = SAMPLE_DATA.favorableSectors.rotation || {};
    document.getElementById('rotation-from').textContent = rotation.from ? rotation.from.join('、') : '--';
    document.getElementById('rotation-to').textContent = rotation.to ? rotation.to.join('、') : '--';
    document.getElementById('rotation-analysis').textContent = rotation.analysis || '--';
}

// ==================== 渲染买卖建议 ====================
function renderRecommendFunds() {
    const { buyList, sellList, holdList } = SAMPLE_DATA.recommendedFunds;
    
    // 买入建议
    const buyContainer = document.getElementById('buy-list');
    if (buyList && buyList.length > 0) {
        buyList.forEach(fund => {
            const card = createRecommendCard(fund, 'buy');
            buyContainer.appendChild(card);
        });
    } else {
        buyContainer.innerHTML = '<div class="empty-state"><p>暂无买入建议</p></div>';
    }
    
    // 卖出建议
    const sellContainer = document.getElementById('sell-list');
    if (sellList && sellList.length > 0) {
        sellList.forEach(fund => {
            const card = createRecommendCard(fund, 'sell');
            sellContainer.appendChild(card);
        });
    } else {
        sellContainer.innerHTML = '<div class="empty-state"><p>暂无卖出建议</p></div>';
    }
    
    // 持有观望
    const holdContainer = document.getElementById('hold-list');
    if (holdList && holdList.length > 0) {
        holdList.forEach(fund => {
            const card = createRecommendCard(fund, 'hold');
            holdContainer.appendChild(card);
        });
    } else {
        holdContainer.innerHTML = '<div class="empty-state"><p>暂无持有建议</p></div>';
    }
}

function createRecommendCard(fund, type) {
    const card = document.createElement('div');
    card.className = 'recommend-card';
    
    if (type === 'buy') {
        const changeClass = getChangeClass(fund.change);
        card.innerHTML = `
            <div class="recommend-header">
                <span class="recommend-name">${fund.name}</span>
                <span class="recommend-code">${fund.code}</span>
            </div>
            <div class="recommend-stats">
                <div class="recommend-stat">
                    <span class="recommend-stat-label">当前价</span>
                    <span class="recommend-stat-value">${fund.price || fund.nav}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">今日涨跌</span>
                    <span class="recommend-stat-value ${changeClass}">${fund.change}</span>
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
                    <span class="recommend-stat-value">${fund.price}</span>
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
        const changeClass = getChangeClass(fund.change);
        card.innerHTML = `
            <div class="recommend-header">
                <span class="recommend-name">${fund.name}</span>
                <span class="recommend-code">${fund.code}</span>
            </div>
            <div class="recommend-stats">
                <div class="recommend-stat">
                    <span class="recommend-stat-label">当前价</span>
                    <span class="recommend-stat-value">${fund.price || fund.nav}</span>
                </div>
                <div class="recommend-stat">
                    <span class="recommend-stat-label">今日涨跌</span>
                    <span class="recommend-stat-value ${changeClass}">${fund.change}</span>
                </div>
            </div>
            <div class="recommend-reason">${fund.reason || '建议继续持有观望'}</div>
        `;
    }
    
    card.addEventListener('click', () => openFundModal(fund.code));
    return card;
}

// ==================== 渲染实时新闻 ====================
function renderRealtimeNews() {
    const container = document.getElementById('realtime-news');
    const news = SAMPLE_DATA.realtimeNews || [];
    
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

// ==================== 渲染我的基金 ====================
function renderMyFunds() {
    const container = document.getElementById('my-funds-list');
    const fundCodes = ['510300', '588000', '515080', '510500', '006546', '110017'];
    
    fundCodes.forEach(code => {
        const fund = SAMPLE_DATA.fundData[code];
        if (fund && (fund.price || fund.nav)) {
            const card = document.createElement('div');
            card.className = 'my-fund-card';
            
            const changeClass = getChangeClass(fund.change);
            const flowClass = fund.netFlow > 0 ? 'positive' : fund.netFlow < 0 ? 'negative' : 'neutral';
            const flowPrefix = fund.netFlow > 0 ? '+' : '';
            
            card.innerHTML = `
                <div class="my-fund-header">
                    <span class="my-fund-name">${fund.name}</span>
                    <span class="my-fund-change ${changeClass}">${fund.change || '--'}</span>
                </div>
                <div class="my-fund-meta">
                    <span>净值：${fund.nav || '--'}</span>
                    <span>资金：${fund.netFlow ? flowPrefix + fund.netFlow + '亿' : '--'}</span>
                </div>
            `;
            
            card.addEventListener('click', () => openFundModal(code));
            container.appendChild(card);
        }
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
    }
}

// ==================== 辅助函数 ====================
function getChangeClass(change) {
    if (!change) return 'neutral';
    const value = parseFloat(String(change).replace('%', ''));
    if (value > 0) return 'positive';
    if (value < 0) return 'negative';
    return 'neutral';
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
function openFundModal(code) {
    const fund = SAMPLE_DATA.fundData[code];
    if (!fund) return;
    
    const modal = document.getElementById('fund-modal');
    
    document.getElementById('modal-fund-name').textContent = fund.name;
    document.getElementById('modal-fund-code').textContent = code;
    document.getElementById('modal-fund-nav').textContent = fund.nav || '--';
    document.getElementById('modal-nav-date').textContent = fund.navDate || '--';
    
    const changeEl = document.getElementById('modal-fund-change');
    changeEl.textContent = fund.change || '--';
    changeEl.className = `info-value ${getChangeClass(fund.change)}`;
    
    const flowEl = document.getElementById('modal-fund-flow');
    if (fund.netFlow) {
        const prefix = fund.netFlow > 0 ? '+' : '';
        flowEl.textContent = `${prefix}${fund.netFlow}亿`;
        flowEl.className = `info-value ${fund.netFlow > 0 ? 'positive' : 'negative'}`;
    } else {
        flowEl.textContent = '--';
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
}
