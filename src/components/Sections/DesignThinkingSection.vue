<template>
  <SectionContainer id="design">
    <h2 class="section-title">{{ t('designThinking.title') }}</h2>
    <p class="section-subtitle">{{ t('designThinking.subtitle') }}</p>

    <div class="design-thinking">
      <p class="design-intro">{{ t('designThinking.intro') }}</p>

      <div class="pillars">
        <div
          v-for="(pillar, index) in pillars"
          :key="pillar.title"
          class="pillar"
          :class="{ 'pillar--delay': index }"
        >
          <div class="pillar-icon">
            <el-icon :size="40">
              <component :is="getPillarIcon(index)" />
            </el-icon>
          </div>
          <h3 class="pillar-title">{{ pillar.title }}</h3>
          <p class="pillar-desc">{{ pillar.desc }}</p>
          <ul class="pillar-examples">
            <li v-for="example in pillar.examples" :key="example">
              {{ example }}
            </li>
          </ul>
        </div>
      </div>

      <p class="design-closing">{{ t('designThinking.closing') }}</p>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { User, View, Pointer } from '@element-plus/icons-vue'

const { t, tm } = useI18n()

const pillars = computed(() => tm('designThinking.pillars') as any[])

const pillarIcons = [User, View, Pointer]

const getPillarIcon = (index: number) => {
  return pillarIcons[index % pillarIcons.length]
}
</script>

<style lang="scss" scoped>
.design-thinking {
  max-width: 1000px;
  margin: 0 auto;
}

.design-intro {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);
  text-align: center;
  margin-bottom: var(--spacing-12);
  padding: 0 var(--spacing-8);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-base);
  }
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
  }
}

.pillar {
  text-align: center;
  padding: var(--spacing-8);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-background);
    box-shadow: var(--shadow-lg);
    transform: translateY(-8px);
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

.pillar-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-6);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: var(--color-background);
}

.pillar-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-black);
  margin-bottom: var(--spacing-4);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
  }
}

.pillar-desc {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-gray);
  margin-bottom: var(--spacing-6);
}

.pillar-examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  text-align: left;

  li {
    position: relative;
    padding-left: var(--spacing-5);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-dark-gray);

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: var(--color-primary);
    }
  }
}

.design-closing {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-dark-gray);
  text-align: center;
  padding: var(--spacing-8);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-lg);
  font-style: italic;

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-base);
  }
}
</style>
