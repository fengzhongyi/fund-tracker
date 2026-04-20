// ==================== 数据更新时间 ====================
// 由日程任务填充
const DATA_UPDATE_TIME = '2026-04-20 13:35:00';

// ==================== 数据来源配置 ====================
const DATA_SOURCES = {
    // 资金流向数据来源
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
    // 基金数据来源
    fund: {
        name: '天天基金网',
        url: 'https://fund.eastmoney.com/',
        description: '提供基金净值、历史数据查询'
    },
    // 股票数据来源
    stock: {
        name: '东方财富网 - 行情中心',
        url: 'https://quote.eastmoney.com/',
        description: '提供沪深港美股票实时行情数据'
    },
    // 新闻数据来源
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
    // 板块数据来源
    sector: {
        name: '东方财富网 - 板块中心',
        url: 'https://quote.eastmoney.com/center/boardlist.html',
        description: '提供行业板块和概念板块资金流向'
    },
    // K线数据来源
    kline: {
        name: '东方财富网 - K线数据',
        url: 'https://quotes.money.163.com/trade/lsjysj_zhongguo.html',
        description: '提供股票和指数的历史K线数据'
    }
};

// ==================== 2026年法定节假日 ====================
const HOLIDAYS_2026 = [
    '2026-01-01', '2026-01-02', '2026-01-03',  // 元旦
    '2026-02-17', '2026-02-18', '2026-02-19', '2026-02-20', '2026-02-21', '2026-02-22', '2026-02-23', '2026-02-24',  // 春节
    '2026-04-04', '2026-04-05', '2026-04-06',  // 清明节
    '2026-05-01', '2026-05-02', '2026-05-03',  // 劳动节
    '2026-06-20', '2026-06-21', '2026-06-22',  // 端午节
    '2026-09-27', '2026-09-28',  // 中秋节（调休）
    '2026-10-01', '2026-10-02', '2026-10-03', '2026-10-04', '2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09',  // 国庆节
    '2026-10-10'  // 国庆节调休
];

// ==================== 板块数据模板 ====================
// 由日程任务从真实来源获取并填充
const SECTOR_DATA = {
    // 2026-04-20 午间数据
    inflowSectors: [
        { name: '电子', flow: '主力净流入', amount: '65亿+' },
        { name: '国防军工', flow: '主力净流入', amount: '30亿+' },
        { name: '计算机', flow: '主力净流入', amount: '20亿+' },
        { name: '通信', flow: '主力净流入', amount: '15亿+' }
    ],
    outflowSectors: [
        { name: '医药生物', flow: '主力净流出', amount: '-24亿' },
        { name: '房地产', flow: '主力净流出', amount: '-10亿-' },
        { name: '农林牧渔', flow: '主力净流出', amount: '-5亿' },
        { name: '基础化工', flow: '主力净流出', amount: '-8亿' }
    ]
};

// ==================== 资金流向分析数据模板 ====================
// 由日程任务填充
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: {
        summary: '4月20日午盘，主力资金整体呈净流出态势，半日净流出89.02亿元（上证净流出62.06亿元，深证净流出26.96亿元）。资金主要流向电子、国防军工、计算机等科技成长赛道，从医药生物、房地产等防御板块出逃。',
        trend: '资金高低切换特征显著，从防御板块向高弹性成长赛道集中。',
        highlight: 'CPO/光模块概念获主力资金持续净流入超65亿元，商业航天板块资金流入明显。'
    },
    northFundAnalysis: {
        summary: '北向资金半日净流入143亿元，其中深股通净买入115亿元，主攻科技成长方向。由前期净流出转为净流入，显示外资对A股科技板块信心回升。',
        trend: '连续6日净流入趋势延续，外资持续看好A股核心资产。',
        highlight: '偏好科技成长与核心蓝筹，对消费权重态度中性偏积极。'
    },
    sectorRotation: {
        rising: ['商业航天', '卫星导航', '光模块/CPO', '液冷服务器', '半导体', '国防军工', '超硬材料'],
        falling: ['医药生物', '基础化工', '电力设备', '房地产开发', '锂电池']
    },
    operationAdvice: {
        aggressive: '关注AI算力/CPO/光模块核心标的，逢低布局科技成长主线，注意控制仓位不盲目追高。',
        conservative: '配置高股息蓝筹作为防御底仓，等待医药、地产等弱势板块止跌信号。'
    }
};

