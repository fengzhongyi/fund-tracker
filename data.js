// ==================== 数据更新时间 ====================
// 由日程任务填充
const DATA_UPDATE_TIME = null;

// ==================== 数据来源配置 ====================
const DATA_SOURCES = {
    // 资金流向数据来源
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
    // 基金数据来源
    fund: {
        name: '天天基金网',
        url: 'https://fund.eastmoney.com/',
        description: '提供基金净值、历史数据查询'
    },
    // 股票数据来源
    stock: {
        name: '东方财富网 - 行情中心',
        url: 'https://quote.eastmoney.com/',
        description: '提供沪深港美股票实时行情数据'
    },
    // 新闻数据来源
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
    // 板块数据来源
    sector: {
        name: '东方财富网 - 板块中心',
        url: 'https://quote.eastmoney.com/center/boardlist.html',
        description: '提供行业板块和概念板块资金流向'
    },
    // K线数据来源
    kline: {
        name: '东方财富网 - K线数据',
        url: 'https://quotes.money.163.com/trade/lsjysj_zhongguo.html',
        description: '提供股票和指数的历史K线数据'
    }
};

// ==================== 2026年法定节假日 ====================
const HOLIDAYS_2026 = [
    '2026-01-01', '2026-01-02', '2026-01-03',  // 元旦
    '2026-02-17', '2026-02-18', '2026-02-19', '2026-02-20', '2026-02-21', '2026-02-22', '2026-02-23', '2026-02-24',  // 春节
    '2026-04-04', '2026-04-05', '2026-04-06',  // 清明节
    '2026-05-01', '2026-05-02', '2026-05-03',  // 劳动节
    '2026-06-20', '2026-06-21', '2026-06-22',  // 端午节
    '2026-09-27', '2026-09-28',  // 中秋节（调休）
    '2026-10-01', '2026-10-02', '2026-10-03', '2026-10-04', '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09',  // 国庆节
    '2026-10-10'  // 国庆节调休
];

// ==================== 板块数据模板 ====================
// 由日程任务从真实来源获取并填充
const SECTOR_DATA = {};

// ==================== 资金流向分析数据模板 ====================
// 由日程任务填充
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: null,
    northFundAnalysis: null,
    sectorRotation: null,
    operationAdvice: null
};

// ==================== 每日重大新闻模板 ====================
// 由日程任务从真实来源获取并填充
// 格式: { title, source, sourceUrl, time, summary, impact }
const DAILY_NEWS = [];

// ==================== 主数据模板 ====================
// 由日程任务填充所有数据
const SAMPLE_DATA = {
    // 今日日期 - 由日程任务设置
    today: null,
    
    // 数据加载状态
    loadingStatus: 'pending',  // pending | loading | loaded | error
    
    // 早间报告
    morningReport: null,
    
    // 激进型推荐基金
    aggressiveFunds: [],
    
    // 午后报告
    afternoonReport: null,
    
    // 资金流向数据
    capitalFlow: null,
    
    // 基金数据
    fundData: {},
    
    // 股票数据
    stockData: {},
    
    // 历史报告列表
    historyReports: []
};

// ==================== K线数据模板 ====================
// 用于基金详情页日K线图
// 由日程任务从真实来源获取并填充
// 格式: { date, open, close, high, low, volume }
const KLINE_DATA = {};
