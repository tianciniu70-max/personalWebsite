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
    name: '前端开发工程师',
    experience: '5年企业级开发经验',
    specialization: 'Vue3 / TypeScript / 数据可视化',
    location: '📍 中国',
    status: '🔥 可入职',
    cta: {
      primary: '查看作品',
      secondary: '联系我'
    }
  },

  // About Section
  about: {
    title: '关于我',
    subtitle: '设计与代码的融合者',
    story: '我是一名拥有5年经验的前端开发工程师，专注于打造高质量的用户界面和流畅的交互体验。从设计专业转向前端开发，让我具备了独特的视觉感知力和用户体验思维。',
    highlights: [
      { icon: '💻', title: '5年经验', desc: '独立负责多个大型企业级项目' },
      { icon: '🎨', title: '设计背景', desc: '设计思维驱动的开发方式' },
      { icon: '⚡', title: '技术深度', desc: 'Vue3生态 / TypeScript / 工程化' },
      { icon: '📊', title: '数据可视化', desc: 'ECharts / D3.js / 大屏开发' }
    ],
    stats: [
      { number: '5+', label: '年经验' },
      { number: '13+', label: '项目经验' },
      { number: '100%', label: '客户满意' }
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
        name: '工程化',
        icon: 'tool',
        items: ['Vite', 'Webpack', 'ESLint / Prettier', 'Git 工作流']
      },
      {
        name: '框架生态',
        icon: 'framework',
        items: ['Vue Router', 'Pinia', 'Element Plus', 'Ant Design Vue']
      },
      {
        name: '数据可视化',
        icon: 'chart',
        items: ['ECharts', 'D3.js', '数据大屏', 'BI 可视化']
      },
      {
        name: '后端基础',
        icon: 'server',
        items: ['Node.js', 'Express', 'RESTful API', 'HTTP 协议']
      },
      {
        name: '设计工具',
        icon: 'design',
        items: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop']
      }
    ]
  },

  // Projects Section
  projects: {
    title: '项目经验',
    subtitle: '精选项目展示',
    items: [
      {
        id: 'mes',
        name: '智慧工厂 MES 系统',
        role: '前端负责人',
        duration: '2021 - 2022',
        description: '面向制造业的生产执行系统，实现生产计划、工单管理、质量追溯等核心功能。',
        tags: ['Vue3', 'TypeScript', 'Element Plus', 'ECharts'],
        achievements: ['提升生产效率30%', '服务3+制造企业', '组件库复用']
      },
      {
        id: 'oee',
        name: 'OEE 设备管理系统',
        role: '前端开发',
        duration: '2022 - 2023',
        description: '设备综合效率监测系统，实时数据采集与可视化分析。',
        tags: ['Vue3', 'Composition API', 'ECharts', 'WebSocket'],
        achievements: ['设备利用率+15%', '100+设备监控', '实时数据']
      },
      {
        id: 'dashboard',
        name: '数据可视化平台',
        role: '核心开发',
        duration: '2023 - 至今',
        description: '企业级数据可视化解决方案，支持拖拽式报表生成和大数据展示。',
        tags: ['Vue3', 'D3.js', 'Vite', '响应式'],
        achievements: ['1000+日活用户', '多客户现场部署', '自研组件库']
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
        type: 'GitHub',
        value: 'github.com/yourusername',
        icon: 'github',
        description: '查看我的代码',
        url: 'https://github.com/yourusername'
      },
      {
        type: '邮箱',
        value: 'your.email@example.com',
        icon: 'email',
        description: '发送邮件联系',
        url: 'mailto:your.email@example.com'
      },
      {
        type: '微信',
        value: 'your_wechat_id',
        icon: 'wechat',
        description: '扫码添加微信',
        url: ''
      }
    ],
    cta: '期待与您的交流',
    emailCta: '发送邮件'
  },

  // Footer
  footer: {
    copyright: '© 2024 Frontend Engineer Portfolio. All rights reserved.',
    madeWith: '用 Vue3 + TypeScript 构建'
  }
}
