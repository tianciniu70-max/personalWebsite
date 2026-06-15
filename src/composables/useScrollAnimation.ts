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
          // 可选：观察一次后停止观察
          // observer?.unobserve(target)
        } else {
          // 如果希望元素可以重复触发动画，取消下面的注释
          // const target = entry.target as HTMLElement
          // target.classList.remove('visible')
          // visibleElements.value.delete(target)
        }
      })
    }, defaultOptions)

    // 延迟一点，确保 DOM 已渲染
    setTimeout(() => {
      document.querySelectorAll(selector).forEach(el => {
        observer?.observe(el)
      })
    }, 100)

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
