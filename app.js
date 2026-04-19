// ==================== 格式化工具函数 ====================
// 格式化数值变化显示
function formatChange(value) {
    if (value > 0) return '+' + value.toFixed(2);
    if (value < 0) return value.toFixed(2);
    return '0.00';
}

// 格式化涨跌百分比
function formatPercent(value) {
    if (value > 0) return '+' + value.toFixed(2) + '%';
    if (value < 0) return value.toFixed(2) + '%';
    return '0.00%';
}

// 格式化资金金额
function formatMoney(value) {
    if (value > 0) return '+' + value.toFixed(2) + '亿';
    if (value < 0) return value.toFixed(2) + '亿';
    return '0.00亿';
}

// ==================== 个人投资看板 主逻辑 ====================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化应用
    initApp();
});

// 全局变量
let charts = {};
let userData = getUserData();

// ==================== 初始化 ====================
function initApp() {
    initNavigation();
    initMobileMenu();
    initDateInputs();
    initModals();
    loadDashboard();
    updateTime();
    setInterval(updateTime, 60000);
}

// ==================== 导航功能 ====================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // 更新导航状态
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容区
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            
            // 加载对应内容
            switch(tabId) {
                case 'dashboard':
                    loadDashboard();
                    break;
                case 'search':
                    break;
                case 'capital':
                    loadCapitalFlow();
                    break;
                case 'watchlist':
                    loadWatchlist();
                    break;
                case 'history':
                    loadHistory();
                    break;
            }
            
            // 关闭移动端菜单
            document.getElementById('sidebar').classList.remove('open');
        });
    });
}

// ==================== 移动端菜单 ====================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // 点击外部关闭
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// ==================== 日期输入 ====================
function initDateInputs() {
    const today = SAMPLE_DATA.today;
    const reportDate = document.getElementById('reportDate');
    const historyStartDate = document.getElementById('historyStartDate');
    const historyEndDate = document.getElementById('historyEndDate');
    
    reportDate.value = today;
    historyEndDate.value = today;
    
    // 设置历史日期范围（最近30天）
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    historyStartDate.value = thirtyDaysAgo.toISOString().split('T')[0];
    
    // 日期选择事件
    reportDate.addEventListener('change', loadDashboard);
}

// ==================== 模态框 ====================
function initModals() {
    const addWatchBtn = document.getElementById('addWatchBtn');
    const closeModal = document.getElementById('closeModal');
    const cancelAdd = document.getElementById('cancelAdd');
    const confirmAdd = document.getElementById('confirmAdd');
    const modal = document.getElementById('addWatchModal');
    
    addWatchBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.getElementById('addCode').value = '';
        document.getElementById('addName').value = '';
    });
    
    [closeModal, cancelAdd].forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });
    
    confirmAdd.addEventListener('click', handleAddWatch);
    
    // ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.getElementById('fundDetailModal').classList.remove('active');
        }
    });
    
    // 搜索功能
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // 历史筛选
    document.getElementById('filterHistoryBtn').addEventListener('click', loadHistory);
    
    // 基金详情模态框
    const fundDetailModal = document.getElementById('fundDetailModal');
    const closeFundDetail = document.getElementById('closeFundDetail');
    
    closeFundDetail.addEventListener('click', () => {
        fundDetailModal.classList.remove('active');
    });
    
    // 点击模态框背景关闭
    fundDetailModal.addEventListener('click', (e) => {
        if (e.target === fundDetailModal) {
            fundDetailModal.classList.remove('active');
        }
    });
    
    // 板块详情模态框
    const sectorDetailModal = document.getElementById('sectorDetailModal');
    const closeSectorDetail = document.getElementById('closeSectorDetail');
    
    closeSectorDetail.addEventListener('click', () => {
        sectorDetailModal.classList.remove('active');
    });
    
    // 点击模态框背景关闭
    sectorDetailModal.addEventListener('click', (e) => {
        if (e.target === sectorDetailModal) {
            sectorDetailModal.classList.remove('active');
        }
    });
}

// ==================== 今日看板 ====================
function loadDashboard(date) {
    // 如果没有传入日期，使用输入框的日期
    if (!date) {
        date = document.getElementById('reportDate').value;
    }
    
    // 加载早间报告
    loadMorningReport(date);
    
    // 加载午后报告
    loadAfternoonReport(date);
    
    // 加载每日新闻
    loadDailyNews();
    
    // 加载快速自选
    loadQuickWatchlist();
    
    // 更新时间显示
    document.getElementById('updateTime').textContent = 
        `数据更新时间：${new Date().toLocaleString('zh-CN')}`;
}

