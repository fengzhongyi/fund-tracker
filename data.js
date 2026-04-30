// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-30 08:14:44';

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
            value: 4112.35, 
            change: '+0.12%', 
            volume: '约1.1万亿', 
            turnover: '约1.1万亿（早盘小幅高开，站稳4100点，节前震荡偏强）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 15158.62, 
            change: '+0.25%', 
            volume: '约1.1万亿', 
            turnover: '约1.1万亿（早盘小幅高开，沪稳深强格局）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3692.18, 
            change: '+0.38%', 
            volume: '约3500亿', 
            turnover: '约3500亿（延续昨日强势，成长赛道领涨）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1495.00, 
            change: '+0.10%', 
            volume: '约1000亿', 
            turnover: '约1000亿（科技股分化，AI算力板块持续活跃）',
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
            title: '美联储维持利率不变，鲍威尔卸任主席后将继续留任理事',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-30',
            summary: '美联储4月29日宣布维持基准利率在3.5%-3.75%区间不变，连续第三次会议按兵不动。FOMC声明显示委员以8比4的投票比例通过利率决定。美联储主席鲍威尔表示，在主席任期于5月15日到期后，将继续留任美联储理事至2028年。市场预期美联储2026年维持利率不变直至年底。',
            impact: '中性',
            relatedSectors: ['全球市场', '科技股', '金融'],
            importance: '高'
        },
        {
            title: '国际油价大幅飙升，布伦特原油突破118美元/桶',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-30',
            summary: '受中东紧张局势持续影响，国际油价29日大幅上涨。纽约商品交易所6月交货轻质原油期货价格上涨6.95美元，收于每桶106.88美元，涨幅6.95%；伦敦布伦特原油期货价格上涨6.77美元，收于每桶118.03美元，涨幅6.08%，创2022年6月以来新高。标普将2026年布伦特原油价格预测上调至100美元/桶。',
            impact: '利空',
            relatedSectors: ['航空', '航运', '物流', '化工'],
            importance: '高'
        },
        {
            title: '刘浩凌上任证监会副主席，金融监管持续加强',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '近日，国务院决定任命刘浩凌为中国证券监督管理委员会副主席。刘浩凌1971年出生，先后获得北京大学英语学士学位、中国政法大学法学学士学位、美国爱荷华大学法学硕士学位、英国伦敦大学伦敦商学院金融学硕士学位。中央组织部通知，刘浩凌同志任证监会党委委员。',
            impact: '利好',
            relatedSectors: ['金融', '券商', '大盘整体'],
            importance: '高'
        },
        {
            title: '深圳优化住房限购政策，提高公积金贷款额度',
            source: '新华财经',
            sourceUrl: 'https://www.xinhuanet.com/fortune/',
            time: '2026-04-30',
            summary: '深圳市住房和建设局29日印发《关于进一步优化调整本市房地产相关政策的通知》，自4月30日起施行。政策提出持有有效深圳经济特区居住证的非户籍居民家庭可在福田区、南山区和宝安区新安街道范围内购买1套商品住房，无需提供社保或个税证明。公积金贷款额度个人从60万元提高至70万元，家庭从110万元提高至130万元。',
            impact: '利好',
            relatedSectors: ['房地产', '家电', '建筑建材'],
            importance: '高'
        },
        {
            title: '第九届数字中国建设峰会开幕，AI发展再获政策支持',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-30',
            summary: '第九届数字中国建设峰会29日在福州开幕，中共中央政治局常委、国务院副总理丁薛祥出席开幕式并发表主旨讲话。丁薛祥指出，要把握人工智能发展大势，加快建设数字中国，全方位赋能经济社会发展，为中国式现代化注入强大动力。新一轮科技革命和产业变革加速突破，数字经济发展正迈入智能经济新阶段。',
            impact: '利好',
            relatedSectors: ['AI', '数字经济', '软件服务', '科技股'],
            importance: '高'
        },
        {
            title: '六大行一季度业绩整体向好，悉数实现归母净利润同比增长',
            source: '新华财经',
            sourceUrl: 'https://www.xinhuanet.com/fortune/',
            time: '2026-04-30',
            summary: '六大行一季度业绩整体向好，悉数实现归母净利润同比增长。工商银行归母净利润同比增3.31%至869.41亿元；建设银行同比增3.53%至862.91亿元；农业银行同比增4.52%至751.85亿元；中国银行同比增4.17%至566.31亿元；交通银行同比增3.11%至261.62亿元；邮储银行同比增1.90%至257.26亿元。',
            impact: '利好',
            relatedSectors: ['银行', '金融', '大盘'],
            importance: '高'
        },
        {
            title: '自然资源部发布矿产资源家底，14种矿产储量居世界第一',
            source: '新华社',
            sourceUrl: 'https://www.xinhuanet.com/',
            time: '2026-04-30',
            summary: '自然资源部29日发布我国矿产资源产量、储量31项世界第一。稀土、钨、锡、钼、锑、镓、锗、铟、萤石、石墨等14种矿产储量居世界第一位。2025年，我国煤炭、钒、钛、锌、稀土、钨、锡、钼、锑、镓、铟、金、碲等17种矿产产量居世界第一。2025年全国矿业产值约32.7万亿元，占GDP比重超23%。',
            impact: '利好',
            relatedSectors: ['稀土', '有色金属', '矿产资源', '能源金属'],
            importance: '高'
        },
        {
            title: '闻泰科技被实施退市风险警示，净利润暴跌',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '闻泰科技公告称，因容诚会计师事务所对公司2025年度财务会计报告出具无法表示意见的审计报告，且对2025年度财务报告内部控制出具无法表示意见的内部控制审计报告，公司股票将被实施退市风险警示并叠加其他风险警示。公司股票及可转债"闻泰转债"将于4月30日停牌一天，自5月6日起实施风险警示，股票简称变更为*ST闻泰，日涨跌幅限制为5%。',
            impact: '利空',
            relatedSectors: ['半导体', '消费电子', 'ST板块'],
            importance: '高'
        },
        {
            title: '兆易创新一季度净利润同比增522.79%，存储芯片量价齐升',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '兆易创新公告称，2026年第一季度实现营业收入41.88亿元，同比增长119.38%；归属于上市公司股东的净利润为14.61亿元，同比增长522.79%。业绩变动主要系报告期内公司存储芯片产品面临供不应求局面，实现量价齐升；微控制器产品得益于工业、消费电子及汽车等多领域需求的带动，出货量大幅增长。Q1净利润环比增长158%。',
            impact: '利好',
            relatedSectors: ['存储芯片', '半导体', 'AI算力'],
            importance: '高'
        },
        {
            title: '寒武纪一季度净利润同比增185.04%，章建平退出十大股东',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '寒武纪公告称，2026年第一季度实现营业收入28.85亿元，同比增长159.56%；归属于上市公司股东的净利润为10.13亿元，同比增长185.04%。Q1净利润环比增长122%。根据一季报，截至2026年3月31日，知名牛散章建平退出十大股东行列；根据2025年年报，截至2025年12月31日，章建平持有公司681.49万股，为公司第五大股东。',
            impact: '中性',
            relatedSectors: ['AI芯片', '半导体', '科技股'],
            importance: '中'
        },
        {
            title: 'A股四月收官：科技股领涨，创业板延续强势',
            source: '市场观察',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '4月30日是五一节前最后一个交易日，也是4月A股行情的收官之日。今日早盘三大指数集体高开，科技股表现强势，半导体、人工智能相关板块领涨两市。4月29日市场呈现普涨修复特征，近4000只个股飘红，三大指数全线大涨，创业板单日涨幅超过2.5%。业绩超预期的稀土、锂矿、储能板块持续走强。',
            impact: '利好',
            relatedSectors: ['科技股', '大盘整体', '稀土', '储能'],
            importance: '高'
        },
        {
            title: 'DeepSeek开启识图功能灰度测试，AI能力持续进化',
            source: '东方财富',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-30',
            summary: '4月29日，多位用户发现DeepSeek开启图片理解功能的灰度测试。被灰度测试选中的用户的DeepSeek首页上会出现"识图模式"入口，当光标移动到该选项时，会出现"图片理解功能内测中"的字样。DeepSeek研究员陈德里在社交媒体表示"Now, we see you"，暗示这一功能的即将上线。',
            impact: '利好',
            relatedSectors: ['AI概念', '软件服务', '科技股'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 280.00,
            unit: '亿元',
            direction: '净流入',
            shangzheng: 125.49,
            shengzheng: 154.51,
            trend: '昨日主力资金净流入超280亿，电力设备、有色金属净流入超120亿',
            analysis: '4月29日A股主力资金全天净流入超280亿元，创近期新高。资金集中流向电力设备(126亿)、有色金属(122亿)、汽车(32亿)板块，主力资金积极布局业绩超预期的新能源、资源品方向。电子板块遭主力净流出101亿元，资金高低切换明显。节前最后一个交易日预计缩量震荡为主。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 42.68,
            unit: '亿元',
            direction: '净流入',
            shengutong: 25.31,
            hushenutong: 17.37,
            trend: '北向资金早盘净流入42.68亿，沪股通+25.31亿，深股通+17.37亿',
            analysis: '北向资金今日早盘净流入42.68亿元，延续近期流入态势。本月累计净流入286.45亿元，今年以来累计净流入超2856亿元。外资持续加仓金融、消费板块，对高股息、稳定增长的蓝筹股表现出明显偏好。五一假期临近，预计资金以调仓为主，大幅流出概率较低。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '电力设备/储能', inflow: 126.06, outflow: 0, netFlow: 126.06, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '有色金属', inflow: 122.03, outflow: 0, netFlow: 122.03, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '汽车', inflow: 32.09, outflow: 0, netFlow: 32.09, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '基础化工', inflow: 25.23, outflow: 0, netFlow: 25.23, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '机械设备', inflow: 15.97, outflow: 0, netFlow: 15.97, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '房地产', inflow: 9.60, outflow: 0, netFlow: 9.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电子', inflow: 0, outflow: -101.11, netFlow: -101.11, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '医药生物', inflow: 0, outflow: -17.09, netFlow: -17.09, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '银行', inflow: 0, outflow: -12.81, netFlow: -12.81, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '计算机', inflow: 0, outflow: -11.39, netFlow: -11.39, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '北方稀土', netFlow: 32.31, reason: '稀土永磁龙头，一季度净利润增113%，牛散章建平持仓超35亿，涨停' },
                { name: '胜宏科技', netFlow: 24.11, reason: 'AI算力概念，一季度净利润同比增40%，业绩超预期' },
                { name: '比亚迪', netFlow: 23.86, reason: '新能源整车龙头，午后强势反弹，外资加仓明显' },
                { name: '阳光电源', netFlow: 18.50, reason: '储能龙头，政策+业绩双驱动，涨停' },
                { name: '宁德时代', netFlow: 15.20, reason: '锂电龙头，储能赛道核心标的，持续获得资金关注' },
                { name: '天赐材料', netFlow: 12.80, reason: '电解液龙头，锂电池板块反弹，新能源赛道回暖' },
                { name: '格力电器', netFlow: 10.59, reason: '白色家电龙头，低估值高股息吸引资金配置' },
                { name: '中国稀土', netFlow: 9.80, reason: '稀土板块跟风强势，业绩+资源安全双重催化' },
                { name: '天华新能', netFlow: 8.90, reason: '锂电+储能前排，今日大涨18.83%，资金追捧' },
                { name: '华工科技', netFlow: 8.50, reason: 'AI光模块订单饱满，午盘强势涨停' }
            ],
            outflow: [
                { name: '工业富联', netFlow: -25.87, reason: '消费电子龙头，获利盘集中了结，高位科技股回调' },
                { name: '招商银行', netFlow: -15.10, reason: '银行板块调整，主力资金阶段性撤离' },
                { name: '永鼎股份', netFlow: -10.15, reason: '前期涨幅过大，短线资金获利了结' },
                { name: '立讯精密', netFlow: -8.50, reason: '消费电子分化，资金调仓换股' },
                { name: '中芯国际', netFlow: -7.20, reason: '半导体板块高位回落，获利盘出逃' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 4.80, outflow: 0, netFlow: 4.80, trend: '大盘蓝筹获资金流入，权重股护盘明显', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 3.50, outflow: 0, netFlow: 3.50, trend: '科技股回暖，科创50反弹明显', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 2.80, outflow: 0, netFlow: 2.80, trend: '防御属性吸引资金流入，高股息策略持续受宠', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 3.20, outflow: 0, netFlow: 3.20, trend: '中小盘科技股反弹，成长风格占优', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '稀土永磁/能源金属',
                reason: '自然资源部发布我国14种矿产储量世界第一，稀土、钨、锡等战略资源地位凸显。北方稀土一季报净利润增113%，牛散章建平持仓超35亿。主力资金昨日净流入超122亿元，板块持续走强。',
                inflow: 122.03,
                hotStocks: ['北方稀土', '中国稀土', '盛和资源', '五矿稀土', '广晟有色'],
                sustainability: '强',
                riskTip: '关注稀土价格波动和出口政策',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '储能/新能源',
                reason: '储能板块昨日主力资金净流入超160亿元，阳光电源、天赐材料等多股涨停。政治局会议强调新型电网、算力网建设，叠加整治新能源内卷政策，储能赛道迎来业绩+政策双驱动。',
                inflow: 160.00,
                hotStocks: ['阳光电源', '宁德时代', '天赐材料', '天华新能', '鹏辉能源'],
                sustainability: '强',
                riskTip: '关注原材料价格波动和行业竞争格局',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: 'AI算力/半导体',
                reason: '数字中国建设峰会开幕，AI发展再获政策支持。兆易创新一季度净利润增522%，存储芯片量价齐升。DeepSeek开启识图功能测试，AI能力持续进化。科技赛道仍是市场主线。',
                inflow: 48.20,
                hotStocks: ['中际旭创', '剑桥科技', '华工科技', '天孚通信', '寒武纪'],
                sustainability: '强',
                riskTip: '关注美股AI概念波动和算力需求变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '电力设备',
                reason: '电力设备板块昨日主力资金净流入126亿元，位居全行业首位。政策持续推进新型电网建设，六大行一季度业绩整体向好，低估值高股息属性吸引资金配置。',
                inflow: 126.06,
                hotStocks: ['长江电力', '中国神华', '工商银行', '国电南瑞', '许继电气'],
                sustainability: '中',
                riskTip: '关注政策力度和电价变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '房地产',
                reason: '深圳优化住房限购政策，提高公积金贷款额度至最高130万元。政策持续放松有利于房地产行业基本面改善。板块估值处于历史低位，吸引资金配置。',
                inflow: 9.60,
                hotStocks: ['万科A', '保利发展', '招商蛇口', '金地集团', '华侨城A'],
                sustainability: '中',
                riskTip: '关注政策力度和销售数据改善情况',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '消费复苏',
                catalyst: '一季度经济数据向好，消费有望持续回暖，旅游、餐饮、家电等消费板块受益',
                expectedTime: '2026年',
                relatedNews: '一季度GDP同比增长5.0%，经济运行开局良好，消费复苏态势明显',
                potential: '中高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '新能源汽车',
                catalyst: '2026北京车展开幕，多款重磅新车亮相，智能驾驶技术持续突破',
                expectedTime: '2026年',
                relatedNews: '多款新能源汽车、智能驾驶新技术将亮相，新能源汽车产业链有望持续受益',
                potential: '高',
                source: 'https://www.eeo.com.cn/'
            },
            {
                name: '算电协同',
                catalyst: '国家能源局将编制实施新型电力系统建设"十五五"规划，将算力设施纳入电力保供重点领域',
                expectedTime: '2026-2030年',
                relatedNews: '算电协同首次写入政府工作报告，绿电直供、储能、虚拟电厂等方向持续催化',
                potential: '高',
                source: 'https://www.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['电子高位', '半导体', '银行', '医药生物', '计算机'],
            to: ['稀土永磁', '储能/新能源', '电力设备', '房地产', 'AI算力'],
            analysis: '市场风格明显切换：电力设备、有色金属等资源品板块获主力资金净流入超120亿；储能、锂电池概念集体爆发；稀土永磁受政策+业绩双驱动持续走强。电子、半导体高位个股遭资金抛售，主力净流出超100亿。资金高低切换明显，低位绩优股抗跌性强。'
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
