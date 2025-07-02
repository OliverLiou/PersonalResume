import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    isDark: false,
    isInitialized: false
  }),

  getters: {
    theme: (state) => state.isDark ? 'dark' : 'light'
  },

  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      this.updateDOM()
    },

    setDark(value: boolean) {
      this.isDark = value
      this.updateDOM()
    },

    updateDOM() {
      if (process.client) {
        const html = document.documentElement
        if (this.isDark) {
          html.classList.add('dark')
        } else {
          html.classList.remove('dark')
        }
      }
    },

    initializeDarkMode() {
      if (process.client) {
        // 使用系統偏好作為預設值
        this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        this.updateDOM()
        this.isInitialized = true

        // 監聽系統主題變化
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
          this.isDark = e.matches
          this.updateDOM()
        }

        mediaQuery.addEventListener('change', handleChange)
        
        // 清理函數 - 在組件卸載時調用
        return () => {
          mediaQuery.removeEventListener('change', handleChange)
        }
      }
    }
  }
})