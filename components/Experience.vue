<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
      >
        {{ $options.title }}
      </h2>

      <!-- 統一垂直時間軸 -->
      <div class="relative max-w-4xl mx-auto">
        <!-- 垂直主線 -->
        <div class="absolute left-6 w-1 h-full bg-gray-300 dark:bg-gray-600" />

        <!-- 經歷項目 -->
        <div class="space-y-8">
          <template
            v-for="experience in experiences"
            :key="experience.cardHeader"
          >
            <div class="relative flex items-start">
              <!-- 時間軸圓點 -->
              <div
                class="absolute left-6 transform -translate-x-1/2 w-6 h-6 bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800 rounded-full shadow-lg z-10 mt-2"
              />

              <!-- 經歷卡片 (統一右側顯示) -->
              <div class="ml-12 w-full">
                <div class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30">
                  <!-- 卡片標頭 -->
                  <div class="relative">
                    <div class="flex items-center p-4 sm:p-3 rounded-t-lg bg-gradient-to-r from-blue-300 to-blue-600 shadow-sm">
                      <div class="flex items-center justify-between w-full gap-3">
                        <!-- 左側圖片區塊 -->
                        <div class="flex items-center flex-1">
                          <img src="../assets/imgs/HCMF_Logo_White.png" alt="Logo" class="h-10 md:h-12 sm:h-8 w-auto">
                        </div>
                        
                        <!-- 右側文字區塊 -->
                        <div class="text-right flex-1 min-w-0">
                          <h5 class="text-base md:text-lg sm:text-sm mb-1 text-white font-extrabold leading-tight break-words">
                            {{ experience.jobTitle }}
                          </h5>
                          <span class="text-xs md:text-sm text-white font-semibold opacity-90 break-words">
                            {{ experience.cardHeader }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 卡片內容 -->
                  <div class="p-4 space-y-3">
                    <div
                      v-for="achievement in experience.achievements"
                      :key="achievement"
                      class="flex items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:translate-x-1 hover:shadow-md group"
                    >
                      <div class="flex items-center justify-center w-6 h-6 mr-3 mt-0.5 transition-transform duration-300 ease-in-out group-hover:scale-110">
                        <span class="text-blue-500 dark:text-blue-400">•</span>
                      </div>
                      <div class="text-sm font-medium text-gray-900 dark:text-white flex-1 break-words">{{ achievement }}</div>
                    </div>
                  </div>
                </div>
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
  name: "ExperienceSection2",
  title: "工作經歷",
  href: "#experience",
};
</script>

<script setup>
const experiences = reactive([
  {
    cardHeader: "2025-至今",
    jobTitle: "資深工程師",
    achievements: [
      "建立前後端模板，有效縮短開發時間",
      "自學Vue3 + Nuxt3、TailwindCSS...等技術",
      "後端加入Log機制，建立完整的異動紀錄追蹤",
      "持續開發與維運專案，包含快速報價、模具驗收...等系統",
    ],
  },
  {
    cardHeader: "2021-2024",
    jobTitle: "工程師",
    achievements: [
      "自研Azure CI/CD，且成功佈署多個專案",
      "自學MVC架構、EF Core、Vue2...等技術",
      "學習並應用PowerAutomate與PowerApps",
    ],
  },
  {
    cardHeader: "2017-2020(研發替代役)",
    jobTitle: "助理工程師",
    achievements: [
      "與使用者討論需求並負責實作",
      "建立良好的需求溝通與開發基礎",
      "維運公司現行系統，確保穩定運作",
    ],
  },
]);

</script>

