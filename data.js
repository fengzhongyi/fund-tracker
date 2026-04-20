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
    }
};

// ==================== 板块详情数据 ====================
const SECTOR_DATA = {
    '电子': {
        name: '电子',
        mainInflow: 89.5,
        change: 1.5,
        leadingStocks: [
            { name: '立讯精密', change: 3.2, reason: '消费电子龙头，获主力大单扫货22亿元' },
            { name: '浪潮信息', change: 4.8, reason: 'AI服务器龙头，获净流入12.39亿元' },
            { name: '北方华创', change: 2.5, reason: '半导体设备龙头' }
        ],
        description: '电子板块今日表现强势，主力资金大幅净流入。消费电子、半导体设备、液冷服务器等细分方向领涨。立讯精密、浪潮信息等龙头获大单扫货，机构在回补科技仓位。液冷服务器需求爆发受益于AI算力指数级增长。',
        advice: '短期继续看好，关注AI硬件端和液冷服务器产业链机会。立讯精密、浪潮信息等龙头可逢低布局。',
        klineData: [
            { date: '2026-04-06', open: 3280, close: 3250, high: 3300, low: 3230 },
            { date: '2026-04-07', open: 3250, close: 3230, high: 3270, low: 3210 },
            { date: '2026-04-08', open: 3230, close: 3200, high: 3250, low: 3180 },
            { date: '2026-04-09', open: 3200, close: 3220, high: 3250, low: 3185 },
            { date: '2026-04-10', open: 3220, close: 3190, high: 3235, low: 3170 },
            { date: '2026-04-11', open: 3190, close: 3150, high: 3210, low: 3135 },
            { date: '2026-04-12', open: 3150, close: 3180, high: 3205, low: 3140 },
            { date: '2026-04-13', open: 3180, close: 3205, high: 3228, low: 3165 },
            { date: '2026-04-14', open: 3205, close: 3220, high: 3245, low: 3190 },
            { date: '2026-04-15', open: 3220, close: 3185, high: 3235, low: 3170 },
            { date: '2026-04-16', open: 3185, close: 3160, high: 3205, low: 3145 },
            { date: '2026-04-17', open: 3160, close: 3145, high: 3185, low: 3125 },
            { date: '2026-04-18', open: 3145, close: 3130, high: 3168, low: 3110 },
            { date: '2026-04-19', open: 3130, close: 3115, high: 3150, low: 3095 }
        ]
    },
    '通信': {
        name: '通信',
        mainInflow: 52.3,
        change: 2.1,
        leadingStocks: [
            { name: '中天科技', change: 9.99, reason: '光纤涨价+液冷服务器双重催化，涨停' },
            { name: '亨通光电', change: 6.91, reason: '光通信龙头，受益光纤价格暴涨650%' },
            { name: '通鼎互联', change: 9.97, reason: '光纤光缆3天2板，业绩超预期' }
        ],
        description: '通信板块今日大幅上涨，光纤概念集体爆发。国产光纤全球爆单，价格暴涨650%，相关公司订单已排到明年一季度。液冷服务器需求增长也带动光通信需求。',
        advice: '光纤板块高景气度持续，量价齐升逻辑明确。可关注中天科技、亨通光电等龙头。',
        klineData: [
            { date: '2026-04-06', open: 2150, close: 2135, high: 2165, low: 2120 },
            { date: '2026-04-07', open: 2135, close: 2120, high: 2150, low: 2105 },
            { date: '2026-04-08', open: 2120, close: 2105, high: 2135, low: 2090 },
            { date: '2026-04-09', open: 2105, close: 2115, high: 2130, low: 2095 },
            { date: '2026-04-10', open: 2115, close: 2095, high: 2125, low: 2080 },
            { date: '2026-04-11', open: 2095, close: 2075, high: 2110, low: 2060 },
            { date: '2026-04-12', open: 2075, close: 2090, high: 2105, low: 2065 },
            { date: '2026-04-13', open: 2090, close: 2105, high: 2120, low: 2080 },
            { date: '2026-04-14', open: 2105, close: 2115, high: 2130, low: 2095 },
            { date: '2026-04-15', open: 2115, close: 2095, high: 2125, low: 2080 },
            { date: '2026-04-16', open: 2095, close: 2080, high: 2110, low: 2065 },
            { date: '2026-04-17', open: 2080, close: 2065, high: 2095, low: 2050 },
            { date: '2026-04-18', open: 2065, close: 2055, high: 2085, low: 2040 },
            { date: '2026-04-19', open: 2055, close: 2040, high: 2070, low: 2025 }
        ]
    },
    '国防军工': {
        name: '国防军工',
        mainInflow: 156.8,
        change: 3.5,
        leadingStocks: [
            { name: '中国卫星', change: 10.0, reason: '商业航天龙头，政策催化涨停' },
            { name: '西部材料', change: 10.0, reason: '航天稀有金属，涨停' },
            { name: '博云新材', change: 10.0, reason: '6连板，航天碳复合材料龙头' }
        ],
        description: '国防军工板块今日爆发，商业航天概念掀涨停潮。中国卫星等涨停，神剑股份等多股连板。2026年中国航天日临近，天问二号、载人航天等重大任务催化板块。',
        advice: '商业航天成为最强主线之一，4月24日航天日叠加密集发射，行情有望延续。关注卫星导航、航天材料等细分方向。',
        klineData: [
            { date: '2026-04-06', open: 1850, close: 1875, high: 1890, low: 1840 },
            { date: '2026-04-07', open: 1875, close: 1895, high: 1910, low: 1865 },
            { date: '2026-04-08', open: 1895, close: 1915, high: 1930, low: 1885 },
            { date: '2026-04-09', open: 1915, close: 1890, high: 1930, low: 1880 },
            { date: '2026-04-10', open: 1890, close: 1875, high: 1905, low: 1865 },
            { date: '2026-04-11', open: 1875, close: 1855, high: 1890, low: 1845 },
            { date: '2026-04-12', open: 1855, close: 1875, high: 1890, low: 1845 },
            { date: '2026-04-13', open: 1875, close: 1900, high: 1915, low: 1865 },
            { date: '2026-04-14', open: 1900, close: 1925, high: 1940, low: 1890 },
            { date: '2026-04-15', open: 1925, close: 1905, high: 1940, low: 1895 },
            { date: '2026-04-16', open: 1905, close: 1890, high: 1925, low: 1880 },
            { date: '2026-04-17', open: 1890, close: 1920, high: 1945, low: 1880 },
            { date: '2026-04-18', open: 1920, close: 1950, high: 1970, low: 1910 },
            { date: '2026-04-19', open: 1950, close: 1985, high: 2005, low: 1940 }
        ]
    },
    '电力设备': {
        name: '电力设备',
        mainInflow: -45.3,
        change: -1.2,
        leadingStocks: [
            { name: '宁德时代', change: -4.0, reason: '一季报预期偏弱，遭资金减仓' },
            { name: '隆基绿能', change: -2.5, reason: '光伏板块持续调整' },
            { name: '亿纬锂能', change: -1.8, reason: '锂电材料价格回落' }
        ],
        description: '新能源板块持续调整，宁德时代调整拖累创业板。锂电材料价格回落，产能过剩担忧压制估值。但液冷服务器等细分方向表现活跃。',
        advice: '短期回避锂电等弱势方向，关注储能等细分领域机会。等待产能出清后的反转信号。',
        klineData: [
            { date: '2026-04-06', open: 2850, close: 2835, high: 2865, low: 2820 },
            { date: '2026-04-07', open: 2835, close: 2820, high: 2850, low: 2805 },
            { date: '2026-04-08', open: 2820, close: 2805, high: 2835, low: 2790 },
            { date: '2026-04-09', open: 2805, close: 2815, high: 2830, low: 2795 },
            { date: '2026-04-10', open: 2815, close: 2795, high: 2825, low: 2780 },
            { date: '2026-04-11', open: 2795, close: 2775, high: 2810, low: 2760 },
            { date: '2026-04-12', open: 2775, close: 2790, high: 2805, low: 2765 },
            { date: '2026-04-13', open: 2790, close: 2805, high: 2820, low: 2780 },
            { date: '2026-04-14', open: 2805, close: 2815, high: 2830, low: 2795 },
            { date: '2026-04-15', open: 2815, close: 2795, high: 2825, low: 2780 },
            { date: '2026-04-16', open: 2795, close: 2780, high: 2810, low: 2765 },
            { date: '2026-04-17', open: 2780, close: 2765, high: 2795, low: 2750 },
            { date: '2026-04-18', open: 2765, close: 2755, high: 2785, low: 2740 },
            { date: '2026-04-19', open: 2755, close: 2740, high: 2770, low: 2725 }
        ]
    },
    '医药生物': {
        name: '医药生物',
        mainInflow: -24.5,
        change: -1.8,
        leadingStocks: [
            { name: '科拓生物', change: -8.5, reason: '板块领跌' },
            { name: '恩华药业', change: -5.2, reason: '资金避险撤离' },
            { name: '海森药业', change: -4.8, reason: '化学制药走弱' }
        ],
        description: '医药生物板块今日继续调整，净流出超24亿元，板块领跌。资金避险情绪明显，配置型资金从防御板块撤出转向成长赛道。',
        advice: '短期回避，等待止跌信号。可关注创新药等细分方向的超跌机会。',
        klineData: [
            { date: '2026-04-06', open: 3280, close: 3265, high: 3295, low: 3250 },
            { date: '2026-04-07', open: 3265, close: 3245, high: 3280, low: 3230 },
            { date: '2026-04-08', open: 3245, close: 3225, high: 3260, low: 3210 },
            { date: '2026-04-09', open: 3225, close: 3240, high: 3255, low: 3210 },
            { date: '2026-04-10', open: 3240, close: 3220, high: 3255, low: 3205 },
            { date: '2026-04-11', open: 3220, close: 3195, high: 3230, low: 3180 },
            { date: '2026-04-12', open: 3195, close: 3215, high: 3230, low: 3180 },
            { date: '2026-04-13', open: 3215, close: 3230, high: 3245, low: 3200 },
            { date: '2026-04-14', open: 3230, close: 3245, high: 3260, low: 3220 },
            { date: '2026-04-15', open: 3245, close: 3220, high: 3255, low: 3210 },
            { date: '2026-04-16', open: 3220, close: 3200, high: 3230, low: 3190 },
            { date: '2026-04-17', open: 3200, close: 3180, high: 3210, low: 3165 },
            { date: '2026-04-18', open: 3180, close: 3160, high: 3195, low: 3145 },
            { date: '2026-04-19', open: 3160, close: 3135, high: 3175, low: 3120 }
        ]
    },
    '红利板块': {
        name: '红利板块',
        mainInflow: 12.5,
        change: 0.5,
        leadingStocks: [
            { name: '中国神华', change: 0.8, reason: '煤炭龙头，高股息代表' },
            { name: '长江电力', change: 0.3, reason: '水电龙头，稳定现金牛' },
            { name: '交通银行', change: 0.2, reason: '银行低估值高股息' }
        ],
        description: '红利板块今日表现平稳，作为市场稳定器发挥作用。在成长股大涨背景下，资金适度从防御板块流向进攻方向。',
        advice: '防御价值仍在，可作为组合稳定器。高股息资产在市场波动时表现相对抗跌。',
        klineData: [
            { date: '2026-04-06', open: 1580, close: 1585, high: 1592, low: 1575 },
            { date: '2026-04-07', open: 1585, close: 1590, high: 1598, low: 1580 },
            { date: '2026-04-08', open: 1590, close: 1595, high: 1602, low: 1585 },
            { date: '2026-04-09', open: 1595, close: 1592, high: 1600, low: 1588 },
            { date: '2026-04-10', open: 1592, close: 1598, high: 1605, low: 1588 },
            { date: '2026-04-11', open: 1598, close: 1602, high: 1608, low: 1592 },
            { date: '2026-04-12', open: 1602, close: 1600, high: 1608, low: 1595 },
            { date: '2026-04-13', open: 1600, close: 1605, high: 1612, low: 1595 },
            { date: '2026-04-14', open: 1605, close: 1610, high: 1618, low: 1600 },
            { date: '2026-04-15', open: 1610, close: 1608, high: 1615, low: 1602 },
            { date: '2026-04-16', open: 1608, close: 1612, high: 1620, low: 1602 },
            { date: '2026-04-17', open: 1612, close: 1615, high: 1622, low: 1608 },
            { date: '2026-04-18', open: 1615, close: 1618, high: 1625, low: 1610 },
            { date: '2026-04-19', open: 1618, close: 1620, high: 1628, low: 1612 }
        ]
    },
    '银行': {
        name: '银行',
        mainInflow: 8.2,
        change: 0.3,
        leadingStocks: [
            { name: '招商银行', change: 0.5, reason: '零售银行龙头，资产质量优' },
            { name: '工商银行', change: 0.2, reason: '国有大行，稳定分红' },
            { name: '宁波银行', change: 0.4, reason: '城商行标杆，成长性强' }
        ],
        description: '银行板块今日表现稳健，作为市场稳定器发挥作用。估值处于历史低位，安全边际较高。',
        advice: '低估值防御首选，可作为组合压舱石。关注资产质量改善的个股机会。',
        klineData: [
            { date: '2026-04-06', open: 1820, close: 1825, high: 1832, low: 1815 },
            { date: '2026-04-07', open: 1825, close: 1830, high: 1838, low: 1820 },
            { date: '2026-04-08', open: 1830, close: 1835, high: 1842, low: 1825 },
            { date: '2026-04-09', open: 1835, close: 1832, high: 1840, low: 1828 },
            { date: '2026-04-10', open: 1832, close: 1838, high: 1845, low: 1828 },
            { date: '2026-04-11', open: 1838, close: 1842, high: 1848, low: 1832 },
            { date: '2026-04-12', open: 1842, close: 1840, high: 1848, low: 1835 },
            { date: '2026-04-13', open: 1840, close: 1845, high: 1852, low: 1835 },
            { date: '2026-04-14', open: 1845, close: 1850, high: 1858, low: 1840 },
            { date: '2026-04-15', open: 1850, close: 1848, high: 1855, low: 1842 },
            { date: '2026-04-16', open: 1848, close: 1852, high: 1860, low: 1842 },
            { date: '2026-04-17', open: 1852, close: 1855, high: 1862, low: 1848 },
            { date: '2026-04-18', open: 1855, close: 1858, high: 1865, low: 1850 },
            { date: '2026-04-19', open: 1858, close: 1860, high: 1868, low: 1852 }
        ]
    },
    '债券': {
        name: '债券',
        mainInflow: 8.5,
        change: 0.2,
        leadingStocks: [
            { name: '国债ETF', change: 0.15, reason: '利率债代表，避险首选' },
            { name: '政金债ETF', change: 0.22, reason: '政策性金融债' },
            { name: '企业债ETF', change: 0.28, reason: '信用债配置价值' }
        ],
        description: '债券市场持续走强，避险资金持续流入。央行维持稳健货币政策，市场利率整体下行。债券基金净值稳步上涨。',
        advice: '债券牛市延续，可继续持有纯债基金。中短债更为稳健，久期不宜过长。',
        klineData: [
            { date: '2026-04-06', open: 1125, close: 1126, high: 1128, low: 1124 },
            { date: '2026-04-07', open: 1126, close: 1127, high: 1129, low: 1125 },
            { date: '2026-04-08', open: 1127, close: 1128, high: 1130, low: 1126 },
            { date: '2026-04-09', open: 1128, close: 1127, high: 1129, low: 1126 },
            { date: '2026-04-10', open: 1127, close: 1128, high: 1130, low: 1126 },
            { date: '2026-04-11', open: 1128, close: 1129, high: 1131, low: 1127 },
            { date: '2026-04-12', open: 1129, close: 1128, high: 1130, low: 1127 },
            { date: '2026-04-13', open: 1128, close: 1129, high: 1131, low: 1127 },
            { date: '2026-04-14', open: 1129, close: 1130, high: 1132, low: 1128 },
            { date: '2026-04-15', open: 1130, close: 1129, high: 1131, low: 1128 },
            { date: '2026-04-16', open: 1129, close: 1130, high: 1132, low: 1128 },
            { date: '2026-04-17', open: 1130, close: 1131, high: 1133, low: 1129 },
            { date: '2026-04-18', open: 1131, close: 1132, high: 1134, low: 1130 },
            { date: '2026-04-19', open: 1132, close: 1133, high: 1135, low: 1131 }
        ]
    }
};

