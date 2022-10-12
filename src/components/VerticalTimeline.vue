<template>
  <div>
    <svg>
      <circle r="12" stroke="blue" stroke-width="3" />
      <line x1="0" y1="0" x2="0" y2="24" stroke="blue" stroke-width="3" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent(() => {
  name: "VerticalTimeline";
});
</script>
