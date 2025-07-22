<template>
  <section id="education" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">{{ $options.title }}</h2>
      <div class="flex justify-center mt-8">
        <div class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <h3 class="flex items-center text-xl font-semibold text-gray-900 dark:text-white mb-3">
              <img src="@/assets/imgs/MUST_LOGO.png" alt="明新科技大學" class="w-12 h-8 mr-3 flex-shrink-0">
              {{ schoolName }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-2">{{ degree }}</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">{{ startYear }} - {{ graduationYear }}</p>
            <p class="text-gray-600 dark:text-gray-300 mb-2">論文題目：
              <a :href="paperLink" target="_blank" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200">
                {{ paperTitle }}
              </a>
            </p>
          </div>
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
const paperLink = 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=JH_bqq/record?r1=1&h1=0#XXX'
</script>