<script setup>
import { useRouter } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

async function handleLogin(credentials) {
  await authStore.login(credentials)
  router.push({ name: 'users' })
}
</script>

<template>
  <section class="auth-card">
    <h1>Login</h1>
    <p>Masuk guna akaun default dahulu.</p>

    <LoginForm
      :error="authStore.error"
      :is-loading="authStore.isLoading"
      @submit="handleLogin"
    />
  </section>
</template>
