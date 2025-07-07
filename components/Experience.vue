<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">
        {{ $options.title }}
      </h2>
      <!-- 水平時間軸 -->
      <div class="relative max-w-6xl mx-auto mt-12 px-4">
        <!-- 水平時間軸主線 -->
        <div class="relative h-20 mb-8">
          <div class="absolute top-10 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
          
          <!-- 時間軸圓點 -->
          <div class="absolute top-8 left-2 w-5 h-5 bg-gray-400 dark:bg-gray-500 border-4 border-white dark:border-gray-800 rounded-full shadow-lg"></div>
          <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-400 dark:bg-gray-500 border-4 border-white dark:border-gray-800 rounded-full shadow-lg"></div>
          <div class="absolute top-8 right-2 w-5 h-5 bg-gray-400 dark:bg-gray-500 border-4 border-white dark:border-gray-800 rounded-full shadow-lg"></div>
          
          <!-- 年份標籤 -->
          <div class="absolute top-0 left-2 text-sm font-semibold text-gray-600 dark:text-gray-400">2017</div>
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-600 dark:text-gray-400">2021</div>
          <div class="absolute top-0 right-2 text-sm font-semibold text-gray-600 dark:text-gray-400">2025</div>
        </div>

        <!-- 工作經歷內容 -->
        <div class="flex gap-6 overflow-x-auto pb-4">
          <template v-for="experience in experiences" :key="experience.cardHeader">
            <div class="flex-shrink-0 w-auto min-w-max bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold whitespace-nowrap">{{ experience.cardHeader }}</div>
              <h5 class="text-xl font-bold text-gray-900 dark:text-white mb-3 whitespace-nowrap">{{ experience.jobTitle }}</h5>
              <div class="text-gray-700 dark:text-gray-300 space-y-2">
                <p class="whitespace-nowrap" v-for="achievement in experience.achievements" :key="achievement">
                  • {{ achievement }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  title: "工作經歷",
  href: "#experience",
};
</script>

<script setup>
const experiences = reactive([
  {
    cardHeader: '2017-2020(研發替代役)',
    jobTitle: '助理工程師',
    achievements: [
      '與使用者討論需求並負責實作',
      '建立良好的需求溝通與開發基礎',
      '維運公司現行系統，確保穩定運作',
    ],
  },
  {
    cardHeader: '2021-2024',
    jobTitle: '工程師',
    achievements: [
      '自研Azure CI/CD，且成功佈署多個專案',
      '自學MVC架構、EF Core、Vue2...等技術',
      '學習並應用PowerAutomate與PowerApps'
    ]
  },
  {
    cardHeader: '2025-至今',
    jobTitle: '資深工程師',
    achievements: [
      '建立前後端模板，有效縮短開發時間',
      '自學Vue3 + Nuxt3、TailwindCSS...等技術',
      '後端加入Log機制，建立完整的異動紀錄追蹤',
      '持續開發與維運專案，包含快速報價、模具驗收...等系統',
    ]
  }
])
</script>
