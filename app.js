// ==================== 应用初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // 更新时间显示
    if (DATA_UPDATE_TIME) {
        document.getElementById('update-time').textContent = `数据更新时间：${DATA_UPDATE_TIME}`;
    } else {
        document.getElementById('update-time').textContent = '等待数据更新...';
    }
    
    // 设置数据来源链接
    document.getElementById('main-source-link').href = DATA_SOURCES.mainFund.url;
    
    // 检查是否交易日
    if (!SAMPLE_DATA.isTradingDay) {
        showMarketClosed();
        return;
    }
    
    // 渲染数据
    renderIndexData();
    renderFundFlow();
    renderFundAnalysis();
    renderSectorFlow();
    renderStableFunds();
    renderAggressiveFunds();
    renderHotSectors();
    renderNews();
    renderMyFunds();
    
    // 绑定事件
    bindEvents();
}

// ==================== 显示休市提示 ====================
function showMarketClosed() {
    document.getElementById('market-closed-notice').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
    
    // 计算下一交易日
    const today = new Date();
    let nextTrading = findNextTradingDay(today);
    document.getElementById('next-trading-day').textContent = formatDate(nextTrading);
}

function findNextTradingDay(date) {
    let d = new Date(date);
    d.setDate(d.getDate() + 1);
    
    while (isHolidayOrWeekend(d)) {
        d.setDate(d.getDate() + 1);
    }
    
    return d;
}

function isHolidayOrWeekend(date) {
    const dateStr = formatDateToISO(date);
    const day = date.getDay();
    
    // 周末
    if (day === 0 || day === 6) return true;
    
    // 节假日
    if (HOLIDAYS_2026.includes(dateStr)) return true;
    
    return false;
}

function formatDateToISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `${year}-${month}-${day} ${weekdays[date.getDay()]}`;
}

