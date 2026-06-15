<template>
  <SectionContainer id="contact">
    <h2 class="section-title">{{ t('contact.title') }}</h2>
    <p class="section-subtitle">{{ t('contact.subtitle') }}</p>

    <div class="contact">
      <div class="contact-channels">
        <a
          v-for="channel in channels"
          :key="channel.type"
          :href="channel.url"
          :title="channel.type"
          class="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="contact-icon">
            <el-icon :size="32">
              <component :is="getContactIcon(channel.icon)" />
            </el-icon>
          </div>
          <h4 class="contact-type">{{ channel.type }}</h4>
          <p class="contact-value">{{ channel.value }}</p>
        </a>
      </div>

      <div class="contact-cta">
        <p class="cta-text">{{ t('contact.cta') }}</p>
        <button class="btn btn--primary btn--large">
          <el-icon><Message /></el-icon>
          {{ currentLocale === 'zh' ? '发送邮件' : 'Send Email' }}
        </button>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionContainer from '@/components/Layout/SectionContainer.vue'
import { Message, Link as LinkIcon, Promotion, ChatDotRound } from '@element-plus/icons-vue'

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)
const channels = computed(() => t('contact.channels') as unknown as any[])

const iconMap: Record<string, any> = {
  email: Message,
  github: LinkIcon,
  linkedin: Promotion,
  wechat: ChatDotRound
}

const getContactIcon = (iconName: string) => {
  return iconMap[iconName] || Message
}
</script>

<style lang="scss" scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
}

.contact-channels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-12);

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-8);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-lg);
  text-align: center;
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-primary);
    color: var(--color-background);

    .contact-icon {
      background: var(--color-background);
      color: var(--color-primary);
    }
  }
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-4);
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-background);
  transition: all var(--transition-base) var(--ease-out);
}

.contact-type {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
}

.contact-value {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  word-break: break-all;

  .contact-card:hover & {
    color: var(--color-background-alt);
  }
}

.contact-cta {
  text-align: center;
  padding: var(--spacing-8);
  background: var(--color-background-alt);
  border-radius: var(--border-radius-lg);
}

.cta-text {
  font-size: var(--font-size-xl);
  color: var(--color-dark-gray);
  margin-bottom: var(--spacing-6);

  @media (max-width: $breakpoint-md) {
    font-size: var(--font-size-lg);
  }
}
</style>