function loadMorningReport(date) {
    const report = SAMPLE_DATA.morningReport;
    
    // 时间
    document.getElementById('morningTime').textContent = report.time;
    
    // 资金流向摘要 - 修复显示问题
    const fundFlowHtml = `
        <div class="summary-item">
            <div class="label">主力净流入</div>
            <div class="value ${report.fundFlowSummary.mainInflow >= 0 ? 'positive' : 'negative'}">${formatMoney(report.fundFlowSummary.mainInflow)}</div>
        </div>
        <div class="summary-item">
            <div class="label">散户净流入</div>
            <div class="value ${report.fundFlowSummary.retailInflow >= 0 ? 'positive' : 'negative'}">${formatMoney(report.fundFlowSummary.retailInflow)}</div>
        </div>
        <div class="summary-item">
            <div class="label">成交额</div>
            <div class="value">${report.fundFlowSummary.transaction.toFixed(1)}亿</div>
        </div>
        <div class="summary-item">
            <div class="label">环比变化</div>
            <div class="value ${report.fundFlowSummary.transactionChange >= 0 ? 'positive' : 'negative'}">
                ${formatPercent(report.fundFlowSummary.transactionChange).replace('%', '')}
            </div>
        </div>
    `;
    document.getElementById('fundFlowSummary').innerHTML = fundFlowHtml;
    
    // 添加资金流向分析
    loadFundFlowAnalysis();
    
    // 推荐基金
    const fundsHtml = report.recommendedFunds.map(fund => `
        <div class="fund-card" onclick="openFundDetail('${fund.code}')">
            <div class="fund-info">
                <h4>${fund.name}</h4>
                <span class="code">${fund.code}</span>
            </div>
            <div class="fund-change">
                <div class="percent ${fund.change >= 0 ? 'positive' : 'negative'}">
                    ${fund.change >= 0 ? '+' : ''}${fund.change}%
                </div>
                <div class="reason">${fund.reason}</div>
            </div>
        </div>
    `).join('');
    document.getElementById('recommendedFunds').innerHTML = fundsHtml;
    
    // 激进型基金推荐
    loadAggressiveFunds();
    
    // 风险提示
    const warningHtml = report.riskWarning.map(w => `<li>${w}</li>`).join('');
    document.getElementById('riskWarning').innerHTML = `<ul>${warningHtml}</ul>`;
    
    // 操作建议
    const adviceHtml = report.operationAdvice.map(a => `<li>${a}</li>`).join('');
    document.getElementById('operationAdvice').innerHTML = `<ul>${adviceHtml}</ul>`;
}

