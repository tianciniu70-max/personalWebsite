<template>
  <section class="experience" id="experience">
    <!-- 区域标题 -->
    <div class="section-header">
      <span class="section-label animate-on-enter">EXPERIENCE</span>
      <h2 class="section-title animate-on-enter">
        {{ locale === 'zh' ? '工作经历' : "Work Experience" }}
      </h2>
      <p class="section-subtitle animate-on-enter">
        {{ locale === 'zh' ? '2025年度项目交付总结' : '2025 Project Summary' }}
      </p>
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
          <div class="timeline-features" v-if="item.features">
            <span v-for="feature in item.features" :key="feature" class="feature-tag">
              {{ feature }}
            </span>
          </div>
          <div class="timeline-tech" v-if="item.tech">
            <span v-for="tech in item.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 其他工作 -->
    <div class="other-work animate-on-enter">
      <h3 class="other-title">{{ locale === 'zh' ? '其他工作' : 'Other Work' }}</h3>
      <p class="other-desc">
        {{ locale === 'zh'
          ? '积极配合并完成领导安排的其他临时性任务，按要求支持相关项目的开发、优化及问题排查工作。'
          : 'Actively cooperate and complete other temporary tasks assigned by leadership, supporting the development, optimization, and troubleshooting of related projects as required.' }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const experienceItems = ref([
  {
    period: '2025',
    company: '华瑞项目',
    role: '前端负责人',
    roleZh: '前端负责人',
    desc: 'Device full connection project - Led frontend development for equipment monitoring, OEE analysis, alarm center, and configuration modules. Focused on system stability and continuous optimization.',
    descZh: '负责设备全连接项目的前端需求开发与持续优化工作，完成了设备监控、设备 OEE、告警中心、告警参数配置、OEE 配置等核心模块的功能开发。积极参与项目后期的 Bug 修复、代码维护与性能优化，保障系统的稳定运行与持续迭代。',
    features: ['设备监控', 'OEE 分析', '告警中心', '参数配置'],
    tech: ['Vue3', 'TypeScript', 'ECharts', 'Element Plus']
  },
  {
    period: '2025',
    company: '天梭项目',
    role: '核心开发',
    roleZh: '核心开发',
    desc: 'Special process project - Developed core modules including analysis master template, analysis entry, document template management, tool management, and App management. Continuously optimized code structure.',
    descZh: '参与并完成特种工艺项目中多项核心模块的前端开发工作，包括录入分析母本、录入分析、文档模板管理、刀具管理、App 管理等功能模块。对项目运行过程中出现的问题进行修复，并根据后续需求调整不断进行功能优化和代码结构优化。',
    features: ['录入分析母本', '文档模板管理', '刀具管理', 'App管理'],
    tech: ['Vue3', 'Composition API', 'TypeScript', 'Element Plus']
  },
  {
    period: '2025',
    company: '上飞院项目',
    role: '独立开发',
    roleZh: '独立开发',
    desc: 'Customized migration of device full connection project - Independently completed equipment overview, operation & maintenance modules, process center, data statistics, and comprehensive alarm management system.',
    descZh: '根据产品需求，对华瑞设备全连接项目进行整体迁移与定制化改造。完成菜单路由的重新规划与整理，并独立完成设备综览、设备运维（保养项目管理、保养计划管理、保养任务管理）、流程中心、数据统计模块，以及告警中心下的告警仪表盘、告警列表、告警通知模板管理、告警级别管理、告警规则管理等功能模块的开发。',
    features: ['设备综览', '设备运维', '流程中心', '数据统计', '告警管理'],
    tech: ['Vue3', 'Vue Router', 'TypeScript', 'ECharts', 'Element Plus']
  },
  {
    period: '2025',
    company: '东轻项目',
    role: '前端开发',
    roleZh: '前端开发',
    desc: 'Special process monitoring project - Developed product axis and alarm center modules, conducted bug fixes and performance optimization for production environment.',
    descZh: '负责特种工艺过程监控相关模块的前端开发工作，完成产品轴、告警中心等功能模块的需求实现，并对项目后期出现的问题进行修复与优化，持续进行代码维护与版本更新。',
    features: ['过程监控', '产品轴管理', '告警中心'],
    tech: ['Vue3', 'TypeScript', 'ECharts', 'WebSocket']
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
  margin-bottom: $spacing-20;
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
  margin-bottom: $spacing-2;

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-3xl;
  }
}

.section-subtitle {
  font-family: $font-family-base;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
}

// 时间线
.timeline {
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: $spacing-16;
}

.timeline-item {
  display: flex;
  gap: $spacing-8;
  padding: $spacing-10 0;
  border-bottom: 1px solid var(--color-border);

  &--last {
    border-bottom: none;
  }

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $spacing-4;
    padding: $spacing-8 0;
  }
}

// 左侧日期
.timeline-date {
  width: 140px;
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
  font-family: $font-family-display;
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: var(--color-accent);

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-sm;
  }
}

.date-company {
  display: block;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
  margin-top: $spacing-2;

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
  margin-bottom: $spacing-3;

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
  margin-bottom: $spacing-4;
}

.timeline-features {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
  margin-bottom: $spacing-3;
}

.feature-tag {
  display: inline-block;
  padding: $spacing-1 $spacing-3;
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: var(--color-primary);
  background: rgba(var(--color-primary-rgb, 51, 102, 153), 0.1);
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-2;
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

// 其他工作
.other-work {
  max-width: 600px;
  margin: 0 auto;
  padding: $spacing-8;
  background: var(--color-muted);
  text-align: center;
}

.other-title {
  font-family: $font-family-display;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: var(--color-primary-dark);
  margin-bottom: $spacing-3;
}

.other-desc {
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  color: var(--color-gray);
  line-height: $line-height-relaxed;
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
