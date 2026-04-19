// ==================== 示例数据文件 ====================
// 实际使用时，请替换为真实数据或对接API

const SAMPLE_DATA = {
    // 今日日期
    today: new Date().toISOString().split('T')[0],
    
    // 早间报告
    morningReport: {
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        fundFlowSummary: {
            mainInflow: 128.56,      // 亿元
            mainPercent: 3.2,
            retailInflow: -45.3,
            retailPercent: -1.1,
            transaction: 4521.8,     // 亿元
            transactionChange: 12.5
        },
        recommendedFunds: [
            {
                code: '510300',
                name: '沪深300ETF',
                change: 1.85,
                reason: '大盘蓝筹，稳健配置'
            },
            {
                code: '159915',
                name: '创业板ETF',
                change: 2.34,
                reason: '成长性强，弹性好'
            },
            {
                code: '512880',
                name: '证券ETF',
                change: 3.12,
                reason: '受益市场活跃度提升'
            },
            {
                code: '006327',
                name: '纳斯达克100ETF',
                change: 0.85,
                reason: '海外资产分散风险'
            }
        ],
        riskWarning: [
            '外围市场波动加大，需关注美股走势',
            '近期热门板块换手率高，警惕追高风险',
            '部分小市值股票估值偏高，注意基本面'
        ],
        operationAdvice: [
            '控制仓位在6-7成，避免满仓操作',
            '关注业绩预增的白马股机会',
            '逢低布局优质龙头，不盲目追涨',
            '分散配置不同行业降低风险'
        ]
    },
    
    // 午后报告
    afternoonReport: {
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        review: '午后三大指数维持震荡走势，沪指微涨0.35%，创业板指表现较强上涨1.2%。两市成交额较上午有所萎缩，全天预计成交8000亿元左右。板块方面，半导体、新能源汽车板块表现活跃，消费电子板块午后异动拉升。',
        sectorRotation: [
            { sector: '半导体', change: 2.8, status: '领涨' },
            { sector: '新能源汽车', change: 1.9, status: '活跃' },
            { sector: '消费电子', change: 1.5, status: '拉升' },
            { sector: '房地产', change: -0.8, status: '回调' },
            { sector: '旅游酒店', change: -1.2, status: '走弱' }
        ],
        outlook: '明日关注美联储官员讲话对市场情绪的影响。操作上建议保持现有仓位，关注科技成长板块的持续性，如成交量配合有望挑战前期高点。'
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: {
            value: 128.56,
            change: 3.2,
            unit: '亿元'
        },
        northFund: {
            value: 45.78,
            change: 12.3,
            unit: '亿元'
        },
        southFund: {
            value: -23.45,
            change: -5.6,
            unit: '亿元'
        },
        mainFundHistory: [
            { date: '2024-01-15', value: 85.3 },
            { date: '2024-01-16', value: 112.4 },
            { date: '2024-01-17', value: -45.6 },
            { date: '2024-01-18', value: 156.7 },
            { date: '2024-01-19', value: 128.5 }
        ],
        northFundHistory: [
            { date: '2024-01-15', value: 32.1 },
            { date: '2024-01-16', value: 56.8 },
            { date: '2024-01-17', value: 28.4 },
            { date: '2024-01-18', value: 78.2 },
            { date: '2024-01-19', value: 45.7 }
        ],
        sectorFunds: [
            { sector: '半导体', change: 15.8 },
            { sector: '新能源', change: 12.3 },
            { sector: '人工智能', change: 8.5 },
            { sector: '医药生物', change: -3.2 },
            { sector: '房地产', change: -8.7 },
            { sector: '旅游酒店', change: -12.4 }
        ]
    },
    
    // 基金/股票搜索示例数据
    fundData: {
        '510300': {
            name: '沪深300ETF',
            code: '510300',
            type: 'fund',
            price: 3.85,
            change: 1.85,
            dayChange: 0.07,
            weekChange: 2.3,
            monthChange: 5.8,
            yearChange: 12.5,
            nav: 3.82,           // 净值
            navDate: '2024-01-19',
            manager: '华夏基金',
            size: '280.5亿'
        },
        '159915': {
            name: '创业板ETF',
            code: '159915',
            type: 'fund',
            price: 2.15,
            change: 2.34,
            dayChange: 0.05,
            weekChange: 3.5,
            monthChange: 8.2,
            yearChange: 18.6,
            nav: 2.12,
            navDate: '2024-01-19',
            manager: '易方达',
            size: '156.8亿'
        },
        '512880': {
            name: '证券ETF',
            code: '512880',
            type: 'fund',
            price: 1.28,
            change: 3.12,
            dayChange: 0.04,
            weekChange: 5.2,
            monthChange: 12.5,
            yearChange: 25.3,
            nav: 1.26,
            navDate: '2024-01-19',
            manager: '国泰基金',
            size: '98.6亿'
        },
        '006327': {
            name: '纳斯达克100ETF',
            code: '006327',
            type: 'fund',
            price: 1.56,
            change: 0.85,
            dayChange: 0.01,
            weekChange: 1.2,
            monthChange: 4.5,
            yearChange: 35.8,
            nav: 1.55,
            navDate: '2024-01-19',
            manager: '华夏基金',
            size: '45.2亿'
        }
    },
    
    stockData: {
        '000001': {
            name: '平安银行',
            code: '000001',
            type: 'stock',
            price: 11.25,
            change: -0.35,
            changePercent: -3.02,
            open: 11.60,
            high: 11.65,
            low: 11.18,
            volume: 45678200,
            amount: 5.14,
            pe: 6.2,
            pb: 0.85,
            marketCap: 2185,
            weekChange: -2.5,
            monthChange: 3.2,
            yearChange: -8.5
        },
        '600036': {
            name: '招商银行',
            code: '600036',
            type: 'stock',
            price: 35.80,
            change: 0.65,
            changePercent: 1.85,
            open: 35.20,
            high: 36.10,
            low: 35.05,
            volume: 32456800,
            amount: 11.56,
            pe: 8.5,
            pb: 1.25,
            marketCap: 8965,
            weekChange: 2.8,
            monthChange: 5.6,
            yearChange: 12.3
        },
        '000858': {
            name: '五粮液',
            code: '000858',
            type: 'stock',
            price: 168.50,
            change: 3.20,
            changePercent: 1.94,
            open: 165.80,
            high: 169.50,
            low: 165.30,
            volume: 18564200,
            amount: 31.12,
            pe: 28.5,
            pb: 6.8,
            marketCap: 6542,
            weekChange: 4.2,
            monthChange: 8.5,
            yearChange: 15.8
        }
    },
    
    // 自选列表
    watchlist: [
        { code: '510300', name: '沪深300ETF', type: 'fund', price: 3.85, change: 1.85, monthChange: 5.8 },
        { code: '159915', name: '创业板ETF', type: 'fund', price: 2.15, change: 2.34, monthChange: 8.2 },
        { code: '600036', name: '招商银行', type: 'stock', price: 35.80, change: 1.85, monthChange: 5.6 },
        { code: '000858', name: '五粮液', type: 'stock', price: 168.50, change: 1.94, monthChange: 8.5 }
    ],
    
    // 历史报告
    historyReports: [
        {
            date: '2024-01-18',
            morning: {
                summary: '市场小幅高开后震荡上行，成交量温和放大。主力资金净流入超百亿，北向资金持续买入。'
            },
            afternoon: {
                summary: '午后市场维持强势，沪指站上2900点关口，创业板指表现突出，半导体板块领涨。'
            },
            tags: ['科技股', '北向资金', '突破2900']
        },
        {
            date: '2024-01-17',
            morning: {
                summary: '受外围市场影响，A股低开震荡。资金观望情绪浓厚，成交量有所萎缩。'
            },
            afternoon: {
                summary: '午后市场企稳回升，尾盘跌幅收窄。银行板块护盘迹象明显。'
            },
            tags: ['震荡', '银行护盘', '缩量']
        },
        {
            date: '2024-01-16',
            morning: {
                summary: '新年首个交易日迎来开门红，沪指大涨超2%。消费、新能源板块表现强劲。'
            },
            afternoon: {
                summary: '午后涨势延续，两市成交额突破万亿。外资大幅流入，市场情绪明显回暖。'
            },
            tags: ['开门红', '万亿成交', '消费']
        },
        {
            date: '2024-01-15',
            morning: {
                summary: '节前最后一个交易日，市场交投清淡。资金避险情绪升温，大盘缩量整理。'
            },
            afternoon: {
                summary: '节前效应明显，指数小幅收跌。资金面保持平稳，等待节后方向选择。'
            },
            tags: ['节前效应', '缩量整理', '观望']
        },
        {
            date: '2024-01-12',
            morning: {
                summary: '市场延续震荡格局，热点题材快速轮动。光伏、半导体板块有所表现。'
            },
            afternoon: {
                summary: '午后市场波动加大，沪指在2850点附近获得支撑。短线操作难度增加。'
            },
            tags: ['轮动', '光伏', '半导体']
        }
    ]
};

// 用户数据存储
const USER_DATA_KEY = 'investment_dashboard_data';

function getUserData() {
    const stored = localStorage.getItem(USER_DATA_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return {
        watchlist: SAMPLE_DATA.watchlist,
        lastUpdate: new Date().toISOString()
    };
}

function saveUserData(data) {
    data.lastUpdate = new Date().toISOString();
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
}

// 导出给外部使用
window.SAMPLE_DATA = SAMPLE_DATA;
window.getUserData = getUserData;
window.saveUserData = saveUserData;
