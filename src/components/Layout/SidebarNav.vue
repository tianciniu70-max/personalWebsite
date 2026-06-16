<template>
  <nav class="sidebar-nav" :class="{ 'sidebar-nav--compact': isCompact }">
    <!-- Logo -->
    <div class="nav-logo">
      <a href="#/" class="logo-link">
        <span class="logo-initials">TC</span>
      </a>
    </div>

    <!-- 导航链接 -->
    <div class="nav-links">
      <a
        v-for="item in navItems"
        :key="item.key"
        :href="`#/#${item.key}`"
        class="nav-link"
        :class="{ 'nav-link--active': activeSection === item.key }"
        :title="item.label"
      >
        <span class="nav-link-indicator"></span>
        <span class="nav-link-label">{{ item.label }}</span>
      </a>
    </div>

    <!-- 语言切换 -->
    <div class="nav-lang">
      <button class="lang-btn" @click="toggleLanguage" :title="`Switch to ${nextLocaleName}`">
        <span class="lang-current">{{ localeLabel }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isCompact = ref(false)
const activeSection = ref('hero')

const locales = ['zh', 'en'] as const

const localeLabel = computed(() => {
  switch (locale.value) {
    case 'zh': return '中文'
    case 'en': return 'EN'
    default: return 'EN'
  }
})

const nextLocaleName = computed(() => {
  const currentIndex = locales.indexOf(locale.value as typeof locales[number])
  const nextIndex = (currentIndex + 1) % locales.length
  const nextLocale = locales[nextIndex]
  return nextLocale === 'zh' ? '中文' : 'English'
})

const navItems = computed(() => [
  { key: 'about', label: t('nav.about') },
  { key: 'skills', label: t('nav.skills') },
  { key: 'projects', label: t('nav.projects') },
  { key: 'contact', label: t('nav.contact') }
])

const toggleLanguage = () => {
  const currentIndex = locales.indexOf(locale.value as typeof locales[number])
  const nextIndex = (currentIndex + 1) % locales.length
  locale.value = locales[nextIndex]
  document.documentElement.lang = locale.value
}

const handleScroll = () => {
  // 更新激活的区块
  const sections = navItems.value.map(item => item.key)
  for (const section of sections.reverse()) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150) {
        activeSection.value = section
        break
      }
    }
  }

  // 根据滚动位置调整侧边栏样式
  isCompact.value = window.scrollY > 300
}

const handleResize = () => {
  // 移动端隐藏侧边栏
  if (window.innerWidth < 1024) {
    isCompact.value = true
  } else {
    isCompact.value = window.scrollY > 300
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.sidebar-nav {
  position: fixed;
  left: var(--spacing-6);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-6);
  z-index: var(--z-index-fixed);
  transition: all var(--transition-normal) var(--ease-smooth);

  &--compact {
    left: var(--spacing-3);
    gap: var(--spacing-4);

    .nav-link {
      width: 40px;
      height: 40px;

      .nav-link-label {
        opacity: 0;
        width: 0;
      }
    }
  }

  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}

.nav-logo {
  .logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: var(--border-radius-lg);
    color: white;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    text-decoration: none;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal) var(--ease-smooth);

    &:hover {
      transform: scale(1.1);
      box-shadow: var(--shadow-glow);
    }
  }

  .logo-initials {
    font-size: var(--font-size-base);
    letter-spacing: 1px;
  }
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: var(--spacing-4) var(--spacing-3);
  border-radius: var(--border-radius-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  min-width: 48px;
  min-height: 44px;
  color: var(--color-gray);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-normal) var(--ease-smooth);
  border-radius: var(--border-radius-md);

  &:hover {
    color: var(--color-primary);
    background: rgba(99, 102, 241, 0.1);

    .nav-link-indicator {
      transform: scale(1.2);
    }
  }

  &--active {
    color: var(--color-primary);

    .nav-link-indicator {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.nav-link-indicator {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all var(--transition-normal) var(--ease-bounce);
  flex-shrink: 0;
}

.nav-link-label {
  transition: all var(--transition-normal) var(--ease-smooth);
  white-space: nowrap;
}

.nav-lang {
  .lang-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-lg);
    color: var(--color-gray);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all var(--transition-normal) var(--ease-smooth);
    box-shadow: var(--shadow-sm);

    &:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
      background: rgba(99, 102, 241, 0.1);
      transform: scale(1.05);
    }
  }

  .lang-current {
    white-space: nowrap;
  }
}
</style>
