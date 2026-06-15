<template>
  <SectionContainer id="skills">
    <h2 class="section-title">{{ t('skills.title') }}</h2>
    <p class="section-subtitle">{{ t('skills.subtitle') }}</p>

    <div class="skills">
      <div
        v-for="(category, index) in categories"
        :key="category.name"
        class="skill-category"
        :class="{ 'skill-category--delay': index }"
      >
        <div class="skill-header">
          <el-icon :size="32" :color="getCategoryColor(index)">
            <component :is="getCategoryIcon(category.icon)" />
          </el-icon>
          <h3 class="skill-title">{{ category.name }}</h3>
        </div>
        <ul class="skill-list">
          <li v-for="item in category.items" :key="item" class="skill-item">
            <span class="skill-bullet"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { Management, Tools, DataAnalysis, Link } from '@element-plus/icons-vue'

const { t } = useI18n()

const categories = computed(() => t('skills.categories') as unknown as any[])

const iconMap: Record<string, any> = {
  code: Management,
  tool: Tools,
  chart: DataAnalysis,
  git: Link
}

const getCategoryIcon = (iconName: string) => {
  return iconMap[iconName] || Management
}

const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444']

const getCategoryColor = (index: number) => {
  return colors[index % colors.length]
}
</script>

<style lang="scss" scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  margin-top: var(--spacing-12);

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  padding: var(--spacing-8);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-background);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  &--delay {
    animation: fadeIn 0.6s var(--ease-out) backwards;

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) &--delay {
        animation-delay: #{$i * 0.1}s;
      }
    }
  }
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
}

.skill-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.skill-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-size: var(--font-size-base);
  color: var(--color-dark-gray);
}

.skill-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}
</style>
