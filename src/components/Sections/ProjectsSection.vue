<template>
  <SectionContainer id="projects" variant="alt">
    <h2 class="section-title">{{ t('projects.title') }}</h2>
    <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

    <div class="projects">
      <div
        v-for="(project, index) in t('projects.items')"
        :key="project.id"
        class="project-card"
        :class="{ 'project-card--delay': index }"
      >
        <div class="project-header">
          <h3 class="project-name">{{ project.name }}</h3>
          <div class="project-meta">
            <span class="project-role">{{ project.role }}</span>
            <span class="project-duration">{{ project.duration }}</span>
          </div>
        </div>

        <p class="project-description">{{ project.description }}</p>

        <div class="project-section">
          <h4 class="section-label">
            <el-icon><Cpu /></el-icon>
            {{ currentLocale === 'zh' ? '技术栈' : 'Tech Stack' }}
          </h4>
          <div class="tech-tags">
            <span v-for="tech in project.tech_stack" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="project-section">
          <h4 class="section-label">
            <el-icon><List /></el-icon>
            {{ currentLocale === 'zh' ? '主要职责' : 'Responsibilities' }}
          </h4>
          <ul class="project-list">
            <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="project-section">
          <h4 class="section-label">
            <el-icon><Trophy /></el-icon>
            {{ currentLocale === 'zh' ? '项目成果' : 'Achievements' }}
          </h4>
          <ul class="project-list project-list--achievements">
            <li v-for="item in project.achievements" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { Cpu, List, Trophy } from '@element-plus/icons-vue'

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  margin-top: var(--spacing-12);
}

.project-card {
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  &--delay {
    animation: fadeIn 0.6s var(--ease-out) backwards;

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) &--delay {
        animation-delay: #{$i * 0.15}s;
      }
    }
  }
}

.project-header {
  margin-bottom: var(--spacing-6);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--color-border);
}

.project-name {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-black);
  margin-bottom: var(--spacing-3);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-xl);
  }
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
}

.project-role {
  padding: var(--spacing-1) var(--spacing-3);
  background: var(--color-primary);
  color: var(--color-background);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-sm);
}

.project-duration {
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray);

  &::before {
    content: '•';
    margin-right: var(--spacing-2);
  }
}

.project-description {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);
  margin-bottom: var(--spacing-6);
}

.project-section {
  margin-bottom: var(--spacing-6);

  &:last-child {
    margin-bottom: 0;
  }
}

.section-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin-bottom: var(--spacing-4);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.tech-tag {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--color-background-alt);
  color: var(--color-dark-gray);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border);
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding-left: var(--spacing-6);

  li {
    position: relative;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-dark-gray);

    &::before {
      content: '▸';
      position: absolute;
      left: -20px;
      color: var(--color-primary);
      font-weight: var(--font-weight-semibold);
    }
  }

  &--achievements {
    li::before {
      content: '✓';
      color: var(--color-success);
    }
  }
}
</style>
