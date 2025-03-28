<script lang="ts" setup>
import { computed, defineProps } from "vue";

const { totalSize, faultTolerance } = defineProps([
  "totalSize",
  "speedGain",
  "faultTolerance",
]);

const totalRaidSize = computed(() => {
  let total = totalSize;
  let unit = "GB";
  if (total > 1024) {
    total = totalSize / 1024;
    unit = "TB";

    if (total > 1024) {
      total = totalSize / 1024;
      unit = "PB";

      if (total > 1024) {
        total = totalSize / 1024;
        unit = "EB";
      }
    }
  }
  return `${total} ${unit}`;
});
</script>

<template>
  <table class="table-auto text-white">
    <tbody>
      <tr>
        <th class="p-2">Total Size</th>
        <td class="p-2">{{ totalRaidSize }}</td>
      </tr>
      <!--<tr>
        <th class="p-2">Speed Gain</th>
        <td class="p-2">{{ speedGain }}</td>
      </tr>-->
      <tr>
        <th class="p-2">Fault Tolerance</th>
        <td class="p-2">{{ faultTolerance }}</td>
      </tr>
    </tbody>
  </table>
</template>
