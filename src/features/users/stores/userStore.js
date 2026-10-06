import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUsers } from '../services/userService'

export const useUserStore = defineStore('users', () => {
  const users = ref([])

  async function fetchUsers() {
    users.value = await getUsers()
  }

  return {
    users,
    fetchUsers,
  }
})
