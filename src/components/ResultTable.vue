<script lang="ts" setup>
import { defineProps } from "vue";

const { totalSize, speedGain, faultTolerance } = defineProps([
  "totalSize",
  "speedGain",
  "faultTolerance",
]);
</script>

<template>
  <table class="table-auto text-white">
    <tbody>
      <tr>
        <th class="p-2">Total Size</th>
        <td class="p-2">{{ totalSize }}</td>
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
