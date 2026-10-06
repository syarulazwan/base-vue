<script setup>
import EmptyState from '../../../shared/components/EmptyState.vue'
import { useAuthStore } from '../../auth/stores/authStore'
import { usePageTitle } from '../../../shared/composables/usePageTitle'

const authStore = useAuthStore()

usePageTitle('Users')
</script>

<template>
  <section class="page-header">
    <h1>Users</h1>
    <p>Selamat datang, {{ authStore.user?.name }}.</p>
  </section>

  <section class="page-panel">
    <EmptyState
      title="Users feature"
      description="Module users sudah disediakan sebagai contoh feature."
    />
  </section>
</template>
