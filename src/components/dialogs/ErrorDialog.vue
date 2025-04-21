<script lang="ts" setup>
const { error } = defineProps(["error"]);
</script>

<template>
  <div class="flex justify-center content-center">
    <div class="bg-red-500/65 text-white p-6 rounded-xl font-bold w-xl">
      {{ error }}
    </div>
  </div>
</template>
