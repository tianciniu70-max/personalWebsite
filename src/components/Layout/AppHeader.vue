<template>
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="nav-brand">
          <a href="#hero" class="brand-link">
            <span class="brand-text">{{ t('hero.tagline') }}</span>
          </a>
        </div>

        <div class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="`#${item.key}`"
            class="nav-link"
            :class="{ 'nav-link--active': activeSection === item.key }"
            @click="closeMenu"
          >
            <span class="nav-link-text">{{ item.label }}</span>
            <span class="nav-link-indicator"></span>
          </a>

          <div class="lang-switcher-wrapper">
            <button class="lang-switcher" @click="toggleLanguage" :title="`Switch to ${nextLocaleName}`">
              <span class="lang-current">{{ localeLabel }}</span>
              <el-icon class="lang-icon"><CaretBottom /></el-icon>
            </button>
          </div>
        </div>

        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Toggle menu">
          <span class="menu-toggle-lines">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { CaretBottom } from '@element-plus/icons-vue'

const { locale, t } = useI18n()

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')

const locales = ['zh', 'en', 'ja'] as const

const localeLabel = computed(() => {
  switch (locale.value) {
    case 'zh': return '中文'
    case 'en': return 'EN'
    case 'ja': return '日本語'
    default: return 'EN'
  }
})

const nextLocaleName = computed(() => {
  const currentIndex = locales.indexOf(locale.value as typeof locales[number])
  const nextIndex = (currentIndex + 1) % locales.length
  const nextLocale = locales[nextIndex]
  return nextLocale === 'zh' ? '中文' : nextLocale === 'ja' ? '日本語' : 'English'
})

const navItems = computed(() => [
  { key: 'about', label: t('nav.about') },
  { key: 'skills', label: t('nav.skills') },
  { key: 'projects', label: t('nav.projects') },
  { key: 'design', label: t('nav.design') },
  { key: 'career', label: t('nav.career') },
  { key: 'contact', label: t('nav.contact') }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const toggleLanguage = () => {
  const currentIndex = locales.indexOf(locale.value as typeof locales[number])
  const nextIndex = (currentIndex + 1) % locales.length
  locale.value = locales[nextIndex]
  document.documentElement.lang = locale.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = navItems.value.map(item => item.key)
  for (const section of sections.reverse()) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: var(--z-index-fixed);
  transition: all var(--transition-base) var(--ease-out);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;

  &--scrolled {
    background: rgba(255, 255, 255, 0.95);
    border-bottom-color: var(--color-border);
    box-shadow: var(--shadow-sm);
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-brand {
  .brand-link {
    text-decoration: none;
    display: block;
  }

  .brand-text {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    background: linear-gradient(135deg, var(--color-primary) 0%, #00c6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: $letter-spacing-tight;
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);

  @media (max-width: $breakpoint-lg) {
    gap: 0;
  }
}

.nav-link {
  position: relative;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray);
  text-decoration: none;
  transition: color var(--transition-base) var(--ease-out);
  white-space: nowrap;

  &:hover {
    color: var(--color-primary);

    .nav-link-indicator {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  &--active {
    color: var(--color-primary);

    .nav-link-indicator {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @media (max-width: $breakpoint-lg) {
    font-size: var(--font-size-xl);
    padding: var(--spacing-4) var(--spacing-6);
  }
}

.nav-link-text {
  position: relative;
  z-index: 1;
}

.nav-link-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 20px;
  height: 2px;
  background: var(--color-primary);
  border-radius: var(--border-radius-full);
  opacity: 0;
  transform: translateX(-50%) scaleX(0);
  transition: all var(--transition-base) var(--ease-out);

  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}

.lang-switcher-wrapper {
  margin-left: var(--spacing-4);
  padding-left: var(--spacing-4);
  border-left: 1px solid var(--color-border);

  @media (max-width: $breakpoint-lg) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    margin-top: var(--spacing-8);
  }
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray);
  background: var(--color-background-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base) var(--ease-out);
  cursor: pointer;

  &:hover {
    background: var(--color-background);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  @media (max-width: $breakpoint-lg) {
    font-size: var(--font-size-base);
    padding: var(--spacing-3) var(--spacing-5);
  }
}

.lang-current {
  white-space: nowrap;
}

.lang-icon {
  font-size: 10px;
  transition: transform var(--transition-base) var(--ease-out);
}

.lang-switcher:hover .lang-icon {
  transform: translateY(2px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: background var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-background-alt);
  }

  @media (max-width: $breakpoint-lg) {
    display: flex;
  }
}

.menu-toggle-lines {
  position: relative;
  width: 20px;
  height: 14px;
}

.line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-charcoal);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base) var(--ease-out);

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(3) {
    bottom: 0;
  }
}

.menu-toggle:hover .line {
  &:nth-child(1) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 70%;
    left: auto;
    right: 0;
  }
}

// 移动端菜单样式
@media (max-width: $breakpoint-lg) {
  .nav-menu {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-8);
    background: var(--color-background);
    transform: translateX(100%);
    transition: transform var(--transition-slow) var(--ease-in-out);

    &--open {
      transform: translateX(0);
    }
  }

  .nav-link {
    width: 100%;
    text-align: center;
    border-radius: var(--border-radius-md);

    &:hover {
      background: var(--color-background-alt);
    }
  }

  .lang-switcher-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-toggle {
    .line:nth-child(1) {
      transform: rotate(45deg);
      top: 6px;
    }

    .line:nth-child(2) {
      opacity: 0;
    }

    .line:nth-child(3) {
      transform: rotate(-45deg);
      bottom: 6px;
    }
  }
}
</style>
