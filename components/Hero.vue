<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"/>
    
    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"/>
    <div class="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-30 animate-float-delayed"/>
    <div class="absolute top-40 right-20 w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-25 animate-pulse"/>

    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        
        <!-- Left Side: Content -->
        <div class="flex-1 text-center lg:text-left space-y-8 lg:order-1 order-2">

          <!-- Main Title -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                劉亦剛
              </span>
            </h1>
            <div class="space-y-2">
              <p class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                軟體工程師 & 全端工程師
              </p>
              <!-- <p class="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium">
                Full-Stack Developer & Tech Enthusiast
              </p> -->
            </div>
          </div>

          <!-- Description -->
          <div class="max-w-2xl space-y-6">
            <p class="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light tracking-wide">
              擁有多年軟體開發經驗，享受解決問題後帶來的成就感，並在系統架構設計上發揮創意思維。專注於系統穩定性與效能優化，確保應用程式在實際環境中的可靠運作。保持對新興技術的敏銳度，透過持續學習與實作保持技術競爭力。
            </p>
            <p class="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light tracking-wide">
              開發過程中堅持高品質程式碼標準，重視可讀性與可維護性，以降低長期維護成本。具備將技術方案與商業需求緊密結合的能力，致力於開發真正解決用戶痛點的系統與應用。期望在團隊協作中發揮技術專長，創造對組織與使用者具有實質價值的解決方案。
            </p>
          </div>
        </div>

        <!-- Right Side: Profile Image -->
        <div class="lg:flex-shrink-0 lg:order-2 order-1">
          <div class="relative">
            <!-- Main Image Container -->
            <div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              <!-- Background Gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"/>
              <div class="absolute inset-0 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-3xl transform -rotate-6 opacity-20"/>
              
              <!-- Image -->
              <div class="relative w-full h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img
                  src="../assets/imgs/ProfilePicture.jpg"
                  alt="劉亦剛 - 全端開發者"
                  class="w-full h-full object-cover"
                  loading="lazy"
                >
                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Component metadata
defineOptions({
  name: 'HeroSection',
  href: '#'
})

</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite 2s;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Dark mode grid pattern */
.dark .bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
</style>
