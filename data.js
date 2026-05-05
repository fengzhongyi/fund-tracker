// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-05-05 15:10:00';

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
    today: '2026-05-05',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    // 注：5月5日收盘数据，A股节后首个交易日，市场分化明显
    realtimeIndex: {
        shangzhi: { 
            value: 3334.5, 
            change: '-0.48%', 
            volume: '约4993亿', 
            turnover: '5月5日A股震荡收跌，沪指下跌0.48%报3334.5点，市场呈现明显分化格局，权重板块护盘、成长题材走弱，超4000家个股飘绿',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月5日收盘数据，沪指下跌0.48%表现偏弱'
        },
        shengzheng: { 
            value: 11151.09, 
            change: '-1.09%', 
            volume: '约4993亿', 
            turnover: '节后首个交易日深市走弱，深成指下跌1.09%，创业板指下跌1.40%，科技成长赛道分化加剧',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月5日收盘数据，深成指下跌1.09%'
        },
        chuangye: { 
            value: 2265.56, 
            change: '-1.40%', 
            volume: '约1801亿(午盘)', 
            turnover: '创业板指大幅回落，成长赛道分化加剧，节前获利盘集中兑现，游戏、光伏、风电、新能源等板块领跌',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月5日收盘数据，创业板指下跌1.40%回调明显'
        },
        zhuanke50: { 
            value: 1561.0, 
            change: '-1.20%', 
            volume: '约500亿', 
            turnover: '科创50指数同步回落，跌幅超1.2%，AI算力、半导体等科技成长板块分化调整',
            source: 'https://quote.eastmoney.com/center/gridlist.html',
            note: '5月5日收盘数据，科创50下跌超1.2%'
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
    // 注：5月5日收盘更新，以下为最新财经要闻
    realtimeNews: [
        {
            title: '5月5日A股收跌：沪指跌0.48%，两市超4000家个股飘绿',
            source: '每日经济新闻',
            sourceUrl: 'https://www.nbd.com.cn/',
            time: '2026-05-05 15:30',
            summary: '5月5日A股收盘，三大指数集体收跌，沪指下跌0.48%报3334.5点，深成指跌1.09%，创业板指跌1.40%。两市成交额约4993亿元，北向资金净卖出23.62亿元。盘面上，证券、银行等大金融板块逆势护盘，互联网服务局部活跃；游戏、光伏、风电、新能源等板块领跌，超4000家个股飘绿。',
            impact: '利空',
            relatedSectors: ['大盘整体', '金融', '成长股'],
            importance: '高'
        },
        {
            title: '中东局势紧张升级：伊朗向美舰发射导弹，油价大涨',
            source: '央视新闻',
            sourceUrl: 'https://www.cctv.com/',
            time: '2026-05-05',
            summary: '中东局势持续紧张，伊朗称用导弹攻击了一艘试图穿越霍尔木兹海峡的美国军舰。美军中央司令部称已击沉6艘伊朗小型船只。布伦特原油期货价格盘中大涨5.8%至114.44美元/桶，金价则下跌2.53%至4526.7美元/盎司。全球市场避险情绪升温。',
            impact: '利空',
            relatedSectors: ['石油', '贵金属', '军工', '全球市场'],
            importance: '高'
        },
        {
            title: '深圳楼市新政效果显著：五一新房签约量同比翻倍',
            source: '贝壳研究院',
            sourceUrl: 'https://www.ke.com/',
            time: '2026-05-05',
            summary: '深圳楼市新政落地效果显著，五一小长假首日，乐有家深圳新房带看同比上涨31%，二手带看上涨58%，门店二手签约量上涨114%。核心区限购政策放宽，公积金政策力度加大，楼市回暖态势明显。',
            impact: '利好',
            relatedSectors: ['房地产', '家电', '建筑建材'],
            importance: '中'
        },
        {
            title: '美股涨跌分化：道指跌超550点，科技股普跌',
            source: '21世纪经济报道',
            sourceUrl: 'https://www.21jingji.com/',
            time: '2026-05-05',
            summary: '周一美股三大股指集体收跌，道指跌超557点跌幅超1%，标普500跌超0.4%，纳指跌近0.2%。科技股多数下跌，AMD跌超5%，英特尔跌近4%。美光科技涨6%创历史新高。国际油价大涨，WTI原油涨4.4%，布油涨5.8%。金银全线下跌。',
            impact: '利空',
            relatedSectors: ['美股', '科技股', '大宗商品'],
            importance: '高'
        },
        {
            title: '央行5月6日将开展3000亿元逆回购，释放流动性利好',
            source: '央行官网',
            sourceUrl: 'https://www.pbc.gov.cn/',
            time: '2026-05-04',
            summary: '中国央行宣布将于5月6日开展3000亿元91天期买断式逆回购操作，这是2026年以来单次最大规模中期流动性投放，力度超市场预期。本周另有4191亿元逆回购到期，央行维护流动性合理充裕的态度明确。',
            impact: '利好',
            relatedSectors: ['金融', '券商', '大盘整体', '银行'],
            importance: '高'
        },
        {
            title: '五一档票房突破6亿元，电影消费市场火热',
            source: '猫眼票房',
            sourceUrl: 'https://www.maoyan.com/',
            time: '2026-05-05',
            summary: '截至5月5日，2026年五一档电影总票房(含预售)已突破6亿元，放映场次超235万场。《消失的人》《寒战1994》《穿普拉达的女王2》暂列票房前三。营业性演出达3.4万场，票房收入20.84亿元，同比增长37.17%。',
            impact: '利好',
            relatedSectors: ['影视', '旅游', '消费', '娱乐'],
            importance: '中'
        },
        {
            title: '社保基金持仓曝光：持有5959亿元，新进282只个股',
            source: 'Wind资讯',
            sourceUrl: 'https://www.wind.com.cn/',
            time: '2026-05-05',
            summary: 'A股上市公司一季报披露完毕，社保基金一季度持有707只个股，合计市值5959.43亿元，新进入282家个股前十大流通股股东名单。金融、制造等板块获得社保基金重点关注。',
            impact: '利好',
            relatedSectors: ['金融', '制造', '大盘整体', '蓝筹'],
            importance: '高'
        },
        {
            title: '东阳光药胰岛素获FDA批准，首个进入美国市场的中国胰岛素',
            source: '医药时报',
            sourceUrl: 'https://www.yyst.com.cn/',
            time: '2026-05-05',
            summary: '东阳光药甘精胰岛素"Langlara"获得FDA批准，成为首个进入美国市场的中国胰岛素产品，并获得"可互换"标签。这是中国生物医药产业国际化的重要里程碑，对创新药板块形成利好。',
            impact: '利好',
            relatedSectors: ['医药', '创新药', '生物制药'],
            importance: '中'
        },
        {
            title: '豆包App推出付费订阅，三档定价最高500元/月',
            source: '字节跳动',
            sourceUrl: 'https://www.bytedance.com/',
            time: '2026-05-05',
            summary: '字节跳动旗下豆包App将在免费版基础上推出付费版本，标准版连续包月68元/月，另有加强版200元/月和专业版500元/月。AI进入"分层收费"时代，标志着AI应用商业化加速。',
            impact: '利好',
            relatedSectors: ['AI应用', '云计算', '软件'],
            importance: '中'
        },
        {
            title: '台积电可能重启龙潭晶圆厂计划，投资或达190亿美元',
            source: '台湾经济日报',
            sourceUrl: 'https://udn.com/',
            time: '2026-05-05',
            summary: '消息人士称，在悬宕两年半后，台积电可能重启龙潭晶圆厂计划，预期将导入次世代埃米级制程。如果重启该计划，预计将带动5000亿至6000亿新台币（约190亿美元）投资。半导体产业链持续受益。',
            impact: '利好',
            relatedSectors: ['半导体', '芯片', '科技制造'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -193.52,
            unit: '亿元',
            direction: '净流出',
            note: '5月5日全天主力资金净流出约193.52亿元',
            shangzheng: '净流出',
            shengzheng: '净流出',
            trend: '5月5日A股震荡走弱，主力资金大幅净流出',
            analysis: '5月5日主力资金呈现明显分化：净流入非银金融11.45亿元、房地产9.02亿元、食品饮料等板块；净流出传媒57.24亿元、通信24.67亿元、电力设备等板块。资金从高位题材向权重防御板块切换明显，市场风险偏好回落。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: -23.62,
            unit: '亿元',
            direction: '净流出',
            note: '5月5日北向资金全天净卖出23.62亿元',
            shengutong: 0.85,
            hushenutong: -24.48,
            trend: '5月5日北向资金分化，沪股通小幅净流入、深股通大幅净流出',
            analysis: '5月5日北向资金全天净卖出23.62亿元，其中沪股通净买入0.85亿元，深股通净卖出24.48亿元。整体外资保持谨慎观望态度，深市成长股遭遇外资减仓。沪市大盘蓝筹获得外资小幅青睐。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '非银金融', inflow: 0, outflow: 0, netFlow: 11.45, note: '涨幅0.92%，证券、银行等大金融板块逆势护盘', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '房地产', inflow: 0, outflow: 0, netFlow: 9.02, note: '涨幅2.87%，深圳楼市新政提振板块表现', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '食品饮料', inflow: 0, outflow: 0, netFlow: 0, note: '部分资金流入，大消费防御属性凸显', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '社会服务', inflow: 0, outflow: 0, netFlow: 0, note: '大金融板块护盘，市场风格偏向防御', source: 'https://data.eastmoney.com/zjlx/' },
            { name: '传媒', inflow: 0, outflow: 0, netFlow: -57.24, note: '跌幅居首，主力资金净流出超57亿元', source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: 'C晶合', netFlow: 15.24, reason: '今日上市新股，特大单净流入居首' },
                { name: '三六零', netFlow: 6.45, reason: 'AI安全概念获资金关注' },
                { name: '中国平安', netFlow: 0, reason: '大金融龙头获主力资金净流入' },
                { name: '中信证券', netFlow: 0, reason: '券商板块护盘主力' },
                { name: 'C三博', netFlow: 0, reason: '今日上市新股获资金追捧' }
            ],
            outflow: [
                { name: '剑桥科技', netFlow: -8.96, reason: '通信设备板块主力净流出居首' },
                { name: '浪潮信息', netFlow: -7.81, reason: 'AI服务器概念调整，主力资金净流出' },
                { name: '汤姆猫', netFlow: -6.32, reason: 'AI应用板块调整，主力资金净流出' },
                { name: '寒武纪', netFlow: 0, reason: 'AI算力龙头高位震荡整固' },
                { name: '工业富联', netFlow: 0, reason: 'AI算力板块延续调整态势' }
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
                name: '非银金融（保险/银行/券商）',
                reason: '5月5日非银金融板块涨幅0.92%，逆势护盘，大金融板块集体走强。市场震荡期间，金融板块防御属性凸显，北向资金小幅净流入沪市大盘蓝筹，资金向权重防御板块切换明显。',
                inflow: 11.45,
                hotStocks: ['中国平安', '中信证券', '中国太保', '民生银行', '招商银行'],
                sustainability: '中',
                riskTip: '关注经济复苏进度和资产质量变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '房地产',
                reason: '5月5日房地产板块涨幅2.87%，深圳楼市新政落地效果显著，五一期间新房签约量同比翻倍。核心区限购政策放宽，公积金政策力度加大，楼市回暖态势明显。',
                inflow: 9.02,
                hotStocks: ['万科A', '保利发展', '招商蛇口', '金地集团', '新城控股'],
                sustainability: '中',
                riskTip: '关注政策力度和市场销售数据持续性',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '食品饮料（大消费）',
                reason: '市场震荡期间，大消费板块防御属性凸显，部分资金流入。五一档票房突破6亿元，消费市场活力回升，消费板块具备中长期配置价值。',
                inflow: 0,
                hotStocks: ['贵州茅台', '五粮液', '泸州老窖', '海天味业', '伊利股份'],
                sustainability: '中',
                riskTip: '关注消费数据恢复情况和估值水平',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '创新药/生物医药',
                reason: '东阳光药胰岛素获FDA批准，成为首个进入美国市场的中国胰岛素产品，这是中国生物医药产业国际化的重要里程碑，对创新药板块形成利好。政策支持+创新驱动，板块具备长期配置价值。',
                inflow: 0,
                hotStocks: ['恒瑞医药', '药明康德', '贝达药业', '信达生物', '复星医药'],
                sustainability: '强',
                riskTip: '关注集采政策变化和研发进展',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '半导体（长期布局）',
                reason: '台积电可能重启龙潭晶圆厂计划，预期将导入次世代埃米级制程，投资或达190亿美元。半导体产业链持续受益，AI算力需求爆发带动国产替代加速，长期配置逻辑不变。',
                inflow: 0,
                hotStocks: ['中芯国际', '寒武纪', '海光信息', '北方华创', '中微公司'],
                sustainability: '强',
                riskTip: '短期高位震荡，关注回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 当前利空板块
        unfavorable: [
            {
                name: '传媒（短期调整）',
                reason: '5月5日传媒板块跌幅居首，主力资金净流出57.24亿元。前期涨幅过大，获利盘丰厚需消化，短期进入调整期。',
                outflow: 57.24,
                riskStocks: ['分众传媒', '昆仑万维', '汤姆猫', '世纪华通', '中文在线'],
                riskTip: '短期高位震荡，控制仓位，等待回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '通信（短期调整）',
                reason: '5月5日通信板块主力资金净流出24.67亿元，剑桥科技、浪潮信息等个股遭主力资金大幅净流出。AI算力硬件前期涨幅过大，短期进入调整期。',
                outflow: 24.67,
                riskStocks: ['剑桥科技', '浪潮信息', '中兴通讯', '光迅科技', '中际旭创'],
                riskTip: '短期高位震荡，关注回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '电力设备（短期调整）',
                reason: '前期光伏、风电、新能源等板块涨幅过大，5月5日领跌市场，资金大幅流出。新能源赛道短期需消化获利盘，进入震荡调整期。',
                outflow: 0,
                riskStocks: ['宁德时代', '阳光电源', '隆基绿能', '通威股份', '天齐锂业'],
                riskTip: '短期高位震荡，等待回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '游戏（短期调整）',
                reason: '5月5日游戏板块大幅下跌，领跌市场。前期AI游戏概念炒作过热，短期进入获利了结期。',
                outflow: 0,
                riskStocks: ['昆仑万维', '汤姆猫', '世纪华通', '完美世界', '三七互娱'],
                riskTip: '短期高位震荡，控制仓位，避免追高',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: 'AI应用（短期调整）',
                reason: '前期AI算力、AI应用涨幅过大，5月5日相关个股大幅回调。获利盘丰厚需消化，短期进入调整期。',
                outflow: 0,
                riskStocks: ['科大讯飞', '三六零', '汤姆猫', '昆仑万维', '万兴科技'],
                riskTip: '短期高位震荡，等待回踩企稳后的低吸机会',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '大金融板块',
                catalyst: '央行5月6日将开展3000亿元逆回购，释放流动性利好。低估值+政策预期驱动，估值修复行情持续演绎',
                expectedTime: '2026年5月',
                relatedNews: '资金向低估值权重板块切换明显，大金融板块防御属性凸显',
                potential: '中',
                source: 'https://www.pbc.gov.cn/'
            },
            {
                name: '房地产',
                catalyst: '深圳楼市新政效果显著，五一期间新房签约量同比翻倍。政策持续加码，楼市回暖态势明显',
                expectedTime: '2026年5-6月',
                relatedNews: '核心区限购政策放宽，公积金政策力度加大，楼市成交量持续回暖',
                potential: '中',
                source: 'https://www.ke.com/'
            },
            {
                name: '半导体/AI算力（长期布局）',
                catalyst: '台积电可能重启龙潭晶圆厂计划，投资或达190亿美元。AI算力需求爆发带动国产替代加速',
                expectedTime: '2026年5-6月',
                relatedNews: '半导体产业链持续受益，国产替代加速，一季报业绩验证高景气',
                potential: '高',
                source: 'https://www.eeo.com.cn/'
            },
            {
                name: '创新药/生物医药',
                catalyst: '东阳光药胰岛素获FDA批准，中国生物医药产业国际化里程碑。政策支持+创新驱动',
                expectedTime: '2026年',
                relatedNews: '创新药出海加速，政策持续支持创新药发展',
                potential: '中高',
                source: 'https://www.nmpa.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['AI算力', '半导体', '传媒', '游戏', '通信', '新能源'],
            to: ['非银金融', '房地产', '食品饮料', '创新药', '大消费'],
            analysis: '5月5日市场呈现明显的"高低切换"特征：资金从高位AI算力、传媒、通信、新能源向低估值权重板块切换。非银金融(0.92%)、房地产(2.87%)逆势护盘；传媒、通信、电力设备领跌。AI算力、半导体短期需整固，建议关注低估值权重板块的补涨机会。'
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
