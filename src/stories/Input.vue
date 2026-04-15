<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <input type="text" :disabled="disabled">
</template>

<style>
.input {
  background: red;
}
</style>
