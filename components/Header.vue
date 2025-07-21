<template>
  <header
    class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300"
  >
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <a
        :href="Main.href"
        class="text-2xl font-bold text-primary dark:text-blue-400"
        >Your Name</a
      >
      <div class="flex items-center space-x-6">
        <div class="hidden md:flex space-x-6">
          <a
            v-for="navBarItem in navBarItems"
            :key="navBarItem.title"
            :href="navBarItem.href"
            class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
          >
            {{ navBarItem.title }}
          </a>
        </div>
        <div class="flex items-center space-x-3">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<script setup>
const Main = resolveComponent("Main");
const Experience = resolveComponent("Experience");
const Skills = resolveComponent("Skills");
const Projects = resolveComponent("Projects");
const Education = resolveComponent("Education");

const navBarItems = computed(() => {
  const items = [Experience, Skills, Projects, Education];
  return items.map((s) => {
    return { title: s.title, href: s.href };
  });
});

onMounted(() => {
  // console.log(navBarItems.value)
});
</script>
