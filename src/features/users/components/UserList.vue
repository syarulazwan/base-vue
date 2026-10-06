<script setup>
defineProps({
  users: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>
