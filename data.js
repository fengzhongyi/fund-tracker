// ==================== 数据更新时间 ====================
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

// ==================== 主数据 ====================
const SAMPLE_DATA = {
    today: '',
    isTradingDay: true,
    loadingStatus: 'loading',
    
    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { value: 0, change: '', volume: '', turnover: '' },
        shengzheng: { value: 0, change: '', volume: '', turnover: '' },
        chuangye: { value: 0, change: '', volume: '', turnover: '' },
        zhuanke50: { value: 0, change: '', volume: '', turnover: '' }
    },
    
    // ===== 2. 推荐基金（含买卖建议） =====
    recommendedFunds: {
        // 建议买入
        buyList: [
            // {
            //     code: '510300',
            //     name: '华泰柏瑞沪深300ETF',
            //     price: 0,
            //     change: '',
            //     nav: 0,
            //     reason: '推荐理由',
            //     buyPrice: '建议买入价',
            //     targetPrice: '目标价',
            //     stopLoss: '止损价',
            //     riskLevel: '中',
            //     expectedReturn: '预期收益'
            // }
        ],
        // 建议卖出
        sellList: [
            // {
            //     code: '',
            //     name: '',
            //     price: 0,
            //     change: '',
            //     holdDays: 0,
            //     profit: '',
            //     reason: '卖出理由'
            // }
        ],
        // 持有观望
        holdList: []
    },
    
    // ===== 3. 实时新闻（利好利空辨别） =====
    realtimeNews: [
        // {
        //     title: '',
        //     source: '',
        //     sourceUrl: '',
        //     time: '',
        //     summary: '',
        //     impact: '利好/利空/中性',
        //     relatedSectors: ['板块1', '板块2'],
        //     importance: '高/中/低'
        // }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 0,
            unit: '亿元',
            direction: '',
            shangzheng: 0,
            shengzheng: 0,
            trend: '',
            analysis: ''
        },
        northFund: {
            value: 0,
            unit: '亿元',
            direction: '',
            shengutong: 0,
            hushenutong: 0,
            trend: '',
            analysis: ''
        },
        // 板块资金流向
        sectorFunds: [],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [],
            outflow: []
        },
        // 基金资金流向
        fundFlows: [
            // {
            //     code: '510300',
            //     name: '',
            //     inflow: 0,
            //     outflow: 0,
            //     netFlow: 0,
            //     trend: ''
            // }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            // {
            //     name: '',
            //     reason: '',
            //     inflow: 0,
            //     hotStocks: [],
            //     sustainability: '强/中/弱',
            //     riskTip: ''
            // }
        ],
        // 未来利好板块（预期）
        future: [
            // {
            //     name: '',
            //     catalyst: '催化事件',
            //     expectedTime: '预期时间',
            //     relatedNews: '',
            //     potential: '高/中/低'
            // }
        ],
        // 板块轮动预测
        rotation: {
            from: [],  // 资金流出板块
            to: [],    // 资金流入板块
            analysis: ''
        }
    },
    
    // 基金详情数据
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
            netFlow: 0,
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
            netFlow: 0,
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
            netFlow: 0,
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
            netFlow: 0,
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
            netFlow: 0,
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
            netFlow: 0,
            navHistory: []
        }
    },
    
    stockData: {},
    historyReports: []
};
