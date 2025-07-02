import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useDarkModeStore } from '~/stores/darkMode'

export const useDarkMode = () => {
  const store = useDarkModeStore()
  const { isDark, isInitialized, theme } = storeToRefs(store)
  const { toggleDark, setDark, initializeDarkMode } = store

  onMounted(() => {
    const cleanup = initializeDarkMode()
    
    // 清理函數
    return cleanup
  })

  return {
    isDark,
    isInitialized,
    theme,
    toggleDark,
    setDark
  }
}