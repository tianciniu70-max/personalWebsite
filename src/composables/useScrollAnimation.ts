import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const visibleElements = ref<Set<HTMLElement>>(new Set())
  let observer: IntersectionObserver | null = null

  const observeElements = (
    selector: string,
    options: IntersectionObserverInit = {}
  ) => {
    // 清理之前的观察器
    if (observer) {
      observer.disconnect()
    }

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.classList.add('visible')
          visibleElements.value.add(target)
        }
      })
    }, defaultOptions)

    // 立即检查元素是否已经在视口中
    const checkImmediateVisibility = () => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(el => {
        const rect = (el as HTMLElement).getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

        if (isInViewport) {
          ;(el as HTMLElement).classList.add('visible')
          visibleElements.value.add(el as HTMLElement)
        }

        // 同时开始观察，用于后续滚动
        observer?.observe(el)
      })
    }

    // 立即执行一次
    checkImmediateVisibility()

    return observer
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    // 组件挂载后自动清理
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    observeElements,
    visibleElements,
    cleanup
  }
}

// 便捷的 hook，用于单个元素的可视性观察
export function useElementVisible(options: IntersectionObserverInit = {}) {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  const observe = (selector?: string) => {
    const { observeElements } = useScrollAnimation()

    if (selector) {
      observeElements(selector, options)
    }
  }

  return {
    isVisible,
    elementRef,
    observe
  }
}
