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

// ==================== 交易日判断函数 ====================

/**
 * 判断指定日期是否为交易日
 * @param {Date} date - 要判断的日期
 * @returns {boolean} - 是否为交易日
 */
function isTradingDay(date) {
    // 周末不是交易日
    const day = date.getDay();
    if (day === 0 || day === 6) return false;
    
    // 格式化日期字符串 YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${dayStr}`;
    
    // 法定节假日不是交易日
    if (HOLIDAYS_2026.includes(dateStr)) return false;
    
    return true;
}

/**
 * 判断当前是否为交易时间
 * A股交易时间：9:30-11:30, 13:00-15:00
 * @returns {boolean}
 */
function isTradingTime() {
    const now = new Date();
    
    // 首先检查是否为交易日
    if (!isTradingDay(now)) return false;
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;
    
    // 9:30-11:30 (570-690分钟) 或 13:00-15:00 (780-900分钟)
    return (time >= 570 && time <= 690) || (time >= 780 && time <= 900);
}

/**
 * 获取下一个交易日的日期
 * @param {Date} fromDate - 起始日期
 * @returns {Date} - 下一个交易日
 */
function getNextTradingDay(fromDate) {
    const nextDay = new Date(fromDate);
    nextDay.setDate(nextDay.getDate() + 1);
    
    let attempts = 0;
    while (!isTradingDay(nextDay) && attempts < 14) {
        nextDay.setDate(nextDay.getDate() + 1);
        attempts++;
    }
    
    return nextDay;
}

/**
 * 计算距离下一个交易日的倒计时
 * @returns {Object} - 包含天、小时、分钟数的对象
 */
function getNextTradingCountdown() {
    const now = new Date();
    const nextTradingDay = getNextTradingDay(now);
    
    // 设置为下一个交易日9:30
    const targetTime = new Date(nextTradingDay);
    targetTime.setHours(9, 30, 0, 0);
    
    const diff = targetTime - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes, date: nextTradingDay };
}

/**
 * 格式化倒计时显示
 */
function formatCountdown(countdown) {
    const dateStr = `${countdown.date.getMonth() + 1}月${countdown.date.getDate()}日`;
    if (countdown.days > 0) {
        return `${dateStr}（还有${countdown.days}天${countdown.hours}小时）`;
    } else if (countdown.hours > 0) {
        return `${dateStr}（还有${countdown.hours}小时${countdown.minutes}分钟）`;
    } else {
        return `${dateStr}（还有${countdown.minutes}分钟）`;
    }
}

/**
 * 获取当前市场状态
 * @returns {Object} - 包含status和message的对象
 */
function getMarketStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;
    
    // 格式化日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const dayStr = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${dayStr}`;
    
    // 检查是否为节假日
    if (HOLIDAYS_2026.includes(dateStr)) {
        return {
            status: 'holiday',
            message: '今日为法定节假日，休市',
            isTradingDay: false,
            isTradingTime: false
        };
    }
    
    // 周末
    if (day === 0 || day === 6) {
        const weekendDay = day === 0 ? '周日' : '周六';
        return {
            status: 'weekend',
            message: `今日${weekendDay}，休市`,
            isTradingDay: false,
            isTradingTime: false
        };
    }
    
    // 交易时间内
    if ((time >= 570 && time <= 690) || (time >= 780 && time <= 900)) {
        let session = '';
        if (time >= 570 && time <= 690) {
            session = '上午';
        } else {
            session = '下午';
        }
        return {
            status: 'trading',
            message: `交易中（${session}盘）`,
            isTradingDay: true,
            isTradingTime: true
        };
    }
    
    // 盘前
    if (time >= 0 && time < 570) {
        return {
            status: 'pre_market',
            message: '盘前时段，等待开盘',
            isTradingDay: true,
            isTradingTime: false
        };
    }
    
    // 午间休市
    if (time > 690 && time < 780) {
        return {
            status: 'lunch_break',
            message: '午间休市（11:30-13:00）',
            isTradingDay: true,
            isTradingTime: false
        };
    }
    
    // 盘后
    if (time > 900) {
        return {
            status: 'after_market',
            message: '已收盘',
            isTradingDay: true,
            isTradingTime: false
        };
    }
    
    return {
        status: 'unknown',
        message: '状态未知',
        isTradingDay: false,
        isTradingTime: false
    };
}

// ==================== 初始化 ====================
function initApp() {
    // 首先检查市场状态
    const marketStatus = getMarketStatus();
    
    // 更新页面标题显示市场状态
    updateMarketStatus(marketStatus);
    
    // 根据状态决定显示内容
    if (!marketStatus.isTradingDay) {
        // 非交易日，显示休市界面
        showHolidayUI(marketStatus);
    } else {
        // 交易日，初始化正常功能
        initNavigation();
        initMobileMenu();
        initDateInputs();
        initModals();
        
        // 检查数据状态
        if (SAMPLE_DATA.loadingStatus === 'loaded') {
            loadDashboard();
        } else {
            showLoadingUI();
            // 尝试从日程任务获取数据
            checkAndLoadData();
        }
    }
    
    updateTime();
    setInterval(updateTime, 60000);
}

/**
 * 更新页面标题的市场状态
 */
