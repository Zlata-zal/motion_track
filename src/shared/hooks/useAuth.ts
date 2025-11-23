import { ref, computed } from 'vue'

const isAuthState = ref(false)

export function useAuth() {
  const isAuth = computed(() => isAuthState.value)

  const login = () => {
    isAuthState.value = true
  }

  const logout = () => {
    isAuthState.value = false
  }

  return {
    isAuth,
    login,
    logout,
  }
}