// ==================== 渲染大盘指数 ====================
function renderIndexData() {
    const indices = ['shangzhi', 'shengzheng', 'chuangye', 'zhuanke50'];
    const data = SAMPLE_DATA.afternoonReport.indexPerformance || SAMPLE_DATA.morningReport.indexPerformance;
    
    indices.forEach(index => {
        const indexData = data[index];
        if (indexData && indexData.value) {
            const valueEl = document.getElementById(`${index}-value`);
            const changeEl = document.getElementById(`${index}-change`);
            
            valueEl.textContent = indexData.value.toFixed(2);
            changeEl.textContent = indexData.change;
            
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
function renderFundFlow() {
    const mainFund = SAMPLE_DATA.capitalFlow.mainFund;
    const northFund = SAMPLE_DATA.capitalFlow.northFund;
    
    // 主力资金
    const mainValueEl = document.getElementById('main-fund-value');
    const mainTrendEl = document.getElementById('main-fund-trend');
    
    if (mainFund.value !== 0) {
        const prefix = mainFund.value > 0 ? '+' : '';
        mainValueEl.textContent = `${prefix}${mainFund.value} ${mainFund.unit}`;
        mainValueEl.className = mainFund.value > 0 ? 'flow-value positive' : 'flow-value negative';
        mainTrendEl.textContent = mainFund.trend || mainFund.direction;
    }
    
    // 北向资金
    const northValueEl = document.getElementById('north-fund-value');
    const northTrendEl = document.getElementById('north-fund-trend');
    
    if (northFund.value !== 0) {
        const prefix = northFund.value > 0 ? '+' : '';
        northValueEl.textContent = `${prefix}${northFund.value} ${northFund.unit}`;
        northValueEl.className = northFund.value > 0 ? 'flow-value positive' : 'flow-value negative';
        northTrendEl.textContent = northFund.trend || northFund.direction;
    }
}

// ==================== 渲染资金流向分析 ====================
function renderFundAnalysis() {
    const analysis = FUND_FLOW_ANALYSIS;
    
    document.getElementById('main-analysis').textContent = analysis.mainFundAnalysis.summary || '--';
    document.getElementById('north-analysis').textContent = analysis.northFundAnalysis.summary || '--';
    
    const rising = analysis.sectorRotation.rising || [];
    const falling = analysis.sectorRotation.falling || [];
    document.getElementById('sector-rotation').textContent = 
        `领涨：${rising.slice(0, 3).join('、') || '--'}；领跌：${falling.slice(0, 3).join('、') || '--'}`;
}

// ==================== 渲染板块资金流向 ====================
function renderSectorFlow() {
    const inflowList = document.getElementById('inflow-sectors');
    const outflowList = document.getElementById('outflow-sectors');
    
    // 流入板块
    if (SAMPLE_DATA.capitalFlow.sectorFunds) {
        const inflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.flow > 0);
        inflows.forEach(sector => {
            const li = createSectorItem(sector, true);
            inflowList.appendChild(li);
        });
        
        const outflows = SAMPLE_DATA.capitalFlow.sectorFunds.filter(s => s.flow < 0);
        outflows.forEach(sector => {
            const li = createSectorItem(sector, false);
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

function createSectorItem(sector, isInflow) {
    const li = document.createElement('li');
    const prefix = sector.flow > 0 ? '+' : '';
    li.innerHTML = `
        <span class="sector-name">${sector.name}</span>
        <span class="sector-amount ${isInflow ? 'positive' : 'negative'}">${prefix}${sector.flow}亿</span>
    `;
    li.addEventListener('click', () => {
        window.open(`https://quote.eastmoney.com/center/boardlist.html#${sector.name}`, '_blank');
    });
    return li;
}

// ==================== 渲染稳健型基金 ====================
function renderStableFunds() {
    const container = document.getElementById('stable-funds');
    const funds = SAMPLE_DATA.morningReport.recommendedFunds || [];
    
    if (funds.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
        return;
    }
    
    funds.forEach(fund => {
        const card = createFundCard(fund);
        container.appendChild(card);
    });
}

// ==================== 渲染激进型基金 ====================
function renderAggressiveFunds() {
    const container = document.getElementById('aggressive-funds');
    const funds = SAMPLE_DATA.aggressiveFunds || [];
    
    if (funds.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
        return;
    }
    
    funds.forEach(fund => {
        const card = createAggressiveFundCard(fund);
        container.appendChild(card);
    });
}

function createFundCard(fund) {
    const card = document.createElement('div');
    card.className = 'fund-card';
    
    const changeClass = getChangeClass(fund.change);
    
    card.innerHTML = `
        <div class="fund-header">
            <span class="fund-name">${fund.name}</span>
            <span class="fund-code">${fund.code}</span>
        </div>
        <div class="fund-stats">
            <div class="stat-item">
                <span class="stat-label">今日涨跌</span>
                <span class="stat-value ${changeClass}">${fund.change}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">类型</span>
                <span class="stat-value">${fund.type || '稳健型'}</span>
            </div>
        </div>
        <div class="fund-reason">
            <strong>推荐理由：</strong>${fund.reason}
        </div>
    `;
    
    card.addEventListener('click', () => {
        openFundModal(fund.code);
    });
    
    return card;
}

function createAggressiveFundCard(fund) {
    const card = document.createElement('div');
    card.className = 'fund-card';
    
    const changeClass = getChangeClass(fund.change);
    
    card.innerHTML = `
        <div class="fund-header">
            <span class="fund-name">${fund.name}</span>
            <span class="fund-code">${fund.code}</span>
            <span class="risk-tag risk-high">高风险</span>
        </div>
        <div class="fund-stats">
            <div class="stat-item">
                <span class="stat-label">今日涨跌</span>
                <span class="stat-value ${changeClass}">${fund.change}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">本周</span>
                <span class="stat-value ${getChangeClass(fund.weekChange)}">${fund.weekChange || '--'}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">本月</span>
                <span class="stat-value ${getChangeClass(fund.monthChange)}">${fund.monthChange || '--'}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">今年</span>
                <span class="stat-value ${getChangeClass(fund.yearChange)}">${fund.yearChange || '--'}</span>
            </div>
        </div>
        <div class="fund-reason">
            <strong>推荐理由：</strong>${fund.reason}
        </div>
    `;
    
    card.addEventListener('click', () => {
        openFundModal(fund.code);
    });
    
    return card;
}

function getChangeClass(change) {
    if (!change) return 'neutral';
    const value = parseFloat(change.replace('%', ''));
    if (value > 0) return 'positive';
    if (value < 0) return 'negative';
    return 'neutral';
}

// ==================== 渲染热门板块 ====================
function renderHotSectors() {
    const risingList = document.getElementById('hot-rising-sectors');
    const fallingList = document.getElementById('hot-falling-sectors');
    
    const hotSectors = SAMPLE_DATA.morningReport.hotSectors || { rising: [], falling: [] };
    
    // 领涨板块
    hotSectors.rising.forEach(sector => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="sector-name">${sector.name}</span>
            <span class="sector-reason">${sector.reason || ''}</span>
        `;
        li.addEventListener('click', () => {
            window.open(`https://quote.eastmoney.com/center/boardlist.html#${sector.name}`, '_blank');
        });
        risingList.appendChild(li);
    });
    
    // 领跌板块
    hotSectors.falling.forEach(sector => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="sector-name">${sector.name}</span>
            <span class="sector-reason">${sector.reason || ''}</span>
        `;
        li.addEventListener('click', () => {
            window.open(`https://quote.eastmoney.com/center/boardlist.html#${sector.name}`, '_blank');
        });
        fallingList.appendChild(li);
    });
    
    if (risingList.children.length === 0) {
        risingList.innerHTML = '<li class="empty-state"><p>暂无数据</p></li>';
    }
    if (fallingList.children.length === 0) {
        fallingList.innerHTML = '<li class="empty-state"><p>暂无数据</p></li>';
    }
}

// ==================== 渲染新闻 ====================
function renderNews() {
    const container = document.getElementById('daily-news');
    
    if (DAILY_NEWS.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
        return;
    }
    
    DAILY_NEWS.forEach(news => {
        const item = document.createElement('div');
        let impactClass = '';
        if (news.impact.includes('利好') || news.impact.includes('利好')) {
            impactClass = 'positive-impact';
        } else if (news.impact.includes('利空')) {
            impactClass = 'negative-impact';
        }
        
        item.className = `news-item ${impactClass}`;
        item.innerHTML = `
            <div class="news-header">
                <span class="news-title">${news.title}</span>
                <span class="news-time">${news.time}</span>
            </div>
            <div class="news-meta">
                <span>来源：${news.source}</span>
                <span class="news-impact ${getImpactClass(news.impact)}">${news.impact}</span>
            </div>
            <div class="news-summary">${news.summary}</div>
        `;
        
        item.addEventListener('click', () => {
            if (news.sourceUrl) {
                window.open(news.sourceUrl, '_blank');
            }
        });
        
        container.appendChild(item);
    });
}

function getImpactClass(impact) {
    if (impact.includes('利好')) return 'positive';
    if (impact.includes('利空')) return 'negative';
    return 'neutral';
}

// ==================== 渲染我的基金 ====================
function renderMyFunds() {
    const container = document.getElementById('my-funds-list');
    
    const fundCodes = ['510300', '588000', '515080', '510500', '006546', '110017'];
    
    fundCodes.forEach(code => {
        const fund = SAMPLE_DATA.fundData[code];
        if (fund && fund.price) {
            const card = document.createElement('div');
            card.className = 'my-fund-card';
            
            const changeClass = getChangeClass(fund.change);
            
            card.innerHTML = `
                <div class="my-fund-header">
                    <span class="my-fund-name">${fund.name}</span>
                    <span class="my-fund-change ${changeClass}">${fund.change}</span>
                </div>
                <div class="my-fund-nav">净值：${fund.nav} (${fund.navDate})</div>
            `;
            
            card.addEventListener('click', () => {
                openFundModal(code);
            });
            
            container.appendChild(card);
        }
    });
    
    if (container.children.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>等待数据更新...</p></div>';
    }
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
    
    document.getElementById('modal-fund-scale').textContent = fund.scale || '--';
    document.getElementById('modal-fund-manager').textContent = fund.manager || '--';
    document.getElementById('modal-established').textContent = fund.established || '--';
    document.getElementById('modal-tracking').textContent = fund.tracking || '--';
    
    // 渲染收益表现
    renderPerformance(fund);
    
    // 渲染图表
    if (fund.navHistory && fund.navHistory.length > 0) {
        renderNavChart(fund.navHistory);
    }
    if (fund.klineData && fund.klineData.length > 0) {
        renderKlineChart(fund.klineData);
    }
    
    modal.classList.add('active');
}

function renderPerformance(fund) {
    const container = document.getElementById('performance-grid');
    container.innerHTML = '';
    
    const performances = [
        { label: '近一周', value: fund.weekChange },
        { label: '近一月', value: fund.monthChange },
        { label: '近三月', value: fund.threeMonthChange },
        { label: '今年来', value: fund.yearChange },
        { label: '近三年', value: fund.threeYearChange }
    ];
    
    performances.forEach(p => {
        if (p.value) {
            const item = document.createElement('div');
            item.className = 'performance-item';
            item.innerHTML = `
                <span class="performance-label">${p.label}</span>
                <span class="performance-value ${getChangeClass(p.value)}">${p.value}</span>
            `;
            container.appendChild(item);
        }
    });
}

function renderNavChart(data) {
    const chartDom = document.getElementById('fund-chart');
    const myChart = echarts.init(chartDom);
    
    const dates = data.map(d => d.date).reverse();
    const values = data.map(d => d.value).reverse();
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLabel: {
                color: '#aaa',
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#aaa',
                fontSize: 10
            }
        },
        series: [{
            data: values,
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#e64340',
                width: 2
            },
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
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLabel: {
                color: '#aaa',
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#aaa',
                fontSize: 10
            }
        },
        series: [{
            type: 'candlestick',
            data: ohlc,
            itemStyle: {
                color: '#e64340',        // 阳线（涨）红色
                color0: '#09bb07',       // 阴线（跌）绿色
                borderColor: '#e64340',  // 阳线边框
                borderColor0: '#09bb07'  // 阴线边框
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
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
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
}
