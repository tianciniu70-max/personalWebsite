<template>
  <SectionContainer id="hero" variant="hero" animated>
    <div class="hero">
      <div class="hero-content">
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <h1 class="hero-title">
          <span class="hero-greeting">{{ t('hero.greeting') }}</span>
          <span class="gradient-text hero-name">{{ t('hero.name') }}</span>
        </h1>
        <p class="hero-description">{{ t('hero.experience') }}</p>
        <p class="hero-specialization">{{ t('hero.specialization') }}</p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn--primary btn--large">
            {{ t('hero.cta.primary') }}
            <el-icon><Bottom /></el-icon>
          </a>
          <button class="btn btn--outline btn--large">
            {{ t('hero.cta.secondary') }}
            <el-icon><Download /></el-icon>
          </button>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-code-block">
          <div class="code-header">
            <span class="code-dot code-dot--red"></span>
            <span class="code-dot code-dot--yellow"></span>
            <span class="code-dot code-dot--green"></span>
          </div>
          <pre class="code-content"><code><span class="code-keyword">const</span> <span class="code-variable">engineer</span> = {
  <span class="code-property">passion</span>: <span class="code-string">'Frontend Development'</span>,
  <span class="code-property">experience</span>: <span class="code-number">5</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">'Vue3'</span>,
    <span class="code-string">'TypeScript'</span>,
    <span class="code-string">'Data Visualization'</span>
  ],
  <span class="code-property">design</span>: <span class="code-keyword">true</span>,
  <span class="code-property">goal</span>: <span class="code-string">'Career in Japan'</span>
};</code></pre>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { Bottom, Download } from '@element-plus/icons-vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
}

.hero-content {
  @media (max-width: $breakpoint-lg) {
    order: 2;
  }
}

.hero-tagline {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-6);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-3xl);
  }

  @media (max-width: $breakpoint-sm) {
    font-size: var(--font-size-2xl);
  }
}

.hero-greeting {
  display: block;
  color: var(--color-gray);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-2);

  @media (max-width: $breakpoint-sm) {
    font-size: var(--font-size-xl);
  }
}

.hero-name {
  display: block;
}

.hero-description {
  font-size: var(--font-size-xl);
  color: var(--color-dark-gray);
  margin-bottom: var(--spacing-3);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
  }
}

.hero-specialization {
  font-size: var(--font-size-base);
  color: var(--color-gray);
  margin-bottom: var(--spacing-8);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}

.hero-visual {
  @media (max-width: $breakpoint-lg) {
    order: 1;
    display: flex;
    justify-content: center;
  }
}

.hero-code-block {
  background: var(--color-black);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  max-width: 500px;

  @media (max-width: $breakpoint-sm) {
    max-width: 100%;
  }
}

.code-header {
  display: flex;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-dark-gray);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &--red { background: #ef4444; }
  &--yellow { background: #f59e0b; }
  &--green { background: #10b981; }
}

.code-content {
  padding: var(--spacing-6);
  font-family: var(--font-family-code);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-background-alt);
  overflow-x: auto;

  @media (max-width: $breakpoint-sm) {
    font-size: var(--font-size-xs);
    padding: var(--spacing-4);
  }
}

.code-keyword { color: #c792ea; }
.code-variable { color: #82aaff; }
.code-property { color: #c3e88d; }
.code-string { color: #c3e88d; }
.code-number { color: #f78c6c; }
</style>
