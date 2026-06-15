export default {
  // Navigation
  nav: {
    home: '首页',
    about: '关于',
    skills: '技能',
    projects: '项目',
    design: '设计思维',
    career: '赴日发展',
    contact: '联系'
  },

  // Hero Section
  hero: {
    tagline: 'Design Thinking × Frontend Engineering',
    greeting: '你好，我是',
    name: '前端工程师',
    experience: '5 年企业级前端开发经验',
    specialization: '专注 Vue3 生态 / 数据可视化 / 组件化开发',
    cta: {
      primary: '查看作品',
      secondary: '下载简历'
    }
  },

  // About Section
  about: {
    title: '关于我',
    subtitle: '从服装设计到前端开发：设计思维驱动技术实现',
    story: `我是一名拥有 5 年经验的前端工程师，同时也是一名跨界开发者。
    本科毕业于服装与服饰设计专业，这段独特的经历让我具备了敏锐的视觉审美和用户体验感知。

    转型前端开发后，我将设计思维融入代码实现：
    从用户体验角度思考交互逻辑、用视觉层级能力优化信息架构、以设计规范思维构建可维护的组件系统。

    在职业生涯中，我独立负责过多个大型企业级项目，包括 MES 系统、数据可视化平台、
    企业后台管理系统等。这些经验让我深入理解业务需求，并将复杂需求转化为优雅的前端解决方案。`,
    highlights: [
      { label: '跨界背景', desc: '设计专业 × 前端工程的双重思维' },
      { label: '5年经验', desc: '独立负责大型项目全流程开发' },
      { label: '技术深度', desc: 'Vue3 生态 / 组件化 / 工程化 / 性能优化' },
      { label: '日本意向', desc: '希望长期在日本从事前端开发工作' }
    ]
  },

  // Skills Section
  skills: {
    title: '专业技能',
    subtitle: '前端技术栈 × 工程化能力 × 数据可视化',
    categories: [
      {
        name: '前端核心',
        icon: 'code',
        items: ['Vue3 / Composition API', 'TypeScript / JavaScript ES6+', 'HTML5 / CSS3 / SCSS', 'Vite / Webpack']
      },
      {
        name: '框架与工具',
        icon: 'tool',
        items: ['Element Plus / Ant Design', 'Pinia / Vuex', 'Vue Router', 'Axios / RESTful API']
      },
      {
        name: '数据可视化',
        icon: 'chart',
        items: ['ECharts / D3.js', '数据驾驶舱开发', 'BI 可视化平台', '大屏展示方案']
      },
      {
        name: '工程化与协作',
        icon: 'git',
        items: ['Git 工作流', '组件化开发', '性能优化', '团队协作']
      }
    ]
  },

  // Projects Section
  projects: {
    title: '项目经验',
    subtitle: '企业级前端项目实战经验',
    items: [
      {
        id: 'mes',
        name: '智慧工厂 MES 系统',
        role: '前端负责人',
        duration: '2021 - 2022',
        description: '面向制造业的生产执行系统，实现生产计划、工单管理、质量追溯、设备监控等核心功能。系统服务于多家制造企业，提升生产效率约 30%。',
        tech_stack: ['Vue3 + TypeScript', 'Element Plus', 'ECharts 数据可视化', 'WebSocket 实时通信'],
        responsibilities: [
          '独立负责前端架构设计与技术选型',
          '开发核心业务组件库，提高 40% 开发效率',
          '实现复杂表单与数据可视化模块',
          '优化首屏加载性能，降低 50% 加载时间'
        ],
        achievements: [
          '系统成功上线并稳定运行 2 年',
          '支撑 3+ 制造企业日常生产管理',
          '组件库复用于公司其他项目'
        ]
      },
      {
        id: 'oee',
        name: 'OEE 设备管理系统',
        role: '前端开发工程师',
        duration: '2022 - 2023',
        description: '专注于设备综合效率（OEE）监测与分析的系统，通过实时数据采集与可视化，帮助工厂提高设备利用率，减少停机时间。',
        tech_stack: ['Vue3 + Composition API', 'TypeScript', 'ECharts', 'Pinia 状态管理'],
        responsibilities: [
          '开发设备状态实时监控大屏',
          '实现 OEE 指标计算与可视化',
          '优化大数据量渲染性能',
          '编写可复用图表组件'
        ],
        achievements: [
          '帮助客户提升设备利用率 15%',
          '支持 100+ 设备同时在线监控',
          '图表组件被纳入公司公共组件库'
        ]
      },
      {
        id: 'dashboard',
        name: '数据驾驶舱大屏 + BI 可视化平台',
        role: '前端核心开发',
        duration: '2023 - 至今',
        description: '企业级数据可视化解决方案，包括大屏展示和数据自助分析平台。支持拖拽式报表生成、多维度数据分析、实时数据刷新等功能。',
        tech_stack: ['Vue3 + TypeScript', 'ECharts / D3.js', 'Vite 构建优化', '响应式设计'],
        responsibilities: [
          '主导数据可视化模块开发',
          '设计可配置化图表组件系统',
          '实现大屏自适应布局方案',
          '优化复杂场景下的渲染性能'
        ],
        achievements: [
          '支撑公司核心业务数据展示',
          '日均访问量 1000+ 用户',
          '大屏方案成功应用于多个客户现场'
        ]
      }
    ]
  },

  // Design Thinking Section
  designThinking: {
    title: '设计思维',
    subtitle: '设计背景带来的独特优势',
    intro: '我的服装设计专业背景不是"转型"的故事，而是"融合"的故事。设计训练培养了三个核心能力，这些都直接转化为前端开发优势：',
    pillars: [
      {
        title: '用户视角',
        desc: '从用户体验出发设计交互流程，而非仅仅实现功能',
        examples: [
          '思考用户的使用场景和心理预期',
          '设计符合直觉的交互反馈',
          '关注可访问性与易用性'
        ]
      },
      {
        title: '视觉层级',
        desc: '运用视觉设计原则组织信息架构',
        examples: [
          '通过对比、对齐、重复建立视觉秩序',
          '利用留白引导用户注意力',
          '设计清晰的信息层级与阅读路径'
        ]
      },
      {
        title: '细节敏感',
        desc: '对像素级细节的追求，打造精致的产品体验',
        examples: [
          '关注动画过渡的自然流畅',
          '打磨交互状态的视觉反馈',
          '保持设计系统的一致性'
        ]
      }
    ],
    closing: '这些能力让我不仅能写代码，更能与设计师高效协作，理解设计意图，并将其精准还原为高质量的前端实现。'
  },

  // Japan Career Section
  japanCareer: {
    title: '赴日发展',
    subtitle: '希望长期在日本从事前端开发工作',
    motivation: `我希望赴日本发展的动机源于对日本数字化产品和国际化团队的向往。
    日本市场对产品质量和用户体验的高标准要求，与我对技术细节的追求高度契合。
    我欣赏日本企业文化中的责任感、团队协作精神和长期主义价值观。`,
    whyJapan: [
      { title: '产品质量文化', desc: '日本企业对产品细节和品质的重视，与我个人的开发理念高度一致' },
      { title: '技术成长环境', desc: '希望在日本的技术环境中持续学习，参与国际化项目开发' },
      { title: '长期职业规划', desc: '寻求稳定的长期发展机会，希望在日本建立职业生涯' }
    ],
    language: {
      status: '日语学习中',
      level: 'N4 → N3 目标',
      commitment: '持续提升日语能力，尽快融入团队协作'
    },
    valueProposition: '我能为日本企业带来：',
    values: [
      '5 年 Vue3 企业级开发经验',
      '数据可视化与复杂交互开发能力',
      '设计背景带来的用户体验意识',
      '跨专业学习能力与适应力',
      '稳定长期的工作承诺'
    ]
  },

  // Contact Section
  contact: {
    title: '联系我',
    subtitle: '期待与您交流合作机会',
    channels: [
      { type: 'Email', value: 'your.email@example.com', icon: 'email', url: 'mailto:your.email@example.com' },
      { type: 'GitHub', value: 'github.com/yourusername', icon: 'github', url: 'https://github.com/yourusername' },
      { type: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
      { type: 'WeChat', value: 'your_wechat_id', icon: 'wechat', url: '' }
    ],
    cta: '期待与您进一步交流'
  },

  // Footer
  footer: {
    copyright: '© 2024 Frontend Engineer Portfolio. All rights reserved.',
    madeWith: 'Made with Vue3 + TypeScript'
  }
}
