// ==================== 数据更新时间
const DATA_UPDATE_TIME = '2026-05-12 15:24:00';

// ==================== 是否交易日
const isTradingDay = true;

// ==================== 示例数据
const SAMPLE_DATA = {
    // 大盘指数（5月12日收盘）
    index: {
        shangzhi: {
            name: '上证指数',
            value: '4,132.67',
            change: '-1.61%',
            changePercent: -1.61
        },
        shengzheng: {
            name: '深证成指',
            value: '15,421.00',
            change: '-2.99%',
            changePercent: -2.99
        },
        chuangye: {
            name: '创业板指',
            value: '3,798.00',
            change: '-2.97%',
            changePercent: -2.97
        },
        zhuanKe50: {
            name: '科创50',
            value: '1,726.00',
            change: '-1.83%',
            changePercent: -1.83
        }
    },
    
    // 隔夜外盘数据（5月12日）
    usMarkets: {
        dowJones: { name: '道琼斯', value: '49,704.47', change: '+0.19%' },
        nasdaq: { name: '纳斯达克', value: '26,274.13', change: '+0.10%' },
        sp500: { name: '标普500', value: '7,412.84', change: '+0.19%' }
    },
    
    // 富时A50期货
    a50Futures: {
        value: '15,245',
        change: '-1.58%',
        trend: '尾盘快速下跌'
    },
    
    // 资金流向
    capital: {
        mainFund: {
            value: '-580.0亿',
            isPositive: false,
            note: '高位主力出逃'
        },
        northFund: {
            value: '-68.2亿',
            isPositive: false,
            note: '近期最大单日净流出'
        }
    },
    
    // 多日板块资金流向数据（5月10日、11日、12日）
    sectorMultiDayFlow: {
        dates: ['5月10日', '5月11日', '5月12日'],
        inflowSectors: [
            {
                name: '电网设备',
                data: ['+35.2亿', '+76亿', '+52.8亿'],
                consecutiveDays: 3,
                trend: 'up'
            },
            {
                name: '电力',
                data: ['+28.6亿', '+65.3亿', '+78.4亿'],
                consecutiveDays: 3,
                trend: 'up'
            },
            {
                name: '光纤概念',
                data: ['+22.4亿', '+45.8亿', '+38.6亿'],
                consecutiveDays: 3,
                trend: 'up'
            },
            {
                name: '证券',
                data: ['+18.5亿', '+42.1亿', '+35.2亿'],
                consecutiveDays: 3,
                trend: 'up'
            },
            {
                name: '特高压',
                data: ['+25.8亿', '+55.6亿', '+62.3亿'],
                consecutiveDays: 3,
                trend: 'up'
            }
        ],
        outflowSectors: [
            {
                name: '电子',
                data: ['-45.2亿', '-98.5亿', '-255.28亿'],
                consecutiveDays: 3,
                trend: 'down'
            },
            {
                name: '半导体',
                data: ['-68.5亿', '-71.29亿', '-156.8亿'],
                consecutiveDays: 3,
                trend: 'down'
            },
            {
                name: '计算机',
                data: ['-32.5亿', '-61.6亿', '-128.4亿'],
                consecutiveDays: 3,
                trend: 'down'
            },
            {
                name: 'AI应用',
                data: ['-28.8亿', '-45.6亿', '-98.7亿'],
                consecutiveDays: 3,
                trend: 'down'
            },
            {
                name: '新能源',
                data: ['-35.4亿', '-52.8亿', '-86.5亿'],
                consecutiveDays: 3,
                trend: 'down'
            }
        ]
    },
    
    // 板块排行
    sectors: {
        inflow: [
            { name: '电网设备', value: '+52.8亿' },
            { name: '电力', value: '+78.4亿' },
            { name: '特高压', value: '+62.3亿' },
            { name: '光纤概念', value: '+38.6亿' },
            { name: '证券', value: '+35.2亿' },
            { name: '算电协同', value: '+45.6亿' },
            { name: '绿电', value: '+52.3亿' },
            { name: '公用事业', value: '+28.9亿' }
        ],
        outflow: [
            { name: '电子', value: '-255.28亿' },
            { name: '半导体', value: '-156.8亿' },
            { name: '计算机', value: '-128.4亿' },
            { name: 'AI应用', value: '-98.7亿' },
            { name: '新能源', value: '-86.5亿' },
            { name: '光通信CPO', value: '-72.8亿' },
            { name: '存储芯片', value: '-65.3亿' },
            { name: '锂矿', value: '-52.4亿' }
        ]
    },
    
    // 财经新闻（5月12日收盘）
    news: [
        {
            title: '【收盘复盘】A股高位放量长阴失守4200点，主线剧烈分歧短期进入调整',
            time: '05-12 15:06',
            summary: 'A股三大指数高开低走，上证指数收4132.67点，跌1.61%，日内失守4200、4150点，最低探至4098点；深证成指跌2.99%，创业板跌2.97%，科创50跌1.83%。两市成交3.52万亿，维持高位放量。两市3800+个股下跌、不足1200家上涨，跌停40+只，高位股集体重挫，恐慌情绪扩散。北向资金净流出68.2亿元，为近期最大单日净流出。',
            impact: 'negative',
            relatedSectors: ['整体市场', '高位科技', '获利盘兑现'],
            dataPoints: ['上证-1.61%失守4200', '成交3.52万亿', '北向流出68.2亿', '3800+个股下跌'],
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '特朗普宣布将访华！5月13日-15日国事访问，中美元首将举行会谈',
            time: '05-12 午间',
            summary: '据外交部消息，应国家主席邀请，美国总统特朗普将于5月13日至15日对中国进行国事访问。这将是美国总统时隔9年再次访华，上次访华是2017年11月。外交部表示，中美元首将就事关中美关系的重大问题深入交换意见，为变乱交织的世界注入稳定性。这一重大外交事件有望改善中美关系预期，提振市场风险偏好。',
            impact: 'positive',
            relatedSectors: ['整体市场', '中美关系', '外资情绪', '科技出口'],
            dataPoints: ['特朗普5月13-15日访华', '时隔9年再次访华', '元首会谈'],
            url: 'https://www.fmprc.gov.cn/'
        },
        {
            title: '主力资金监控：电子板块净流出255亿创纪录，主力从高位科技撤退',
            time: '05-12 14:30',
            summary: '财联社数据显示，今日主力资金净流入电网设备、证券、铁路公路等板块，净流出电子、计算机、有色金属等板块，其中电子板块净流出255.28亿元，创近期纪录。中际旭创资金净买入19.94亿元位居首位，新易盛、山子高科、天孚通信主力资金净流入居前；中天科技遭净卖出24.83亿元位居首位，工业富联、宁德时代、北方稀土主力资金净流出额居前。',
            impact: 'negative',
            relatedSectors: ['电子', '半导体', '计算机', '高位科技股'],
            dataPoints: ['电子净流出255.28亿', '中际旭创净买入19.94亿', '中天科技净卖出24.83亿'],
            url: 'https://www.cls.cn/'
        },
        {
            title: '大唐发电5连板！电力板块强势护盘，算电协同主线确立',
            time: '05-12 收盘',
            summary: '电力板块今日逆势走强，成为市场最强主线。大唐发电5连板，股价6.70元；韶能股份涨停；绿电ETF华夏创历史新高。算电协同板块表现亮眼，5只个股涨停。四部委联合印发《算电协同行动方案》，叠加夏季用电高峰临近，电力板块硬逻辑清晰。机构持续布局电力赛道，主力资金连续3日净流入。',
            impact: 'positive',
            relatedSectors: ['电力', '电网设备', '特高压', '算电协同', '绿电'],
            dataPoints: ['大唐发电5连板', '绿电ETF创历史新高', '算电协同行动方案落地'],
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '中芯国际并购案获批！国产晶圆代工史上最大并购迈出关键一步',
            time: '05-11',
            summary: '上交所并购重组审核委员会第5次会议正式通过中芯国际发行股份购买资产暨关联交易事项。南下资金已连续5日净买入中芯国际，共计34.3亿港元；今日再度净买入7.82亿港元。标志着国产晶圆代工行业历史上金额最大的并购案向前迈出决定性一步。',
            impact: 'positive',
            relatedSectors: ['半导体制造', '国产替代', '中芯国际概念'],
            dataPoints: ['中芯国际并购获批', '连续5日净买入34.3亿港元'],
            url: 'https://m.cngold.org/'
        },
        {
            title: '中际旭创突破千元！成为公募头号重仓股，北向资金持续加仓',
            time: '05-12 收盘',
            summary: '光通信龙头中际旭创今日股价突破千元大关，成为A股首只千元光模块股，并成为公募基金头号重仓股。北向资金今日净买入中际旭创19.94亿元，位居榜首。中际旭创、英伟达32亿美元合作，特种光纤G.657.A2价格暴涨650%，AI Scale-Up交换机市场预计2026年增长86%。',
            impact: 'positive',
            relatedSectors: ['光通信', 'CPO', 'AI算力硬件', '中际旭创概念'],
            dataPoints: ['中际旭创突破千元', '北向净买入19.94亿', '特种光纤涨价650%'],
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '美伊停火协议岌岌可危！原油突破100美元，通胀压力卷土重来',
            time: '05-12 隔夜',
            summary: '美国总统特朗普表示美伊停火协议处于"岌岌可危"状态，伊朗在浓缩铀等问题上拒绝妥协。国际油价5月12日大涨，布伦特原油突破104美元/桶，纽约原油涨至98美元上方。油价飙升可能向更广泛通胀领域蔓延，影响美联储降息节奏。',
            impact: 'negative',
            relatedSectors: ['能源化工', '航空运输', '通胀受益'],
            dataPoints: ['美伊谈判僵局', '原油突破100美元', '通胀压力升温'],
            url: 'https://finance.eastmoney.com/'
        },
        {
            title: '央行Q1货政报告：适度宽松基调延续，密切关注外部输入型通胀',
            time: '05-12',
            summary: '央行发布2026年一季度货币政策执行报告，明确继续实施适度宽松货币政策，保持流动性合理充裕和社会融资条件相对宽松。报告同时指出，近期中东地缘政治事件引起国际原油和部分大宗商品价格上行，对当前我国物价指标回升有一定作用，需密切关注外部输入型通胀影响。',
            impact: 'neutral',
            relatedSectors: ['整体市场', '流动性', '货币政策'],
            dataPoints: ['流动性持续宽松', '关注输入型通胀', '信贷均衡投放'],
            url: 'https://finance.eastmoney.com/'
        }
    ],
    
    // 主动管理型基金数据（股票型、混合型、债券型）
    activeFunds: [
        {
            code: '011103',
            name: '广发远见智选混合',
            value: '2.124',
            change: '-2.35%',
            changePercent: -2.35,
            fundManager: '唐晓斌',
            establishedDate: '2021-09-28',
            fundScale: '156亿',
            category: '偏股混合型',
            riskLevel: '高风险',
            recommendReason: '【AI算力风口】今日高位科技股集体回调，该基金重仓的光通信、AI算力龙头同步调整。基金经理唐晓斌精准踩中AI算力硬科技风口，重仓光通信龙头。规模从不足3亿暴增至156亿，机构与散户资金抱团。近1年业绩排名同类前1%。短期波动较大，但AI算力长期逻辑不变，适合能承受高波动的激进型投资者。',
            recentPerformance: '今年以来+112.5%，近1年+162.8%，近3年+305.2%',
            keyCatalysts: ['AI算力长期逻辑', '光通信龙头持仓', '科技主线调整后反弹可期', '机构抱团']
        },
        {
            code: '008294',
            name: '财通价值动量混合',
            value: '3.742',
            change: '-2.95%',
            changePercent: -2.95,
            fundManager: '金梓才',
            establishedDate: '2014-12-08',
            fundScale: '118亿',
            category: '灵活配置型',
            riskLevel: '高风险',
            recommendReason: '【轮动先锋】今日半导体、存储芯片等科技板块大幅回调，该基金作为轮动型产品同步调整。基金经理金梓才为财通基金副总经理，16年从业经验，擅长行业轮动。任职以来总回报超1000%，年化回报23%以上。短期受市场调整影响，但轮动能力强。适合认可中观轮动逻辑、能承受阶段性大波动的投资者。',
            recentPerformance: '今年以来+81.2%，近1年+138.5%，任职年化+24.8%',
            keyCatalysts: ['行业轮动能力', '硬科技主线', '存储芯片调整后机会', '基金经理实力强']
        },
        {
            code: '006546',
            name: '兴银中短债C',
            value: '1.2449',
            change: '0.00%',
            changePercent: 0.00,
            fundManager: '王深',
            establishedDate: '2018-12-07',
            fundScale: '13.09亿',
            category: '中短期纯债型',
            riskLevel: '中低风险',
            recommendReason: '【稳健底仓】今日科技成长暴跌，债市避险资金流入，该基金保持平稳。基金经理王深擅长债券型基金投资管理。该基金近1年收益率5.52%，在同类中排名前15%。持仓以高等级信用债和利率债为主，风格稳健，回撤控制优秀。在市场剧烈波动时，是资产组合的稳定器。',
            recentPerformance: '今年以来+0.86%，近1年+5.52%，近3年+16.78%',
            keyCatalysts: ['债券牛市延续', '利率下行周期', '回撤控制优秀', '市场调整避险']
        },
        {
            code: '110017',
            name: '易方达增强回报债券A',
            value: '1.3966',
            change: '-0.03%',
            changePercent: -0.03,
            fundManager: '王晓晨',
            establishedDate: '2008-03-19',
            fundScale: '361.02亿',
            category: '混合一级债基',
            riskLevel: '中风险',
            recommendReason: '【固收旗舰】今日债市小幅走弱，该基金微幅回调。荣获银河证券五星评级，成立18年来总回报高达290%以上。基金经理王晓晨拥有14年以上固收投资经验，管理规模近千亿。以债券投资为主，辅以少量权益增强，进可攻退可守。易方达投研实力行业领先，适合追求稳健收益的投资者。',
            recentPerformance: '今年以来+1.25%，近1年+5.65%，近3年+16.82%',
            keyCatalysts: ['五星评级', '基金经理经验丰富', '固收+策略领先', '公司投研实力强']
        },
        {
            code: '006547',
            name: '中泰星元灵活配置混合A',
            value: '2.415',
            change: '-1.75%',
            changePercent: -1.75,
            fundManager: '姜诚',
            establishedDate: '2018-12-05',
            fundScale: '78亿',
            category: '灵活配置型',
            riskLevel: '中高风险',
            recommendReason: '【深度价值】今日市场大幅调整，该基金重仓的价值标的同步回调，但幅度远小于科技成长。深度价值投资代表姜诚管理，成立以来总收益超200%，年化收益超16%。投资风格以低估值、高安全边际为核心，近1年最大回撤仅为12.3%，远低于同类平均。适合追求稳健收益、能承受中等波动的投资者。',
            recentPerformance: '今年以来+17.3%，近1年+31.5%，任职年化+16.2%',
            keyCatalysts: ['深度价值策略', '回撤控制优秀', '低估值安全边际', '防御属性强']
        }
    ],

    // ETF基金数据（宽基指数、行业、主题）
    etfFunds: [
        {
            code: '588000',
            name: '华夏科创50ETF',
            value: '1.8164',
            change: '+0.41%',
            changePercent: 0.41,
            navDate: '2026-05-12',
            category: '宽基指数',
            riskLevel: '中高风险',
            trackingError: '0.20%',
            fundScale: '685亿',
            recommendReason: '【持仓标的 · 逆势收涨】您的持仓基金！科创50指数今日跌1.83%，但华夏科创50ETF估算涨0.41%，显示盘中有所反弹。半导体在指数中权重超70%，今日高位科技分化，设备龙头北方华创、中微公司逆势抗跌。央行科创再贷款扩容至1.2万亿，中芯国际并购获批，DeepSeek完成500亿融资。中期趋势未变，短期调整后建议关注。',
            recentPerformance: '近1月+22.15%，近3月+16.28%，近1年+61.35%',
            keyCatalysts: ['持仓标的', '科创50逆势抗跌', '半导体设备龙头', '政策持续加持']
        },
        {
            code: '510300',
            name: '华泰柏瑞沪深300ETF',
            value: '4.9645',
            change: '-0.08%',
            changePercent: -0.08,
            navDate: '2026-05-12',
            category: '宽基指数',
            riskLevel: '中风险',
            trackingError: '0.15%',
            fundScale: '2045亿',
            recommendReason: '【宽基配置】今日大盘大幅回调，沪深300ETF仅微跌0.08%，防御属性凸显。跟踪沪深300指数，一键打包300家各行业龙头企业大盘蓝筹。华泰柏基金管理，规模2045亿元，日均成交超30亿元，流动性极佳。宽基ETF在大跌时跌幅有限，适合作为核心底仓配置。流动性宽松基调利好大盘蓝筹。',
            recentPerformance: '近1月+8.02%，近3月+2.18%，近1年+30.52%',
            keyCatalysts: ['大盘蓝筹', '跌幅有限', '流动性宽松受益', '外资配置需求']
        },
        {
            code: '515080',
            name: '招商中证红利ETF',
            value: '1.6157',
            change: '-0.15%',
            changePercent: -0.15,
            navDate: '2026-05-12',
            category: '策略指数',
            riskLevel: '中低风险',
            trackingError: '0.18%',
            fundScale: '98亿',
            recommendReason: '【红利防御】今日市场大跌，红利ETF仅微幅回调0.15%，防御属性显著。聚焦高股息、低波动、基本面扎实的龙头企业，股息率长期维持4%以上。在今日市场恐慌中，高股息资产成为资金避风港。存款利率进入"1时代"进一步凸显红利资产吸引力。适合作为组合防御配置。',
            recentPerformance: '近1月+0.68%，近3月+1.52%，近1年+11.52%',
            keyCatalysts: ['高股息防御', '低波动特性', '存款利率下行受益', '资金避风港']
        },
        {
            code: '510500',
            name: '南方中证500ETF',
            value: '8.8671',
            change: '-0.61%',
            changePercent: -0.61,
            navDate: '2026-05-12',
            category: '宽基指数',
            riskLevel: '中风险',
            trackingError: '0.16%',
            fundScale: '725亿',
            recommendReason: '【中盘成长】今日中小盘科技股大幅回调，中证500ETF下跌0.61%。跟踪中证500指数，选取500家市值适中、成长性突出的优质企业，中盘成长属性显著。南方基金管理，规模725亿元，是中证500指数的核心工具产品。今日调整幅度大于沪深300，短期注意风险，等待市场企稳后再关注。',
            recentPerformance: '近1月+8.85%，近3月+6.05%，近1年+52.38%',
            keyCatalysts: ['中盘成长弹性', '短期调整压力', '专精特新含量高', '等待企稳信号']
        },
        {
            code: '006546',
            name: '兴银中短债C',
            value: '1.2449',
            change: '0.00%',
            changePercent: 0.00,
            navDate: '2026-05-12',
            category: '纯债基金',
            riskLevel: '中低风险',
            trackingError: '-',
            fundScale: '13.09亿',
            recommendReason: '【纯债稳健】兴银中短债C专注中短期债券投资，以高等级信用债和利率债为主。今日市场大跌，债市避险资金流入，该基金保持平稳。在科技暴跌时，债券基金是资产组合的稳定器。近1年收益率5.52%，同类排名前15%。适合作为组合底仓配置。',
            recentPerformance: '今年以来+0.86%，近1年+5.52%，近3年+16.78%',
            keyCatalysts: ['债券牛市延续', '市场调整避险', '回撤控制优秀', '稳健投资者首选']
        },
        {
            code: '110017',
            name: '易方达增强回报债券A',
            value: '1.3966',
            change: '-0.03%',
            changePercent: -0.03,
            navDate: '2026-05-12',
            category: '混合一级债基',
            riskLevel: '中风险',
            trackingError: '-',
            fundScale: '361.02亿',
            recommendReason: '【固收+旗舰】易方达增强回报债券A荣获银河证券五星评级，专注固收投资18年累计回报290%以上。基金经理王晓晨拥有14年以上固收经验，管理规模近千亿。今日债市小幅走弱，基金微幅回调0.03%。以债券投资为主，辅以少量权益增强，进可攻退可守。适合追求稳健收益的投资者。',
            recentPerformance: '今年以来+1.25%，近1年+5.65%，近3年+16.82%',
            keyCatalysts: ['五星评级', '基金经理经验丰富', '固收+策略领先', '易方达品牌保障']
        }
    ]
};
