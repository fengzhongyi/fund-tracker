// ==================== 数据获取配置 ====================
const API_CONFIG = {
    // 天天基金实时净值API (HTTPS版本，支持跨域)
    fundRealtimeUrl: 'https://fundgz.1234567.com.cn/js/{code}.js?rt={timestamp}',
    
    // 东方财富历史净值API (HTTPS版本)
    fundHistoryUrl: 'https://fundf10.eastmoney.com/F10DataApi.aspx?type=lsjz&code={code}&page=1&sdate={start}&edate={end}&per=20',
    
    // 东方财富大盘指数API (需要特殊处理)
    indexUrl: 'https://push2.eastmoney.com/api/qt/ulist.np/get',
    
    // 指数代码映射
    indexCodes: {
        shangzhi: '1.000001',  // 上证指数
        shengzheng: '0.399001', // 深证成指
        chuangye: '0.399006',   // 创业板指
        zhuanke50: '1.000688'  // 科创50
    },
    
    // 关注的基金列表
    watchFunds: ['510300', '588000', '515080', '510500', '006546', '110017'],
    
    // 刷新间隔（毫秒）
    refreshInterval: 60000
};

// ==================== 缓存机制 ====================
const DataCache = {
    // 缓存有效期（5分钟）
    CACHE_DURATION: 5 * 60 * 1000,
    
    cache: {},
    
    set(key, data) {
        this.cache[key] = {
            data: data,
            timestamp: Date.now()
        };
    },
    
    get(key) {
        const item = this.cache[key];
        if (!item) return null;
        
        if (Date.now() - item.timestamp > this.CACHE_DURATION) {
            delete this.cache[key];
            return null;
        }
        return item.data;
    },
    
    clear() {
        this.cache = {};
    }
};

// ==================== API调用工具 ====================
const ApiService = {
    // 使用JSONP获取基金实时数据
    getFundRealtime(code) {
        return new Promise((resolve, reject) => {
            // 检查缓存
            const cacheKey = `fund_realtime_${code}`;
            const cached = DataCache.get(cacheKey);
            if (cached) {
                resolve(cached);
                return;
            }
            
            const timestamp = Date.now();
            const url = API_CONFIG.fundRealtimeUrl
                .replace('{code}', code)
                .replace('{timestamp}', timestamp);
            
            // JSONP回调
            const callbackName = `jsonpgz_${code}_${timestamp}`;
            
            // 设置超时
            const timeout = setTimeout(() => {
                cleanup();
                reject(new Error('请求超时'));
            }, 10000);
            
            // 清理函数
            const cleanup = () => {
                clearTimeout(timeout);
                delete window[callbackName];
                const script = document.getElementById(callbackName);
                if (script) script.remove();
            };
            
            // 创建JSONP请求
            window[callbackName] = (data) => {
                cleanup();
                if (data && data.fundcode) {
                    DataCache.set(cacheKey, data);
                    resolve(data);
                } else {
                    reject(new Error('数据格式错误'));
                }
            };
            
            const script = document.createElement('script');
            script.id = callbackName;
            script.src = url;
            script.onerror = () => {
                cleanup();
                reject(new Error('网络请求失败'));
            };
            document.head.appendChild(script);
        });
    },
    
    // 批量获取基金数据
    async getBatchFundRealtime(codes) {
        const results = {};
        const promises = codes.map(async (code) => {
            try {
                const data = await this.getFundRealtime(code);
                results[code] = {
                    success: true,
                    data: data
                };
            } catch (error) {
                results[code] = {
                    success: false,
                    error: error.message
                };
            }
        });
        await Promise.all(promises);
        return results;
    },
    
    // 获取基金历史净值（通过页面解析）
    async getFundHistory(code, days = 30) {
        const cacheKey = `fund_history_${code}`;
        const cached = DataCache.get(cacheKey);
        if (cached) return cached;
        
        try {
            const end = new Date();
            const start = new Date();
            start.setDate(start.getDate() - days);
            
            const url = API_CONFIG.fundHistoryUrl
                .replace('{code}', code)
                .replace('{start}', this.formatDate(start))
                .replace('{end}', this.formatDate(end));
            
            const response = await fetch(url);
            const text = await response.text();
            
            // 解析HTML表格
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const rows = doc.querySelectorAll('tbody tr');
            
            const history = [];
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length >= 4) {
                    history.push({
                        date: cells[0].textContent.trim(),
                        nav: parseFloat(cells[1].textContent) || 0,
                        cumNav: parseFloat(cells[2].textContent) || 0,
                        change: cells[3].textContent.trim()
                    });
                }
            });
            
            DataCache.set(cacheKey, history);
            return history;
        } catch (error) {
            console.error(`获取基金${code}历史数据失败:`, error);
            return [];
        }
    },
    
    formatDate(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
};

