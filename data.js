// ==================== 数据更新时间
const DATA_UPDATE_TIME = '2026-05-08 15:00:00';

// ==================== 示例数据
const SAMPLE_DATA = {
    // 大盘指数
    index: {
        shangzhi: {
            name: '上证指数',
            value: '4,192.76',
            change: '+12.67 (+0.30%)',
            changePercent: 0.30
        },
        shengzheng: {
            name: '深证成指',
            value: '15,725.43',
            change: '+83.54 (+0.53%)',
            changePercent: 0.53
        },
        chuangye: {
            name: '创业板指',
            value: '3,856.21',
            change: '+23.15 (+0.60%)',
            changePercent: 0.60
        },
        zhuanke50: {
            name: '科创50',
            value: '1,692.35',
            change: '+17.93 (+1.07%)',
            changePercent: 1.07
        }
    },
    
    // 资金流向
    capital: {
        mainFund: {
            value: '+212.57亿',
            isPositive: true
        },
        northFund: {
            value: '+68.32亿',
            isPositive: true
        }
    },
    
    // 板块排行
    sectors: {
        inflow: [
            { name: '通信设备', value: '+90.10亿' },
            { name: '机械设备', value: '+63.85亿' },
            { name: '建筑装饰', value: '+16.40亿' },
            { name: '传媒', value: '+12.84亿' },
            { name: '汽车', value: '+11.08亿' },
            { name: '国防军工', value: '+8.76亿' },
            { name: '环保', value: '+2.19亿' },
            { name: '交通运输', value: '+1.43亿' }
        ],
        outflow: [
            { name: '电力设备', value: '-113.56亿' },
            { name: '有色金属', value: '-88.10亿' },
            { name: '基础化工', value: '-59.31亿' },
            { name: '医药生物', value: '-27.46亿' },
            { name: '非银金融', value: '-26.55亿' },
            { name: '石油石化', value: '-26.33亿' },
            { name: '计算机', value: '-12.85亿' },
            { name: '煤炭', value: '-10.01亿' }
        ]
    },
    
    // 财经新闻
    news: [
        {
            title: 'A股普涨行情延续，超3500只个股飘红，科技主线持续走强',
            time: '15:00',
            summary: '5月8日A股延续强势格局，上证指数稳步逼近4200点整数关口，盘中最高触及4198.35点。两市全天成交2.87万亿元，承接昨日缩量蓄力走势，今日温和放量，属于健康的增量资金进场节奏。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '北向资金连续9日净流入，累计加仓超600亿元，坚定布局核心资产',
            time: '14:30',
            summary: '北向资金今日净流入68.32亿元，已连续9个交易日保持净流入状态，外资持续坚定布局A股核心赛道。场内主力资金全天净流入212.57亿元，在指数临近压力位时依旧主动加仓，做多意愿明确且坚决。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: 'AI算力产业链持续爆发，光模块、通信设备领涨两市',
            time: '13:45',
            summary: '通信设备板块今日主力资金净流入90.10亿元居首，新易盛、中天科技、永鼎股份等个股表现活跃。AI算力需求持续爆发，光模块、服务器、存储芯片订单排期至2027年，上游工业金属供需偏紧。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '低位板块轮动补涨，有色、储能、高端制造全线走强',
            time: '12:30',
            summary: '今日市场呈现明显的高低切换特征，高位科技龙头震荡休整，场内获利资金主动流出，布局前期调整充分、估值处于历史低位的滞涨板块，包括有色、储能、高端制造、超跌消费医药等。',
            impact: 'neutral',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '机构一致看好后市，认为当前上涨逻辑稳固，短期震荡不改上行趋势',
            time: '11:15',
            summary: '国内多家头部券商、公募机构收盘后同步发布市场观点，普遍认为当前A股上涨逻辑稳固，硬科技依旧是贯穿全年的绝对主线，算力、半导体、国产CPU具备长期成长逻辑。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '央行释放流动性维稳，市场资金面充裕，无流动性收紧担忧',
            time: '10:40',
            summary: '央行持续推进1.2万亿科创再贷款落地，市场整体流动性保持合理充裕，场内资金充裕，没有流动性收紧带来的恐慌情绪，为指数稳步上行提供了稳定的货币环境。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '政策红利持续释放，新一代信息技术与高端制造升级专项方案落地',
            time: '09:30',
            summary: '工信部批复的新一代信息技术与高端制造升级专项方案持续发酵，算力基础设施、半导体国产替代、工业智能装备三大赛道迎来持续政策催化，企业订单饱满、业绩确定性强。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '外围市场平稳，美联储偏鸽信号持续发酵，全球风险偏好提升',
            time: '08:15',
            summary: '隔夜海外市场走势平稳，美联储前期释放的偏鸽信号持续发酵，美元指数、美债收益率维持偏弱运行，外围成长资产表现稳定，没有利空消息冲击A股，市场外部环境友好。',
            impact: 'neutral',
            url: 'https://finance.eastmoney.com/'
        }
    ],
    
    // 基金数据
    funds: [
        {
            code: '510300',
            name: '沪深300ETF',
            value: '4.912',
            change: '+0.38%',
            changePercent: 0.38
        },
        {
            code: '159915',
            name: '创业板ETF',
            value: '2.215',
            change: '+0.72%',
            changePercent: 0.72
        },
        {
            code: '510500',
            name: '中证500ETF',
            value: '6.823',
            change: '+0.45%',
            changePercent: 0.45
        },
        {
            code: '588000',
            name: '科创50ETF',
            value: '1.589',
            change: '+1.12%',
            changePercent: 1.12
        },
        {
            code: '161725',
            name: '招商中证白酒',
            value: '1.523',
            change: '+0.28%',
            changePercent: 0.28
        },
        {
            code: '005827',
            name: '易方达蓝筹精选',
            value: '2.412',
            change: '+0.35%',
            changePercent: 0.35
        },
        {
            code: '000001',
            name: '华夏成长混合',
            value: '3.289',
            change: '+0.18%',
            changePercent: 0.18
        },
        {
            code: '110011',
            name: '易方达中小盘',
            value: '5.734',
            change: '+0.42%',
            changePercent: 0.42
        }
    ]
};
