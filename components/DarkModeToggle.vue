<template>
  <button
    class="group relative inline-flex items-center justify-center w-10 h-10 rounded-lg border border-transparent bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95 shadow-sm hover:shadow-md"
    :disabled="!isInitialized"
    aria-label="切換深色模式"
    role="switch"
    :aria-checked="isDark"
    @click="toggleDark"
  >
    <!-- 工具提示背景 -->
    <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      <div class="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
        {{ isDark ? '切換到淺色模式' : '切換到深色模式' }}
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </div>

    <Transition
      name="theme-icon"
      mode="out-in"
    >
      <!-- Sun Icon - Light Mode -->
      <svg
        v-if="!isDark"
        key="sun"
        class="w-5 h-5 transition-transform duration-200 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      
      <!-- Moon Icon - Dark Mode -->
      <svg
        v-else
        key="moon"
        class="w-5 h-5 transition-transform duration-200 group-hover:-rotate-12"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </Transition>
  </button>
</template>

<script setup lang="ts">
const { isDark, isInitialized, toggleDark } = useDarkMode()
</script>

<style scoped>
/* 主題圖標切換動畫 - 使用最小化的自定義 CSS 來實現複雜的旋轉和縮放效果 */
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.theme-icon-enter-to,
.theme-icon-leave-from {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}
</style>