// ==================== 每日重大新闻模板 ====================
// 由日程任务从真实来源获取并填充
// 格式: { title, source, sourceUrl, time, summary, impact }
const DAILY_NEWS = [
    {
        title: '4月LPR报价出炉：1年期3.0%、5年期以上3.5%',
        source: '央视新闻',
        sourceUrl: 'http://m.toutiao.com/group/7630643167167119891/',
        time: '09:12',
        summary: '中国人民银行授权全国银行间同业拆借中心公布，2026年4月贷款市场报价利率(LPR)为：1年期LPR为3.0%，5年期以上LPR为3.5%，连续11个月维持不变。银行净息差处于历史低位1.42%，下调动力不足。',
        impact: '中性'
    },
    {
        title: '国家发改委下达第二批"两重"建设项目清单，安排超长期特别国债资金2168亿元',
        source: '时政要闻',
        sourceUrl: 'http://m.toutiao.com/group/7630627709316399651/',
        time: '08:00',
        summary: '国家发展改革委会同有关部门组织下达2026年第二批"两重"建设项目清单，安排超长期特别国债资金2168亿元，涉及人工智能、城市地下管网建设改造、长江经济带交通基础设施、高标准农田、高等教育提质升级、"三北"工程等重点领域。',
        impact: '利好'
    },
    {
        title: '证监会发布再融资新规，万亿长线资金入市通道打开',
        source: '财经要闻',
        sourceUrl: 'http://m.toutiao.com/group/7630459741873717775/',
        time: '21:30',
        summary: '证监会深夜发布《证券期货法律适用意见第18号》，将社保、养老金、保险资金、公募基金等正式纳入战略投资者范围，打开万亿级增量资金入市通道。新规落地后，有望为A股装上"压舱石"，减少暴涨暴跌，利好慢牛格局。',
        impact: '利好'
    },
    {
        title: '东部战区组织舰艇编队赴西太平洋开展演训活动',
        source: '央视新闻',
        sourceUrl: 'http://m.toutiao.com/group/7630609549766722075/',
        time: '07:00',
        summary: '中国人民解放军东部战区组织133号舰艇编队过航横当水道，赴西太平洋海域开展演训活动，检验部队远海作战能力。发言人强调此次训练是年度例行性计划，符合相关国际法和国际实践。',
        impact: '中性'
    },
    {
        title: '人形机器人半马"闪电"夺冠，净用时50分26秒超越人类纪录',
        source: '央视新闻',
        sourceUrl: 'http://m.toutiao.com/group/7630609549766722075/',
        time: '07:00',
        summary: '2026人形机器人半程马拉松在北京鸣枪开跑，来自荣耀的齐天大圣队"闪电"机器人夺得冠军，净用时50分26秒，超越57分20秒的人类男子半马世界纪录。',
        impact: '利好'
    },
    {
        title: '一季度GDP同比增长5.0%，高技术制造业增加值增9.8%',
        source: '宏观分析',
        sourceUrl: 'http://m.toutiao.com/group/7630671690409722408/',
        time: '11:00',
        summary: '一季度经济数据"质效双升"：GDP同比增长5.0%(超预期0.2pct)，高技术制造业增加值增9.8%，新能源汽车/太阳能电池产量增35%/42%，服务业对增长贡献率68%。新质生产力成为核心引擎，为A股提供基本面底座。',
        impact: '利好'
    },
    {
        title: '一季度社融增量13.5万亿元，M2增速9.5%',
        source: '宏观分析',
        sourceUrl: 'http://m.toutiao.com/group/7630671690409722408/',
        time: '11:00',
        summary: '金融对实体经济支持力度稳固，一季度社融增量13.5万亿元（同比多增1.28万亿元），M2增速9.5%，普惠小微贷款余额增26%。资金向民营经济、普惠领域倾斜，利好中小市值龙头与民营科技企业。',
        impact: '利好'
    },
    {
        title: '创业板改革深化，新增第四套上市标准聚焦高成长创新型企业',
        source: '财经要闻',
        sourceUrl: 'http://m.toutiao.com/group/7630671690409722408/',
        time: '11:00',
        summary: '证监会发布《关于深化创业板改革更好服务新质生产力发展的意见》，新增第四套上市标准，聚焦高成长创新型企业。降低科创企业上市门槛，加速技术成果转化，利好创业板成长股。',
        impact: '利好'
    }
];

