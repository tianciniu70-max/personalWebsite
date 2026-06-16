<template>
  <section class="projects" id="projects">
    <!-- 区域标题 -->
    <div class="section-header">
      <span class="section-label animate-on-enter">{{ t('projects.subtitle') }}</span>
      <h2 class="section-title animate-on-enter">{{ t('projects.title') }}</h2>
    </div>

    <!-- 项目卡片网格 -->
    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card animate-on-enter"
      >
        <!-- 编号 -->
        <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>

        <!-- 项目信息 -->
        <div class="card-body">
          <h3 class="card-title">{{ project.name }}</h3>
          <div class="card-meta">
            <span class="meta-role">{{ project.role }}</span>
            <span class="meta-duration">{{ project.duration }}</span>
          </div>
          <p class="card-desc">{{ project.description }}</p>

          <!-- 技术标签 -->
          <div class="card-tags">
            <span
              v-for="tech in (project.tech_stack || project.tags)"
              :key="tech"
              class="card-tag"
            >
              {{ tech }}
            </span>
          </div>

          <!-- 职责 -->
          <ul v-if="project.responsibilities" class="card-list">
            <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
          </ul>

          <!-- 成果 -->
          <ul v-if="project.achievements" class="card-list card-list--achievements">
            <li v-for="item in project.achievements" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const projects = computed(() => tm('projects.items') as any[])
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.projects {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: $spacing-32 $spacing-8;
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

// 项目卡片
.projects-grid {
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

.project-card {
  position: relative;
  padding: $spacing-8;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  transition: border-color $transition-fast $ease-default;

  &:hover {
    border-color: var(--color-accent);

    .card-number {
      color: var(--color-accent);
    }
  }
}

.card-number {
  display: block;
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: var(--color-gray);
  margin-bottom: $spacing-5;
}

.card-body {
  // main content
}

.card-title {
  font-family: $font-family-display;
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: var(--color-primary-dark);
  margin-bottom: $spacing-2;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-lg;
  }
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-3;
  margin-bottom: $spacing-4;
}

.meta-role {
  display: inline-block;
  padding: $spacing-1 $spacing-3;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  color: #FFFFFF;
  background: var(--color-accent);
}

.meta-duration {
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: var(--color-gray);
}

.card-desc {
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  color: var(--color-dark-gray);
  line-height: $line-height-relaxed;
  margin-bottom: $spacing-4;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-4;
}

.card-tag {
  display: inline-block;
  padding: $spacing-1 $spacing-3;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: var(--color-dark-gray);
  background: var(--color-muted);
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: $spacing-4;
    font-family: $font-family-base;
    font-size: $font-size-xs;
    font-weight: $font-weight-normal;
    color: var(--color-gray);
    line-height: $line-height-relaxed;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--color-accent);
    }

    + li {
      margin-top: $spacing-1;
    }
  }

  &--achievements {
    margin-top: $spacing-4;

    li::before {
      color: var(--color-primary);
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
