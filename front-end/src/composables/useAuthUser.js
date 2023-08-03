import { ref } from 'vue'
import { api } from 'src/boot/axios'

const user = ref(null)

export default function useAuthUser () {
  const login = async ({ email, password }) => {}

  const loginWithSocialProvider = async (provider) => {}

  const logout = async () => {}

  const isLoggedIn = () => {
    return !!user.value
  }

  const register = async ({ email, passoword }) => {}

  const update = async (data) => {}

  const sendPasswordRestEmail = async (data) => {}

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail
  }
}
