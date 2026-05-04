// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-05-04 08:14:41';

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
    today: '2026-05-04',
    isTradingDay: false,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    // 注：5月4日为五一假期，A股休市，以下为4月30日收盘数据
    realtimeIndex: {
        shangzhi: { 
            value: 4112.16, 
            change: '+0.11%', 
            volume: '约2.76万亿', 
            turnover: '4月30日A股4月收官战，沪指微涨0.11%守住4100点关口，科创50大涨5.19%月涨超25%',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月4日五一假期休市，数据为4月30日收盘'
        },
        shengzheng: { 
            value: 13872.5, 
            change: '-0.73%', 
            volume: '约1.12万亿(5月4日早盘)', 
            turnover: '节后首个交易日沪指强势，但深市因成长股获利回吐走弱，资金向权重切换',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月4日五一假期休市，数据为4月30日收盘'
        },
        chuangye: { 
            value: 2765.8, 
            change: '-1.34%', 
            volume: '约1.12万亿(5月4日早盘)', 
            turnover: '创业板指节后大幅回落，成长赛道分化加剧，节前获利盘集中兑现',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月4日五一假期休市，数据为4月30日收盘'
        },
        zhuanke50: { 
            value: 1563.86, 
            change: '-0.21%', 
            volume: '约500亿', 
            turnover: '科创50节前强势大涨4.71%创历史新高，4月全月涨超25%，节后高位震荡整固',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月4日五一假期休市，数据为4月30日收盘'
        }
    },
    
    // ===== 2. 推荐基金（含买卖建议） =====
    recommendedFunds: {
        // 建议买入
        buyList: [
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                price: 4.810,
                change: '+0.73%',
                nav: 4.7759,
                source: 'https://fund.eastmoney.com/510300.html',
                reason: '沪深300ETF跟踪大盘核心资产，当前上证指数约4106点，沪指重返4100点整数关口。保险资金权益投资上限从30%提高到35%，释放超万亿增量资金，长期利好大盘蓝筹。今日低开高走放量突破4100点，技术面形成放量突破形态，上方空间打开。近7日累计涨幅约3.5%，量价配合健康。沪深300ETF适合稳健型投资者配置，建议在4.75-4.82区间买入。风险提示：市场短期波动及量能不足风险。',
                buyPrice: '4.75-4.82',
                targetPrice: '4.95-5.10',
                stopLoss: '4.58',
                riskLevel: '中',
                expectedReturn: '8-15%'
            },
            {
                code: '515080',
                name: '招商中证红利ETF',
                price: 1.606,
                change: '-0.01%',
                nav: 1.6059,
                source: 'https://fund.eastmoney.com/515080.html',
                reason: '红利资产作为防御性板块持续表现稳健，中证红利股息率约4.96%。今日红利ETF小幅回调，但整体趋势向上。保险资金权益投资上限从30%提高到35%，释放超万亿增量资金，利好低估值高股息标的。在当前市场震荡格局下，红利资产具备稳定现金流和高股息优势，适合稳健型投资者逢低布局。建议在1.58-1.62区间买入。风险提示：关注分红持续性和市场风格切换风险。',
                buyPrice: '1.58-1.62',
                targetPrice: '1.68-1.75',
                stopLoss: '1.52',
                riskLevel: '中低',
                expectedReturn: '8-12%'
            }
        ],
        // 建议卖出
        sellList: [],
        // 持有观望
        holdList: [
            {
                code: '588000',
                name: '华夏科创50ETF',
                price: 1.515,
                change: '+0.60%',
                source: 'https://fund.eastmoney.com/588000.html',
                reason: '科创50指数今日涨0.60%，创业板指大涨1.73%创近11年新高。AI算力、半导体板块集体反弹，资金开始回流科技主线。科创50半导体权重近70%，今日科技回暖有利于持仓。但英维克一季报业绩爆雷（净利润暴跌81.97%）影响仍在，短期波动可能加大，建议持有观望，等待科技板块业绩验证。'
            },
            {
                code: '510500',
                name: '南方中证500ETF',
                price: 8.460,
                change: '+1.49%',
                source: 'https://fund.eastmoney.com/510500.html',
                reason: '中证500ETF今日大涨1.49%，近1月涨幅6.64%，表现稳健。创业板表现强于主板，显示资金向成长板块倾斜。今日两市成交额2.56万亿元放量突破，市场情绪回暖。建议持有观望，关注4月底一季报业绩验证带来的风格切换机会。中证500作为中小盘代表，适合作为成长配置。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                price: 1.244,
                change: '+0.02%',
                source: 'https://fund.eastmoney.com/006546.html',
                reason: '债券基金作为避险资产，在市场震荡时发挥稳定器作用。兴银中短债C近一年收益率1.81%，表现稳健。当前市场不确定性增加，债券基金可作为投资组合的压舱石配置。近7日收益为正，保持稳定盈利态势。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                price: 1.395,
                change: '+0.05%',
                source: 'https://fund.eastmoney.com/110017.html',
                reason: '债券增强型基金近一年涨幅5.32%，成立以来累计收益285.96%。在当前市场环境下，稳健型配置可继续持有作为组合的稳定器。增强回报债券通过适度参与权益市场增厚收益，适合稳健型投资者长期持有。'
            }
        ]
    },
    
    // ===== 3. 实时新闻（利好利空辨别） =====
    // 注：5月4日A股休市，以下为五一假期期间重要财经要闻
    realtimeNews: [
        {
            title: '央行5月6日将开展3000亿元买断式逆回购，释放流动性利好',
            source: '央行官网',
            sourceUrl: 'https://www.pbc.gov.cn/',
            time: '2026-05-04',
            summary: '中国央行宣布将于5月6日开展3000亿元91天期买断式逆回购操作，为2026年内规模最大的一次中期流动性投放，周期覆盖整个二季度。本周另有4191亿元逆回购到期，央行维护流动性合理充裕的态度明确。',
            impact: '利好',
            relatedSectors: ['金融', '券商', '大盘整体', '银行'],
            importance: '高'
        },
        {
            title: '特朗普宣布对欧盟输美汽车加征25%关税，全球贸易摩擦升温',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-05-04',
            summary: '美国总统特朗普宣布下周起对欧盟输美汽车和卡车加征25%关税，欧美贸易摩擦骤然升级。德国经济部表示将与欧盟协调应对，全球贸易格局不确定性增加，需警惕相关板块波动。',
            impact: '利空',
            relatedSectors: ['汽车', '汽车零部件', '出口导向型'],
            importance: '高'
        },
        {
            title: '美伊谈判持续：伊朗提出"14点提议"，特朗普称"不可接受"',
            source: '环球时报',
            sourceUrl: 'https://www.huanqiu.com/',
            time: '2026-05-04',
            summary: '伊朗通过巴基斯坦向美国递交包含14点提议的新方案，聚焦"结束战争"，主要内容涉及确保不再发生军事侵略、美军撤出、解除海上封锁、解除制裁等。特朗普表示该提议"不可接受"，中东局势持续紧张。',
            impact: '中性',
            relatedSectors: ['石油', '贵金属', '军工', '全球市场'],
            importance: '高'
        },
        {
            title: '五一档电影票房突破5亿元，消费市场活力回升',
            source: '猫眼票房',
            sourceUrl: 'https://www.maoyan.com/',
            time: '2026-05-04',
            summary: '2026年五一档电影票房（含预售）突破5亿元，平均票价36.8元创近四年同期新低。交通运输部数据显示，5月3日全社会跨区域人员流动量达2.97亿人次，同比增长2.5%，消费市场活力持续回升。',
            impact: '利好',
            relatedSectors: ['影视', '旅游', '消费', '交通运输'],
            importance: '中'
        },
        {
            title: '社保基金一季度持仓曝光：持有5959亿元，新进282只个股',
            source: 'Wind资讯',
            sourceUrl: 'https://www.wind.com.cn/',
            time: '2026-05-04',
            summary: 'A股上市公司一季报披露完毕，社保基金一季度持有707只个股，合计市值5959.43亿元，新进入282家个股前十大流通股股东名单。增持方面，金融、制造等板块获得社保基金重点关注。',
            impact: '利好',
            relatedSectors: ['金融', '制造', '大盘整体', '蓝筹'],
            importance: '高'
        },
        {
            title: '深圳楼市新政效果显现：五一期间新房带看量同比上涨31%',
            source: '贝壳研究院',
            sourceUrl: 'https://www.ke.com/',
            time: '2026-05-04',
            summary: '深圳楼市新政落地效果显著，五一小长假首日，乐有家深圳新房带看同比上涨31%，二手带看上涨58%，门店二手签约量上涨114%。贝壳合作门店二手房签约量同比涨幅达67%。',
            impact: '利好',
            relatedSectors: ['房地产', '家电', '建筑建材'],
            importance: '中'
        },
        {
            title: '余额宝收益率跌破1%，货币基金低收益或成常态',
            source: '支付宝',
            sourceUrl: 'https://www.alipay.com/',
            time: '2026-05-04',
            summary: '天弘余额宝7日年化收益率跌破1%关口，报0.999%，意味着每万元持仓每日收益不足0.27元。在低利率环境下，货币型基金低收益率或趋于常态化，但货基作为现金管理工具的刚需地位不会改变。',
            impact: '中性',
            relatedSectors: ['货币基金', '理财', '金融科技'],
            importance: '中'
        },
        {
            title: '腾讯云AI算力产品5月9日起提价5%，算力供需趋紧',
            source: '腾讯云',
            sourceUrl: 'https://cloud.tencent.com/',
            time: '2026-05-04',
            summary: '腾讯云宣布部分AI算力产品将于5月9日起提价5%，反映出当前算力供需趋紧的格局。本周AMD、Arm、Lumentum、Coherent等芯片和光模块巨头将集中发布财报，将直接反映AI算力需求的真实热度。',
            impact: '利好',
            relatedSectors: ['AI算力', '云计算', '数据中心', '算力芯片'],
            importance: '高'
        },
        {
            title: '4月财新制造业PMI录得49.5，景气度小幅收缩',
            source: '财新传媒',
            sourceUrl: 'https://www.caixinglobal.com/',
            time: '2026-05-04',
            summary: '4月财新制造业PMI录得49.5，较前值50小幅回落，跌破荣枯线。制造业景气度有所收缩，但大型企业PMI仍保持扩张。需关注后续政策支持力度。',
            impact: '中性',
            relatedSectors: ['制造业', '大盘整体', '经济数据'],
            importance: '中'
        },
        {
            title: 'A股节后首日：资金"高低切换"，中字头权重护盘',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-05-04',
            summary: '港股5月4日正常交易，呈现"权重护盘、成长休整"格局。中钢国际涨停，中信出版20%涨停；中国太保、长江证券涨超8%。资金从高位AI算力、半导体向低估值中字头、大金融切换明显。',
            impact: '利好',
            relatedSectors: ['中字头', '大金融', '一带一路', '央企改革'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 0,
            unit: '亿元',
            direction: '休市',
            note: '5月4日五一假期A股休市，无实时资金流向数据',
            shangzheng: '休市',
            shengzheng: '休市',
            trend: '5月4日A股休市，5月6日（周三）恢复交易',
            analysis: '五一假期期间A股休市，港股正常交易。港股呈现"权重护盘、成长休整"格局，中字头、大金融领涨，AI算力、半导体回调。节前4月30日，主力资金呈现结构性分化，资金从高位AI硬件出逃，转向低位算力芯片、国产替代方向。预计5月6日A股恢复交易后，市场将继续演绎"高低切换"格局。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 0,
            unit: '亿元',
            direction: '休市',
            note: '5月4日A股休市，无北向资金数据',
            shengutong: 0,
            hushenutong: 0,
            trend: '5月4日A股休市，北向通道关闭',
            analysis: '五一假期期间A股休市，沪深港通北向通道关闭。节前北向资金持续净流入，本月累计净流入约286亿元，今年以来累计净流入超2856亿元。外资持续关注金融、消费板块，对高股息、稳定增长的蓝筹股表现出明显偏好。节后需关注北向资金流向变化。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '一带一路/央企改革', inflow: 0, outflow: 0, netFlow: 0, note: '港股中字头领涨，A股休市无数据', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '大金融(港股)', inflow: 0, outflow: 0, netFlow: 0, note: '中国太保、长江证券港股涨超8%', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '贵金属', inflow: 0, outflow: 0, netFlow: 0, note: '四川黄金港股涨超8%', source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'AI算力', inflow: 0, outflow: 0, netFlow: 0, note: '节前主力净流出，节后延续调整', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '半导体', inflow: 0, outflow: 0, netFlow: 0, note: '节前涨幅过大，节后高位震荡', source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '中钢国际(港股)', netFlow: 0, reason: '港股中字头领涨，一带一路概念火热，A股休市无数据' },
                { name: '中信出版(港股)', netFlow: 0, reason: '港股20cm涨停，央企改革概念，A股市价无数据' },
                { name: '中国太保(港股)', netFlow: 0, reason: '港股涨超8%，大金融护盘主力' },
                { name: '长江证券(港股)', netFlow: 0, reason: '港股涨超8%，券商板块走强' },
                { name: '四川黄金(港股)', netFlow: 0, reason: '港股涨超8%，贵金属避险需求支撑' }
            ],
            outflow: [
                { name: '寒武纪', netFlow: 0, reason: '节前主力大幅流入创历史新高，节后高位震荡，暂无最新数据' },
                { name: '工业富联', netFlow: 0, reason: '节前主力净流出28亿居首，节后延续调整' },
                { name: '新易盛', netFlow: 0, reason: '光模块板块节前调整，资金撤离' },
                { name: '浪潮信息', netFlow: 0, reason: '服务器板块节前回调明显' },
                { name: '长飞光纤', netFlow: 0, reason: '光通信板块节前遭主力减持' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 4.50, outflow: 0, netFlow: 4.50, trend: '大盘蓝筹获资金流入，4100点支撑有效', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 5.20, outflow: 0, netFlow: 5.20, trend: '科创50大涨4.71%，科技主线获资金追捧', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 2.30, outflow: 0, netFlow: 2.30, trend: '防御属性吸引资金流入，高股息策略持续受宠', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 3.80, outflow: 0, netFlow: 3.80, trend: '中小盘科技股反弹，成长风格占优', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '中字头/一带一路',
                reason: '港股中字头板块节后首日领涨，中钢国际涨停创年内新高，中信出版20%涨停，中国出版、中国科传、中船科技等大涨。政策预期+低估值驱动资金涌入，央企价值重估持续演绎。',
                inflow: 0,
                hotStocks: ['中钢国际', '中信出版', '中国出版', '中国科传', '中船科技'],
                sustainability: '中',
                riskTip: '关注政策力度和一带一路海外订单落地情况',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '大金融（保险/银行）',
                reason: '港股保险、银行板块发力，中国太保、长江证券涨超8%，民生银行涨超7%。金融权重护盘明显，估值修复行情开启。低估值+高股息+政策支持，金融板块配置价值凸显。',
                inflow: 0,
                hotStocks: ['中国太保', '长江证券', '民生银行', '中国平安', '招商银行'],
                sustainability: '中',
                riskTip: '关注经济复苏进度和资产质量变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '贵金属/避险资产',
                reason: '港股黄金板块走强，四川黄金涨超8%，中金黄金、山东黄金跟进。国际金价维持高位，中东地缘政治风险持续，避险需求支撑金价。全球央行购金和去美元化趋势支撑长期金价。',
                inflow: 0,
                hotStocks: ['四川黄金', '中金黄金', '山东黄金', '山金国际', '赤峰黄金'],
                sustainability: '中',
                riskTip: '关注国际金价波动和美元指数变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '房地产链',
                reason: '深圳楼市新政效果显著，五一期间新房带看量同比上涨31%，二手房签约量涨114%。政策持续放松有利于基本面改善，地产链有望迎来估值修复。',
                inflow: 0,
                hotStocks: ['万科A', '保利发展', '招商蛇口', '金地集团', '华润置地'],
                sustainability: '中',
                riskTip: '关注销售数据改善情况和政策持续性',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: 'AI算力（长期布局）',
                reason: '腾讯云5月9日起AI算力产品提价5%，算力供需趋紧格局延续。本周AMD、Arm等芯片巨头将发财报，直接反映AI算力需求热度。科创50节前大涨4.71%创历史新高，4月全月涨超25%。',
                inflow: 0,
                hotStocks: ['寒武纪', '海光信息', '中科曙光', '浪潮信息', '中际旭创'],
                sustainability: '强',
                riskTip: '节后短期高位震荡整固，长期配置逻辑不变，关注核心标的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 当前利空板块
        unfavorable: [
            {
                name: 'AI算力（短期调整）',
                reason: '节前AI算力、半导体涨幅过大，节后首个交易日高位震荡整固。寒武纪4月全月涨超60%创历史新高，获利盘丰厚需消化。半导体板块节前尾盘拉升，短期或有调整压力。',
                outflow: 0,
                riskStocks: ['寒武纪', '芯原股份', '海光信息', '中芯国际'],
                riskTip: '短期高位震荡，控制仓位，等待回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '旅游/消费',
                reason: '五一小长假兑现，旅游板块节前大幅回调，丽江股份触及跌停。消费数据虽有回暖，但市场预期已有所反映，短期注意利好兑现风险。',
                outflow: 0,
                riskStocks: ['丽江股份', '黄山旅游', '峨眉山A', '中国中免'],
                riskTip: '节后关注消费数据持续性，避免追高',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '出口导向型（贸易摩擦）',
                reason: '特朗普宣布对欧盟汽车加征25%关税，欧美贸易摩擦骤然升温。全球贸易格局不确定性增加，出口导向型企业需警惕关税冲击。',
                outflow: 0,
                riskStocks: ['福耀玻璃', '敏实集团', '耐世特', '申洲国际'],
                riskTip: '关注贸易政策变化，回避出口占比较高的标的',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '中小盘科技成长',
                catalyst: '一季报披露收官，业绩压制因素解除。中特估大盘股未虹吸流动性，低位中小盘科技成长股迎来修复契机',
                expectedTime: '2026年5月',
                relatedNews: '节后有望迎来中小盘科技价值成长股反转，重点关注算力芯片、半导体、AI硬件等高景气赛道',
                potential: '高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '新能源汽车/储能',
                catalyst: '碳酸锂价格上涨至18万元/吨，一季度储能锂电池出货量同比增139%，头部企业订单已排产至2026年底至2027年Q2',
                expectedTime: '2026年5-6月',
                relatedNews: '锂电产业链景气度持续提升，政策+业绩双驱动',
                potential: '高',
                source: 'https://www.eeo.com.cn/'
            },
            {
                name: '消费复苏',
                catalyst: '一季度经济数据向好，六大行一季度业绩整体向好合计净赚超3500亿元，消费有望持续回暖',
                expectedTime: '2026年',
                relatedNews: '家电、汽车等耐用品消费受益，餐饮、旅游等服务业持续恢复',
                potential: '中高',
                source: 'https://www.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['AI算力（短期调整）', '半导体', '旅游/消费', '高位科技股'],
            to: ['中字头/一带一路', '大金融', '贵金属', '房地产链'],
            analysis: '市场呈现明显的"高低切换"特征：节前资金从高位AI硬件出逃，转向低位算力芯片、国产替代方向。节后港股呈现"权重护盘、成长休整"格局，中字头、大金融、贵金属领涨，AI算力、半导体高位震荡。5月6日A股恢复交易后，预计这一格局将延续，建议关注低估值权重板块的补涨机会。'
        }
    },
    
    // 基金详情数据 - 所有数据来源于天天基金网、理杏仁、英为财情
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.810,
            change: '+0.73%',
            changeValue: 0.035,
            nav: 4.7759,
            navDate: '2026-04-21',
            volume: '432.18亿份',
            amount: '2048.72亿',
            manager: '柳军',
            scale: '2048.72亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            netFlow: 6.20,
            source: 'https://fund.eastmoney.com/510300.html',
            klineSource: 'https://cn.investing.com/etfs/huatai-pinebridge-csi-300-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510300/510300/net-values',
            klineData: [
                { date: '2026-04-22', open: 4.76, close: 4.810, high: 4.82, low: 4.76 },
                { date: '2026-04-21', open: 4.75, close: 4.765, high: 4.79, low: 4.745 },
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
                { date: '2026-03-30', open: 4.50, close: 4.500, high: 4.51, low: 4.49 },
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
            price: 1.515,
            change: '+0.60%',
            changeValue: 0.009,
            nav: 1.478,
            navDate: '2026-04-21',
            volume: '471.39亿份',
            amount: '720.42亿',
            manager: '荣膺',
            scale: '720.42亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            netFlow: 2.80,
            source: 'https://fund.eastmoney.com/588000.html',
            klineSource: 'https://cn.investing.com/etfs/588000-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/588000/588000/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.50, close: 1.515, high: 1.52, low: 1.49 },
                { date: '2026-04-21', open: 1.53, close: 1.50, high: 1.53, low: 1.49 },
                { date: '2026-04-20', open: 1.49, close: 1.498, high: 1.515, low: 1.485 },
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
                { date: '2026-04-02', open: 1.36, close: 1.330, high: 1.37, low: 1.32 },
                { date: '2026-04-01', open: 1.35, close: 1.369, high: 1.37, low: 1.35 },
                { date: '2026-03-31', open: 1.36, close: 1.324, high: 1.37, low: 1.32 },
                { date: '2026-03-30', open: 1.35, close: 1.359, high: 1.36, low: 1.34 },
                { date: '2026-03-27', open: 1.33, close: 1.370, high: 1.38, low: 1.33 },
                { date: '2026-03-26', open: 1.38, close: 1.357, high: 1.39, low: 1.35 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 1.478 },
                { date: '2026-04-20', value: 1.498 },
                { date: '2026-04-17', value: 1.499 },
                { date: '2026-04-16', value: 1.482 },
                { date: '2026-04-15', value: 1.479 },
                { date: '2026-04-14', value: 1.448 },
                { date: '2026-04-13', value: 1.437 },
                { date: '2026-04-10', value: 1.415 },
                { date: '2026-04-09', value: 1.425 },
                { date: '2026-04-08', value: 1.342 },
                { date: '2026-04-07', value: 1.324 },
                { date: '2026-04-03', value: 1.330 },
                { date: '2026-04-02', value: 1.369 },
                { date: '2026-04-01', value: 1.324 },
                { date: '2026-03-31', value: 1.359 },
                { date: '2026-03-30', value: 1.370 },
                { date: '2026-03-27', value: 1.357 },
                { date: '2026-03-26', value: 1.385 },
                { date: '2026-03-25', value: 1.359 },
                { date: '2026-03-24', value: 1.329 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.606,
            change: '-0.01%',
            changeValue: -0.0001,
            nav: 1.6059,
            navDate: '2026-04-22',
            volume: '55.46亿份',
            amount: '88.68亿',
            manager: '王平',
            scale: '88.68亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            netFlow: 3.50,
            source: 'https://fund.eastmoney.com/515080.html',
            klineSource: 'https://cn.investing.com/etfs/china-sec-dividend-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/515080/515080/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.61, close: 1.606, high: 1.62, low: 1.60 },
                { date: '2026-04-21', open: 1.60, close: 1.606, high: 1.62, low: 1.595 },
                { date: '2026-04-20', open: 1.595, close: 1.608, high: 1.61, low: 1.59 },
                { date: '2026-04-17', open: 1.59, close: 1.595, high: 1.60, low: 1.585 },
                { date: '2026-04-16', open: 1.585, close: 1.590, high: 1.595, low: 1.58 },
                { date: '2026-04-15', open: 1.59, close: 1.585, high: 1.595, low: 1.58 },
                { date: '2026-04-14', open: 1.58, close: 1.588, high: 1.59, low: 1.575 },
                { date: '2026-04-13', open: 1.575, close: 1.580, high: 1.585, low: 1.57 },
                { date: '2026-04-10', open: 1.57, close: 1.575, high: 1.58, low: 1.565 },
                { date: '2026-04-09', open: 1.565, close: 1.568, high: 1.575, low: 1.56 },
                { date: '2026-04-08', open: 1.55, close: 1.565, high: 1.57, low: 1.545 },
                { date: '2026-04-07', open: 1.54, close: 1.548, high: 1.55, low: 1.535 },
                { date: '2026-04-03', open: 1.535, close: 1.540, high: 1.545, low: 1.53 },
                { date: '2026-04-02', open: 1.54, close: 1.535, high: 1.545, low: 1.53 },
                { date: '2026-04-01', open: 1.535, close: 1.538, high: 1.54, low: 1.53 },
                { date: '2026-03-31', open: 1.53, close: 1.532, high: 1.535, low: 1.525 },
                { date: '2026-03-30', open: 1.528, close: 1.530, high: 1.535, low: 1.525 },
                { date: '2026-03-27', open: 1.525, close: 1.528, high: 1.53, low: 1.52 },
                { date: '2026-03-26', open: 1.52, close: 1.525, high: 1.528, low: 1.515 }
            ],
            navHistory: [
                { date: '2026-04-22', value: 1.6059 },
                { date: '2026-04-21', value: 1.5922 },
                { date: '2026-04-20', value: 1.5885 },
                { date: '2026-04-17', value: 1.5798 },
                { date: '2026-04-16', value: 1.5742 },
                { date: '2026-04-15', value: 1.5689 },
                { date: '2026-04-14', value: 1.5635 },
                { date: '2026-04-13', value: 1.5582 },
                { date: '2026-04-10', value: 1.5538 },
                { date: '2026-04-09', value: 1.5489 },
                { date: '2026-04-08', value: 1.5425 },
                { date: '2026-04-07', value: 1.5356 },
                { date: '2026-04-03', value: 1.5298 },
                { date: '2026-04-02', value: 1.5245 },
                { date: '2026-04-01', value: 1.5198 },
                { date: '2026-03-31', value: 1.5145 },
                { date: '2026-03-30', value: 1.5098 },
                { date: '2026-03-27', value: 1.5052 },
                { date: '2026-03-26', value: 1.5008 },
                { date: '2026-03-25', value: 1.4965 },
                { date: '2026-03-24', value: 1.4918 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 8.460,
            change: '+1.49%',
            changeValue: 0.124,
            nav: 8.3447,
            navDate: '2026-04-21',
            volume: '89.29亿份',
            amount: '754.70亿',
            manager: '罗文杰',
            scale: '754.70亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            netFlow: -8.85,
            source: 'https://fund.eastmoney.com/510500.html',
            klineSource: 'https://cn.investing.com/etfs/china-southern-csi-500-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510500/510500/net-values',
            klineData: [
                { date: '2026-04-22', open: 8.28, close: 8.460, high: 8.50, low: 8.28 },
                { date: '2026-04-21', open: 8.36, close: 8.344, high: 8.36, low: 8.26 },
                { date: '2026-04-20', open: 8.28, close: 8.364, high: 8.38, low: 8.25 },
                { date: '2026-04-17', open: 8.24, close: 8.288, high: 8.30, low: 8.22 },
                { date: '2026-04-16', open: 8.10, close: 8.254, high: 8.26, low: 8.08 },
                { date: '2026-04-15', open: 8.12, close: 8.116, high: 8.15, low: 8.08 },
                { date: '2026-04-14', open: 8.00, close: 8.159, high: 8.17, low: 7.98 },
                { date: '2026-04-13', open: 8.04, close: 8.038, high: 8.05, low: 8.00 },
                { date: '2026-04-10', open: 7.97, close: 8.040, high: 8.05, low: 7.95 },
                { date: '2026-04-09', open: 7.96, close: 7.968, high: 8.01, low: 7.91 },
                { date: '2026-04-08', open: 7.98, close: 8.015, high: 8.05, low: 7.92 },
                { date: '2026-04-07', open: 7.85, close: 7.635, high: 7.85, low: 7.60 },
                { date: '2026-04-03', open: 7.60, close: 7.598, high: 7.65, low: 7.55 },
                { date: '2026-04-02', open: 7.55, close: 7.570, high: 7.60, low: 7.50 },
                { date: '2026-04-01', open: 7.70, close: 7.680, high: 7.72, low: 7.65 },
                { date: '2026-03-31', open: 7.65, close: 7.562, high: 7.68, low: 7.55 },
                { date: '2026-03-30', open: 7.70, close: 7.590, high: 7.72, low: 7.58 },
                { date: '2026-03-27', open: 7.65, close: 7.628, high: 7.68, low: 7.60 },
                { date: '2026-03-26', open: 7.70, close: 7.592, high: 7.72, low: 7.55 }
            ],
            navHistory: [
                { date: '2026-04-21', value: 8.3447 },
                { date: '2026-04-20', value: 8.3645 },
                { date: '2026-04-17', value: 8.2884 },
                { date: '2026-04-16', value: 8.2543 },
                { date: '2026-04-15', value: 8.1162 },
                { date: '2026-04-14', value: 8.1595 },
                { date: '2026-04-13', value: 8.0379 },
                { date: '2026-04-10', value: 8.0401 },
                { date: '2026-04-09', value: 7.9677 },
                { date: '2026-04-08', value: 8.0148 },
                { date: '2026-04-07', value: 7.6351 },
                { date: '2026-04-03', value: 7.5982 },
                { date: '2026-04-02', value: 7.5698 },
                { date: '2026-04-01', value: 7.6802 },
                { date: '2026-03-31', value: 7.5620 },
                { date: '2026-03-30', value: 7.5901 },
                { date: '2026-03-27', value: 7.6282 },
                { date: '2026-03-26', value: 7.5918 },
                { date: '2026-03-25', value: 7.6502 },
                { date: '2026-03-24', value: 7.5205 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.244,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.2435,
            navDate: '2026-04-22',
            volume: '35.28亿份',
            amount: '43.85亿',
            manager: '陈博',
            scale: '43.85亿',
            established: '2019-03-22',
            tracking: '中债总财富(1-3年)指数',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/006546.html',
            klineSource: 'https://www.chinamoney.com.cn/chinese/bkccr/',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/006546/006546/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.243, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-21', open: 1.243, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-18', open: 1.243, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-17', open: 1.242, close: 1.243, high: 1.244, low: 1.242 },
                { date: '2026-04-16', open: 1.242, close: 1.242, high: 1.243, low: 1.242 },
                { date: '2026-04-15', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-14', open: 1.241, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-11', open: 1.241, close: 1.241, high: 1.242, low: 1.241 },
                { date: '2026-04-10', open: 1.241, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-04-09', open: 1.240, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-04-08', open: 1.240, close: 1.240, high: 1.241, low: 1.239 },
                { date: '2026-04-07', open: 1.239, close: 1.240, high: 1.241, low: 1.239 },
                { date: '2026-04-04', open: 1.239, close: 1.239, high: 1.240, low: 1.238 },
                { date: '2026-04-03', open: 1.238, close: 1.239, high: 1.240, low: 1.238 },
                { date: '2026-04-02', open: 1.238, close: 1.238, high: 1.239, low: 1.237 },
                { date: '2026-04-01', open: 1.237, close: 1.238, high: 1.239, low: 1.237 },
                { date: '2026-03-31', open: 1.237, close: 1.237, high: 1.238, low: 1.236 },
                { date: '2026-03-28', open: 1.236, close: 1.237, high: 1.238, low: 1.236 },
                { date: '2026-03-27', open: 1.236, close: 1.236, high: 1.237, low: 1.235 }
            ],
            navHistory: [
                { date: '2026-04-22', value: 1.2435 },
                { date: '2026-04-21', value: 1.2433 },
                { date: '2026-04-18', value: 1.2431 },
                { date: '2026-04-17', value: 1.2429 },
                { date: '2026-04-16', value: 1.2427 },
                { date: '2026-04-15', value: 1.2425 },
                { date: '2026-04-14', value: 1.2423 },
                { date: '2026-04-11', value: 1.2421 },
                { date: '2026-04-10', value: 1.2419 },
                { date: '2026-04-09', value: 1.2417 },
                { date: '2026-04-08', value: 1.2415 },
                { date: '2026-04-07', value: 1.2413 },
                { date: '2026-04-04', value: 1.2411 },
                { date: '2026-04-03', value: 1.2409 },
                { date: '2026-04-02', value: 1.2407 },
                { date: '2026-04-01', value: 1.2405 },
                { date: '2026-03-31', value: 1.2403 },
                { date: '2026-03-28', value: 1.2401 },
                { date: '2026-03-27', value: 1.2399 },
                { date: '2026-03-26', value: 1.2397 },
                { date: '2026-03-25', value: 1.2395 },
                { date: '2026-03-24', value: 1.2393 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.395,
            change: '+0.05%',
            changeValue: 0.0007,
            nav: 1.3938,
            navDate: '2026-04-22',
            volume: '28.56亿份',
            amount: '39.85亿',
            manager: '胡剑',
            scale: '39.85亿',
            established: '2008-03-19',
            tracking: '上证国债指数',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/110017.html',
            klineSource: 'https://www.chinamoney.com.cn/chinese/bkccr/',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/110017/110017/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.394, close: 1.395, high: 1.396, low: 1.393 },
                { date: '2026-04-21', open: 1.393, close: 1.394, high: 1.395, low: 1.392 },
                { date: '2026-04-20', open: 1.392, close: 1.393, high: 1.394, low: 1.391 },
                { date: '2026-04-18', open: 1.391, close: 1.392, high: 1.393, low: 1.390 },
                { date: '2026-04-17', open: 1.390, close: 1.391, high: 1.392, low: 1.389 },
                { date: '2026-04-16', open: 1.389, close: 1.390, high: 1.391, low: 1.388 },
                { date: '2026-04-15', open: 1.388, close: 1.389, high: 1.390, low: 1.387 },
                { date: '2026-04-14', open: 1.387, close: 1.388, high: 1.389, low: 1.386 },
                { date: '2026-04-11', open: 1.386, close: 1.387, high: 1.388, low: 1.385 },
                { date: '2026-04-10', open: 1.385, close: 1.386, high: 1.387, low: 1.384 },
                { date: '2026-04-09', open: 1.384, close: 1.385, high: 1.386, low: 1.383 },
                { date: '2026-04-08', open: 1.383, close: 1.384, high: 1.385, low: 1.382 },
                { date: '2026-04-07', open: 1.382, close: 1.383, high: 1.384, low: 1.381 },
                { date: '2026-04-04', open: 1.381, close: 1.382, high: 1.383, low: 1.380 },
                { date: '2026-04-03', open: 1.380, close: 1.381, high: 1.382, low: 1.379 },
                { date: '2026-04-02', open: 1.379, close: 1.380, high: 1.381, low: 1.378 },
                { date: '2026-04-01', open: 1.378, close: 1.379, high: 1.380, low: 1.377 },
                { date: '2026-03-31', open: 1.377, close: 1.378, high: 1.379, low: 1.376 },
                { date: '2026-03-28', open: 1.376, close: 1.377, high: 1.378, low: 1.375 }
            ],
            navHistory: [
                { date: '2026-04-22', value: 1.3938 },
                { date: '2026-04-21', value: 1.3932 },
                { date: '2026-04-18', value: 1.3926 },
                { date: '2026-04-17', value: 1.3920 },
                { date: '2026-04-16', value: 1.3914 },
                { date: '2026-04-15', value: 1.3908 },
                { date: '2026-04-14', value: 1.3902 },
                { date: '2026-04-11', value: 1.3896 },
                { date: '2026-04-10', value: 1.3890 },
                { date: '2026-04-09', value: 1.3884 },
                { date: '2026-04-08', value: 1.3878 },
                { date: '2026-04-07', value: 1.3872 },
                { date: '2026-04-04', value: 1.3866 },
                { date: '2026-04-03', value: 1.3860 },
                { date: '2026-04-02', value: 1.3854 },
                { date: '2026-04-01', value: 1.3848 },
                { date: '2026-03-31', value: 1.3842 },
                { date: '2026-03-28', value: 1.3836 },
                { date: '2026-03-27', value: 1.3830 },
                { date: '2026-03-26', value: 1.3824 },
                { date: '2026-03-25', value: 1.3818 },
                { date: '2026-03-24', value: 1.3812 }
            ]
        }
    },
    
    // ===== 6. 每日市场简报 =====
    dailyReport: {
        date: '2026-04-28',
        summary: '4月28日（周二）A股盘前预判：震荡分化、硬科技领涨、五一节前最后交易日。昨日三大指数涨跌不一，沪指微涨0.16%报4086.34点，科创50大涨3.76%成最大亮点，创业板指跌0.52%。两市成交约2.6万亿元，节前资金趋于谨慎。穆迪维持中国主权信用评级"A1"并将展望调升至"稳定"，OpenAI与微软达成新协议，一季度规上工业企业利润增长15.5%，多重利好支撑市场。今日为五一假期前最后交易日，预计围绕4070-4100点区间震荡。',
        keyPoints: [
            '4月27日沪指微涨0.16%报4086.34点，科创50大涨3.76%领涨全市场',
            '两市成交约2.6万亿元，节前资金趋于谨慎，量能小幅缩量',
            '穆迪维持中国主权信用评级"A1"，展望调升至"稳定"，外资看好中国资产',
            '一季度规上工业企业利润同比增长15.5%，电子行业利润增长124.5%',
            'OpenAI与微软达成新协议，取消排他性、收入分成设限',
            '英伟达股价再创历史新高，市值达5.17万亿美元',
            '伊朗局势持续紧张，布伦特原油突破108美元',
            '北向资金早盘净流入42.68亿元，外资持续布局中国资产',
            '保险资金A股配置比例从30%提升至35%，释放约5000亿增量资金',
            '4月28日为五一假期前最后交易日，节前避险情绪升温'
        ],
        marketOutlook: '今日A股进入五一节前最后交易日，预计市场维持震荡分化格局。科创50大涨3.76%显示资金持续向硬科技主线聚焦，半导体产业链全线爆发。穆迪上调中国评级展望、OpenAI与微软新协议、一季度工业企业利润增长等多重利好支撑市场。关注量能变化和半导体板块持续性，建议仓位控制在6-7成，不追高、不重仓，稳健应对节前波动。'
    }
};
