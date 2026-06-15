<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <DesignThinkingSection />
    <JapanCareerSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/Sections/HeroSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import SkillsSection from '@/components/Sections/SkillsSection.vue'
import ProjectsSection from '@/components/Sections/ProjectsSection.vue'
import DesignThinkingSection from '@/components/Sections/DesignThinkingSection.vue'
import JapanCareerSection from '@/components/Sections/JapanCareerSection.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
}
</style>
