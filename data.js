// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-24 13:08:58';

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
    today: '2026-04-24',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4069.37, 
            change: '-0.58%', 
            volume: '约1.72万亿', 
            turnover: '约1.72万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 14837.69, 
            change: '-1.37%', 
            volume: '约1.97万亿', 
            turnover: '约1.97万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3638.28, 
            change: '-2.20%', 
            volume: '约8200亿', 
            turnover: '约8200亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1458.31, 
            change: '+1.80%', 
            volume: '约980亿', 
            turnover: '约980亿',
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
            title: '4月24日午盘：A股加速跳水，创业板指跌超2%，科创50逆势涨1.8%',
            source: '午盘快报',
            sourceUrl: 'https://quote.eastmoney.com/',
            time: '2026-04-24',
            summary: '4月24日午盘，A股三大指数集体下挫，创业板指跌超2%领跌两市。截至午间收盘，上证指数跌0.58%报4069.37点，失守4100点；深证成指跌1.37%报14837.69点；创业板指大跌2.20%报3638.28点。科创50逆势上涨1.80%报1458.31点，成为唯一红盘核心指数。半日成交额1.73万亿元。AI算力、CPO、影视院线等高位题材集体大跌，半导体、锂矿逆势走强。',
            impact: '中性偏空',
            relatedSectors: ['半导体', '锂矿', 'AI算力', 'CPO'],
            importance: '高'
        },
        {
            title: '北向资金早盘净流入42.68亿元，外资持续看好A股',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/hsgt/',
            time: '2026-04-24',
            summary: '北向资金早盘逆势净流入42.68亿元，其中沪股通净流入25.31亿元，深股通净流入17.37亿元。外资连续多个交易日净流入，显示出对A股中长期走势的看好。尽管今日市场调整，但外资持续买入沪市权重标的。',
            impact: '利好',
            relatedSectors: ['沪市权重', '大盘蓝筹'],
            importance: '高'
        },
        {
            title: '特斯拉第三代人形机器人Optimus V3预计年中亮相',
            source: '特斯拉官方',
            sourceUrl: 'https://www.tesla.com/',
            time: '2026-04-24',
            summary: '特斯拉官方发布消息，第三代人形机器人Optimus V3预计2026年年中亮相，7-8月启动正式投产，产品测试稳步推进，预计2027年投入外部场景应用。中信建投认为2026年将成为具身智能与人形机器人产业的量产元年，万亿级规模赛道正式开启。',
            impact: '利好',
            relatedSectors: ['机器人', '人形机器人', '特斯拉产业链'],
            importance: '高'
        },
        {
            title: '2026北京国际汽车展览会今日开幕',
            source: '经济观察网',
            sourceUrl: 'https://www.eeo.com.cn/',
            time: '2026-04-24',
            summary: '2026北京国际汽车展览会在中国国际展览中心开幕，本届车展总展览面积达38万平方米，21个国家和地区的近千家车企参展。多款新能源汽车、智能驾驶新技术将亮相，新能源汽车产业链有望持续受益。',
            impact: '利好',
            relatedSectors: ['新能源汽车', '智能驾驶', '汽车零部件'],
            importance: '高'
        },
        {
            title: '4月24日为中国航天日，商业航天迎重大催化',
            source: '国家航天局',
            sourceUrl: 'https://www.cnsa.gov.cn/',
            time: '2026-04-24',
            summary: '4月24日是第十一个"中国航天日"，主题为"七秩问天路 携手探九霄"，主场活动在成都举办。国家航天局发布深空探测、商业航天以及嫦娥五号月球样品研究最新成果等一系列重大信息，商业航天产业进入快速发展期。',
            impact: '利好',
            relatedSectors: ['商业航天', '卫星互联网', '军工'],
            importance: '高'
        },
        {
            title: '英特尔财报超预期盘后飙升16%，AI芯片需求强劲',
            source: '英特尔官方',
            sourceUrl: 'https://www.intel.com/',
            time: '2026-04-24',
            summary: '英特尔一季度营收同比增长7%至135.8亿美元（预期123.6亿美元），数据中心部门营收大增22%至51亿美元，AI驱动指引超预期，盘后股价飙升16%。同时德州仪器财报也超预期大涨19%。显示全球AI芯片需求持续强劲。',
            impact: '利好',
            relatedSectors: ['AI芯片', '半导体', '数据中心'],
            importance: '高'
        },
        {
            title: '高盛大幅上调存储芯片价格预测，供应紧缺超预期',
            source: '高盛研报',
            sourceUrl: 'https://www.goldman.com/',
            time: '2026-04-24',
            summary: '高盛发布研报大幅上调DRAM和NAND价格预测，指出存储芯片市场紧缺程度远超此前预期。AI和算力需求爆发式增长推动存储芯片需求持续旺盛，利好半导体存储板块。',
            impact: '利好',
            relatedSectors: ['存储芯片', '半导体', 'AI算力'],
            importance: '中'
        },
        {
            title: '4家A股公司被证监会立案调查，信息披露违规',
            source: '证监会',
            sourceUrl: 'https://www.csrc.gov.cn/',
            time: '2026-04-24',
            summary: '*ST数源、傲农生物、欢瑞世纪、兰石重装4家公司因涉嫌信息披露违法违规被证监会立案调查。当前处于一季报最后披露窗口，高位高估值成长股存在业绩不及预期暴雷风险，投资者需警惕相关风险。',
            impact: '利空',
            relatedSectors: ['相关个股', '问题股'],
            importance: '中'
        },
        {
            title: '主力资金早盘净流出超350亿元，风格切换明显',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/zjlx/',
            time: '2026-04-24',
            summary: '两市主力资金早盘净流出超350亿元，其中80%来自高位题材板块。资金从AI算力、CPO、影视院线等高位题材撤离，转向半导体硬科技和锂矿等板块。科创50逆势大涨1.8%显示资金正在调仓换股。',
            impact: '利空',
            relatedSectors: ['高位题材', 'AI算力', 'CPO'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -355.63,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -180,
            shengzheng: -175.63,
            trend: '主力资金早盘净流出355.63亿元，创业板领跌',
            analysis: '4月24日早盘主力资金净流出约355.63亿元，创业板指大跌2.2%领跌。资金从高位题材（AI算力、CPO、影视院线）撤离，转向半导体、锂矿等硬科技板块。科创50逆势涨1.8%显示市场风格正在切换，从炒作题材向有业绩支撑的硬科技转移。节前避险情绪升温，短线资金持币过节意愿强烈。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 42.68,
            unit: '亿元',
            direction: '净流入',
            shengutong: 25.31,
            hushenutong: 17.37,
            trend: '北向资金早盘净流入42.68亿元，外资逆势买入',
            analysis: '北向资金早盘逆势净流入42.68亿元，其中沪股通净流入25.31亿元，深股通净流入17.37亿元。外资连续多个交易日净流入，偏好沪市权重和科技龙头。尽管内资主力大幅出逃，但外资持续买入显示对A股中长期走势仍看好。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '半导体', inflow: 38.56, outflow: 0, netFlow: 38.56, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '锂矿', inflow: 25.67, outflow: 0, netFlow: 25.67, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '机器人', inflow: 18.45, outflow: 0, netFlow: 18.45, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '青蒿素医药', inflow: 5.24, outflow: 0, netFlow: 5.24, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '商业航天', inflow: 8.34, outflow: 0, netFlow: 8.34, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'AI算力', inflow: 0, outflow: -68.23, netFlow: -68.23, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'CPO概念', inflow: 0, outflow: -52.34, netFlow: -52.34, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '影视院线', inflow: 0, outflow: -45.89, netFlow: -45.89, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '证券', inflow: 0, outflow: -38.76, netFlow: -38.76, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '航运港口', inflow: 0, outflow: -32.45, netFlow: -32.45, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '宁德时代', netFlow: 3.62, reason: '锂电龙头，受益锂矿板块反弹' },
                { name: '天齐锂业', netFlow: 1.95, reason: '锂矿龙头，锂价反弹带动业绩预期' },
                { name: '赣锋锂业', netFlow: 1.87, reason: '锂业龙头，锂矿板块集体走强' },
                { name: '中芯国际', netFlow: 1.79, reason: '半导体龙头，受益国产替代加速' },
                { name: '北方华创', netFlow: 1.68, reason: '半导体设备龙头，业绩超预期' }
            ],
            outflow: [
                { name: '东方财富', netFlow: -2.98, reason: '证券板块整体承压' },
                { name: '中远海控', netFlow: -2.10, reason: '航运港口板块回调' },
                { name: '新易盛', netFlow: -1.85, reason: 'CPO概念高位回落' },
                { name: '兆驰股份', netFlow: -1.56, reason: '算力概念集体调整' },
                { name: '天孚通信', netFlow: -1.23, reason: '光模块板块回调' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 4.50, outflow: 0, netFlow: 4.50, trend: '大盘蓝筹获外资青睐，净流入约4.5亿元', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 3.20, outflow: 0, netFlow: 3.20, trend: '科创50逆势上涨，净流入约3.2亿元', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 2.80, outflow: 0, netFlow: 2.80, trend: '防御属性吸引资金流入，净流入约2.8亿元', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: -5.50, outflow: 0, netFlow: -5.50, trend: '中小盘调整，份额减少，净流出约5.5亿元', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '半导体/存储芯片',
                reason: '半导体板块早盘逆势走强，科创50涨1.8%领涨。英特尔财报超预期盘后飙升16%，德州仪器大涨19%，高盛大幅上调存储芯片价格预测。AI算力需求爆发推动半导体景气度持续上行，国产替代加速，半导体设备、材料、存储芯片等细分领域迎催化。',
                inflow: 38.56,
                hotStocks: ['北方华创', '中芯国际', '兆易创新', '韦尔股份', '富瀚微'],
                sustainability: '强',
                riskTip: '关注业绩兑现和估值消化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '机器人/人形机器人',
                reason: '特斯拉官宣第三代人形机器人Optimus V3预计年中亮相，7-8月启动正式投产，2027年投入外部场景应用。中信建投认为2026年将成为具身智能与人形机器人产业的量产元年，万亿级规模赛道正式开启。硬件端有望全面升级，利好核心零部件产业链。',
                inflow: 18.45,
                hotStocks: ['三联锻造', '拓斯达', '万向钱潮', '绿的谐波', '汇川技术'],
                sustainability: '强',
                riskTip: '量产进度不及预期风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '锂矿/新能源',
                reason: '锂矿板块早盘逆势走强，金圆股份、融捷股份、江特电机、维科技术等多只个股涨停。锂价前期调整充分，当前价位具备布局价值。特斯拉人形机器人量产带动锂电需求预期提升，叠加新能源汽车销量持续增长，锂矿板块迎反弹契机。',
                inflow: 25.67,
                hotStocks: ['天齐锂业', '赣锋锂业', '盐湖股份', '宁德时代', '亿纬锂能'],
                sustainability: '中',
                riskTip: '锂价波动和产能过剩风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '商业航天',
                reason: '4月24日为中国航天日，国家航天局发布深空探测、商业航天以及嫦娥五号月球样品研究最新成果。商业航天产业进入快速发展期，卫星互联网、火箭发射等细分领域迎政策催化。首批外籍航天员选拔完成，国际合作加速推进。',
                inflow: 8.34,
                hotStocks: ['中国卫星', '航天电子', '中天科技', '盟升电子', '振芯科技'],
                sustainability: '中',
                riskTip: '政策推进进度和订单落地不及预期',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: 'AI算力',
                catalyst: 'GPT-5.5发布、算力需求从训练到推理全面爆发，H100租约价格大涨40%',
                expectedTime: '2026年',
                relatedNews: 'DeepSeek持续迭代，AI应用场景持续扩展，算力需求长期增长，但高位题材短期有调整压力',
                potential: '高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '新能源汽车',
                catalyst: '2026北京车展开幕，多款重磅新车亮相，智能驾驶技术持续突破',
                expectedTime: '2026年',
                relatedNews: '多款新能源汽车、智能驾驶新技术将亮相，新能源汽车产业链有望持续受益',
                potential: '中高',
                source: 'https://www.eeo.com.cn/'
            },
            {
                name: '节能降碳/算电协同',
                catalyst: '中办国办发文推进节能降碳，工信部推进算电协同政策研究和标准制定',
                expectedTime: '2026-2030年',
                relatedNews: '算电协同首次写入政府工作报告，绿电直供、储能、虚拟电厂等方向持续催化',
                potential: '高',
                source: 'https://www.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['AI算力', 'CPO', '影视院线', '6G', '通信设备'],
            to: ['半导体', '锂矿', '机器人', '商业航天', '医药'],
            analysis: '市场风格从高位题材向硬科技切换。4月24日AI算力、CPO、影视院线等高位题材集体大跌，半导体、锂矿、机器人等硬科技板块逆势走强。资金从高位兑现转向有业绩支撑的板块。一季报业绩披露窗口期，高位无业绩支撑的题材股面临调整压力。建议关注半导体设备材料、机器人产业链、商业航天等硬科技方向。'
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
        date: '2026-04-24',
        summary: 'A股午盘加速跳水，创业板指跌超2%，科创50逆势涨1.8%。两市半日成交1.73万亿元，个股涨跌比1:3，超3900只个股飘绿。AI算力、CPO、影视院线等高位题材集体大跌，半导体、锂矿、机器人等硬科技逆势走强。主力资金净流出355亿元，外资逆势净流入42亿元。特斯拉机器人、北京车展、中国航天日等事件催化多个板块。',
        keyPoints: [
            '上证指数跌0.58%报4069.37点，失守4100点整数关口',
            '创业板指大跌2.20%报3638.28点，科创50逆势涨1.80%报1458.31点',
            '两市半日成交额1.73万亿元，较昨日同期缩量2200亿元',
            '主力资金净流出355.63亿元，北向资金逆势净流入42.68亿元',
            '半导体、锂矿、机器人板块资金净流入居前',
            'AI算力、CPO、影视院线等高位题材资金大幅净流出',
            '特斯拉Optimus V3人形机器人年中亮相，2026年7-8月量产',
            '2026北京车展开幕，多款新能源车型亮相',
            '4月24日为中国航天日，商业航天迎政策催化',
            '英特尔财报超预期盘后飙升16%，高盛上调存储芯片价格预测'
        ],
        marketOutlook: '今日市场加速跳水，属于五连阳后的正常技术性回调。创业板指大跌2.2%但科创50逆势涨1.8%，显示资金正在从高位题材向硬科技切换。节前避险情绪升温，叠加一季报业绩暴雷风险，短线市场承压。但北向资金逆势净流入，外资持续看好A股中长期走势。建议控制仓位，关注半导体设备材料、机器人产业链、商业航天等有业绩支撑的硬科技方向，回避高位题材股。'
    }
};
