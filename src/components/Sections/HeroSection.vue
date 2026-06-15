<template>
  <SectionContainer id="hero" variant="hero">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-badge fade-in">
          <span class="hero-badge-dot"></span>
          <span class="hero-badge-text">{{ t('hero.tagline') }}</span>
        </div>

        <h1 class="hero-title">
          <span class="hero-greeting fade-in-up delay-100">{{ t('hero.greeting') }}</span>
          <span class="hero-name gradient-text fade-in-up delay-200">{{ t('hero.name') }}</span>
        </h1>

        <p class="hero-description fade-in-up delay-300">{{ t('hero.experience') }}</p>
        <p class="hero-specialization fade-in-up delay-400">{{ t('hero.specialization') }}</p>

        <div class="hero-actions fade-in-up delay-500">
          <a href="#projects" class="btn btn--primary btn--large">
            <span>{{ t('hero.cta.primary') }}</span>
            <el-icon><ArrowDown /></el-icon>
          </a>
          <button class="btn btn--outline btn--large">
            <span>{{ t('hero.cta.secondary') }}</span>
            <el-icon><Download /></el-icon>
          </button>
        </div>

        <!-- 社交链接 -->
        <div class="hero-social fade-in-up delay-600">
          <a href="https://github.com" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <el-icon><Link /></el-icon>
          </a>
          <a href="mailto:your.email@example.com" class="social-link" aria-label="Email">
            <el-icon><Message /></el-icon>
          </a>
        </div>
      </div>

      <!-- 右侧代码块 -->
      <div class="hero-visual scale-in delay-300">
        <div class="hero-code-window">
          <div class="code-window-header">
            <div class="code-window-controls">
              <span class="control control--close"></span>
              <span class="control control--minimize"></span>
              <span class="control control--maximize"></span>
            </div>
            <div class="code-window-title">engineer.ts</div>
          </div>
          <div class="code-window-content">
            <pre class="code-content"><code><span class="code-keyword">interface</span> <span class="code-type">Engineer</span> {
  <span class="code-property">passion</span>: <span class="code-string">'Frontend Development'</span>;
  <span class="code-property">experience</span>: <span class="code-number">5</span>;
  <span class="code-property">skills</span>: <span class="code-type">SkillStack</span>[];
  <span class="code-property">designThinking</span>: <span class="code-keyword">boolean</span>;
  <span class="code-property">goal</span>: <span class="code-string">'Career in Japan'</span>;
}

<span class="code-keyword">const</span> <span class="code-variable">me</span>: <span class="code-type">Engineer</span> = {
  <span class="code-property">passion</span>: <span class="code-string">'Frontend Development'</span>,
  <span class="code-property">experience</span>: <span class="code-number">5</span>,
  <span class="code-property">skills</span>: [
    <span class="code-string">'Vue3'</span>,
    <span class="code-string">'TypeScript'</span>,
    <span class="code-string">'Data Visualization'</span>,
    <span class="code-string">'Component Architecture'</span>
  ],
  <span class="code-property">designThinking</span>: <span class="code-keyword">true</span>,
  <span class="code-property">goal</span>: <span class="code-string">'Career in Japan'</span>
};</code></pre>
          </div>
        </div>

        <!-- 装饰元素 -->
        <div class="hero-decoration hero-decoration--1"></div>
        <div class="hero-decoration hero-decoration--2"></div>
        <div class="hero-decoration hero-decoration--3"></div>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div class="scroll-indicator">
      <div class="scroll-indicator-mouse">
        <div class="scroll-indicator-wheel"></div>
      </div>
      <span class="scroll-indicator-text">Scroll</span>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { ArrowDown, Download, Link, Message } from '@element-plus/icons-vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  position: relative;

  @media (max-width: $breakpoint-xl) {
    gap: var(--spacing-12);
  }

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
    gap: var(--spacing-16);
    padding-top: var(--spacing-8);
  }

  @media (max-width: $breakpoint-md) {
    gap: var(--spacing-12);
  }
}