// ==================== 资金流向分析数据 ====================
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: {
        trend: '今日主力资金大幅净流入，市场做多情绪回暖',
        details: '主力资金今日净流入国防军工、电子、计算机等板块，净流出医药生物、电力设备等板块。浪潮信息、中天科技、中国卫星获大额净流入，立讯精密获主力大单扫货22.19亿元。资金高低切换特征显著，从防御向进攻方向集中。',
        sentiment: '乐观',
        source: DATA_SOURCES.mainFund,
        judgment: '今日主力资金大幅回流反映市场情绪明显回暖，科技成长和商业航天成为资金主攻方向。建议关注主线板块的持续性，如量能配合良好，指数有望继续上行。'
    },
    northFundAnalysis: {
        trend: '北向资金大幅净买入143亿元，外资积极布局科技成长',
        details: '北向资金半日净买入约143亿元，深股通买入115亿元，主攻科技成长方向。这是外资近期少有的大幅净流入，显示外资对A股科技赛道的看好。',
        sentiment: '积极',
        source: DATA_SOURCES.northFund,
        judgment: '外资今日大幅净流入是积极信号，显示外资对中国资产的信心恢复。重点关注外资持续流入的科技成长方向，如AI算力、半导体等。'
    },
    sectorRotation: {
        trend: '科技成长领涨，防御板块走弱',
        details: '国防军工、电子、计算机等科技板块大幅上涨；医药生物、电力设备等防御性板块走弱。资金从防御向进攻切换明显，商业航天、AI算力成为最强主线。',
        source: DATA_SOURCES.sector,
        inflowSectors: [
            { name: '国防军工', reason: '商业航天政策催化，中国卫星等涨停', amount: '+156.8亿' },
            { name: '电子', reason: '消费电子+液冷服务器双轮驱动', amount: '+89.5亿' },
            { name: '通信', reason: '光纤涨价650%，量价齐升', amount: '+52.3亿' }
        ],
        outflowSectors: [
            { name: '医药生物', reason: '资金避险撤离', amount: '-24.5亿' },
            { name: '电力设备', reason: '锂电板块调整', amount: '-45.3亿' }
        ],
        conclusion: '市场风格向科技成长切换'
    },
    operationAdvice: {
        shortTerm: '保持7成左右仓位，重点关注商业航天、AI算力、光通信等主线方向',
        mediumTerm: '把握政策与业绩双驱动的新质生产力赛道机会',
        riskPoints: ['高位股震荡风险', '量能能否持续', '外围市场波动']
    }
};

