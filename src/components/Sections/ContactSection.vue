<template>
  <section class="contact" id="contact">
    <!-- 区域标题 -->
    <div class="section-header">
      <span class="section-label animate-on-enter">{{ t('contact.subtitle') }}</span>
      <h2 class="section-title animate-on-enter">{{ t('contact.title') }}</h2>
      <p class="contact-intro animate-on-enter">{{ t('contact.intro') }}</p>
    </div>

    <!-- 联系方式 -->
    <div class="contact-grid animate-on-enter">
      <a
        v-for="channel in channels"
        :key="channel.type"
        :href="channel.url"
        class="contact-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="contact-icon">{{ getContactIcon(channel.icon) }}</span>
        <span class="contact-type">{{ channel.type }}</span>
        <span class="contact-desc">{{ channel.description }}</span>
      </a>
    </div>

    <!-- CTA -->
    <div class="contact-cta animate-on-enter">
      <p class="cta-text">{{ t('contact.cta') }}</p>
      <a href="mailto:xnfly778@163.com" class="cta-button">
        {{ t('contact.emailCta') }}
        <span class="cta-arrow">→</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const channels = computed(() => tm('contact.channels') as any[])

const getContactIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    phone: '📞',
    email: '✉',
    location: '📍',
    wechat: '💬',
    github: '⌘'
  }
  return icons[iconName] || '●'
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.contact {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: $spacing-32 $spacing-8;
  background: var(--color-background-alt);
}

// 区域标题
.section-header {
  text-align: center;
  margin-bottom: $spacing-16;
}

.section-label {
  display: inline-block;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  color: var(--color-accent);
  letter-spacing: $letter-spacing-wider;
  text-transform: uppercase;
  margin-bottom: $spacing-3;
}

.section-title {
  font-family: $font-family-display;
  font-size: $font-size-5xl;
  font-weight: $font-weight-bold;
  color: var(--color-primary-dark);
  letter-spacing: $letter-spacing-tighter;
  line-height: $line-height-tight;
  margin-bottom: $spacing-4;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-3xl;
  }
}

.contact-intro {
  font-family: $font-family-base;
  font-size: $font-size-lg;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-base;
  }
}

// 联系方式网格
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-6;
  margin-bottom: $spacing-16;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: $spacing-8;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  text-decoration: none;
  transition: border-color $transition-fast $ease-default;

  &:hover {
    border-color: var(--color-accent);
  }
}

.contact-icon {
  font-size: 36px;
  margin-bottom: $spacing-4;
  line-height: 1;
}

.contact-type {
  font-family: $font-family-display;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  color: var(--color-primary-dark);
  margin-bottom: $spacing-1;
}

.contact-desc {
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
}

// CTA
.contact-cta {
  text-align: center;
  padding: $spacing-12;
  background: var(--color-primary);
}

.cta-text {
  font-family: $font-family-base;
  font-size: $font-size-xl;
  font-weight: $font-weight-normal;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: $spacing-8;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-lg;
  }
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: $spacing-3;
  padding: $spacing-4 $spacing-8;
  font-family: $font-family-base;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: var(--color-primary);
  background: #FFFFFF;
  text-decoration: none;
  transition: opacity $transition-fast $ease-default;

  &:hover {
    opacity: 0.9;
  }
}

.cta-arrow {
  transition: transform $transition-fast $ease-default;

  .cta-button:hover & {
    transform: translateX(4px);
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
