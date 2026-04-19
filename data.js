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
    }
};

// ==================== 板块详情数据 ====================
const SECTOR_DATA = {
    '电子': {
        name: '电子',
        mainInflow: -174.26,
        change: -2.5,
        leadingStocks: [
            { name: '北方华创', change: -3.2, reason: '半导体设备龙头，AI算力核心标的' },
            { name: '中芯国际', change: -4.1, reason: '晶圆代工龙头，受行业周期影响' },
            { name: '韦尔股份', change: -2.8, reason: 'CIS芯片龙头，竞争加剧' }
        ],
        description: '电子板块近期受AI算力需求推动，但短期面临技术封锁压力和美国出口管制影响。半导体设备国产替代逻辑持续，但近期获利回吐压力较大。消费电子需求疲软，智能手机出货量持续下滑，压制板块估值。',
        advice: '短期回调风险较大，建议观望。中长期看，AI芯片和半导体设备仍是核心方向，可等待回调后分批布局。重点关注国产替代加速的设备环节。',
        klineData: [
            { date: '2026-03-21', open: 3280, close: 3250, high: 3300, low: 3230 },
            { date: '2026-03-22', open: 3250, close: 3230, high: 3270, low: 3210 },
            { date: '2026-03-23', open: 3230, close: 3200, high: 3250, low: 3180 },
            { date: '2026-03-24', open: 3200, close: 3220, high: 3250, low: 3185 },
            { date: '2026-03-25', open: 3220, close: 3190, high: 3235, low: 3170 },
            { date: '2026-03-26', open: 3190, close: 3150, high: 3210, low: 3135 },
            { date: '2026-03-27', open: 3150, close: 3180, high: 3205, low: 3140 },
            { date: '2026-03-28', open: 3180, close: 3205, high: 3228, low: 3165 },
            { date: '2026-03-29', open: 3205, close: 3220, high: 3245, low: 3190 },
            { date: '2026-03-30', open: 3220, close: 3185, high: 3235, low: 3170 },
            { date: '2026-03-31', open: 3185, close: 3160, high: 3205, low: 3145 },
            { date: '2026-04-01', open: 3160, close: 3145, high: 3185, low: 3125 },
            { date: '2026-04-02', open: 3145, close: 3130, high: 3168, low: 3110 },
            { date: '2026-04-03', open: 3130, close: 3115, high: 3150, low: 3095 },
            { date: '2026-04-04', open: 3115, close: 3135, high: 3158, low: 3100 },
            { date: '2026-04-05', open: 3135, close: 3150, high: 3175, low: 3120 },
            { date: '2026-04-06', open: 3150, close: 3125, high: 3165, low: 3110 },
            { date: '2026-04-07', open: 3125, close: 3105, high: 3148, low: 3090 },
            { date: '2026-04-08', open: 3105, close: 3120, high: 3145, low: 3095 },
            { date: '2026-04-09', open: 3120, close: 3145, high: 3168, low: 3110 },
            { date: '2026-04-10', open: 3145, close: 3165, high: 3188, low: 3135 },
            { date: '2026-04-11', open: 3165, close: 3145, high: 3185, low: 3130 },
            { date: '2026-04-12', open: 3145, close: 3125, high: 3165, low: 3110 },
            { date: '2026-04-13', open: 3125, close: 3100, high: 3148, low: 3085 },
            { date: '2026-04-14', open: 3100, close: 3085, high: 3125, low: 3070 },
            { date: '2026-04-15', open: 3085, close: 3060, high: 3105, low: 3045 },
            { date: '2026-04-16', open: 3060, close: 3085, high: 3108, low: 3050 },
            { date: '2026-04-17', open: 3085, close: 3100, high: 3125, low: 3075 },
            { date: '2026-04-18', open: 3100, close: 3080, high: 3118, low: 3065 },
            { date: '2026-04-19', open: 3080, close: 3055, high: 3100, low: 3040 }
        ]
    },
    '通信': {
        name: '通信',
        mainInflow: -103.56,
        change: -2.8,
        leadingStocks: [
            { name: '中兴通讯', change: -2.5, reason: '5G设备龙头，估值合理' },
            { name: '中国联通', change: -1.8, reason: '运营商低估值的代表' },
            { name: '亨通光电', change: -3.5, reason: '光纤光缆龙头' }
        ],
        description: '通信板块近期受5G建设放缓和运营商资本开支预期下降影响。AI算力需求带动光模块和数据中心建设，但短期涨幅过大后面临调整压力。运营商板块估值处于历史低位，有防御价值。',
        advice: '短期震荡整理，建议适度减仓。5G应用和算力基础设施仍是长期主线，可逢低布局低估值运营商。',
        klineData: [
            { date: '2026-03-21', open: 2150, close: 2135, high: 2165, low: 2120 },
            { date: '2026-03-22', open: 2135, close: 2120, high: 2150, low: 2105 },
            { date: '2026-03-23', open: 2120, close: 2105, high: 2135, low: 2090 },
            { date: '2026-03-24', open: 2105, close: 2115, high: 2130, low: 2095 },
            { date: '2026-03-25', open: 2115, close: 2095, high: 2125, low: 2080 },
            { date: '2026-03-26', open: 2095, close: 2075, high: 2110, low: 2060 },
            { date: '2026-03-27', open: 2075, close: 2090, high: 2105, low: 2065 },
            { date: '2026-03-28', open: 2090, close: 2105, high: 2120, low: 2080 },
            { date: '2026-03-29', open: 2105, close: 2115, high: 2130, low: 2095 },
            { date: '2026-03-30', open: 2115, close: 2095, high: 2125, low: 2080 },
            { date: '2026-03-31', open: 2095, close: 2080, high: 2110, low: 2065 },
            { date: '2026-04-01', open: 2080, close: 2065, high: 2095, low: 2050 },
            { date: '2026-04-02', open: 2065, close: 2055, high: 2085, low: 2040 },
            { date: '2026-04-03', open: 2055, close: 2040, high: 2070, low: 2025 },
            { date: '2026-04-04', open: 2040, close: 2055, high: 2070, low: 2030 },
            { date: '2026-04-05', open: 2055, close: 2065, high: 2085, low: 2045 },
            { date: '2026-04-06', open: 2065, close: 2045, high: 2080, low: 2030 },
            { date: '2026-04-07', open: 2045, close: 2030, high: 2065, low: 2015 },
            { date: '2026-04-08', open: 2030, close: 2040, high: 2058, low: 2020 },
            { date: '2026-04-09', open: 2040, close: 2055, high: 2070, low: 2030 },
            { date: '2026-04-10', open: 2055, close: 2068, high: 2085, low: 2045 },
            { date: '2026-04-11', open: 2068, close: 2050, high: 2082, low: 2035 },
            { date: '2026-04-12', open: 2050, close: 2035, high: 2065, low: 2020 },
            { date: '2026-04-13', open: 2035, close: 2015, high: 2055, low: 2000 },
            { date: '2026-04-14', open: 2015, close: 2000, high: 2035, low: 1985 },
            { date: '2026-04-15', open: 2000, close: 1980, high: 2018, low: 1965 },
            { date: '2026-04-16', open: 1980, close: 1995, high: 2010, low: 1970 },
            { date: '2026-04-17', open: 1995, close: 2005, high: 2025, low: 1980 },
            { date: '2026-04-18', open: 2005, close: 1988, high: 2020, low: 1975 },
            { date: '2026-04-19', open: 1988, close: 1965, high: 2005, low: 1955 }
        ]
    },
    '电力设备': {
        name: '电力设备',
        mainInflow: -60.25,
        change: -1.5,
        leadingStocks: [
            { name: '宁德时代', change: -1.2, reason: '动力电池龙头，全球竞争力强' },
            { name: '隆基绿能', change: -2.3, reason: '光伏组件龙头' },
            { name: '亿纬锂能', change: -1.8, reason: '锂电池多元化布局' }
        ],
        description: '新能源板块持续调整，产能过剩担忧压制估值。光伏组件价格持续下跌，行业进入出清阶段。锂电材料价格回落，但龙头企业成本优势明显。储能市场快速增长，成为新的增量方向。',
        advice: '行业出清期，短期难有趋势性机会。可关注储能和新技术方向，如钠离子电池、固态电池等。等待产能出清后的反转机会。',
        klineData: [
            { date: '2026-03-21', open: 2850, close: 2835, high: 2865, low: 2820 },
            { date: '2026-03-22', open: 2835, close: 2820, high: 2850, low: 2805 },
            { date: '2026-03-23', open: 2820, close: 2805, high: 2835, low: 2790 },
            { date: '2026-03-24', open: 2805, close: 2815, high: 2830, low: 2795 },
            { date: '2026-03-25', open: 2815, close: 2795, high: 2825, low: 2780 },
            { date: '2026-03-26', open: 2795, close: 2775, high: 2810, low: 2760 },
            { date: '2026-03-27', open: 2775, close: 2790, high: 2805, low: 2765 },
            { date: '2026-03-28', open: 2790, close: 2805, high: 2820, low: 2780 },
            { date: '2026-03-29', open: 2805, close: 2815, high: 2830, low: 2795 },
            { date: '2026-03-30', open: 2815, close: 2795, high: 2825, low: 2780 },
            { date: '2026-03-31', open: 2795, close: 2780, high: 2810, low: 2765 },
            { date: '2026-04-01', open: 2780, close: 2765, high: 2795, low: 2750 },
            { date: '2026-04-02', open: 2765, close: 2755, high: 2785, low: 2740 },
            { date: '2026-04-03', open: 2755, close: 2740, high: 2770, low: 2725 },
            { date: '2026-04-04', open: 2740, close: 2755, high: 2770, low: 2730 },
            { date: '2026-04-05', open: 2755, close: 2765, high: 2785, low: 2745 },
            { date: '2026-04-06', open: 2765, close: 2745, high: 2780, low: 2730 },
            { date: '2026-04-07', open: 2745, close: 2730, high: 2765, low: 2715 },
            { date: '2026-04-08', open: 2730, close: 2740, high: 2758, low: 2720 },
            { date: '2026-04-09', open: 2740, close: 2755, high: 2770, low: 2730 },
            { date: '2026-04-10', open: 2755, close: 2768, high: 2785, low: 2745 },
            { date: '2026-04-11', open: 2768, close: 2750, high: 2782, low: 2735 },
            { date: '2026-04-12', open: 2750, close: 2735, high: 2765, low: 2720 },
            { date: '2026-04-13', open: 2735, close: 2715, high: 2755, low: 2700 },
            { date: '2026-04-14', open: 2715, close: 2700, high: 2735, low: 2685 },
            { date: '2026-04-15', open: 2700, close: 2680, high: 2718, low: 2665 },
            { date: '2026-04-16', open: 2680, close: 2695, high: 2710, low: 2670 },
            { date: '2026-04-17', open: 2695, close: 2705, high: 2725, low: 2680 },
            { date: '2026-04-18', open: 2705, close: 2688, high: 2720, low: 2675 },
            { date: '2026-04-19', open: 2688, close: 2665, high: 2705, low: 2655 }
        ]
    },
    '红利板块': {
        name: '红利板块',
        mainInflow: 25.8,
        change: 0.8,
        leadingStocks: [
            { name: '中国神华', change: 1.2, reason: '煤炭龙头，高股息代表' },
            { name: '长江电力', change: 0.5, reason: '水电龙头，稳定现金牛' },
            { name: '交通银行', change: 0.3, reason: '银行低估值高股息' },
            { name: '中国石化', change: 0.6, reason: '炼化一体化龙头' }
        ],
        description: '红利板块表现抗跌，主力资金避险需求推升板块。在市场波动加大背景下，高股息资产吸引力提升。煤炭、电力、银行等传统行业龙头现金流稳定，分红率高，成为资金避风港。',
        advice: '防御价值凸显，适合稳健型投资者。可继续持有作为组合的稳定器，关注股息率高于5%的优质标的。',
        klineData: [
            { date: '2026-03-21', open: 1580, close: 1585, high: 1592, low: 1575 },
            { date: '2026-03-22', open: 1585, close: 1590, high: 1598, low: 1580 },
            { date: '2026-03-23', open: 1590, close: 1595, high: 1602, low: 1585 },
            { date: '2026-03-24', open: 1595, close: 1592, high: 1600, low: 1588 },
            { date: '2026-03-25', open: 1592, close: 1598, high: 1605, low: 1588 },
            { date: '2026-03-26', open: 1598, close: 1602, high: 1608, low: 1592 },
            { date: '2026-03-27', open: 1602, close: 1600, high: 1608, low: 1595 },
            { date: '2026-03-28', open: 1600, close: 1605, high: 1612, low: 1595 },
            { date: '2026-03-29', open: 1605, close: 1610, high: 1618, low: 1600 },
            { date: '2026-03-30', open: 1610, close: 1608, high: 1615, low: 1602 },
            { date: '2026-03-31', open: 1608, close: 1612, high: 1620, low: 1602 },
            { date: '2026-04-01', open: 1612, close: 1615, high: 1622, low: 1608 },
            { date: '2026-04-02', open: 1615, close: 1618, high: 1625, low: 1610 },
            { date: '2026-04-03', open: 1618, close: 1620, high: 1628, low: 1612 },
            { date: '2026-04-04', open: 1620, close: 1618, high: 1625, low: 1613 },
            { date: '2026-04-05', open: 1618, close: 1622, high: 1630, low: 1613 },
            { date: '2026-04-06', open: 1622, close: 1625, high: 1632, low: 1615 },
            { date: '2026-04-07', open: 1625, close: 1628, high: 1635, low: 1620 },
            { date: '2026-04-08', open: 1628, close: 1630, high: 1638, low: 1622 },
            { date: '2026-04-09', open: 1630, close: 1632, high: 1640, low: 1625 },
            { date: '2026-04-10', open: 1632, close: 1635, high: 1642, low: 1628 },
            { date: '2026-04-11', open: 1635, close: 1632, high: 1640, low: 1628 },
            { date: '2026-04-12', open: 1632, close: 1635, high: 1642, low: 1628 },
            { date: '2026-04-13', open: 1635, close: 1638, high: 1645, low: 1630 },
            { date: '2026-04-14', open: 1638, close: 1640, high: 1648, low: 1632 },
            { date: '2026-04-15', open: 1640, close: 1642, high: 1650, low: 1635 },
            { date: '2026-04-16', open: 1642, close: 1645, high: 1652, low: 1638 },
            { date: '2026-04-17', open: 1645, close: 1648, high: 1655, low: 1640 },
            { date: '2026-04-18', open: 1648, close: 1652, high: 1658, low: 1643 },
            { date: '2026-04-19', open: 1652, close: 1658, high: 1665, low: 1648 }
        ]
    },
    '银行': {
        name: '银行',
        mainInflow: 18.5,
        change: 0.5,
        leadingStocks: [
            { name: '招商银行', change: 0.8, reason: '零售银行龙头，资产质量优' },
            { name: '工商银行', change: 0.3, reason: '国有大行，稳定分红' },
            { name: '宁波银行', change: 0.6, reason: '城商行标杆，成长性强' }
        ],
        description: '银行板块表现稳健，主力资金流入明显。利率下行预期对银行息差形成压力，但实体经济复苏带动贷款需求回升。当前银行板块估值处于历史低位，安全边际较高。',
        advice: '低估值防御首选，可作为组合压舱石。关注资产质量改善和业绩超预期的个股机会。',
        klineData: [
            { date: '2026-03-21', open: 1820, close: 1825, high: 1832, low: 1815 },
            { date: '2026-03-22', open: 1825, close: 1830, high: 1838, low: 1820 },
            { date: '2026-03-23', open: 1830, close: 1835, high: 1842, low: 1825 },
            { date: '2026-03-24', open: 1835, close: 1832, high: 1840, low: 1828 },
            { date: '2026-03-25', open: 1832, close: 1838, high: 1845, low: 1828 },
            { date: '2026-03-26', open: 1838, close: 1842, high: 1848, low: 1832 },
            { date: '2026-03-27', open: 1842, close: 1840, high: 1848, low: 1835 },
            { date: '2026-03-28', open: 1840, close: 1845, high: 1852, low: 1835 },
            { date: '2026-03-29', open: 1845, close: 1850, high: 1858, low: 1840 },
            { date: '2026-03-30', open: 1850, close: 1848, high: 1855, low: 1842 },
            { date: '2026-03-31', open: 1848, close: 1852, high: 1860, low: 1842 },
            { date: '2026-04-01', open: 1852, close: 1855, high: 1862, low: 1848 },
            { date: '2026-04-02', open: 1855, close: 1858, high: 1865, low: 1850 },
            { date: '2026-04-03', open: 1858, close: 1860, high: 1868, low: 1852 },
            { date: '2026-04-04', open: 1860, close: 1858, high: 1865, low: 1853 },
            { date: '2026-04-05', open: 1858, close: 1862, high: 1870, low: 1853 },
            { date: '2026-04-06', open: 1862, close: 1865, high: 1872, low: 1855 },
            { date: '2026-04-07', open: 1865, close: 1868, high: 1875, low: 1860 },
            { date: '2026-04-08', open: 1868, close: 1870, high: 1878, low: 1862 },
            { date: '2026-04-09', open: 1870, close: 1872, high: 1880, low: 1865 },
            { date: '2026-04-10', open: 1872, close: 1875, high: 1882, low: 1868 },
            { date: '2026-04-11', open: 1875, close: 1872, high: 1880, low: 1868 },
            { date: '2026-04-12', open: 1872, close: 1875, high: 1882, low: 1868 },
            { date: '2026-04-13', open: 1875, close: 1878, high: 1885, low: 1870 },
            { date: '2026-04-14', open: 1878, close: 1880, high: 1888, low: 1872 },
            { date: '2026-04-15', open: 1880, close: 1882, high: 1890, low: 1875 },
            { date: '2026-04-16', open: 1882, close: 1885, high: 1892, low: 1878 },
            { date: '2026-04-17', open: 1885, close: 1888, high: 1895, low: 1880 },
            { date: '2026-04-18', open: 1888, close: 1892, high: 1898, low: 1883 },
            { date: '2026-04-19', open: 1892, close: 1896, high: 1902, low: 1888 }
        ]
    },
    '债券': {
        name: '债券',
        mainInflow: 12.3,
        change: 0.3,
        leadingStocks: [
            { name: '国债ETF', change: 0.2, reason: '利率债代表，避险首选' },
            { name: '政金债ETF', change: 0.3, reason: '政策性金融债' },
            { name: '企业债ETF', change: 0.4, reason: '信用债配置价值' }
        ],
        description: '债券市场持续走强，避险资金大量涌入。央行维持稳健货币政策，市场利率整体下行。债券基金净值持续上涨，纯债类产品受到追捧。信用债利差收窄，城投债风险有所缓解。',
        advice: '债券牛市延续，可继续持有纯债基金。久期策略方面，中短债更为稳健。注意利率风险，久期不宜过长。',
        klineData: [
            { date: '2026-03-21', open: 1125, close: 1126, high: 1128, low: 1124 },
            { date: '2026-03-22', open: 1126, close: 1127, high: 1129, low: 1125 },
            { date: '2026-03-23', open: 1127, close: 1128, high: 1130, low: 1126 },
            { date: '2026-03-24', open: 1128, close: 1127, high: 1129, low: 1126 },
            { date: '2026-03-25', open: 1127, close: 1128, high: 1130, low: 1126 },
            { date: '2026-03-26', open: 1128, close: 1129, high: 1131, low: 1127 },
            { date: '2026-03-27', open: 1129, close: 1128, high: 1130, low: 1127 },
            { date: '2026-03-28', open: 1128, close: 1129, high: 1131, low: 1127 },
            { date: '2026-03-29', open: 1129, close: 1130, high: 1132, low: 1128 },
            { date: '2026-03-30', open: 1130, close: 1129, high: 1131, low: 1128 },
            { date: '2026-03-31', open: 1129, close: 1130, high: 1132, low: 1128 },
            { date: '2026-04-01', open: 1130, close: 1131, high: 1133, low: 1129 },
            { date: '2026-04-02', open: 1131, close: 1132, high: 1134, low: 1130 },
            { date: '2026-04-03', open: 1132, close: 1131, high: 1133, low: 1130 },
            { date: '2026-04-04', open: 1131, close: 1132, high: 1134, low: 1130 },
            { date: '2026-04-05', open: 1132, close: 1133, high: 1135, low: 1131 },
            { date: '2026-04-06', open: 1133, close: 1132, high: 1134, low: 1131 },
            { date: '2026-04-07', open: 1132, close: 1133, high: 1135, low: 1131 },
            { date: '2026-04-08', open: 1133, close: 1134, high: 1136, low: 1132 },
            { date: '2026-04-09', open: 1134, close: 1135, high: 1137, low: 1133 },
            { date: '2026-04-10', open: 1135, close: 1134, high: 1136, low: 1133 },
            { date: '2026-04-11', open: 1134, close: 1135, high: 1137, low: 1133 },
            { date: '2026-04-12', open: 1135, close: 1136, high: 1138, low: 1134 },
            { date: '2026-04-13', open: 1136, close: 1137, high: 1139, low: 1135 },
            { date: '2026-04-14', open: 1137, close: 1136, high: 1138, low: 1135 },
            { date: '2026-04-15', open: 1136, close: 1137, high: 1139, low: 1135 },
            { date: '2026-04-16', open: 1137, close: 1138, high: 1140, low: 1136 },
            { date: '2026-04-17', open: 1138, close: 1139, high: 1141, low: 1137 },
            { date: '2026-04-18', open: 1139, close: 1140, high: 1142, low: 1138 },
            { date: '2026-04-19', open: 1140, close: 1141, high: 1143, low: 1139 }
        ]
    }
};

