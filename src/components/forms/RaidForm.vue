<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { calculateRAID } from "@/tools/calculator";
import type { RAIDResult } from "../../tools/calculator";

const RAIDTYPES = [
  "RAID 0 (Stripe Set)",
  "RAID 1 (Mirror)",
  "RAID 1E",
  "RAID 5 (Parity)",
  "RAID 50 (5+0)",
  "RAID 5E (Parity+Spare)",
  "RAID 5EE (Parity+Spare)",
  "RAID 10 (Mirror+Spare)",
  "RAID 6 (Double Parity)",
  "RAID 60 (6+0)",
];

const $emit = defineEmits(["updateResult"]);

const raidType = ref("");
const diskCount = ref(0);
const diskSize = ref(0);
const result: Ref<RAIDResult> = ref({
  raidType: "",
  totalSize: 0,
  speedGain: 0,
  faultTolerance: "",
  error: "",
});

const calculateRaid = () => {
  result.value = calculateRAID(raidType.value, diskSize.value, diskCount.value);
  $emit("updateResult", result.value);
};
</script>

<template>
  <form
    action=""
    class="flex flex-col flex-wrap justify-center content-center gap-4 p-4"
    @submit.prevent="calculateRaid"
  >
    <select
      name=""
      id="raidType"
      class="p-3 text-black dark:text-white rounded-lg font-bold bg-[rgba(177,177,177,0.1)]"
      required
      v-model="raidType"
    >
      <option value="" disabled selected>Select RAID Type</option>
      <option v-for="raid in RAIDTYPES" :key="raid" :value="raid">
        {{ raid }}
      </option>
    </select>
    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col gap-2">
        <label for="diskCount" class="text-white font-bold">Disk Count</label>
        <input
          type="number"
          name="diskCount"
          id="diskCount"
          class="p-3 text-white rounded-lg font-bold border-0 bg-[rgba(177,177,177,0.1)]"
          placeholder="Disk Count"
          required
          v-model="diskCount"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="diskSize" class="text-white font-bold"
          >Disk Size (Gb)</label
        >
        <input
          type="number"
          name="diskSize"
          id="diskSize"
          class="p-3 text-white rounded-lg font-bold border-0 bg-[rgba(177,177,177,0.1)]"
          placeholder="Disk Size"
          required
          v-model="diskSize"
        />
      </div>
    </div>
    <button
      type="submit"
      class="p-3 bg-bernini text-white rounded-lg font-bold"
    >
      Calculate Raid
    </button>
  </form>
</template>
