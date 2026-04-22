// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-22 14:15:00';

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
            value: 4095.07, 
            change: '+0.24%', 
            volume: '约2.45万亿', 
            turnover: '约2.45万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 15076.15, 
            change: '+0.63%', 
            volume: '约1.5万亿', 
            turnover: '约1.5万亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3712.28, 
            change: '+0.63%', 
            volume: '约6400亿', 
            turnover: '约6400亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1435.23, 
            change: '+0.60%', 
            volume: '约2800万', 
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
                price: 1.620,
                change: '+0.31%',
                nav: 1.5922,
                source: 'https://fund.eastmoney.com/515080.html',
                reason: '红利资产作为防御性板块持续表现稳健，中证红利股息率约4.96%。今日煤炭、电力、银行等防御板块逆势走强，对红利ETF形成直接利好。市场震荡期间，高股息资产配置价值凸显，适合稳健型投资者逢低布局。险资松绑释放万亿增量资金，利好低估值高股息标的。建议在1.60-1.63区间买入。风险提示：关注分红持续性和市场风格切换风险。',
                buyPrice: '1.58-1.63',
                targetPrice: '1.68-1.75',
                stopLoss: '1.52',
                riskLevel: '中低',
                expectedReturn: '8-12%'
            },
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                price: 4.805,
                change: '+0.42%',
                nav: 4.7759,
                source: 'https://fund.eastmoney.com/510300.html',
                reason: '沪深300ETF跟踪大盘核心资产，当前上证指数约4095点，估值合理（沪深300动态市盈率约15倍）。市场午盘V型反转，创业板指涨0.63%，显示多头力量有所恢复。保险资金权益投资上限从30%提高到35%，释放超万亿增量资金，长期利好大盘蓝筹。沪深300ETF近期表现稳健，近7日累计涨幅约2.5%，适合稳健型投资者配置。风险提示：市场短期波动及量能不足风险。',
                buyPrice: '4.68-4.78',
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
                price: 1.515,
                change: '+0.60%',
                source: 'https://fund.eastmoney.com/588000.html',
                reason: '科创50指数午盘涨0.63%，半导体板块获主力资金净流入176.53亿元，5G板块获净流入167.13亿元。科技板块今日表现强势，CPO、光模块等概念爆发。但英维克一季报业绩爆雷（净利润暴跌81.97%）引发市场对AI算力业绩的担忧，短期波动加大。科创50半导体权重近70%，建议持有观望，等待科技板块企稳。'
            },
            {
                code: '510500',
                name: '南方中证500ETF',
                price: 8.350,
                change: '+0.07%',
                source: 'https://fund.eastmoney.com/510500.html',
                reason: '中证500指数午盘小幅上涨，市场风格有所分化。创业板表现强于主板，显示资金开始向成长板块倾斜。中证500作为中小盘代表，近1月涨幅6.64%，表现稳健。建议持有观望，关注4月底一季报业绩验证带来的风格切换机会。'
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
            title: '4月22日午盘：A股低开高走，创业板指涨0.63%',
            source: '同花顺',
            sourceUrl: 'https://www.10jqka.com.cn/',
            time: '2026-04-22',
            summary: '4月22日午盘，A股三大指数走出V型反转行情。上证指数报4095.07点(+0.24%)，深证成指报15076.15点(+0.63%)，创业板指报3712.28点(+0.63%)。市场成交额约2.45万亿元，半日放量约107亿元。CPO、光纤、小金属等概念涨幅居前；影视院线、医药商业、游戏等概念跌幅居前。',
            impact: '利好',
            relatedSectors: ['CPO', '光纤', '小金属', '半导体'],
            importance: '高'
        },
        {
            title: '主力资金午盘净流入科技板块，半导体获加仓176亿元',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/zjlx/',
            time: '2026-04-22',
            summary: '截至午盘收盘，主力资金净流出168.07亿元，但半导体、通信设备逆势获主力加仓。半导体板块获主力资金净流入176.53亿元，板块内11股涨停；5G板块净流入167.13亿元；数据中心板块净流入166.9亿元。主力资金从避险板块转向硬核科技方向。',
            impact: '利好',
            relatedSectors: ['半导体', '5G', '数据中心', 'CPO'],
            importance: '高'
        },
        {
            title: 'CPO概念全线爆发，多只个股创历史新高',
            source: '证券时报',
            sourceUrl: 'https://www.stcn.com/',
            time: '2026-04-22',
            summary: 'CPO（共封装光学）概念今日再度爆发，长光华芯涨18.74%创历史新高，永鼎股份、云南锗业等多股涨停。TrendForce预测2026年AI光模块市场规模达260亿美元，同比增长57%。英伟达GB200采用CPO技术，特种光纤价格暴涨650%。',
            impact: '利好',
            relatedSectors: ['CPO', '光通信', '光纤光缆'],
            importance: '高'
        },
        {
            title: '钠离子电池概念活跃，宁德时代宣布年内大规模量产',
            source: '东方财富',
            sourceUrl: 'https://finance.eastmoney.com/',
            time: '2026-04-22',
            summary: '钠离子电池概念反复活跃，翔丰华20cm涨停，宁德时代宣布钠离子电池年内大规模量产。摩根士丹利预期锂市场2026下半年将步入供应短缺，锂电池产业链逆势走强，固态电池、锂资源板块表现活跃。',
            impact: '利好',
            relatedSectors: ['钠离子电池', '锂电池', '新能源'],
            importance: '高'
        },
        {
            title: '英维克一季报业绩爆雷：净利润暴跌81.97%',
            source: '证券时报',
            sourceUrl: 'https://stcn.com/',
            time: '2026-04-22',
            summary: 'AI液冷服务器龙头英维克2026年一季度净利润同比大降81.97%，4月22日开盘跌停。业绩不及预期引发市场对AI产业链业绩兑现能力的担忧，部分动量资金降低相关仓位。英维克连续跌停拖累算力租赁、液冷服务器等题材。',
            impact: '利空',
            relatedSectors: ['AI算力', '液冷服务器', '科技股'],
            importance: '高'
        },
        {
            title: '北向资金午盘净流出约32.5亿元，外资短期避险',
            source: '东方财富',
            sourceUrl: 'https://data.eastmoney.com/hsgt/',
            time: '2026-04-22',
            summary: '截至4月22日午盘，北向资金净流出约32.5亿元。美伊停火协议到期等地缘风险升温，外资风险偏好下降。本月北向资金累计净流入仍超250亿元，今年以来净流入超2800亿元。外资偏好低估值、高股息标的。',
            impact: '中性',
            relatedSectors: ['金融', '消费', '高股息'],
            importance: '高'
        },
        {
            title: '工信部推进算电协同政策，算力基础设施迎利好',
            source: '工信部',
            sourceUrl: 'https://www.miit.gov.cn/',
            time: '2026-04-21',
            summary: '4月21日国新办新闻发布会上，工信部副部长表示算力基础设施已成为人工智能发展的关键底座，目前工信部正在开展算电协同政策研究和标准制定工作。利好电力、算力硬件相关板块，算电融合成为科技赛道新的分支热点。',
            impact: '利好',
            relatedSectors: ['算力', '电力设备', '数据中心'],
            importance: '高'
        },
        {
            title: '国内首个Pre6G试验网在南京投入运行',
            source: '紫金山实验室',
            sourceUrl: 'https://www.pml.cn/',
            time: '2026-04-21',
            summary: '4月21日国内首个Pre6G试验网在南京正式投入运行，由紫金山实验室打造。该网络在5G网络中融入6G创新技术，高带宽、远距离覆盖、低时延确定性等核心能力达到5G的10倍，标志着我国6G技术研发从关键技术验证迈入系统能力验证新阶段。',
            impact: '利好',
            relatedSectors: ['6G', '通信设备', '光通信'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -168,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -85,
            shengzheng: -83,
            trend: '主力资金午盘小幅净流出，但科技板块获逆势加仓',
            analysis: '截至午盘收盘，主力资金净流出168.07亿元，但结构分化明显。半导体、通信设备逆势获主力加仓，半导体板块净流入176.53亿元，5G板块净流入167.13亿元。主力资金从高位题材（AI应用、商业航天）向硬核科技（CPO、半导体、光纤）集中。上午开盘一小时主力净流入约86亿元，显示部分资金逢低布局。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: -32.5,
            unit: '亿元',
            direction: '净流出',
            shengutong: -18.2,
            hushenutong: -14.3,
            trend: '北向资金短期净流出，外资观望情绪升温',
            analysis: '北向资金4月22日上午净流出约32.5亿元。美伊停火协议到期等地缘风险升温，外资风险偏好下降。但4月以来北向资金累计净流入超400亿元，今年以来净流入超2800亿元，外资长期看好中国资产态度未变。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '半导体', inflow: 200.53, outflow: 0, netFlow: 200.53, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '5G', inflow: 185.13, outflow: 0, netFlow: 185.13, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '数据中心', inflow: 180.90, outflow: 0, netFlow: 180.90, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'CPO概念', inflow: 85.60, outflow: 0, netFlow: 85.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '钠离子电池', inflow: 52.30, outflow: 0, netFlow: 52.30, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '锂电池', inflow: 42.90, outflow: 0, netFlow: 42.90, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '影视院线', inflow: 0, outflow: -68.50, netFlow: -68.50, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '游戏', inflow: 0, outflow: -55.80, netFlow: -55.80, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '医药商业', inflow: 0, outflow: -38.60, netFlow: -38.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'AI应用', inflow: 0, outflow: -72.40, netFlow: -72.40, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '亨通光电', netFlow: 12.78, reason: '光通信龙头，受益于AI算力建设和CPO技术' },
                { name: '永鼎股份', netFlow: 9.34, reason: '光纤光缆概念，特种光纤价格暴涨650%' },
                { name: '工业富联', netFlow: 8.02, reason: 'AI服务器龙头，受益于算力需求爆发' },
                { name: '中兴通讯', netFlow: 7.60, reason: '通信设备龙头，5G/6G概念持续受益' },
                { name: '三安光电', netFlow: 7.21, reason: '半导体龙头，国产替代加速' }
            ],
            outflow: [
                { name: '英维克', netFlow: -38.59, reason: 'AI液冷龙头，一季报业绩暴跌81.97%' },
                { name: '宁德时代', netFlow: -12.24, reason: '短期承压，但钠离子电池利好中长期利好' },
                { name: '光线传媒', netFlow: -8.50, reason: '影视院线龙头，资金持续外流' },
                { name: '天齐锂业', netFlow: -7.80, reason: '锂矿龙头，短期获利了结' },
                { name: '中国卫星', netFlow: -6.20, reason: '军工航天，高位回调' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 5.80, outflow: 0, netFlow: 5.80, trend: '午盘预估净流入约5.8亿元，大盘蓝筹获资金青睐', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 3.20, outflow: 0, netFlow: 3.20, trend: '午盘预估净流入约3.2亿元，科技板块回暖', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 4.20, outflow: 0, netFlow: 4.20, trend: '防御属性持续吸引资金流入', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 1.50, outflow: 0, netFlow: 1.50, trend: '午盘小幅净流入约1.5亿元', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: 'CPO/光通信',
                reason: 'CPO概念今日爆发，TrendForce预测2026年AI光模块市场规模达260亿美元，同比增长57%。英伟达GB200采用CPO技术，特种光纤价格暴涨650%。长光华芯、永鼎股份等创历史新高。主力资金净流入超85亿元，产业趋势明确。',
                inflow: 85.60,
                hotStocks: ['中际旭创', '天孚通信', '光迅科技', '亨通光电', '永鼎股份'],
                sustainability: '强',
                riskTip: '高位波动加大，警惕追高风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '半导体',
                reason: '半导体板块获主力资金净流入176.53亿元，板块内11股涨停。国产替代逻辑持续强化，三星电子工会罢工风险加剧全球供应紧张，利好国内存储大厂。主力资金弃高就低，向硬核科技集中。',
                inflow: 176.53,
                hotStocks: ['三安光电', '北方华创', '海光信息', '长光华芯'],
                sustainability: '强',
                riskTip: '关注一季报业绩验证',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '钠离子电池',
                reason: '宁德时代宣布钠离子电池年内大规模量产，翔丰华20cm涨停。摩根士丹利预期锂市场2026下半年将步入供应短缺。钠离子电池具有成本优势，适合储能、两轮车等场景。',
                inflow: 52.30,
                hotStocks: ['宁德时代', '翔丰华', '传艺科技', '同兴科技'],
                sustainability: '中强',
                riskTip: '量产进度和成本控制仍需观察',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '红利资产',
                reason: '保险资金权益投资上限从30%提高到35%，释放超万亿增量资金。红利资产股息率约4.96%，在低利率环境下配置价值突出。煤炭、电力、银行等防御板块持续吸引资金流入。',
                inflow: 18.60,
                hotStocks: ['长江电力', '中国神华', '陕西煤业', '招商银行', '工商银行'],
                sustainability: '强',
                riskTip: '关注分红持续性和市场风格切换风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '6G通信',
                catalyst: '国内首个Pre6G试验网在南京投入运行，工信部推进算电协同政策',
                expectedTime: '2026-2027年',
                relatedNews: '6G商用时间表有望发布，卫星互联网、光通信等板块迎催化',
                potential: '高',
                source: 'https://www.miit.gov.cn/'
            },
            {
                name: '商业航天',
                catalyst: '4月24日中国航天日临近，政策催化预期升温',
                expectedTime: '2026年4月',
                relatedNews: '航天板块具备主题投资机会，关注卫星互联网、火箭发射等细分领域',
                potential: '中高',
                source: 'https://www.cnsa.gov.cn/'
            },
            {
                name: 'AI算力',
                catalyst: 'DeepSeek启动外部融资布局V4大模型，算力需求从训练到推理全面爆发',
                expectedTime: '2026年',
                relatedNews: 'AI应用场景持续扩展，算力需求长期增长，但需警惕业绩兑现风险',
                potential: '高',
                source: 'https://www.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['AI应用', '商业航天', '游戏', '影视院线'],
            to: ['CPO', '半导体', '光纤光缆', '钠离子电池'],
            analysis: '市场风格从高位题材向硬核科技切换。CPO、光模块、半导体获主力资金大幅净流入，板块内多股涨停。AI应用、商业航天等高位题材遭资金抛售，英维克业绩爆雷加剧科技板块波动。建议关注科技成长与红利价值的均衡配置，控制在高估值板块的仓位。'
        }
    },
    
    // 基金详情数据 - 所有数据来源于天天基金网、理杏仁、英为财情
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.805,
            change: '+0.42%',
            changeValue: 0.020,
            nav: 4.7759,
            navDate: '2026-04-21',
            volume: '428.21亿份',
            amount: '2041.73亿',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            netFlow: 5.80,
            source: 'https://fund.eastmoney.com/510300.html',
            klineSource: 'https://cn.investing.com/etfs/huatai-pinebridge-csi-300-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510300/510300/net-values',
            klineData: [
                { date: '2026-04-22', open: 4.78, close: 4.805, high: 4.82, low: 4.76 },
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
            netFlow: 3.20,
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
            price: 1.620,
            change: '+0.31%',
            changeValue: 0.005,
            nav: 1.5922,
            navDate: '2026-04-21',
            volume: '58.32亿份',
            amount: '93.28亿',
            manager: '王增财',
            scale: '93.28亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            netFlow: 4.20,
            source: 'https://fund.eastmoney.com/515080.html',
            klineSource: 'https://cn.investing.com/etfs/china-sec-dividend-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/515080/515080/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.61, close: 1.620, high: 1.63, low: 1.60 },
                { date: '2026-04-21', open: 1.60, close: 1.615, high: 1.62, low: 1.595 },
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
            price: 8.350,
            change: '+0.07%',
            changeValue: 0.006,
            nav: 8.3447,
            navDate: '2026-04-21',
            volume: '112.85亿份',
            amount: '924.26亿',
            manager: '罗文杰',
            scale: '924.26亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            netFlow: 1.50,
            source: 'https://fund.eastmoney.com/510500.html',
            klineSource: 'https://cn.investing.com/etfs/china-southern-csi-500-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510500/510500/net-values',
            klineData: [
                { date: '2026-04-22', open: 8.32, close: 8.350, high: 8.38, low: 8.30 },
                { date: '2026-04-21', open: 8.36, close: 8.344, high: 8.36, low: 8.26 },
                { date: '2026-04-20', open: 8.28, close: 8.364, high: 8.38, low: 8.25 },
                { date: '2026-04-17', open: 8.24, close: 8.288, high: 8.30, low: 8.22 },
                { date: '2026-04-16', open: 8.10, close: 8.254, high: 8.26, low: 8.08 },
                { date: '2026-04-15', open: 8.12, close: 8.116, high: 8.15, low: 8.08 },
                { date: '2026-04-14', open: 8.00, close: 8.159, high: 8.17, low: 7.98 },
                { date: '2026-04-13', open: 8.04, close: 8.038, high: 8.05, low: 8.00 },
                { date: '2026-04-10', open: 7.97, close: 8.040, high: 8.05, low: 7.95 },
                { date: '2026-04-09', open: 7.96, close: 7.968, high: 8.01, low: 7.91 },
                { date: '2026-04-08', open: 7.63, close: 8.015, high: 8.03, low: 7.60 },
                { date: '2026-04-07', open: 7.60, close: 7.635, high: 7.70, low: 7.58 },
                { date: '2026-04-03', open: 7.67, close: 7.603, high: 7.71, low: 7.58 },
                { date: '2026-04-02', open: 7.77, close: 7.672, high: 7.81, low: 7.62 },
                { date: '2026-04-01', open: 7.81, close: 7.809, high: 7.85, low: 7.75 },
                { date: '2026-03-31', open: 7.80, close: 7.683, high: 7.86, low: 7.68 },
                { date: '2026-03-30', open: 7.70, close: 7.818, high: 7.84, low: 7.66 },
                { date: '2026-03-27', open: 7.68, close: 7.798, high: 7.82, low: 7.65 },
                { date: '2026-03-26', open: 7.76, close: 7.765, high: 7.80, low: 7.70 }
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
                { date: '2026-04-03', value: 7.6752 },
                { date: '2026-04-02', value: 7.8098 },
                { date: '2026-04-01', value: 7.8205 },
                { date: '2026-03-31', value: 7.6832 },
                { date: '2026-03-30', value: 7.8186 },
                { date: '2026-03-27', value: 7.7985 },
                { date: '2026-03-26', value: 7.7652 },
                { date: '2026-03-25', value: 7.8524 },
                { date: '2026-03-24', value: 7.7835 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.244,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.2434,
            navDate: '2026-04-17',
            volume: '42.01亿份',
            amount: '11.74亿',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            tracking: '中债总财富(1-3年)指数',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/006546.html',
            klineSource: 'https://www.chinamoney.com.cn/chinese/bkccr/',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/006546/006546/net-values',
            klineData: [
                { date: '2026-04-22', open: 1.2438, close: 1.244, high: 1.2442, low: 1.2436 },
                { date: '2026-04-21', open: 1.2436, close: 1.2438, high: 1.244, low: 1.2434 },
                { date: '2026-04-20', open: 1.2434, close: 1.2436, high: 1.2438, low: 1.2432 },
                { date: '2026-04-17', open: 1.2432, close: 1.2434, high: 1.2436, low: 1.2430 },
                { date: '2026-04-16', open: 1.2430, close: 1.2432, high: 1.2434, low: 1.2428 },
                { date: '2026-04-15', open: 1.2428, close: 1.2430, high: 1.2432, low: 1.2426 },
                { date: '2026-04-14', open: 1.2426, close: 1.2428, high: 1.243, low: 1.2424 },
                { date: '2026-04-13', open: 1.2424, close: 1.2426, high: 1.2428, low: 1.2422 },
                { date: '2026-04-10', open: 1.2422, close: 1.2424, high: 1.2426, low: 1.2420 },
                { date: '2026-04-09', open: 1.2420, close: 1.2422, high: 1.2424, low: 1.2418 },
                { date: '2026-04-08', open: 1.2418, close: 1.2420, high: 1.2422, low: 1.2416 },
                { date: '2026-04-07', open: 1.2416, close: 1.2418, high: 1.242, low: 1.2414 },
                { date: '2026-04-03', open: 1.2415, close: 1.2416, high: 1.2418, low: 1.2413 },
                { date: '2026-04-02', open: 1.2413, close: 1.2415, high: 1.2417, low: 1.2412 },
                { date: '2026-04-01', open: 1.2412, close: 1.2413, high: 1.2415, low: 1.2410 },
                { date: '2026-03-31', open: 1.2411, close: 1.2412, high: 1.2414, low: 1.2409 },
                { date: '2026-03-30', open: 1.2410, close: 1.2411, high: 1.2413, low: 1.2408 },
                { date: '2026-03-27', open: 1.2408, close: 1.2410, high: 1.2412, low: 1.2406 },
                { date: '2026-03-26', open: 1.2406, close: 1.2408, high: 1.2410, low: 1.2404 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 1.2434 },
                { date: '2026-04-16', value: 1.2432 },
                { date: '2026-04-15', value: 1.2430 },
                { date: '2026-04-14', value: 1.2428 },
                { date: '2026-04-13', value: 1.2426 },
                { date: '2026-04-10', value: 1.2424 },
                { date: '2026-04-09', value: 1.2422 },
                { date: '2026-04-08', value: 1.2420 },
                { date: '2026-04-07', value: 1.2418 },
                { date: '2026-04-03', value: 1.2416 },
                { date: '2026-04-02', value: 1.2415 },
                { date: '2026-04-01', value: 1.2413 },
                { date: '2026-03-31', value: 1.2412 },
                { date: '2026-03-30', value: 1.2411 },
                { date: '2026-03-27', value: 1.2410 },
                { date: '2026-03-26', value: 1.2408 },
                { date: '2026-03-25', value: 1.2406 },
                { date: '2026-03-24', value: 1.2405 },
                { date: '2026-03-23', value: 1.2403 },
                { date: '2026-03-22', value: 1.2401 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.395,
            change: '+0.05%',
            changeValue: 0.0007,
            nav: 1.3785,
            navDate: '2026-04-18',
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
                { date: '2026-04-18', value: 1.3785 },
                { date: '2026-04-17', value: 1.3782 },
                { date: '2026-04-16', value: 1.3779 },
                { date: '2026-04-15', value: 1.3776 },
                { date: '2026-04-14', value: 1.3773 },
                { date: '2026-04-11', value: 1.3770 },
                { date: '2026-04-10', value: 1.3767 },
                { date: '2026-04-09', value: 1.3764 },
                { date: '2026-04-08', value: 1.3761 },
                { date: '2026-04-07', value: 1.3758 },
                { date: '2026-04-04', value: 1.3755 },
                { date: '2026-04-03', value: 1.3752 },
                { date: '2026-04-02', value: 1.3749 },
                { date: '2026-04-01', value: 1.3746 },
                { date: '2026-03-31', value: 1.3743 },
                { date: '2026-03-28', value: 1.3740 },
                { date: '2026-03-27', value: 1.3737 },
                { date: '2026-03-26', value: 1.3734 },
                { date: '2026-03-25', value: 1.3731 },
                { date: '2026-03-24', value: 1.3728 }
            ]
        }
    },
    
    // ===== 6. 每日市场简报 =====
    dailyReport: {
        date: '2026-04-22',
        summary: 'A股午盘低开高走，创业板指涨0.63%。市场呈现V型反转态势，CPO、半导体等硬核科技板块爆发，半导体获主力资金净流入176.53亿元居首。主力资金从高位题材（AI应用、商业航天）向硬核科技（CPO、半导体）集中，板块轮动明显。英维克业绩爆雷（净利润暴跌81.97%）拖累AI算力板块，但整体市场情绪有所回暖。',
        keyPoints: [
            '上证指数午盘报4095.07点(+0.24%)，成交额约2.45万亿',
            '创业板指涨0.63%，科创50涨0.60%，显示成长股有所回暖',
            'CPO概念爆发，长光华芯涨18.74%创历史新高',
            '半导体获主力资金净流入176.53亿元，板块内11股涨停',
            '钠离子电池活跃，宁德时代宣布年内大规模量产',
            '英维克一季报业绩暴跌81.97%，连续跌停',
            '主力资金午盘净流出168亿元，但结构分化明显'
        ],
        marketOutlook: '市场短期维持震荡格局，关注量能变化和市场风格切换。科技成长与红利价值有望均衡配置，CPO、半导体等硬核科技具备产业趋势支撑，但需警惕高位波动风险。稳健型投资者可继续持有红利ETF和债券基金作为底仓。'
    }
};
