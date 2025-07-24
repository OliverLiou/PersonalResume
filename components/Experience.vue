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
                <div class="experience-block">
                  <!-- 卡片標頭 -->
                  <div class="experience-block-header">
                    <div class="experience-block-title bg-gradient-to-r from-blue-500 to-blue-600">
                      <div class="flex items-center justify-between w-full">
                        
                        <h5 class="text-lg font-extrabold text-white">
                          {{ experience.jobTitle }}
                          <span class="text-sm font-semibold text-white">
                            ({{ experience.cardHeader }})
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 卡片內容 -->
                  <div class="experience-content">
                    <div
                      v-for="achievement in experience.achievements"
                      :key="achievement"
                      class="experience-item"
                    >
                      <div class="experience-icon">
                        <span class="text-blue-500 dark:text-blue-400">•</span>
                      </div>
                      <div class="experience-text">{{ achievement }}</div>
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

<style scoped>
.experience-block {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-block:hover {
  @apply transform -translate-y-1;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.experience-block-header {
  @apply relative;
}

.experience-block-title {
  @apply flex items-center p-4 rounded-t-lg;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.experience-content {
  @apply p-4 space-y-3;
}

.experience-item {
  @apply flex items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600;
  transition: all 0.3s ease;
}

.experience-item:hover {
  @apply bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 transform translate-x-1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.experience-icon {
  @apply flex items-center justify-center w-6 h-6 mr-3 mt-0.5;
  transition: transform 0.3s ease;
}

.experience-item:hover .experience-icon {
  @apply transform scale-110;
}

.experience-text {
  @apply text-sm font-medium text-gray-900 dark:text-white flex-1;
  word-wrap: break-word;
}

/* Dark mode enhancements */
.dark .experience-block {
  @apply border border-gray-700;
}

.dark .experience-block:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Responsive design */
/* @media (max-width: 768px) {
  .experience-block-title {
    @apply p-3;
  }

  .experience-block-title span,
  .experience-block-title h5 {
    @apply text-sm;
  }

  .experience-content {
    @apply p-3 space-y-2;
  }

  .experience-item {
    @apply p-2;
  }

  .experience-icon {
    @apply w-5 h-5 mr-2;
  }

  .experience-text {
    @apply text-xs;
  }
}

@media (max-width: 640px) {
  .experience-block-title {
    @apply p-2 flex-col items-start gap-1;
  }

  .experience-block-title .flex {
    @apply flex-col items-start gap-1 w-full;
  }

  .experience-content {
    @apply p-2 space-y-1;
  }

  .experience-item {
    @apply p-2;
  }

  .experience-icon {
    @apply w-4 h-4 mr-2;
  }

  .experience-text {
    @apply text-xs;
  }
} */
</style>
