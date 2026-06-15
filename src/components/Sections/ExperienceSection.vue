<template>
  <section class="experience" id="experience">
    <!-- 区域标题 -->
    <div class="section-header">
      <span class="section-label animate-on-enter">EXPERIENCE</span>
      <h2 class="section-title animate-on-enter">
        {{ locale === 'zh' ? '我的职业历程' : "Where I've made an impact" }}
      </h2>
    </div>

    <!-- 时间线 -->
    <div class="timeline">
      <div
        v-for="(item, index) in experienceItems"
        :key="index"
        class="timeline-item animate-on-enter"
        :class="{ 'timeline-item--last': index === experienceItems.length - 1 }"
      >
        <!-- 左侧日期 -->
        <div class="timeline-date">
          <span class="date-period">{{ item.period }}</span>
          <span class="date-company">{{ item.company }}</span>
        </div>

        <!-- 右侧内容 -->
        <div class="timeline-content">
          <h3 class="timeline-role">{{ locale === 'zh' ? item.roleZh : item.role }}</h3>
          <p class="timeline-desc">{{ locale === 'zh' ? item.descZh : item.desc }}</p>
          <div class="timeline-tech" v-if="item.tech">
            <span v-for="tech in item.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const experienceItems = ref([
  {
    period: '2023 — Present',
    company: 'Current Company',
    role: 'Senior Frontend Engineer',
    roleZh: '高级前端工程师',
    desc: 'Led frontend architecture for a Vue3 enterprise SaaS platform serving 10M+ users. Implemented micro-frontend architecture, improved build performance by 40%, and mentored a team of 4 junior engineers.',
    descZh: '主导 Vue3 企业级 SaaS 平台的前端架构设计，服务千万级用户。实施微前端架构，构建性能提升40%，指导 4 名初级工程师成长。',
    tech: ['Vue3', 'TypeScript', 'Micro-frontend', 'Webpack 5']
  },
  {
    period: '2021 — 2023',
    company: 'Tencent',
    role: 'Frontend Engineer',
    roleZh: '前端工程师',
    desc: 'Developed core features for a B2B platform using Vue3 + TypeScript. Built a component library adopted across 3 teams, reducing UI development time by 60%.',
    descZh: '使用 Vue3 + TypeScript 开发 B2B 平台核心功能。建设跨团队组件库，被 3 个团队采用，UI 开发效率提升 60%。',
    tech: ['Vue3', 'TypeScript', 'Element Plus', 'Sass']
  },
  {
    period: '2019 — 2021',
    company: 'Startup XYZ',
    role: 'Junior Frontend Developer',
    roleZh: '初级前端开发',
    desc: 'Built responsive web applications from the ground up. Introduced Vue3 migration, established coding standards, and contributed to product design decisions.',
    descZh: '从零搭建响应式 Web 应用，推动 Vue3 技术升级，建立编码规范，参与产品设计决策。',
    tech: ['Vue.js', 'JavaScript', 'SCSS', 'REST API']
  }
])
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.experience {
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

// 时间线
.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: $spacing-8;
  padding: $spacing-8 0;
  border-bottom: 1px solid var(--color-border);

  &--last {
    border-bottom: none;
  }

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $spacing-4;
    padding: $spacing-6 0;
  }
}

// 左侧日期
.timeline-date {
  width: 160px;
  flex-shrink: 0;

  @media (max-width: $breakpoint-md) {
    width: auto;
    display: flex;
    gap: $spacing-3;
    align-items: center;
  }
}

.date-period {
  display: block;
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: var(--color-accent);

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-xs;
  }
}

.date-company {
  display: block;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
  margin-top: $spacing-1;

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

// 右侧内容
.timeline-content {
  flex: 1;
  min-width: 0;
}

.timeline-role {
  font-family: $font-family-display;
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: var(--color-primary-dark);
  margin-bottom: $spacing-2;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-lg;
  }
}

.timeline-desc {
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  color: var(--color-dark-gray);
  line-height: $line-height-relaxed;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-top: $spacing-3;
}

.tech-tag {
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
