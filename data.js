// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-21 23:04:54';

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
    }
};

// ==================== 主数据 ====================
const SAMPLE_DATA = {
    today: '2026-04-21',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4162.88, 
            change: '+0.39%', 
            volume: '3.87亿', 
            turnover: '4502.32亿' 
        },
        shengzheng: { 
            value: 10156.07, 
            change: '-0.06%', 
            volume: '5.33亿', 
            turnover: '6676.41亿' 
        },
        chuangye: { 
            value: 2063.82, 
            change: '-1.04%', 
            volume: '1.78亿', 
            turnover: '3240.14亿' 
        },
        zhuanke50: { 
            value: 955.09, 
            change: '-2.02%', 
            volume: '2475.49万', 
            turnover: '942.12亿' 
        }
    },
    
    // ===== 2. 推荐基金（含买卖建议） =====
    recommendedFunds: {
        // 建议买入
        buyList: [
            {
                code: '588000',
                name: '华夏科创50ETF',
                price: 1.49,
                change: '+5.88%',
                nav: 1.49,
                reason: '科创50指数近一个月大涨12.04%，受DeepSeek概念、AI产业链全线爆发推动。半导体、人工智能等科技板块资金持续流入，市场风险偏好提升。该基金前十大重仓包括中芯国际、海光信息、寒武纪等科技龙头，具备较强成长性。当前估值合理，适合中长期配置。',
                buyPrice: '1.45-1.50',
                targetPrice: '1.70-1.80',
                stopLoss: '1.35',
                riskLevel: '高',
                expectedReturn: '15-20%'
            },
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                price: 4.68,
                change: '-0.72%',
                nav: 4.68,
                reason: '沪深300指数目前估值处于历史中低水平，指数成分股多为行业龙头，具备长期投资价值。北向资金自2024年8月停止披露净买入，但被动外资流入扩大。市场轮动加快，建议配置核心资产进行防守反击。',
                buyPrice: '4.60-4.70',
                targetPrice: '5.00-5.20',
                stopLoss: '4.40',
                riskLevel: '中',
                expectedReturn: '10-15%'
            }
        ],
        // 建议卖出
        sellList: [],
        // 持有观望
        holdList: [
            {
                code: '515080',
                name: '招商中证红利ETF',
                price: 1.49,
                change: '-0.24%',
                reason: '红利板块近期表现相对较弱，但估值仍具吸引力。作为防御性配置可继续持有，关注分红时点。'
            },
            {
                code: '510500',
                name: '南方中证500ETF',
                price: 6.05,
                change: '+1.68%',
                reason: '中证500指数近期表现强劲，但波动较大。建议持有观望，等待更好的加仓时机。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                price: 1.24,
                change: '+0.02%',
                reason: '债券基金作为避险资产，表现稳健。建议继续持有，平衡投资组合风险。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                price: 0,
                change: '0%',
                reason: '作为债券增强型基金，可在市场震荡时提供稳定收益。建议继续持有。'
            }
        ]
    },
    
    // ===== 3. 实时新闻（利好利空辨别） =====
    realtimeNews: [
        {
            title: 'A股2月收官!大盘逼近前高，上证指数累计涨1.09%',
            source: '广州日报',
            sourceUrl: 'http://m.toutiao.com/group/7611553940181647887/',
            time: '2026-02-27',
            summary: '2月27日，A股大小指数分化，上证指数收涨0.39%报4162.88点。2月累计涨幅1.09%，深成指涨2.04%。机构分析称，大盘稳步上行，已逼近前高。',
            impact: '利好',
            relatedSectors: ['周期板块', '有色', '钢铁', '煤炭'],
            importance: '高'
        },
        {
            title: '年内新高!两融余额达18724亿元',
            source: '证券时报',
            sourceUrl: 'http://m.toutiao.com/group/7473532167272907327/',
            time: '2025-02-21',
            summary: '截至2025年2月19日，A股市场两融余额达18724亿元，创2025年以来的新高。春节以后绝大多数行业获融资资金加仓。',
            impact: '利好',
            relatedSectors: ['全市场'],
            importance: '高'
        },
        {
            title: '2025年中央一号文件发布',
            source: '证券时报',
            sourceUrl: 'https://xueqiu.com/5478839158/324639903',
            time: '2025-02-24',
            summary: '2025年中央一号文件2月23日发布，提出以改革开放和科技创新为动力，确保国家粮食安全，推动乡村产业发展。',
            impact: '利好',
            relatedSectors: ['农业', '乡村振兴'],
            importance: '高'
        },
        {
            title: 'DeepSeek概念受追捧，多只热门股发布风险提示',
            source: '新浪财经',
            sourceUrl: 'http://finance.sina.cn/2025-02-06/detail-ineirfqh0828968.d.html',
            time: '2025-02-07',
            summary: 'DeepSeek概念股持续火爆，多家上市公司发布澄清公告，强调与深度求索无股权投资或业务往来。',
            impact: '中性',
            relatedSectors: ['人工智能', '科技'],
            importance: '中'
        },
        {
            title: '主力资金净流入200.38亿元，计算机最受青睐',
            source: '证券时报',
            sourceUrl: 'https://stcn.com/article/detail/1509207.html',
            time: '2025-01-24',
            summary: '1月24日，主力资金全天净流入200.38亿元。计算机行业净流入64.62亿元居首，通信行业净流入29.75亿元。',
            impact: '利好',
            relatedSectors: ['计算机', '通信', '传媒'],
            importance: '高'
        },
        {
            title: '1月南向资金加速流入，新兴市场基金增配中国股市',
            source: '财联社',
            sourceUrl: 'http://m.toutiao.com/group/7468191030165242408/',
            time: '2025-02-06',
            summary: '截至2025年1月30日，1月全球权益基金资金流入中国市场的规模为33.3亿美元，较12月边际加速。',
            impact: '利好',
            relatedSectors: ['港股', '金融', '原材料'],
            importance: '高'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 200.38,
            unit: '亿元',
            direction: '流入',
            shangzheng: 89.72,
            shengzheng: 110.66,
            trend: '近期主力资金由净流出转为净流入，显示市场情绪有所回暖',
            analysis: '1月24日主力资金净流入200.38亿元，计算机、通信、机械设备等科技板块获得资金青睐。春节后资金流向显示市场风险偏好提升，科技成长板块成为资金主攻方向。'
        },
        northFund: {
            value: 0,
            unit: '亿元',
            direction: '未知',
            shengutong: 0,
            hushenutong: 0,
            trend: '北向资金自2024年8月16日起停止披露净买入金额',
            analysis: '北向资金目前仅披露成交金额，不披露净买入数据。根据EPFR数据，主动外资流出放缓，被动外资流入扩大，显示海外资金对中国市场的配置意愿有所回升。'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '计算机', inflow: 64.62, outflow: 0, netFlow: 64.62 },
            { name: '通信', inflow: 29.75, outflow: 0, netFlow: 29.75 },
            { name: '机械设备', inflow: 21.42, outflow: 0, netFlow: 21.42 },
            { name: '传媒', inflow: 18.85, outflow: 0, netFlow: 18.85 },
            { name: '汽车', inflow: 18.32, outflow: 0, netFlow: 18.32 },
            { name: '电子', inflow: 16.80, outflow: 0, netFlow: 16.80 },
            { name: '有色金属', inflow: 10.81, outflow: 0, netFlow: 10.81 },
            { name: '非银金融', inflow: 8.90, outflow: 0, netFlow: 8.90 },
            { name: '食品饮料', inflow: 0, outflow: 6.53, netFlow: -6.53 },
            { name: '国防军工', inflow: 0, outflow: 4.25, netFlow: -4.25 }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { code: '000063', name: '中兴通讯', amount: 14.22, change: '+4.43%' },
                { code: '002241', name: '歌尔股份', amount: 8.58, change: '+3.21%' },
                { code: '600105', name: '鑫科材料', amount: 8.18, change: '+5.67%' }
            ],
            outflow: [
                { code: '601985', name: '中国核电', amount: 6.38, change: '-2.15%' },
                { code: '603986', name: '兆易创新', amount: 3.01, change: '-1.89%' },
                { code: '688981', name: '中芯国际', amount: 2.62, change: '-0.85%' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 0, outflow: 6.23, netFlow: -6.23, trend: '近期小幅流出' },
            { code: '588000', name: '华夏科创50ETF', inflow: 25.45, outflow: 0, netFlow: 25.45, trend: '持续流入' },
            { code: '515080', name: '招商中证红利ETF', inflow: 5.29, outflow: 1.70, netFlow: 3.59, trend: '净流入' },
            { code: '510500', name: '南方中证500ETF', inflow: 0, outflow: 11.56, netFlow: -11.56, trend: '近期流出' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '人工智能',
                reason: 'DeepSeek概念持续火爆，AI产业链全线爆发，智能体、AIGC、高速铜连接等软硬件方向齐升',
                inflow: 101.43,
                hotStocks: ['中科曙光', '寒武纪', '海光信息', '工业富联', '中兴通讯'],
                sustainability: '强',
                riskTip: '短期涨幅较大，注意回调风险'
            },
            {
                name: '计算机',
                reason: '主力资金净流入64.62亿元居首，软件开发、互联网服务等子板块表现活跃',
                inflow: 64.62,
                hotStocks: ['中兴通讯', '金山办公', '用友网络', '恒生电子'],
                sustainability: '中强',
                riskTip: '关注政策催化和业绩兑现'
            },
            {
                name: '通信',
                reason: '北向资金和主力资金双重流入，算力、数据中心、光通信等细分领域需求旺盛',
                inflow: 29.75,
                hotStocks: ['中际旭创', '新易盛', '光迅科技', '亨通光电'],
                sustainability: '中',
                riskTip: '关注5.5G建设进展'
            },
            {
                name: '周期涨价',
                reason: '有色、钢铁、煤炭等板块表现较强，通胀预期推动资源品价格上涨',
                inflow: 10.81,
                hotStocks: ['中国神华', '紫金矿业', '江西铜业', '宝钢股份'],
                sustainability: '中',
                riskTip: '关注全球经济复苏情况'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '新能源汽车电池回收',
                catalyst: '国常会审议通过《健全新能源汽车动力电池回收利用体系行动方案》',
                expectedTime: '2025年下半年',
                relatedNews: '政策支持电池回收产业发展，预计将催生千亿级市场',
                potential: '高'
            },
            {
                name: '中央企业AI+',
                catalyst: '国资委部署深化中央企业"AI+"专项行动',
                expectedTime: '2025年',
                relatedNews: '央国企将加大AI投入，相关概念股有望受益',
                potential: '中高'
            },
            {
                name: '农业现代化',
                catalyst: '2025年中央一号文件发布',
                expectedTime: '全年持续',
                relatedNews: '确保国家粮食安全，推动乡村产业发展',
                potential: '中'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['食品饮料', '医药生物', '房地产', '公用事业'],
            to: ['人工智能', '计算机', '通信', '机器人'],
            analysis: '市场从消费防御板块向科技成长板块轮动明显。资金从食品饮料、医药生物等传统防御板块流出，加速流入人工智能、计算机、通信等科技板块。随着市场风险偏好提升，预计科技成长板块将继续成为市场主线。'
        }
    },
    
    // 基金详情数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.68,
            change: '-0.72%',
            changeValue: -0.034,
            nav: 4.68,
            navDate: '2026-04-21',
            volume: '870.54亿份',
            amount: '3600.46亿',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            netFlow: -6.23,
            klineData: [
                { date: '2025-03-21', open: 4.612, close: 4.68, high: 4.695, low: 4.605 },
                { date: '2025-03-22', open: 4.68, close: 4.702, high: 4.715, low: 4.672 },
                { date: '2025-03-23', open: 4.702, close: 4.689, high: 4.71, low: 4.679 },
                { date: '2025-03-24', open: 4.689, close: 4.701, high: 4.718, low: 4.682 },
                { date: '2025-03-25', open: 4.701, close: 4.695, high: 4.72, low: 4.69 },
                { date: '2025-03-26', open: 4.695, close: 4.678, high: 4.705, low: 4.67 },
                { date: '2025-03-27', open: 4.678, close: 4.692, high: 4.7, low: 4.672 },
                { date: '2025-03-28', open: 4.692, close: 4.708, high: 4.715, low: 4.685 },
                { date: '2025-03-31', open: 4.708, close: 4.695, high: 4.72, low: 4.688 },
                { date: '2025-04-01', open: 4.695, close: 4.712, high: 4.725, low: 4.69 }
            ],
            navHistory: [
                { date: '2025-03-21', nav: 4.68 },
                { date: '2025-03-22', nav: 4.702 },
                { date: '2025-03-23', nav: 4.689 },
                { date: '2025-03-24', nav: 4.701 },
                { date: '2025-03-25', nav: 4.695 },
                { date: '2025-03-26', nav: 4.678 },
                { date: '2025-03-27', nav: 4.692 },
                { date: '2025-03-28', nav: 4.708 },
                { date: '2025-03-31', nav: 4.695 },
                { date: '2025-04-01', nav: 4.712 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 1.49,
            change: '+5.88%',
            changeValue: 0.082,
            nav: 1.49,
            navDate: '2026-04-21',
            volume: '500亿份',
            amount: '760.22亿',
            manager: '荣膺',
            scale: '760.22亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            netFlow: 25.45,
            klineData: [
                { date: '2025-03-21', open: 1.42, close: 1.445, high: 1.455, low: 1.415 },
                { date: '2025-03-22', open: 1.445, close: 1.462, high: 1.475, low: 1.44 },
                { date: '2025-03-23', open: 1.462, close: 1.458, high: 1.47, low: 1.455 },
                { date: '2025-03-24', open: 1.458, close: 1.475, high: 1.488, low: 1.452 },
                { date: '2025-03-25', open: 1.475, close: 1.488, high: 1.495, low: 1.468 },
                { date: '2025-03-26', open: 1.488, close: 1.482, high: 1.495, low: 1.475 },
                { date: '2025-03-27', open: 1.482, close: 1.496, high: 1.502, low: 1.478 },
                { date: '2025-03-28', open: 1.496, close: 1.502, high: 1.51, low: 1.49 },
                { date: '2025-03-31', open: 1.502, close: 1.495, high: 1.51, low: 1.488 },
                { date: '2025-04-01', open: 1.495, close: 1.49, high: 1.502, low: 1.485 }
            ],
            navHistory: [
                { date: '2025-03-21', nav: 1.445 },
                { date: '2025-03-22', nav: 1.462 },
                { date: '2025-03-23', nav: 1.458 },
                { date: '2025-03-24', nav: 1.475 },
                { date: '2025-03-25', nav: 1.488 },
                { date: '2025-03-26', nav: 1.482 },
                { date: '2025-03-27', nav: 1.496 },
                { date: '2025-03-28', nav: 1.502 },
                { date: '2025-03-31', nav: 1.495 },
                { date: '2025-04-01', nav: 1.49 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.49,
            change: '-0.24%',
            changeValue: -0.004,
            nav: 1.49,
            navDate: '2026-04-21',
            volume: '52.28亿份',
            amount: '77.65亿',
            manager: '王平、刘重杰',
            scale: '93.74亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            netFlow: 3.59,
            klineData: [
                { date: '2025-03-21', open: 1.465, close: 1.472, high: 1.478, low: 1.462 },
                { date: '2025-03-22', open: 1.472, close: 1.475, high: 1.482, low: 1.468 },
                { date: '2025-03-23', open: 1.475, close: 1.468, high: 1.478, low: 1.465 },
                { date: '2025-03-24', open: 1.468, close: 1.482, high: 1.488, low: 1.462 },
                { date: '2025-03-25', open: 1.482, close: 1.485, high: 1.492, low: 1.478 },
                { date: '2025-03-26', open: 1.485, close: 1.48, high: 1.488, low: 1.475 },
                { date: '2025-03-27', open: 1.48, close: 1.488, high: 1.495, low: 1.475 },
                { date: '2025-03-28', open: 1.488, close: 1.492, high: 1.498, low: 1.482 },
                { date: '2025-03-31', open: 1.492, close: 1.488, high: 1.498, low: 1.482 },
                { date: '2025-04-01', open: 1.488, close: 1.49, high: 1.495, low: 1.482 }
            ],
            navHistory: [
                { date: '2025-03-21', nav: 1.472 },
                { date: '2025-03-22', nav: 1.475 },
                { date: '2025-03-23', nav: 1.468 },
                { date: '2025-03-24', nav: 1.482 },
                { date: '2025-03-25', nav: 1.485 },
                { date: '2025-03-26', nav: 1.48 },
                { date: '2025-03-27', nav: 1.488 },
                { date: '2025-03-28', nav: 1.492 },
                { date: '2025-03-31', nav: 1.488 },
                { date: '2025-04-01', nav: 1.49 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 6.05,
            change: '+1.68%',
            changeValue: 0.100,
            nav: 6.05,
            navDate: '2026-04-21',
            volume: '164.82亿份',
            amount: '992.91亿',
            manager: '罗文杰',
            scale: '1446.90亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            netFlow: -11.56,
            klineData: [
                { date: '2025-03-21', open: 5.885, close: 5.92, high: 5.945, low: 5.87 },
                { date: '2025-03-22', open: 5.92, close: 5.955, high: 5.975, low: 5.905 },
                { date: '2025-03-23', open: 5.955, close: 5.94, high: 5.96, low: 5.928 },
                { date: '2025-03-24', open: 5.94, close: 5.97, high: 5.988, low: 5.93 },
                { date: '2025-03-25', open: 5.97, close: 5.985, high: 6.002, low: 5.965 },
                { date: '2025-03-26', open: 5.985, close: 5.975, high: 6.002, low: 5.968 },
                { date: '2025-03-27', open: 5.975, close: 5.992, high: 6.01, low: 5.968 },
                { date: '2025-03-28', open: 5.992, close: 6.008, high: 6.022, low: 5.985 },
                { date: '2025-03-31', open: 6.008, close: 5.995, high: 6.022, low: 5.988 },
                { date: '2025-04-01', open: 5.995, close: 6.05, high: 6.065, low: 5.99 }
            ],
            navHistory: [
                { date: '2025-03-21', nav: 5.92 },
                { date: '2025-03-22', nav: 5.955 },
                { date: '2025-03-23', nav: 5.94 },
                { date: '2025-03-24', nav: 5.97 },
                { date: '2025-03-25', nav: 5.985 },
                { date: '2025-03-26', nav: 5.975 },
                { date: '2025-03-27', nav: 5.992 },
                { date: '2025-03-28', nav: 6.008 },
                { date: '2025-03-31', nav: 5.995 },
                { date: '2025-04-01', nav: 6.05 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.24,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.24,
            navDate: '2026-04-21',
            volume: '24.83亿份',
            amount: '11.74亿',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            type: '债券型',
            riskLevel: 'R2中低风险',
            netFlow: 0.5,
            klineData: [
                { date: '2025-03-21', open: 1.237, close: 1.2378, high: 1.2385, low: 1.2365 },
                { date: '2025-03-22', open: 1.2378, close: 1.2382, high: 1.239, low: 1.2375 },
                { date: '2025-03-23', open: 1.2382, close: 1.238, high: 1.2388, low: 1.2376 },
                { date: '2025-03-24', open: 1.238, close: 1.2385, high: 1.2392, low: 1.2377 },
                { date: '2025-03-25', open: 1.2385, close: 1.2388, high: 1.2395, low: 1.238 },
                { date: '2025-03-26', open: 1.2388, close: 1.2382, high: 1.2392, low: 1.2378 },
                { date: '2025-03-27', open: 1.2382, close: 1.2387, high: 1.239, low: 1.2375 },
                { date: '2025-03-28', open: 1.2387, close: 1.239, high: 1.2395, low: 1.238 },
                { date: '2025-03-31', open: 1.239, close: 1.2385, high: 1.2392, low: 1.2378 },
                { date: '2025-04-01', open: 1.2385, close: 1.24, high: 1.2405, low: 1.238 }
            ],
            navHistory: [
                { date: '2025-03-21', nav: 1.2378 },
                { date: '2025-03-22', nav: 1.2382 },
                { date: '2025-03-23', nav: 1.238 },
                { date: '2025-03-24', nav: 1.2385 },
                { date: '2025-03-25', nav: 1.2388 },
                { date: '2025-03-26', nav: 1.2382 },
                { date: '2025-03-27', nav: 1.2387 },
                { date: '2025-03-28', nav: 1.239 },
                { date: '2025-03-31', nav: 1.2385 },
                { date: '2025-04-01', nav: 1.24 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 0,
            change: '0%',
            changeValue: 0,
            nav: 0,
            navDate: '2026-04-21',
            volume: '300亿份',
            amount: '316.96亿',
            manager: '王晓晨',
            scale: '316.96亿',
            established: '2008-03-19',
            type: '债券型-混合一级',
            riskLevel: '中低风险',
            netFlow: 0,
            klineData: [],
            navHistory: []
        }
    },
    
    stockData: {},
    historyReports: []
};
