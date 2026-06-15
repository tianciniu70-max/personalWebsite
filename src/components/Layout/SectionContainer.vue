<template>
  <section
    :id="id"
    class="section"
    :class="[`section--${variant}`, { 'section--animated': animated }]"
  >
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  variant?: 'default' | 'hero' | 'alt'
  animated?: boolean
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  variant: 'default',
  animated: false
})
</script>

<style lang="scss" scoped>
.section {
  padding: var(--spacing-12) 0;
  min-height: 60vh;

  &--hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: var(--header-height);
  }

  &--alt {
    background: var(--color-background-alt);
  }

  &--animated {
    animation: fadeIn 0.6s var(--ease-out) forwards;
  }
}
</style>
