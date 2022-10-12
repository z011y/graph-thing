<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

const store = useThemeStore();
</script>

<template>
  <div @click="store.toggleTheme" class="text-black dark:text-white">
    <SunIcon
      v-if="store.theme === 'light'"
      data-test-id="sun-icon"
      class="w-4"
    />
    <MoonIcon
      v-if="store.theme === 'dark'"
      data-test-id="moon-icon"
      class="w-4"
    />
  </div>
</template>
