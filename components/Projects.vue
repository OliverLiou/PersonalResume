<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">{{ $options.title }}</h2>
      <div class="mt-10 grid md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-bold text-primary">Project One</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">A brief description of the project, its purpose, and the technologies used. It was a great learning experience.</p>
          <a href="#" class="text-primary hover:underline mt-4 inline-block">View Project</a>
        </div>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-bold text-primary">Project Two</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">Another project that showcases my skills in a different area. This one was challenging but rewarding.</p>
          <a href="#" class="text-primary hover:underline mt-4 inline-block">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  title: '專案分享',
  href: '#projects'
}
</script>