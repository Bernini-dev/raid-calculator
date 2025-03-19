<script setup lang="ts">
import { ref, type Ref } from "vue";
import RaidForm from "@/components/forms/RaidForm.vue";
import ResultTable from "@/components/ResultTable.vue";
import type { RAIDResult } from "@/tools/calculator";
import ErrorDialog from "@/components/dialogs/ErrorDialog.vue";

const result: Ref<RAIDResult> = ref({
  totalSize: 0,
  speedGain: 0,
  faultTolerance: "",
  error: "",
});

const updateResult = (newResult: RAIDResult) => {
  result.value = newResult;
};
</script>

<template>
  <RaidForm @updateResult="updateResult" />
  <div
    class="flex flex-wrap justify-center content-center gap-4 p-4 text-white"
  >
    <ResultTable
      :totalSize="result.totalSize"
      :speedGain="result.speedGain"
      :faultTolerance="result.faultTolerance"
    />
  </div>
  <ErrorDialog v-if="result.error !== ''" :error="result.error" />
</template>
