<template>
    <label :for="name" class="label">{{ value }}</label>
</template>

<script setup>
const { name, value } = defineProps(['name', 'value'])
</script>

<style scoped>
.label {
    @apply block mb-2 text-sm font-normal text-gray-700 p-2;
}
</style>