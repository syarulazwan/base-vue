import { onMounted, onUnmounted } from 'vue'

export function usePageTitle(title) {
  const previousTitle = document.title

  onMounted(() => {
    document.title = title
  })

  onUnmounted(() => {
    document.title = previousTitle
  })
}
