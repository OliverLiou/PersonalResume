<template>
  <section
    id="hero"
    role="banner"
    aria-labelledby="hero-title"
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
  >
    <!-- 背景圖案具有更好的效能 -->
    <div 
      class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
      style="background-image: radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0); background-size: 50px 50px;"
      aria-hidden="true"
    />
    
    <!-- 使用 Tailwind 內建動畫的優化浮動元素 -->
    <div 
      class="absolute top-16 left-8 w-16 h-16 md:w-20 md:h-20 bg-blue-200/20 dark:bg-blue-500/20 rounded-full animate-bounce [animation-duration:4s] [animation-delay:0s]"
      aria-hidden="true"
    />
    <div 
      class="absolute bottom-24 right-12 w-12 h-12 md:w-16 md:h-16 bg-indigo-200/30 dark:bg-indigo-500/30 rounded-full animate-bounce [animation-duration:6s] [animation-delay:2s]"
      aria-hidden="true"
    />
    <div 
      class="absolute top-32 right-16 w-8 h-8 md:w-12 md:h-12 bg-purple-200/25 dark:bg-purple-500/25 rounded-full animate-pulse [animation-duration:3s]"
      aria-hidden="true"
    />

    <!-- 主要內容容器 -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
        
        <!-- 內容區段 -->
        <div class="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 lg:order-1 order-2">
          <!-- 改善無障礙功能的主標題 -->
          <header class="space-y-3 lg:space-y-4">
            <h1 
              id="hero-title"
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wide"
            >
              <span class="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(59,130,246,0.5)]">
                劉亦剛
              </span>
            </h1>
            
            <div class="space-y-1 lg:space-y-2">
              <p 
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                role="doc-subtitle"
                aria-label="職業標題"
              >
                軟體工程師 & 全端工程師
              </p>
            </div>
          </header>

          <!-- 改善可讀性的描述 -->
          <div class="max-w-2xl space-y-4 lg:space-y-6" role="region" aria-label="個人簡介">
            <p class="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light tracking-wide">
              擁有多年軟體開發經驗，享受解決問題後帶來的成就感，並在系統架構設計上發揮創意思維。專注於系統穩定性與效能優化，確保應用程式在實際環境中的可靠運作。保持對新興技術的敏銳度，透過持續學習與實作保持技術競爭力。
            </p>
            <p class="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light tracking-wide">
              開發過程中堅持高品質程式碼標準，重視可讀性與可維護性，以降低長期維護成本。具備將技術方案與商業需求的結合能力。期望在團隊協作中發揮技術專長，創造對組織或使用者具有實質價值的解決方案。
            </p>
          </div>
        </div>

        <!-- 增強無障礙功能的個人照片區段 -->
        <div class="lg:flex-shrink-0 lg:order-2 order-1" role="img" aria-label="個人照片">
          <div class="relative">
            <!-- 具有響應式尺寸的主要圖片容器 -->
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[420px] xl:h-[420px]">
              <!-- 改善效能的背景漸層 -->
              <div 
                class="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-500/20 rounded-3xl rotate-6"
                aria-hidden="true"
              />
              <div 
                class="absolute inset-0 bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl -rotate-6"
                aria-hidden="true"
              />
              
              <!-- 具有更好載入與無障礙功能的圖片 -->
              <div class="relative w-full h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-gray-700/50 backdrop-blur-sm">
                <img
                  src="../assets/imgs/ProfilePicture.jpg"
                  alt="個人照片"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                  decoding="async"
                  width="420"
                  height="420"
                >
                <!-- 具有更好對比度的微妙覆蓋層 -->
                <div 
                  class="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <!-- 使用 CSS 形狀的裝飾元素 -->
              <div 
                class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-pulse [animation-duration:2s]"
                aria-hidden="true"
              />
              <div 
                class="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-50 animate-pulse [animation-duration:3s] [animation-delay:1s]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 具有更好型別的組件中繼資料
defineOptions({
  name: 'HeroSection',
})

// 效能優化：預載入關鍵圖片
const imageLoaded = ref(false)

onMounted(() => {
  // 為了更好的效能預載入個人照片
  const img = new Image()
  img.src = '../assets/imgs/ProfilePicture.jpg'
  img.onload = () => {
    imageLoaded.value = true
  }
})

// 為測試暴露響應式狀態
defineExpose({
  imageLoaded
})
</script>

<style scoped>
/* 最小化自訂樣式 - 大部分功能已移至 Tailwind */

/* 平滑滾動行為（如需要可移至全域） */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* 高對比度模式支援 */
@media (prefers-contrast: high) {
  .bg-gradient-to-r {
    background: currentColor !important;
    -webkit-background-clip: unset !important;
    background-clip: unset !important;
  }
}

/* 減少動畫支援 */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse,
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 焦點可見性改善 */
.focus\:outline-none:focus-visible {
  outline: 2px solid theme('colors.blue.500');
  outline-offset: 2px;
}

/* 僅螢幕閱讀器類別優化 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>