// ==================== 指数数据获取 ====================
// 由于东方财富/新浪等接口需要特定headers才能跨域，
// 这里使用天天基金的大盘数据来估算指数变化
const IndexService = {
    // 模拟指数数据（基于基金估算）
    async getIndexData() {
        const cacheKey = 'index_data';
        const cached = DataCache.get(cacheKey);
        if (cached) return cached;
        
        try {
            // 获取主要ETF的实时数据来估算大盘
            const fundData = await ApiService.getBatchFundRealtime(['510300', '588000']);
            
            const data = {
                shangzhi: { name: '上证指数', value: '--', change: '--', volume: '--' },
                shengzheng: { name: '深证成指', value: '--', change: '--', volume: '--' },
                chuangye: { name: '创业板指', value: '--', change: '--', volume: '--' },
                zhuanke50: { name: '科创50', value: '--', change: '--', volume: '--' }
            };
            
            // 从沪深300ETF估算上证指数
            if (fundData['510300']?.success) {
                const d = fundData['510300'].data;
                data.shangzhi.value = (parseFloat(d.gsz) * 850).toFixed(2);
                data.shangzhi.change = d.gszzl + '%';
                data.shangzhi.volume = '约2.5万亿';
            }
            
            // 从科创50ETF估算科创50
            if (fundData['588000']?.success) {
                const d = fundData['588000'].data;
                data.zhuanke50.value = (parseFloat(d.gsz) * 950).toFixed(2);
                data.zhuanke50.change = d.gszzl + '%';
                data.zhuanke50.volume = '约1000亿';
            }
            
            DataCache.set(cacheKey, data);
            return data;
        } catch (error) {
            console.error('获取指数数据失败:', error);
            return null;
        }
    }
};

// ==================== 数据管理器 ====================
const DataManager = {
    // 实时基金数据
    realtimeFunds: {},
    
    // K线数据
    klineData: {},
    
    // 是否正在加载
    isLoading: false,
    
    // 初始化
    async init() {
        this.isLoading = true;
        this.updateStatus('正在加载实时数据...');
        
        try {
            // 批量获取基金实时数据
            const results = await ApiService.getBatchFundRealtime(API_CONFIG.watchFunds);
            
            results.forEach((result, code) => {
                if (result.success) {
                    this.realtimeFunds[code] = result.data;
                }
            });
            
            this.updateStatus(`数据加载完成 ${new Date().toLocaleString()}`);
            this.isLoading = false;
            return true;
        } catch (error) {
            console.error('初始化数据失败:', error);
            this.updateStatus('数据加载失败');
            this.isLoading = false;
            return false;
        }
    },
    
    // 刷新数据
    async refresh() {
        DataCache.clear();
        return this.init();
    },
    
    // 更新状态显示
    updateStatus(message) {
        const statusEl = document.getElementById('update-time');
        if (statusEl) {
            statusEl.textContent = message;
        }
    },
    
    // 获取单个基金数据
    getFund(code) {
        return this.realtimeFunds[code] || null;
    }
};

// 导出到全局
window.DataManager = DataManager;
window.ApiService = ApiService;
window.IndexService = IndexService;
window.DataCache = DataCache;
window.API_CONFIG = API_CONFIG;
