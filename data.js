// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-30 13:08:55';

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
    today: '2026-04-30',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4111.02, 
            change: '+0.09%', 
            volume: '约8484亿', 
            turnover: '午盘半日成交8484亿元，窄幅震荡守住4100点关口，多空博弈均衡（截至11:45）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 15111.33, 
            change: '-0.06%', 
            volume: '约9573亿', 
            turnover: '午盘半日成交9573亿元，小幅震荡整理，整体韧性仍在（截至11:45）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3682.49, 
            change: '-0.13%', 
            volume: '约3500亿', 
            turnover: '小幅调整，整体仍在区间震荡，成长赛道分化加剧（截至11:45）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1563.86, 
            change: '+4.71%', 
            volume: '约500亿', 
            turnover: '强势领涨全市场！国产算力芯片产业链集体爆发，寒武纪创历史新高市值超7000亿（截至11:45）',
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
            title: '科创50午盘大涨4.71%，国产算力芯片产业链集体爆发',
            source: '同花顺财经',
            sourceUrl: 'https://www.10jqka.com.cn/',
            time: '2026-04-30',
            summary: 'A股午盘收盘，科创50指数大涨4.71%，领涨全市场。国产算力芯片产业链集体爆发，寒武纪(688256)时隔8个月再创历史新高，总市值超7000亿元。芯原股份(688521)20cm涨停，板块内多只个股涨幅超10%。多家半导体公司一季报强劲：兆易创新净利润增522%，芯原股份AI算力订单占比超九成。',
            impact: '利好',
            relatedSectors: ['半导体', 'AI芯片', '算力', '科创50'],
            importance: '高'
        },
        {
            title: '主力资金"高低切换"，中国长城净流入21亿居首',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '午盘主力资金呈现结构性分化走势，整体净流入139.97亿，净流出179.72亿。资金从高位AI硬件（工业富联-28亿、新易盛-13亿、浪潮信息-11亿）出逃，转向低位算力芯片、国产替代方向。中国长城主力净流入21.56亿元居首，芯原股份11.50亿元紧随其后。',
            impact: '利好',
            relatedSectors: ['计算机设备', '半导体', '国产替代'],
            importance: '高'
        },
        {
            title: '碳酸锂期货站上18万元/吨，锂矿板块延续强势',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '广期所碳酸锂期货价格站上18万元/吨，较3月底的9.8万元/吨反弹超80%。一季度中国储能锂电池出货量达215GWh，同比增长139%；头部企业订单已排产至2026年底至2027年Q2。永杉锂业(603399)3连板，融捷股份(002192)2连板。全球最大硬岩锂矿格林布什下修产量指引，供给偏紧预期持续发酵。',
            impact: '利好',
            relatedSectors: ['锂矿', '储能', '能源金属', '锂电池'],
            importance: '高'
        },
        {
            title: 'A股午盘：成交1.82万亿放量，全市场近2900只个股上涨',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '午盘收盘，两市半日成交额1.82万亿元，较昨日同期放量1854亿元。全市场超2900只个股上涨，2946只上涨，2398只下跌。涨停合计55家（非ST 37 + ST 18），跌停合计50家（非ST 4 + ST 46）。科创50大涨4.71%，上证指数涨0.09%守住4100点。',
            impact: '利好',
            relatedSectors: ['大盘整体', '市场情绪'],
            importance: '中'
        },
        {
            title: 'A股年报收官：上市公司整体营收净利双增，分红2.4万亿创新高',
            source: '环球网',
            sourceUrl: 'https://www.huanqiu.com/',
            time: '2026-04-30',
            summary: 'A股2025年年报及2026年一季报披露基本收官。2025年A股公司合计实现营收70.95万亿元，归母净利润5.36万亿元，同比分别增长1.16%、2.95%。超3500家公司公布现金分红方案，分红总金额近2.4万亿元，再创历史新高。A股公司研发投入达1.85万亿元，占全社会研发投入45%。',
            impact: '利好',
            relatedSectors: ['大盘整体', '上市公司', '科技创新'],
            importance: '高'
        },
        {
            title: '美联储维持利率不变，符合市场预期',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-30',
            summary: '美联储4月29日宣布维持基准利率在3.5%-3.75%区间不变，连续第三次会议按兵不动，符合市场预期。FOMC声明显示委员以8比4的投票比例通过利率决定。鲍威尔表示当前政策立场适当，在5月15日后将继续留任理事。',
            impact: '中性',
            relatedSectors: ['全球市场', '科技股', '金融'],
            importance: '高'
        },
        {
            title: '深圳楼市重磅松绑：非户籍可购1套房，公积金贷款额度提高',
            source: '新华财经',
            sourceUrl: 'https://www.xinhuanet.com/fortune/',
            time: '2026-04-30',
            summary: '深圳市住房和建设局29日印发《关于进一步优化调整本市房地产相关政策的通知》，自4月30日起施行。持有有效深圳居住证的非户籍居民家庭可在福田、南山区和宝安区新安街道范围内购买1套商品住房，无需提供社保或个税证明。公积金贷款额度个人从60万元提高至70万元，家庭从110万元提高至130万元。',
            impact: '利好',
            relatedSectors: ['房地产', '家电', '建筑建材'],
            importance: '高'
        },
        {
            title: '刘浩凌上任证监会副主席',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '近日，国务院决定任命刘浩凌为中国证券监督管理委员会副主席。刘浩凌1971年出生，先后获得北京大学英语学士学位、中国政法大学法学学士学位、美国爱荷华大学法学硕士学位、英国伦敦大学伦敦商学院金融学硕士学位。中央组织部通知，刘浩凌同志任证监会党委委员。',
            impact: '利好',
            relatedSectors: ['金融', '券商', '大盘整体'],
            importance: '高'
        },
        {
            title: '电力板块今日调整，金开新能、豫能控股双双跌停',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '电力板块今日多数调整，金开新能(600821)、豫能控股(001896)双双跌停。主力资金从电力板块阶段性撤离，午盘电力板块净流出约15亿元。消息面暂无明显利空，或为节前获利盘了结。',
            impact: '利空',
            relatedSectors: ['电力', '公用事业'],
            importance: '中'
        },
        {
            title: '沐曦股份一季报：营收同比增75%，亏损大幅减亏',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '国产GPU头部企业沐曦股份披露2026年一季报：第一季度实现营业收入5.62亿元，同比增长75.37%；净利润为-9884.24万元，上年同期净利润为-2.33亿元，同比大幅减亏。公司表示GPU产品持续获得客户认可，国产替代进程加速。',
            impact: '利好',
            relatedSectors: ['GPU', '半导体', '国产替代', '科技股'],
            importance: '中'
        },
        {
            title: 'DeepSeek开启识图功能灰度测试，AI能力持续进化',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '4月29日，多位用户发现DeepSeek开启图片理解功能的灰度测试。DeepSeek研究员陈德里在社交媒体表示"Now, we see you"，暗示这一功能的即将上线。AI多模态能力持续进化，应用场景不断拓展。',
            impact: '利好',
            relatedSectors: ['AI概念', '软件服务', '科技股'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 139.97,
            unit: '亿元',
            direction: '结构性分化',
            shangzheng: '净流入约75亿',
            shengzheng: '净流入约65亿',
            trend: '午盘主力资金净流入139.97亿，净流出179.72亿，结构性分化明显',
            analysis: '4月30日午盘，主力资金呈现结构性分化走势。资金从高位AI硬件（工业富联-28亿、新易盛-13亿、浪潮信息-11亿）出逃，转向低位算力芯片、国产替代方向。半导体、计算机设备获主力集中加仓，市场呈现明显的"高低切换"特征。节前最后一个交易日，资金以调仓为主。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 42.68,
            unit: '亿元',
            direction: '净流入',
            shengutong: 25.31,
            hushenutong: 17.37,
            trend: '北向资金早盘净流入42.68亿，沪股通+25.31亿，深股通+17.37亿',
            analysis: '北向资金今日持续净流入，本月累计净流入286.45亿元，今年以来累计净流入超2856亿元。外资持续关注金融、消费板块，对高股息、稳定增长的蓝筹股表现出明显偏好。五一假期临近，预计资金以调仓为主。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '汽车芯片', inflow: 70.77, outflow: 0, netFlow: 70.77, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '中国AI 50', inflow: 68.22, outflow: 0, netFlow: 68.22, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '国产操作系统', inflow: 47.16, outflow: 0, netFlow: 47.16, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '半导体', inflow: 35.00, outflow: 0, netFlow: 35.00, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '计算机设备', inflow: 30.00, outflow: 0, netFlow: 30.00, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '消费电子', inflow: 0, outflow: -28.06, netFlow: -28.06, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '通信设备', inflow: 0, outflow: -36.09, netFlow: -36.09, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电力', inflow: 0, outflow: -15.00, netFlow: -15.00, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '白酒', inflow: 0, outflow: -10.05, netFlow: -10.05, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '中国长城', netFlow: 21.56, reason: '计算机设备龙头，算力芯片核心标的，主力净流入居首' },
                { name: '芯原股份', netFlow: 11.50, reason: '半导体芯片龙头，20cm涨停，一季报业绩大增+AI算力' },
                { name: '海光信息', netFlow: 10.56, reason: 'AI算力芯片，持续获主力资金净流入' },
                { name: '创世纪', netFlow: 9.40, reason: '自动化设备，板块内资金聚焦度高' },
                { name: '西部材料', netFlow: 8.61, reason: '小金属赛道，稀土永磁板块受资金青睐' },
                { name: '三花智控', netFlow: 7.10, reason: '家电零部件，主力加仓态势显著' },
                { name: '北方华创', netFlow: 6.42, reason: '半导体设备核心标的，资金持续流入' },
                { name: '长江电力', netFlow: 6.22, reason: '电力龙头，公用事业获资金配置' },
                { name: '中芯国际', netFlow: 6.01, reason: '国产半导体核心企业，获资金布局' },
                { name: '中际旭创', netFlow: 5.91, reason: '光模块细分赛道，获部分资金关注' }
            ],
            outflow: [
                { name: '工业富联', netFlow: -28.06, reason: '消费电子龙头，午盘资金出逃规模居首，高位AI硬件回调' },
                { name: '新易盛', netFlow: -13.46, reason: '光模块，资金大幅撤离，板块内部分歧加剧' },
                { name: '长飞光纤', netFlow: -13.22, reason: '光通信，遭主力资金明显减持' },
                { name: '浪潮信息', netFlow: -11.42, reason: '服务器，资金大幅出逃，板块局部标的遭抛售' },
                { name: '大族激光', netFlow: -10.58, reason: '自动化设备，主力资金卖出力度较强' }
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
                name: '算力芯片产业链',
                reason: '国产算力芯片产业链集体爆发！寒武纪创历史新高市值超7000亿，芯原股份20cm涨停。多家半导体公司一季报强劲：兆易创新净利润增522%，芯原股份AI算力订单占比超九成，东芯股份扭亏为盈。科创50午盘大涨4.71%领涨全市场。',
                inflow: 70.77,
                hotStocks: ['寒武纪', '芯原股份', '海光信息', '中芯国际', '北方华创'],
                sustainability: '强',
                riskTip: '关注美股AI概念波动和高位科技股回调风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '稀土/能源金属',
                reason: '广期所碳酸锂期货价格站上18万元/吨。一季度中国储能锂电池出货量达215GWh，同比增长139%。全球最大硬岩锂矿格林布什下修产量指引，津巴布韦锂精矿出口限制，供给偏紧预期推高价格。永杉锂业3连板，融捷股份2连板。',
                inflow: 68.22,
                hotStocks: ['永杉锂业', '融捷股份', '天齐锂业', '赣锋锂业', '北方稀土'],
                sustainability: '中',
                riskTip: '关注碳酸锂价格波动和下游需求变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '房地产',
                reason: '深圳进一步优化楼市政策，4月30日起非户籍居民在福田、南山、宝安新安街道可购1套房，无需社保个税。公积金贷款额度个人提高至70万，家庭提高至130万。金融街2连板，万通发展涨停。政策持续放松有利于基本面改善。',
                inflow: 9.60,
                hotStocks: ['金融街', '万通发展', '衢州发展', '津投城开', '万科A'],
                sustainability: '中',
                riskTip: '关注政策力度和销售数据改善情况',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '军工装备',
                reason: '军工板块今日表现活跃，多家军工企业一季报业绩稳健。地缘政治因素持续发酵，国防军工订单预期向好。中船系板块走强，军工装备板块资金关注度提升。',
                inflow: 15.00,
                hotStocks: ['中船防务', '中国船舶', '中航沈飞', '航发动力', '北方导航'],
                sustainability: '中',
                riskTip: '关注地缘政治变化和订单交付进度',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: 'AI应用/国产替代',
                reason: '数字中国建设峰会开幕，AI发展获政策支持。DeepSeek开启识图功能灰度测试，AI能力持续进化。国产操作系统获主力资金净流入47亿。AI商业化进入兑现期，算力需求刚性爆发。',
                inflow: 47.16,
                hotStocks: ['中国长城', '浪潮信息', '科大讯飞', '金山办公', '中科曙光'],
                sustainability: '强',
                riskTip: '关注技术落地进度和竞争格局变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 当前利空板块
        unfavorable: [
            {
                name: '消费电子',
                reason: '工业富联午盘主力净流出28亿元居首，获利盘集中了结。高位AI硬件回调明显，板块内部分歧加剧。',
                outflow: -28.06,
                riskStocks: ['工业富联', '立讯精密', '歌尔股份', '蓝思科技'],
                riskTip: '高位个股注意止损',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '光模块/通信设备',
                reason: '新易盛、长飞光纤遭主力资金大幅减持，净流出超26亿元。节前避险情绪升温，资金从高位光模块板块撤离。',
                outflow: -36.09,
                riskStocks: ['新易盛', '长飞光纤', '亨通光电', '中天科技'],
                riskTip: '回避高位标的，关注节后方向选择',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '电力板块',
                reason: '电力板块今日多数调整，金开新能、豫能控股双双跌停。主力资金从电力板块阶段性撤离。',
                outflow: -15.00,
                riskStocks: ['金开新能', '豫能控股', '华能国际', '华电国际'],
                riskTip: '电力板块短期承压，注意风险',
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
            from: ['消费电子', '光模块/通信设备', '电力', '白酒', '高位AI硬件'],
            to: ['算力芯片', '稀土/能源金属', '房地产', '军工', 'AI应用'],
            analysis: '市场呈现明显的"高低切换"特征：资金从高位AI硬件（工业富联-28亿、新易盛-13亿、浪潮信息-11亿）出逃，转向低位算力芯片、国产替代方向。科创50大涨4.71%彰显科技赛道热度。节前最后一个交易日，主力以布局主线、调仓优化为主。'
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
