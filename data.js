// ==================== 数据更新时间 ====================
// 由日程任务填充
const DATA_UPDATE_TIME = '2026-04-21 14:15:00';

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
const SECTOR_DATA = {
    // 2026-04-21 午间数据
    inflowSectors: [
        { name: '集成电路制造', flow: '主力净流入', amount: '25亿+' },
        { name: '电池', flow: '主力净流入', amount: '21亿+' },
        { name: '锂电池', flow: '主力净流入', amount: '9.5亿' },
        { name: '煤炭', flow: '主力净流入', amount: '4.1亿' }
    ],
    outflowSectors: [
        { name: '消费电子', flow: '主力净流出', amount: '-32亿-' },
        { name: '通信设备', flow: '主力净流出', amount: '-25亿-' },
        { name: '计算机设备', flow: '主力净流出', amount: '-20亿-' },
        { name: '液冷服务器', flow: '主力净流出', amount: '-15亿' }
    ]
};

// ==================== 资金流向分析数据模板 ====================
// 由日程任务填充
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: {
        summary: '4月21日午盘，主力资金大幅净流出超500亿元，主要从AI算力、半导体、消费电子等高位科技板块撤离。集成电路制造、电池等新能源产业链获逆势加仓，半日净流入超45亿元。',
        trend: '资金风格切换明显，从高位成长向低位防御转移。煤炭、电力、工业气体等板块成为资金避风港。',
        highlight: '宁德时代获大额净流入超20亿元，兆易创新、佰维存储等半导体标的获主力抢筹；立讯精密、浪潮信息、新易盛等高位科技股遭大幅抛售。'
    },
    northFundAnalysis: {
        summary: '北向资金半日小幅净流出约12-28亿元，结束连续净流入态势。外资对高位科技股转为谨慎，但整体流出幅度有限。',
        trend: '外资偏好转向低估值高股息板块，对新能源、半导体等业绩确定性方向保持关注。',
        highlight: '深股通净流出为主，沪股通相对抗跌，显示外资调仓换股动作。'
    },
    sectorRotation: {
        rising: ['煤炭开采', '工业气体', '绿色电力', '影视院线', '电池', '集成电路'],
        falling: ['液冷服务器', 'AI算力', 'CPO光模块', '消费电子', '国资云', '东数西算']
    },
    operationAdvice: {
        aggressive: '关注新能源（锂电、储能）回调后的布局机会，6G大会召开或催化科技板块反弹，但需严格控制仓位不盲目追高。',
        conservative: '配置高股息红利资产作为防御底仓，如煤炭、电力等低估值防御板块，等待市场情绪企稳。'
    }
};

// ==================== 每日重大新闻模板 ====================
// 由日程任务从真实来源获取并填充
// 格式: { title, source, sourceUrl, time, summary, impact }
const DAILY_NEWS = [
    {
        title: '4月21日午盘点评：科创50暴跌2.37%，防御板块逆势走强',
        source: '股长红',
        sourceUrl: 'http://m.toutiao.com/group/7631054056957428266/',
        time: '11:47',
        summary: 'A股今日早盘画风突变，三大指数集体走弱，科创50重挫2.37%领跌全场，全市场近3900只个股下跌。资金极致抱团煤炭、氦气、工业气体三大防御主线，成为盘面唯一赚钱方向。',
        impact: '利空科技'
    },
    {
        title: '主力板块资金流入排行：集成电路制造流入24.91亿元、电池流入20.56亿元',
        source: '金融界',
        sourceUrl: 'http://m.163.com/dy/article/KR1MMQ610519QIKK.html',
        time: '11:46',
        summary: '据交易所数据显示，截至4月21日午间收盘，大盘主力资金净流出574.63亿元。主力资金流入前十大板块分别为：集成电路制造（24.91亿元）、电池（20.56亿元）、锂电池（9.50亿元）、电池化学品（9.15亿元）等。',
        impact: '利好新能源'
    },
    {
        title: '6G技术与产业生态大会在南京召开',
        source: '央视新闻',
        sourceUrl: 'http://m.toutiao.com/group/7631076697957270025/',
        time: '09:00',
        summary: '4月21日至23日，2026全球6G技术与产业生态大会在南京召开，来自全球50多个国家的2000多位专家、行业人士参会。大会更聚焦产业落地与生态构建，明确6G将与AI、低空经济、智能驾驶等领域深度融合。',
        impact: '利好通信'
    },
    {
        title: '宁德时代举办2026年"超级科技日"',
        source: '证券日报',
        sourceUrl: 'http://m.toutiao.com/group/7631083357417308718/',
        time: '09:30',
        summary: '宁德时代将于4月21日举办2026年"超级科技日"，主题为"极域之约"。这将是公司成立以来技术密度最高的一场发布会，公司届时推出的全新技术、产品和生态，都将直击行业最关注的痛点。',
        impact: '利好新能源'
    },
    {
        title: '4月LPR报价出炉：1年期3.0%、5年期以上3.5%',
        source: '央视新闻',
        sourceUrl: 'http://m.toutiao.com/group/7630643167167119891/',
        time: '09:12',
        summary: '中国人民银行授权全国银行间同业拆借中心公布，2026年4月贷款市场报价利率(LPR)为：1年期LPR为3.0%，5年期以上LPR为3.5%，连续11个月维持不变。',
        impact: '中性'
    },
    {
        title: '发改委下达2168亿特别国债，投向新质生产力',
        source: '时政要闻',
        sourceUrl: 'http://m.toutiao.com/group/7630627709316399651/',
        time: '08:00',
        summary: '国家发展改革委会同有关部门组织下达2026年第二批"两重"建设项目清单，安排超长期特别国债资金2168亿元，涉及人工智能、城市地下管网建设改造、长江经济带交通基础设施等领域。',
        impact: '利好基建'
    }
];