// ==================== 每日重大新闻 ====================
const DAILY_NEWS = [
    {
        title: 'A股三大指数集体放量上涨，沪指涨0.67%站稳4070点',
        source: '东方财富网',
        sourceUrl: 'https://finance.eastmoney.com/',
        time: '11:30',
        summary: '截至午间收盘，上证指数涨0.67%报4078.39点，深证成指涨0.60%报14974.78点，创业板指涨0.04%报3679.88点。科创50大涨1.64%领跑，两市半日成交1.71万亿元，较上周五放量超1200亿元。',
        impact: '利好'
    },
    {
        title: '北向资金半日净买入143亿元，深股通主攻科技成长',
        source: '东方财富网',
        sourceUrl: 'https://data.eastmoney.com/hsgt/',
        time: '11:30',
        summary: '北向资金半日净买入约143亿元，深股通买入115亿元，主要加仓科技成长方向。外资态度积极，对A股核心资产保持看好。',
        impact: '利好'
    },
    {
        title: '商业航天/国防军工全线爆发，中国卫星等涨停',
        source: '证券时报',
        sourceUrl: 'https://www.stcn.com/',
        time: '11:00',
        summary: '2026年中国航天日临近，天问二号、载人航天等重大任务催化商业航天板块。中国卫星涨停，神剑股份6连板，博云新材6连板，板块掀起涨停潮。',
        impact: '利好'
    },
    {
        title: '光纤概念爆发，价格暴涨650%订单排到明年',
        source: '央视财经',
        sourceUrl: 'https://www.cctvfinance.com/',
        time: '10:30',
        summary: '国产光纤全球爆单，价格暴涨650%。G.657.A2光纤从每芯公里32元涨到240元。在手订单已排到明年一季度，相关公司产销量同比增长35%-500%。',
        impact: '利好'
    },
    {
        title: '液冷服务器概念持续走强，圣阳股份8连板',
        source: '证券时报',
        sourceUrl: 'https://www.stcn.com/',
        time: '10:00',
        summary: '液冷服务器概念持续活跃，圣阳股份8连板，康盛股份7天4板，英维克涨停创新高。AI算力爆发驱动数据中心散热需求，液冷技术渗透率快速提升。',
        impact: '利好'
    },
    {
        title: '一季度GDP同比增长5.0%，经济开局良好',
        source: '国家统计局',
        sourceUrl: 'https://www.stats.gov.cn/',
        time: '09:30',
        summary: '一季度GDP同比增长5.0%，超预期0.2个百分点。高技术制造业增加值增9.8%，新能源汽车、太阳能电池产量增35%和42%，服务业贡献率68%。',
        impact: '利好'
    },
    {
        title: '证监会发布再融资新规，万亿长线资金加速入市',
        source: '证监会发布',
        sourceUrl: 'https://www.csrc.gov.cn/',
        time: '08:00',
        summary: '证监会深夜发布再融资新规，将社保、养老金、险资纳入战略投资者，豁免短线限制。险资权益投资上限从30%提至35%，释放约5000亿增量资金。',
        impact: '利好'
    }
];

