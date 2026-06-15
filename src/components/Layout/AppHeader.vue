<template>
  <header class="app-header">
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
            @click="closeMenu"
          >
            {{ item.label }}
          </a>

          <button class="lang-switcher" @click="toggleLanguage">
            {{ currentLocale === 'zh' ? 'EN' : '中文' }}
          </button>
        </div>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <el-icon :size="24">
            <Menu v-if="!isMenuOpen" />
            <Close v-else />
          </el-icon>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, Close } from '@element-plus/icons-vue'

const { locale, t } = useI18n()

const isMenuOpen = ref(false)
const currentLocale = computed(() => locale.value)

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
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  document.documentElement.lang = locale.value
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: var(--z-index-fixed);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-brand {
  .brand-link {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    color: var(--color-black);
  }

  .brand-text {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);

  @media (max-width: $breakpoint-md) {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-8);
    background: var(--color-background);
    transform: translateX(100%);
    transition: transform var(--transition-slow) var(--ease-in-out);

    &--open {
      transform: translateX(0);
    }
  }
}

.nav-link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray);
  transition: color var(--transition-base) var(--ease-out);
  position: relative;

  &:hover {
    color: var(--color-primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-base) var(--ease-out);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-xl);
  }
}

.lang-switcher {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-primary);
    color: var(--color-background);
  }

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
    padding: var(--spacing-3) var(--spacing-6);
  }
}

.menu-toggle {
  display: none;
  color: var(--color-black);

  @media (max-width: $breakpoint-md) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
