<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import HeroSection from '@/components/Sections/HeroSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import ExperienceSection from '@/components/Sections/ExperienceSection.vue'
import SkillsSection from '@/components/Sections/SkillsSection.vue'
import ProjectsSection from '@/components/Sections/ProjectsSection.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

const { observeElements } = useScrollAnimation()

// 触发动画元素的可见性
const triggerAnimations = () => {
  const elements = document.querySelectorAll('.animate-on-enter')
  elements.forEach(el => {
    const rect = (el as HTMLElement).getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

    if (isInViewport) {
      ;(el as HTMLElement).classList.add('visible')
    }
  })
}

// 监听 hash 变化（导航点击）
const handleHashChange = () => {
  setTimeout(() => {
    triggerAnimations()
  }, 300)
}

onMounted(async () => {
  await nextTick()

  // 初始化观察
  setTimeout(() => {
    observeElements('.animate-on-enter')
  }, 200)

  // 监听 hash 变化
  window.addEventListener('hashchange', handleHashChange)

  // 初始触发一次（处理直接打开带 hash 的 URL）
  if (window.location.hash) {
    setTimeout(triggerAnimations, 300)
  }
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
  padding-top: var(--header-height);
}
</style>
