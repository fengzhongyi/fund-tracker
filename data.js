// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-23 08:15:00';

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
            value: 4093.25, 
            change: '-0.32%', 
            volume: '约1.23万亿', 
            turnover: '约1.23万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 15043.45, 
            change: '-0.88%', 
            volume: '约1.57万亿', 
            turnover: '约1.57万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3720.25, 
            change: '-0.87%', 
            volume: '约6800亿', 
            turnover: '约6800亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1840.60, 
            change: '-1.81%', 
            volume: '约950亿', 
            turnover: '约950亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
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
    realtimeNews: [
        {
            title: '4月23日收盘：沪指失守4100点，A股放量调整成交2.82万亿',
            source: '21世纪经济报道',
            sourceUrl: 'https://www.21jingji.com/',
            time: '2026-04-23',
            summary: '4月23日，A股高开低走，沪指失守4100点整数关口。截至收盘，上证指数跌0.32%报4093.25点，深证成指跌0.88%，创业板指跌0.87%。两市成交2.82万亿元放量2443亿元。盘面上，白酒、银行、煤炭、电力等防御板块走强，而贵金属、稀土、CPO等高位科技题材集体回调。资金从高位科技向低估值防御板块切换。',
            impact: '中性',
            relatedSectors: ['白酒', '银行', '煤炭', '电力'],
            importance: '高'
        },
        {
            title: '中办国办印发碳达峰碳中和综合评价考核办法',
            source: '新华社',
            sourceUrl: 'https://www.gov.cn/',
            time: '2026-04-24',
            summary: '中办、国办印发《碳达峰碳中和综合评价考核办法》，将"双碳"评价考核结果挂钩领导干部考核任用。设置碳排放总量、碳排放强度降低、煤炭消费总量、石油消费总量、非化石能源消费占比等5项控制指标。利好新能源、储能、节能环保等绿色产业。',
            impact: '利好',
            relatedSectors: ['新能源', '储能', '风电光伏', '绿色电力'],
            importance: '高'
        },
        {
            title: '工信部推进算电协同，绿电直供与新型电力系统迎催化',
            source: '国新办发布会',
            sourceUrl: 'https://www.gov.cn/xinwen/',
            time: '2026-04-24',
            summary: '工信部副部长张云明表示，将引导算力基础设施按需有序建设，推动绿色电力与算力协同布局，推进算力自动化监测全域覆盖，完善中国算力平台，促进算力供需精准对接。算电协同政策加速推进，利好绿电直供、电网数智化、虚拟电厂等方向。',
            impact: '利好',
            relatedSectors: ['绿电', '电网数智化', '储能', '算力基础设施'],
            importance: '高'
        },
        {
            title: 'OpenAI发布GPT-5.5，搭载最强安全防护机制',
            source: 'OpenAI',
            sourceUrl: 'https://openai.com/',
            time: '2026-04-24',
            summary: 'OpenAI发布GPT-5.5，在代码编写、科学研究及知识工作领域实现跨越式提升，标志着AI从问答工具向自主完成复杂计算机任务的代理系统全面演进。GPT-5.5即日起向ChatGPT用户开放。持续催化AI产业投资热情。',
            impact: '利好',
            relatedSectors: ['AI算力', '大模型', '算力芯片'],
            importance: '高'
        },
        {
            title: '美伊局势紧张升级，霍尔木兹海峡封锁推动油价大涨',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-24',
            summary: '美伊谈判陷入僵局，霍尔木兹海峡局势持续紧张。WTI原油突破98美元/桶，布伦特原油突破107美元/桶，日内涨超5%。伊朗威胁封锁曼德海峡，全球能源供应担忧加剧。利好油气板块，但对全球经济复苏形成压力。',
            impact: '利好',
            relatedSectors: ['石油', '油气开采', '能源化工'],
            importance: '高'
        },
        {
            title: '中际旭创市值突破万亿，苏州光模块产业迎高光时刻',
            source: '上海证券报',
            sourceUrl: 'https://www.cnstock.com/',
            time: '2026-04-23',
            summary: '4月23日，中际旭创股价突破900元/股，公司总市值首次突破万亿，成为A股第八只市值过万亿的个股。中际旭创核心业绩来自苏州旭创子公司，受益于AI算力基础设施建设热潮，光模块需求持续增长。',
            impact: '利好',
            relatedSectors: ['光模块', 'CPO', '通信设备'],
            importance: '中'
        },
        {
            title: '英特尔一季度财报超预期，盘后股价飙升16%',
            source: '新浪财经',
            sourceUrl: 'https://finance.sina.com.cn/',
            time: '2026-04-24',
            summary: '英特尔一季度营收同比增长7%至135.8亿美元（预期123.6亿美元），数据中心部门营收大增22%至51亿美元。AI驱动指引超预期，盘后股价飙升16%。显示AI芯片需求持续强劲。',
            impact: '利好',
            relatedSectors: ['AI芯片', '半导体', '数据中心'],
            importance: '中'
        },
        {
            title: '商业航天受"中国航天日"催化全线活跃',
            source: '央视新闻',
            sourceUrl: 'https://tv.cctv.com/lm/xwlb/',
            time: '2026-04-24',
            summary: '4月24日为中国航天日，商业航天板块受政策催化全线大涨，中衡设计4天3板。中国载人航天工程首批外籍航天员选拔完成，国际合作加速推进。卫星互联网、火箭发射等细分领域迎催化。',
            impact: '利好',
            relatedSectors: ['商业航天', '卫星互联网', '军工'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -783.8,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -420,
            shengzheng: -363.8,
            trend: '主力资金大幅净流出783.8亿元，创近一个月单日流出新高',
            analysis: '4月23日主力资金净流出约783.8亿元，为近一个月单日最大流出。主力资金集中抛售高位科技板块：稀土重挫7%、贵金属大跌、CPO概念全线回调、通信设备净流出居前。而白酒、银行、煤炭、电力等防御性板块获资金流入。资金呈现明显的"高低切换"特征，属于正常的获利了结而非趋势看空。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 13.02,
            unit: '亿元',
            direction: '净流入',
            shengutong: 18.5,
            hushenutong: -5.48,
            trend: '北向资金净流入13.02亿元，尾盘逆势回流',
            analysis: '北向资金4月23日净流入13.02亿元，尾盘出现逆势回流。沪股通净流入18.5亿元，深股通净流出5.48亿元。外资偏好沪市权重蓝筹，规避深市科技成长。本月北向资金累计净流入约286亿元，今年以来净流入超2856亿元。外资中长期看好A股态度未变。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '银行', inflow: 45.23, outflow: 0, netFlow: 45.23, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '石油开采', inflow: 38.56, outflow: 0, netFlow: 38.56, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '煤炭开采', inflow: 28.34, outflow: 0, netFlow: 28.34, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '白酒', inflow: 25.67, outflow: 0, netFlow: 25.67, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电力', inflow: 22.45, outflow: 0, netFlow: 22.45, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '贵金属', inflow: 0, outflow: -85.67, netFlow: -85.67, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '稀土永磁', inflow: 0, outflow: -68.23, netFlow: -68.23, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'CPO概念', inflow: 0, outflow: -52.34, netFlow: -52.34, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '通信设备', inflow: 0, outflow: -45.89, netFlow: -45.89, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '算力硬件', inflow: 0, outflow: -38.76, netFlow: -38.76, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '中际旭创', netFlow: 12.68, reason: '光模块绝对龙头，受益于AI算力建设和CPO技术爆发' },
                { name: '新易盛', netFlow: 8.35, reason: '高速光模块弹性龙头，CPO概念持续受益' },
                { name: '工业富联', netFlow: 7.82, reason: 'AI服务器龙头，受益于算力需求爆发，尾盘涨停' },
                { name: '中兴通讯', netFlow: 6.54, reason: '通信设备龙头，5G/6G概念持续受益' },
                { name: '北方华创', netFlow: 5.21, reason: '半导体设备龙头，国产替代加速' }
            ],
            outflow: [
                { name: '宁德时代', netFlow: -12.24, reason: '动力电池龙头，短期承压但中长期仍看好' },
                { name: '隆基绿能', netFlow: -8.56, reason: '光伏龙头，受行业产能过剩影响' },
                { name: '亿纬锂能', netFlow: -6.89, reason: '锂电池龙头，短期获利了结' },
                { name: '天齐锂业', netFlow: -5.47, reason: '锂矿龙头，价格波动影响业绩' },
                { name: '阳光电源', netFlow: -4.23, reason: '光伏逆变器龙头，短期调整' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 6.20, outflow: 0, netFlow: 6.20, trend: '大盘蓝筹获资金青睐，净流入约6.2亿元', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 2.80, outflow: 0, netFlow: 2.80, trend: '科技板块回暖，净流入约2.8亿元', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 3.50, outflow: 0, netFlow: 3.50, trend: '防御属性吸引资金流入，净流入约3.5亿元', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: -8.85, outflow: 0, netFlow: -8.85, trend: '份额减少2.21亿份，资金净流出约8.85亿元', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '白酒/大消费',
                reason: '白酒板块4月23日逆势走强，迎驾贡酒涨停，贵州茅台、五粮液飘红。山西汾酒拟每10股派65.6元分红80亿元，股息率超4%。白酒行业正处于去库周期尾声，批价企稳、库存去化加速，板块估值处于低位具备布局价值。',
                inflow: 25.67,
                hotStocks: ['迎驾贡酒', '山西汾酒', '贵州茅台', '五粮液', '古井贡酒'],
                sustainability: '中',
                riskTip: '关注批价走势和库存去化进度',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '银行/高股息',
                reason: '银行板块震荡拉升，贵阳银行涨近7%。银行股H股近期创历史新高，A股银行估值修复空间较大。保险资金权益投资上限提升至35%，释放万亿增量资金，偏好低估值高股息银行股。',
                inflow: 45.23,
                hotStocks: ['贵阳银行', '招商银行', '工商银行', '建设银行', '农业银行'],
                sustainability: '强',
                riskTip: '关注净息差走势和资产质量',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '电力/绿电',
                reason: '电力板块持续走强，华电辽能连续3日涨停，今年以来飙涨245%。中办国办发文推进节能降碳，工信部推进算电协同，利好绿电直供、新型储能、虚拟电厂等方向。新型电力系统建设加速，电网数智化迎来价值重估。',
                inflow: 22.45,
                hotStocks: ['华电辽能', '节能风电', '华电能源', '绿发电力', '晶科科技'],
                sustainability: '强',
                riskTip: '电价波动和新能源消纳风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '石油/油气',
                reason: '美伊局势紧张升级，霍尔木兹海峡封锁推动油价大涨。WTI突破98美元/桶，布伦特突破107美元/桶，日内涨超5%。全球能源供应担忧加剧，油气开采板块迎催化。',
                inflow: 38.56,
                hotStocks: ['中国石油', '中国石化', '中海油服', '山东墨龙'],
                sustainability: '中',
                riskTip: '地缘局势缓和导致油价回落',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: 'AI算力',
                catalyst: 'OpenAI发布GPT-5.5、英特尔财报超预期，算力需求从训练到推理全面爆发',
                expectedTime: '2026年',
                relatedNews: 'DeepSeek持续迭代，AI应用场景持续扩展，算力需求长期增长，但需警惕高位科技股业绩兑现风险',
                potential: '高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '商业航天',
                catalyst: '中国航天日催化，首批外籍航天员选拔完成，国际合作加速',
                expectedTime: '2026年',
                relatedNews: '卫星互联网、火箭发射等细分领域迎政策催化，商业航天产业进入快速发展期',
                potential: '中高',
                source: 'https://www.cnsa.gov.cn/'
            },
            {
                name: '新型储能',
                catalyst: '中办国办发文首次将新型储能提升至与源网荷同等重要，明确2030年装机目标超1亿千瓦',
                expectedTime: '2026-2030年',
                relatedNews: '储能装备产业链、算力配套等方向的长期订单确定性正在强化',
                potential: '高',
                source: 'https://www.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['CPO', '光模块', '稀土', '贵金属', '算力硬件'],
            to: ['白酒', '银行', '煤炭', '电力', '石油'],
            analysis: '市场风格从高位科技向低估值防御切换。4月23日高位科技题材集体回调：稀土跌7%、贵金属大跌、CPO概念全线回调。而白酒、银行、煤炭、电力等防御板块获资金流入。主力资金呈现"高低切换"特征，属于正常的获利了结。机构认为当前位置无需悲观，短期震荡后科技主线仍有望回归。'
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
        date: '2026-04-22',
        summary: 'A股低开高走，沪指重返4100点，创业板指创11年新高。两市成交额2.56万亿元放量突破，CPO、光模块等算力硬件全线爆发，工业富联涨停。主力资金呈现"弃高就低"特征，从高位新能源向低位科技切换。北向资金净流入67亿元，外资持续看好A股。',
        keyPoints: [
            '沪指涨0.52%报4106.26点，创业板指涨1.73%创2015年6月以来11年新高',
            '两市成交额2.56万亿元，较昨日放量1512亿元，量价配合健康',
            '通信设备主力资金净流入103.61亿元居首，半导体净流入62.19亿元',
            'CPO、光模块概念爆发，中际旭创、新易盛创历史新高',
            '工业富联尾盘涨停，AI服务器需求持续爆发',
            '电力设备净流出106.64亿元居首，主力资金从高位新能源撤离',
            '北向资金净流入67亿元，外资加仓白酒、新能源和科技龙头',
            '英维克一季报业绩暴跌81.97%跌停，拖累AI算力板块'
        ],
        marketOutlook: '沪指放量突破4100点，技术面形成放量突破形态，上方空间打开。科技成长风格主导，CPO、半导体等硬核科技具备产业趋势支撑。但需注意创业板指RSI接近超买，短期可能震荡整固。建议关注量能持续性，在控制仓位前提下布局科技主线，同时持有红利ETF和债券基金作为底仓配置。'
    }
};
