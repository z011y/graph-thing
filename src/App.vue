<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import PercentageRing from "@/components/PercentageRing.vue";
import ScrollableTimeline from "./components/ScrollableTimeline.vue";
import VerticalTimeline from "./components/VerticalTimeline.vue";
</script>

<template>
  <Header />
  <div class="pt-32 pb-32">
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
    <section class="flex flex-col justify-center items-center">
      <div class="flex flex-col items-center gap-y-8 mt-16">
        <p class="text-gray-500">Hi, my name is</p>
        <h1 class="font-black text-7xl">Cameron Zollinger</h1>
        <p class="text-gray-500">I'm a Tech Lead at Awardco</p>
      </div>
      <div class="flex justify-between mt-24 w-2/3 h-64">
        <PercentageRing
          text="Software"
          :size="192"
          :percentage="0.9"
          :strokeWidth="16"
        />
        <PercentageRing
          text="Automation"
          :size="192"
          :percentage="0.9"
          :strokeWidth="16"
        />
        <PercentageRing
          text="Data"
          :size="192"
          :percentage="0.7"
          :strokeWidth="16"
        />
        <PercentageRing
          text="Design"
          :size="192"
          :percentage="0.5"
          :strokeWidth="16"
        />
      </div>
    </section>
    <section class="flex justify-center items-center flex-col gap-y-24">
      <ScrollableTimeline />

      <VerticalTimeline />
    </section>
  </div>

  <RouterView />
</template>
