<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../features/auth/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <div class="app-layout">
    <header class="app-header">
      <div class="brand">Syarul Vue</div>

      <nav class="main-nav" aria-label="Main navigation">
        <RouterLink :to="{ name: 'users' }">Users</RouterLink>
        <button class="button-secondary" type="button" @click="handleLogout">
          Logout
        </button>
      </nav>
    </header>

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>
