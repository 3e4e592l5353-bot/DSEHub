// config.js - 全局配置中心
// 所有站点共享的配置

const DSE_CONFIG = {
    // Supabase 配置
    SUPABASE: {
        URL: 'https://alsalyskulozwakhmzoa.supabase.co',
        ANON_KEY: 'sb_publishable_SYzZpjbWZgKUzzGQxR-jGg_B1em-5Tr',
        // 注意：这里只使用公开的anon key，不要放service key！
    },
    
    // 主题配置
    THEMES: {
        DEFAULT: 'theme-blue-purple',
        AVAILABLE: [
            'theme-blue-purple',
            'theme-green-teal',
            'theme-orange-red',
            'theme-dark',
            'theme-orange-teal'
        ],
        // 主题名称映射（用于从数据库值转换为CSS类名）
        NAME_MAPPING: {
            'blue-purple': 'theme-blue-purple',
            'green-teal': 'theme-green-teal',
            'orange-red': 'theme-orange-red',
            'dark': 'theme-dark',
            'orange-teal': 'theme-orange-teal',
            '蓝紫主题': 'theme-blue-purple',
            '绿青主题': 'theme-green-teal',
            '橙红主题': 'theme-orange-red',
            '深色主题': 'theme-dark',
            '橙青主题': 'theme-orange-teal'
        }
    },
    
    // 科目配置 - 严格按照主站的分科
    SUBJECTS: {
        // 主科
        CHINESE: {
            id: 'chinese',
            name: '语文',
            categories: ['文言文', '现代文', '作文', '诗词', '文学常识']
        },
        ENGLISH: {
            id: 'english',
            name: '英语',
            categories: ['语法', '词汇', '阅读', '写作', '听力']
        },
        MATHEMATICS: {
            id: 'mathematics',
            name: '数学',
            categories: ['代数', '几何', '概率统计', '微积分', '函数']
        },
        // 理科
        PHYSICS: {
            id: 'physics',
            name: '物理',
            categories: ['力学', '电磁学', '光学', '热学', '近代物理']
        },
        CHEMISTRY: {
            id: 'chemistry',
            name: '化学',
            categories: ['无机化学', '有机化学', '物理化学', '分析化学']
        },
        BIOLOGY: {
            id: 'biology',
            name: '生物',
            categories: ['细胞学', '遗传学', '生态学', '生理学', '进化论']
        },
        // 文科
        HISTORY: {
            id: 'history',
            name: '历史',
            categories: ['中国历史', '世界历史', '古代史', '近代史', '现代史']
        },
        GEOGRAPHY: {
            id: 'geography',
            name: '地理',
            categories: ['自然地理', '人文地理', '区域地理', '地图知识']
        },
        // 其他
        LIBERAL_STUDIES: {
            id: 'liberal-studies',
            name: '通识教育',
            categories: ['时事', '社会', '文化', '科技', '全球化']
        },
        INFORMATION_TECH: {
            id: 'information-tech',
            name: '信息科技',
            categories: ['编程', '网络', '数据库', '人工智能']
        }
    },
    
    // 应用配置
    APP: {
        NOTES_PER_PAGE: 20,
        SESSION_DURATION: 7 * 24 * 60 * 60 * 1000, // 7天
        STORAGE_PREFIX: 'dsehub_',
        DEBUG: true,
        CROSS_SITE_ENABLED: true
    },
    
    // API 端点
    API_ENDPOINTS: {
        // 认证相关
        AUTH: {
            USER: '/auth/v1/user',
            AUTHORIZE: '/auth/v1/authorize'
        },
        // 数据相关
        DATA: {
            PROFILES: '/rest/v1/profiles',
            SUBMISSIONS: '/rest/v1/submissions',
            LIKES: '/rest/v1/likes',
            CROSS_SITE_SESSIONS: '/rest/v1/cross_site_sessions',
            QUESTIONS: '/rest/v1/questions'
        }
    }
};

// 导出配置
window.DSE_CONFIG = DSE_CONFIG;
