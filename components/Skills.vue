<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
      >
        {{ $options.title }}
      </h2>

      <div class="max-w-6xl mx-auto">
        <!-- Three Skill Blocks -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend Block -->
          <div class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30">
            <div class="relative">
              <div
                class="flex items-center p-4 sm:p-3 md:p-4 lg:p-4 rounded-t-lg shadow-md bg-gradient-to-r from-green-500 to-emerald-600"
              >
                <Icon
                  name="material-symbols:web"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg sm:text-base md:text-base lg:text-lg font-bold text-white ml-3 sm:ml-2 md:ml-3">{{ frontEnds.cardTitle }}</h3>
              </div>
            </div>
            <div class="p-4 sm:p-3 md:p-3 lg:p-4 space-y-3 sm:space-y-2 md:space-y-2 lg:space-y-3">
              <div
                v-for="(skill, index) in frontEnds.items"
                :key="index"
                class="flex items-center p-3 sm:p-2 md:p-2 lg:p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:dark:bg-gray-600 hover:border-gray-300 hover:dark:border-gray-500 hover:transform hover:translate-x-1 hover:shadow-md group"
              >
                <div class="flex items-center justify-center w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-3 sm:mr-2 md:mr-2 lg:mr-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-gray-900 dark:text-white flex-1 break-words">{{ skill.name }}</div>
              </div>
            </div>
          </div>

          <!-- Backend Block -->
          <div class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30">
            <div class="relative">
              <div
                class="flex items-center p-4 sm:p-3 md:p-4 lg:p-4 rounded-t-lg shadow-md bg-gradient-to-r from-purple-700 to-blue-900"
              >
                <Icon
                  name="material-symbols:dns"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg sm:text-base md:text-base lg:text-lg font-bold text-white ml-3 sm:ml-2 md:ml-3">{{ backEndSkills.cardTitle }}</h3>
              </div>
            </div>
            <div class="p-4 sm:p-3 md:p-3 lg:p-4 space-y-3 sm:space-y-2 md:space-y-2 lg:space-y-3">
              <div
                v-for="(skill, index) in backEndSkills.items"
                :key="index"
                class="flex items-center p-3 sm:p-2 md:p-2 lg:p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:dark:bg-gray-600 hover:border-gray-300 hover:dark:border-gray-500 hover:transform hover:translate-x-1 hover:shadow-md group"
              >
                <div class="flex items-center justify-center w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-3 sm:mr-2 md:mr-2 lg:mr-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-gray-900 dark:text-white flex-1 break-words">{{ skill.name }}</div>
              </div>
            </div>
          </div>

          <!-- Others Block -->
          <div class="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/30">
            <div class="relative">
              <div
                class="flex items-center p-4 sm:p-3 md:p-4 lg:p-4 rounded-t-lg shadow-md bg-gradient-to-r from-gray-500 to-gray-700"
              >
                <Icon
                  name="material-symbols:settings"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg sm:text-base md:text-base lg:text-lg font-bold text-white ml-3 sm:ml-2 md:ml-3">{{ othersSkills.cardTitle }}</h3>
              </div>
            </div>
            <div class="p-4 sm:p-3 md:p-3 lg:p-4 space-y-3 sm:space-y-2 md:space-y-2 lg:space-y-3">
              <div
                v-for="(skill, index) in othersSkills.items"
                :key="index"
                class="flex items-center p-3 sm:p-2 md:p-2 lg:p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:dark:bg-gray-600 hover:border-gray-300 hover:dark:border-gray-500 hover:transform hover:translate-x-1 hover:shadow-md group"
              >
                <div class="flex items-center justify-center w-10 h-10 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-3 sm:mr-2 md:mr-2 lg:mr-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="text-sm sm:text-xs md:text-xs lg:text-sm font-medium text-gray-900 dark:text-white flex-1 break-words">{{ skill.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  title: "技能",
  href: "#skills",
};
</script>

<script setup>
const frontEnds = {
  cardTitle: "前端",
  items: [
    {
      name: "Vue.js(2 & 3)",
      icon: "material-icon-theme:vue",
    },
    {
      name: "Nuxt.js(2 & 3)",
      icon: "material-icon-theme:nuxt",
    },
    {
      name: "JavaScript",
      icon: "material-icon-theme:javascript",
    },
    {
      name: "JavaScript XML(JSX)",
      icon: "vscode-icons:file-type-xml",
    },
    {
      name: "Tailwind CSS(學習中)",
      icon: "material-icon-theme:tailwindcss",
    },
  ],
};
const backEndSkills = {
  cardTitle: "後端",
  items: [
    {
      name: "C#",
      icon: "devicon:csharp",
    },
    {
      name: ".Net Core(5 ~ 8)",
      icon: "devicon:entityframeworkcore",
    },
    {
      name: ".Net Core Migrations",
      icon: "eos-icons:database-migration-outlined",
    },
    {
      name: "RESTful API(Swagger)",
      icon: "material-icon-theme:swagger",
    },
    {
      name: "JWT Authentication",
      icon: "logos:jwt-icon",
    },
    {
      name: "Microsoft SQL Server",
      icon: "devicon:sqldeveloper",
    },
  ],
};
const othersSkills = {
  cardTitle: "其它",
  items: [
    {
      name: "Git",
      icon: "devicon:git",
    },
    {
      name: "Azure CI/CD",
      icon: "material-icon-theme:azure-pipelines",
    },
    {
      name: "Keycloak",
      icon: "simple-icons:keycloak",
    },
    {
      name: "Power Automate/Apps",
      icon: "arcticons:microsoft-power-automate",
    },
  ],
};
</script>

