export default {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact'
  },

  // Hero Section
  hero: {
    status: 'Open to Work',
    statusIcon: '🔥',
    tagline: 'Frontend Developer',
    greeting: 'Hello, I\'m',
    name: 'Niu Tianci',
    experience: '27 years old · 5 Years of Enterprise Development',
    specialization: 'Vue3 Ecosystem / Industrial MES Systems / Data Visualization',
    availability: 'Available for opportunities',
    location: '📍 Xuzhou, Jiangsu',
    cta: {
      primary: 'View Projects',
      secondary: 'Contact Me'
    }
  },

  // About Section
  about: {
    title: 'About Me',
    subtitle: 'Frontend Engineer · Xuzhou, Jiangsu',
    story: `I am a frontend engineer with 5 years of experience, graduated from Suzhou Institute of Technology.
    Specialized in frontend development for industrial manufacturing, deeply engaged in equipment full connection and special process business directions.
    Led development and delivery of multiple large-scale enterprise projects.`,
    highlights: [
      { label: 'Industrial Expertise', desc: 'Deep experience in MES/equipment management systems' },
      { label: 'Full-Stack Thinking', desc: 'Frontend development + component library architecture' },
      { label: 'Project Delivery', desc: 'Led multiple projects from 0 to 1' },
      { label: 'Continuous Optimization', desc: 'Performance optimization and code quality focus' }
    ],
    stats: [
      { number: '5+', label: 'Years Experience' },
      { number: '4+', label: 'Large Projects' },
      { number: '100%', label: 'Project Delivery' }
    ]
  },

  // Skills Section
  skills: {
    title: 'Skills',
    subtitle: 'Technical Stack & Tools',
    categories: [
      {
        name: 'Core Frontend',
        icon: 'code',
        items: ['Vue3 / Composition API', 'TypeScript / JavaScript ES6+', 'HTML5 / CSS3 / SCSS', 'Vite / Webpack']
      },
      {
        name: 'Enterprise UI',
        icon: 'tool',
        items: ['Element Plus', 'Ant Design Vue', 'Custom Component Library']
      },
      {
        name: 'Data Visualization',
        icon: 'chart',
        items: ['ECharts', 'DataV', 'Industrial Dashboards', 'Real-time Monitoring']
      },
      {
        name: 'Industrial Domain',
        icon: 'factory',
        items: ['MES Systems', 'Equipment Management', 'OEE Analysis', 'Alarm Centers']
      },
      {
        name: 'Engineering',
        icon: 'git',
        items: ['ESLint / Prettier', 'Git Workflow', 'Performance Optimization', 'Team Collaboration']
      },
      {
        name: 'Development Tools',
        icon: 'settings',
        items: ['VS Code', 'Chrome DevTools', 'Postman', 'Git']
      }
    ]
  },

  // Projects Section
  projects: {
    title: 'Projects',
    subtitle: '2025 Selected Projects',
    items: [
      {
        id: 'hua-rui',
        name: 'Huarui — Equipment Full Connection',
        role: 'Lead Frontend Developer',
        duration: '2025',
        description: 'Equipment full connection management platform for manufacturing. Developed core modules including equipment monitoring, OEE analysis, alarm center, and configuration management.',
        tech_stack: ['Vue3', 'TypeScript', 'ECharts', 'Element Plus'],
        responsibilities: [
          'Led frontend architecture and technology decisions',
          'Developed equipment monitoring and OEE analysis modules',
          'Built alarm center and parameter configuration system',
          'Conducted performance optimization and bug fixes'
        ],
        achievements: [
          'Real-time equipment monitoring',
          'OEE efficiency analysis',
          'Comprehensive alarm management',
          'System stability and continuous iteration'
        ]
      },
      {
        id: 'tian-suo',
        name: 'Tiansuo — Special Process',
        role: 'Core Developer',
        duration: '2025',
        description: 'Special process management platform. Developed core modules including analysis master template, analysis entry, document template management, tool management, and App management.',
        tech_stack: ['Vue3', 'Composition API', 'TypeScript', 'Element Plus'],
        responsibilities: [
          'Developed analysis master template and entry modules',
          'Built document template management system',
          'Implemented tool lifecycle management',
          'Continuous feature optimization and code refactoring'
        ],
        achievements: [
          'Digital process workflow',
          'Tool lifecycle management',
          'Document template reuse',
          'Continuous functional optimization'
        ]
      },
      {
        id: 'shang-fei',
        name: 'Shangfeiyuan — Equipment Full Connection',
        role: 'Independent Developer',
        duration: '2025',
        description: 'Customized migration based on Huarui project. Completed menu route restructuring and independently developed equipment overview, operation & maintenance, process center, data statistics, and comprehensive alarm management system.',
        tech_stack: ['Vue3', 'Vue Router', 'TypeScript', 'ECharts', 'Element Plus'],
        responsibilities: [
          'Menu route architecture redesign',
          'Independently developed equipment overview module',
          'Built operation & maintenance system',
          'Developed process center and data statistics',
          'Comprehensive alarm management system'
        ],
        achievements: [
          'Menu architecture restructuring',
          'Equipment operation & maintenance system',
          'Alarm dashboard and rule engine',
          'Project successfully delivered'
        ]
      },
      {
        id: 'dong-qing',
        name: 'Dongqing — Special Process',
        role: 'Frontend Developer',
        duration: '2025',
        description: 'Special process monitoring platform. Developed product axis and alarm center modules with continuous optimization and version updates.',
        tech_stack: ['Vue3', 'TypeScript', 'ECharts', 'WebSocket'],
        responsibilities: [
          'Developed process monitoring modules',
          'Built product axis and alarm center',
          'Bug fixes and performance optimization',
          'Code maintenance and version updates'
        ],
        achievements: [
          'Process visualization monitoring',
          'Alarm center construction',
          'Version iteration optimization'
        ]
      }
    ]
  },

  // Contact Section
  contact: {
    title: 'Get in Touch',
    subtitle: 'Let\'s Connect',
    intro: 'If you\'re interested in my background or have any opportunities, please feel free to reach out',
    channels: [
      {
        type: 'Phone',
        value: '18811965574',
        icon: 'phone',
        description: 'Mon-Fri 9:00-18:00',
        url: 'tel:18811965574'
      },
      {
        type: 'Email',
        value: 'xnfly778@163.com',
        icon: 'email',
        description: 'Send me an email',
        url: 'mailto:xnfly778@163.com'
      },
      {
        type: 'Location',
        value: 'Xuzhou, Jiangsu',
        icon: 'location',
        description: 'Remote/On-site available',
        url: ''
      }
    ],
    cta: 'Looking forward to connecting with you',
    emailCta: 'Send Email'
  },

  // Footer
  footer: {
    copyright: '© 2025 Niu Tianci · Frontend Developer',
    madeWith: 'Built with Vue3 + TypeScript'
  }
}
