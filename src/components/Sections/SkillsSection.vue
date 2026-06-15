<template>
  <section class="skills" id="skills">
    <!-- 区域标题 -->
    <div class="section-header">
      <span class="section-label animate-on-enter">{{ t('skills.subtitle') }}</span>
      <h2 class="section-title animate-on-enter">{{ t('skills.title') }}</h2>
    </div>

    <!-- 技能卡片网格 -->
    <div class="skills-grid">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="skill-card animate-on-enter"
      >
        <h3 class="skill-card-title">{{ category.name }}</h3>
        <div class="skill-tags">
          <span v-for="item in category.items" :key="item" class="skill-tag">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const categories = computed(() => tm('skills.categories') as any[])
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.skills {
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

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-3xl;
  }
}

// 技能卡片
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-6;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  padding: $spacing-8;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  transition: border-color $transition-fast $ease-default;

  &:hover {
    border-color: var(--color-accent);
  }
}

.skill-card-title {
  font-family: $font-family-display;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: var(--color-primary-dark);
  margin-bottom: $spacing-5;
  padding-bottom: $spacing-4;
  border-bottom: 1px solid var(--color-border);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
}

.skill-tag {
  display: inline-block;
  padding: $spacing-1 $spacing-3;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: var(--color-dark-gray);
  background: var(--color-muted);
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