// ==================== 主数据模板 ====================
// 由日程任务填充所有数据
const SAMPLE_DATA = {
    // 今日日期 - 由日程任务设置
    today: '2026-04-21',
    
    // 是否交易日
    isTradingDay: true,
    
    // 数据加载状态
    loadingStatus: 'loaded',
    
    // 早间报告
    morningReport: {
        time: '09:30',
        indexPerformance: {
            shangzhi: { value: 4072.39, change: '-0.24%' },
            shengzheng: { value: 14854.08, change: '-0.75%' },
            chuangye: { value: 3642.83, change: '-0.94%' },
            zhuanke50: { value: 1416.17, change: '-2.37%' }
        },
        fundFlowSummary: {
            mainInflow: '超500亿净流出',
            northInflow: '约-12亿（小幅净流出）',
            marketSentiment: '谨慎偏空',
            tradingVolume: '较昨日缩量但仍处高位'
        },
        recommendedFunds: [
            {
                code: '515080',
                name: '中证红利ETF招商',
                type: '稳健型',
                change: '+0.94%',
                reason: '红利策略在震荡市中提供稳健收益，高股息资产具备防御价值。今日煤炭、银行等红利板块逆势走强，机构资金持续流入，近5日累计吸金超3亿元。低利率环境下，中证红利股息率约5%，相较于不足2%的10年期国债收益率具备显著吸引力，适合作为组合的压舱石配置。'
            },
            {
                code: '510300',
                name: '沪深300ETF华泰柏瑞',
                type: '配置型',
                change: '-0.35%（估值）',
                reason: '今日大盘震荡调整，沪深300代表A股核心资产，低估值大盘蓝筹受资金青睐。4月20日险资权益投资上限从30%提至35%释放约5000亿增量资金，长期资金入市利好大盘蓝筹。一季度经济数据超预期，基本面支撑A股震荡上行，回调或是布局机会。'
            }
        ],
        hotSectors: {
            rising: [
                { name: '煤炭开采', reason: '进口煤价上涨+地缘风险+低估值高股息，板块逆势暴涨4%+' },
                { name: '工业气体', reason: '地缘冲突加剧氦气供给扰动，下游半导体、光伏需求旺盛，行业量价齐升' },
                { name: '绿色电力', reason: '低估值高股息+避险属性，算电协同政策催化，板块同步活跃' },
                { name: '电池/锂电', reason: '宁德时代科技日催化，一季报业绩集体预增，资金逆势抢筹22亿+' }
            ],
            falling: [
                { name: '液冷服务器', reason: '前期涨幅过大，英维克跌停，主力资金大幅出逃超15亿元' },
                { name: 'AI算力/CPO', reason: '高位科技股集体回调，主力净流出超百亿，一季报业绩压力释放' },
                { name: '消费电子', reason: '立讯精密等龙头遭大幅抛售，资金持续净流出32亿元+' }
            ]
        }
    },
    
    // 激进型推荐基金
    aggressiveFunds: [
        {
            code: '588000',
            name: '科创50ETF华夏',
            change: '-2.37%',
            nav: 1.4082,
            weekChange: '-1.82%',
            monthChange: '-5.16%',
            yearChange: '+35.28%',
            reason: '科创50今日领跌全场-2.37%，科技成长板块短期承压。但6G大会召开、宁德时代科技日等催化不断，半导体设备方向获主力逆势加仓。建议等待回调到位后再关注，中长期AI算力需求爆发仍支撑科技板块估值。',
            riskLevel: '高',
            recommendedWeight: '10-15%'
        }
    ],
    
    // 午后报告
    afternoonReport: {
        time: '14:15',
        indexPerformance: {
            shangzhi: { value: 4081.53, change: '-0.02%' },
            shengzheng: { value: 14949.67, change: '-0.11%' },
            chuangye: { value: 3670.24, change: '-0.94%' },
            zhuanke50: { value: 1408.22, change: '-2.37%' }
        },
        marketAnalysis: {
            volume: '2.6万亿（较昨日缩量1000亿）',
            stockRatio: '1862:2943（涨:跌）',
            sentiment: '赚钱效应降温，防御板块走强',
            涨停: '38家',
            跌停: '17家'
        },
        fundFlowUpdate: {
            northFund: '全天净流出约28亿元',
            mainFund: '全天净流出超420亿元',
            trend: '资金从高位科技向煤炭、电力等防御板块迁移'
        },
        afternoonOutlook: {
            prediction: '维持震荡分化格局，防御主线延续',
            keyPoints: [
                '关注沪指4050-4080点区间支撑有效性',
                '北向资金能否重新净流入',
                '新能源板块持续性',
                '成交量能否维持在1.5万亿以上'
            ],
            riskPoints: [
                '科创50、创业板持续调整压力',
                '高位科技股获利了结压力',
                '一季报业绩不及预期风险',
                '外围市场波动影响'
            ]
        }
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: {
            value: -420,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -218,
            shengzheng: -202,
            trend: '高位科技板块集体出逃，防御板块获承接'
        },
        northFund: {
            value: -28,
            unit: '亿元',
            direction: '净流出',
            shengutong: -3,
            hushenutong: -25,
            trend: '外资结束连续净流入，转为谨慎观望'
        },
        sectorFunds: [
            { name: '集成电路制造', flow: 25, direction: '净流入', note: '半导体设备获主力抢筹' },
            { name: '电池', flow: 21, direction: '净流入', note: '宁德时代科技日催化' },
            { name: '锂电池', flow: 9, direction: '净流入', note: '新能源产业链反弹' },
            { name: '煤炭', flow: 4, direction: '净流入', note: '高股息防御属性' },
            { name: '液冷服务器', flow: -15, direction: '净流出', note: '英维克跌停' },
            { name: 'AI算力/CPO', flow: -100, direction: '净流出', note: '高位科技集体回调' },
            { name: '消费电子', flow: -32, direction: '净流出', note: '立讯精密等遭抛售' },
            { name: '计算机设备', flow: -20, direction: '净流出', note: '科技主线失血' }
        ],
        topStocks: {
            inflow: [
                { name: '宁德时代', amount: '20亿+' },
                { name: '兆易创新', amount: '15亿+' },
                { name: '佰维存储', amount: '10亿+' },
                { name: '中国神华', amount: '8亿+' },
                { name: '凯美特气', amount: '5亿+' }
            ],
            outflow: [
                { name: '立讯精密', amount: '-15亿-' },
                { name: '新易盛', amount: '-12亿-' },
                { name: '浪潮信息', amount: '-10亿-' },
                { name: '中际旭创', amount: '-8亿-' },
                { name: '英维克', amount: '-5.5亿' }
            ]
        }
    },
    
    // 基金数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.7513,
            change: '-0.35%',
            changeValue: -0.0167,
            nav: 4.7681,
            navDate: '2026-04-20',
            volume: '3627万手',
            amount: '36.28亿',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            klineData: [
                { date: '2026-04-20', open: 4.74, close: 4.765, high: 4.78, low: 4.73 },
                { date: '2026-04-17', open: 4.65, close: 4.71, high: 4.72, low: 4.64 },
                { date: '2026-04-16', open: 4.61, close: 4.65, high: 4.66, low: 4.61 },
                { date: '2026-04-15', open: 4.59, close: 4.64, high: 4.65, low: 4.58 },
                { date: '2026-04-14', open: 4.58, close: 4.57, high: 4.59, low: 4.56 },
                { date: '2026-04-13', open: 4.52, close: 4.60, high: 4.60, low: 4.52 },
                { date: '2026-04-10', open: 4.52, close: 4.60, high: 4.60, low: 4.52 },
                { date: '2026-04-09', open: 4.45, close: 4.45, high: 4.47, low: 4.44 },
                { date: '2026-04-08', open: 4.45, close: 4.45, high: 4.46, low: 4.44 },
                { date: '2026-04-07', open: 4.53, close: 4.53, high: 4.54, low: 4.52 }
            ],
            navHistory: [
                { date: '2026-04-20', value: 4.7681 },
                { date: '2026-04-17', value: 4.7393 },
                { date: '2026-04-16', value: 4.7472 },
                { date: '2026-04-15', value: 4.6957 },
                { date: '2026-04-14', value: 4.7111 },
                { date: '2026-04-13', value: 4.6560 },
                { date: '2026-04-10', value: 4.6466 },
                { date: '2026-04-09', value: 4.5758 },
                { date: '2026-04-08', value: 4.6054 },
                { date: '2026-04-07', value: 4.4498 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 1.4082,
            change: '-2.37%',
            changeValue: -0.0342,
            nav: 1.4082,
            navDate: '2026-04-21',
            volume: '210万手',
            amount: '约40亿（日均）',
            manager: '荣膺',
            scale: '760.22亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            klineData: [
                { date: '2026-04-21', open: 1.44, close: 1.408, high: 1.44, low: 1.40 },
                { date: '2026-04-20', open: 1.45, close: 1.442, high: 1.45, low: 1.43 },
                { date: '2026-04-17', open: 1.492, close: 1.499, high: 1.510, low: 1.489 },
                { date: '2026-04-16', open: 1.485, close: 1.498, high: 1.501, low: 1.477 },
                { date: '2026-04-15', open: 1.491, close: 1.482, high: 1.509, low: 1.474 },
                { date: '2026-04-14', open: 1.473, close: 1.479, high: 1.484, low: 1.461 },
                { date: '2026-04-13', open: 1.428, close: 1.448, high: 1.470, low: 1.424 },
                { date: '2026-04-10', open: 1.434, close: 1.437, high: 1.457, low: 1.434 },
                { date: '2026-04-09', open: 1.408, close: 1.415, high: 1.435, low: 1.403 },
                { date: '2026-04-08', open: 1.385, close: 1.425, high: 1.425, low: 1.385 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.4082 },
                { date: '2026-04-20', value: 1.4418 },
                { date: '2026-04-17', value: 1.4997 },
                { date: '2026-04-16', value: 1.4983 },
                { date: '2026-04-15', value: 1.4816 },
                { date: '2026-04-14', value: 1.4787 },
                { date: '2026-04-13', value: 1.4476 },
                { date: '2026-04-10', value: 1.4365 },
                { date: '2026-04-09', value: 1.4151 },
                { date: '2026-04-08', value: 1.4251 },
                { date: '2026-04-07', value: 1.3392 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.5977,
            change: '+0.94%',
            changeValue: 0.0149,
            nav: 1.5921,
            navDate: '2026-04-20',
            volume: '520000手',
            amount: '8300万',
            manager: '王平、刘重杰',
            scale: '93.70亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            weekChange: '-1.19%',
            monthChange: '-1.19%',
            yearChange: '+10.92%',
            threeYearChange: '+21.51%',
            klineData: [
                { date: '2026-04-21', open: 1.58, close: 1.598, high: 1.60, low: 1.57 },
                { date: '2026-04-20', open: 1.58, close: 1.583, high: 1.59, low: 1.57 },
                { date: '2026-04-17', open: 1.60, close: 1.59, high: 1.60, low: 1.59 },
                { date: '2026-04-16', open: 1.60, close: 1.60, high: 1.61, low: 1.59 },
                { date: '2026-04-15', open: 1.59, close: 1.60, high: 1.60, low: 1.58 },
                { date: '2026-04-14', open: 1.58, close: 1.59, high: 1.60, low: 1.58 },
                { date: '2026-04-13', open: 1.59, close: 1.58, high: 1.59, low: 1.57 },
                { date: '2026-04-10', open: 1.59, close: 1.59, high: 1.60, low: 1.58 },
                { date: '2026-04-09', open: 1.60, close: 1.59, high: 1.61, low: 1.59 },
                { date: '2026-04-08', open: 1.59, close: 1.60, high: 1.61, low: 1.59 }
            ],
            navHistory: [
                { date: '2026-04-20', value: 1.5921 },
                { date: '2026-04-17', value: 1.5902 },
                { date: '2026-04-16', value: 1.6008 },
                { date: '2026-04-15', value: 1.5744 },
                { date: '2026-04-14', value: 1.5823 },
                { date: '2026-04-13', value: 1.5587 },
                { date: '2026-04-10', value: 1.5588 },
                { date: '2026-04-09', value: 1.5450 },
                { date: '2026-04-08', value: 1.5545 },
                { date: '2026-04-07', value: 1.4807 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 8.25,
            change: '-0.48%',
            changeValue: -0.04,
            nav: 8.245,
            navDate: '2026-04-20',
            volume: '320000手',
            amount: '2.64亿',
            manager: '罗文杰',
            scale: '1446.90亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            weekChange: '+2.55%',
            monthChange: '+2.55%',
            yearChange: '+50.39%',
            threeYearChange: '+33.09%',
            klineData: [
                { date: '2026-04-21', open: 8.30, close: 8.25, high: 8.31, low: 8.20 },
                { date: '2026-04-20', open: 8.25, close: 8.29, high: 8.32, low: 8.25 },
                { date: '2026-04-17', open: 8.25, close: 8.29, high: 8.32, low: 8.25 },
                { date: '2026-04-16', open: 8.12, close: 8.25, high: 8.29, low: 8.12 },
                { date: '2026-04-15', open: 8.17, close: 8.12, high: 8.18, low: 8.11 },
                { date: '2026-04-14', open: 8.04, close: 8.16, high: 8.18, low: 8.04 },
                { date: '2026-04-13', open: 8.04, close: 8.04, high: 8.07, low: 8.02 },
                { date: '2026-04-10', open: 8.02, close: 8.04, high: 8.05, low: 8.00 },
                { date: '2026-04-09', open: 7.96, close: 7.96, high: 8.01, low: 7.91 },
                { date: '2026-04-08', open: 7.82, close: 8.03, high: 8.03, low: 7.82 }
            ],
            navHistory: [
                { date: '2026-04-20', value: 8.2884 },
                { date: '2026-04-17', value: 8.2884 },
                { date: '2026-04-16', value: 8.2543 },
                { date: '2026-04-15', value: 8.1162 },
                { date: '2026-04-14', value: 8.1595 },
                { date: '2026-04-13', value: 8.0379 },
                { date: '2026-04-10', value: 8.0401 },
                { date: '2026-04-09', value: 7.9677 },
                { date: '2026-04-08', value: 8.0148 },
                { date: '2026-04-07', value: 7.6351 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.2434,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.2434,
            navDate: '2026-04-20',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            type: '债券型',
            riskLevel: 'R2中低风险',
            weekChange: '+0.06%',
            monthChange: '+0.32%',
            threeMonthChange: '+0.67%',
            yearChange: '+1.06%',
            threeYearChange: '+7.93%',
            navHistory: [
                { date: '2026-04-20', value: 1.2434 },
                { date: '2026-04-17', value: 1.2434 },
                { date: '2026-04-16', value: 1.2432 },
                { date: '2026-04-15', value: 1.2430 },
                { date: '2026-04-14', value: 1.2428 },
                { date: '2026-04-13', value: 1.2426 },
                { date: '2026-04-10', value: 1.2422 },
                { date: '2026-04-09', value: 1.2420 },
                { date: '2026-04-08', value: 1.2418 },
                { date: '2026-04-07', value: 1.2416 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.395,
            change: '0.00%',
            changeValue: 0,
            nav: 1.395,
            navDate: '2026-04-08',
            manager: '王晓晨',
            scale: '316.96亿',
            established: '2008-03-19',
            type: '债券型-混合一级',
            riskLevel: '中低风险',
            rating: '★★★★',
            weekChange: '-0.14%',
            monthChange: '-0.14%',
            threeMonthChange: '+0.42%',
            yearChange: '+5.32%',
            threeYearChange: '+15.71%',
            navHistory: [
                { date: '2026-04-08', value: 1.395 },
                { date: '2026-04-07', value: 1.395 },
                { date: '2026-04-03', value: 1.391 },
                { date: '2026-04-01', value: 1.393 },
                { date: '2026-03-31', value: 1.392 },
                { date: '2026-03-30', value: 1.394 },
                { date: '2026-03-29', value: 1.393 },
                { date: '2026-03-28', value: 1.394 },
                { date: '2026-03-27', value: 1.394 },
                { date: '2026-03-26', value: 1.395 }
            ]
        }
    },
    
    // 股票数据
    stockData: {
        // 暂无特定股票数据，保留空模板
    },
    
    // 历史报告列表
    historyReports: []
};

// ==================== K线数据模板 ====================
// 用于基金详情页日K线图
// 由日程任务从真实来源获取并填充
// 格式: { date, open, close, high, low, volume }
const KLINE_DATA = {
    // K线数据已集成到fundData中
};
