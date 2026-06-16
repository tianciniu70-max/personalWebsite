<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <!-- 顶部区域 -->
      <div class="footer-top">
        <span class="footer-logo">T.C.</span>
        <nav class="footer-nav">
          <a href="#/#about">About</a>
          <a href="#/#experience">Experience</a>
          <a href="#/#projects">Projects</a>
          <a href="#/#contact">Contact</a>
        </nav>
      </div>

      <!-- 底部 -->
      <div class="footer-bottom">
        <span class="copyright">{{ t('footer.copyright') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.app-footer {
  background: var(--color-primary);
  padding: $spacing-12 $spacing-8 $spacing-8;
}

.footer-inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: $spacing-8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: $spacing-8;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    gap: $spacing-4;
    text-align: center;
  }
}

.footer-logo {
  font-family: $font-family-display;
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: #FFFFFF;
  letter-spacing: $letter-spacing-tight;
}

.footer-nav {
  display: flex;
  gap: $spacing-8;

  @media (max-width: $breakpoint-sm) {
    gap: $spacing-6;
  }

  a {
    font-family: $font-family-base;
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color $transition-fast $ease-default;

    &:hover {
      color: #FFFFFF;
    }
  }
}

.footer-bottom {
  text-align: center;
}

.copyright {
  font-family: $font-family-base;
  font-size: $font-size-xs;
  font-weight: $font-weight-normal;
  color: rgba(255, 255, 255, 0.4);
}
</style>
