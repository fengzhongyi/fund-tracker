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
    reportDate.addEventListener('change', function() {
        loadDashboard(this.value);
    });
    
    // "今天"按钮点击事件
    const todayBtn = document.getElementById('todayBtn');
    if (todayBtn) {
        todayBtn.addEventListener('click', function() {
            reportDate.value = today;
            loadDashboard(today);
        });
    }
}

// ==================== 模态框 ====================
function initModals() {
    const addWatchBtn = document.getElementById('addWatchBtn');
    const closeModal = document.getElementById('closeModal');
    const cancelAdd = document.getElementById('cancelAdd');
    const confirmAdd = document.getElementById('confirmAdd');
    const modal = document.getElementById('addWatchModal');
    
    if (addWatchBtn) {
        addWatchBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.getElementById('addCode').value = '';
            document.getElementById('addName').value = '';
        });
    }
    
    [closeModal, cancelAdd].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }
    });
    
    confirmAdd.addEventListener('click', handleAddWatch);
    
    // ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.getElementById('fundDetailModal').classList.remove('active');
            document.getElementById('sectorDetailModal').classList.remove('active');
        }
    });
    
    // 搜索功能
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    // 历史筛选
    const filterHistoryBtn = document.getElementById('filterHistoryBtn');
    if (filterHistoryBtn) {
        filterHistoryBtn.addEventListener('click', loadHistory);
    }
    
    // 基金详情模态框
    const fundDetailModal = document.getElementById('fundDetailModal');
    const closeFundDetail = document.getElementById('closeFundDetail');
    
    if (closeFundDetail) {
        closeFundDetail.addEventListener('click', () => {
            fundDetailModal.classList.remove('active');
        });
    }
    
    // 点击模态框背景关闭
    fundDetailModal.addEventListener('click', (e) => {
        if (e.target === fundDetailModal) {
            fundDetailModal.classList.remove('active');
        }
    });
    
    // 板块详情模态框
    const sectorDetailModal = document.getElementById('sectorDetailModal');
    const closeSectorDetail = document.getElementById('closeSectorDetail');
    
    if (closeSectorDetail) {
        closeSectorDetail.addEventListener('click', () => {
            sectorDetailModal.classList.remove('active');
        });
    }
    
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
    
    // 更新页面标题显示当前日期
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        dateDisplay.textContent = date;
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
    const morningTimeEl = document.getElementById('morningTime');
    if (morningTimeEl) {
        morningTimeEl.textContent = report.time;
    }
    
    // 资金流向摘要 - 修复显示问题
    const fundFlowSummaryEl = document.getElementById('fundFlowSummary');
    if (fundFlowSummaryEl) {
        const fundFlowHtml = `
            <div class="summary-item">
                <div class="label">主力净流入</div>
                <div class="value ${report.fundFlowSummary.mainInflow >= 0 ? 'positive' : 'negative'}">${formatMoney(report.fundFlowSummary.mainInflow)}</div>
                <div class="data-source"><a href="${DATA_SOURCES.mainFund.url}" target="_blank" class="source-link">📊 数据来源</a></div>
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
        fundFlowSummaryEl.innerHTML = fundFlowHtml;
    }
    
    // 添加资金流向分析
    loadFundFlowAnalysis();
    
    // 推荐基金
    const recommendedFundsEl = document.getElementById('recommendedFunds');
    if (recommendedFundsEl) {
        const fundsHtml = report.recommendedFunds.map(fund => `
            <div class="fund-card" onclick="openFundDetail('${fund.code}')">
                <div class="fund-info">
                    <h4>${fund.name}</h4>
                    <span class="code">${fund.code}</span>
                    <span class="source-link-inline"><a href="${fund.sourceUrl}" target="_blank">查看详情</a></span>
                </div>
                <div class="fund-change">
                    <div class="percent ${fund.change >= 0 ? 'positive' : 'negative'}">
                        ${fund.change >= 0 ? '+' : ''}${fund.change}%
                    </div>
                    <div class="reason">${fund.reason}</div>
                </div>
            </div>
        `).join('');
        recommendedFundsEl.innerHTML = fundsHtml;
    }
    
    // 激进型基金推荐
    loadAggressiveFunds();
    
    // 风险提示
    const riskWarningEl = document.getElementById('riskWarning');
    if (riskWarningEl) {
        const warningHtml = report.riskWarning.map(w => `<li>${w}</li>`).join('');
        riskWarningEl.innerHTML = `<ul>${warningHtml}</ul>`;
    }
    
    // 操作建议
    const operationAdviceEl = document.getElementById('operationAdvice');
    if (operationAdviceEl) {
        const adviceHtml = report.operationAdvice.map(a => `<li>${a}</li>`).join('');
        operationAdviceEl.innerHTML = `<ul>${adviceHtml}</ul>`;
    }
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
                <a href="${DATA_SOURCES.mainFund.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.mainFundAnalysis.trend}</div>
            <div class="analysis-details">${analysis.mainFundAnalysis.details}</div>
            <div class="analysis-judgment">📌 判断：${analysis.mainFundAnalysis.judgment}</div>
            <div class="analysis-sentiment ${analysis.mainFundAnalysis.sentiment === '谨慎' ? 'negative' : 'positive'}">
                市场情绪：${analysis.mainFundAnalysis.sentiment}
            </div>
        </div>
        
        <div class="analysis-card north-fund-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🌐</span>
                <span class="analysis-title">北向资金分析</span>
                <a href="${DATA_SOURCES.northFund.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.northFundAnalysis.trend}</div>
            <div class="analysis-details">${analysis.northFundAnalysis.details}</div>
            <div class="analysis-judgment">📌 判断：${analysis.northFundAnalysis.judgment}</div>
            <div class="analysis-sentiment ${analysis.northFundAnalysis.sentiment === '观望' ? 'neutral' : ''}">
                外资态度：${analysis.northFundAnalysis.sentiment}
            </div>
        </div>
        
        <div class="analysis-card sector-rotation-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🔄</span>
                <span class="analysis-title">板块轮动分析</span>
                <a href="${DATA_SOURCES.sector.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.sectorRotation.trend}</div>
            <div class="analysis-details">${analysis.sectorRotation.details}</div>
            
            <div class="sector-flow-section">
                <div class="sector-flow-label">📈 资金流入板块：</div>
                <div class="sector-flow-list">
                    ${analysis.sectorRotation.inflowSectors.map(s => `
                        <div class="sector-flow-item inflow">
                            <span class="sector-name">${s.name}</span>
                            <span class="sector-amount">${s.amount}</span>
                            <span class="sector-reason">${s.reason}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="sector-flow-section">
                <div class="sector-flow-label">📉 资金流出板块：</div>
                <div class="sector-flow-list">
                    ${analysis.sectorRotation.outflowSectors.map(s => `
                        <div class="sector-flow-item outflow">
                            <span class="sector-name">${s.name}</span>
                            <span class="sector-amount">${s.amount}</span>
                            <span class="sector-reason">${s.reason}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
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
                    <span class="news-title">
                        ${news.sourceUrl ? `<a href="${news.sourceUrl}" target="_blank" class="news-title-link">${news.title}</a>` : news.title}
                    </span>
                    <span class="news-impact ${impactClass}">${news.impact}</span>
                </div>
                <div class="news-meta">
                    <span class="news-source">
                        ${news.sourceUrl ? `<a href="${news.sourceUrl}" target="_blank" class="source-link">${news.source}</a>` : news.source}
                    </span>
                    <span class="news-time">${news.time}</span>
                </div>
                <div class="news-summary">${news.summary}</div>
            </div>
        `;
    }).join('');
    
    // 添加新闻数据来源
    const sourceInfo = `
        <div class="data-source-footer">
            <span class="source-label">新闻来源：</span>
            <a href="${DATA_SOURCES.news.cctv.url}" target="_blank" class="source-link">新闻联播</a>
            <span class="separator">|</span>
            <a href="${DATA_SOURCES.news.finance.url}" target="_blank" class="source-link">财经新闻</a>
        </div>
    `;
    
    container.innerHTML = newsHtml + sourceInfo;
}

