// ==================== 数据更新时间 ====================
// 由日程任务填充
const DATA_UPDATE_TIME = '';

// ==================== 数据来源配置 ====================
const DATA_SOURCES = {
    mainFund: {
        name: '东方财富网 - 主力资金流向',
        url: 'https://data.eastmoney.com/zjlx/',
        description: '提供沪深两市主力资金流向数据'
    },
    northFund: {
        name: '东方财富网 - 北向资金',
        url: 'https://data.eastmoney.com/hsgt/',
        description: '提供沪深港通北向资金流向数据'
    },
    fund: {
        name: '天天基金网',
        url: 'https://fund.eastmoney.com/',
        description: '提供基金净值、历史数据查询'
    },
    stock: {
        name: '东方财富网 - 行情中心',
        url: 'https://quote.eastmoney.com/',
        description: '提供沪深港美股票实时行情数据'
    },
    news: {
        cctv: {
            name: '新闻联播',
            url: 'https://tv.cctv.com/lm/xwlb/',
            description: '央视新闻联播节目'
        },
        finance: {
            name: '东方财富网 - 财经新闻',
            url: 'https://finance.eastmoney.com/',
            description: '提供最新财经资讯'
        }
    },
    sector: {
        name: '东方财富网 - 板块中心',
        url: 'https://quote.eastmoney.com/center/boardlist.html',
        description: '提供行业板块和概念板块资金流向'
    }
};

// ==================== 2026年法定节假日 ====================
const HOLIDAYS_2026 = [
    '2026-01-01', '2026-01-02', '2026-01-03',
    '2026-02-17', '2026-02-18', '2026-02-19', '2026-02-20', '2026-02-21', '2026-02-22', '2026-02-23', '2026-02-24',
    '2026-04-04', '2026-04-05', '2026-04-06',
    '2026-05-01', '2026-05-02', '2026-05-03',
    '2026-06-20', '2026-06-21', '2026-06-22',
    '2026-09-27', '2026-09-28',
    '2026-10-01', '2026-10-02', '2026-10-03', '2026-10-04', '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09',
    '2026-10-10'
];

// ==================== 板块数据 ====================
const SECTOR_DATA = {
    inflowSectors: [],
    outflowSectors: []
};

// ==================== 资金流向分析数据 ====================
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: {
        summary: '',
        trend: '',
        highlight: ''
    },
    northFundAnalysis: {
        summary: '',
        trend: '',
        highlight: ''
    },
    sectorRotation: {
        rising: [],
        falling: []
    },
    operationAdvice: {
        aggressive: '',
        conservative: ''
    }
};

// ==================== 每日重大新闻 ====================
const DAILY_NEWS = [];

// ==================== 主数据 ====================
const SAMPLE_DATA = {
    today: '',
    isTradingDay: false,
    loadingStatus: 'loading',
    
    morningReport: {
        time: '',
        indexPerformance: {
            shangzhi: { value: 0, change: '' },
            shengzheng: { value: 0, change: '' },
            chuangye: { value: 0, change: '' },
            zhuanke50: { value: 0, change: '' }
        },
        fundFlowSummary: {
            mainInflow: '',
            northInflow: '',
            marketSentiment: '',
            tradingVolume: ''
        },
        recommendedFunds: [],
        hotSectors: {
            rising: [],
            falling: []
        }
    },
    
    aggressiveFunds: [],
    
    afternoonReport: {
        time: '',
        indexPerformance: {
            shangzhi: { value: 0, change: '' },
            shengzheng: { value: 0, change: '' },
            chuangye: { value: 0, change: '' },
            zhuanke50: { value: 0, change: '' }
        },
        marketAnalysis: {
            volume: '',
            stockRatio: '',
            sentiment: '',
            涨停: '',
            跌停: ''
        },
        fundFlowUpdate: {
            northFund: '',
            mainFund: '',
            trend: ''
        },
        afternoonOutlook: {
            prediction: '',
            keyPoints: [],
            riskPoints: []
        }
    },
    
    capitalFlow: {
        mainFund: {
            value: 0,
            unit: '亿元',
            direction: '',
            shangzheng: 0,
            shengzheng: 0,
            trend: ''
        },
        northFund: {
            value: 0,
            unit: '亿元',
            direction: '',
            shengutong: 0,
            hushenutong: 0,
            trend: ''
        },
        sectorFunds: [],
        topStocks: {
            inflow: [],
            outflow: []
        }
    },
    
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            volume: '',
            amount: '',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            klineData: [],
            navHistory: []
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            volume: '',
            amount: '',
            manager: '荣膺',
            scale: '760.22亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            klineData: [],
            navHistory: []
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            volume: '',
            amount: '',
            manager: '王平、刘重杰',
            scale: '93.70亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            weekChange: '',
            monthChange: '',
            yearChange: '',
            threeYearChange: '',
            klineData: [],
            navHistory: []
        },
        '510500': {
            name: '南方中证500ETF',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            volume: '',
            amount: '',
            manager: '罗文杰',
            scale: '1446.90亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            weekChange: '',
            monthChange: '',
            yearChange: '',
            threeYearChange: '',
            klineData: [],
            navHistory: []
        },
        '006546': {
            name: '兴银中短债C',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            type: '债券型',
            riskLevel: 'R2中低风险',
            weekChange: '',
            monthChange: '',
            threeMonthChange: '',
            yearChange: '',
            threeYearChange: '',
            navHistory: []
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 0,
            change: '',
            changeValue: 0,
            nav: 0,
            navDate: '',
            manager: '王晓晨',
            scale: '316.96亿',
            established: '2008-03-19',
            type: '债券型-混合一级',
            riskLevel: '中低风险',
            rating: '★★★★',
            weekChange: '',
            monthChange: '',
            threeMonthChange: '',
            yearChange: '',
            threeYearChange: '',
            navHistory: []
        }
    },
    
    stockData: {},
    historyReports: []
};

const KLINE_DATA = {};
