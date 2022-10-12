<template>
  <header
    class="w-full fixed top-0 border-b border-gray-200 dark:border-gray-900 backdrop-saturate-150 backdrop-blur-lg bg-white/50 dark:bg-black/50 z-50"
  >
    <div class="w-full h-16 flex justify-between items-center px-10">
      <div class="flex gap-4">
        <img src="@/assets/icon.svg" alt="logo" width="24" height="24" />
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
    <nav
      class="w-full h-8 bg-gray-100 dark:bg-gray-1100 flex justify-center items-center gap-16 border-t border-gray-200 dark:border-gray-900"
    >
      <a class="text-sm font-mono uppercase tracking-widest" href="/">about</a>
      <a class="text-sm font-mono uppercase tracking-widest" href="/">career</a>
      <a class="text-sm font-mono uppercase tracking-widest" href="/"
        >projects</a
      >
      <a class="text-sm font-mono uppercase tracking-widest" href="/">skills</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ThemeToggle from "@/components/ThemeToggle.vue";

export default defineComponent({
  name: "Header",
  components: {
    ThemeToggle,
  },
});
</script>
