<template>
  <SectionContainer id="career" variant="alt">
    <h2 class="section-title">{{ t('japanCareer.title') }}</h2>
    <p class="section-subtitle">{{ t('japanCareer.subtitle') }}</p>

    <div class="japan-career">
      <div class="motivation-section">
        <h3 class="section-heading">
          <el-icon><InfoFilled /></el-icon>
          {{ currentLocale === 'zh' ? '赴日动机' : 'Motivation' }}
        </h3>
        <p class="motivation-text">{{ t('japanCareer.motivation') }}</p>
      </div>

      <div class="why-japan">
        <div
          v-for="(item, index) in t('japanCareer.whyJapan')"
          :key="item.title"
          class="why-card"
          :class="{ 'why-card--delay': index }"
        >
          <div class="why-icon">
            <el-icon :size="32">
              <component :is="getWhyIcon(index)" />
            </el-icon>
          </div>
          <h4 class="why-title">{{ item.title }}</h4>
          <p class="why-desc">{{ item.desc }}</p>
        </div>
      </div>

      <div class="language-section">
        <h3 class="section-heading">
          <el-icon><ChatDotRound /></el-icon>
          {{ currentLocale === 'zh' ? '语言学习' : 'Language' }}
        </h3>
        <div class="language-card">
          <div class="language-status">
            <span class="status-label">{{ t('japanCareer.language.status') }}</span>
            <span class="status-level">{{ t('japanCareer.language.level') }}</span>
          </div>
          <p class="language-commitment">{{ t('japanCareer.language.commitment') }}</p>
        </div>
      </div>

      <div class="value-section">
        <h3 class="section-heading">
          <el-icon><Star /></el-icon>
          {{ t('japanCareer.valueProposition') }}
        </h3>
        <ul class="value-list">
          <li v-for="value in t('japanCareer.values')" :key="value" class="value-item">
            <span class="value-bullet">✓</span>
            {{ value }}
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
import { InfoFilled, ChatDotRound, Star, Medal, TrophyBase, TrendCharts } from '@element-plus/icons-vue'

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)

const whyIcons = [Medal, TrophyBase, TrendCharts]

const getWhyIcon = (index: number) => {
  return whyIcons[index % whyIcons.length]
}
</script>

<style lang="scss" scoped>
.japan-career {
  max-width: 1000px;
  margin: 0 auto;
}

.motivation-section {
  margin-bottom: var(--spacing-12);
}

.section-heading {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin-bottom: var(--spacing-6);
  padding: var(--spacing-4);
  background: var(--color-primary);
  color: var(--color-background);
  border-radius: var(--border-radius-md);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
  }
}

.motivation-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);
  text-align: justify;
  white-space: pre-line;

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-base);
  }
}

.why-japan {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-12);

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
  }
}

.why-card {
  text-align: center;
  padding: var(--spacing-8);
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
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

.why-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-4);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-background);
}

.why-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin-bottom: var(--spacing-3);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-base);
  }
}

.why-desc {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-gray);
}

.language-section {
  margin-bottom: var(--spacing-12);
}

.language-card {
  padding: var(--spacing-8);
  background: var(--color-background);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--border-radius-md);
}

.language-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-2);
  }
}

.status-label {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
}

.status-level {
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--color-primary);
  color: var(--color-background);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-sm);
}

.language-commitment {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);
}

.value-section {
  margin-bottom: var(--spacing-12);
}

.value-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--color-background);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);

  &:hover {
    background: var(--color-background-alt);
  }
}

.value-bullet {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: var(--color-success);
  color: var(--color-background);
  border-radius: 50%;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}
</style>
