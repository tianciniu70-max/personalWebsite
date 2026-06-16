export default {
  // Navigation
  nav: {
    home: '首页',
    about: '关于',
    experience: '经历',
    skills: '技能',
    projects: '项目',
    contact: '联系'
  },

  // Hero Section
  hero: {
    tagline: '前端开发工程师',
    greeting: '你好，我是',
    name: '牛天赐',
    experience: '27岁 · 5年企业级前端开发经验',
    specialization: '专注 Vue3 生态 / 工业制造 MES 系统 / 数据可视化',
    location: '📍 江苏徐州',
    status: '🔥 可入职',
    cta: {
      primary: '查看项目',
      secondary: '联系我'
    }
  },

  // About Section
  about: {
    title: '关于我',
    subtitle: '前端工程师 · 江苏徐州',
    story: '我是一名拥有5年经验的前端开发工程师，毕业于苏州工学院。专注于工业制造领域的前端开发，深耕设备全连接与特种工艺两大业务方向，主导多个大型企业级项目的开发与交付。',
    highlights: [
      { title: '工业制造经验', desc: '深耕 MES/设备管理系统开发' },
      { title: '全栈思维', desc: '前端开发 + 组件库建设' },
      { title: '项目落地', desc: '主导多个项目从0到1交付' },
      { title: '持续优化', desc: '性能优化与代码质量追求' }
    ],
    stats: [
      { number: '5+', label: '年开发经验' },
      { number: '4+', label: '大型项目' },
      { number: '100%', label: '项目交付' }
    ]
  },

  // Skills Section
  skills: {
    title: '专业技能',
    subtitle: '技术栈与工具',
    categories: [
      {
        name: '前端核心',
        icon: 'code',
        items: ['Vue3 / Composition API', 'TypeScript', 'JavaScript ES6+', 'HTML5 / CSS3']
      },
      {
        name: '企业级组件库',
        icon: 'tool',
        items: ['Element Plus', 'Ant Design Vue', '自定义组件库']
      },
      {
        name: '工程化工具',
        icon: 'settings',
        items: ['Vite', 'Webpack', 'ESLint / Prettier', 'Git 工作流']
      },
      {
        name: '数据可视化',
        icon: 'chart',
        items: ['ECharts', 'DataV', '工业数据大屏', '实时监控']
      },
      {
        name: '工业领域',
        icon: 'factory',
        items: ['MES 系统', '设备管理', 'OEE 分析', '告警中心']
      },
      {
        name: '开发工具',
        icon: 'devtools',
        items: ['VS Code', 'Chrome DevTools', 'Postman', 'Git']
      }
    ]
  },

  // Projects Section
  projects: {
    title: '项目经验',
    subtitle: '2025年度精选项目',
    items: [
      {
        id: 'hua-rui',
        name: '华瑞——设备全连接',
        role: '前端负责人',
        duration: '2025',
        description: '面向制造业的设备全连接管理平台，完成设备监控、设备 OEE、告警中心、告警参数配置、OEE 配置等核心模块开发。',
        tags: ['Vue3', 'TypeScript', 'ECharts', 'Element Plus'],
        responsibilities: [
          '主导前端架构设计与技术选型',
          '开发设备监控和 OEE 分析模块',
          '建设告警中心和参数配置系统',
          '进行性能优化和 Bug 修复'
        ],
        achievements: ['设备实时监控', 'OEE 效率分析', '告警管理', '性能优化']
      },
      {
        id: 'tian-suo',
        name: '天梭——特种工艺',
        role: '核心开发',
        duration: '2025',
        description: '特种工艺过程管理平台，完成录入分析母本、录入分析、文档模板管理、刀具管理、App 管理等核心功能模块。',
        tags: ['Vue3', 'Composition API', 'TypeScript', 'Element Plus'],
        responsibilities: [
          '开发录入分析母本和录入模块',
          '建设文档模板管理系统',
          '实现刀具生命周期管理',
          '持续进行功能优化和代码重构'
        ],
        achievements: ['工艺流程数字化', '刀具生命周期管理', '文档模板复用', '功能持续优化']
      },
      {
        id: 'shang-fei',
        name: '上飞院——设备全连接',
        role: '独立开发',
        duration: '2025',
        description: '基于华瑞项目的定制化改造，完成菜单路由重新规划，独立开发设备综览、设备运维、流程中心、数据统计等模块。',
        tags: ['Vue3', 'Vue Router', 'TypeScript', 'ECharts', 'Element Plus'],
        responsibilities: [
          '菜单路由架构重新设计',
          '独立开发设备综览模块',
          '建设设备运维系统',
          '开发流程中心和数据统计',
          '建设告警管理系统'
        ],
        achievements: ['菜单架构重构', '设备运维体系', '告警仪表盘', '规则管理引擎']
      },
      {
        id: 'dong-qing',
        name: '东轻——特种工艺',
        role: '前端开发',
        duration: '2025',
        description: '特种工艺过程监控平台，负责产品轴、告警中心等功能模块的需求实现与持续优化。',
        tags: ['Vue3', 'TypeScript', 'ECharts', 'WebSocket'],
        responsibilities: [
          '开发过程监控相关模块',
          '建设产品轴和告警中心',
          '进行 Bug 修复和性能优化',
          '代码维护和版本更新'
        ],
        achievements: ['过程可视化监控', '告警中心建设', '版本迭代优化']
      }
    ]
  },

  // Contact Section
  contact: {
    title: '联系我',
    subtitle: '期待与您的交流',
    intro: '如果您对我的背景感兴趣，或有任何合作机会，欢迎随时联系',
    channels: [
      {
        type: '电话',
        value: '18811965574',
        icon: 'phone',
        description: '工作日 9:00-18:00',
        url: 'tel:18811965574'
      },
      {
        type: '邮箱',
        value: 'xnfly778@163.com',
        icon: 'email',
        description: '发送邮件联系',
        url: 'mailto:xnfly778@163.com'
      },
      {
        type: '地点',
        value: '江苏徐州',
        icon: 'location',
        description: '可接受远程/现场',
        url: ''
      }
    ],
    cta: '期待与您的交流',
    emailCta: '发送邮件'
  },

  // Footer
  footer: {
    copyright: '© 2025 牛天赐 · 前端开发工程师',
    madeWith: '用 Vue3 + TypeScript 构建'
  }
}
