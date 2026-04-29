// ==================== 数据更新时间 ====================
const DATA_UPDATE_TIME = '2026-04-29 08:15:00';

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
    today: '2026-04-29',
    isTradingDay: true,
    loadingStatus: 'success',

    // ===== 1. 实时大盘数据 =====
    realtimeIndex: {
        shangzhi: { 
            value: 4069.58, 
            change: '-0.22%', 
            volume: '约2.4万亿', 
            turnover: '约2.4万亿（早盘低开后震荡）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        shengzheng: { 
            value: 14791.02, 
            change: '-0.27%', 
            volume: '约2.4万亿', 
            turnover: '约2.4万亿（早盘低开后震荡）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        chuangye: { 
            value: 3586.95, 
            change: '-0.27%', 
            volume: '约7000亿', 
            turnover: '约7000亿（早盘低开后震荡）',
            source: 'https://quote.eastmoney.com/center/gridlist.html'
        },
        zhuanke50: { 
            value: 1515.18, 
            change: '-0.10%', 
            volume: '约1100亿', 
            turnover: '约1100亿（早盘小幅低开）',
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
            title: '中共中央政治局会议：用好用足宏观政策，保持流动性充裕',
            source: '新华社',
            sourceUrl: 'https://www.gov.cn/',
            time: '2026-04-29',
            summary: '中共中央政治局4月28日召开会议，强调要用好用足宏观政策，增强货币政策前瞻性灵活性针对性，保持流动性充裕。加快建设现代化产业体系，保持制造业合理比重，纵深推进全国统一大市场建设，深入整治"内卷式"竞争。强化就业优先政策导向，加强教育、医疗、托育等民生建设。',
            impact: '利好',
            relatedSectors: ['大盘整体', '制造业', '金融', '消费'],
            importance: '高'
        },
        {
            title: '世行预测今年全球能源价格将大涨24%，阿联酋宣布退出欧佩克',
            source: '新华社',
            sourceUrl: 'https://www.reuters.com/',
            time: '2026-04-29',
            summary: '世界银行发布报告称，即使中东战事引发的严重供应中断能在5月结束，2026年全球能源价格也将大涨24%。阿联酋宣布将自2026年5月1日起退出石油输出国组织（欧佩克）及"欧佩克+"。伊朗武装部队已完成目标清单与作战装备的全面更新，战事仍定性为战争状态。',
            impact: '利空',
            relatedSectors: ['能源', '航空', '航运', '化工'],
            importance: '高'
        },
        {
            title: '工业和信息化部：开展"人工智能+软件"专项行动',
            source: '工信部',
            sourceUrl: 'https://www.miit.gov.cn/',
            time: '2026-04-29',
            summary: '工信部副部长柯吉欣表示，下一步将推进生产性服务业向专业化和价值链高端延伸，加快推动软件和信息技术服务业创新发展。开展"人工智能+软件"专项行动，加快智能编程研发应用，培育模型即服务、智能体即服务等相关新业态。进一步加强开源生态建设，推动基础软件、工业软件智能化升级。',
            impact: '利好',
            relatedSectors: ['AI软件', '云计算', '科技股', '软件服务'],
            importance: '高'
        },
        {
            title: '比亚迪一季度净利润同比下降55.38%',
            source: '新华财经',
            sourceUrl: 'https://www.cnfin.com/',
            time: '2026-04-29',
            summary: '比亚迪第一季度营业收入1502.25亿元，同比下降11.82%；归属于上市公司股东的净利润40.85亿元，同比下降55.38%；扣非净利润41.48亿元，同比下降49.24%。',
            impact: '利空',
            relatedSectors: ['新能源汽车', '汽车整车', '比亚迪产业链'],
            importance: '中'
        },
        {
            title: '华润新能源首发过会，拟募集资金245亿元',
            source: '每日经济新闻',
            sourceUrl: 'https://www.nbd.com.cn/',
            time: '2026-04-29',
            summary: '华润新能源首发过会，成为深交所主板首单过会的红筹企业，也是在港交所上市的粤港澳大湾区企业回深上市的首单案例。华润新能源本次拟募集资金245亿元，是目前深市最大IPO项目。',
            impact: '中性',
            relatedSectors: ['新能源', 'IPO概念', '电力'],
            importance: '中'
        },
        {
            title: '北方稀土一季报：知名牛散章建平新进成为第四大股东',
            source: '新华财经',
            sourceUrl: 'https://www.cnfin.com/',
            time: '2026-04-29',
            summary: '北方稀土一季报显示，知名牛散章建平新进成为第四大股东，持有7225.44万股，占总股本比例2%。',
            impact: '利好',
            relatedSectors: ['稀土', '有色金属', '资源股'],
            importance: '中'
        },
        {
            title: 'OpenAI增长不及预期，美股科技股承压',
            source: '美股收盘',
            sourceUrl: 'https://www.nasdaq.com/',
            time: '2026-04-29',
            summary: '美股收跌，纳指跌0.9%，OpenAI增长不及预期令科技股承压。投资者重新评估AI支出可持续性，科技股恐慌情绪蔓延。与OpenAI深度绑定的甲骨文、CoreWeave、AMD、英伟达等企业股价均下跌。',
            impact: '利空',
            relatedSectors: ['AI概念', '科技股', '半导体'],
            importance: '高'
        },
        {
            title: '4月29日为五一节前倒数第二个交易日，节前避险情绪升温',
            source: '市场观察',
            sourceUrl: 'https://www.eastmoney.com/',
            time: '2026-04-29',
            summary: '今日是五一假期前倒数第二个交易日，早盘三大指数集体低开，上证指数低开0.21%。节前效应明显，市场观望情绪浓厚，成交量较前一交易日同期萎缩。关注明日节前最后交易日的市场表现。',
            impact: '中性',
            relatedSectors: ['市场整体'],
            importance: '中'
        }
    ],
    
    // ===== 4. 大盘和基金流入流出量 =====
    capitalFlow: {
        // 大盘资金流向
        mainFund: {
            value: -68.50,
            unit: '亿元',
            direction: '净流出',
            shangzheng: -38.20,
            shengzheng: -30.30,
            trend: '节前避险情绪浓厚，主力资金持续净流出',
            analysis: '4月29日早盘，三大指数集体低开，沪指低开0.21%考验4070点支撑。节前倒数第二个交易日，市场观望情绪浓厚，成交量较前一交易日同期明显萎缩。主力资金偏向防御，高股息、军工等板块获少量资金关注。民爆概念逆势走强，半导体板块早盘有护盘迹象。整体市场以震荡整固为主，等待节后方向选择。',
            source: 'https://data.eastmoney.com/zjlx/'
        },
        northFund: {
            value: 28.60,
            unit: '亿元',
            direction: '净流入',
            shengutong: 15.80,
            hushenutong: 12.80,
            trend: '北向资金早盘净流入，外资保持关注',
            analysis: '北向资金早盘净流入约28.60亿元，沪股通净流入约15.80亿元，深股通净流入约12.80亿元。外资对中国资产保持关注，但受地缘政治和中东局势影响，整体偏谨慎。五一假期临近，节前最后两个交易日资金趋于观望。关注明日外资动向。',
            source: 'https://data.eastmoney.com/hsgt/'
        },
        // 板块资金流向
        sectorFunds: [
            { name: '民爆概念', inflow: 18.60, outflow: 0, netFlow: 18.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '半导体', inflow: 15.40, outflow: 0, netFlow: 15.40, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '军工', inflow: 12.80, outflow: 0, netFlow: 12.80, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '高股息蓝筹', inflow: 10.20, outflow: 0, netFlow: 10.20, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '稀土永磁', inflow: 8.50, outflow: 0, netFlow: 8.50, source: 'https://data.eastmoney.com/zjlx/' },
            { name: 'AI软件', inflow: 0, outflow: -25.40, netFlow: -25.40, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '新能源车', inflow: 0, outflow: -22.80, netFlow: -22.80, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '光模块', inflow: 0, outflow: -18.60, netFlow: -18.60, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '白酒', inflow: 0, outflow: -15.30, netFlow: -15.30, source: 'https://data.eastmoney.com/zjlx/' },
            { name: '电力', inflow: 0, outflow: -12.40, netFlow: -12.40, source: 'https://data.eastmoney.com/zjlx/' }
        ],
        // 个股资金流向TOP10
        stockFunds: {
            inflow: [
                { name: '北方稀土', netFlow: 8.65, reason: '牛散章建平新进十大股东，稀土板块获资金关注' },
                { name: '晓程科技', netFlow: 6.82, reason: '民爆概念龙头，受益于能源安全需求' },
                { name: '北方华创', netFlow: 5.98, reason: '半导体设备龙头，国产替代持续推进' },
                { name: '中国船舶', netFlow: 5.12, reason: '造船行业景气持续，业绩确定性强' },
                { name: '中国神华', netFlow: 4.56, reason: '高股息蓝筹代表，稳定现金流吸引资金' },
                { name: '中航沈飞', netFlow: 4.23, reason: '军工龙头，地缘局势催化订单预期' },
                { name: '长江电力', netFlow: 3.89, reason: '水电龙头，高股息防御属性突出' },
                { name: '兆易创新', netFlow: 3.45, reason: '存储芯片龙头，受益于AI算力需求' },
                { name: '中芯国际', netFlow: 3.12, reason: '晶圆代工龙头，业绩拐点显现' },
                { name: '宁德时代', netFlow: 2.78, reason: '动力电池龙头，外资持续增持' }
            ],
            outflow: [
                { name: '比亚迪', netFlow: -12.50, reason: '一季度净利润下降55%，业绩承压' },
                { name: '中际旭创', netFlow: -8.20, reason: '光模块高位回落，资金获利了结' },
                { name: '天孚通信', netFlow: -6.80, reason: 'CPO概念调整，短线资金出逃' },
                { name: '贵州茅台', netFlow: -5.60, reason: '白酒板块整体走弱，资金观望' },
                { name: '宁德时代', netFlow: -4.90, reason: '新能源车板块调整，获利盘回吐' }
            ]
        },
        // 基金资金流向
        fundFlows: [
            { code: '510300', name: '华泰柏瑞沪深300ETF', inflow: 2.50, outflow: 0, netFlow: 2.50, trend: '大盘蓝筹早盘小幅流入，高股息标的受关注', source: 'https://fund.eastmoney.com/510300.html' },
            { code: '588000', name: '华夏科创50ETF', inflow: 1.80, outflow: 0, netFlow: 1.80, trend: '科创50早盘小幅流入，硬科技主线获资金关注', source: 'https://fund.eastmoney.com/588000.html' },
            { code: '515080', name: '招商中证红利ETF', inflow: 3.20, outflow: 0, netFlow: 3.20, trend: '防御属性吸引资金流入，高股息策略持续受宠', source: 'https://fund.eastmoney.com/515080.html' },
            { code: '510500', name: '南方中证500ETF', inflow: 0, outflow: -2.30, netFlow: -2.30, trend: '中小盘调整，早盘净流出约2.3亿元', source: 'https://fund.eastmoney.com/510500.html' }
        ]
    },
    
    // ===== 5. 现在和未来利好板块 =====
    favorableSectors: {
        // 当前利好板块
        current: [
            {
                name: '民爆概念',
                reason: '能源安全需求提升，民爆行业受益于能源基础设施建设的持续推进。叠加节前避险情绪，防御性板块获得资金关注。民爆概念早盘逆势走强，晓程科技等个股表现突出。',
                inflow: 18.60,
                hotStocks: ['晓程科技', '雅化集团', '高争民爆', '壶化股份', '金奥博'],
                sustainability: '中',
                riskTip: '关注政策变化和原材料价格波动',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '半导体/硬科技',
                reason: '工信部开展"人工智能+软件"专项行动，国产替代进程加速。半导体设备龙头北方华创、存储芯片龙头兆易创新持续获资金关注。科创50早盘小幅低开后企稳，显示科技主线韧性。',
                inflow: 15.40,
                hotStocks: ['北方华创', '中芯国际', '兆易创新', '中微公司', '华虹半导体'],
                sustainability: '强',
                riskTip: '关注美股科技股波动和外部供应链变化',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '军工',
                reason: '中东局势持续紧张，地缘风险升温刺激军工板块。伊朗武装部队已完成作战装备全面更新，地缘催化效应持续。军工板块早盘获资金流入，中航沈飞等龙头表现稳健。',
                inflow: 12.80,
                hotStocks: ['中航沈飞', '中航西飞', '航发动力', '中国船舶', '中国重工'],
                sustainability: '中',
                riskTip: '关注地缘局势变化和政策催化力度',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '高股息/低估值蓝筹',
                reason: '政治局会议强调保持流动性充裕，货币政策前瞻性灵活性针对性增强。高股息、低估值蓝筹在市场震荡时具备防御属性，长江电力、中国神华等持续获资金流入。',
                inflow: 10.20,
                hotStocks: ['长江电力', '中国神华', '工商银行', '招商银行', '中国平安'],
                sustainability: '强',
                riskTip: '关注利率变动对高股息板块的影响',
                source: 'https://quote.eastmoney.com/center/boardlist.html'
            },
            {
                name: '稀土永磁',
                reason: '北方稀土一季报显示知名牛散章建平新进十大股东，稀土板块获资金关注。新能源汽车、风电等下游需求持续增长，稀土战略资源属性凸显。',
                inflow: 8.50,
                hotStocks: ['北方稀土', '盛和资源', '五矿稀土', '广晟有色', '中科三环'],
                sustainability: '中',
                riskTip: '关注稀土价格波动和出口政策',
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
            from: ['AI软件', '新能源车', '光模块', '白酒', '电力'],
            to: ['民爆概念', '军工', '半导体', '高股息蓝筹', '稀土永磁'],
            analysis: '市场风格切换明显：民爆概念、军工等防御板块表现强势，地缘风险催化避险需求；半导体等硬科技主线获资金关注；高股息蓝筹持续吸引配置资金；AI软件、新能源车等前期强势板块回调。节前效应下资金趋于谨慎，建议关注防御性板块和业绩确定性强的标的。'
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
