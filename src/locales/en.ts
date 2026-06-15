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
    greeting: 'Hello, I\'m a',
    name: 'Frontend Developer',
    experience: '5 Years of Enterprise Development',
    specialization: 'Vue3 Ecosystem / Data Visualization / Component Architecture',
    availability: 'Available for opportunities',
    cta: {
      primary: 'View Projects',
      secondary: 'Download Resume',
      contact: 'Contact Me'
    }
  },

  // About Section
  about: {
    title: 'About Me',
    subtitle: 'Design × Engineering',
    story: `I am a frontend engineer with 5 years of experience, and a career changer with a unique background.
    I graduated with a degree in Fashion Design, which gave me a keen eye for visual aesthetics and user experience.

    Since transitioning to frontend development, I've integrated design thinking into code implementation:
    Approaching interaction logic from a UX perspective, optimizing information architecture with visual hierarchy skills,
    and building maintainable component systems with design standards in mind.`,
    highlights: [
      { label: 'Cross-Disciplinary', desc: 'Design background × Engineering mindset' },
      { label: '5 Years Exp', desc: 'End-to-end development of large-scale projects' },
      { label: 'Technical Depth', desc: 'Vue3 / Component Architecture / Engineering' },
      { label: 'Detail Oriented', desc: 'Pixel-perfect implementation with design awareness' }
    ],
    stats: [
      { number: '5+', label: 'Years Experience' },
      { number: '13+', label: 'Projects Delivered' },
      { number: '100%', label: 'Client Satisfaction' }
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
        name: 'Frameworks & Tools',
        icon: 'tool',
        items: ['Element Plus / Ant Design', 'Pinia / Vuex', 'Vue Router', 'Axios / RESTful API']
      },
      {
        name: 'Data Visualization',
        icon: 'chart',
        items: ['ECharts / D3.js', 'Dashboard Development', 'BI Visualization Platforms', 'Large Screen Solutions']
      },
      {
        name: 'Engineering',
        icon: 'git',
        items: ['Git Workflow', 'Component Architecture', 'Performance Optimization', 'Team Collaboration']
      }
    ]
  },

  // Projects Section
  projects: {
    title: 'Projects',
    subtitle: 'Enterprise-Level Project Experience',
    items: [
      {
        id: 'mes',
        name: 'Smart Factory MES System',
        role: 'Lead Frontend Developer',
        duration: '2021 - 2022',
        description: 'Manufacturing Execution System for production planning, work order management, quality traceability, and equipment monitoring. Deployed across multiple manufacturing companies, improving production efficiency by approximately 30%.',
        tech_stack: ['Vue3 + TypeScript', 'Element Plus', 'ECharts Visualization', 'WebSocket Real-time Communication'],
        responsibilities: [
          'Led frontend architecture and technology decisions',
          'Built core component library, improving development efficiency by 40%',
          'Developed complex forms and data visualization modules',
          'Optimized initial load performance, reducing load time by 50%'
        ],
        achievements: [
          'Successfully deployed and stable for 2 years',
          'Supports daily operations for 3+ manufacturing companies',
          'Component library reused across other company projects'
        ]
      },
      {
        id: 'oee',
        name: 'OEE Equipment Management System',
        role: 'Frontend Developer',
        duration: '2022 - 2023',
        description: 'A system focused on Overall Equipment Effectiveness (OEE) monitoring and analysis. Through real-time data collection and visualization, it helps factories improve equipment utilization and reduce downtime.',
        tech_stack: ['Vue3 + Composition API', 'TypeScript', 'ECharts', 'Pinia State Management'],
        responsibilities: [
          'Developed real-time equipment monitoring dashboard',
          'Implemented OEE metric calculation and visualization',
          'Optimized rendering performance for large datasets',
          'Built reusable chart components'
        ],
        achievements: [
          'Helped clients improve equipment utilization by 15%',
          'Supports simultaneous monitoring of 100+ devices',
          'Chart components integrated into company component library'
        ]
      },
      {
        id: 'dashboard',
        name: 'Data Dashboard & BI Visualization Platform',
        role: 'Core Frontend Developer',
        duration: '2023 - Present',
        description: 'Enterprise-grade data visualization solution including large-screen displays and self-service analytics platform. Supports drag-and-drop report generation, multi-dimensional data analysis, and real-time data refresh.',
        tech_stack: ['Vue3 + TypeScript', 'ECharts / D3.js', 'Vite Build Optimization', 'Responsive Design'],
        responsibilities: [
          'Led data visualization module development',
          'Designed configurable chart component system',
          'Implemented adaptive layout for large screens',
          'Optimized rendering performance for complex scenarios'
        ],
        achievements: [
          'Supports core business data visualization',
          '1000+ daily active users',
          'Large-screen solution deployed at multiple client sites'
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
        type: 'GitHub',
        value: 'github.com/yourusername',
        icon: 'github',
        description: 'Check out my code',
        url: 'https://github.com/yourusername'
      },
      {
        type: 'Email',
        value: 'your.email@example.com',
        icon: 'email',
        description: 'Send me an email',
        url: 'mailto:your.email@example.com'
      },
      {
        type: 'WeChat',
        value: 'your_wechat_id',
        icon: 'wechat',
        description: 'Connect on WeChat',
        url: ''
      }
    ],
    cta: 'Looking forward to connecting with you',
    emailCta: 'Send Email'
  },

  // Footer
  footer: {
    copyright: '© 2024 Frontend Engineer Portfolio. All rights reserved.',
    madeWith: 'Made with Vue3 + TypeScript'
  }
}
