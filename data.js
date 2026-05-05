// 投资看板静态数据 - 2026年5月5日更新
// 如果API请求失败，将使用这里的数据作为后备

const DATA_UPDATE_TIME = '2026-05-05 08:30:00';

const SAMPLE_DATA = {
    today: '2026-05-05',
    isTradingDay: true,
    
    // 实时大盘指数
    realtimeIndex: {
        shangzhi: {
            name: '上证指数',
            value: 3334.50,
            change: -0.48,
            volume: '2850亿'
        },
        shengzheng: {
            name: '深证成指',
            value: 11151.09,
            change: -1.09,
            volume: '3620亿'
        },
        chuangye: {
            name: '创业板指',
            value: 2265.56,
            change: -1.40,
            volume: '1580亿'
        },
        zhuanke50: {
            name: '科创50',
            value: 986.32,
            change: -1.20,
            volume: '420亿'
        }
    },
    
    // 资金流向
    capitalFlow: {
        mainFund: {
            value: '-193.52亿',
            analysis: '主力资金大幅流出，市场观望情绪浓厚'
        },
        northFund: {
            value: '-23.62亿',
            analysis: '北向资金小幅净卖出，沪股通微幅流入'
        },
        sectorFunds: [
            { name: '非银金融', netFlow: 11.45 },
            { name: '房地产', netFlow: 9.02 },
            { name: '食品饮料', netFlow: 5.68 },
            { name: '创新药', netFlow: 4.32 },
            { name: '银行', netFlow: 3.15 },
            { name: '传媒', netFlow: -57.24 },
            { name: '通信', netFlow: -24.67 },
            { name: '电力设备', netFlow: -21.38 },
            { name: '游戏', netFlow: -18.56 },
            { name: 'AI应用', netFlow: -15.23 }
        ]
    },
    
    // 利好/利空板块
    favorableSectors: {
        current: [
            { name: '非银金融', sustainability: '强', reason: '市场估值修复，券商板块受益于资本市场改革', inflow: 11.45, hotStocks: ['中信证券', '东方财富', '同花顺'] },
            { name: '房地产', sustainability: '中', reason: '深圳楼市回暖，政策持续放松，地产链迎来修复', inflow: 9.02, hotStocks: ['万科A', '保利发展', '招商蛇口'] },
            { name: '食品饮料', sustainability: '中', reason: '消费复苏预期，白酒龙头业绩稳健', inflow: 5.68, hotStocks: ['贵州茅台', '五粮液', '泸州老窖'] },
            { name: '创新药', sustainability: '强', reason: '医保谈判落地，创新药出海进程加速', inflow: 4.32, hotStocks: ['恒瑞医药', '药明康德', '百济神州'] }
        ],
        future: [
            { name: '半导体', potential: '高', catalyst: '国产替代加速，AI芯片需求旺盛', expectedTime: '2026Q2' },
            { name: '新能源', potential: '中', catalyst: '产业链价格企稳，需求逐步恢复', expectedTime: '2026Q2' },
            { name: '军工', potential: '高', catalyst: '120亿资金投入，军贸出口增长', expectedTime: '2026全年' }
        ],
        rotation: {
            from: ['AI应用', '游戏', '传媒', '通信'],
            to: ['非银金融', '房地产', '食品饮料', '创新药'],
            analysis: '市场风格切换，从高估值科技板块流向低估值蓝筹和防御性板块'
        }
    },
    
    // 推荐基金（买卖建议）
    recommendedFunds: {
        buyList: [
            { code: '510300', name: '沪深300ETF', price: 4.12, change: -0.48, riskLevel: '中', expectedReturn: '15-20%', buyPrice: '4.00-4.20', targetPrice: '4.80', stopLoss: '3.80', reason: '宽基指数估值处于历史低位，适合长期布局' },
            { code: '515080', name: '中证红利ETF', price: 1.28, change: 0.15, riskLevel: '低', expectedReturn: '8-12%', buyPrice: '1.25-1.30', targetPrice: '1.40', stopLoss: '1.18', reason: '高股息策略在震荡市中表现稳健' },
            { code: '006546', name: '兴银中短债C', price: 1.05, change: 0.01, riskLevel: '低', expectedReturn: '3-5%', buyPrice: '1.04-1.06', targetPrice: '1.08', stopLoss: '1.02', reason: '债券型基金，净值波动小，适合避险' }
        ],
        sellList: [
            { code: '588000', name: '科创50ETF', price: 0.98, change: -1.20, holdDays: 45, profit: '-5.2%', reason: '科技板块短期承压，建议减仓避险' }
        ],
        holdList: [
            { code: '110017', name: '易方达增强回报债券A', price: 1.32, change: 0.02, reason: '债券型基金，继续持有观望' }
        ]
    },
    
    // 实时新闻
    realtimeNews: [
        { title: '中东局势紧张，国际油价大涨', impact: '利好油气板块', summary: '中东地缘政治风险升级，布伦特原油突破90美元/桶，利好油气开采和油服板块', time: '07:30', source: '财联社', importance: '高', relatedSectors: ['油气', '煤炭'] },
        { title: '深圳楼市回暖，新房成交创年内新高', impact: '利好地产链', summary: '深圳楼市政策放松后，新房成交量连续3周回升，地产链相关板块有望受益', time: '08:00', source: '证券时报', importance: '高', relatedSectors: ['房地产', '建材', '家电'] },
        { title: '央行今日开展20亿元逆回购操作', impact: '中性', summary: '央行开展20亿元7天期逆回购操作，实现净投放20亿元，维护银行体系流动性合理充裕', time: '09:00', source: '央行官网', importance: '中', relatedSectors: ['银行'] },
        { title: '华为升腾芯片获大额订单', impact: '利好华为产业链', summary: '华为升腾AI芯片获得多家云厂商大额采购，产业链相关公司业绩有望超预期', time: '08:30', source: '集微网', importance: '高', relatedSectors: ['半导体', 'AI算力'] },
        { title: '港股科技板块五一期间上涨', impact: '利好科技股', summary: '港股科技指数五一假期累计上涨2.3%，恒生科技ETF有望高开', time: '07:00', source: '新浪财经', importance: '中', relatedSectors: ['互联网', '科技'] },
        { title: '欧佩克+宣布小幅增产', impact: '利空油气板块', summary: '欧佩克+决定自6月起每日增产18.8万桶，短期油价承压，油气板块面临回调压力', time: '06:00', source: '新华社', importance: '高', relatedSectors: ['油气'] },
        { title: '120亿资金投入军工领域', impact: '利好军工', summary: '军工领域迎来120亿专项资金投入，军贸出口持续增长，看好军工板块长期投资价值', time: '08:15', source: '中国证券网', importance: '高', relatedSectors: ['军工'] },
        { title: '传媒板块资金大幅流出', impact: '利空传媒游戏', summary: '传媒板块昨日净流出超57亿元，AI应用和游戏板块遭机构大幅减持', time: '07:45', source: '东方财富网', importance: '中', relatedSectors: ['传媒', '游戏'] }
    ],
    
    // 基金数据
    fundData: {
        '510300': { name: '华泰柏瑞沪深300ETF', nav: 4.15, navDate: '2026-04-30', price: 4.12, change: -0.48, scale: '580亿', manager: '张静', tracking: '沪深300' },
        '588000': { name: '华夏科创50ETF', nav: 0.99, navDate: '2026-04-30', price: 0.98, change: -1.20, scale: '420亿', manager: '张弘弢', tracking: '科创50' },
        '515080': { name: '招商中证红利ETF', nav: 1.28, navDate: '2026-04-30', price: 1.28, change: 0.15, scale: '185亿', manager: '刘重杰', tracking: '中证红利' },
        '510500': { name: '南方中证500ETF', nav: 5.68, navDate: '2026-04-30', price: 5.65, change: -0.72, scale: '520亿', manager: '罗文杰', tracking: '中证500' },
        '006546': { name: '兴银中短债C', nav: 1.05, navDate: '2026-04-30', price: 1.05, change: 0.01, scale: '128亿', manager: '钟宁瑶', tracking: '中短债指数' },
        '110017': { name: '易方达增强回报债券A', nav: 1.32, navDate: '2026-04-30', price: 1.32, change: 0.02, scale: '95亿', manager: '王晓晨', tracking: '中债综合指数' }
    }
};

// 导出到全局
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SAMPLE_DATA, DATA_UPDATE_TIME };
}
