// Type definitions for i18n content

export interface LocaleContent {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    design: string
    career: string
    contact: string
  }

  hero: {
    tagline: string
    greeting: string
    name: string
    experience: string
    specialization: string
    cta: {
      primary: string
      secondary: string
    }
  }

  about: {
    title: string
    subtitle: string
    story: string
    highlights: Array<{
      label: string
      desc: string
    }>
  }

  skills: {
    title: string
    subtitle: string
    categories: Array<{
      name: string
      icon: string
      items: string[]
    }>
  }

  projects: {
    title: string
    subtitle: string
    items: Array<{
      id: string
      name: string
      role: string
      duration: string
      description: string
      tech_stack: string[]
      responsibilities: string[]
      achievements: string[]
    }>
  }

  designThinking: {
    title: string
    subtitle: string
    intro: string
    pillars: Array<{
      title: string
      desc: string
      examples: string[]
    }>
    closing: string
  }

  japanCareer: {
    title: string
    subtitle: string
    motivation: string
    whyJapan: Array<{
      title: string
      desc: string
    }>
    language: {
      status: string
      level: string
      commitment: string
    }
    valueProposition: string
    values: string[]
  }

  contact: {
    title: string
    subtitle: string
    channels: Array<{
      type: string
      value: string
      icon: string
      url: string
    }>
    cta: string
  }

  footer: {
    copyright: string
    madeWith: string
  }
}

export type LocaleMessage = LocaleContent
