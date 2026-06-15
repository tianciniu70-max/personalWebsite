<template>
  <section class="hero" id="hero">
    <div class="hero-inner">
      <!-- 状态标签 -->
      <div class="hero-badge animate-on-enter">
        <span class="badge-dot"></span>
        <span class="badge-text">{{ t('hero.status') }}</span>
      </div>

      <!-- 姓名 -->
      <h1 class="hero-name animate-on-enter">
        {{ t('hero.name') }}
      </h1>

      <!-- 角色 -->
      <p class="hero-role animate-on-enter">
        {{ t('hero.experience') }}
      </p>

      <!-- 简介 -->
      <p class="hero-desc animate-on-enter">
        {{ t('hero.specialization') }}
      </p>

      <!-- CTA 按钮 -->
      <div class="hero-actions animate-on-enter">
        <a href="#projects" class="btn btn-primary">
          {{ t('hero.cta.primary') }}
        </a>
        <a href="#contact" class="btn btn-outline">
          {{ t('hero.cta.secondary') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height));
  padding: $spacing-20 $spacing-4;
  background: var(--color-background);
}

.hero-inner {
  text-align: center;
  max-width: 800px;
}

// 状态标签
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: $spacing-2;
  padding: $spacing-2 $spacing-4;
  background: var(--color-muted);
  margin-bottom: $spacing-10;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 0;
}

.badge-text {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: var(--color-dark-gray);
  letter-spacing: $letter-spacing-wide;
  text-transform: uppercase;
  font-family: $font-family-base;
}

// 姓名
.hero-name {
  font-family: $font-family-display;
  font-size: $font-size-8xl;
  font-weight: $font-weight-bold;
  color: var(--color-primary-dark);
  line-height: $line-height-tight;
  letter-spacing: $letter-spacing-tighter;
  margin-bottom: $spacing-6;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-5xl;
  }
}

// 角色
.hero-role {
  font-family: $font-family-base;
  font-size: $font-size-2xl;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
  margin-bottom: $spacing-4;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-xl;
  }
}

// 简介
.hero-desc {
  font-family: $font-family-base;
  font-size: $font-size-lg;
  color: var(--color-dark-gray);
  line-height: $line-height-relaxed;
  max-width: 600px;
  margin: 0 auto $spacing-10;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-base;
  }
}

// CTA 按钮
.hero-actions {
  display: flex;
  gap: $spacing-4;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-4 $spacing-8;
  font-family: $font-family-base;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  text-decoration: none;
  transition: all $transition-fast $ease-default;
  cursor: pointer;

  &-primary {
    background: var(--color-primary);
    color: #FFFFFF;

    &:hover {
      background: var(--color-primary-dark);
    }
  }

  &-outline {
    background: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-border);

    &:hover {
      border-color: var(--color-primary);
      background: var(--color-muted);
    }
  }
}

// 滚动动画
.animate-on-enter {
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.5s $ease-default;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
