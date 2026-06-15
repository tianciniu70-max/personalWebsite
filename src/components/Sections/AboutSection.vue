<template>
  <SectionContainer id="about" variant="alt">
    <h2 class="section-title">{{ t('about.title') }}</h2>
    <p class="section-subtitle">{{ t('about.subtitle') }}</p>

    <div class="about">
      <div class="about-story">
        <p class="story-text" v-html="formattedStory"></p>
      </div>

      <div class="about-highlights">
        <div
          v-for="(highlight, index) in highlights"
          :key="index"
          class="highlight-card"
          :class="{ 'highlight-card--delay': index }"
        >
          <div class="highlight-icon">
            <el-icon :size="24"><component :is="getHighlightIcon(index)" /></el-icon>
          </div>
          <h4 class="highlight-label">{{ highlight.label }}</h4>
          <p class="highlight-desc">{{ highlight.desc }}</p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { MagicStick, Briefcase, TrendCharts, Location } from '@element-plus/icons-vue'

const { t, tm } = useI18n()

const highlights = computed(() => tm('about.highlights') as any[])

const formattedStory = computed(() => {
  const story = t('about.story')
  const lines = story.split('\n').filter(line => line.trim())
  return lines.map(line => {
    if (line.trim().startsWith('-')) {
      return `&nbsp;&nbsp;&nbsp;&nbsp;${line.replace('-', '•')}`
    }
    return line
  }).join('<br>')
})

const highlightIcons = [MagicStick, Briefcase, TrendCharts, Location]

const getHighlightIcon = (index: number) => {
  return highlightIcons[index % highlightIcons.length]
}
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  margin-top: var(--spacing-12);

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
  }
}

.about-story {
  .story-text {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--color-dark-gray);
    text-align: justify;

    @media (max-width: $breakpoint-md) {
      font-size: var(--font-size-base);
    }
  }
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-6);

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.highlight-card {
  padding: var(--spacing-6);
  background: var(--color-background);
  border-radius: var(--border-radius-lg);
  text-align: center;
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  &--delay {
    animation: fadeIn 0.6s var(--ease-out) 0.2s backwards;
  }
}

.highlight-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: var(--spacing-4);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-background);
}

.highlight-label {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin-bottom: var(--spacing-2);
}

.highlight-desc {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  line-height: var(--line-height-normal);
}
</style>
