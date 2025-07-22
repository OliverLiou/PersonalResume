<template>
  <section id="education" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">{{ $options.title }}</h2>
      <div class="mt-8 max-w-xl mx-auto">
        <div class="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-primary">Master of ...</h3>
          <!-- <p class="text-secondary dark:text-gray-400">University of Technology - 2020</p>
          <p class="mt-2 text-gray-700 dark:text-gray-300">Focused on web development and human-computer interaction.</p> -->
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