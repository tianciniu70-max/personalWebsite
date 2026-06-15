import { ref, onMounted, onUnmounted } from 'vue'

export interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options

  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  const observe = (element: HTMLElement) => {
    if (!element) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (triggerOnce && observer) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            isVisible.value = false
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
  }

  const unobserve = () => {
    if (observer && target.value) {
      observer.unobserve(target.value)
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    if (target.value) {
      observe(target.value)
    }
  })

  onUnmounted(() => {
    unobserve()
  })

  return {
    target,
    isVisible
  }
}