.hero-content {
  @media (max-width: $breakpoint-lg) {
    order: 2;
    text-align: center;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background: rgba(0, 113, 227, 0.08);
  border: 1px solid rgba(0, 113, 227, 0.2);
  border-radius: var(--border-radius-full);
  margin-bottom: var(--spacing-6);
}

.hero-badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s var(--ease-in-out) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.hero-badge-text {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-title {
  font-size: var(--font-size-7xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-6);
  letter-spacing: $letter-spacing-tight;

  @media (max-width: $breakpoint-xl) {
    font-size: var(--font-size-6xl);
  }

  @media (max-width: $breakpoint-lg) {
    font-size: var(--font-size-4xl);
  }

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
  font-size: 0.6em;
  font-weight: var(--font-weight-normal);
  margin-bottom: var(--spacing-2);
}

.hero-name {
  display: block;
}

.hero-description {
  font-size: var(--font-size-xl);
  color: var(--color-dark-gray);
  margin-bottom: var(--spacing-3);
  line-height: var(--line-height-relaxed);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
  }
}

.hero-specialization {
  font-size: var(--font-size-base);
  color: var(--color-gray);
  margin-bottom: var(--spacing-10);
  max-width: 480px;
  line-height: var(--line-height-relaxed);

  @media (max-width: $breakpoint-lg) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-10);

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    width: 100%;

    .btn {
      width: 100%;
    }
  }

  @media (max-width: $breakpoint-lg) {
    justify-content: center;
  }
}

.hero-social {
  display: flex;
  gap: var(--spacing-4);

  @media (max-width: $breakpoint-lg) {
    justify-content: center;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--color-gray);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    color: var(--color-primary);
    background: rgba(0, 113, 227, 0.1);
    transform: translateY(-2px);
  }

  .el-icon {
    font-size: 20px;
  }
}

// 右侧视觉区域
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: $breakpoint-lg) {
    order: 1;
  }
}

.hero-code-window {
  position: relative;
  width: 100%;
  max-width: 520px;
  background: var(--color-black);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);

  @media (max-width: $breakpoint-sm) {
    max-width: 100%;
  }
}

.code-window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-5);
  background: var(--color-charcoal);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-window-controls {
  display: flex;
  gap: var(--spacing-2);
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &--close {
    background: #ff5f57;
  }

  &--minimize {
    background: #ffbd2e;
  }

  &--maximize {
    background: #28ca42;
  }
}

.code-window-title {
  font-size: var(--font-size-xs);
  font-family: var(--font-family-code);
  color: var(--color-gray);
}

.code-window-content {
  padding: var(--spacing-6);
  overflow-x: auto;

  @media (max-width: $breakpoint-sm) {
    padding: var(--spacing-4);
  }
}

.code-content {
  font-family: var(--font-family-code);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-background-alt);
  white-space: pre;

  @media (max-width: $breakpoint-sm) {
    font-size: var(--font-size-xs);
  }
}

.code-keyword { color: #c792ea; }
.code-type { color: #ffcb6b; }
.code-variable { color: #82aaff; }
.code-property { color: #c3e88d; }
.code-string { color: #c3e88d; }
.code-number { color: #f78c6c; }
.code-comment { color: #546e7a; font-style: italic; }

// 装饰元素
.hero-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  pointer-events: none;

  &--1 {
    width: 200px;
    height: 200px;
    background: var(--color-primary);
    top: -50px;
    right: -50px;
    opacity: 0.2;
  }

  &--2 {
    width: 150px;
    height: 150px;
    background: #00c6ff;
    bottom: -30px;
    left: -30px;
    opacity: 0.15;
  }

  &--3 {
    width: 100px;
    height: 100px;
    background: var(--color-success);
    top: 50%;
    right: -20px;
    opacity: 0.1;
  }

  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}

// 滚动提示
.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);

  @media (max-width: $breakpoint-lg) {
    bottom: var(--spacing-4);
  }
}

.scroll-indicator-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--color-gray);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-indicator-wheel {
  width: 4px;
  height: 8px;
  background: var(--color-gray);
  border-radius: 2px;
  animation: scrollWheel 2s var(--ease-in-out) infinite;
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

.scroll-indicator-text {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
