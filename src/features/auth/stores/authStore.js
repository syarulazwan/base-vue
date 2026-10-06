import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { login as loginService } from '../services/authService'
import {
  readStorage,
  removeStorage,
  writeStorage,
} from '../../../core/utils/storage'

const AUTH_STORAGE_KEY = 'syarul-vue-auth'

export const useAuthStore = defineStore('auth', () => {
  const savedAuth = readStorage(AUTH_STORAGE_KEY, {})
  const token = ref(savedAuth.token || '')
  const user = ref(savedAuth.user || null)
  const isLoading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(credentials) {
    isLoading.value = true
    error.value = ''

    try {
      const response = await loginService(credentials)

      token.value = response.token
      user.value = response.user
      writeStorage(AUTH_STORAGE_KEY, response)

      return response
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    token.value = ''
    user.value = null
    error.value = ''
    removeStorage(AUTH_STORAGE_KEY)
  }

  return {
    token,
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
  }
})
