<template>
  <div class="relative">
    <button
      class="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      @click="toggleDropdown"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
      </svg>
      <span class="text-sm font-medium">{{ currentLanguage }}</span>
      <svg class="w-4 h-4 transform transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
    >
      <div class="py-1">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          :class="{ 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': currentLanguage === lang.name }"
          @click="selectLanguage(lang)"
        >
          <span class="text-xl mr-3">{{ lang.flag }}</span>
          <span class="text-sm">{{ lang.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDropdownOpen = ref(false)
const currentLanguage = ref('English')

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' }
]

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectLanguage = (lang) => {
  currentLanguage.value = lang.name
  isDropdownOpen.value = false
  // 未來這裡會加入實際的語言切換邏輯
  //console.log('Selected language:', lang.code)
}

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>