// ==================== 资金流向分析数据 ====================
const FUND_FLOW_ANALYSIS = {
    mainFundAnalysis: {
        trend: '连续3日净流出，避险情绪升温',
        details: '主力资金连续3日净流出，累计流出超1000亿元。电子、通信等科技板块成为主要流出方向，机构资金短期避险情绪明显升温。',
        sentiment: '谨慎',
        source: DATA_SOURCES.mainFund,
        judgment: '当前主力资金大幅流出反映市场避险情绪明显升温，但也是市场调整的正常现象。建议关注流出是否持续，如持续超过5个交易日则需警惕趋势性下跌风险。'
    },
    northFundAnalysis: {
        trend: '北向资金午后回流，外资态度谨慎',
        details: '早盘北向资金一度净流出超40亿元，午后有所回流，全天净流出约28亿元。外资对A股短期走势持谨慎态度，但长期配置意愿仍在。',
        sentiment: '观望',
        source: DATA_SOURCES.northFund,
        judgment: '外资今日净流出幅度不大，属于正常波动范围。长期来看，外资增配A股的趋势未变，但在当前位置外资可能会等待更明确的信号。'
    },
    sectorRotation: {
        trend: '科技板块资金流出，红利板块受青睐',
        details: '电子、通信、计算机等科技板块资金流出明显；红利板块、银行等防御性板块获得资金流入。资金从成长向价值切换迹象明显。',
        source: DATA_SOURCES.sector,
        inflowSectors: [
            { name: '红利板块', reason: '高股息资产避险需求上升', amount: '+25.8亿' },
            { name: '银行', reason: '低估值防御价值凸显', amount: '+18.5亿' },
            { name: '债券', reason: '避险资金大量涌入', amount: '+12.3亿' }
        ],
        outflowSectors: [
            { name: '电子', reason: '获利回吐压力加大', amount: '-174.3亿' },
            { name: '通信', reason: '短期涨幅过大', amount: '-103.6亿' },
            { name: '电力设备', reason: '产能过剩担忧', amount: '-60.3亿' }
        ],
        conclusion: '市场风格阶段性转换'
    },
    operationAdvice: {
        shortTerm: '控制仓位在5-6成，避免追高热门板块，关注红利ETF和债券基金的防御配置',
        mediumTerm: '等待市场企稳信号，可考虑分批布局优质蓝筹和ETF',
        riskPoints: ['科技股估值压力', '外围市场波动', '汇率波动风险']
    }
};

