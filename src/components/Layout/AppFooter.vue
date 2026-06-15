<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="footer-logo-text">{{ t('hero.tagline') }}</span>
          </div>
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
            <component :is="channel.icon" />
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
  ChatDotRound,
  Promotion
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
    url: 'https://github.com/tianciniu70-max'
  },
  {
    type: 'WeChat',
    icon: ChatDotRound,
    url: '#'
  },
  {
    type: 'LinkedIn',
    icon: Promotion,
    url: 'https://linkedin.com/in/yourprofile'
  }
])
</script>

<style lang="scss" scoped>

.app-footer {
  background: var(--color-black);
  color: var(--color-background-alt);
  padding: var(--spacing-16) 0 var(--spacing-8);
  position: relative;
  overflow: hidden;

  // 装饰背景
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-primary) 50%,
      transparent 100%
    );
    opacity: 0.3;
  }
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-10);
  padding-bottom: var(--spacing-10);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: var(--spacing-8);
    text-align: center;
  }
}

.footer-brand {
  .footer-logo {
    margin-bottom: var(--spacing-3);
  }

  .footer-logo-text {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    background: linear-gradient(135deg, #fff 0%, var(--color-primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: $letter-spacing-tight;
  }

  .footer-tagline {
    font-size: var(--font-size-sm);
    color: var(--color-gray);
    max-width: 300px;
    line-height: var(--line-height-relaxed);

    @media (max-width: $breakpoint-md) {
      max-width: 100%;
    }
  }
}

.footer-social {
  display: flex;
  gap: var(--spacing-3);

  @media (max-width: $breakpoint-md) {
    gap: var(--spacing-4);
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--border-radius-full);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-background-alt);
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-background);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 113, 227, 0.3);
  }

  .el-icon {
    font-size: 20px;
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray);

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: var(--spacing-3);
  }
}

.copyright {
  font-weight: var(--font-weight-normal);
}

.made-with {
  font-weight: var(--font-weight-medium);
  color: var(--color-light-gray);
}
</style>
