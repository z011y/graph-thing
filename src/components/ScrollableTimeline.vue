<template>
  <div class="flex flex-col w-2/3 border-2 border-gray-900 rounded-lg">
    <div class="flex">
      <div class="min-w-[128px] border-r-2 border-gray-900">
        <div class="h-8 border-b-2 border-gray-900"></div>
        <div
          class="h-24 flex justify-center items-center border-b-2 border-b-gray-900"
        >
          Awardco
        </div>
        <div
          class="h-24 flex justify-center items-center border-b-2 border-b-gray-900"
        >
          doTERRA
        </div>
        <div
          class="h-24 flex justify-center items-center border-b-2 border-b-gray-900"
        >
          Vivint
        </div>
      </div>
      <!-- scrollable content -->
      <div class="overflow-x-scroll w-full relative">
        <div class="absolute">
          <div class="flex">
            <div
              v-for="month in months"
              class="min-w-[6rem] h-8 pl-2 flex items-center border-r border-b border-gray-900"
            >
              {{ month }}
            </div>
          </div>
          <!-- absolutely positioned events -->
          <div
            class="h-12 w-[58.33%] absolute top-8 left-[41.66%] bg-blue rounded-md p-2"
          >
            Software Engineering Technical Lead
          </div>
          <div
            class="h-12 w-[41.66%] absolute top-20 left-[0%] bg-blue rounded-md p-2"
          >
            <div class="w-full">
              <p class="left-0 sticky">Software Test Engineer</p>
            </div>
          </div>
          <div class="h-24 w-full relative"></div>
          <div class="h-24"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

interface DateRange {
  title: string;
  startDate: Date;
  endDate: Date;
}

interface Period {
  startDate: Date;
  endDate: Date;
}

const dataPoints: DateRange[] = [
  {
    title: "Software Engineering Technical Lead",
    startDate: new Date("Jun 2022"),
    endDate: new Date(),
  },
  {
    title: "Software Test Engineer",
    startDate: new Date("Jul 2021"),
    endDate: new Date("Jun 2022"),
  },
];

export default defineComponent({
  name: "ScrollableTimeline",
  setup() {
    const period = computed<Period>(() => {
      let startDate = new Date();
      let endDate = new Date();

      dataPoints.forEach((dataPoint) => {
        if (dataPoint.startDate < startDate) {
          startDate = dataPoint.startDate;
        }

        if (dataPoint.endDate > endDate) {
          endDate = dataPoint.endDate;
        }
      });

      return {
        startDate: startDate,
        endDate: endDate,
      };
    });

    const months = computed<string[]>(() => {
      let monthsArray: string[] = [
        period.value.startDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        }),
      ];

      const addMonth = (date: Date) => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
        monthsArray.push(
          newDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })
        );

        if (newDate < period.value.endDate) {
          addMonth(newDate);
        }
      };

      addMonth(period.value.startDate);

      return monthsArray;
    });

    return {
      period,
      months,
    };
  },
});
</script>
