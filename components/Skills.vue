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
          <div class="skill-block">
            <div class="skill-block-header">
              <div
                class="skill-block-title bg-gradient-to-r from-green-500 to-emerald-600"
              >
                <Icon
                  name="material-symbols:web"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg font-bold text-white ml-3">{{ frontEnds.cardTitle }}</h3>
              </div>
            </div>
            <div class="skill-list">
              <div
                v-for="(skill, index) in frontEnds.items"
                :key="index"
                class="skill-item"
              >
                <div class="skill-icon">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="skill-name">{{ skill.name }}</div>
              </div>
            </div>
          </div>

          <!-- Backend Block -->
          <div class="skill-block">
            <div class="skill-block-header">
              <div
                class="skill-block-title bg-gradient-to-r from-purple-700 to-blue-900"
              >
                <Icon
                  name="material-symbols:dns"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg font-bold text-white ml-3">{{ backEndSkills.cardTitle }}</h3>
              </div>
            </div>
            <div class="skill-list">
              <div
                v-for="(skill, index) in backEndSkills.items"
                :key="index"
                class="skill-item"
              >
                <div class="skill-icon">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="skill-name">{{ skill.name }}</div>
              </div>
            </div>
          </div>

          <!-- Others Block -->
          <div class="skill-block">
            <div class="skill-block-header">
              <div
                class="skill-block-title bg-gradient-to-r from-gray-500 to-gray-700"
              >
                <Icon
                  name="material-symbols:settings"
                  size="24"
                  class="text-white"
                />
                <h3 class="text-lg font-bold text-white ml-3">{{ othersSkills.cardTitle }}</h3>
              </div>
            </div>
            <div class="skill-list">
              <div
                v-for="(skill, index) in othersSkills.items"
                :key="index"
                class="skill-item"
              >
                <div class="skill-icon">
                  <Icon :name="skill.icon" size="20" />
                </div>
                <div class="skill-name">{{ skill.name }}</div>
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
      name: ".Net Core",
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

<style scoped>
.skill-block {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-block:hover {
  @apply transform -translate-y-1;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.skill-block-header {
  @apply relative;
}

.skill-block-title {
  @apply flex items-center p-4 rounded-t-lg;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-list {
  @apply p-4 space-y-3;
}

.skill-item {
  @apply flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600;
  transition: all 0.3s ease;
}

.skill-item:hover {
  @apply bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 transform translate-x-1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  @apply flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm mr-3;
  transition: transform 0.3s ease;
}

.skill-item:hover .skill-icon {
  @apply transform scale-110;
}

.skill-name {
  @apply text-sm font-medium text-gray-900 dark:text-white flex-1;
  word-wrap: break-word;
}

/* Dark mode enhancements */
.dark .skill-block {
  @apply border border-gray-700;
}

.dark .skill-block:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .skill-block-title {
    @apply p-3;
  }

  .skill-block-title h3 {
    @apply text-base;
  }

  .skill-list {
    @apply p-3 space-y-2;
  }

  .skill-item {
    @apply p-2;
  }

  .skill-icon {
    @apply w-8 h-8 mr-2;
  }

  .skill-name {
    @apply text-xs;
  }
}

@media (max-width: 640px) {
  .skill-block-title {
    @apply p-2;
  }

  .skill-block-title h3 {
    @apply text-sm ml-2;
  }

  .skill-list {
    @apply p-2 space-y-1;
  }

  .skill-item {
    @apply p-2;
  }

  .skill-icon {
    @apply w-6 h-6 mr-2;
  }

  .skill-name {
    @apply text-xs;
  }
}
</style>
