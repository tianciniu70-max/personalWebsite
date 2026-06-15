export default {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    design: 'Design',
    career: 'Career',
    contact: 'Contact'
  },

  // Hero Section
  hero: {
    tagline: 'Design Thinking × Frontend Engineering',
    greeting: 'Hello, I\'m a',
    name: 'Frontend Engineer',
    experience: '5 Years of Enterprise Development',
    specialization: 'Vue3 Ecosystem / Data Visualization / Component Architecture',
    cta: {
      primary: 'View Projects',
      secondary: 'Download Resume'
    }
  },

  // About Section
  about: {
    title: 'About Me',
    subtitle: 'From Fashion Design to Frontend: Design-Driven Development',
    story: `I am a frontend engineer with 5 years of experience, and a career changer with a unique background.
    I graduated with a degree in Fashion Design, which gave me a keen eye for visual aesthetics and user experience.

    Since transitioning to frontend development, I've integrated design thinking into code implementation:
    Approaching interaction logic from a UX perspective, optimizing information architecture with visual hierarchy skills,
    and building maintainable component systems with design standards in mind.

    Throughout my career, I've independently led multiple large-scale enterprise projects,
    including MES systems, data visualization platforms, and enterprise admin dashboards.
    These experiences have deepened my understanding of business requirements and
    my ability to transform complex needs into elegant frontend solutions.`,
    highlights: [
      { label: 'Cross-Disciplinary', desc: 'Design background × Engineering mindset' },
      { label: '5 Years Exp', desc: 'End-to-end development of large-scale projects' },
      { label: 'Technical Depth', desc: 'Vue3 / Component Architecture / Engineering' },
      { label: 'Japan Career', desc: 'Seeking long-term frontend opportunities in Japan' }
    ]
  },

  // Skills Section
  skills: {
    title: 'Skills',
    subtitle: 'Frontend Core × Engineering × Data Visualization',
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
    subtitle: 'Enterprise-Level Frontend Project Experience',
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

  // Design Thinking Section
  designThinking: {
    title: 'Design Thinking',
    subtitle: 'Unique Advantages from Design Background',
    intro: 'My background in fashion design is not a story of "career change," but of "integration." Design training cultivated three core competencies that directly translate to frontend development advantages:',
    pillars: [
      {
        title: 'User Perspective',
        desc: 'Designing interactions from a user experience standpoint, not just implementing features',
        examples: [
          'Considering user scenarios and expectations',
          'Designing intuitive interaction feedback',
          'Focusing on accessibility and usability'
        ]
      },
      {
        title: 'Visual Hierarchy',
        desc: 'Applying visual design principles to organize information architecture',
        examples: [
          'Establishing visual order through contrast, alignment, repetition',
          'Using whitespace to guide user attention',
          'Designing clear information hierarchy and reading paths'
        ]
      },
      {
        title: 'Attention to Detail',
        desc: 'Pixel-perfect pursuit for refined product experience',
        examples: [
          'Ensuring natural and smooth animation transitions',
          'Polishing visual feedback for interaction states',
          'Maintaining design system consistency'
        ]
      }
    ],
    closing: 'These capabilities enable me to not only write code but also collaborate efficiently with designers, understand design intent, and accurately translate it into high-quality frontend implementation.'
  },

  // Japan Career Section
  japanCareer: {
    title: 'Career in Japan',
    subtitle: 'Seeking Long-term Frontend Development Opportunities',
    motivation: `My motivation for working in Japan comes from admiration for Japanese digital products and international teams.
    The Japanese market's high standards for product quality and user experience align perfectly with my pursuit of technical excellence.
    I appreciate the sense of responsibility, team collaboration spirit, and long-term values in Japanese corporate culture.`,
    whyJapan: [
      { title: 'Quality Culture', desc: 'Japanese emphasis on product details and quality aligns perfectly with my development philosophy' },
      { title: 'Growth Environment', desc: 'Seeking continuous learning in Japanese technical environment and participation in international projects' },
      { title: 'Long-term Career', desc: 'Looking for stable long-term opportunities and building a career in Japan' }
    ],
    language: {
      status: 'Studying Japanese',
      level: 'N4 → N3 Target',
      commitment: 'Continuously improving Japanese skills to integrate into team collaboration'
    },
    valueProposition: 'What I bring to Japanese companies:',
    values: [
      '5 years of enterprise Vue3 development experience',
      'Data visualization and complex interaction development capabilities',
      'User experience awareness from design background',
      'Cross-disciplinary learning ability and adaptability',
      'Commitment to stable, long-term employment'
    ]
  },

  // Contact Section
  contact: {
    title: 'Contact',
    subtitle: 'Looking Forward to Discussing Opportunities',
    channels: [
      { type: 'Email', value: 'your.email@example.com', icon: 'email', url: 'mailto:your.email@example.com' },
      { type: 'GitHub', value: 'github.com/yourusername', icon: 'github', url: 'https://github.com/yourusername' },
      { type: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
      { type: 'WeChat', value: 'your_wechat_id', icon: 'wechat', url: '' }
    ],
    cta: 'Looking forward to connecting with you'
  },

  // Footer
  footer: {
    copyright: '© 2024 Frontend Engineer Portfolio. All rights reserved.',
    madeWith: 'Made with Vue3 + TypeScript'
  }
}
