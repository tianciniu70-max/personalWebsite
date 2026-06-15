<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-title">{{ t('hero.tagline') }}</h3>
          <p class="footer-tagline">{{ t('hero.specialization') }}</p>
        </div>

        <div class="footer-social">
          <a
            v-for="channel in socialChannels"
            :key="channel.type"
            :href="channel.url"
            :title="channel.type"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component :is="channel.icon" :size="20" />
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ t('footer.copyright') }}</p>
        <p class="made-with">{{ t('footer.madeWith') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Message,
  Link as LinkIcon,
  ChatDotRound
} from '@element-plus/icons-vue'

const { t } = useI18n()

const socialChannels = computed(() => [
  {
    type: 'Email',
    icon: Message,
    url: 'mailto:your.email@example.com'
  },
  {
    type: 'GitHub',
    icon: LinkIcon,
    url: 'https://github.com/yourusername'
  },
  {
    type: 'WeChat',
    icon: ChatDotRound,
    url: '#'
  }
])
</script>

<style lang="scss" scoped>
.app-footer {
  background: var(--color-black);
  color: var(--color-background-alt);
  padding: var(--spacing-12) 0 var(--spacing-6);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-8);
  padding-bottom: var(--spacing-8);
  border-bottom: 1px solid var(--color-dark-gray);

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: var(--spacing-6);
    text-align: center;
  }
}

.footer-brand {
  .footer-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--spacing-2);
    background: linear-gradient(135deg, #fff 0%, var(--color-primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .footer-tagline {
    font-size: var(--font-size-sm);
    color: var(--color-light-gray);
  }
}

.footer-social {
  display: flex;
  gap: var(--spacing-4);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-dark-gray);
  color: var(--color-background-alt);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-primary);
    color: var(--color-background);
    transform: translateY(-2px);
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-light-gray);

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: var(--spacing-2);
  }
}
</style>
