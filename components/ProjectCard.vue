<template>
  <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
    <!-- Project Image/Icon Placeholder -->
    <div class="h-24 bg-gradient-to-br rounded-md from-blue-600 to-blue-500 dark:from-gray-700 dark:to-black-600 relative overflow-hidden">
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-xl font-bold text-white mb-1 truncate ">
          {{ project.title }}
          <p v-if="project.subTitle" class="text-xs text-white opacity-80 truncate">{{ project.subTitle }}</p>
        </h3>
        
        <div class="flex items-center text-white text-sm opacity-90">
          <Icon class="w-4 h-4 mr-2" fill="none" stroke="currentColor" name="material-symbols:calendar-clock-outline-rounded" width="24" height="24" />
          <span>{{ project.startDate }} - {{ project.endDate }}</span>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="p-6 max-h-80 overflow-y-auto">
      <!-- Description -->
      <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">系統描述</h4>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {{ project.description }}
      </p>

      <!-- Features -->
      <div class="mb-4">
        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">主要功能</h4>
        <ul class="space-y-1">
          <li 
            v-for="(feature, index) in project.features" 
            :key="index"
            class="flex items-start text-sm text-gray-600 dark:text-gray-300"
          >
            <svg class="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