// ==================== 每日重大新闻 ====================
const DAILY_NEWS = [
    {
        title: '政治局会议：稳增长政策持续发力',
        source: '新闻联播',
        sourceUrl: 'https://tv.cctv.com/lm/xwlb/',
        time: '19:00',
        summary: '中共中央政治局召开会议，分析研究当前经济形势和经济工作。会议指出要继续实施积极的财政政策和稳健的货币政策，加大宏观政策调控力度，推动经济持续回升向好。',
        impact: '利好'
    },
    {
        title: '央行：保持流动性合理充裕',
        source: '央行官网',
        sourceUrl: 'https://www.pbc.gov.cn/',
        time: '16:30',
        summary: '央行表示将综合运用多种货币政策工具，保持流动性合理充裕，降低实体经济融资成本，支持科技创新和绿色发展。',
        impact: '利好'
    },
    {
        title: '证监会：推进资本市场改革',
        source: '证监会发布',
        sourceUrl: 'https://www.csrc.gov.cn/',
        time: '15:00',
        summary: '证监会将继续推进资本市场全面深化改革，完善多层次资本市场体系，提高上市公司质量，保护投资者合法权益。',
        impact: '中性'
    },
    {
        title: '统计局：3月CPI同比上涨0.3%',
        source: '国家统计局',
        sourceUrl: 'https://www.stats.gov.cn/',
        time: '09:30',
        summary: '3月份全国居民消费价格同比上涨0.3%，一季度居民消费价格与上年同期持平。工业生产者出厂价格同比下降2.8%。',
        impact: '中性'
    },
    {
        title: '商务部：扩大高水平对外开放',
        source: '商务部发布',
        sourceUrl: 'https://www.mofcom.gov.cn/',
        time: '10:00',
        summary: '商务部表示将进一步扩大高水平对外开放，持续打造市场化、法治化、国际化营商环境，吸引更多外资企业来华投资兴业。',
        impact: '利好'
    }
];