// ==================== 2026年4月基金数据 ====================
// 数据更新时间：2026年4月20日

const SAMPLE_DATA = {
    // 今日日期
    today: '2026-04-20',
    
    // 早间报告
    morningReport: {
        time: '08:30',
        fundFlowSummary: {
            mainInflow: 89.5,
            mainPercent: 2.5,
            retailInflow: 125.8,
            retailPercent: 3.2,
            transaction: 17100.0,
            transactionChange: 15.2
        },
        recommendedFunds: [
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                change: 28.65,
                sourceUrl: 'https://fund.eastmoney.com/510300.html',
                reason: '【投资方向】跟踪沪深300指数，覆盖A股市场规模最大、经营最稳定的300家龙头企业。【近期表现】今日实时价格4.76元，近一年涨幅28.65%，日均成交额超40亿元，流动性极佳。【推荐理由】沪指今日放量站上60日均线，技术面中期趋势转强。沪深300作为大盘蓝筹代表将受益于指数上涨，且估值处于合理区间（PE约12倍），适合作为投资组合的底仓配置，建议分批建仓。【风险提示】需关注国内经济复苏进度及企业盈利改善情况。'
            },
            {
                code: '515080',
                name: '招商中证红利ETF',
                change: 10.87,
                sourceUrl: 'https://fund.eastmoney.com/515080.html',
                reason: '【投资方向】跟踪中证红利指数，选取A股市场分红稳定、股息率高的企业，主要集中在电力、煤炭、银行等传统行业龙头。【近期表现】今日实时价格1.59元，近一年涨幅约10.87%，股息率稳定在4%以上。【推荐理由】当前市场风格向科技成长切换，但红利板块作为防御底仓仍有配置价值。该ETF每年分红两次，收益稳定，且在市场波动时表现相对抗跌，适合稳健型投资者长期持有。【风险提示】红利板块弹性较小，在牛市中可能跑输成长股。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                change: 5.78,
                sourceUrl: 'https://fund.eastmoney.com/110017.html',
                reason: '【投资方向】固收+产品，80%以上资产投资债券，少量配置股票或可转债增强收益，追求稳健前提下的收益增强。【近期表现】最新净值1.394-1.395元（2026-04-17），近一年收益率5.78%，最大回撤控制在3%以内。【推荐理由】证监会再融资新规出台，险资权益投资上限提升至35%，增量资金入市利好权益市场。债券资产可作为组合的稳定器，在追求收益的同时控制整体波动，适合稳健型投资者。【风险提示】需关注利率变化风险，建议持有期6个月以上。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                change: 1.76,
                sourceUrl: 'https://fund.eastmoney.com/006546.html',
                reason: '【投资方向】中短债基金，主要投资于剩余期限1年以内的短期债券，包括国债、金融债、企业债等，几乎不涉及股票资产。【近期表现】最新净值1.2428元（2026-04-13），近一年收益率1.76%，最大回撤仅0.5%左右。【推荐理由】市场今日出现普涨行情，但投资者仍需保留部分现金管理类资产应对波动。中短债基金流动性好、波动极小、收益稳定，是闲置资金的理想去处，持有3-6个月以上几乎不会亏损本金。【风险提示】收益率相对较低，不适合追求高回报的投资者。'
            }
        ],
        riskWarning: [
            '今日北向资金大幅净买入143亿元，外资积极布局科技成长，市场做多情绪回暖',
            '沪指放量站上60日均线，技术面中期趋势转强，但需警惕4100点上方压力',
            '医药生物板块净流出超24亿元，短期回避；新能源板块持续调整',
            '液冷服务器、商业航天等热点短期涨幅较大，追高需谨慎'
        ],
        operationAdvice: [
            '积极型配置建议：科创50ETF 40% + 沪深300ETF 30% + 中证红利ETF 20% + 债券 10%',
            '当前市场放量上攻，建议保持7成左右仓位，顺势而为',
            '重点关注商业航天、AI算力、光通信等主线方向，回调即是加仓机会',
            '控制节奏，不盲目追高热点，等回调再低吸核心标的'
        ]
    },
    
    // 激进型推荐基金
    aggressiveFunds: [
        {
            code: '588000',
            name: '华夏科创50ETF',
            change: 40.59,
            sourceUrl: 'https://fund.eastmoney.com/588000.html',
            reason: '【投资方向】跟踪科创50指数，覆盖科创板硬科技龙头企业，包括半导体、新能源、医药等前沿领域。【近期表现】今日实时价格1.51元（2026-04-20），近一年涨幅40.59%，科创50指数今日大涨1.64%领跑。【推荐理由】AI算力/光模块/CPO等板块一季报业绩暴增，中际旭创、天孚通信等预增120%-260%，基本面支撑强劲。科创50ETF高弹性高波动，适合风险承受能力较强的投资者，在科技牛市中往往有超额收益。【风险提示】波动较大，需承受较大回撤，建议采用定投方式布局。',
            minInvestment: '5000元'
        },
        {
            code: '510500',
            name: '南方中证500ETF',
            change: 50.39,
            sourceUrl: 'https://fund.eastmoney.com/510500.html',
            reason: '【投资方向】跟踪中证500指数，选取A股市场中盘股代表，行业分布均衡，覆盖众多细分行业龙头。【近期表现】今日实时价格8.31元（2026-04-20），近一年涨幅50.39%，规模达1580亿元。【推荐理由】中证500指数今日上涨0.22%，市场风格向中小盘成长切换。指数估值处于历史中低位，安全边际较高，且中小盘股弹性更大，在市场上涨时往往有较好表现。【风险提示】需关注经济复苏力度，中小盘股对流动性敏感度更高。',
            minInvestment: '5000元'
        }
    ],
    
    // 午后报告
    afternoonReport: {
        time: '13:30',
        review: '午后市场延续强势格局，沪指在4070点上方强势震荡。科创50大涨1.64%领跑，商业航天/国防军工全线爆发，光纤/光通信/液冷服务器概念持续走强。个股呈现普涨格局，超3300只个股上涨，赚钱效应明显回升。北向资金大幅净买入，外资积极布局。',
        sectorRotation: [
            { sector: '国防军工', change: 3.5 },
            { sector: '电子', change: 1.5 },
            { sector: '通信', change: 2.1 },
            { sector: '医药生物', change: -1.8 },
            { sector: '电力设备', change: -1.2 }
        ],
        outlook: '沪指放量站上60日均线，技术面中期趋势转强。北向资金大幅净流入，外资积极布局科技成长。商业航天、AI算力、光通信等新质生产力赛道成为资金主线。建议保持7成仓位，重点关注主线板块的回调机会。'
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: { value: 89.5, change: 2.5, unit: '亿' },
        northFund: { value: 143.0, change: 35.8, unit: '亿' },
        southFund: { value: 42.5, change: 12.3, unit: '亿' },
        mainFundHistory: [
            { date: '2026-04-16', value: -189.2 },
            { date: '2026-04-17', value: -125.5 },
            { date: '2026-04-18', value: 56.3 },
            { date: '2026-04-19', value: 125.8 },
            { date: '2026-04-20', value: 89.5 }
        ],
        northFundHistory: [
            { date: '2026-04-16', value: 28.5 },
            { date: '2026-04-17', value: 65.2 },
            { date: '2026-04-18', value: -18.5 },
            { date: '2026-04-19', value: 42.8 },
            { date: '2026-04-20', value: 143.0 }
        ],
        sectorFunds: [
            { sector: '国防军工', change: 156.8 },
            { sector: '电子', change: 89.5 },
            { sector: '通信', change: 52.3 },
            { sector: '计算机', change: 38.5 },
            { sector: '医药生物', change: -24.5 },
            { sector: '电力设备', change: -45.3 }
        ]
    },
    
    // 基金数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            code: '510300',
            type: 'fund',
            price: 4.76,
            change: 28.65,
            dayChange: 0.44,
            weekChange: 1.8,
            monthChange: 4.2,
            yearChange: 28.65,
            nav: 4.7393,
            navDate: '2026-04-17',
            manager: '华泰柏瑞基金',
            size: '4222亿',
            description: '跟踪沪深300指数，覆盖A股市场规模最大、经营最稳定的300家龙头企业。沪指今日放量站上60日均线，沪深300将受益于指数上涨。',
            navHistory: [
                { date: '2026-04-06', value: 4.65 },
                { date: '2026-04-07', value: 4.45 },
                { date: '2026-04-08', value: 4.60 },
                { date: '2026-04-09', value: 4.57 },
                { date: '2026-04-10', value: 4.64 },
                { date: '2026-04-13', value: 4.65 },
                { date: '2026-04-14', value: 4.71 },
                { date: '2026-04-15', value: 4.68 },
                { date: '2026-04-16', value: 4.73 },
                { date: '2026-04-17', value: 4.74 },
                { date: '2026-04-20', value: 4.76 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            code: '515080',
            type: 'fund',
            price: 1.59,
            change: 10.87,
            dayChange: -0.19,
            weekChange: 0.5,
            monthChange: -2.91,
            yearChange: 10.87,
            nav: 1.5902,
            navDate: '2026-04-17',
            manager: '招商基金',
            size: '89亿',
            description: '跟踪中证红利指数，选取分红稳定、股息率高的企业。股息率稳定在4%以上，是稳健型投资者的避风港。'
        },
        '110017': {
            name: '易方达增强回报债券A',
            code: '110017',
            type: 'fund',
            price: 1.394,
            change: 5.78,
            dayChange: -0.14,
            weekChange: 0.15,
            monthChange: 0.07,
            yearChange: 5.78,
            nav: 1.394,
            navDate: '2026-04-17',
            manager: '易方达基金',
            size: '317亿',
            description: '固收+产品，80%以上投资债券，少量股票/可转债增强收益。近一年收益率5.78%，最大回撤控制在3%以内，适合稳健型投资者。'
        },
        '006546': {
            name: '兴银中短债C',
            code: '006546',
            type: 'fund',
            price: 1.2428,
            change: 1.76,
            dayChange: 0.02,
            weekChange: 0.1,
            monthChange: 0.29,
            yearChange: 1.76,
            nav: 1.2428,
            navDate: '2026-04-13',
            manager: '兴银基金',
            size: '12亿',
            description: '中短债基金，投资于短期债券，波动极小。年化收益1.76%，持有3-6个月风险极低，是现金管理的理想替代品。'
        },
        '588000': {
            name: '华夏科创50ETF',
            code: '588000',
            type: 'fund',
            price: 1.51,
            change: 40.59,
            dayChange: 0.73,
            weekChange: 6.5,
            monthChange: 5.16,
            yearChange: 40.59,
            nav: 1.4997,
            navDate: '2026-04-17',
            manager: '华夏基金',
            size: '760亿',
            description: '跟踪科创50指数，今日大涨1.64%领跑。AI算力/光模块等一季报业绩暴增，基本面支撑强劲。高弹性高波动，适合激进型投资者。',
            navHistory: [
                { date: '2026-04-06', value: 1.43 },
                { date: '2026-04-07', value: 1.34 },
                { date: '2026-04-08', value: 1.43 },
                { date: '2026-04-09', value: 1.42 },
                { date: '2026-04-10', value: 1.44 },
                { date: '2026-04-13', value: 1.45 },
                { date: '2026-04-14', value: 1.48 },
                { date: '2026-04-15', value: 1.48 },
                { date: '2026-04-16', value: 1.50 },
                { date: '2026-04-17', value: 1.50 },
                { date: '2026-04-20', value: 1.51 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            code: '510500',
            type: 'fund',
            price: 8.31,
            change: 50.39,
            dayChange: 0.22,
            weekChange: 3.2,
            monthChange: 2.55,
            yearChange: 50.39,
            nav: 8.2884,
            navDate: '2026-04-17',
            manager: '南方基金',
            size: '1580亿',
            description: '跟踪中证500指数，今日上涨0.22%。估值处于历史中低位，安全边际较高，中小盘股弹性更大。',
            navHistory: [
                { date: '2026-04-06', value: 8.04 },
                { date: '2026-04-07', value: 7.64 },
                { date: '2026-04-08', value: 8.01 },
                { date: '2026-04-09', value: 7.97 },
                { date: '2026-04-10', value: 8.04 },
                { date: '2026-04-13', value: 8.04 },
                { date: '2026-04-14', value: 8.16 },
                { date: '2026-04-15', value: 8.12 },
                { date: '2026-04-16', value: 8.25 },
                { date: '2026-04-17', value: 8.29 },
                { date: '2026-04-20', value: 8.31 }
            ]
        }
    },
    
    stockData: {
        '600036': {
            name: '招商银行',
            code: '600036',
            type: 'stock',
            price: 38.50,
            change: 0.85,
            changePercent: 2.26,
            open: 37.80,
            high: 38.85,
            low: 37.65,
            volume: 45678200,
            amount: 17.5,
            pe: 8.5,
            pb: 1.2,
            marketCap: 9500,
            weekChange: 1.2,
            monthChange: 3.5,
            sourceUrl: 'https://quote.eastmoney.com/sh600036.html'
        },
        '000001': {
            name: '平安银行',
            code: '000001',
            type: 'stock',
            price: 12.35,
            change: -0.25,
            changePercent: -1.98,
            open: 12.50,
            high: 12.55,
            low: 12.28,
            volume: 32567800,
            amount: 4.0,
            pe: 6.8,
            pb: 0.95,
            marketCap: 2400,
            weekChange: -0.8,
            monthChange: 1.2,
            sourceUrl: 'https://quote.eastmoney.com/sz000001.html'
        }
    }
};
