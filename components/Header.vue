<template>
  <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-primary dark:text-blue-400">Your Name</a>
      <div class="flex items-center space-x-6">
        <div class="hidden md:flex space-x-6">
          <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">About</a>
          <a href="#experience" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">Experience</a>
          <a href="#skills" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">Skills</a>
          <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">Projects</a>
          <a href="#education" class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">Education</a>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  </header>
</template>