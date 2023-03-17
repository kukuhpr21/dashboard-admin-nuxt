<template>
    <input :type="type" :id="id" :name="name" class="field">
</template>

<script setup>
const { type, id, name } = defineProps({
    type: {default: "text"},
    id: {default: "id"},
    name: {default: "name"},
})
</script>

<style scoped>
.field {
    @apply bg-white p-4 text-gray-700 rounded-lg w-full shadow-sm focus:outline-none block;
}
</style>