function updateMarketStatus(status) {
    const statusEl = document.getElementById('marketStatus');
    if (statusEl) {
        let statusClass = 'status-trading';
        let statusIcon = '🔴';
        
        if (!status.isTradingDay) {
            statusClass = 'status-closed';
            statusIcon = '⏸️';
        } else if (status.isTradingTime) {
            statusClass = 'status-trading';
            statusIcon = '🟢';
        } else {
            statusClass = 'status-waiting';
            statusIcon = '🟡';
        }
        
        statusEl.className = `market-status-badge ${statusClass}`;
        statusEl.innerHTML = `${statusIcon} ${status.message}`;
    }
}

/**
 * 显示非交易日界面
 */
function showHolidayUI(status) {
    const mainContent = document.getElementById('mainContent');
    const countdown = getNextTradingCountdown();
    
    mainContent.innerHTML = `
        <div class="holiday-container">
            <div class="holiday-icon">🏛️</div>
            <h1 class="holiday-title">今日休市</h1>
            <p class="holiday-message">${status.message}</p>
            
            <div class="countdown-card">
                <h3>📅 下一个交易日</h3>
                <div class="countdown-date">${countdown.date.getMonth() + 1}月${countdown.date.getDate()}日（${getWeekdayName(countdown.date.getDay())}）</div>
                <div class="countdown-timer">
                    <div class="countdown-item">
                        <span class="countdown-value">${countdown.days}</span>
                        <span class="countdown-label">天</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value">${countdown.hours}</span>
                        <span class="countdown-label">时</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value">${countdown.minutes}</span>
                        <span class="countdown-label">分</span>
                    </div>
                </div>
            </div>
            
            <div class="holiday-actions">
                <button class="btn-primary" onclick="viewHistoryData()">
                    📋 查看历史数据
                </button>
                <button class="btn-secondary" onclick="refreshData()">
                    🔄 刷新数据
                </button>
            </div>
            
            <div class="market-hours">
                <h4>🕐 A股交易时间</h4>
                <p>上午：09:30 - 11:30</p>
                <p>下午：13:00 - 15:00</p>
            </div>
            
            <div class="data-notice">
                <p>⚠️ 当前显示历史数据，实时数据将在交易日开盘后自动更新</p>
            </div>
        </div>
    `;
    
    // 添加临时样式
    addHolidayStyles();
}

/**
 * 获取星期几的名称
 */
function getWeekdayName(day) {
    const names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return names[day];
}

/**
 * 添加非交易日界面的样式
 */
