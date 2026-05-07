// ==================== 数据更新时间
const DATA_UPDATE_TIME = '2026-04-11 15:30:00';

// ==================== 示例数据
const SAMPLE_DATA = {
    // 大盘指数
    index: {
        shangzhi: {
            name: '上证指数',
            value: '3,156.28',
            change: '+12.35 (+0.39%)',
            changePercent: 0.39
        },
        shengzheng: {
            name: '深证成指',
            value: '9,875.62',
            change: '+45.82 (+0.47%)',
            changePercent: 0.47
        },
        chuangye: {
            name: '创业板指',
            value: '1,928.56',
            change: '+8.72 (+0.45%)',
            changePercent: 0.45
        },
        zhuanke50: {
            name: '科创50',
            value: '892.35',
            change: '-3.21 (-0.36%)',
            changePercent: -0.36
        }
    },
    
    // 资金流向
    capital: {
        mainFund: {
            value: '-85.63亿',
            isPositive: false
        },
        northFund: {
            value: '+42.18亿',
            isPositive: true
        }
    },
    
    // 板块排行
    sectors: {
        inflow: [
            { name: '半导体', value: '+28.56亿' },
            { name: '新能源', value: '+22.34亿' },
            { name: '医药生物', value: '+18.92亿' },
            { name: '白酒', value: '+15.67亿' },
            { name: '军工', value: '+12.45亿' },
            { name: '券商', value: '+10.23亿' },
            { name: '光伏', value: '+8.76亿' },
            { name: '5G', value: '+6.54亿' }
        ],
        outflow: [
            { name: '银行', value: '-32.45亿' },
            { name: '房地产', value: '-25.67亿' },
            { name: '煤炭', value: '-18.23亿' },
            { name: '钢铁', value: '-15.34亿' },
            { name: '石油', value: '-12.56亿' },
            { name: '建材', value: '-9.87亿' },
            { name: '建筑', value: '-7.65亿' },
            { name: '电力', value: '-5.43亿' }
        ]
    },
    
    // 财经新闻
    news: [
        {
            title: '央行宣布降准0.25个百分点，释放长期资金约5000亿',
            time: '15:20',
            summary: '中国人民银行决定下调金融机构存款准备金率0.25个百分点，此次降准旨在优化金融机构资金结构，增强金融机构支持实体经济的能力。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '新能源汽车销量创新高，产业链持续受益',
            time: '14:45',
            summary: '最新数据显示，国内新能源汽车销量同比增长超35%，市场渗透率持续提升，产业链相关企业业绩亮眼。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '半导体行业迎来政策利好，国产替代加速推进',
            time: '14:10',
            summary: '国家出台多项支持政策，推动半导体产业发展，芯片国产化进程加快，相关板块表现活跃。',
            impact: 'positive',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '房地产市场持续调整，多地出台稳楼市政策',
            time: '13:30',
            summary: '多地陆续出台稳楼市政策，包括放宽限购、降低首付比例等措施，市场反应有待观察。',
            impact: 'neutral',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '美联储维持利率不变，符合市场预期',
            time: '12:15',
            summary: '美联储宣布维持联邦基金利率不变，市场反应平稳，全球资本市场波动不大。',
            impact: 'neutral',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '医药集采政策落地，医药板块迎来调整',
            time: '11:40',
            summary: '新一轮药品集中采购结果公布，部分药品价格降幅较大，医药板块承压。',
            impact: 'negative',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '煤炭价格持续下行，煤炭板块承压',
            time: '10:55',
            summary: '受供需关系变化，煤炭价格持续下行，相关上市公司业绩面临压力。',
            impact: 'negative',
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '银行股集体走弱，市场情绪偏谨慎',
            time: '10:20',
            summary: '银行板块今日集体走弱，市场情绪偏谨慎，成交量有所萎缩。',
            impact: 'negative',
            url: 'https://finance.eastmoney.com/'
        }
    ],
    
    // 基金数据
    funds: [
        {
            code: '510300',
            name: '沪深300ETF',
            value: '4.1256',
            change: '+0.85%',
            changePercent: 0.85
        },
        {
            code: '159915',
            name: '创业板ETF',
            value: '2.2345',
            change: '+1.23%',
            changePercent: 1.23
        },
        {
            code: '510500',
            name: '中证500ETF',
            value: '5.6789',
            change: '+0.56%',
            changePercent: 0.56
        },
        {
            code: '588000',
            name: '科创50ETF',
            value: '1.1234',
            change: '-0.34%',
            changePercent: -0.34
        },
        {
            code: '161725',
            name: '招商中证白酒',
            value: '1.4567',
            change: '+0.92%',
            changePercent: 0.92
        },
        {
            code: '005827',
            name: '易方达蓝筹精选',
            value: '2.3456',
            change: '+0.45%',
            changePercent: 0.45
        },
        {
            code: '000001',
            name: '华夏成长混合',
            value: '3.2345',
            change: '-0.12%',
            changePercent: -0.12
        },
        {
            code: '110011',
            name: '易方达中小盘',
            value: '5.6789',
            change: '+0.67%',
            changePercent: 0.67
        }
    ]
};
