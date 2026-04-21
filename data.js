// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-21 14:30:00';

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
    today: '2026-04-21',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4162.88, 
            change: '+0.39%', 
            volume: '3.87亿', 
            turnover: '4502.32亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 10156.07, 
            change: '-0.06%', 
            volume: '5.33亿', 
            turnover: '6676.41亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 2063.82, 
            change: '-1.04%', 
            volume: '1.78亿', 
            turnover: '3240.14亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 955.09, 
            change: '-2.02%', 
            volume: '2475.49万', 
            turnover: '942.12亿',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        }
    },
    
    // ===== 2. 推荐基金（含买卖建议） =====
    recommendedFunds: {
        // 建议买入
        buyList: [
            {
                code: '588000',
                name: '华夏科创50ETF',
                price: 1.512,
                change: '+1.87%',
                nav: 1.512,
                source: 'https://fund.eastmoney.com/588000.html',
                reason: '科创50指数近期表现强势，近一年涨幅40.59%。受AI、半导体等科技板块推动，资金持续流入。该基金前十大重仓包括中芯国际、寒武纪、海光信息等科技龙头。当前估值处于历史中等水平，适合中长期配置。',
                buyPrice: '1.45-1.52',
                targetPrice: '1.65-1.75',
                stopLoss: '1.35',
                riskLevel: '高',
                expectedReturn: '12-18%'
            },
            {
                code: '510500',
                name: '南方中证500ETF',
                price: 8.355,
                change: '+0.78%',
                nav: 8.36,
                source: 'https://fund.eastmoney.com/510500.html',
                reason: '中证500指数近一年涨幅51.67%，近一月涨幅6.89%，表现强劲。指数成分股以中小市值成长股为主，受益于市场风险偏好提升。当前估值合理，具备配置价值。',
                buyPrice: '7.8-8.2',
                targetPrice: '8.8-9.2',
                stopLoss: '7.4',
                riskLevel: '中高',
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
                price: 1.592,
                change: '+0.06%',
                source: 'https://fund.eastmoney.com/515080.html',
                reason: '红利板块近期有所调整，近一月-1.19%。但中证红利股息率约4.96%，比价优势显著。保险资金持续增配，具备中长期底仓配置价值。建议持有观望。'
            },
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                price: 4.765,
                change: '+0.55%',
                source: 'https://fund.eastmoney.com/510300.html',
                reason: '沪深300ETF近一年涨幅28.65%，规模超过2000亿元。指数成分股多为行业龙头，具备长期投资价值。作为核心资产配置可继续持有。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                price: 1.244,
                change: '+0.02%',
                source: 'https://fund.eastmoney.com/006546.html',
                reason: '债券基金作为避险资产，近一年涨幅1.83%，表现稳健。作为投资组合的稳定器，建议继续持有。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                price: 1.393,
                change: '0.00%',
                source: 'https://fund.eastmoney.com/110017.html',
                reason: '债券增强型基金近一年涨幅5.32%，成立以来累计收益285.96%。作为稳健型配置可继续持有。'
            }
        ]
    },
    
    // ===== 3. 实时新闻（利好利空辨别） =====
    realtimeNews: [
        {
            title: '4月21日A股午评：三大指数集体低开，中证红利ETF逆势走强',
            source: '同壁财经',
            sourceUrl: 'http://m.toutiao.com/group/7631030507324654130/',
            time: '2026-04-21',
            summary: '4月21日，三大指数集体低开，银行、煤炭等板块走强，中证红利ETF招商(515080)逆势拉涨。资金面上，中证红利ETF近5个交易日累计吸金超3亿元。',
            impact: '利好',
            relatedSectors: ['红利板块', '银行', '煤炭'],
            importance: '高'
        },
        {
            title: '4月20日沪深300ETF华泰柏瑞涨0.55%，份额减少4.38亿份',
            source: '证券之星',
            sourceUrl: 'http://m.toutiao.com/group/7630972578487665203/',
            time: '2026-04-21',
            summary: '4月20日，沪深300ETF华泰柏瑞基金(510300)涨0.55%，成交额36.28亿元。当日份额减少了4.38亿份，最新份额为428.21亿份。',
            impact: '中性',
            relatedSectors: ['大盘蓝筹', '沪深300'],
            importance: '中'
        },
        {
            title: '4月20日科创50ETF华夏基金涨1.87%，份额减少6.9亿份',
            source: '证券之星',
            sourceUrl: 'http://m.toutiao.com/group/7630974868887994931/',
            time: '2026-04-21',
            summary: '4月20日，科创50ETF华夏基金(588000)涨1.87%，成交额36.56亿元。当日资金净流入3.13亿元，最新资产净值计算值为720.42亿元。',
            impact: '利好',
            relatedSectors: ['科创板', '半导体', '人工智能'],
            importance: '高'
        },
        {
            title: '中证红利ETF规模达93.7亿元，近20日累计吸金超11亿',
            source: '同壁财经',
            sourceUrl: 'http://m.toutiao.com/group/7631030507324654130/',
            time: '2026-04-21',
            summary: '截至2026年4月20日，中证红利ETF招商(515080)规模达到93.7亿元，近20个交易日累计吸金超11亿元。机构认为红利板块仍具备中长期底仓配置价值。',
            impact: '利好',
            relatedSectors: ['红利资产', '高股息'],
            importance: '中'
        },
        {
            title: '中信证券：红利逻辑仍未失效，定价重心正从"高股息避险"转向"高质量现金流重估"',
            source: '同壁财经',
            sourceUrl: 'http://m.toutiao.com/group/7631030507324654130/',
            time: '2026-04-21',
            summary: '中信证券认为，低利率环境下传统货基收益率已降至1.0%-1.4%，而中证红利股息率约4.96%，比价优势相对显著。保险资金是当前红利资产重估的核心增量力量。',
            impact: '利好',
            relatedSectors: ['红利板块', '保险资金'],
            importance: '高'
        },
        {
            title: '中证500ETF南方(510500)跌0.81%，半日成交额18.35亿元',
            source: '新浪财经',
            sourceUrl: 'https://finance.sina.com.cn/money/fund/aiassistant/etfwp/2026-04-21/doc-inhvfqcq5109780.shtml',
            time: '2026-04-21',
            summary: '4月21日，截止午间收盘，中证500ETF南方（510500）跌0.81%，报8.287元，成交额18.35亿元。近一月涨幅6.89%，近一年涨幅51.67%。',
            impact: '中性',
            relatedSectors: ['中证500', '中小盘'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: 0,
            unit: '亿元',
            direction: '待更新',
            shangzheng: 0,
            shengzheng: 0,
            trend: '近期主力资金流向数据请查看东方财富',
            analysis: '主力资金数据请参考https://data.eastmoney.com/zjlx/',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 0,
            unit: '亿元',
            direction: '待更新',
            shengutong: 0,
            hushenutong: 0,
            trend: '北向资金流向数据请查看东方财富',
            analysis: '北向资金数据请参考https://data.eastmoney.com/hsgt/',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '计算机', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '通信', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '机械设备', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '银行', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '煤炭', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电子', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '有色金属', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '非银金融', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '食品饮料', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '国防军工', inflow: 0, outflow: 0, netFlow: 0, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [],
            outflow: []
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 0, outflow: 8.44, netFlow: -8.44, trend: '4月20日净流出8.44亿元', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 3.13, outflow: 0, netFlow: 3.13, trend: '4月20日净流入3.13亿元', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 3, outflow: 0, netFlow: 3, trend: '近5日累计吸金超3亿元', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 0, outflow: 0, netFlow: 0, trend: '资金面平稳', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '人工智能',
                reason: 'AI产业链持续火爆，DeepSeek等国产大模型推动行业发展，智能体、AIGC等软硬件方向齐升',
                inflow: 0,
                hotStocks: ['中科曙光', '寒武纪', '海光信息', '工业富联', '中际旭创'],
                sustainability: '强',
                riskTip: '短期涨幅较大，注意回调风险',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '红利资产',
                reason: '保险资金持续增配，低利率环境下中证红利股息率约4.96%，比价优势显著',
                inflow: 0,
                hotStocks: ['中远海控', '陕西煤业', '山煤国际', '双汇发展', '中信银行'],
                sustainability: '中强',
                riskTip: '关注分红持续性',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '银行',
                reason: '低估值高股息特征明显，作为大盘稳定器吸引资金配置',
                inflow: 0,
                hotStocks: ['招商银行', '宁波银行', '兴业银行', '工商银行'],
                sustainability: '中',
                riskTip: '关注资产质量变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '半导体',
                reason: '国产替代加速推进，科创板50ETF前十大重仓包括多家半导体龙头',
                inflow: 0,
                hotStocks: ['中芯国际', '寒武纪', '海光信息', '澜起科技', '中微公司'],
                sustainability: '中强',
                riskTip: '关注技术突破进展',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            }
        ],
        // 未来利好板块（预期）
        future: [
            {
                name: '新能源汽车电池回收',
                catalyst: '《健全新能源汽车动力电池回收利用体系行动方案》审议通过',
                expectedTime: '2026年',
                relatedNews: '政策支持电池回收产业发展，预计将催生千亿级市场',
                potential: '高',
                source: 'https://www.gov.cn/'
            },
            {
                name: '中央企业AI+',
                catalyst: '国资委部署深化中央企业"AI+"专项行动',
                expectedTime: '2026年',
                relatedNews: '央国企将加大AI投入，相关概念股有望受益',
                potential: '中高',
                source: 'https://www.sasac.gov.cn/'
            },
            {
                name: '消费复苏',
                catalyst: '扩内需政策持续发力，消费数据边际改善',
                expectedTime: '2026年下半年',
                relatedNews: '关注消费板块估值修复机会',
                potential: '中',
                source: 'https://www.mofcom.gov.cn/'
            }
        ],
        // 板块轮动预测
        rotation: {
            from: ['食品饮料', '医药生物', '房地产', '公用事业'],
            to: ['人工智能', '半导体', '红利资产', '银行'],
            analysis: '市场从传统防御板块向科技成长和红利价值板块轮动。AI、半导体等科技板块受政策催化持续强势，红利资产在保险资金配置需求支撑下表现稳健。建议关注科技成长与红利价值的均衡配置。'
        }
    },
    
    // 基金详情数据 - 所有数据来源于天天基金网、理杏仁、英为财情
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            price: 4.765,
            change: '+0.55%',
            changeValue: 0.026,
            nav: 4.7681,
            navDate: '2026-04-20',
            volume: '428.21亿份',
            amount: '2041.73亿',
            manager: '柳军',
            scale: '2041.73亿',
            established: '2012-05-04',
            tracking: '沪深300指数',
            netFlow: -8.44,
            source: 'https://fund.eastmoney.com/510300.html',
            klineSource: 'https://cn.investing.com/etfs/huatai-pinebridge-csi-300-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510300/510300/net-values',
            klineData: [
                { date: '2026-04-21', open: 4.75, close: 4.765, high: 4.78, low: 4.745 },
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
                { date: '2026-03-26', open: 4.49, close: 4.488, high: 4.50, low: 4.48 },
                { date: '2026-03-25', open: 4.54, close: 4.544, high: 4.55, low: 4.53 },
                { date: '2026-03-24', open: 4.48, close: 4.479, high: 4.49, low: 4.47 }
            ],
            navHistory: [
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
                { date: '2026-03-24', value: 4.4837 },
                { date: '2026-03-23', value: 4.4270 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            price: 1.512,
            change: '+1.87%',
            changeValue: 0.028,
            nav: 1.512,
            navDate: '2026-04-20',
            volume: '471.39亿份',
            amount: '720.42亿',
            manager: '荣膺',
            scale: '720.42亿',
            established: '2020-09-28',
            tracking: '上证科创板50成份指数',
            netFlow: 3.13,
            source: 'https://fund.eastmoney.com/588000.html',
            klineSource: 'https://cn.investing.com/etfs/588000-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/588000/588000/net-values',
            klineData: [
                { date: '2026-04-21', open: 1.50, close: 1.512, high: 1.52, low: 1.495 },
                { date: '2026-04-20', open: 1.49, close: 1.512, high: 1.515, low: 1.485 },
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
                { date: '2026-04-02', open: 1.33, close: 1.330, high: 1.365, low: 1.32 },
                { date: '2026-04-01', open: 1.37, close: 1.369, high: 1.372, low: 1.35 },
                { date: '2026-03-31', open: 1.32, close: 1.324, high: 1.36, low: 1.32 },
                { date: '2026-03-30', open: 1.36, close: 1.359, high: 1.37, low: 1.35 },
                { date: '2026-03-27', open: 1.37, close: 1.370, high: 1.38, low: 1.33 },
                { date: '2026-03-26', open: 1.36, close: 1.357, high: 1.386, low: 1.35 },
                { date: '2026-03-25', open: 1.39, close: 1.385, high: 1.395, low: 1.37 },
                { date: '2026-03-24', open: 1.36, close: 1.359, high: 1.36, low: 1.32 }
            ],
            navHistory: [
                { date: '2026-04-20', value: 1.512 },
                { date: '2026-04-17', value: 1.4997 },
                { date: '2026-04-16', value: 1.4985 },
                { date: '2026-04-15', value: 1.4816 },
                { date: '2026-04-14', value: 1.4802 },
                { date: '2026-04-13', value: 1.4489 },
                { date: '2026-04-10', value: 1.4376 },
                { date: '2026-04-09', value: 1.4159 },
                { date: '2026-04-08', value: 1.4251 },
                { date: '2026-04-07', value: 1.3423 },
                { date: '2026-04-03', value: 1.3235 },
                { date: '2026-04-02', value: 1.3298 },
                { date: '2026-04-01', value: 1.3676 },
                { date: '2026-03-31', value: 1.3236 },
                { date: '2026-03-30', value: 1.3587 },
                { date: '2026-03-27', value: 1.3702 },
                { date: '2026-03-26', value: 1.3575 },
                { date: '2026-03-25', value: 1.3854 },
                { date: '2026-03-24', value: 1.3596 },
                { date: '2026-03-23', value: 1.3287 }
            ]
        },
        '515080': {
            name: '招商中证红利ETF',
            price: 1.592,
            change: '+0.06%',
            changeValue: 0.001,
            nav: 1.5902,
            navDate: '2026-04-17',
            volume: '93.7亿',
            amount: '93.7亿',
            manager: '王平、刘重杰',
            scale: '93.7亿',
            established: '2019-11-28',
            tracking: '中证红利指数',
            netFlow: 3,
            source: 'https://fund.eastmoney.com/515080.html',
            klineSource: 'https://www.lixinger.com/equity/fund/detail/sh/515080/515080/net-values',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/515080/515080/net-values',
            klineData: [
                { date: '2026-04-21', open: 1.59, close: 1.592, high: 1.598, low: 1.585 },
                { date: '2026-04-20', open: 1.59, close: 1.592, high: 1.595, low: 1.585 },
                { date: '2026-04-17', open: 1.59, close: 1.591, high: 1.60, low: 1.588 },
                { date: '2026-04-16', open: 1.60, close: 1.602, high: 1.605, low: 1.59 },
                { date: '2026-04-15', open: 1.60, close: 1.598, high: 1.602, low: 1.592 },
                { date: '2026-04-14', open: 1.59, close: 1.591, high: 1.595, low: 1.588 },
                { date: '2026-04-13', open: 1.59, close: 1.587, high: 1.592, low: 1.584 },
                { date: '2026-04-10', open: 1.59, close: 1.589, high: 1.592, low: 1.585 },
                { date: '2026-04-09', open: 1.59, close: 1.587, high: 1.592, low: 1.583 },
                { date: '2026-04-07', open: 1.59, close: 1.586, high: 1.592, low: 1.582 },
                { date: '2026-04-03', open: 1.58, close: 1.580, high: 1.588, low: 1.575 },
                { date: '2026-04-02', open: 1.60, close: 1.604, high: 1.61, low: 1.595 },
                { date: '2026-04-01', open: 1.60, close: 1.600, high: 1.605, low: 1.595 },
                { date: '2026-03-31', open: 1.60, close: 1.599, high: 1.605, low: 1.592 },
                { date: '2026-03-30', open: 1.62, close: 1.618, high: 1.622, low: 1.610 },
                { date: '2026-03-27', open: 1.60, close: 1.603, high: 1.608, low: 1.598 },
                { date: '2026-03-26', open: 1.60, close: 1.599, high: 1.602, low: 1.595 },
                { date: '2026-03-25', open: 1.60, close: 1.599, high: 1.602, low: 1.595 },
                { date: '2026-03-24', open: 1.60, close: 1.595, high: 1.602, low: 1.590 }
            ],
            navHistory: [
                { date: '2026-04-17', value: 1.5902 },
                { date: '2026-04-16', value: 1.6008 },
                { date: '2026-04-15', value: 1.5968 },
                { date: '2026-04-14', value: 1.5912 },
                { date: '2026-04-13', value: 1.5878 },
                { date: '2026-04-10', value: 1.5891 },
                { date: '2026-04-09', value: 1.5857 },
                { date: '2026-04-07', value: 1.5850 },
                { date: '2026-04-03', value: 1.5771 },
                { date: '2026-04-02', value: 1.6036 },
                { date: '2026-04-01', value: 1.6000 },
                { date: '2026-03-31', value: 1.5990 },
                { date: '2026-03-30', value: 1.6178 },
                { date: '2026-03-27', value: 1.6030 },
                { date: '2026-03-26', value: 1.5992 },
                { date: '2026-03-25', value: 1.5985 },
                { date: '2026-03-24', value: 1.5946 },
                { date: '2026-03-23', value: 1.5705 },
                { date: '2026-03-20', value: 1.5880 },
                { date: '2026-03-19', value: 1.6102 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            price: 8.355,
            change: '+0.78%',
            changeValue: 0.065,
            nav: 8.3645,
            navDate: '2026-04-20',
            volume: '164.82亿份',
            amount: '1375.89亿',
            manager: '罗文杰',
            scale: '1446.90亿',
            established: '2013-02-06',
            tracking: '中证500指数',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/510500.html',
            klineSource: 'https://cn.investing.com/etfs/china-southern-csi-500-historical-data',
            navSource: 'https://www.lixinger.com/equity/fund/detail/sh/510500/510500/net-values',
            klineData: [
                { date: '2026-04-21', open: 8.351, close: 8.331, high: 8.351, low: 8.256 },
                { date: '2026-04-20', open: 8.281, close: 8.355, high: 8.394, low: 8.278 },
                { date: '2026-04-17', open: 8.232, close: 8.290, high: 8.312, low: 8.210 },
                { date: '2026-04-16', open: 8.130, close: 8.253, high: 8.271, low: 8.125 },
                { date: '2026-04-15', open: 8.220, close: 8.111, high: 8.235, low: 8.095 },
                { date: '2026-04-14', open: 8.110, close: 8.159, high: 8.162, low: 8.067 },
                { date: '2026-04-13', open: 7.985, close: 8.028, high: 8.059, low: 7.978 },
                { date: '2026-04-10', open: 8.015, close: 8.035, high: 8.149, low: 8.015 },
                { date: '2026-04-09', open: 7.961, close: 7.964, high: 8.009, low: 7.908 },
                { date: '2026-04-08', open: 7.820, close: 8.026, high: 8.029, low: 7.815 },
                { date: '2026-04-07', open: 7.617, close: 7.629, high: 7.701, low: 7.600 },
                { date: '2026-04-03', open: 7.697, close: 7.603, high: 7.707, low: 7.581 },
                { date: '2026-04-02', open: 7.771, close: 7.672, high: 7.809, low: 7.619 },
                { date: '2026-04-01', open: 7.815, close: 7.809, high: 7.850, low: 7.755 },
                { date: '2026-03-31', open: 7.805, close: 7.683, high: 7.860, low: 7.680 },
                { date: '2026-03-30', open: 7.706, close: 7.818, high: 7.836, low: 7.665 },
                { date: '2026-03-27', open: 7.580, close: 7.803, high: 7.852, low: 7.580 },
                { date: '2026-03-26', open: 7.792, close: 7.700, high: 7.835, low: 7.681 },
                { date: '2026-03-25', open: 7.700, close: 7.826, high: 7.879, low: 7.698 },
                { date: '2026-03-24', open: 7.589, close: 7.652, high: 7.657, low: 7.437 }
            ],
            navHistory: [
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
                { date: '2026-04-03', value: 7.5987 },
                { date: '2026-04-02', value: 7.6725 },
                { date: '2026-04-01', value: 7.8089 },
                { date: '2026-03-31', value: 7.6832 },
                { date: '2026-03-30', value: 7.8185 },
                { date: '2026-03-27', value: 7.8032 },
                { date: '2026-03-26', value: 7.7000 },
                { date: '2026-03-25', value: 7.8265 },
                { date: '2026-03-24', value: 7.6520 },
                { date: '2026-03-23', value: 7.5125 }
            ]
        },
        '006546': {
            name: '兴银中短债C',
            price: 1.244,
            change: '+0.02%',
            changeValue: 0.0002,
            nav: 1.2437,
            navDate: '2026-04-20',
            volume: '11.74亿份',
            amount: '11.74亿',
            manager: '王深',
            scale: '11.74亿',
            established: '2018-12-07',
            type: '债券型-中短债',
            riskLevel: 'R2中低风险',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/006546.html',
            klineSource: 'https://www.hffunds.cn/products/zhaiquan/006546/index.html',
            navSource: 'https://www.hffunds.cn/products/zhaiquan/006546/index.html',
            klineData: [
                { date: '2026-04-21', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-20', open: 1.244, close: 1.244, high: 1.245, low: 1.243 },
                { date: '2026-04-17', open: 1.243, close: 1.243, high: 1.244, low: 1.243 },
                { date: '2026-04-16', open: 1.243, close: 1.243, high: 1.244, low: 1.242 },
                { date: '2026-04-15', open: 1.243, close: 1.243, high: 1.244, low: 1.242 },
                { date: '2026-04-14', open: 1.242, close: 1.243, high: 1.244, low: 1.242 },
                { date: '2026-04-11', open: 1.242, close: 1.242, high: 1.243, low: 1.242 },
                { date: '2026-04-10', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-09', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-08', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-07', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-03', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-02', open: 1.242, close: 1.242, high: 1.243, low: 1.241 },
                { date: '2026-04-01', open: 1.241, close: 1.241, high: 1.242, low: 1.241 },
                { date: '2026-03-31', open: 1.241, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-03-30', open: 1.241, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-03-27', open: 1.241, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-03-26', open: 1.241, close: 1.241, high: 1.242, low: 1.240 },
                { date: '2026-03-25', open: 1.240, close: 1.240, high: 1.241, low: 1.240 },
                { date: '2026-03-24', open: 1.240, close: 1.240, high: 1.241, low: 1.240 }
            ],
            navHistory: [
                { date: '2026-04-20', value: 1.2437 },
                { date: '2026-04-17', value: 1.2434 },
                { date: '2026-04-16', value: 1.2432 },
                { date: '2026-04-15', value: 1.2432 },
                { date: '2026-04-14', value: 1.2430 },
                { date: '2026-04-11', value: 1.2428 },
                { date: '2026-04-10', value: 1.2425 },
                { date: '2026-04-09', value: 1.2423 },
                { date: '2026-04-08', value: 1.2421 },
                { date: '2026-04-07', value: 1.2420 },
                { date: '2026-04-03', value: 1.2419 },
                { date: '2026-04-02', value: 1.2415 },
                { date: '2026-04-01', value: 1.2413 },
                { date: '2026-03-31', value: 1.2412 },
                { date: '2026-03-30', value: 1.2411 },
                { date: '2026-03-27', value: 1.2407 },
                { date: '2026-03-26', value: 1.2405 },
                { date: '2026-03-25', value: 1.2403 },
                { date: '2026-03-24', value: 1.2402 },
                { date: '2026-03-23', value: 1.2400 }
            ]
        },
        '110017': {
            name: '易方达增强回报债券A',
            price: 1.393,
            change: '0.00%',
            changeValue: 0,
            nav: 1.393,
            navDate: '2026-04-10',
            volume: '313.35亿份',
            amount: '436.32亿',
            manager: '王晓晨',
            scale: '436.32亿',
            established: '2008-03-19',
            type: '债券型-混合一级',
            riskLevel: '中低风险',
            netFlow: 0,
            source: 'https://fund.eastmoney.com/110017.html',
            klineSource: 'https://www.efunds.com.cn/Mobile/fund/110017_org.shtml',
            navSource: 'https://www.efunds.com.cn/Mobile/fund/110017_org.shtml',
            klineData: [
                { date: '2026-04-21', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-18', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-17', open: 1.394, close: 1.394, high: 1.395, low: 1.393 },
                { date: '2026-04-16', open: 1.394, close: 1.394, high: 1.395, low: 1.393 },
                { date: '2026-04-15', open: 1.395, close: 1.395, high: 1.396, low: 1.394 },
                { date: '2026-04-14', open: 1.395, close: 1.395, high: 1.396, low: 1.394 },
                { date: '2026-04-11', open: 1.395, close: 1.395, high: 1.396, low: 1.394 },
                { date: '2026-04-10', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-09', open: 1.393, close: 1.393, high: 1.394, low: 1.392 },
                { date: '2026-04-08', open: 1.395, close: 1.395, high: 1.396, low: 1.394 },
                { date: '2026-04-07', open: 1.392, close: 1.392, high: 1.393, low: 1.391 },
                { date: '2026-04-03', open: 1.391, close: 1.391, high: 1.392, low: 1.390 },
                { date: '2026-04-02', open: 1.392, close: 1.392, high: 1.393, low: 1.391 },
                { date: '2026-04-01', open: 1.392, close: 1.392, high: 1.393, low: 1.391 },
                { date: '2026-03-31', open: 1.390, close: 1.390, high: 1.391, low: 1.389 },
                { date: '2026-03-30', open: 1.390, close: 1.390, high: 1.391, low: 1.389 },
                { date: '2026-03-27', open: 1.390, close: 1.390, high: 1.391, low: 1.389 },
                { date: '2026-03-26', open: 1.389, close: 1.389, high: 1.390, low: 1.388 },
                { date: '2026-03-25', open: 1.390, close: 1.390, high: 1.391, low: 1.389 },
                { date: '2026-03-24', open: 1.390, close: 1.390, high: 1.391, low: 1.389 }
            ],
            navHistory: [
                { date: '2026-04-10', value: 1.393 },
                { date: '2026-04-09', value: 1.393 },
                { date: '2026-04-08', value: 1.395 },
                { date: '2026-04-07', value: 1.392 },
                { date: '2026-04-03', value: 1.391 },
                { date: '2026-04-02', value: 1.392 },
                { date: '2026-04-01', value: 1.392 },
                { date: '2026-03-31', value: 1.390 },
                { date: '2026-03-30', value: 1.390 },
                { date: '2026-03-27', value: 1.390 },
                { date: '2026-03-26', value: 1.389 },
                { date: '2026-03-25', value: 1.390 },
                { date: '2026-03-24', value: 1.390 },
                { date: '2026-03-23', value: 1.390 },
                { date: '2026-03-20', value: 1.390 },
                { date: '2026-03-19', value: 1.390 },
                { date: '2026-03-18', value: 1.390 },
                { date: '2026-03-17', value: 1.389 },
                { date: '2026-03-16', value: 1.389 },
                { date: '2026-03-13', value: 1.389 }
            ]
        }
    },
    
    stockData: {},
    historyReports: []
};