// ==================== 主数据模板 ====================
// 由日程任务填充所有数据
const SAMPLE_DATA = {
    // 今日日期 - 由日程任务设置
    today: '2026-04-20',
    
    // 是否交易日
    isTradingDay: true,
    
    // 数据加载状态
    loadingStatus: 'loaded',
    
    // 早间报告
    morningReport: {
        time: '09:30',
        indexPerformance: {
            shangzhi: { value: 4053.37, change: '+0.05%' },
            shengzheng: { value: 14900.45, change: '-0.10%' },
            chuangye: { value: 3679.88, change: '-0.57%' },
            zhuanke50: { value: 1445.67, change: '+1.64%' }
        },
        fundFlowSummary: {
            mainInflow: '85亿+',
            northInflow: '42亿+',
            marketSentiment: '谨慎偏多',
            tradingVolume: '较昨日同期放量'
        },
        recommendedFunds: [
            {
                code: '588000',
                name: '科创50ETF华夏',
                type: '激进型',
                change: '+1.64%',
                reason: '科创50今日大涨1.64%领跑，科技成长板块受政策催化和技术突破双重驱动。存储芯片行业供不应求格局将持续至2027年，CPO/光模块赛道资金流入持续较强，业绩高增确定性高。AI算力需求爆发支撑科技板块估值，半导体国产替代加速推进，建议关注回调后的布局机会。'
            },
            {
                code: '515080',
                name: '中证红利ETF招商',
                type: '稳健型',
                change: '-0.66%',
                reason: '红利策略在震荡市中提供稳健收益，高股息资产具备防御价值。虽然今日微跌，但近一年涨幅10.87%，成立以来涨幅109.51%，年化分红稳定，适合作为组合的压舱石配置。银行净息差低位运行下降空间有限，红利策略超额收益有望延续。'
            },
            {
                code: '510300',
                name: '沪深300ETF华泰柏瑞',
                type: '配置型',
                change: '+0.44%',
                reason: '今日午盘涨0.44%，沪指站上60日均线，技术面中期趋势转强。沪深300代表A股核心资产，险资权益投资上限从30%提至35%释放约5000亿增量资金，长期资金入市利好大盘蓝筹。一季度经济数据超预期，基本面支撑A股震荡上行。'
            }
        ],
        hotSectors: {
            rising: [
                { name: '超硬材料', reason: '液冷散热方案革新，金刚石铜导热材料规模化应用，系统导热率提升80%' },
                { name: 'BC电池', reason: '光伏技术迭代代表，宁德时代一季度业绩超预期，北京车展临近提振板块情绪' },
                { name: '云计算/液冷服务器', reason: '阿里云、腾讯云算力服务涨价，算力需求旺盛推动，液冷散热成必然趋势' },
                { name: '特高压', reason: '"十五五"电网建设加速，攀西特高压、藏粤直流等项目落地，中国西电首批中标73.88亿' },
                { name: '商业航天', reason: '国家航天局发布重大任务，天问二号接近目标小行星，载人航天工程神舟二十三号等任务推进' }
            ],
            falling: [
                { name: '锂电池', reason: '前期涨幅较快，获利盘兑现压力上升，部分企业一季报业绩不及预期' },
                { name: '医药生物', reason: '半日净流出超24亿元，板块领跌，年报一季报业绩不及预期，资金避险撤离' },
                { name: 'AI应用', reason: '短期涨幅透支估值，资金高低切换，部分高位题材股回调压力较大' }
            ]
        }
    },
    
    // 激进型推荐基金
    aggressiveFunds: [
        {
            code: '588000',
            name: '科创50ETF华夏',
            change: '+1.64%',
            nav: 1.4997,
            weekChange: '+5.16%',
            monthChange: '+5.16%',
            yearChange: '+40.59%',
            reason: '科创50今日大涨1.64%领跑，科技成长板块受政策催化和技术突破双重驱动。存储芯片行业供不应求格局将持续至2027年，CPO/光模块赛道资金流入持续较强。AI算力需求爆发支撑科技板块估值，半导体国产替代加速推进。',
            riskLevel: '高',
            recommendedWeight: '20-30%'
        }
    ],
    
    // 午后报告
    afternoonReport: {
        time: '13:30',
        indexPerformance: {
            shangzhi: { value: 4078.39, change: '+0.67%' },
            shengzheng: { value: 14974.78, change: '+0.60%' },
            chuangye: { value: 3679.88, change: '+0.04%' },
            zhuanke50: { value: 1460.82, change: '+1.82%' }
        },
        marketAnalysis: {
            volume: '1.71万亿（半日）',
            stockRatio: '3304:1994（涨:跌）',
            sentiment: '赚钱效应扩散，市场情绪显著回暖',
           涨停: '68家',
            跌停: '3家'
        },
        fundFlowUpdate: {
            northFund: '半日净流入143亿元',
            mainFund: '主力净流出89.02亿元',
            trend: '北向资金由净流出转为净流入，科技成长与国防军工获逆势加仓'
        },
        afternoonOutlook: {
            prediction: '大概率维持强势震荡、主线轮动格局',
            keyPoints: [
                '关注量能能否维持1.7万亿以上',
                '北向资金净流入能否延续至收盘',
                'CPO/光模块与国防军工板块资金承接力度',
                '个股涨跌比能否维持在3000:2000以上'
            ],
            riskPoints: [
                '沪指逼近4100点压力位，冲高空间有限',
                '早盘情绪一致，缩量后尾盘或有获利盘兑现',
                '科技高位股谨慎接力，关注医药止跌信号'
            ]
        }
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: {
            value: -89.02,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -62.06,
            shengzheng: -26.96,
            trend: '科技成长与国防军工获逆势加仓'
        },
        northFund: {
            value: 143,
            unit: '亿元',
            direction: '净流入',
            shengutong: 115,
            hushenutong: 28,
            trend: '主攻科技成长，外资回流明显'
        },
        sectorFunds: [
            { name: 'CPO/光模块', flow: 65, direction: '净流入', note: '延续高景气' },
            { name: '电子', flow: 30, direction: '净流入', note: '立讯精密、浪潮信息获大单扫货' },
            { name: '国防军工', flow: 28, direction: '净流入', note: '中国卫星涨停' },
            { name: '计算机', flow: 20, direction: '净流入', note: 'AI算力概念持续' },
            { name: '通信', flow: 15, direction: '净流入', note: '光通信/算力驱动' },
            { name: '医药生物', flow: -24, direction: '净流出', note: '资金避险撤离' },
            { name: '房地产', flow: -10, direction: '净流出', note: '持续承压' },
            { name: '农林牧渔', flow: -5, direction: '净流出', note: '弱势板块' }
        ],
        topStocks: {
            inflow: [
                { name: '立讯精密', amount: '22.19亿' },
                { name: '中国卫星', amount: '14.09亿' },
                { name: '中天科技', amount: '13.60亿' },
                { name: '浪潮信息', amount: '12.39亿' },
                { name: '英维克', amount: '11.13亿' }
            ],
            outflow: [
                { name: '新易盛', amount: '-8.87亿' },
                { name: '长光华芯', amount: '-6.43亿' },
                { name: '太辰光', amount: '-5.58亿' }
            ]
        }
    },
    
    // 基金数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.76,
            change: '+0.44%',
            changeValue: 0.02,
            nav: 4.7393,
            navDate: '2026-04-17',
            volume: '3178695手',
            amount: '15.12亿',
            manager: '柳军',
            scale: '4222.58亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            klineData: [
                { date: '2026-04-14', open: 4.65, close: 4.71, high: 4.72, low: 4.64 },
                { date: '2026-04-13', open: 4.61, close: 4.65, high: 4.66, low: 4.61 },
                { date: '2026-04-10', open: 4.59, close: 4.64, high: 4.65, low: 4.58 },
                { date: '2026-04-09', open: 4.58, close: 4.57, high: 4.59, low: 4.56 },
                { date: '2026-04-08', open: 4.52, close: 4.60, high: 4.60, low: 4.52 },
                { date: '2026-04-07', open: 4.45, close: 4.45, high: 4.47, low: 4.44 },
                { date: '2026-04-03', open: 4.45, close: 4.45, high: 4.46, low: 4.44 },
                { date: '2026-04-01', open: 4.53, close: 4.53, high: 4.54, low: 4.52 },
                { date: '2026-03-31', open: 4.46, close: 4.46, high: 4.47, low: 4.45 },
                { date: '2026-03-30', open: 4.50, close: 4.50, high: 4.51, low: 4.49 },
                { date: '2026-03-27', open: 4.51, close: 4.51, high: 4.52, low: 4.50 },
                { date: '2026-03-26', open: 4.49, close: 4.49, high: 4.50, low: 4.48 },
                { date: '2026-03-25', open: 4.54, close: 4.54, high: 4.55, low: 4.53 },
                { date: '2026-03-24', open: 4.48, close: 4.48, high: 4.49, low: 4.47 },
                { date: '2026-03-23', open: 4.43, close: 4.43, high: 4.44, low: 4.42 },
                { date: '2026-03-20', open: 4.58, close: 4.58, high: 4.59, low: 4.57 },
                { date: '2026-03-19', open: 4.60, close: 4.60, high: 4.61, low: 4.59 },
                { date: '2026-03-18', open: 4.60, close: 4.60, high: 4.61, low: 4.59 },
                { date: '2026-03-17', open: 4.57, close: 4.57, high: 4.58, low: 4.56 },
                { date: '2026-03-16', open: 4.68, close: 4.68, high: 4.69, low: 4.67 },
                { date: '2026-03-13', open: 4.71, close: 4.71, high: 4.72, low: 4.70 },
                { date: '2026-03-11', open: 4.73, close: 4.73, high: 4.74, low: 4.72 },
                { date: '2026-03-10', open: 4.68, close: 4.68, high: 4.69, low: 4.67 },
                { date: '2026-03-09', open: 4.67, close: 4.67, high: 4.68, low: 4.66 },
                { date: '2026-03-06', open: 4.68, close: 4.68, high: 4.69, low: 4.67 },
                { date: '2026-03-05', open: 4.70, close: 4.70, high: 4.71, low: 4.69 },
                { date: '2026-03-04', open: 4.69, close: 4.69, high: 4.70, low: 4.68 },
                { date: '2026-03-03', open: 4.66, close: 4.66, high: 4.67, low: 4.65 },
                { date: '2026-03-02', open: 4.60, close: 4.60, high: 4.61, low: 4.59 },
                { date: '2026-02-27', open: 4.58, close: 4.58, high: 4.59, low: 4.57 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 4.7393 },
                { date: '2026-04-14', value: 4.7111 },
                { date: '2026-04-13', value: 4.6560 },
                { date: '2026-04-10', value: 4.6466 },
                { date: '2026-04-09', value: 4.5758 },
                { date: '2026-04-08', value: 4.6054 },
                { date: '2026-04-07', value: 4.4498 },
                { date: '2026-04-03', value: 4.4499 },
                { date: '2026-04-01', value: 4.5355 },
                { date: '2026-03-31', value: 4.4595 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 1.499,
            change: '+0.07%',
            changeValue: 0.001,
            nav: 1.4997,
            navDate: '2026-04-17',
            volume: '197万手',
            amount: '约39亿（日均）',
            manager: '荣膺',
            scale: '760.22亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            klineData: [
                { date: '2026-04-17', open: 1.492, close: 1.499, high: 1.510, low: 1.489 },
                { date: '2026-04-16', open: 1.485, close: 1.498, high: 1.501, low: 1.477 },
                { date: '2026-04-15', open: 1.491, close: 1.482, high: 1.509, low: 1.474 },
                { date: '2026-04-14', open: 1.473, close: 1.479, high: 1.484, low: 1.461 },
                { date: '2026-04-13', open: 1.428, close: 1.448, high: 1.470, low: 1.424 },
                { date: '2026-04-10', open: 1.434, close: 1.437, high: 1.457, low: 1.434 },
                { date: '2026-04-09', open: 1.408, close: 1.415, high: 1.435, low: 1.403 },
                { date: '2026-04-08', open: 1.385, close: 1.425, high: 1.425, low: 1.385 },
                { date: '2026-04-07', open: 1.34, close: 1.34, high: 1.35, low: 1.33 },
                { date: '2026-04-01', open: 1.354, close: 1.369, high: 1.372, low: 1.350 },
                { date: '2026-03-31', open: 1.356, close: 1.324, high: 1.366, low: 1.322 },
                { date: '2026-03-30', open: 1.347, close: 1.359, high: 1.364, low: 1.342 },
                { date: '2026-03-27', open: 1.38, close: 1.37, high: 1.38, low: 1.37 },
                { date: '2026-03-26', open: 1.383, close: 1.357, high: 1.386, low: 1.353 },
                { date: '2026-03-25', open: 1.363, close: 1.385, high: 1.397, low: 1.362 },
                { date: '2026-03-24', open: 1.345, close: 1.359, high: 1.360, low: 1.316 },
                { date: '2026-03-23', open: 1.33, close: 1.329, high: 1.34, low: 1.32 },
                { date: '2026-03-20', open: 1.39, close: 1.388, high: 1.39, low: 1.38 },
                { date: '2026-03-19', open: 1.41, close: 1.411, high: 1.42, low: 1.40 },
                { date: '2026-03-18', open: 1.45, close: 1.445, high: 1.46, low: 1.44 },
                { date: '2026-03-17', open: 1.43, close: 1.428, high: 1.44, low: 1.42 },
                { date: '2026-03-16', open: 1.46, close: 1.458, high: 1.47, low: 1.45 },
                { date: '2026-03-13', open: 1.45, close: 1.450, high: 1.46, low: 1.44 },
                { date: '2026-03-11', open: 1.48, close: 1.477, high: 1.49, low: 1.47 },
                { date: '2026-03-09', open: 1.47, close: 1.465, high: 1.48, low: 1.46 },
                { date: '2026-03-06', open: 1.49, close: 1.49, high: 1.50, low: 1.48 },
                { date: '2026-03-05', open: 1.50, close: 1.50, high: 1.51, low: 1.49 },
                { date: '2026-03-04', open: 1.49, close: 1.49, high: 1.50, low: 1.48 },
                { date: '2026-03-03', open: 1.48, close: 1.48, high: 1.49, low: 1.47 },
                { date: '2026-03-02', open: 1.54, close: 1.544, high: 1.55, low: 1.53 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 1.4997 },
                { date: '2026-04-14', value: 1.4787 },
                { date: '2026-04-13', value: 1.4476 },
                { date: '2026-04-10', value: 1.4365 },
                { date: '2026-04-09', value: 1.4151 },
                { date: '2026-04-08', value: 1.4251 },
                { date: '2026-04-07', value: 1.3392 },
                { date: '2026-04-03', value: 1.3361 },
                { date: '2026-04-01', value: 1.3676 },
                { date: '2026-03-31', value: 1.3236 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.59,
            change: '-0.19%',
            changeValue: 0.00,
            nav: 1.5902,
            navDate: '2026-04-17',
            volume: '474200手',
            amount: '7545.28万',
            manager: '王平、刘重杰',
            scale: '86.81亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            weekChange: '-2.91%',
            monthChange: '-2.91%',
            yearChange: '+10.87%',
            threeYearChange: '+21.90%',
            klineData: [
                { date: '2026-04-17', open: 1.60, close: 1.59, high: 1.60, low: 1.59 },
                { date: '2026-04-16', open: 1.60, close: 1.60, high: 1.61, low: 1.59 },
                { date: '2026-04-15', open: 1.59, close: 1.60, high: 1.60, low: 1.58 },
                { date: '2026-04-14', open: 1.58, close: 1.59, high: 1.60, low: 1.58 },
                { date: '2026-04-13', open: 1.59, close: 1.58, high: 1.59, low: 1.57 },
                { date: '2026-04-10', open: 1.59, close: 1.59, high: 1.60, low: 1.58 },
                { date: '2026-04-09', open: 1.60, close: 1.59, high: 1.61, low: 1.59 },
                { date: '2026-04-08', open: 1.59, close: 1.60, high: 1.61, low: 1.59 },
                { date: '2026-04-07', open: 1.58, close: 1.59, high: 1.59, low: 1.58 },
                { date: '2026-04-03', open: 1.60, close: 1.58, high: 1.60, low: 1.58 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 1.5902 },
                { date: '2026-04-16', value: 1.6008 },
                { date: '2026-04-15', value: 1.5744 },
                { date: '2026-04-14', value: 1.5823 },
                { date: '2026-04-13', value: 1.5587 },
                { date: '2026-04-10', value: 1.5588 },
                { date: '2026-04-09', value: 1.5450 },
                { date: '2026-04-08', value: 1.5545 },
                { date: '2026-04-07', value: 1.4807 },
                { date: '2026-04-03', value: 1.4739 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 8.31,
            change: '+0.22%',
            changeValue: 0.02,
            nav: 8.2884,
            navDate: '2026-04-17',
            volume: '329689手',
            amount: '2.73亿',
            manager: '罗文杰',
            scale: '1446.90亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            weekChange: '+2.55%',
            monthChange: '+2.55%',
            yearChange: '+50.39%',
            threeYearChange: '+33.09%',
            klineData: [
                { date: '2026-04-17', open: 8.25, close: 8.29, high: 8.32, low: 8.25 },
                { date: '2026-04-16', open: 8.12, close: 8.25, high: 8.29, low: 8.12 },
                { date: '2026-04-15', open: 8.17, close: 8.12, high: 8.18, low: 8.11 },
                { date: '2026-04-14', open: 8.04, close: 8.16, high: 8.18, low: 8.04 },
                { date: '2026-04-13', open: 8.04, close: 8.04, high: 8.07, low: 8.02 },
                { date: '2026-04-10', open: 8.02, close: 8.04, high: 8.05, low: 8.00 },
                { date: '2026-04-09', open: 7.96, close: 7.96, high: 8.01, low: 7.91 },
                { date: '2026-04-08', open: 7.82, close: 8.03, high: 8.03, low: 7.82 },
                { date: '2026-04-07', open: 7.64, close: 7.63, high: 7.70, low: 7.60 },
                { date: '2026-04-03', open: 7.70, close: 7.60, high: 7.71, low: 7.58 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 8.2884 },
                { date: '2026-04-16', value: 8.2543 },
                { date: '2026-04-15', value: 8.1162 },
                { date: '2026-04-14', value: 8.1595 },
                { date: '2026-04-13', value: 8.0379 },
                { date: '2026-04-10', value: 8.0401 },
                { date: '2026-04-09', value: 7.9677 },
                { date: '2026-04-08', value: 8.0148 },
                { date: '2026-04-07', value: 7.6351 },
                { date: '2026-04-03', value: 7.5987 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.2434,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.2434,
            navDate: '2026-04-17',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            type: '债券型',
            riskLevel: 'R2中低风险',
            weekChange: '+0.06%',
            monthChange: '+0.32%',
            threeMonthChange: '+0.67%',
            yearChange: '+1.06%',
            threeYearChange: '+7.93%',
            navHistory: [
                { date: '2026-04-17', value: 1.2434 },
                { date: '2026-04-16', value: 1.2432 },
                { date: '2026-04-15', value: 1.2430 },
                { date: '2026-04-14', value: 1.2428 },
                { date: '2026-04-13', value: 1.2426 },
                { date: '2026-04-10', value: 1.2422 },
                { date: '2026-04-09', value: 1.2420 },
                { date: '2026-04-08', value: 1.2418 },
                { date: '2026-04-07', value: 1.2416 },
                { date: '2026-04-03', value: 1.2413 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.394,
            change: '0.00%',
            changeValue: 0,
            nav: 1.394,
            navDate: '2026-04-17',
            manager: '王晓晨',
            scale: '316.96亿',
            established: '2008-03-19',
            type: '债券型-混合一级',
            riskLevel: '中低风险',
            rating: '★★★★',
            weekChange: '-0.14%',
            monthChange: '-0.14%',
            threeMonthChange: '+0.42%',
            yearChange: '+5.32%',
            threeYearChange: '+15.71%',
            navHistory: [
                { date: '2026-04-17', value: 1.394 },
                { date: '2026-04-16', value: 1.394 },
                { date: '2026-04-15', value: 1.394 },
                { date: '2026-04-14', value: 1.393 },
                { date: '2026-04-13', value: 1.392 },
                { date: '2026-04-10', value: 1.393 },
                { date: '2026-04-09', value: 1.393 },
                { date: '2026-04-08', value: 1.395 },
                { date: '2026-04-07', value: 1.392 },
                { date: '2026-04-03', value: 1.391 }
            ]
        }
    },
    
    // 股票数据
    stockData: {
        // 暂无特定股票数据，保留空模板
    },
    
    // 历史报告列表
    historyReports: []
};

// ==================== K线数据模板 ====================
// 用于基金详情页日K线图
// 由日程任务从真实来源获取并填充
// 格式: { date, open, close, high, low, volume }
const KLINE_DATA = {
    // K线数据已集成到fundData中
};