// ==================== 资金流向分析 ====================
function loadFundFlowAnalysis() {
    const analysis = FUND_FLOW_ANALYSIS;
    const container = document.getElementById('fundFlowAnalysis');
    
    if (!container) return;
    
    const html = `
        <div class="analysis-card main-fund-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">📊</span>
                <span class="analysis-title">主力资金分析</span>
            </div>
            <div class="analysis-trend">${analysis.mainFundAnalysis.trend}</div>
            <div class="analysis-details">${analysis.mainFundAnalysis.details}</div>
            <div class="analysis-sentiment ${analysis.mainFundAnalysis.sentiment === '谨慎' ? 'negative' : 'positive'}">
                市场情绪：${analysis.mainFundAnalysis.sentiment}
            </div>
        </div>
        
        <div class="analysis-card north-fund-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🌐</span>
                <span class="analysis-title">北向资金分析</span>
            </div>
            <div class="analysis-trend">${analysis.northFundAnalysis.trend}</div>
            <div class="analysis-details">${analysis.northFundAnalysis.details}</div>
            <div class="analysis-sentiment ${analysis.northFundAnalysis.sentiment === '观望' ? 'neutral' : ''}">
                外资态度：${analysis.northFundAnalysis.sentiment}
            </div>
        </div>
        
        <div class="analysis-card sector-rotation-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🔄</span>
                <span class="analysis-title">板块轮动分析</span>
            </div>
            <div class="analysis-trend">${analysis.sectorRotation.trend}</div>
            <div class="analysis-details">${analysis.sectorRotation.details}</div>
            <div class="analysis-conclusion">${analysis.sectorRotation.conclusion}</div>
        </div>
        
        <div class="analysis-card operation-advice-card">
            <div class="analysis-header">
                <span class="analysis-icon">💡</span>
                <span class="analysis-title">操作建议</span>
            </div>
            <div class="advice-section">
                <div class="advice-label">短期建议：</div>
                <div class="advice-content">${analysis.operationAdvice.shortTerm}</div>
            </div>
            <div class="advice-section">
                <div class="advice-label">中期建议：</div>
                <div class="advice-content">${analysis.operationAdvice.mediumTerm}</div>
            </div>
            <div class="advice-section">
                <div class="advice-label">风险提示：</div>
                <div class="risk-points">
                    ${analysis.operationAdvice.riskPoints.map(point => `<span class="risk-point">${point}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ==================== 每日新闻 ====================
function loadDailyNews() {
    const container = document.getElementById('dailyNews');
    
    if (!container || !DAILY_NEWS || DAILY_NEWS.length === 0) return;
    
    const newsHtml = DAILY_NEWS.map(news => {
        const impactClass = news.impact === '利好' ? 'positive' : (news.impact === '利空' ? 'negative' : 'neutral');
        return `
            <div class="news-item">
                <div class="news-header">
                    <span class="news-title">${news.title}</span>
                    <span class="news-impact ${impactClass}">${news.impact}</span>
                </div>
                <div class="news-meta">
                    <span class="news-source">${news.source}</span>
                    <span class="news-time">${news.time}</span>
                </div>
                <div class="news-summary">${news.summary}</div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = newsHtml;
}

function loadAfternoonReport(date) {
    const report = SAMPLE_DATA.afternoonReport;
    
    // 时间
    document.getElementById('afternoonTime').textContent = report.time;
    
    // 午后回顾
    document.getElementById('afternoonReview').innerHTML = `<p>${report.review}</p>`;
    
    // 板块轮动
    const sectorHtml = report.sectorRotation.map(s => `
        <div class="sector-item">
            <span class="sector-name">${s.sector}</span>
            <span class="sector-change ${s.change >= 0 ? 'positive' : 'negative'}">
                ${s.change >= 0 ? '+' : ''}${s.change}%
            </span>
        </div>
    `).join('');
    document.getElementById('sectorRotation').innerHTML = sectorHtml;
    
    // 明日展望
    document.getElementById('tomorrowOutlook').innerHTML = `<p>${report.outlook}</p>`;
}

function loadQuickWatchlist() {
    const watchlist = userData.watchlist.slice(0, 4);
    
    if (watchlist.length === 0) {
        document.getElementById('quickWatchlist').innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <p>暂无自选内容</p>
            </div>
        `;
        return;
    }
    
    const html = watchlist.map(item => `
        <div class="watchlist-item">
            <div class="name">${item.name}</div>
            <div class="code">${item.code}</div>
            <div class="price">${item.price.toFixed(3)}</div>
            <div class="change ${item.change >= 0 ? 'positive' : 'negative'}">
                ${item.change >= 0 ? '+' : ''}${item.change}%
            </div>
        </div>
    `).join('');
    
    document.getElementById('quickWatchlist').innerHTML = html;
}

// ==================== 基金/股票查询 ====================
function handleSearch() {
    const query = document.getElementById('searchInput').value.trim();
    const type = document.getElementById('searchType').value;
    
    if (!query) {
        showToast('请输入基金/股票代码', 'error');
        return;
    }
    
    let data = null;
    
    if (type === 'fund') {
        data = SAMPLE_DATA.fundData[query];
    } else {
        data = SAMPLE_DATA.stockData[query];
    }
    
    if (!data) {
        document.getElementById('searchResult').innerHTML = `
            <div class="empty-state">
                <p>未找到相关结果</p>
                <p class="hint">请检查代码是否正确，或尝试其他代码</p>
            </div>
        `;
        return;
    }
    
    renderSearchResult(data);
}

function renderSearchResult(data) {
    const changeClass = data.change >= 0 ? 'positive' : 'negative';
    const changeSign = data.change >= 0 ? '+' : '';
    
    let detailsHtml = '';
    
    if (data.type === 'fund') {
        detailsHtml = `
            <div class="detail-item">
                <div class="label">单位净值</div>
                <div class="value">${data.nav.toFixed(3)}</div>
            </div>
            <div class="detail-item">
                <div class="label">日涨跌</div>
                <div class="value ${changeClass}">${changeSign}${data.change}%</div>
            </div>
            <div class="detail-item">
                <div class="label">近1周</div>
                <div class="value ${data.weekChange >= 0 ? 'positive' : 'negative'}">
                    ${data.weekChange >= 0 ? '+' : ''}${data.weekChange}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1月</div>
                <div class="value ${data.monthChange >= 0 ? 'positive' : 'negative'}">
                    ${data.monthChange >= 0 ? '+' : ''}${data.monthChange}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1年</div>
                <div class="value ${data.yearChange >= 0 ? 'positive' : 'negative'}">
                    ${data.yearChange >= 0 ? '+' : ''}${data.yearChange}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">基金规模</div>
                <div class="value">${data.size}</div>
            </div>
        `;
    } else {
        detailsHtml = `
            <div class="detail-item">
                <div class="label">开盘价</div>
                <div class="value">${data.open.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">最高价</div>
                <div class="value">${data.high.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">最低价</div>
                <div class="value">${data.low.toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">成交量</div>
                <div class="value">${(data.volume / 10000).toFixed(0)}万</div>
            </div>
            <div class="detail-item">
                <div class="label">市盈率(PE)</div>
                <div class="value">${data.pe}</div>
            </div>
            <div class="detail-item">
                <div class="label">市净率(PB)</div>
                <div class="value">${data.pb}</div>
            </div>
            <div class="detail-item">
                <div class="label">流通市值</div>
                <div class="value">${data.marketCap}亿</div>
            </div>
            <div class="detail-item">
                <div class="label">近1月</div>
                <div class="value ${data.monthChange >= 0 ? 'positive' : 'negative'}">
                    ${data.monthChange >= 0 ? '+' : ''}${data.monthChange}%
                </div>
            </div>
        `;
    }
    
    const html = `
        <div class="result-header">
            <div>
                <div class="result-name">${data.name}</div>
                <div class="result-code">${data.code}</div>
            </div>
            <div class="result-price">
                <div class="price">${data.price.toFixed(3)}</div>
                <div class="change ${changeClass}">
                    ${changeSign}${data.change}% ${changeSign}${(data.dayChange || data.changePercent).toFixed(2)}
                </div>
            </div>
        </div>
        <div class="result-details">
            ${detailsHtml}
        </div>
        <button class="add-btn" onclick="addToWatchlist('${data.code}', '${data.name}', '${data.type}')" 
                style="width:100%;">
            ⭐ 添加到自选
        </button>
    `;
    
    document.getElementById('searchResult').innerHTML = html;
}

// ==================== 资金流向 ====================
function loadCapitalFlow() {
    const data = SAMPLE_DATA.capitalFlow;
    
    // 更新概览数据
    updateCapitalCard('mainFund', data.mainFund);
    updateCapitalCard('northFund', data.northFund);
    updateCapitalCard('southFund', data.southFund);
    
    // 绘制图表
    drawMainFundChart(data.mainFundHistory);
    drawNorthFundChart(data.northFundHistory);
    
    // 板块资金 - 添加点击功能
    const sectorHtml = data.sectorFunds.map(s => `
        <div class="sector-card ${s.change >= 0 ? 'up' : 'down'}" onclick="openSectorDetail('${s.sector}')">
            <div class="sector-info">
                <span class="sector-name">${s.sector}</span>
                <span class="sector-flow">${formatMoney(s.change)}</span>
            </div>
            <div class="sector-indicator">
                <span class="sector-change ${s.change >= 0 ? 'positive' : 'negative'}">
                    ${formatPercent(s.change).replace('%', '')}
                </span>
                <span class="sector-arrow">→</span>
            </div>
        </div>
    `).join('');
    document.getElementById('sectorFundList').innerHTML = sectorHtml;
}

// 打开板块详情
let sectorKlineChart = null;

function openSectorDetail(sectorName) {
    const sectorData = SECTOR_DATA[sectorName];
    if (!sectorData) return;
    
    // 填充板块详情数据
    document.getElementById('detailSectorName').textContent = sectorData.name;
    document.getElementById('detailSectorInflow').textContent = formatMoney(sectorData.mainInflow);
    document.getElementById('detailSectorInflow').className = `detail-value ${sectorData.mainInflow >= 0 ? 'positive' : 'negative'}`;
    document.getElementById('detailSectorChange').textContent = formatPercent(sectorData.change).replace('%', '');
    document.getElementById('detailSectorChange').className = `detail-change ${sectorData.change >= 0 ? 'up' : 'down'}`;
    
    // 板块龙头股
    const stocksHtml = sectorData.leadingStocks.map(stock => `
        <div class="leading-stock">
            <div class="stock-main">
                <span class="stock-name">${stock.name}</span>
                <span class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">${formatPercent(stock.change).replace('%', '')}</span>
            </div>
            <div class="stock-reason">${stock.reason}</div>
        </div>
    `).join('');
    document.getElementById('detailSectorStocks').innerHTML = stocksHtml;
    
    // 板块近期走势描述
    document.getElementById('detailSectorDescription').textContent = sectorData.description;
    
    // 操作建议
    const adviceClass = sectorData.change >= 0 ? 'advice-positive' : 'advice-negative';
    document.getElementById('detailSectorAdvice').innerHTML = `<div class="${adviceClass}">💡 ${sectorData.advice}</div>`;
    
    // 显示模态框
    document.getElementById('sectorDetailModal').classList.add('active');
    
    // 绘制K线图
    setTimeout(() => {
        drawSectorKlineChart(sectorData);
    }, 100);
}

// 绘制板块K线图
function drawSectorKlineChart(sectorData) {
    const chartDom = document.getElementById('sectorKlineChart');
    if (!chartDom || !sectorData.klineData || sectorData.klineData.length === 0) return;
    
    if (sectorKlineChart) {
        sectorKlineChart.dispose();
    }
    
    sectorKlineChart = echarts.init(chartDom);
    
    // 准备K线数据
    const klineData = sectorData.klineData.map(d => [d.open, d.close, d.low, d.high]);
    const dates = sectorData.klineData.map(d => d.date.slice(5));
    
    // 计算均线
    const closes = sectorData.klineData.map(d => d.close);
    const ma5 = calculateMA(5, closes);
    const ma10 = calculateMA(10, closes);
    const ma20 = calculateMA(20, closes);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: function(params) {
                let result = params[0].name + '<br/>';
                params.forEach(param => {
                    if (param.seriesType === 'candlestick') {
                        result += '开盘: ' + param.value[0].toFixed(2) + '<br/>';
                        result += '收盘: ' + param.value[1].toFixed(2) + '<br/>';
                        result += '最低: ' + param.value[2].toFixed(2) + '<br/>';
                        result += '最高: ' + param.value[3].toFixed(2);
                    } else {
                        result += param.marker + param.seriesName + ': ' + param.value.toFixed(2) + '<br/>';
                    }
                });
                return result;
            }
        },
        legend: {
            data: ['MA5', 'MA10', 'MA20'],
            top: 0,
            textStyle: { fontSize: 11 }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: {
                color: '#666',
                fontSize: 10,
                interval: 4,
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLine: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: {
                color: '#666',
                fontSize: 11
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                start: 0,
                end: 100,
                bottom: '2%'
            }
        ],
        series: [
            {
                name: 'K线',
                type: 'candlestick',
                data: klineData,
                itemStyle: {
                    color: '#e64340',     // 涨 - 红色
                    color0: '#09bb07',    // 跌 - 绿色
                    borderColor: '#e64340',
                    borderColor0: '#09bb07'
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: ma5,
                smooth: true,
                lineStyle: { width: 1, color: '#f39c12' },
                symbol: 'none'
            },
            {
                name: 'MA10',
                type: 'line',
                data: ma10,
                smooth: true,
                lineStyle: { width: 1, color: '#3498db' },
                symbol: 'none'
            },
            {
                name: 'MA20',
                type: 'line',
                data: ma20,
                smooth: true,
                lineStyle: { width: 1, color: '#9b59b6' },
                symbol: 'none'
            }
        ]
    };
    
    sectorKlineChart.setOption(option);
    
    window.addEventListener('resize', function() {
        if (sectorKlineChart) {
            sectorKlineChart.resize();
        }
    });
}

// 计算均线
function calculateMA(dayCount, data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        if (i < dayCount - 1) {
            result.push('-');
        } else {
            let sum = 0;
            for (let j = 0; j < dayCount; j++) {
                sum += data[i - j];
            }
            result.push((sum / dayCount).toFixed(2));
        }
    }
    return result;
}

function updateCapitalCard(type, data) {
    const changeClass = data.change >= 0 ? 'positive' : 'negative';
    const valueClass = data.value >= 0 ? 'positive' : 'negative';
    const sign = data.value >= 0 ? '+' : '';
    
    document.getElementById(`${type}Flow`).textContent = `${sign}${data.value.toFixed(2)}${data.unit}`;
    document.getElementById(`${type}Flow`).className = `capital-value ${valueClass}`;
    document.getElementById(`${type}Change`).textContent = `日变化 ${data.change >= 0 ? '+' : ''}${data.change}%`;
    document.getElementById(`${type}Change`).className = `capital-change ${changeClass}`;
}

function drawMainFundChart(historyData) {
    const chartDom = document.getElementById('mainFundChart');
    const myChart = charts.mainFund;
    
    if (myChart) {
        myChart.dispose();
    }
    
    const chart = echarts.init(chartDom);
    charts.mainFund = chart;
    
    const dates = historyData.map(d => d.date.slice(5));
    const values = historyData.map(d => d.value);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}亿'
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: { color: '#666' }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: {
                color: '#666',
                formatter: '{value}亿'
            }
        },
        series: [{
            name: '主力资金',
            type: 'bar',
            data: values,
            itemStyle: {
                color: function(params) {
                    return params.value >= 0 ? '#e64340' : '#09bb07';  /* 红涨绿跌 */
                }
            },
            barWidth: '50%'
        }],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10px',
            containLabel: true
        }
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

