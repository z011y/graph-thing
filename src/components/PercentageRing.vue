<template>
  <div class="relative flex justify-center items-center">
    <svg
      class="absolute top-0"
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        class="text-xs uppercase tracking-widest font-mono fill-black dark:fill-white"
      >
        {{ text }}
      </text>
      <circle
        :cx="radius"
        :cy="radius"
        :stroke-width="strokeWidth"
        :r="radius - strokeWidth"
        stroke-linecap="round"
        :stroke="
          store.theme === 'dark' ? 'rgb(44, 44, 46)' : 'rgb(229, 229, 234)'
        "
        fill="none"
      />
      <circle
        :cx="radius"
        :cy="radius"
        :stroke-width="strokeWidth"
        :r="radius - strokeWidth"
        pathLength="100"
        :stroke-dasharray="`${Math.floor(percentage * 100)} 100`"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke="#0A84FF"
        fill="none"
        :transform="`rotate(-90, ${radius}, ${radius})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :values="`0 100;${Math.floor(percentage * 100)} 100`"
          keyTimes="0;1"
          keySplines="0.5 0 0.5 1"
          dur="1"
          calcMode="spline"
        />
      </circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { useThemeStore } from "@/stores/theme";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "PercentageRing",
  props: {
    text: {
      required: false,
      type: String,
      default: "",
    },
    percentage: {
      required: true,
      type: Number,
    },
    size: {
      required: true,
      type: Number,
    },
    strokeWidth: {
      required: true,
      type: Number,
    },
  },
  setup(props) {
    const store = useThemeStore();
    const radius = computed(() => props.size / 2);

    return {
      store,
      radius,
    };
  },
});
</script>
