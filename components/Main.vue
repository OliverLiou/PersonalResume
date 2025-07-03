<template>
  <section id="main" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-6xl mx-auto">
        <!-- 左側：個人照片、名字、副標題 -->
        <div class="flex flex-col items-center text-center lg:flex-shrink-0">
          <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 bg-white dark:bg-gray-800 mb-6">
            <img
              src="../assets/imgs/hcmf.png"
              alt="個人照片"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Your Name
          </h1>
          <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium">
            Full-Stack Developer | Tech Enthusiast
          </p>
        </div>

        <!-- 右側：關於我的內容 -->
        
        <div class="flex-1 flex items-center justify-center m-8">
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            具有7年軟體開發經驗 享受解決問題與系統設計中的思考過程
            也重視系統實際運作的穩定性與效能表現
            對新技術保有好奇心，平時有持續學習與自我研究的習慣
            開發上注重程式碼品質與後續維護性，並在意系統最終帶來的實際價值
            希望能將技術與業務需求有效結合，開發出真正實用、能為團隊與使用者帶來幫助的系統或產品
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>