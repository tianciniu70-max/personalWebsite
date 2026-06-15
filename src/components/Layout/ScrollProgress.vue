<template>
  <div class="scroll-progress" :style="{ width: `${scrollWidth}%` }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollWidth = ref(0)

const updateScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollWidth.value = (scrollTop / docHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style lang="scss" scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary) 0%, #00c6ff 100%);
  z-index: calc(var(--z-index-fixed) + 1);
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
}
</style>
