import { DEFAULT_LOGIN } from '../../../core/constants/auth'

export async function login(credentials) {
  const isDefaultLogin =
    credentials.email === DEFAULT_LOGIN.email &&
    credentials.password === DEFAULT_LOGIN.password

  if (!isDefaultLogin) {
    throw new Error('Email atau password tidak sah.')
  }

  return {
    token: 'default-login-token',
    user: {
      id: 1,
      name: 'Default Admin',
      email: DEFAULT_LOGIN.email,
    },
  }
}
