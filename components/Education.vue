<template>
  <section id="education" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 標題區塊 -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $options.title }}
        </h2>
      </div>

      <!-- 教育卡片 -->
      <div class="flex justify-center">
        <div class="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <article 
            class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2"
            role="article"
            aria-labelledby="education-title"
          >
            <!-- 裝飾性漸變背景 -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            
            <!-- 內容區域 -->
            <div class="relative z-10">
              <!-- 學校標題與圖標 -->
              <h3 id="education-title" class="flex flex-col sm:flex-row sm:items-center text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                <!-- 學校圖標容器 - 轉換自 .school-icon -->
                <div class="flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow-md p-3 mb-3 sm:mb-0 sm:mr-4 w-fit transition-transform duration-300 ease-out hover:scale-110 group-hover:shadow-lg">
                  <img 
                    src="@/assets/imgs/MUST_LOGO.png" 
                    alt="明新科技大學校徽" 
                    class="w-12 h-8 sm:w-14 sm:h-10 object-contain"
                    loading="lazy"
                  >
                  <span class="mx-3">{{ schoolName }}</span>
                </div>
                
              </h3>

              <!-- 學位資訊 -->
              <div class="space-y-3 sm:space-y-4">
                <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium">
                  {{ degree }}
                </p>
                
                <!-- 就學期間 -->
                <div class="flex items-center text-gray-600 dark:text-gray-400">
                  <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time class="text-sm sm:text-base font-medium">
                    {{ startYear }} - {{ graduationYear }}
                  </time>
                </div>

                <!-- 論文資訊 -->
                <div class="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div class="flex flex-col sm:flex-row sm:items-start gap-2">
                    <span class="text-gray-700 dark:text-gray-300 font-medium flex-shrink-0">
                      論文題目：
                    </span>
                    <a 
                      :href="paperLink" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-all duration-200 hover:underline decoration-2 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-md px-1 py-0.5"
                      aria-label="開啟論文連結"
                    >
                      {{ paperTitle }}
                      <svg class="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  title: '學歷',
  href: '#education'
}
</script>
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>
const schoolName = '明新科技大學';
const degree = '資訊管理學系碩士班';
const startYear = '2015年09月';
const graduationYear = '2017年06月';
const paperTitle = '五回合自適應偵測診斷於超立方體';
const paperLink = 'https://hdl.handle.net/11296/st8q2q'
</script>

