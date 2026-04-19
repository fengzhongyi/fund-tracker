# 个人投资看板

一个简洁现代的个人投资看板网站，用于查看每日股市基金分析报告和查询基金/股票信息。

## 📁 文件结构

```
投资看板/
├── index.html      # 主页面入口
├── styles.css      # 样式文件
├── data.js         # 示例数据文件
├── app.js          # 应用逻辑
└── README.md       # 说明文档
```

## 🚀 快速开始

### 方法一：直接打开
直接双击 `index.html` 文件，即可在浏览器中打开网站。

### 方法二：本地服务器
```bash
# 使用 Python 3
cd 投资看板
python -m http.server 8080

# 或使用 Node.js
npx serve .
```
然后在浏览器中访问 `http://localhost:8080`

## 📱 功能说明

### 1. 今日看板
- **早间分析**：资金流向摘要、推荐基金、风险提示、操作建议
- **午后分析**：行情回顾、板块轮动、明日展望
- **自选动态**：快速查看关注的基金/股票

### 2. 基金/股票查询
- 支持按基金代码查询（如 510300、159915）
- 支持按股票代码查询（如 600036、000858）
- 显示详细信息：价格、涨跌、历史表现等

### 3. 资金流向
- 主力资金、北向资金、南向资金概览
- 大盘资金流向图表（ECharts 可视化）
- 热门板块资金变化排名

### 4. 我的自选
- 添加关注的基金/股票
- 一键查看自选动态
- 支持删除自选
- 数据保存在浏览器本地（localStorage）

### 5. 历史报告
- 往期分析报告存档
- 按日期范围筛选
- 点击查看详细内容

## ⚙️ 数据更新

### 更新示例数据

编辑 `data.js` 文件，修改 `SAMPLE_DATA` 对象中的数据：

```javascript
const SAMPLE_DATA = {
    // 更新日期
    today: '2024-01-20',
    
    // 更新早间报告
    morningReport: {
        time: '08:30',
        fundFlowSummary: {
            mainInflow: 150.25,    // 主力净流入（亿元）
            // ...
        },
        // ...
    },
    
    // 更新基金数据
    fundData: {
        '510300': {
            name: '沪深300ETF',
            code: '510300',
            price: 3.92,           // 最新价格
            change: 1.85,          // 涨跌幅 %
            // ...
        },
        // 添加更多基金...
    },
    
    // 更新股票数据
    stockData: {
        '600036': {
            name: '招商银行',
            code: '600036',
            price: 36.50,
            change: 2.15,
            // ...
        },
        // 添加更多股票...
    },
    
    // 更新自选列表
    watchlist: [...],
    
    // 更新历史报告
    historyReports: [...]
};
```

### 对接真实API（高级）

如需对接真实数据源，可修改 `app.js` 中的数据加载函数：

```javascript
// 示例：获取基金数据
async function fetchFundData(code) {
    try {
        const response = await fetch(`https://api.example.com/fund/${code}`);
        const data = await response.json();
        return {
            name: data.name,
            price: data.price,
            change: data.change,
            // ...
        };
    } catch (error) {
        console.error('获取数据失败:', error);
        return null;
    }
}
```

## 🎨 自定义主题

修改 `styles.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #1a73e8;    /* 主色调 */
    --success-color: #34a853;     /* 上涨颜色 */
    --danger-color: #ea4335;     /* 下跌颜色 */
    --warning-color: #fbbc04;    /* 警告颜色 */
    --bg-color: #f5f7fa;          /* 背景色 */
    --text-primary: #202124;      /* 主文字色 */
    --text-secondary: #5f6368;   /* 次要文字色 */
}
```

## 📦 部署到服务器

### GitHub Pages
1. 将文件推送到 GitHub 仓库
2. 进入 Settings → Pages
3. 选择 branch 为 main
4. 访问 `https://yourusername.github.io/repo-name`

### 其他静态托管
- Vercel
- Netlify
- 阿里云 OSS
- 腾讯云 COS

## 🔧 常见问题

### Q: 数据保存在哪里？
A: 用户自选数据保存在浏览器 localStorage 中，清除浏览器数据会丢失。

### Q: 如何添加新的基金/股票？
A: 在 `data.js` 的 `fundData` 或 `stockData` 对象中添加新的代码和数据即可。

### Q: 图表不显示怎么办？
A: 检查网络连接，确保可以加载 ECharts CDN。

### Q: 如何清除所有自选？
A: 在浏览器控制台执行：`localStorage.removeItem('investment_dashboard_data')`

## 📄 许可证

MIT License - 可自由使用和修改

---

*最后更新：2024年1月*