function drawNorthFundChart(historyData) {
    const chartDom = document.getElementById('northFundChart');
    const myChart = charts.northFund;
    
    if (myChart) {
        myChart.dispose();
    }
    
    const chart = echarts.init(chartDom);
    charts.northFund = chart;
    
    const dates = historyData.map(d => d.date.slice(5));
    const values = historyData.map(d => d.value);
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: dates,
            boundaryGap: false,
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: { color: '#666' }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: {
                color: '#666',
                formatter: '{value}亿'
            }
        },
        series: [{
            name: '北向资金',
            type: 'line',
            data: values,
            smooth: true,
            lineStyle: {
                color: '#1a73e8',
                width: 2
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(26, 115, 232, 0.3)' },
                    { offset: 1, color: 'rgba(26, 115, 232, 0.05)' }
                ])
            },
            itemStyle: {
                color: '#1a73e8'
            }
        }],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10px',
            containLabel: true
        }
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// ==================== 自选列表 ====================
function loadWatchlist() {
    const watchlist = userData.watchlist;
    const container = document.getElementById('watchlistBody');
    
    if (watchlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无自选内容</p>
                <p class="hint">点击上方"添加自选"按钮，添加您关注的基金或股票</p>
            </div>
        `;
        return;
    }
    
    const html = watchlist.map((item, index) => `
        <div class="watchlist-row">
            <div>
                <div class="name">${item.name}</div>
                <div class="code">${item.code}</div>
            </div>
            <div class="price">${item.price.toFixed(3)}</div>
            <div class="change ${item.change >= 0 ? 'positive' : 'negative'}">
                ${item.change >= 0 ? '+' : ''}${item.change}%
            </div>
            <div class="month-change">${item.monthChange >= 0 ? '+' : ''}${item.monthChange}%</div>
            <button class="delete-btn" onclick="deleteFromWatchlist(${index})" title="删除">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function handleAddWatch() {
    const type = document.getElementById('addType').value;
    const code = document.getElementById('addCode').value.trim();
    const name = document.getElementById('addName').value.trim();
    
    if (!code || !name) {
        showToast('请填写代码和名称', 'error');
        return;
    }
    
    // 检查是否已存在
    if (userData.watchlist.some(item => item.code === code)) {
        showToast('该自选已存在', 'error');
        return;
    }
    
    // 获取数据
    let data = null;
    if (type === 'fund') {
        data = SAMPLE_DATA.fundData[code];
    } else {
        data = SAMPLE_DATA.stockData[code];
    }
    
    if (data) {
        userData.watchlist.push({
            code: data.code,
            name: data.name,
            type: data.type,
            price: data.price,
            change: data.change || data.changePercent,
            monthChange: data.monthChange
        });
    } else {
        // 自定义添加
        userData.watchlist.push({
            code: code,
            name: name,
            type: type,
            price: 0,
            change: 0,
            monthChange: 0
        });
    }
    
    saveUserData(userData);
    document.getElementById('addWatchModal').classList.remove('active');
    loadWatchlist();
    showToast('添加成功', 'success');
}

function addToWatchlist(code, name, type) {
    if (userData.watchlist.some(item => item.code === code)) {
        showToast('该自选已存在', 'error');
        return;
    }
    
    let data = null;
    if (type === 'fund') {
        data = SAMPLE_DATA.fundData[code];
    } else {
        data = SAMPLE_DATA.stockData[code];
    }
    
    if (data) {
        userData.watchlist.push({
            code: data.code,
            name: data.name,
            type: data.type,
            price: data.price,
            change: data.change || data.changePercent,
            monthChange: data.monthChange
        });
        saveUserData(userData);
        showToast('已添加到自选', 'success');
    }
}

function deleteFromWatchlist(index) {
    userData.watchlist.splice(index, 1);
    saveUserData(userData);
    loadWatchlist();
    showToast('已删除', 'success');
}

// ==================== 历史报告 ====================
function loadHistory() {
    const startDate = document.getElementById('historyStartDate').value;
    const endDate = document.getElementById('historyEndDate').value;
    
    let reports = SAMPLE_DATA.historyReports;
    
    // 日期筛选
    if (startDate && endDate) {
        reports = reports.filter(r => r.date >= startDate && r.date <= endDate);
    }
    
    const container = document.getElementById('historyList');
    
    if (reports.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无符合条件的报告</p>
            </div>
        `;
        return;
    }
    
    const html = reports.map(report => `
        <div class="history-item" onclick="viewHistoryDetail('${report.date}')">
            <div class="history-date">${formatDate(report.date)}</div>
            <div class="history-summary">
                <strong>早间：</strong>${report.morning.summary}<br>
                <strong>午后：</strong>${report.afternoon.summary}
            </div>
            <div class="history-tags">
                ${report.tags.map(tag => `<span class="history-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function viewHistoryDetail(date) {
    const report = SAMPLE_DATA.historyReports.find(r => r.date === date);
    if (!report) return;
    
    const html = `
        <div class="report-card" style="margin-top: 16px;">
            <div class="report-header">
                <span class="report-badge morning">🌅 早间分析</span>
            </div>
            <div class="report-content">
                <p>${report.morning.summary}</p>
            </div>
        </div>
        <div class="report-card">
            <div class="report-header">
                <span class="report-badge afternoon">🌇 午后分析</span>
            </div>
            <div class="report-content">
                <p>${report.afternoon.summary}</p>
            </div>
        </div>
    `;
    
    // 在模态框中显示
    const modal = document.getElementById('addWatchModal');
    modal.querySelector('.modal-header h3').textContent = formatDate(date);
    modal.querySelector('.modal-body').innerHTML = html;
    modal.querySelector('.modal-footer').innerHTML = `
        <button class="btn-primary" onclick="closeDetailModal()">关闭</button>
    `;
    modal.classList.add('active');
}

function closeDetailModal() {
    const modal = document.getElementById('addWatchModal');
    modal.classList.remove('active');
    // 恢复添加自选弹窗的内容
    modal.querySelector('.modal-header h3').textContent = '添加自选';
    modal.querySelector('.modal-body').innerHTML = `
        <div class="form-group">
            <label>类型</label>
            <select id="addType" class="form-input">
                <option value="fund">基金</option>
                <option value="stock">股票</option>
            </select>
        </div>
        <div class="form-group">
            <label>代码</label>
            <input type="text" id="addCode" class="form-input" placeholder="请输入基金/股票代码">
        </div>
        <div class="form-group">
            <label>名称</label>
            <input type="text" id="addName" class="form-input" placeholder="请输入名称">
        </div>
    `;
    modal.querySelector('.modal-footer').innerHTML = `
        <button class="btn-secondary" id="cancelAdd">取消</button>
        <button class="btn-primary" id="confirmAdd">添加</button>
    `;
    
    // 重新绑定事件
    document.getElementById('cancelAdd').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    document.getElementById('confirmAdd').addEventListener('click', handleAddWatch);
}

// ==================== 工具函数 ====================
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    const mobileTimeEl = document.getElementById('mobileTime');
    if (mobileTimeEl) {
        mobileTimeEl.textContent = timeStr;
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==================== 激进型基金推荐 ====================
function loadAggressiveFunds() {
    const container = document.getElementById('aggressiveFunds');
    if (!container) return;
    
    const funds = SAMPLE_DATA.aggressiveFunds;
    
    const fundsHtml = `
        <div class="aggressive-funds-section" style="margin-top: 32px;">
            <h2>🚀 激进型推荐 <span class="aggressive-badge">高波动·高收益</span></h2>
            <div class="recommended-funds">
                ${funds.map(fund => `
                    <div class="fund-card aggressive" onclick="openFundDetail('${fund.code}')">
                        <div class="fund-info">
                            <h4>${fund.name}</h4>
                            <span class="code">${fund.code}</span>
                        </div>
                        <div class="fund-change">
                            <div class="percent positive">
                                ${fund.change >= 0 ? '+' : ''}${fund.change}%
                            </div>
                            <div class="reason">${fund.reason}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = fundsHtml;
}

// ==================== 基金详情页 ====================
let fundDetailChart = null;

function openFundDetail(code) {
    const fund = SAMPLE_DATA.fundData[code];
    if (!fund) {
        showToast('未找到该基金信息', 'error');
        return;
    }
    
    const modal = document.getElementById('fundDetailModal');
    
    // 填充基本信息
    document.getElementById('detailFundName').textContent = fund.name;
    document.getElementById('detailFundCode').textContent = fund.code;
    document.getElementById('detailFundNav').textContent = `净值：${fund.nav}（${fund.navDate}）`;
    
    const changeClass = fund.change >= 0 ? 'up' : 'down';
    const changeSign = fund.change >= 0 ? '+' : '';
    const changeEl = document.getElementById('detailFundChange');
    changeEl.className = `fund-detail-change ${changeClass}`;
    changeEl.textContent = `${changeSign}${fund.change}%`;
    
    // 填充收益数据
    fillChangeValue('detailDayChange', fund.dayChange);
    fillChangeValue('detailWeekChange', fund.weekChange);
    fillChangeValue('detailMonthChange', fund.monthChange);
    fillChangeValue('detailYearChange', fund.yearChange);
    
    // 填充基金信息
    document.getElementById('detailManager').textContent = fund.manager;
    document.getElementById('detailSize').textContent = fund.size;
    document.getElementById('detailNavDate').textContent = fund.navDate;
    document.getElementById('detailType').textContent = getFundTypeName(fund.type);
    
    // 填充基金描述
    document.getElementById('detailDescription').textContent = fund.description;
    
    // 显示模态框
    modal.classList.add('active');
    
    // 绘制净值走势图
    setTimeout(() => {
        drawNavChart(fund);
    }, 100);
}

function fillChangeValue(elementId, value) {
    const el = document.getElementById(elementId);
    const isUp = value >= 0;
    el.className = `value ${isUp ? 'up' : 'down'}`;
    el.textContent = `${isUp ? '+' : ''}${value}%`;
}

function getFundTypeName(type) {
    const typeMap = {
        'fund': '基金',
        'stock': '股票'
    };
    return typeMap[type] || type;
}

// 绘制净值走势图
function drawNavChart(fund) {
    const chartDom = document.getElementById('navChart');
    if (!chartDom || !fund.navHistory || fund.navHistory.length === 0) return;
    
    if (fundDetailChart) {
        fundDetailChart.dispose();
    }
    
    fundDetailChart = echarts.init(chartDom);
    
    // navHistory数据已经是按日期从旧到新排序的
    const dates = fund.navHistory.map(d => d.date.slice(5));
    const values = fund.navHistory.map(d => d.value);
    
    // 判断颜色趋势（首尾比较）
    const startValue = values[0];
    const endValue = values[values.length - 1];
    const isUp = endValue >= startValue;
    const lineColor = isUp ? '#e64340' : '#09bb07';
    const areaColor = isUp ? 'rgba(230, 67, 64, 0.1)' : 'rgba(9, 187, 7, 0.1)';
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const data = params[0];
                return `${data.name}<br/>净值: ${data.value.toFixed(4)}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            boundaryGap: false,
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: { 
                color: '#666',
                fontSize: 11,
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLine: { show: false },
            splitLine: { lineStyle: { color: '#f0f0f0' } },
            axisLabel: { color: '#666' }
        },
        series: [{
            name: '净值',
            type: 'line',
            data: values,
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            lineStyle: {
                color: lineColor,
                width: 2
            },
            itemStyle: {
                color: lineColor
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: areaColor },
                    { offset: 1, color: 'rgba(255, 255, 255, 0.05)' }
                ])
            }
        }]
    };
    
    fundDetailChart.setOption(option);
    
    window.addEventListener('resize', function() {
        if (fundDetailChart) {
            fundDetailChart.resize();
        }
    });
}
