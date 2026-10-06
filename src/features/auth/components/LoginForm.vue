<script setup>
import { reactive } from 'vue'
import { DEFAULT_LOGIN } from '../../../core/constants/auth'

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['submit'])

const form = reactive({
  email: DEFAULT_LOGIN.email,
  password: DEFAULT_LOGIN.password,
})

function handleSubmit() {
  emit('submit', { ...form })
}
</script>

<template>
  <form class="form-stack" @submit.prevent="handleSubmit">
    <div class="form-field">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" autocomplete="email" />
    </div>

    <div class="form-field">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        autocomplete="current-password"
      />
    </div>

    <p v-if="error" class="form-error">{{ error }}</p>

    <button class="button-primary" type="submit" :disabled="isLoading">
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </button>
  </form>

  <p class="default-login">
    Default: {{ DEFAULT_LOGIN.email }} / {{ DEFAULT_LOGIN.password }}
  </p>
</template>