// ==================== 2026年4月基金数据 ====================
// 数据更新时间：2026年4月19日

const SAMPLE_DATA = {
    // 今日日期
    today: '2026-04-19',
    
    // 早间报告
    morningReport: {
        time: '08:30',
        fundFlowSummary: {
            mainInflow: -557.47,
            mainPercent: -3.2,
            retailInflow: 85.3,
            retailPercent: 2.1,
            transaction: 9256.8,
            transactionChange: 8.5
        },
        recommendedFunds: [
            {
                code: '510300',
                name: '华泰柏瑞沪深300ETF',
                change: 27.0,
                sourceUrl: 'https://fund.eastmoney.com/510300.html',
                reason: '【投资方向】跟踪沪深300指数，覆盖A股市场规模最大、经营最稳定的300家龙头企业，包括贵州茅台、宁德时代、招商银行等核心资产。【近期表现】近一年涨幅27%，长期年化收益稳定在8%-10%，日均成交额超45亿元，流动性极佳。【推荐理由】当前市场震荡加剧，沪深300作为大盘蓝筹代表具有较强抗跌性，且估值处于合理区间，适合作为投资组合的底仓配置，建议分批建仓。【风险提示】需关注国内经济复苏进度及企业盈利改善情况，若经济数据不及预期可能导致指数回调。'
            },
            {
                code: '515080',
                name: '富国中证红利ETF',
                change: 12.0,
                sourceUrl: 'https://fund.eastmoney.com/515080.html',
                reason: '【投资方向】跟踪中证红利指数，选取A股市场分红稳定、股息率高的100家企业，主要集中在电力、煤炭、银行等传统行业龙头。【近期表现】近一年涨幅约12%，股息率稳定在4%以上，每年分红两次，收益比银行三年期定存还高，且抗跌性极强。【推荐理由】当前市场波动加大，主力资金避险情绪升温，红利板块因其稳定的现金流和分红支撑，跌幅远小于成长股，是稳健型投资者的避风港。建议作为防御性资产配置。【风险提示】红利板块弹性较小，在牛市中可能跑输成长股，适合长期持有获取稳定分红收益。'
            },
            {
                code: '110017',
                name: '易方达增强回报债券A',
                change: 5.5,
                sourceUrl: 'https://fund.eastmoney.com/110017.html',
                reason: '【投资方向】固收+产品，80%以上资产投资债券，少量配置股票或可转债增强收益，在追求稳健收益的同时适度参与权益市场机会。【近期表现】近一年收益率5.5%，最大回撤控制在3%以内，波动率远低于股票型基金，近7天持续盈利，收益曲线平稳向上。【推荐理由】当前主力资金大幅流出，市场避险情绪浓厚，债券类资产成为资金避风港。该基金通过债券打底+股票增强的策略，既能获取稳定收益，又能适度分享股市上涨红利，适合稳健型投资者。【风险提示】需关注利率变化风险，若央行加息可能导致债券价格下跌，建议持有期6个月以上。'
            },
            {
                code: '006546',
                name: '兴银中短债C',
                change: 3.8,
                sourceUrl: 'https://fund.eastmoney.com/006546.html',
                reason: '【投资方向】中短债基金，主要投资于剩余期限1年以内的短期债券，包括国债、金融债、企业债等，几乎不涉及股票资产。【近期表现】近一年收益率3.8%，最大回撤仅0.5%左右，波动极小，持有3-6个月以上风险极低，年化收益稳定在3-4%。【推荐理由】当前市场不确定性增加，短期资金避险需求旺盛。中短债基金流动性好、波动小、收益稳定，是现金管理的理想替代品，适合存放3-6个月不用的闲置资金。【风险提示】收益率相对较低，不适合追求高回报的投资者，但安全性极高，几乎不会亏损本金。'
            },
            {
                code: '012100',
                name: '华夏稳健增利4个月债券C',
                change: 2.02,
                sourceUrl: 'https://fund.eastmoney.com/012100.html',
                reason: '【投资方向】纯债基金，严格控制在债券类资产投资，不参与股票市场，通过久期管理、收益率曲线策略等方式获取稳健收益。【近期表现】过去一年增长2.02%，过去三年累计增长7.48%，成立以来总收益12.78%，收益稳定且波动极小，是典型的稳健型产品。【推荐理由】在当前主力资金大幅流出、市场避险情绪升温的背景下，纯债基金是资金的安全港湾。该基金由华夏基金管理，基金经理经验丰富，适合风险承受能力较低、追求稳定收益的投资者。【风险提示】纯债基金收益相对较低，且需关注利率风险，建议作为资产配置中稳健部分，占比可设为30-50%。'
            }
        ],
        riskWarning: [
            '4月15日主力资金净流出557亿，创近期新高，市场避险情绪显著升温',
            '电子、通信板块资金流出较大，分别净流出174亿和103亿，短期回避',
            '高估值科技股回调风险增加，建议控制仓位在5-6成，保留现金应对波动'
        ],
        operationAdvice: [
            '稳健型配置建议：债券类50% + 红利ETF 30% + 沪深300 20%',
            '当前市场震荡，优先选择红利ETF和债券基金作为防御性配置',
            '避免追高热门板块，逢低分批布局优质蓝筹',
            '保持5-6成仓位，留有现金应对市场进一步波动'
        ]
    },
    
    // 激进型推荐基金
    aggressiveFunds: [
        {
            code: '588000',
            name: '华夏科创50ETF',
            change: 37.65,
            sourceUrl: 'https://fund.eastmoney.com/588000.html',
            reason: '跟踪科创50指数，近一年涨幅37.65%，高弹性高波动，适合风险承受能力较强的投资者。',
            minInvestment: '5000元'
        },
        {
            code: '018956',
            name: '中航机遇领航混合发起A',
            change: 18.2,
            sourceUrl: 'https://fund.eastmoney.com/018956.html',
            reason: '灵活配置型基金，近一周涨幅11.77%，短期爆发力强，适合激进型投资者。',
            minInvestment: '1000元'
        },
        {
            code: '588050',
            name: '易方达科创50ETF',
            change: 35.8,
            sourceUrl: 'https://fund.eastmoney.com/588050.html',
            reason: '易方达科创50ETF，近一年涨幅35.8%，流动性好，管理经验丰富。',
            minInvestment: '5000元'
        },
        {
            code: '510500',
            name: '南方中证500ETF',
            change: 11.8,
            sourceUrl: 'https://fund.eastmoney.com/510500.html',
            reason: '跟踪中证500指数，近3年年化收益11.8%，估值处于历史中低位，安全边际较高。',
            minInvestment: '3000元'
        }
    ],
    
    // 午后报告
    afternoonReport: {
        time: '13:30',
        review: '午后市场延续弱势震荡格局，沪指在3100点附近获得支撑。创业板指跌幅较大，跌破1800点关口。板块方面，红利板块、银行股表现较强，对指数形成一定支撑；前期涨幅较大的科技股继续回调，市场情绪较为谨慎。',
        sectorRotation: [
            { sector: '红利板块', change: 0.8 },
            { sector: '银行', change: 0.5 },
            { sector: '债券', change: 0.3 },
            { sector: '电子', change: -2.5 },
            { sector: '通信', change: -2.8 }
        ],
        outlook: '短期来看，市场或继续维持震荡格局，建议关注：1）政策面是否有进一步利好出台；2）外资流向变化；3）国内经济数据表现。中长期看，A股估值仍处于历史低位，结构性机会仍然存在。建议保持均衡配置，关注红利资产和优质成长股的投资机会。'
    },
    
    // 资金流向数据
    capitalFlow: {
        mainFund: { value: -557.47, change: -3.2, unit: '亿' },
        northFund: { value: -28.5, change: -12.5, unit: '亿' },
        southFund: { value: 35.2, change: 8.3, unit: '亿' },
        mainFundHistory: [
            { date: '2026-04-13', value: -125.3 },
            { date: '2026-04-14', value: -285.6 },
            { date: '2026-04-15', value: -557.47 },
            { date: '2026-04-16', value: -189.2 },
            { date: '2026-04-19', value: -342.8 }
        ],
        northFundHistory: [
            { date: '2026-04-13', value: 15.8 },
            { date: '2026-04-14', value: -18.5 },
            { date: '2026-04-15', value: -42.3 },
            { date: '2026-04-16', value: 8.2 },
            { date: '2026-04-19', value: -28.5 }
        ],
        sectorFunds: [
            { sector: '电子', change: -174.3 },
            { sector: '通信', change: -103.6 },
            { sector: '电力设备', change: -60.3 },
            { sector: '计算机', change: -45.8 },
            { sector: '医药生物', change: -32.5 },
            { sector: '红利板块', change: 25.8 },
            { sector: '银行', change: 18.5 },
            { sector: '债券', change: 12.3 }
        ]
    },
    
    // 基金数据
    fundData: {
        '510300': {
            name: '华泰柏瑞沪深300ETF',
            code: '510300',
            type: 'fund',
            price: 3.856,
            change: 27.0,
            dayChange: -0.35,
            weekChange: 1.2,
            monthChange: 3.5,
            yearChange: 27.0,
            nav: 3.856,
            navDate: '2026-04-18',
            manager: '华泰柏瑞基金',
            size: '580亿',
            description: '跟踪沪深300指数，覆盖A股市场规模最大、经营最稳定的300家龙头企业。长期年化收益稳定在8%-10%，日均成交额超45亿元，流动性极佳。',
            navHistory: [
                { date: '2026-03-21', value: 3.45 },
                { date: '2026-03-22', value: 3.48 },
                { date: '2026-03-23', value: 3.50 },
                { date: '2026-03-24', value: 3.53 },
                { date: '2026-03-25', value: 3.52 },
                { date: '2026-03-26', value: 3.50 },
                { date: '2026-03-27', value: 3.52 },
                { date: '2026-03-28', value: 3.55 },
                { date: '2026-03-29', value: 3.58 },
                { date: '2026-03-30', value: 3.60 },
                { date: '2026-03-31', value: 3.58 },
                { date: '2026-04-01', value: 3.60 },
                { date: '2026-04-02', value: 3.62 },
                { date: '2026-04-03', value: 3.60 },
                { date: '2026-04-04', value: 3.58 },
                { date: '2026-04-05', value: 3.62 },
                { date: '2026-04-06', value: 3.65 },
                { date: '2026-04-07', value: 3.68 },
                { date: '2026-04-08', value: 3.70 },
                { date: '2026-04-09', value: 3.72 },
                { date: '2026-04-10', value: 3.75 },
                { date: '2026-04-11', value: 3.73 },
                { date: '2026-04-12', value: 3.76 },
                { date: '2026-04-13', value: 3.78 },
                { date: '2026-04-14', value: 3.80 },
                { date: '2026-04-15', value: 3.78 },
                { date: '2026-04-16', value: 3.82 },
                { date: '2026-04-17', value: 3.85 },
                { date: '2026-04-18', value: 3.86 },
                { date: '2026-04-19', value: 3.85 }
            ]
        },
        '515080': {
            name: '富国中证红利ETF',
            code: '515080',
            type: 'fund',
            price: 1.258,
            change: 12.0,
            dayChange: 0.15,
            weekChange: 0.5,
            monthChange: 1.2,
            yearChange: 12.0,
            nav: 1.258,
            navDate: '2026-04-18',
            manager: '富国基金',
            size: '156亿',
            description: '跟踪中证红利指数，选取分红稳定、股息率高的100家企业。股息率稳定在4%以上，抗跌性极强，是稳健型投资者的避风港。'
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
            description: '固收+产品，80%以上投资债券，少量股票/可转债增强收益。近一年收益率5.5%，最大回撤控制在3%以内，适合稳健型投资者。'
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
            description: '中短债基金，投资于短期债券，波动极小。年化收益3-4%，持有3-6个月风险极低，是现金管理的理想替代品。'
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
            description: '纯债基金，严格控制风险，追求长期稳健增值。过去三年增长7.48%，成立以来总收益12.78%，适合风险承受能力较低的投资者。',
            navHistory: [
                { date: '2026-03-21', value: 1.1175 },
                { date: '2026-03-22', value: 1.1178 },
                { date: '2026-03-23', value: 1.1182 },
                { date: '2026-03-24', value: 1.1185 },
                { date: '2026-03-25', value: 1.1188 },
                { date: '2026-03-26', value: 1.1192 },
                { date: '2026-03-27', value: 1.1195 },
                { date: '2026-03-28', value: 1.1198 },
                { date: '2026-03-29', value: 1.1200 },
                { date: '2026-03-30', value: 1.1205 },
                { date: '2026-03-31', value: 1.1208 },
                { date: '2026-04-01', value: 1.1210 },
                { date: '2026-04-02', value: 1.1215 },
                { date: '2026-04-03', value: 1.1218 },
                { date: '2026-04-04', value: 1.1220 },
                { date: '2026-04-05', value: 1.1225 },
                { date: '2026-04-06', value: 1.1228 },
                { date: '2026-04-07', value: 1.1232 },
                { date: '2026-04-08', value: 1.1235 },
                { date: '2026-04-09', value: 1.1238 },
                { date: '2026-04-10', value: 1.1242 },
                { date: '2026-04-11', value: 1.1245 },
                { date: '2026-04-12', value: 1.1248 },
                { date: '2026-04-13', value: 1.1250 },
                { date: '2026-04-14', value: 1.1255 },
                { date: '2026-04-15', value: 1.1258 },
                { date: '2026-04-16', value: 1.1262 },
                { date: '2026-04-17', value: 1.1265 },
                { date: '2026-04-18', value: 1.1271 },
                { date: '2026-04-19', value: 1.1278 }
            ]
        },
        '588000': {
            name: '华夏科创50ETF',
            code: '588000',
            type: 'fund',
            price: 1.285,
            change: 37.65,
            dayChange: 2.35,
            weekChange: 5.8,
            monthChange: 12.5,
            yearChange: 37.65,
            nav: 1.285,
            navDate: '2026-04-18',
            manager: '华夏基金',
            size: '650亿',
            description: '跟踪科创50指数，覆盖科创板硬科技龙头企业，包括半导体、新能源、医药等前沿领域。近一年涨幅37.65%，高弹性高波动，适合风险承受能力较强的投资者。',
            navHistory: [
                { date: '2026-03-21', value: 0.950 },
                { date: '2026-03-22', value: 0.958 },
                { date: '2026-03-23', value: 0.965 },
                { date: '2026-03-24', value: 0.972 },
                { date: '2026-03-25', value: 0.980 },
                { date: '2026-03-26', value: 0.988 },
                { date: '2026-03-27', value: 0.998 },
                { date: '2026-03-28', value: 1.008 },
                { date: '2026-03-29', value: 1.018 },
                { date: '2026-03-30', value: 1.028 },
                { date: '2026-03-31', value: 1.038 },
                { date: '2026-04-01', value: 1.048 },
                { date: '2026-04-02', value: 1.060 },
                { date: '2026-04-03', value: 1.072 },
                { date: '2026-04-04', value: 1.085 },
                { date: '2026-04-05', value: 1.095 },
                { date: '2026-04-06', value: 1.108 },
                { date: '2026-04-07', value: 1.120 },
                { date: '2026-04-08', value: 1.135 },
                { date: '2026-04-09', value: 1.148 },
                { date: '2026-04-10', value: 1.155 },
                { date: '2026-04-11', value: 1.165 },
                { date: '2026-04-12', value: 1.175 },
                { date: '2026-04-13', value: 1.188 },
                { date: '2026-04-14', value: 1.205 },
                { date: '2026-04-15', value: 1.220 },
                { date: '2026-04-16', value: 1.248 },
                { date: '2026-04-17', value: 1.235 },
                { date: '2026-04-18', value: 1.258 },
                { date: '2026-04-19', value: 1.285 }
            ]
        },
        '018956': {
            name: '中航机遇领航混合发起A',
            code: '018956',
            type: 'fund',
            price: 1.156,
            change: 11.77,
            dayChange: 1.85,
            weekChange: 11.77,
            monthChange: 8.5,
            yearChange: 18.2,
            nav: 1.156,
            navDate: '2026-04-18',
            manager: '中航基金',
            size: '28亿',
            description: '灵活配置型基金，主要投资国防军工、高端制造、新能源等战略新兴产业。近一周涨幅11.77%，短期爆发力强，基金经理擅长把握市场热点和主题投资机会。',
            navHistory: [
                { date: '2026-03-21', value: 0.895 },
                { date: '2026-03-22', value: 0.902 },
                { date: '2026-03-23', value: 0.908 },
                { date: '2026-03-24', value: 0.915 },
                { date: '2026-03-25', value: 0.922 },
                { date: '2026-03-26', value: 0.928 },
                { date: '2026-03-27', value: 0.935 },
                { date: '2026-03-28', value: 0.942 },
                { date: '2026-03-29', value: 0.948 },
                { date: '2026-03-30', value: 0.955 },
                { date: '2026-03-31', value: 0.962 },
                { date: '2026-04-01', value: 0.968 },
                { date: '2026-04-02', value: 0.975 },
                { date: '2026-04-03', value: 0.982 },
                { date: '2026-04-04', value: 0.988 },
                { date: '2026-04-05', value: 0.995 },
                { date: '2026-04-06', value: 1.002 },
                { date: '2026-04-07', value: 1.010 },
                { date: '2026-04-08', value: 1.018 },
                { date: '2026-04-09', value: 1.025 },
                { date: '2026-04-10', value: 1.032 },
                { date: '2026-04-11', value: 1.040 },
                { date: '2026-04-12', value: 1.050 },
                { date: '2026-04-13', value: 1.062 },
                { date: '2026-04-14', value: 1.075 },
                { date: '2026-04-15', value: 1.088 },
                { date: '2026-04-16', value: 1.102 },
                { date: '2026-04-17', value: 1.118 },
                { date: '2026-04-18', value: 1.135 },
                { date: '2026-04-19', value: 1.156 }
            ]
        },
        '588050': {
            name: '易方达科创50ETF',
            code: '588050',
            type: 'fund',
            price: 1.268,
            change: 35.8,
            dayChange: 2.28,
            weekChange: 5.5,
            monthChange: 12.0,
            yearChange: 35.8,
            nav: 1.268,
            navDate: '2026-04-18',
            manager: '易方达基金',
            size: '580亿',
            description: '跟踪科创50指数，与华夏科创50ETF同为核心科创板产品。易方达作为头部基金公司，ETF管理经验丰富，流动性好。近一年涨幅35.8%。',
            navHistory: [
                { date: '2026-03-21', value: 0.942 },
                { date: '2026-03-22', value: 0.950 },
                { date: '2026-03-23', value: 0.958 },
                { date: '2026-03-24', value: 0.965 },
                { date: '2026-03-25', value: 0.972 },
                { date: '2026-03-26', value: 0.980 },
                { date: '2026-03-27', value: 0.988 },
                { date: '2026-03-28', value: 0.998 },
                { date: '2026-03-29', value: 1.008 },
                { date: '2026-03-30', value: 1.018 },
                { date: '2026-03-31', value: 1.028 },
                { date: '2026-04-01', value: 1.038 },
                { date: '2026-04-02', value: 1.050 },
                { date: '2026-04-03', value: 1.062 },
                { date: '2026-04-04', value: 1.074 },
                { date: '2026-04-05', value: 1.084 },
                { date: '2026-04-06', value: 1.096 },
                { date: '2026-04-07', value: 1.108 },
                { date: '2026-04-08', value: 1.122 },
                { date: '2026-04-09', value: 1.135 },
                { date: '2026-04-10', value: 1.142 },
                { date: '2026-04-11', value: 1.152 },
                { date: '2026-04-12', value: 1.162 },
                { date: '2026-04-13', value: 1.174 },
                { date: '2026-04-14', value: 1.190 },
                { date: '2026-04-15', value: 1.205 },
                { date: '2026-04-16', value: 1.232 },
                { date: '2026-04-17', value: 1.220 },
                { date: '2026-04-18', value: 1.242 },
                { date: '2026-04-19', value: 1.268 }
            ]
        },
        '510500': {
            name: '南方中证500ETF',
            code: '510500',
            type: 'fund',
            price: 6.85,
            change: 11.8,
            dayChange: 0.85,
            weekChange: 2.5,
            monthChange: 4.2,
            yearChange: 11.8,
            nav: 6.85,
            navDate: '2026-04-18',
            manager: '南方基金',
            size: '420亿',
            description: '跟踪中证500指数，选取A股市场中盘股代表，行业分布均衡。近3年年化收益11.8%，估值处于历史中低位，安全边际较高，适合成长配置。',
            navHistory: [
                { date: '2026-03-21', value: 5.62 },
                { date: '2026-03-22', value: 5.65 },
                { date: '2026-03-23', value: 5.68 },
                { date: '2026-03-24', value: 5.72 },
                { date: '2026-03-25', value: 5.75 },
                { date: '2026-03-26', value: 5.78 },
                { date: '2026-03-27', value: 5.82 },
                { date: '2026-03-28', value: 5.85 },
                { date: '2026-03-29', value: 5.88 },
                { date: '2026-03-30', value: 5.92 },
                { date: '2026-03-31', value: 5.96 },
                { date: '2026-04-01', value: 6.00 },
                { date: '2026-04-02', value: 6.05 },
                { date: '2026-04-03', value: 6.08 },
                { date: '2026-04-04', value: 6.12 },
                { date: '2026-04-05', value: 6.15 },
                { date: '2026-04-06', value: 6.20 },
                { date: '2026-04-07', value: 6.25 },
                { date: '2026-04-08', value: 6.30 },
                { date: '2026-04-09', value: 6.35 },
                { date: '2026-04-10', value: 6.40 },
                { date: '2026-04-11', value: 6.45 },
                { date: '2026-04-12', value: 6.50 },
                { date: '2026-04-13', value: 6.55 },
                { date: '2026-04-14', value: 6.62 },
                { date: '2026-04-15', value: 6.68 },
                { date: '2026-04-16', value: 6.78 },
                { date: '2026-04-17', value: 6.73 },
                { date: '2026-04-18', value: 6.79 },
                { date: '2026-04-19', value: 6.85 }
            ]
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
            pe: 8.5,
            pb: 1.2,
            marketCap: 9500,
            weekChange: 1.2,
            monthChange: 3.5,
            sourceUrl: 'https://quote.eastmoney.com/sh600036.html'
        },
        '000001': {
            name: '平安银行',
            code: '000001',
            type: 'stock',
            price: 12.35,
            change: -0.25,
            changePercent: -1.98,
            open: 12.50,
            high: 12.55,
            low: 12.28,
            volume: 32567800,
            amount: 4.0,
            pe: 6.8,
            pb: 0.95,
            marketCap: 2400,
            weekChange: -0.8,
            monthChange: 1.2,
            sourceUrl: 'https://quote.eastmoney.com/sz000001.html'
        }
    }
};
