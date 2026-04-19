// ==================== 2026年4月基金数据 ====================
// 数据更新时间：2026年4月19日

const SAMPLE_DATA = {
    // 今日日期
    today: '2026-04-19',
    
    // 早间报告
    morningReport: {
        time: '08:30',
        fundFlowSummary: {
            mainInflow: -557.47,      // 亿元（4月15日数据）
            mainPercent: -3.2,
            retailInflow: 85.3,
            retailPercent: 2.1,
            transaction: 9256.8,     // 亿元
            transactionChange: 8.5
        },
        recommendedFunds: [
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                change: 27.0,
                reason: '近一年涨幅27%，大盘蓝筹底仓配置首选'
            },
            {
                code: '515080',
                name: '富国中证红利ETF',
                change: 12.0,
                reason: '股息率4%+，抗跌性强，稳健收益来源'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                change: 5.5,
                reason: '固收+产品，收益稳波动小，近7天盈利'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                change: 3.8,
                reason: '中短债基金，年化3-4%，极低风险'
            },
            {
                code: '012100',
                name: '华夏稳健增利4个月债券C',
                change: 2.02,
                reason: '过去一年增长2.02%，纯债稳健之选'
            }
        ],
        riskWarning: [
            '4月15日主力资金净流出557亿，市场避险情绪升温',
            '电子、通信板块资金流出较大，短期回避',
            '高估值科技股回调风险增加，注意仓位控制'
        ],
        operationAdvice: [
            '稳健型配置建议：债券类50% + 红利ETF 30% + 沪深300 20%',
            '当前市场震荡，优先选择红利ETF和债券基金',
            '避免追高热门板块，逢低分批布局',
            '保持5-6成仓位，留有现金应对波动'
        ]
    },
    
    // 午后报告
    afternoonReport: {
        time: '14:15',
        review: '午后市场延续震荡格局，主力资金持续流出但幅度收窄。电子、通信板块承压，而高股息红利板块表现相对抗跌。北向资金午后小幅回流，市场情绪谨慎观望。建议稳健型投资者以债券和红利ETF为主，控制仓位。',
        sectorRotation: [
            { sector: '红利板块', change: 0.8, status: '抗跌' },
            { sector: '债券', change: 0.3, status: '稳健' },
            { sector: '半导体', change: -2.5, status: '回调' },
            { sector: '电子', change: -3.2, status: '领跌' },
            { sector: '通信', change: -2.8, status: '走弱' }
        ],
        outlook: '短期市场波动加大，建议稳健型投资者继续持有债券和红利类资产。关注月底政治局会议政策信号，如市场进一步回调可考虑分批加仓沪深300ETF。'
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: {
            value: -557.47,
            change: -3.2,
            unit: '亿元'
        },
        northFund: {
            value: -28.56,
            change: -8.5,
            unit: '亿元'
        },
        southFund: {
            value: -15.32,
            change: -3.2,
            unit: '亿元'
        },
        mainFundHistory: [
            { date: '2026-04-15', value: -557.47 },
            { date: '2026-04-14', value: -325.8 },
            { date: '2026-04-13', value: -198.5 },
            { date: '2026-04-12', value: 156.7 },
            { date: '2026-04-11', value: 245.3 }
        ],
        northFundHistory: [
            { date: '2026-04-15', value: -28.56 },
            { date: '2026-04-14', value: -15.2 },
            { date: '2026-04-13', value: 32.4 },
            { date: '2026-04-12', value: 56.8 },
            { date: '2026-04-11', value: 78.5 }
        ],
        sectorFunds: [
            { sector: '电子', change: -174.26 },
            { sector: '通信', change: -103.56 },
            { sector: '电力设备', change: -60.25 },
            { sector: '红利板块', change: 25.8 },
            { sector: '银行', change: 18.5 },
            { sector: '债券', change: 12.3 }
        ]
    },
    
    // 基金/股票搜索数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            code: '510300',
            type: 'fund',
            price: 4.85,
            change: 27.0,
            dayChange: 0.5,
            weekChange: 2.8,
            monthChange: 5.6,
            yearChange: 27.0,
            nav: 4.82,
            navDate: '2026-04-18',
            manager: '华泰柏瑞基金',
            size: '2080亿',
            description: '跟踪沪深300指数，覆盖A股市场规模最大、经营最稳定的300家龙头企业，适合作为投资底仓。'
        },
        '515080': {
            name: '富国中证红利ETF',
            code: '515080',
            type: 'fund',
            price: 3.25,
            change: 12.0,
            dayChange: 0.3,
            weekChange: 1.5,
            monthChange: 3.2,
            yearChange: 12.0,
            nav: 3.22,
            navDate: '2026-04-18',
            manager: '富国基金',
            size: '156亿',
            description: '跟踪中证红利指数，选取分红稳定、股息率高的100家企业，股息率稳定在4%以上，适合稳健投资。'
        },
        '110017': {
            name: '易方达增强回报债券A',
            code: '110017',
            type: 'fund',
            price: 1.5826,
            change: 5.5,
            dayChange: 0.05,
            weekChange: 0.2,
            monthChange: 0.8,
            yearChange: 5.5,
            nav: 1.5826,
            navDate: '2026-04-18',
            manager: '易方达基金',
            size: '89亿',
            description: '固收+产品，80%以上投资债券，少量股票/可转债增强收益，波动可控，适合稳健型投资者。'
        },
        '006546': {
            name: '兴银中短债C',
            code: '006546',
            type: 'fund',
            price: 1.1235,
            change: 3.8,
            dayChange: 0.02,
            weekChange: 0.1,
            monthChange: 0.3,
            yearChange: 3.8,
            nav: 1.1235,
            navDate: '2026-04-18',
            manager: '兴银基金',
            size: '45亿',
            description: '中短债基金，投资于短期债券，波动极小，年化收益3-4%，持有3-6个月风险极低。'
        },
        '012100': {
            name: '华夏稳健增利4个月债券C',
            code: '012100',
            type: 'fund',
            price: 1.1278,
            change: 2.02,
            dayChange: 0.07,
            weekChange: 0.15,
            monthChange: 0.33,
            yearChange: 2.02,
            nav: 1.1278,
            navDate: '2026-04-18',
            manager: '华夏基金',
            size: '113亿',
            description: '纯债基金，严格控制风险，追求长期稳健增值，过去三年增长7.48%。'
        }
    },
    
    stockData: {
        '600036': {
            name: '招商银行',
            code: '600036',
            type: 'stock',
            price: 38.50,
            change: 0.85,
            changePercent: 2.26,
            open: 37.80,
            high: 38.85,
            low: 37.65,
            volume: 45678200,
            amount: 17.5,
            pe: 7.2,
            pb: 1.15,
            marketCap: 9856,
            weekChange: 3.5,
            monthChange: 6.8,
            yearChange: 15.2,
            description: '银行龙头，高股息蓝筹股，适合稳健投资'
        },
        '000858': {
            name: '五粮液',
            code: '000858',
            type: 'stock',
            price: 175.80,
            change: 2.50,
            changePercent: 1.44,
            open: 173.50,
            high: 176.90,
            low: 172.80,
            volume: 18564200,
            amount: 32.5,
            pe: 25.8,
            pb: 6.2,
            marketCap: 6820,
            weekChange: 4.8,
            monthChange: 9.2,
            yearChange: 18.5,
            description: '白酒龙头，消费白马股'
        }
    },
    
    // 自选列表
    watchlist: [
        { code: '510300', name: '华泰柏瑞沪深300ETF', type: 'fund', price: 4.85, change: 27.0, monthChange: 5.6 },
        { code: '515080', name: '富国中证红利ETF', type: 'fund', price: 3.25, change: 12.0, monthChange: 3.2 },
        { code: '110017', name: '易方达增强回报债券A', type: 'fund', price: 1.5826, change: 5.5, monthChange: 0.8 },
        { code: '006546', name: '兴银中短债C', type: 'fund', price: 1.1235, change: 3.8, monthChange: 0.3 }
    ],
    
    // 历史报告
    historyReports: [
        {
            date: '2026-04-18',
            morning: {
                summary: '市场延续震荡，主力资金持续流出，但红利板块表现抗跌。建议稳健投资者关注债券和红利ETF。'
            },
            afternoon: {
                summary: '午后市场企稳，北向资金小幅回流。电子、通信板块承压，红利板块逆势走强。'
            },
            tags: ['震荡', '红利抗跌', '资金流出']
        },
        {
            date: '2026-04-17',
            morning: {
                summary: '受外围市场影响，A股低开震荡。主力资金流出557亿，市场避险情绪升温。'
            },
            afternoon: {
                summary: '午后跌幅收窄，银行板块护盘。稳健型基金表现优于市场平均。'
            },
            tags: ['低开', '避险', '银行护盘']
        },
        {
            date: '2026-04-16',
            morning: {
                summary: '市场小幅高开，科技股活跃。北向资金持续流入，沪深300表现稳健。'
            },
            afternoon: {
                summary: '午后市场维持强势，创业板指表现突出。半导体板块领涨，成交额放大。'
            },
            tags: ['科技股', '北向资金', '成交放大']
        },
        {
            date: '2026-04-15',
            morning: {
                summary: '市场开盘平稳，关注月底政策信号。红利板块持续表现稳健。'
            },
            afternoon: {
                summary: '午后市场震荡加剧，资金避险情绪升温。债券基金受到关注。'
            },
            tags: ['政策预期', '红利稳健', '避险']
        },
        {
            date: '2026-04-14',
            morning: {
                summary: '新周开盘，市场情绪谨慎。主力资金观望，等待方向选择。'
            },
            afternoon: {
                summary: '午后市场企稳回升，尾盘跌幅收窄。建议保持稳健配置。'
            },
            tags: ['观望', '稳健配置', '企稳']
        }
    ]
};