function addHolidayStyles() {
    if (document.getElementById('holidayStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'holidayStyles';
    style.textContent = `
        .holiday-container {
            max-width: 600px;
            margin: 80px auto;
            text-align: center;
            padding: 40px;
        }
        
        .holiday-icon {
            font-size: 80px;
            margin-bottom: 20px;
        }
        
        .holiday-title {
            font-size: 32px;
            margin-bottom: 12px;
            color: #333;
        }
        
        .holiday-message {
            font-size: 18px;
            color: #666;
            margin-bottom: 40px;
        }
        
        .countdown-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px;
            padding: 30px;
            color: white;
            margin-bottom: 30px;
        }
        
        .countdown-card h3 {
            margin-bottom: 16px;
            font-size: 18px;
        }
        
        .countdown-date {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .countdown-timer {
            display: flex;
            justify-content: center;
            gap: 24px;
        }
        
        .countdown-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .countdown-value {
            font-size: 36px;
            font-weight: 700;
        }
        
        .countdown-label {
            font-size: 14px;
            opacity: 0.8;
        }
        
        .holiday-actions {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-bottom: 40px;
        }
        
        .market-hours {
            background: #f5f7fa;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .market-hours h4 {
            margin-bottom: 12px;
            color: #333;
        }
        
        .market-hours p {
            color: #666;
            margin: 4px 0;
        }
        
        .data-notice {
            background: #fff3cd;
            border: 1px solid #ffc107;
            border-radius: 8px;
            padding: 16px;
            color: #856404;
        }
        
        .btn-primary, .btn-secondary {
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .btn-primary {
            background: #667eea;
            color: white;
            border: none;
        }
        
        .btn-primary:hover {
            background: #5a6fd6;
        }
        
        .btn-secondary {
            background: white;
            color: #667eea;
            border: 2px solid #667eea;
        }
        
        .btn-secondary:hover {
            background: #f5f7fa;
        }
    `;
    document.head.appendChild(style);
}

/**
 * 显示数据加载中界面
 */
function showLoadingUI() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    dashboard.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <h2>📊 数据加载中...</h2>
            <p>正在从日程任务获取实时数据</p>
            <p class="loading-hint">请稍候，数据将自动更新</p>
        </div>
    `;
    
    // 添加加载样式
    addLoadingStyles();
}

/**
 * 添加加载动画样式
 */
function addLoadingStyles() {
    if (document.getElementById('loadingStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'loadingStyles';
    style.textContent = `
        .loading-container {
            text-align: center;
            padding: 100px 20px;
        }
        
        .loading-spinner {
            width: 60px;
            height: 60px;
            margin: 0 auto 30px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading-container h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 12px;
        }
        
        .loading-container p {
            color: #666;
            margin: 8px 0;
        }
        
        .loading-hint {
            font-size: 14px;
            color: #999;
        }
    `;
    document.head.appendChild(style);
}

/**
 * 检查并加载数据
 * 这个函数应该在日程任务执行后被调用
 */
function checkAndLoadData() {
    // 检查数据是否已加载
    if (SAMPLE_DATA.loadingStatus === 'loaded') {
        loadDashboard();
        return true;
    }
    
    // 如果数据仍然未加载，3秒后重试
    setTimeout(() => {
        checkAndLoadData();
    }, 3000);
    
    return false;
}

/**
 * 刷新数据（手动刷新按钮调用）
 */
function refreshData() {
    const marketStatus = getMarketStatus();
    
    if (!marketStatus.isTradingDay) {
        showHolidayUI(marketStatus);
    } else {
        showLoadingUI();
        // 触发数据刷新
        if (typeof window.triggerDataRefresh === 'function') {
            window.triggerDataRefresh();
        }
    }
}

/**
 * 查看历史数据
 */
function viewHistoryData() {
    // 初始化正常功能以便查看历史
    initNavigation();
    initMobileMenu();
    initDateInputs();
    initModals();
    
    // 显示历史数据（如果有的话）
    if (SAMPLE_DATA.historyReports && SAMPLE_DATA.historyReports.length > 0) {
        document.getElementById('history').classList.add('active');
    } else {
        alert('暂无历史数据');
    }
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
    const today = SAMPLE_DATA.today || new Date().toISOString().split('T')[0];
    const reportDate = document.getElementById('reportDate');
    const historyStartDate = document.getElementById('historyStartDate');
    const historyEndDate = document.getElementById('historyEndDate');
    
    if (reportDate) reportDate.value = today;
    if (historyEndDate) historyEndDate.value = today;
    
    // 设置历史日期范围（最近30天）
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    if (historyStartDate) {
        historyStartDate.value = thirtyDaysAgo.toISOString().split('T')[0];
    }
    
    // 日期选择事件
    if (reportDate) {
        reportDate.addEventListener('change', function() {
            loadDashboard(this.value);
        });
    }
    
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
    
    if (confirmAdd) {
        confirmAdd.addEventListener('click', handleAddWatch);
    }
    
    // ESC关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            const fundDetailModal = document.getElementById('fundDetailModal');
            const sectorDetailModal = document.getElementById('sectorDetailModal');
            if (fundDetailModal) fundDetailModal.classList.remove('active');
            if (sectorDetailModal) sectorDetailModal.classList.remove('active');
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
    if (fundDetailModal) {
        fundDetailModal.addEventListener('click', (e) => {
            if (e.target === fundDetailModal) {
                fundDetailModal.classList.remove('active');
            }
        });
    }
    
    // 板块详情模态框
    const sectorDetailModal = document.getElementById('sectorDetailModal');
    const closeSectorDetail = document.getElementById('closeSectorDetail');
    
    if (closeSectorDetail) {
        closeSectorDetail.addEventListener('click', () => {
            sectorDetailModal.classList.remove('active');
        });
    }
    
    if (sectorDetailModal) {
        sectorDetailModal.addEventListener('click', (e) => {
            if (e.target === sectorDetailModal) {
                sectorDetailModal.classList.remove('active');
            }
        });
    }
}

// ==================== 今日看板 ====================
function loadDashboard(date) {
    // 如果没有传入日期，使用输入框的日期
    if (!date) {
        const reportDate = document.getElementById('reportDate');
        date = reportDate ? reportDate.value : (SAMPLE_DATA.today || new Date().toISOString().split('T')[0]);
    }
    
    // 更新页面标题显示当前日期
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        dateDisplay.textContent = date;
    }
    
    // 检查是否有数据
    if (SAMPLE_DATA.loadingStatus !== 'loaded' || !SAMPLE_DATA.morningReport) {
        showNoDataUI(date);
        return;
    }
    
    // 检查是否为选中的日期
    const selectedDate = new Date(date);
    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    
    // 检查是否为交易日
    if (!isTradingDay(selectedDate)) {
        showDayOffUI(date);
        return;
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
    const updateTimeEl = document.getElementById('updateTime');
    if (updateTimeEl) {
        const updateTime = DATA_UPDATE_TIME ? new Date(DATA_UPDATE_TIME) : new Date();
        updateTimeEl.textContent = `数据更新时间：${updateTime.toLocaleString('zh-CN')}`;
    }
}

/**
 * 显示无数据界面
 */
function showNoDataUI(date) {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    dashboard.innerHTML = `
        <div class="no-data-container">
            <div class="no-data-icon">📊</div>
            <h2>暂无数据</h2>
            <p>当前日期：${date}</p>
            <p class="no-data-hint">数据将在交易日开盘后自动更新</p>
            <button class="refresh-btn" onclick="refreshData()">🔄 刷新</button>
        </div>
    `;
}

/**
 * 显示非交易日界面（在看板页面内）
 */
function showDayOffUI(date) {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    const countdown = getNextTradingCountdown();
    
    dashboard.innerHTML = `
        <div class="day-off-container">
            <div class="day-off-icon">🏛️</div>
            <h2>📅 ${date} 休市</h2>
            <p class="day-off-message">该日期为非交易日</p>
            
            <div class="mini-countdown">
                <span>下一个交易日：</span>
                <strong>${countdown.date.getMonth() + 1}月${countdown.date.getDate()}日</strong>
                <span>（${countdown.days}天${countdown.hours}小时${countdown.minutes}分后）</span>
            </div>
            
            <div class="day-off-actions">
                <button class="today-btn" onclick="goToToday()">📍 返回今天</button>
            </div>
        </div>
    `;
}

/**
 * 返回今天
 */
function goToToday() {
    const today = new Date().toISOString().split('T')[0];
    const reportDate = document.getElementById('reportDate');
    if (reportDate) {
        reportDate.value = today;
    }
    loadDashboard(today);
}

function loadMorningReport(date) {
    const report = SAMPLE_DATA.morningReport;
    if (!report) return;
    
    // 时间
    const morningTimeEl = document.getElementById('morningTime');
    if (morningTimeEl) {
        morningTimeEl.textContent = report.time || '--:--';
    }
    
    // 资金流向摘要
    const fundFlowSummaryEl = document.getElementById('fundFlowSummary');
    if (fundFlowSummaryEl && report.fundFlowSummary) {
        const summary = report.fundFlowSummary;
        const fundFlowHtml = `
            <div class="summary-item">
                <div class="label">主力净流入</div>
                <div class="value ${summary.mainInflow >= 0 ? 'positive' : 'negative'}">${formatMoney(summary.mainInflow)}</div>
                <div class="data-source"><a href="${DATA_SOURCES.mainFund.url}" target="_blank" class="source-link">📊 数据来源</a></div>
            </div>
            <div class="summary-item">
                <div class="label">散户净流入</div>
                <div class="value ${summary.retailInflow >= 0 ? 'positive' : 'negative'}">${formatMoney(summary.retailInflow)}</div>
            </div>
            <div class="summary-item">
                <div class="label">成交额</div>
                <div class="value">${(summary.transaction || 0).toFixed(1)}亿</div>
            </div>
            <div class="summary-item">
                <div class="label">环比变化</div>
                <div class="value ${summary.transactionChange >= 0 ? 'positive' : 'negative'}">
                    ${formatPercent(summary.transactionChange || 0).replace('%', '')}
                </div>
            </div>
        `;
        fundFlowSummaryEl.innerHTML = fundFlowHtml;
    }
    
    // 添加资金流向分析
    loadFundFlowAnalysis();
    
    // 推荐基金
    const recommendedFundsEl = document.getElementById('recommendedFunds');
    if (recommendedFundsEl && report.recommendedFunds) {
        const fundsHtml = report.recommendedFunds.map(fund => `
            <div class="fund-card" onclick="openFundDetail('${fund.code}')">
                <div class="fund-info">
                    <h4>${fund.name}</h4>
                    <span class="code">${fund.code}</span>
                    <span class="source-link-inline"><a href="${fund.sourceUrl || '#'}" target="_blank">查看详情</a></span>
                </div>
                <div class="fund-change">
                    <div class="percent ${fund.change >= 0 ? 'positive' : 'negative'}">
                        ${fund.change >= 0 ? '+' : ''}${fund.change}%
                    </div>
                    <div class="reason">${fund.reason || ''}</div>
                </div>
            </div>
        `).join('');
        recommendedFundsEl.innerHTML = fundsHtml;
    }
    
    // 激进型基金推荐
    loadAggressiveFunds();
    
    // 风险提示
    const riskWarningEl = document.getElementById('riskWarning');
    if (riskWarningEl && report.riskWarning) {
        const warningHtml = report.riskWarning.map(w => `<li>${w}</li>`).join('');
        riskWarningEl.innerHTML = `<ul>${warningHtml}</ul>`;
    }
    
    // 操作建议
    const operationAdviceEl = document.getElementById('operationAdvice');
    if (operationAdviceEl && report.operationAdvice) {
        const adviceHtml = report.operationAdvice.map(a => `<li>${a}</li>`).join('');
        operationAdviceEl.innerHTML = `<ul>${adviceHtml}</ul>`;
    }
}

// ==================== 资金流向分析 ====================
function loadFundFlowAnalysis() {
    const analysis = FUND_FLOW_ANALYSIS;
    const container = document.getElementById('fundFlowAnalysis');
    
    if (!container) return;
    
    if (!analysis || !analysis.mainFundAnalysis) {
        container.innerHTML = '<div class="empty-state"><p>暂无资金流向分析数据</p></div>';
        return;
    }
    
    const html = `
        <div class="analysis-card main-fund-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">📊</span>
                <span class="analysis-title">主力资金分析</span>
                <a href="${DATA_SOURCES.mainFund.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.mainFundAnalysis.trend || ''}</div>
            <div class="analysis-details">${analysis.mainFundAnalysis.details || ''}</div>
            ${analysis.mainFundAnalysis.judgment ? `<div class="analysis-judgment">📌 判断：${analysis.mainFundAnalysis.judgment}</div>` : ''}
            <div class="analysis-sentiment ${analysis.mainFundAnalysis.sentiment === '谨慎' ? 'negative' : 'positive'}">
                市场情绪：${analysis.mainFundAnalysis.sentiment || '未知'}
            </div>
        </div>
        
        <div class="analysis-card north-fund-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🌐</span>
                <span class="analysis-title">北向资金分析</span>
                <a href="${DATA_SOURCES.northFund.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.northFundAnalysis.trend || ''}</div>
            <div class="analysis-details">${analysis.northFundAnalysis.details || ''}</div>
            ${analysis.northFundAnalysis.judgment ? `<div class="analysis-judgment">📌 判断：${analysis.northFundAnalysis.judgment}</div>` : ''}
            <div class="analysis-sentiment">
                外资态度：${analysis.northFundAnalysis.sentiment || '未知'}
            </div>
        </div>
        
        <div class="analysis-card sector-rotation-analysis">
            <div class="analysis-header">
                <span class="analysis-icon">🔄</span>
                <span class="analysis-title">板块轮动分析</span>
                <a href="${DATA_SOURCES.sector.url}" target="_blank" class="source-badge">来源</a>
            </div>
            <div class="analysis-trend">${analysis.sectorRotation.trend || ''}</div>
            <div class="analysis-details">${analysis.sectorRotation.details || ''}</div>
            
            ${analysis.sectorRotation.inflowSectors && analysis.sectorRotation.inflowSectors.length > 0 ? `
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
            ` : ''}
            
            ${analysis.sectorRotation.outflowSectors && analysis.sectorRotation.outflowSectors.length > 0 ? `
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
            ` : ''}
            
            ${analysis.sectorRotation.conclusion ? `<div class="analysis-conclusion">${analysis.sectorRotation.conclusion}</div>` : ''}
        </div>
        
        <div class="analysis-card operation-advice-card">
            <div class="analysis-header">
                <span class="analysis-icon">💡</span>
                <span class="analysis-title">操作建议</span>
            </div>
            ${analysis.operationAdvice.shortTerm ? `
            <div class="advice-section">
                <div class="advice-label">短期建议：</div>
                <div class="advice-content">${analysis.operationAdvice.shortTerm}</div>
            </div>
            ` : ''}
            ${analysis.operationAdvice.mediumTerm ? `
            <div class="advice-section">
                <div class="advice-label">中期建议：</div>
                <div class="advice-content">${analysis.operationAdvice.mediumTerm}</div>
            </div>
            ` : ''}
            ${analysis.operationAdvice.riskPoints && analysis.operationAdvice.riskPoints.length > 0 ? `
            <div class="advice-section">
                <div class="advice-label">风险提示：</div>
                <div class="risk-points">
                    ${analysis.operationAdvice.riskPoints.map(point => `<span class="risk-point">${point}</span>`).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    container.innerHTML = html;
}

// ==================== 每日新闻 ====================
function loadDailyNews() {
    const container = document.getElementById('dailyNews');
    
    if (!container) return;
    
    if (!DAILY_NEWS || DAILY_NEWS.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>暂无新闻数据</p></div>';
        return;
    }
    
    const newsHtml = DAILY_NEWS.map(news => {
        const impactClass = news.impact === '利好' ? 'positive' : (news.impact === '利空' ? 'negative' : 'neutral');
        return `
            <div class="news-item">
                <div class="news-header">
                    <span class="news-title">
                        ${news.sourceUrl ? `<a href="${news.sourceUrl}" target="_blank" class="news-title-link">${news.title}</a>` : news.title}
                    </span>
                    <span class="news-impact ${impactClass}">${news.impact || '中性'}</span>
                </div>
                <div class="news-meta">
                    <span class="news-source">
                        ${news.sourceUrl ? `<a href="${news.sourceUrl}" target="_blank" class="source-link">${news.source}</a>` : news.source}
                    </span>
                    <span class="news-time">${news.time || ''}</span>
                </div>
                <div class="news-summary">${news.summary || ''}</div>
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
    
    if (!report) return;
    
    const afternoonTimeEl = document.getElementById('afternoonTime');
    if (afternoonTimeEl) {
        afternoonTimeEl.textContent = report.time || '--:--';
    }
    
    const afternoonReviewEl = document.getElementById('afternoonReview');
    if (afternoonReviewEl && report.review) {
        afternoonReviewEl.innerHTML = `<p>${report.review}</p>`;
    }
    
    const sectorRotationEl = document.getElementById('sectorRotation');
    if (sectorRotationEl && report.sectorRotation) {
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
    if (tomorrowOutlookEl && report.outlook) {
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
            <div class="price">${(item.price || 0).toFixed(3)}</div>
            <div class="change ${item.change >= 0 ? 'positive' : 'negative'}">
                ${item.change >= 0 ? '+' : ''}${item.change || 0}%
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
    
    if (!funds || funds.length === 0) {
        container.innerHTML = '';
        return;
    }
    
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
                            <a href="${fund.sourceUrl || '#'}" target="_blank" class="source-link-inline" onclick="event.stopPropagation()">查看详情</a>
                        </div>
                        <div class="fund-code">${fund.code}</div>
                        <div class="fund-change ${fund.change >= 0 ? 'positive' : 'negative'}">
                            ${fund.change >= 0 ? '+' : ''}${fund.change || 0}%
                        </div>
                        <div class="fund-reason">${fund.reason || ''}</div>
                        ${fund.minInvestment ? `<div class="fund-min">最低投资：${fund.minInvestment}</div>` : ''}
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
    const changeClass = (data.change || 0) >= 0 ? 'positive' : 'negative';
    const changeSign = (data.change || 0) >= 0 ? '+' : '';
    const sourceUrl = data.sourceUrl || (type === 'fund' ? `https://fund.eastmoney.com/${data.code}.html` : `https://quote.eastmoney.com/${data.code}.html`);
    
    let detailsHtml = '';
    
    if (data.type === 'fund' || type === 'fund') {
        detailsHtml = `
            <div class="detail-item">
                <div class="label">单位净值</div>
                <div class="value">${(data.nav || data.price || 0).toFixed(3)}</div>
            </div>
            <div class="detail-item">
                <div class="label">日涨跌</div>
                <div class="value ${changeClass}">${changeSign}${(data.dayChange || 0).toFixed(2)}%</div>
            </div>
            <div class="detail-item">
                <div class="label">近1周</div>
                <div class="value ${(data.weekChange || 0) >= 0 ? 'positive' : 'negative'}">
                    ${(data.weekChange || 0) >= 0 ? '+' : ''}${(data.weekChange || 0).toFixed(2)}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1月</div>
                <div class="value ${(data.monthChange || 0) >= 0 ? 'positive' : 'negative'}">
                    ${(data.monthChange || 0) >= 0 ? '+' : ''}${(data.monthChange || 0).toFixed(2)}%
                </div>
            </div>
            <div class="detail-item">
                <div class="label">近1年</div>
                <div class="value ${changeClass}">
                    ${changeSign}${(data.yearChange || 0).toFixed(2)}%
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
                <div class="value">${(data.open || 0).toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">最高价</div>
                <div class="value">${(data.high || 0).toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">最低价</div>
                <div class="value">${(data.low || 0).toFixed(2)}</div>
            </div>
            <div class="detail-item">
                <div class="label">成交量</div>
                <div class="value">${((data.volume || 0) / 10000).toFixed(0)}万</div>
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
                <div class="price">${(data.price || 0).toFixed(3)}</div>
                <div class="change ${changeClass}">
                    ${changeSign}${(data.change || 0).toFixed(2)}% ${changeSign}${(data.dayChange || data.changePercent || 0).toFixed(2)}
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

// ==================== 基金详情弹窗（包含日K线图）====================
let navChart = null;
let klineChart = null;

function openFundDetail(fundCode) {
    const fundData = SAMPLE_DATA.fundData[fundCode];
    if (!fundData) {
        showToast('未找到该基金数据', 'error');
        return;
    }
    
    document.getElementById('detailFundName').textContent = fundData.name || '--';
    document.getElementById('detailFundCode').textContent = fundData.code || '--';
    document.getElementById('detailFundNav').textContent = `净值：${(fundData.nav || fundData.price || 0).toFixed(3)}`;
    
    const dayChange = fundData.dayChange || fundData.change || 0;
    const changeClass = dayChange >= 0 ? 'up' : 'down';
    const changeSign = dayChange >= 0 ? '+' : '';
    document.getElementById('detailFundChange').textContent = `${changeSign}${dayChange.toFixed(2)}%`;
    document.getElementById('detailFundChange').className = `fund-detail-change ${changeClass}`;
    
    document.getElementById('detailDayChange').textContent = `${changeSign}${dayChange.toFixed(2)}%`;
    document.getElementById('detailDayChange').className = `${dayChange >= 0 ? 'positive' : 'negative'}`;
    
    const weekChange = fundData.weekChange || 0;
    document.getElementById('detailWeekChange').textContent = `${weekChange >= 0 ? '+' : ''}${weekChange.toFixed(2)}%`;
    document.getElementById('detailWeekChange').className = `${weekChange >= 0 ? 'positive' : 'negative'}`;
    
    const monthChange = fundData.monthChange || 0;
    document.getElementById('detailMonthChange').textContent = `${monthChange >= 0 ? '+' : ''}${monthChange.toFixed(2)}%`;
    document.getElementById('detailMonthChange').className = `${monthChange >= 0 ? 'positive' : 'negative'}`;
    
    const yearChange = fundData.yearChange || 0;
    document.getElementById('detailYearChange').textContent = `${yearChange >= 0 ? '+' : ''}${yearChange.toFixed(2)}%`;
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
        
        // 绘制日K线图（如果K线数据存在）
        const klineData = KLINE_DATA[fundCode];
        if (klineData && klineData.length > 0) {
            drawFundKlineChart(fundCode, fundData.name);
        }
    }, 100);
}

// ==================== 日K线图功能 ====================

/**
 * 绘制基金日K线图
 * @param {string} fundCode - 基金代码
 * @param {string} fundName - 基金名称
 */
function drawFundKlineChart(fundCode, fundName) {
    const chartDom = document.getElementById('fundKlineChart');
    if (!chartDom) return;
    
    const klineData = KLINE_DATA[fundCode];
    if (!klineData || klineData.length === 0) return;
    
    if (klineChart) {
        klineChart.dispose();
    }
    
    klineChart = echarts.init(chartDom);
    
    // 准备K线数据 [开盘, 收盘, 最低, 最高]
    const klineValues = klineData.map(d => [d.open, d.close, d.low, d.high]);
    // 日期
    const dates = klineData.map(d => d.date.slice(5)); // MM-DD格式
    
    // 收盘价用于计算均线
    const closes = klineData.map(d => d.close);
    const ma5 = calculateMA(5, closes);
    const ma10 = calculateMA(10, closes);
    const ma20 = calculateMA(20, closes);
    
    const option = {
        title: {
            text: `${fundName} 日K线图`,
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
            formatter: function(params) {
                let result = params[0].name + '<br/>';
                params.forEach(param => {
                    if (param.seriesType === 'candlestick') {
                        result += '开盘: ' + param.value[0].toFixed(3) + '<br/>';
                        result += '收盘: ' + param.value[1].toFixed(3) + '<br/>';
                        result += '最低: ' + param.value[2].toFixed(3) + '<br/>';
                        result += '最高: ' + param.value[3].toFixed(3) + '<br/>';
                    } else {
                        result += param.marker + param.seriesName + ': ' + (typeof param.value === 'number' ? param.value.toFixed(3) : '-') + '<br/>';
                    }
                });
                return result;
            }
        },
        legend: {
            data: ['MA5', 'MA10', 'MA20'],
            top: 30,
            textStyle: { fontSize: 11 }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '15%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: {
                color: '#666',
                fontSize: 10,
                interval: Math.floor(dates.length / 10)
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
                data: klineValues,
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
    
    klineChart.setOption(option);
    
    window.addEventListener('resize', function() {
        if (klineChart) {
            klineChart.resize();
        }
    });
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
    
    if (!data) {
        // 显示空状态
        document.getElementById('mainFundFlow').textContent = '--';
        document.getElementById('northFundFlow').textContent = '--';
        document.getElementById('southFundFlow').textContent = '--';
        document.getElementById('sectorFundList').innerHTML = '<div class="empty-state"><p>暂无资金流向数据</p></div>';
        return;
    }
    
    // 更新概览数据
    if (data.mainFund) updateCapitalCard('mainFund', data.mainFund);
    if (data.northFund) updateCapitalCard('northFund', data.northFund);
    if (data.southFund) updateCapitalCard('southFund', data.southFund);
    
    // 绘制图表
    if (data.mainFundHistory) drawMainFundChart(data.mainFundHistory);
    if (data.northFundHistory) drawNorthFundChart(data.northFundHistory);
    
    // 板块资金 - 添加点击功能
    if (data.sectorFunds && data.sectorFunds.length > 0) {
        const sectorHtml = data.sectorFunds.map(s => `
            <div class="sector-card ${s.change >= 0 ? 'up' : 'down'}" onclick="openSectorDetail('${s.sector}')">
                <div class="sector-info">
                    <span class="sector-name">${s.sector}</span>
                    <span class="sector-flow">${formatMoney(s.change)}</span>
                </div>
                <div class="sector-indicator">
                    <span class="sector-change ${s.change >= 0 ? 'positive' : 'negative'}">
                        ${formatPercent(s.change || 0).replace('%', '')}
                    </span>
                    <span class="sector-arrow">→</span>
                </div>
            </div>
        `).join('');
        document.getElementById('sectorFundList').innerHTML = sectorHtml;
    } else {
        document.getElementById('sectorFundList').innerHTML = '<div class="empty-state"><p>暂无板块资金数据</p></div>';
    }
    
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
    if (!sectorData) {
        showToast('暂无该板块数据', 'error');
        return;
    }
    
    document.getElementById('detailSectorName').textContent = sectorData.name || sectorName;
    document.getElementById('detailSectorInflow').textContent = formatMoney(sectorData.mainInflow || 0);
    document.getElementById('detailSectorInflow').className = `detail-value ${(sectorData.mainInflow || 0) >= 0 ? 'positive' : 'negative'}`;
    document.getElementById('detailSectorChange').textContent = formatPercent(sectorData.change || 0).replace('%', '');
    document.getElementById('detailSectorChange').className = `detail-change ${(sectorData.change || 0) >= 0 ? 'up' : 'down'}`;
    
    // 板块龙头股
    if (sectorData.leadingStocks && sectorData.leadingStocks.length > 0) {
        const stocksHtml = sectorData.leadingStocks.map(stock => `
            <div class="leading-stock">
                <div class="stock-main">
                    <span class="stock-name">${stock.name}</span>
                    <span class="stock-change ${(stock.change || 0) >= 0 ? 'positive' : 'negative'}">${formatPercent(stock.change || 0).replace('%', '')}</span>
                </div>
                <div class="stock-reason">${stock.reason || ''}</div>
            </div>
        `).join('');
        document.getElementById('detailSectorStocks').innerHTML = stocksHtml;
    } else {
        document.getElementById('detailSectorStocks').innerHTML = '<div class="empty-state"><p>暂无龙头股数据</p></div>';
    }
    
    // 板块近期走势描述
    document.getElementById('detailSectorDescription').textContent = sectorData.description || '暂无描述';
    
    // 操作建议
    const adviceClass = (sectorData.change || 0) >= 0 ? 'advice-positive' : 'advice-negative';
    document.getElementById('detailSectorAdvice').innerHTML = `<div class="${adviceClass}">💡 ${sectorData.advice || '暂无建议'}</div>`;
    
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
    const klineDataValues = sectorData.klineData.map(d => [d.open, d.close, d.low, d.high]);
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
                        result += param.marker + param.seriesName + ': ' + (typeof param.value === 'number' ? param.value.toFixed(2) : '-') + '<br/>';
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
                interval: Math.floor(dates.length / 8)
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
                data: klineDataValues,
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
            result.push((sum / dayCount).toFixed(3));
        }
    }
    return result;
}

function updateCapitalCard(type, data) {
    const changeClass = (data.change || 0) >= 0 ? 'positive' : 'negative';
    const valueClass = (data.value || 0) >= 0 ? 'positive' : 'negative';
    const sign = (data.value || 0) >= 0 ? '+' : '';
    
    document.getElementById(`${type}Flow`).textContent = `${sign}${(data.value || 0).toFixed(2)}${data.unit || '亿'}`;
    document.getElementById(`${type}Flow`).className = `capital-value ${valueClass}`;
    document.getElementById(`${type}Change`).textContent = `日变化 ${(data.change || 0) >= 0 ? '+' : ''}${(data.change || 0).toFixed(2)}%`;
    document.getElementById(`${type}Change`).className = `capital-change ${changeClass}`;
}

function drawMainFundChart(historyData) {
    const chartDom = document.getElementById('mainFundChart');
    
    if (!chartDom || !historyData || historyData.length === 0) return;
    
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
    
    if (!chartDom || !historyData || historyData.length === 0) return;
    
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
                color: '#3498db',
                width: 2
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(52, 152, 219, 0.3)' },
                    { offset: 1, color: 'rgba(52, 152, 219, 0.05)' }
                ])
            },
            itemStyle: {
                color: '#3498db'
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

// ==================== 自选股管理 ====================
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
    
    const rowsHtml = watchlist.map(item => {
        const changeClass = (item.change || 0) >= 0 ? 'positive' : 'negative';
        const changeSign = (item.change || 0) >= 0 ? '+' : '';
        
        return `
            <div class="table-row watchlist-row">
                <div class="td">
                    <span class="item-name">${item.name}</span>
                    <span class="item-code">${item.code}</span>
                </div>
                <div class="td">${(item.price || 0).toFixed(3)}</div>
                <div class="td ${changeClass}">${changeSign}${(item.change || 0).toFixed(2)}%</div>
                <div class="td">--</div>
                <div class="td">
                    <button class="delete-btn" onclick="removeFromWatchlist('${item.code}')">删除</button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = rowsHtml;
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
    const exists = userData.watchlist.some(item => item.code === code);
    if (exists) {
        showToast('该自选已存在', 'warning');
        return;
    }
    
    userData.watchlist.push({
        code,
        name,
        type,
        price: 0,
        change: 0,
        addedDate: new Date().toISOString()
    });
    
    saveUserData(userData);
    document.getElementById('addWatchModal').classList.remove('active');
    loadWatchlist();
    showToast('添加成功', 'success');
}

function removeFromWatchlist(code) {
    userData.watchlist = userData.watchlist.filter(item => item.code !== code);
    saveUserData(userData);
    loadWatchlist();
    showToast('已删除', 'success');
}

function addToWatchlist(code, name, type) {
    // 检查是否已存在
    const exists = userData.watchlist.some(item => item.code === code);
    if (exists) {
        showToast('该自选已存在', 'warning');
        return;
    }
    
    userData.watchlist.push({
        code,
        name,
        type,
        price: 0,
        change: 0,
        addedDate: new Date().toISOString()
    });
    
    saveUserData(userData);
    showToast('已添加到自选', 'success');
}

// ==================== 历史报告 ====================
function loadHistory() {
    const startDate = document.getElementById('historyStartDate').value;
    const endDate = document.getElementById('historyEndDate').value;
    const container = document.getElementById('historyList');
    
    if (!container) return;
    
    // 过滤历史报告
    let reports = SAMPLE_DATA.historyReports || [];
    
    if (startDate && endDate) {
        reports = reports.filter(r => {
            const reportDate = new Date(r.date);
            return reportDate >= new Date(startDate) && reportDate <= new Date(endDate);
        });
    }
    
    if (reports.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无历史报告</p>
                <p class="hint">历史报告将在每个交易日结束后自动生成</p>
            </div>
        `;
        return;
    }
    
    const html = reports.map(report => `
        <div class="history-item">
            <div class="history-date">${report.date}</div>
            <div class="history-summary">${report.summary || '暂无摘要'}</div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// ==================== 用户数据管理 ====================
function getUserData() {
    const stored = localStorage.getItem('investDashboardUserData');
    if (stored) {
        return JSON.parse(stored);
    }
    return {
        watchlist: []
    };
}

function saveUserData(data) {
    localStorage.setItem('investDashboardUserData', JSON.stringify(data));
}

// ==================== 时间更新 ====================
function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const mobileTimeEl = document.getElementById('mobileTime');
    if (mobileTimeEl) {
        mobileTimeEl.textContent = timeStr;
    }
    
    // 更新市场状态
    const marketStatus = getMarketStatus();
    updateMarketStatus(marketStatus);
}

// ==================== 提示消息 ====================
function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== 导出数据更新函数（供日程任务调用）====================
/**
 * 更新数据（供日程任务调用）
 * @param {Object} data - 包含所有数据的对象
 */
window.updateDashboardData = function(data) {
    if (data.today) SAMPLE_DATA.today = data.today;
    if (data.morningReport) SAMPLE_DATA.morningReport = data.morningReport;
    if (data.afternoonReport) SAMPLE_DATA.afternoonReport = data.afternoonReport;
    if (data.capitalFlow) SAMPLE_DATA.capitalFlow = data.capitalFlow;
    if (data.fundData) Object.assign(SAMPLE_DATA.fundData, data.fundData);
    if (data.stockData) Object.assign(SAMPLE_DATA.stockData, data.stockData);
    if (data.dailyNews) DAILY_NEWS.length = 0, DAILY_NEWS.push(...data.dailyNews);
    if (data.historyReports) SAMPLE_DATA.historyReports = data.historyReports;
    if (data.fundFlowAnalysis) Object.assign(FUND_FLOW_ANALYSIS, data.fundFlowAnalysis);
    if (data.sectorData) Object.assign(SECTOR_DATA, data.sectorData);
    if (data.klineData) Object.assign(KLINE_DATA, data.klineData);
    
    DATA_UPDATE_TIME = new Date().toISOString();
    SAMPLE_DATA.loadingStatus = 'loaded';
    
    // 重新加载看板
    loadDashboard();
};

/**
 * 触发数据刷新（供日程任务完成后调用）
 */
window.triggerDataRefresh = function() {
    // 如果有日程任务设置的数据更新函数，调用它
    if (typeof window.fetchLatestData === 'function') {
        window.fetchLatestData();
    } else {
        showToast('数据刷新已请求，请等待日程任务执行', 'info');
    }
};
