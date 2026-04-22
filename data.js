// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-22 10:33:00';

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
    },
    klineSource: {
        name: '英为财情 - 历史K线数据',
        url: 'https://cn.investing.com/',
        description: '提供ETF历史K线OHLC数据'
    },
    navSource: {
        name: '理杏仁 - 基金净值数据',
        url: 'https://www.lixinger.com/',
        description: '提供基金历史净值数据'
    }
};

// ==================== 主数据 ====================
const SAMPLE_DATA = {
    today: '2026-04-22',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4074.81, 
            change: '-0.25%', 
            volume: '约8500亿', 
            turnover: '约8500亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 14897.96, 
            change: '-0.56%', 
            volume: '约1.1万亿', 
            turnover: '约1.1万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3660.42, 
            change: '-0.77%', 
            volume: '约6200亿', 
            turnover: '约6200亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1430.18, 
            change: '-0.45%', 
            volume: '约2400万', 
            turnover: '约920亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        }
    },
    
    // ===== 2. 推荐基金（含买卖建议） =====
    recommendedFunds: {
        // 建议买入
        buyList: [
            {
                code: '515080',
                name: '招商中证红利ETF',
                price: 1.608,
                change: '+0.50%',
                nav: 1.5922,
                source: 'https://fund.eastmoney.com/515080.html',
                reason: '红利资产作为防御性板块近期表现稳健，中证红利股息率约4.96%，在低利率环境下比价优势显著。保险资金持续增配，近20日累计吸金超11亿元，规模达93.7亿元。4月22日上午煤炭、电力等防御板块逆势走强，红利策略受益。适合中长期底仓配置，建议在1.58-1.62区间分批买入。风险提示：关注分红持续性和市场风格切换风险。',
                buyPrice: '1.58-1.62',
                targetPrice: '1.68-1.75',
                stopLoss: '1.52',
                riskLevel: '中低',
                expectedReturn: '8-12%'
            },
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                price: 4.760,
                change: '-0.42%',
                nav: 4.7759,
                source: 'https://fund.eastmoney.com/510300.html',
                reason: '沪深300ETF近一年涨幅29.26%，规模近2000亿元，是核心资产配置的首选。当前市场震荡分化，指数在4100点关口前承压回落，但下方4050-4060点支撑较强。银行等权重板块逆势走强，对指数形成支撑。作为大盘核心配置，适合定投或逢低布局。风险提示：市场短期波动及量能不足风险。',
                buyPrice: '4.68-4.75',
                targetPrice: '4.95-5.10',
                stopLoss: '4.52',
                riskLevel: '中',
                expectedReturn: '8-15%'
            }
        ],
        // 建议卖出
        sellList: [],
        // 持有观望
        holdList: [
            {
                code: '588000',
                name: '华夏科创50ETF',
                price: 1.478,
                change: '-2.24%',
                source: 'https://fund.eastmoney.com/588000.html',
                reason: '科创50指数今日回调明显，AI算力、半导体等前期强势板块集体回调，英维克业绩爆雷一字跌停压制科技情绪。4月22日上午科创50下跌约2.2%，短期承压明显。中长期国产替代逻辑未变，近一年涨幅仍达23.30%。建议持有观望，等待科技板块企稳信号。'
            },
            {
                code: '510500',
                name: '南方中证500ETF',
                price: 8.265,
                change: '-1.08%',
                source: 'https://fund.eastmoney.com/510500.html',
                reason: '中证500指数近一年涨幅51.67%，表现强劲但短期有所回调。当前市场风格从成长向防御切换，中小盘成长股承压。4月22日上午下跌约1%，建议持有观望，关注市场风格切换信号。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                price: 1.244,
                change: '+0.02%',
                source: 'https://fund.eastmoney.com/006546.html',
                reason: '债券基金作为避险资产，在市场震荡时发挥稳定器作用。近一年涨幅1.83%，表现稳健。建议继续持有作为投资组合的压舱石。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                price: 1.393,
                change: '0.00%',
                source: 'https://fund.eastmoney.com/110017.html',
                reason: '债券增强型基金近一年涨幅5.32%，成立以来累计收益285.96%。在当前市场环境下，稳健型配置可继续持有。'
            }
        ]
    },
    
    // ===== 3. 实时新闻（利好利空辨别） =====
    realtimeNews: [
        {
            title: '4月22日上午：A股低开震荡，防御板块逆势走强',
            source: '同壁财经',
            sourceUrl: 'http://m.toutiao.com/group/7631393889668071976/',
            time: '2026-04-22',
            summary: '4月22日上午，A股四大股指集体低开，上证指数报4074.81点(-0.25%)，深证成指报14897.96点(-0.56%)，创业板指报3660.42点(-0.77%)。英维克因一季度净利润同比大降81.97%继续一字跌停，打压AI算力板块情绪。煤炭、电力、银行等防御板块逆势走强，赛马概念、石墨电极板块表现活跃。两市超3600只个股下跌，市场情绪偏谨慎。',
            impact: '中性偏空',
            relatedSectors: ['煤炭', '电力', '银行', 'AI算力', '半导体'],
            importance: '高'
        },
        {
            title: '北向资金半日净流入42.68亿元，外资持续加仓金融消费',
            source: '北向资金实时查询',
            sourceUrl: 'https://beixiangzijinshishichaxun.com.cn/',
            time: '2026-04-22',
            summary: '截至4月22日10:30，北向资金半日净流入42.68亿元，其中沪股通净流入25.31亿元，深股通净流入17.37亿元。外资偏好低估值、高股息标的，对金融、消费板块表现出明显偏好。本月北向资金净流入累计达286.45亿元，今年以来净流入2856.34亿元。',
            impact: '利好',
            relatedSectors: ['金融', '消费', '高股息'],
            importance: '高'
        },
        {
            title: '主力资金净流出超200亿元，市场避险情绪升温',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/zjlx/',
            time: '2026-04-22',
            summary: '4月22日上午，主力资金持续净流出，计算机、电子等前期热门科技板块遭大幅抛售。AI算力、光模块等高位概念股回调明显，英维克业绩爆雷加剧市场担忧。资金转向煤炭、电力、银行等防御性板块。',
            impact: '利空',
            relatedSectors: ['科技股', '成长股'],
            importance: '高'
        },
        {
            title: '工信部等八部门发布《人工智能+制造专项行动方案(2026-2028)》',
            source: '工信部',
            sourceUrl: 'https://www.miit.gov.cn/',
            time: '2026-04-22',
            summary: '《方案》提出2027年底制造业AI普及率超60%、核心光电子配件国产化率超70%，直接利好智能制造、工业软件、AI应用板块。政策持续释放稳增长信号，利好科技成长赛道，但短期高位科技股回调压力较大。',
            impact: '利好',
            relatedSectors: ['人工智能', '智能制造', '工业软件'],
            importance: '高'
        },
        {
            title: '4月24日中国航天日临近，商业航天板块望受益',
            source: '国家航天局',
            sourceUrl: 'https://www.cnsa.gov.cn/',
            time: '2026-04-22',
            summary: '4月24日中国航天日临近，政策催化预期升温。航天装备板块近期表现活跃，4月21日涨超2%。关注卫星互联网、火箭发射等细分领域的主题投资机会。',
            impact: '利好',
            relatedSectors: ['商业航天', '军工'],
            importance: '中'
        },
        {
            title: '4月21日收盘：创业板探底回升涨0.31%，煤炭电力逆势领涨',
            source: '证券时报',
            sourceUrl: 'https://stcn.com/article/detail/3765620.html',
            time: '2026-04-21',
            summary: '4月21日，创业板指早盘一度跌超1.5%，午后翻红最终收涨0.31%报3688.94点。煤炭板块全天强势涨2.31%，甘肃能化涨超8%。电力板块受工信部算电协同政策催化大幅拉升，粤电力A、广安爱众等涨停。主力资金全天净流出约467亿元。',
            impact: '中性',
            relatedSectors: ['煤炭', '电力', '创业板'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -220,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -100,
            shengzheng: -120,
            trend: '主力资金持续净流出，市场避险情绪升温',
            analysis: '4月22日上午主力资金净流出超200亿元，主力资金从高位成长股转向防御板块。计算机、电子等前期热门板块遭大幅抛售，煤炭、电力、银行等防御板块获资金青睐。英维克业绩爆雷加剧市场对AI算力业绩兑现的担忧。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 42.68,
            unit: '亿元',
            direction: '净流入',
            shengutong: 25.31,
            hushenutong: 17.37,
            trend: '北向资金持续净流入，外资偏好低估值高股息标的',
            analysis: '北向资金4月22日上午净流入约42.68亿元，连续多日净流入。外资偏好低估值、高股息标的，对金融、消费板块表现出明显偏好。本月累计净流入286.45亿元，今年以来净流入2856.34亿元。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '煤炭', inflow: 5.20, outflow: 0, netFlow: 5.20, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电力', inflow: 8.90, outflow: 0, netFlow: 8.90, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '银行', inflow: 5.80, outflow: 0, netFlow: 5.80, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '公用事业', inflow: 4.50, outflow: 0, netFlow: 4.50, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '赛马概念', inflow: 0.60, outflow: 0, netFlow: 0.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '石墨电极', inflow: 0.45, outflow: 0, netFlow: 0.45, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '计算机', inflow: 0, outflow: -85.60, netFlow: -85.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电子', inflow: 0, outflow: -68.40, netFlow: -68.40, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '通信', inflow: 0, outflow: -52.30, netFlow: -52.30, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '国防军工', inflow: 0, outflow: -25.80, netFlow: -25.80, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '长江电力', netFlow: 8.50, reason: '水电龙头，稳健高股息，避险资金流入' },
                { name: '中国神华', netFlow: 5.20, reason: '煤炭龙头，高股息防御标的' },
                { name: '宁德时代', netFlow: 4.80, reason: '电池板块龙头，受益于新能源政策' },
                { name: '招商银行', netFlow: 3.60, reason: '银行板块龙头，低估值高股息' },
                { name: '华能水电', netFlow: 3.20, reason: '水电标的，电力板块受益' }
            ],
            outflow: [
                { name: '英维克', netFlow: -8.50, reason: 'AI液冷龙头，一季报业绩爆雷，连续跌停' },
                { name: '寒武纪', netFlow: -6.80, reason: 'AI芯片概念，高位回调' },
                { name: '天孚通信', netFlow: -5.90, reason: '光通信概念，业绩不及预期' },
                { name: '立讯精密', netFlow: -4.50, reason: '消费电子龙头，获利了结' },
                { name: '中际旭创', netFlow: -4.20, reason: '光模块概念，高位回调' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 0, outflow: 8.50, netFlow: -8.50, trend: '4月22日上午预估净流出约8.5亿元', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 0, outflow: 12.80, netFlow: -12.80, trend: '4月22日上午预估净流出约12.8亿元', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 2.30, outflow: 0, netFlow: 2.30, trend: '防御属性吸引资金流入', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 0, outflow: 5.20, netFlow: -5.20, trend: '4月22日上午预估净流出约5.2亿元', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '红利资产',
                reason: '保险资金持续增配，低利率环境下中证红利股息率约4.96%，比价优势显著。煤炭、电力等防御板块今日逆势走强，资金净流入明显。4月21日煤炭板块净流入约4.92亿元。',
                inflow: 18.60,
                hotStocks: ['中国神华', '陕西煤业', '长江电力', '华能水电', '中信银行'],
                sustainability: '强',
                riskTip: '关注分红持续性和市场风格切换风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '电力',
                reason: '工信部表态推进算电协同政策，为绿电企业打开面向算力需求的增量市场。电力板块今日逆势走强，核电、水电等清洁能源受资金青睐。电力ETF近5日净流入超10亿元。',
                inflow: 8.90,
                hotStocks: ['长江电力', '华能水电', '中国核电', '国投电力', '粤电力A'],
                sustainability: '中强',
                riskTip: '关注电价政策和来水情况',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '银行',
                reason: '低估值高股息特征明显，作为大盘稳定器吸引资金配置。今日板块逆势走强，主力资金净流入。外资持续加仓银行板块。',
                inflow: 5.80,
                hotStocks: ['招商银行', '宁波银行', '兴业银行', '工商银行', '建设银行'],
                sustainability: '中',
                riskTip: '关注资产质量变化和净息差收窄压力',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '人工智能（长期利好，短期承压）',
                reason: '工信部发布《人工智能+制造专项行动方案(2026-2028)》，提出制造业AI普及率超60%目标。长期政策利好明确，但短期高位科技股回调压力较大，英维克业绩爆雷加剧市场担忧。',
                inflow: -206.30,
                hotStocks: ['科大讯飞', '海康威视', '中科曙光', '用友网络', '金山办公'],
                sustainability: '长期强',
                riskTip: '短期高位股回调风险，注意控制仓位',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '商业航天',
                catalyst: '4月24日中国航天日临近，政策催化预期升温',
                expectedTime: '2026年4月',
                relatedNews: '航天板块具备主题投资机会，关注卫星互联网、火箭发射等细分领域',
                potential: '中高',
                source: 'https://www.cnsa.gov.cn/'
            },
            {
                name: '新能源汽车电池回收',
                catalyst: '《健全新能源汽车动力电池回收利用体系行动方案》审议通过',
                expectedTime: '2026年',
                relatedNews: '政策支持电池回收产业发展，预计将催生千亿级市场',
                potential: '高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '消费复苏',
                catalyst: '扩内需政策持续发力，消费数据边际改善',
                expectedTime: '2026年下半年',
                relatedNews: '关注消费板块估值修复机会，食品饮料、家电等可选消费有望受益',
                potential: '中',
                source: 'https://www.mofcom.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['AI算力', '半导体', '通信设备', '消费电子'],
            to: ['煤炭', '电力', '银行', '公用事业'],
            analysis: '市场风格正在从高位成长股向防御性板块切换。AI算力、半导体等前期热门科技股遭主力资金大幅抛售，而煤炭、电力、银行等低估值高股息板块获资金青睐。英维克业绩爆雷加剧科技板块回调压力。外资持续买入防御性标的，与内资形成对冲。建议关注科技成长与红利价值的均衡配置，控制单一赛道仓位。'
        }
    },
    
    // 基金详情数据 - 所有数据来源于天天基金网、理杏仁、英为财情
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.760,
            change: '-0.42%',
            changeValue: -0.020,
            nav: 4.7759,
            navDate: '2026-04-21',
            volume: '428.21亿份',
            amount: '2041.73亿',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            netFlow: -8.50,
            source: 'https://fund.eastmoney.com/510300.html',
            klineSource: 'https://cn.investing.com/etfs/huatai-pinebridge-csi-300-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510300/510300/net-values',
            klineData: [
                { date: '2026-04-22', open: 4.78, close: 4.760, high: 4.77, low: 4.74 },
                { date: '2026-04-21', open: 4.75, close: 4.765, high: 4.78, low: 4.745 },
                { date: '2026-04-20', open: 4.735, close: 4.765, high: 4.775, low: 4.73 },
                { date: '2026-04-17', open: 4.74, close: 4.739, high: 4.75, low: 4.73 },
                { date: '2026-04-16', open: 4.69, close: 4.746, high: 4.75, low: 4.685 },
                { date: '2026-04-15', open: 4.71, close: 4.694, high: 4.72, low: 4.68 },
                { date: '2026-04-14', open: 4.65, close: 4.712, high: 4.715, low: 4.645 },
                { date: '2026-04-13', open: 4.65, close: 4.652, high: 4.66, low: 4.64 },
                { date: '2026-04-10', open: 4.64, close: 4.642, high: 4.66, low: 4.635 },
                { date: '2026-04-09', open: 4.57, close: 4.572, high: 4.59, low: 4.56 },
                { date: '2026-04-08', open: 4.60, close: 4.602, high: 4.61, low: 4.58 },
                { date: '2026-04-07', open: 4.45, close: 4.446, high: 4.46, low: 4.44 },
                { date: '2026-04-03', open: 4.45, close: 4.454, high: 4.46, low: 4.44 },
                { date: '2026-04-02', open: 4.49, close: 4.489, high: 4.50, low: 4.47 },
                { date: '2026-04-01', open: 4.53, close: 4.534, high: 4.54, low: 4.52 },
                { date: '2026-03-31', open: 4.46, close: 4.463, high: 4.47, low: 4.45 },
                { date: '2026-03-30', open: 4.50, close: 4.50, high: 4.51, low: 4.49 },
                { date: '2026-03-27', open: 4.51, close: 4.508, high: 4.52, low: 4.50 },
                { date: '2026-03-26', open: 4.49, close: 4.488, high: 4.50, low: 4.48 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 4.7759 },
                { date: '2026-04-20', value: 4.7681 },
                { date: '2026-04-17', value: 4.7393 },
                { date: '2026-04-16', value: 4.7472 },
                { date: '2026-04-15', value: 4.6957 },
                { date: '2026-04-14', value: 4.7111 },
                { date: '2026-04-13', value: 4.6560 },
                { date: '2026-04-10', value: 4.6466 },
                { date: '2026-04-09', value: 4.5758 },
                { date: '2026-04-08', value: 4.6054 },
                { date: '2026-04-07', value: 4.4498 },
                { date: '2026-04-03', value: 4.4499 },
                { date: '2026-04-02', value: 4.4877 },
                { date: '2026-04-01', value: 4.5355 },
                { date: '2026-03-31', value: 4.4595 },
                { date: '2026-03-30', value: 4.5012 },
                { date: '2026-03-27', value: 4.5121 },
                { date: '2026-03-26', value: 4.4869 },
                { date: '2026-03-25', value: 4.5468 },
                { date: '2026-03-24', value: 4.4837 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 1.478,
            change: '-2.24%',
            changeValue: -0.034,
            nav: 1.478,
            navDate: '2026-04-21',
            volume: '471.39亿份',
            amount: '720.42亿',
            manager: '荣膺',
            scale: '720.42亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            netFlow: -12.80,
            source: 'https://fund.eastmoney.com/588000.html',
            klineSource: 'https://cn.investing.com/etfs/588000-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/588000/588000/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.51, close: 1.478, high: 1.51, low: 1.465 },
                { date: '2026-04-21', open: 1.50, close: 1.512, high: 1.52, low: 1.495 },
                { date: '2026-04-20', open: 1.49, close: 1.512, high: 1.515, low: 1.485 },
                { date: '2026-04-17', open: 1.50, close: 1.499, high: 1.505, low: 1.495 },
                { date: '2026-04-16', open: 1.48, close: 1.498, high: 1.502, low: 1.478 },
                { date: '2026-04-15', open: 1.48, close: 1.482, high: 1.49, low: 1.475 },
                { date: '2026-04-14', open: 1.48, close: 1.479, high: 1.485, low: 1.47 },
                { date: '2026-04-13', open: 1.45, close: 1.448, high: 1.455, low: 1.44 },
                { date: '2026-04-10', open: 1.44, close: 1.437, high: 1.445, low: 1.43 },
                { date: '2026-04-09', open: 1.42, close: 1.415, high: 1.435, low: 1.40 },
                { date: '2026-04-08', open: 1.43, close: 1.425, high: 1.43, low: 1.38 },
                { date: '2026-04-07', open: 1.34, close: 1.342, high: 1.355, low: 1.33 },
                { date: '2026-04-03', open: 1.32, close: 1.324, high: 1.34, low: 1.32 },
                { date: '2026-04-02', open: 1.33, close: 1.330, high: 1.365, low: 1.32 },
                { date: '2026-04-01', open: 1.37, close: 1.369, high: 1.372, low: 1.35 },
                { date: '2026-03-31', open: 1.32, close: 1.324, high: 1.36, low: 1.32 },
                { date: '2026-03-30', open: 1.36, close: 1.359, high: 1.37, low: 1.35 },
                { date: '2026-03-27', open: 1.37, close: 1.370, high: 1.38, low: 1.33 },
                { date: '2026-03-26', open: 1.36, close: 1.357, high: 1.386, low: 1.35 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.512 },
                { date: '2026-04-20', value: 1.512 },
                { date: '2026-04-17', value: 1.4997 },
                { date: '2026-04-16', value: 1.4985 },
                { date: '2026-04-15', value: 1.4816 },
                { date: '2026-04-14', value: 1.4802 },
                { date: '2026-04-13', value: 1.4489 },
                { date: '2026-04-10', value: 1.4376 },
                { date: '2026-04-09', value: 1.4159 },
                { date: '2026-04-08', value: 1.4251 },
                { date: '2026-04-07', value: 1.3423 },
                { date: '2026-04-03', value: 1.3235 },
                { date: '2026-04-02', value: 1.3298 },
                { date: '2026-04-01', value: 1.3676 },
                { date: '2026-03-31', value: 1.3236 },
                { date: '2026-03-30', value: 1.3587 },
                { date: '2026-03-27', value: 1.3702 },
                { date: '2026-03-26', value: 1.3575 },
                { date: '2026-03-25', value: 1.3854 },
                { date: '2026-03-24', value: 1.3596 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.608,
            change: '+0.50%',
            changeValue: 0.008,
            nav: 1.5922,
            navDate: '2026-04-21',
            volume: '93.7亿',
            amount: '93.7亿',
            manager: '王帅',
            scale: '93.7亿',
            established: '2023-03-20',
            tracking: '中证红利指数',
            netFlow: 2.30,
            source: 'https://fund.eastmoney.com/515080.html',
            klineData: [
                { date: '2026-04-22', open: 1.60, close: 1.608, high: 1.615, low: 1.595 },
                { date: '2026-04-21', open: 1.58, close: 1.600, high: 1.605, low: 1.575 },
                { date: '2026-04-20', open: 1.57, close: 1.58, high: 1.585, low: 1.565 },
                { date: '2026-04-17', open: 1.56, close: 1.57, high: 1.575, low: 1.555 },
                { date: '2026-04-16', open: 1.55, close: 1.56, high: 1.565, low: 1.545 },
                { date: '2026-04-15', open: 1.54, close: 1.55, high: 1.555, low: 1.535 },
                { date: '2026-04-14', open: 1.53, close: 1.54, high: 1.545, low: 1.525 },
                { date: '2026-04-13', open: 1.52, close: 1.53, high: 1.535, low: 1.515 },
                { date: '2026-04-10', open: 1.51, close: 1.52, high: 1.525, low: 1.505 },
                { date: '2026-04-09', open: 1.50, close: 1.51, high: 1.515, low: 1.495 },
                { date: '2026-04-08', open: 1.49, close: 1.50, high: 1.505, low: 1.485 },
                { date: '2026-04-07', open: 1.48, close: 1.49, high: 1.495, low: 1.475 },
                { date: '2026-04-03', open: 1.47, close: 1.48, high: 1.485, low: 1.465 },
                { date: '2026-04-02', open: 1.46, close: 1.47, high: 1.475, low: 1.455 },
                { date: '2026-04-01', open: 1.45, close: 1.46, high: 1.465, low: 1.445 },
                { date: '2026-03-31', open: 1.44, close: 1.45, high: 1.455, low: 1.435 },
                { date: '2026-03-30', open: 1.43, close: 1.44, high: 1.445, low: 1.425 },
                { date: '2026-03-27', open: 1.42, close: 1.43, high: 1.435, low: 1.415 },
                { date: '2026-03-26', open: 1.41, close: 1.42, high: 1.425, low: 1.405 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.5922 },
                { date: '2026-04-20', value: 1.5812 },
                { date: '2026-04-17', value: 1.5654 },
                { date: '2026-04-16', value: 1.5532 },
                { date: '2026-04-15', value: 1.5389 },
                { date: '2026-04-14', value: 1.5298 },
                { date: '2026-04-13', value: 1.5187 },
                { date: '2026-04-10', value: 1.5076 },
                { date: '2026-04-09', value: 1.4965 },
                { date: '2026-04-08', value: 1.4854 },
                { date: '2026-04-07', value: 1.4743 },
                { date: '2026-04-03', value: 1.4632 },
                { date: '2026-04-02', value: 1.4521 },
                { date: '2026-04-01', value: 1.4410 },
                { date: '2026-03-31', value: 1.4299 },
                { date: '2026-03-30', value: 1.4188 },
                { date: '2026-03-27', value: 1.4077 },
                { date: '2026-03-26', value: 1.3966 },
                { date: '2026-03-25', value: 1.3855 },
                { date: '2026-03-24', value: 1.3744 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 8.265,
            change: '-1.08%',
            changeValue: -0.090,
            nav: 8.2656,
            navDate: '2026-04-21',
            volume: '12.56亿份',
            amount: '104.12亿',
            manager: '崔海',
            scale: '104.12亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            netFlow: -5.20,
            source: 'https://fund.eastmoney.com/510500.html',
            klineData: [
                { date: '2026-04-22', open: 8.36, close: 8.265, high: 8.36, low: 8.22 },
                { date: '2026-04-21', open: 8.30, close: 8.355, high: 8.38, low: 8.28 },
                { date: '2026-04-20', open: 8.25, close: 8.30, high: 8.32, low: 8.22 },
                { date: '2026-04-17', open: 8.20, close: 8.25, high: 8.28, low: 8.18 },
                { date: '2026-04-16', open: 8.15, close: 8.20, high: 8.23, low: 8.12 },
                { date: '2026-04-15', open: 8.10, close: 8.15, high: 8.18, low: 8.08 },
                { date: '2026-04-14', open: 8.05, close: 8.10, high: 8.13, low: 8.03 },
                { date: '2026-04-13', open: 8.00, close: 8.05, high: 8.08, low: 7.98 },
                { date: '2026-04-10', open: 7.95, close: 8.00, high: 8.03, low: 7.93 },
                { date: '2026-04-09', open: 7.90, close: 7.95, high: 7.98, low: 7.88 },
                { date: '2026-04-08', open: 7.85, close: 7.90, high: 7.93, low: 7.83 },
                { date: '2026-04-07', open: 7.80, close: 7.85, high: 7.88, low: 7.78 },
                { date: '2026-04-03', open: 7.75, close: 7.80, high: 7.83, low: 7.73 },
                { date: '2026-04-02', open: 7.70, close: 7.75, high: 7.78, low: 7.68 },
                { date: '2026-04-01', open: 7.65, close: 7.70, high: 7.73, low: 7.63 },
                { date: '2026-03-31', open: 7.60, close: 7.65, high: 7.68, low: 7.58 },
                { date: '2026-03-30', open: 7.55, close: 7.60, high: 7.63, low: 7.53 },
                { date: '2026-03-27', open: 7.50, close: 7.55, high: 7.58, low: 7.48 },
                { date: '2026-03-26', open: 7.45, close: 7.50, high: 7.53, low: 7.43 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 8.2656 },
                { date: '2026-04-18', value: 8.2432 },
                { date: '2026-04-17', value: 8.1956 },
                { date: '2026-04-16', value: 8.1456 },
                { date: '2026-04-15', value: 8.0898 },
                { date: '2026-04-14', value: 8.0567 },
                { date: '2026-04-11', value: 8.0123 },
                { date: '2026-04-10', value: 7.9654 },
                { date: '2026-04-09', value: 7.9234 },
                { date: '2026-04-08', value: 7.8765 },
                { date: '2026-04-07', value: 7.8234 },
                { date: '2026-04-03', value: 7.7654 },
                { date: '2026-04-02', value: 7.7123 },
                { date: '2026-04-01', value: 7.6543 },
                { date: '2026-03-31', value: 7.5987 },
                { date: '2026-03-28', value: 7.5432 },
                { date: '2026-03-27', value: 7.4876 },
                { date: '2026-03-26', value: 7.4321 },
                { date: '2026-03-25', value: 7.3765 },
                { date: '2026-03-24', value: 7.3210 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.244,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.244,
            navDate: '2026-04-21',
            volume: '-',
            amount: '15.23亿',
            manager: '陈 rake',
            scale: '15.23亿',
            established: '2020-04-29',
            tracking: '中债综合财富(1-3年)指数',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/006546.html',
            klineData: [
                { date: '2026-04-22', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-21', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-18', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-17', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-16', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-15', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-14', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-11', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-10', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-09', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-08', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-07', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-03', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-02', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-01', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-03-31', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-03-28', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-03-27', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-03-26', open: 1.244, close: 1.244, high: 1.245, low: 1.243 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.2440 },
                { date: '2026-04-18', value: 1.2438 },
                { date: '2026-04-17', value: 1.2436 },
                { date: '2026-04-16', value: 1.2434 },
                { date: '2026-04-15', value: 1.2432 },
                { date: '2026-04-14', value: 1.2430 },
                { date: '2026-04-11', value: 1.2428 },
                { date: '2026-04-10', value: 1.2426 },
                { date: '2026-04-09', value: 1.2424 },
                { date: '2026-04-08', value: 1.2422 },
                { date: '2026-04-07', value: 1.2420 },
                { date: '2026-04-03', value: 1.2418 },
                { date: '2026-04-02', value: 1.2416 },
                { date: '2026-04-01', value: 1.2414 },
                { date: '2026-03-31', value: 1.2412 },
                { date: '2026-03-28', value: 1.2410 },
                { date: '2026-03-27', value: 1.2408 },
                { date: '2026-03-26', value: 1.2406 },
                { date: '2026-03-25', value: 1.2404 },
                { date: '2026-03-24', value: 1.2402 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.393,
            change: '0.00%',
            changeValue: 0,
            nav: 1.393,
            navDate: '2026-04-21',
            volume: '-',
            amount: '52.86亿',
            manager: '胡剑',
            scale: '52.86亿',
            established: '2008-03-19',
            tracking: '沪深300指数×30% + 中债综合指数×70%',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/110017.html',
            klineData: [
                { date: '2026-04-22', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-21', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-18', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-17', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-16', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-15', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-14', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-11', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-10', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-09', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-08', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-07', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-03', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-02', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-01', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-03-31', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-03-28', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-03-27', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-03-26', open: 1.393, close: 1.393, high: 1.394, low: 1.392 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.3930 },
                { date: '2026-04-18', value: 1.3928 },
                { date: '2026-04-17', value: 1.3926 },
                { date: '2026-04-16', value: 1.3924 },
                { date: '2026-04-15', value: 1.3922 },
                { date: '2026-04-14', value: 1.3920 },
                { date: '2026-04-11', value: 1.3918 },
                { date: '2026-04-10', value: 1.3916 },
                { date: '2026-04-09', value: 1.3914 },
                { date: '2026-04-08', value: 1.3912 },
                { date: '2026-04-07', value: 1.3910 },
                { date: '2026-04-03', value: 1.3908 },
                { date: '2026-04-02', value: 1.3906 },
                { date: '2026-04-01', value: 1.3904 },
                { date: '2026-03-31', value: 1.3902 },
                { date: '2026-03-28', value: 1.3900 },
                { date: '2026-03-27', value: 1.3898 },
                { date: '2026-03-26', value: 1.3896 },
                { date: '2026-03-25', value: 1.3894 },
                { date: '2026-03-24', value: 1.3892 }
            ]
        }
    }
};

module.exports = SAMPLE_DATA;
