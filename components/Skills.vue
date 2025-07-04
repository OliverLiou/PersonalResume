<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">{{ $options.title }}</h2>
      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <h3 class="font-bold text-lg text-primary">JavaScript</h3>
        </div>
        <div class="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <h3 class="font-bold text-lg text-primary">Vue.js</h3>
        </div>
        <div class="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <h3 class="font-bold text-lg text-primary">Nuxt.js</h3>
        </div>
        <div class="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <h3 class="font-bold text-lg text-primary">Tailwind CSS</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  title: '技能',
  href: '#skills'
}
</script>