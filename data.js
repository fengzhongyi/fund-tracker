// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-27 13:09:08';

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
    today: '2026-04-27',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4085.63, 
            change: '+0.15%', 
            volume: '约2.5万亿', 
            turnover: '约2.5万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 14982.56, 
            change: '+0.28%', 
            volume: '约2.6万亿', 
            turnover: '约2.6万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3667.02, 
            change: '-0.20%', 
            volume: '约8100亿', 
            turnover: '约8100亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1482.45, 
            change: '+1.69%', 
            volume: '约1050亿', 
            turnover: '约1050亿',
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
            title: '央行4月27日将开展4000亿元MLF操作，流动性保持充裕',
            source: '央行',
            sourceUrl: 'https://www.pbc.gov.cn/',
            time: '2026-04-27',
            summary: '为保持银行体系流动性充裕，2026年4月27日，中国人民银行将以固定数量、利率招标、多重价位中标方式开展4000亿元MLF操作，期限为1年期。流动性保持充裕，支撑权重与硬科技板块。',
            impact: '利好',
            relatedSectors: ['银行', '非银金融', '大盘权重'],
            importance: '高'
        },
        {
            title: '李强主持召开国常会，研究科技创新和海洋经济高质量发展',
            source: '央视新闻',
            sourceUrl: 'https://tv.cctv.com/lm/xwlb/',
            time: '2026-04-27',
            summary: '李强主持召开国务院常务会议，研究科技创新有关工作，听取推动海洋经济高质量发展情况汇报。政策持续支持科技创新和新兴产业发展，半导体、新能源、海洋装备等板块受益。',
            impact: '利好',
            relatedSectors: ['半导体', '海洋经济', '新能源', '科技创新'],
            importance: '高'
        },
        {
            title: '一季度GDP同比增长5.0%，一季度证券交易印花税增长78.1%',
            source: '财政部',
            sourceUrl: 'https://www.mof.gov.cn/',
            time: '2026-04-27',
            summary: '一季度全国GDP同比增长5.0%，经济运行开局良好。股票市场交易活跃，一季度证券交易印花税增长78.1%，反映市场活跃度持续提升。',
            impact: '利好',
            relatedSectors: ['券商', '金融科技', '大盘整体'],
            importance: '高'
        },
        {
            title: '证监会严打财务造假启动AI监控，4月27日起史上最严监管',
            source: '证监会',
            sourceUrl: 'https://www.csrc.gov.cn/',
            time: '2026-04-27',
            summary: '证监会启动史上最严财务造假严打，AI全天候监控财报，造假直接退市，实控人、董秘全追责。4月27日-30日是年报、一季报最后披露期，绩差股、ST股集中爆雷，市场将加速出清。',
            impact: '利空',
            relatedSectors: ['ST股', '绩差股', '问题股'],
            importance: '高'
        },
        {
            title: '今日32家公司解禁，市值约187亿，高位AI、算力股抛压重',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/',
            time: '2026-04-27',
            summary: '4月27日共有32家公司解禁，市值约187亿元。11家解禁比例超10%，大股东减持压力集中释放，高位AI、算力股面临较大抛压。',
            impact: '利空',
            relatedSectors: ['高位AI', '算力', '减持压力大的个股'],
            importance: '中'
        },
        {
            title: '恒力石化重要子公司被美财政部列入SDN制裁清单',
            source: '恒力石化公告',
            sourceUrl: 'https://www.hengli.com/',
            time: '2026-04-27',
            summary: '恒力石化公告称，美国财政部海外资产控制办公室将其子公司恒力石化（大连）炼化有限公司列入SDN清单。公司澄清从未与伊朗有贸易往来，将通过多元化渠道确保采购安全。目前生产经营正常。',
            impact: '利空',
            relatedSectors: ['恒力石化', '化工板块', '炼化行业'],
            importance: '中'
        },
        {
            title: '美股科技股大涨，纳指+1.63%，费城半导体指数连续18日上涨',
            source: '美股收盘',
            sourceUrl: 'https://www.nasdaq.com/',
            time: '2026-04-27',
            summary: '美股科技股走强，纳指+1.63%。费城半导体指数大涨超4%，连续18个交易日上涨，成份股市值增加超2.4万亿美元。英特尔财报超预期盘后飙升16%，为A股半导体板块提供外部情绪支撑。',
            impact: '利好',
            relatedSectors: ['半导体', 'AI算力', '科技股'],
            importance: '高'
        },
        {
            title: 'DeepSeek推动AI价格战，百万Token输入仅0.25元',
            source: 'DeepSeek官方',
            sourceUrl: 'https://www.deepseek.com/',
            time: '2026-04-27',
            summary: 'DeepSeek最新发布的DeepSeek-V4-Pro模型API开启2.5折价格战，deepseek-v4-pro模型限时2.5折优惠期至5月5日，折后输入（缓存命中）价格低至0.025元/百万Tokens。AI应用成本大幅降低，推动AI商业化加速落地。',
            impact: '利好',
            relatedSectors: ['AI应用', '云计算', '数据中心'],
            importance: '中'
        },
        {
            title: '多家A股一季报业绩超预期，宁德时代、贵州茅台、中信证券表现亮眼',
            source: '上市公司公告',
            sourceUrl: 'https://www.cninfo.com.cn/',
            time: '2026-04-27',
            summary: '一季报密集披露，宁德时代、贵州茅台、中信证券、洛阳钼业、金风科技等多家公司业绩超预期。但英维克、曙光数创等增收不增利，液冷行业面临毛利率下滑压力。一季度业绩验证期，业绩为王风格延续。',
            impact: '利好',
            relatedSectors: ['业绩预喜股', '绩优龙头'],
            importance: '高'
        },
        {
            title: '"大空头"迈克尔·伯里宣布做空半导体ETF，引发市场关注',
            source: '华尔街见闻',
            sourceUrl: 'https://wallstreetcn.com/',
            time: '2026-04-27',
            summary: '电影《大空头》原型迈克尔·伯里宣布做空，买入iShares半导体ETF看跌期权。他认为当前半导体涨势缺乏基本面支撑，是技术性因素推动。虽然短期美股芯片股仍强势，但需警惕回调风险。',
            impact: '利空',
            relatedSectors: ['半导体', '芯片'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -186.45,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -95,
            shengzheng: -91.45,
            trend: '午盘主力资金净流出186.45亿元，半导体、PCB获持续净流入',
            analysis: '4月27日午盘，主力资金净流出186.45亿元。科技主线资金持续流入，半导体、PCB方向强势；新能源锂矿板块早盘活跃。资金从高位题材向算力硬件、半导体等硬科技切换明显。个股涨跌比2567:2795，市场多空博弈均衡。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 286,
            unit: '亿元',
            direction: '净流入',
            shengutong: 160,
            hushenutong: 126,
            trend: '北向资金4月累计净流入超286亿元，外资持续布局',
            analysis: '北向资金4月累计净流入超286亿元，其中4月24日单日净流入约18.5亿元。外资偏好中芯国际、北方华创等绩优科技龙头。4月来北向资金持续回流，显示出对A股中长期走势的看好，尤其看好硬科技和消费龙头。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '半导体', inflow: 85.60, outflow: 0, netFlow: 85.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'PCB', inflow: 52.30, outflow: 0, netFlow: 52.30, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '消费电子', inflow: 48.75, outflow: 0, netFlow: 48.75, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '人形机器人', inflow: 38.20, outflow: 0, netFlow: 38.20, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'AI应用', inflow: 25.40, outflow: 0, netFlow: 25.40, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '锂矿', inflow: 22.80, outflow: 0, netFlow: 22.80, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '光伏', inflow: 0, outflow: -35.60, netFlow: -35.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '商业航天', inflow: 0, outflow: -28.40, netFlow: -28.40, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '高位CPO', inflow: 0, outflow: -45.20, netFlow: -45.20, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '稀土', inflow: 0, outflow: -18.90, netFlow: -18.90, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '中芯国际', netFlow: 9.99, reason: '半导体龙头，国产替代加速，午盘持续强势' },
                { name: '海光信息', netFlow: 11.31, reason: 'AI芯片概念，业绩超预期获资金追捧' },
                { name: '宁德时代', netFlow: 19.14, reason: '锂电龙头，行业拐点显现，早盘获大单买入' },
                { name: '天齐锂业', netFlow: 11.89, reason: '锂矿龙头，锂价反弹带动业绩预期' },
                { name: '赣锋锂业', netFlow: 11.31, reason: '锂业龙头，锂矿板块集体走强' }
            ],
            outflow: [
                { name: '新易盛', netFlow: -8.50, reason: 'CPO概念高位回落，资金持续出逃' },
                { name: '中远海控', netFlow: -5.20, reason: '航运港口板块回调' },
                { name: '隆基绿能', netFlow: -4.80, reason: '光伏板块整体承压' },
                { name: '天孚通信', netFlow: -3.90, reason: '光模块板块调整' },
                { name: '中国卫星', netFlow: -3.20, reason: '商业航天概念走弱' }
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
                name: '半导体/算力硬件',
                reason: '午盘半导体持续强势，PCB、GPU方向领涨。美股费城半导体指数连续18日上涨，英特尔财报超预期。国产替代加速，资金从高位题材向半导体等硬科技切换。半导体设备、材料、存储芯片、PCB等细分领域迎催化。',
                inflow: 85.60,
                hotStocks: ['中芯国际', '北方华创', '海光信息', '沪电股份', '鹏鼎控股'],
                sustainability: '强',
                riskTip: '警惕"大空头"伯里做空风险，关注业绩兑现',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '消费电子/AI应用',
                reason: '消费电子产业链集体拉升，AI应用概念持续活跃。DeepSeek推动AI价格战，百万Token输入仅0.25元，AI商业化加速落地。苹果产业链、华为产业链持续受益。',
                inflow: 48.75,
                hotStocks: ['立讯精密', '歌尔股份', '蓝思科技', '科大讯飞', '金山办公'],
                sustainability: '中',
                riskTip: '消费电子需求复苏不及预期风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '人形机器人/AI智能',
                reason: '人形机器人、人工智能概念股持续活跃，特斯拉Optimus进展超预期带动板块。锂矿、AI应用关联概念持续跟进。市场资金高度聚焦AI科技核心赛道。',
                inflow: 38.20,
                hotStocks: ['绿的谐波', '柯力传感', '汇川技术', '三花智控', '鸣志电器'],
                sustainability: '中',
                riskTip: '技术突破进度和商业化落地不及预期',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '新能源（锂电/锂矿）',
                reason: '锂价反弹，碳酸锂站稳20万/吨，行业拐点已到。锂电、锂矿企业一季报净利润同比增长200%-500%，超预期。宁德时代、天齐锂业等龙头持续获资金流入。',
                inflow: 22.80,
                hotStocks: ['宁德时代', '天齐锂业', '赣锋锂业', '亿纬锂能', '国轩高科'],
                sustainability: '中',
                riskTip: '锂价波动和产能过剩风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '高股息/低估值蓝筹',
                reason: '月末资金偏紧，避险情绪升温，高股息、低估值蓝筹成为资金避风港。银行、电力、煤炭等板块具备稳定现金流和高分红优势。保险资金权益投资上限从30%提高到35%，释放超万亿增量资金。',
                inflow: 10.50,
                hotStocks: ['工商银行', '长江电力', '中国神华', '中国平安', '招商银行'],
                sustainability: '强',
                riskTip: '关注利率变动对高股息板块的影响',
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
            from: ['高位CPO', '光伏', '商业航天', '稀土', 'ST股', '绩差股'],
            to: ['半导体', 'PCB', '消费电子', '人形机器人', 'AI应用', '高股息蓝筹'],
            analysis: '午盘市场风格明确切换：算力硬件题材全线爆发，PCB、GPU方向强势领涨；半导体、消费电子产业链集体拉升；人形机器人、AI应用概念持续活跃。光伏、稳定币、稀土、商业航天等题材延续走弱。资金高度聚焦AI科技核心赛道，坚持顺势选股、逆势交易原则。'
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
        date: '2026-04-27',
        summary: '4月27日（周一）A股盘前预判：震荡偏强、结构分化、业绩为王。上周五三大指数集体收跌但分化明显，创业板指跌1.41%领跌，科创50逆势涨1.47%。两市成交2.66万亿元，缩量1655亿。央行今日开展4000亿MLF操作，国常会研究科技创新，流动性与政策双支撑。证监会严打财务造假，一季报最后披露期，绩差股、ST股面临出清压力。风格切换关键期，旧周期（题材炒作）落幕，新周期（业绩为王）开启。',
        keyPoints: [
            '上周五上证指数跌0.33%报4079.90点，创业板指跌1.41%报3667.79点',
            '科创50逆势涨1.47%报1426.68点，显示资金向硬科技切换',
            '两市成交2.66万亿元，缩量1655亿，量能有所萎缩',
            '央行今日开展4000亿元MLF操作，流动性保持充裕',
            '李强主持国常会研究科技创新，利好半导体、新能源等硬科技',
            '证监会启动史上最严财务造假严打，AI全天候监控',
            '一季度GDP同比增长5.0%，一季度证券交易印花税增长78.1%',
            '4月27日-30日是一季报最后披露期，绩差股、ST股集中爆雷',
            '今日32家公司解禁，市值约187亿，高位AI、算力股抛压重',
            '北向资金4月累计净流入超286亿元，外资持续看好A股'
        ],
        marketOutlook: '今日A股进入风格切换关键期。旧周期（题材炒作）落幕，新周期（业绩为王）开启。核心观察点在于市场能否形成"科技引领"的共识性反弹，以及量能能否有效放大。建议关注半导体、新能源、高股息等绩优主线，远离ST股、绩差股、高位题材。仓位控制在6-7成，不重仓、不满仓，留资金应对波动。'
    }
};
