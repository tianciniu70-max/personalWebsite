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
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import HeroSection from '@/components/Sections/HeroSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import ExperienceSection from '@/components/Sections/ExperienceSection.vue'
import SkillsSection from '@/components/Sections/SkillsSection.vue'
import ProjectsSection from '@/components/Sections/ProjectsSection.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

const { observeElements } = useScrollAnimation()

onMounted(() => {
  setTimeout(() => {
    observeElements('.animate-on-enter')
  }, 100)
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
  padding-top: var(--header-height);
}
</style>