function loadAfternoonReport(date) {
    const report = SAMPLE_DATA.afternoonReport;
    
    const afternoonTimeEl = document.getElementById('afternoonTime');
    if (afternoonTimeEl) {
        afternoonTimeEl.textContent = report.time;
    }
    
    const afternoonReviewEl = document.getElementById('afternoonReview');
    if (afternoonReviewEl) {
        afternoonReviewEl.innerHTML = `<p>${report.review}</p>`;
    }
    
    const sectorRotationEl = document.getElementById('sectorRotation');
    if (sectorRotationEl) {
        const sectorHtml = report.sectorRotation.map(s => `
            <div class="sector-item">
                <span class="sector-name">${s.sector}</span>
                <span class="sector-change ${s.change >= 0 ? 'positive' : 'negative'}">
                    ${s.change >= 0 ? '+' : ''}${s.change}%
                </span>
            </div>
        `).join('');
        sectorRotationEl.innerHTML = sectorHtml;
    }
    
    const tomorrowOutlookEl = document.getElementById('tomorrowOutlook');
    if (tomorrowOutlookEl) {
        tomorrowOutlookEl.innerHTML = `<p>${report.outlook}</p>`;
    }
}

function loadQuickWatchlist() {
    const watchlist = userData.watchlist.slice(0, 4);
    const container = document.getElementById('quickWatchlist');
    
    if (!container) return;
    
    if (watchlist.length === 0) {
        container.innerHTML = `
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
    
    container.innerHTML = html;
}

// ==================== 激进型基金推荐 ====================
function loadAggressiveFunds() {
    const container = document.getElementById('aggressiveFunds');
    if (!container) return;
    
    const funds = SAMPLE_DATA.aggressiveFunds;
    
    const html = `
        <div class="report-card aggressive-funds">
            <div class="report-header">
                <span class="report-badge aggressive">🚀 激进型基金推荐</span>
                <span class="report-subtitle">高弹性高波动，适合风险承受能力较强的投资者</span>
            </div>
            <div class="aggressive-funds-grid">
                ${funds.map(fund => `
                    <div class="aggressive-fund-card" onclick="openFundDetail('${fund.code}')">
                        <div class="fund-header">
                            <div class="fund-name">${fund.name}</div>
                            <a href="${fund.sourceUrl}" target="_blank" class="source-link-inline" onclick="event.stopPropagation()">查看详情</a>
                        </div>
                        <div class="fund-code">${fund.code}</div>
                        <div class="fund-change ${fund.change >= 0 ? 'positive' : 'negative'}">
                            ${fund.change >= 0 ? '+' : ''}${fund.change}%
                        </div>
                        <div class="fund-reason">${fund.reason}</div>
                        <div class="fund-min">最低投资：${fund.minInvestment}</div>
                    </div>
                `).join('')}
            </div>
            <div class="risk-reminder">
                <span class="warning-icon">⚠️</span>
                <span>激进型基金波动较大，请在充分了解产品风险后谨慎投资，建议配置比例不超过资产的20%。</span>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
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
    
    renderSearchResult(data, type);
}

function renderSearchResult(data, type) {
    const changeClass = data.change >= 0 ? 'positive' : 'negative';
    const changeSign = data.change >= 0 ? '+' : '';
    const sourceUrl = data.sourceUrl || (type === 'fund' ? `https://fund.eastmoney.com/${data.code}.html` : `https://quote.eastmoney.com/${data.code}.html`);
    
    let detailsHtml = '';
    
    if (data.type === 'fund' || type === 'fund') {
        detailsHtml = `
            <div class="detail-item">
                <div class="label">单位净值</div>
                <div class="value">${data.nav ? data.nav.toFixed(3) : data.price.toFixed(3)}</div>
            </div>
            <div class="detail-item">
                <div class="label">日涨跌</div>
                <div class="value ${changeClass}">${changeSign}${data.dayChange || 0}%</div>
            </div>
            <div class="detail-item">
                <div class="label">近1周</div>
                <div class="value ${data.weekChange >= 0 ? 'positive' : 'negative'}">
                    ${data.weekChange >= 0 ? '+' : ''}${data.weekChange || 0}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1月</div>
                <div class="value ${data.monthChange >= 0 ? 'positive' : 'negative'}">
                    ${data.monthChange >= 0 ? '+' : ''}${data.monthChange || 0}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1年</div>
                <div class="value ${data.yearChange >= 0 ? 'positive' : 'negative'}">
                    ${data.yearChange >= 0 ? '+' : ''}${data.yearChange || 0}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">基金规模</div>
                <div class="value">${data.size || '--'}</div>
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
                <div class="value">${data.pe || '--'}</div>
            </div>
            <div class="detail-item">
                <div class="label">市净率(PB)</div>
                <div class="value">${data.pb || '--'}</div>
            </div>
            <div class="detail-item">
                <div class="label">流通市值</div>
                <div class="value">${data.marketCap || '--'}亿</div>
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
                    ${changeSign}${data.change || 0}% ${changeSign}${(data.dayChange || data.changePercent || 0).toFixed(2)}
                </div>
            </div>
        </div>
        <div class="result-details">
            ${detailsHtml}
        </div>
        <div class="result-actions">
            <a href="${sourceUrl}" target="_blank" class="btn-source">📊 查看详细数据</a>
            <button class="add-btn" onclick="addToWatchlist('${data.code}', '${data.name}', '${data.type || type}')">
                ⭐ 添加到自选
            </button>
        </div>
    `;
    
    document.getElementById('searchResult').innerHTML = html;
}

// ==================== 基金详情弹窗 ====================
let navChart = null;

function openFundDetail(fundCode) {
    const fundData = SAMPLE_DATA.fundData[fundCode];
    if (!fundData) return;
    
    document.getElementById('detailFundName').textContent = fundData.name;
    document.getElementById('detailFundCode').textContent = fundData.code;
    document.getElementById('detailFundNav').textContent = `净值：${fundData.nav ? fundData.nav.toFixed(3) : fundData.price.toFixed(3)}`;
    
    const changeClass = (fundData.dayChange || fundData.change) >= 0 ? 'up' : 'down';
    const changeSign = (fundData.dayChange || fundData.change) >= 0 ? '+' : '';
    document.getElementById('detailFundChange').textContent = `${changeSign}${fundData.dayChange || fundData.change}%`;
    document.getElementById('detailFundChange').className = `fund-detail-change ${changeClass}`;
    
    document.getElementById('detailDayChange').textContent = `${changeSign}${fundData.dayChange || 0}%`;
    document.getElementById('detailDayChange').className = `${(fundData.dayChange || 0) >= 0 ? 'positive' : 'negative'}`;
    
    const weekChange = fundData.weekChange || 0;
    document.getElementById('detailWeekChange').textContent = `${weekChange >= 0 ? '+' : ''}${weekChange}%`;
    document.getElementById('detailWeekChange').className = `${weekChange >= 0 ? 'positive' : 'negative'}`;
    
    const monthChange = fundData.monthChange || 0;
    document.getElementById('detailMonthChange').textContent = `${monthChange >= 0 ? '+' : ''}${monthChange}%`;
    document.getElementById('detailMonthChange').className = `${monthChange >= 0 ? 'positive' : 'negative'}`;
    
    const yearChange = fundData.yearChange || 0;
    document.getElementById('detailYearChange').textContent = `${yearChange >= 0 ? '+' : ''}${yearChange}%`;
    document.getElementById('detailYearChange').className = `${yearChange >= 0 ? 'positive' : 'negative'}`;
    
    document.getElementById('detailManager').textContent = fundData.manager || '--';
    document.getElementById('detailSize').textContent = fundData.size || '--';
    document.getElementById('detailNavDate').textContent = fundData.navDate || '--';
    document.getElementById('detailType').textContent = fundData.type === 'fund' ? '基金' : '股票';
    document.getElementById('detailDescription').textContent = fundData.description || '--';
    
    // 添加数据来源链接
    const sourceContainer = document.getElementById('fundDetailSource');
    if (sourceContainer) {
        sourceContainer.innerHTML = `
            <div class="detail-source">
                <span class="source-label">数据来源：</span>
                <a href="${fundData.sourceUrl || `https://fund.eastmoney.com/${fundCode}.html`}" target="_blank" class="source-link">
                    天天基金网 - ${fundData.name}
                </a>
            </div>
        `;
    }
    
    document.getElementById('fundDetailModal').classList.add('active');
    
    // 绘制净值走势图
    setTimeout(() => {
        if (fundData.navHistory && fundData.navHistory.length > 0) {
            drawNavChart(fundData.navHistory, fundData.code);
        }
    }, 100);
}

// 绘制净值走势图
function drawNavChart(navHistory, fundCode) {
    const chartDom = document.getElementById('navChart');
    if (!chartDom || !navHistory || navHistory.length === 0) return;
    
    if (navChart) {
        navChart.dispose();
    }
    
    navChart = echarts.init(chartDom);
    
    // 日期从左到右递增（已有数据已按日期排序）
    const dates = navHistory.map(d => d.date.slice(5)); // 格式：MM-DD
    const values = navHistory.map(d => d.value);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const idx = params[0].dataIndex;
                const date = navHistory[idx].date;
                return `${date}<br/>净值: ${params[0].value.toFixed(4)}`;
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
        series: [{
            name: '净值',
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
            },
            symbol: 'circle',
            symbolSize: 4
        }]
    };
    
    navChart.setOption(option);
    
    window.addEventListener('resize', function() {
        if (navChart) {
            navChart.resize();
        }
    });
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
    
    // 添加数据来源链接
    const capitalSources = document.getElementById('capitalSources');
    if (capitalSources) {
        capitalSources.innerHTML = `
            <div class="capital-data-sources">
                <span class="source-label">数据来源：</span>
                <a href="${DATA_SOURCES.mainFund.url}" target="_blank" class="source-link">主力资金流向</a>
                <span class="separator">|</span>
                <a href="${DATA_SOURCES.northFund.url}" target="_blank" class="source-link">北向资金</a>
                <span class="separator">|</span>
                <a href="${DATA_SOURCES.sector.url}" target="_blank" class="source-link">板块资金</a>
            </div>
        `;
    }
}

// 打开板块详情
let sectorKlineChart = null;

function openSectorDetail(sectorName) {
    const sectorData = SECTOR_DATA[sectorName];
    if (!sectorData) return;
    
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
    
    // 添加数据来源链接
    const sectorSourceContainer = document.getElementById('sectorDetailSource');
    if (sectorSourceContainer) {
        sectorSourceContainer.innerHTML = `
            <div class="sector-source">
                <span class="source-label">K线数据来源：</span>
                <a href="${DATA_SOURCES.sector.url}" target="_blank" class="source-link">东方财富板块中心</a>
            </div>
        `;
    }
    
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
    
    // 准备K线数据 - 日期从左到右递增
    const klineData = sectorData.klineData.map(d => [d.open, d.close, d.low, d.high]);
    // 日期格式：MM-DD，确保X轴从左到右递增
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
            bottom: '15%',
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
    
    // 日期从左到右递增
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
                    return params.value >= 0 ? '#e64340' : '#09bb07';
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
    
    // 日期从左到右递增
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
    
    if (!container) return;
    
    if (watchlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无自选内容</p>
                <p class="hint">点击上方"添加自选"按钮，添加您关注的基金或股票</p>
            </div>
        `;
        return;
    }
    
    const html = watchlist.map((item, index) => {
        const sourceUrl = item.type === 'fund' 
            ? `https://fund.eastmoney.com/${item.code}.html`
            : `https://quote.eastmoney.com/${item.code}.html`;
        return `
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
                <div class="row-actions">
                    <a href="${sourceUrl}" target="_blank" class="action-link" title="查看详情">🔗</a>
                    <button class="delete-btn" onclick="deleteFromWatchlist(${index})" title="删除">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
    
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
    
    saveUserData();
    loadWatchlist();
    showToast('添加成功', 'success');
    document.getElementById('addWatchModal').classList.remove('active');
}

function addToWatchlist(code, name, type) {
    // 检查是否已存在
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
    } else {
        userData.watchlist.push({
            code: code,
            name: name,
            type: type,
            price: 0,
            change: 0,
            monthChange: 0
        });
    }
    
    saveUserData();
    loadWatchlist();
    showToast('添加成功', 'success');
}

function deleteFromWatchlist(index) {
    userData.watchlist.splice(index, 1);
    saveUserData();
    loadWatchlist();
    showToast('删除成功', 'success');
}

// ==================== 历史报告 ====================
function loadHistory() {
    const startDate = document.getElementById('historyStartDate').value;
    const endDate = document.getElementById('historyEndDate').value;
    const container = document.getElementById('historyList');
    
    if (!container) return;
    
    // 生成模拟历史报告数据
    const reports = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        reports.push({
            date: dateStr,
            mainInflow: Math.random() > 0.5 ? -Math.random() * 500 : Math.random() * 200,
            marketClose: 3000 + Math.random() * 200,
            marketChange: (Math.random() - 0.5) * 4
        });
    }
    
    // 日期从左到右递增（最旧→最新）
    const html = reports.map(r => `
        <div class="history-item">
            <div class="history-date">${r.date}</div>
            <div class="history-market">
                <span class="market-close">上证 ${r.marketClose.toFixed(2)}</span>
                <span class="market-change ${r.marketChange >= 0 ? 'positive' : 'negative'}">
                    ${r.marketChange >= 0 ? '+' : ''}${r.marketChange.toFixed(2)}%
                </span>
            </div>
            <div class="history-flow ${r.mainInflow >= 0 ? 'positive' : 'negative'}">
                主力净流入：${formatMoney(r.mainInflow)}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html || '<div class="empty-state"><p>暂无历史数据</p></div>';
}

// ==================== 本地存储 ====================
function getUserData() {
    const data = localStorage.getItem('investmentUserData');
    return data ? JSON.parse(data) : { watchlist: [] };
}

function saveUserData() {
    localStorage.setItem('investmentUserData', JSON.stringify(userData));
}

// ==================== 时间更新 ====================
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN');
    
    const updateTimeEl = document.getElementById('updateTime');
    if (updateTimeEl) {
        updateTimeEl.textContent = `数据更新时间：${timeStr}`;
    }
    
    const mobileTimeEl = document.getElementById('mobileTime');
    if (mobileTimeEl) {
        mobileTimeEl.textContent = timeStr.split(' ')[1];
    }
}

// ==================== 提示消息 ====================
function showToast(message, type) {
    const toast = document.getElementById('toast');
    const messageEl = toast.querySelector('.toast-message');
    
    messageEl.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
