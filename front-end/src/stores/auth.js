import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { useNotify } from './Notify'
import { alerts } from './alerts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    id: null,
    name: null,
    email: null,
    authErrors: [],
    authStatus: null
  }),
  getters: {
    getUserId: (state) => state.id,
    getUserName: (state) => state.name,
    getUserEmail: (state) => state.email,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus
  },
  actions: {
    async getToken () {
      await api.get('/sanctum/csrf-cookie')
    },
    async getUser () {
      await this.getToken()
      const data = await api.get('/api/user')
      return data
    },
    async handleLogin (data) {
      this.authErrors = []
      await this.getToken()
      const notify = useNotify()
      try {
        await api.post('/login', {
          email: data.email,
          password: data.password
        })
        // localStorage.setItem('xtrc', 'teste123')
        const user = await this.getUser()
        this.setUser(user.data)
        notify.notify('Login realizado.', 'positive')
        this.router.push({ name: 'list' })
      } catch (error) {
        Notify.create({
          type: 'negative',
          position: 'top',
          textColor: 'white',
          timeout: 2500,
          message: 'Usuário ou senha inválida.'
        })
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleRegister (data) {
      this.authErrors = []
      await this.getToken()
      try {
        await api.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        })
        const user = await this.getUser()
        this.setUser(user.data)

        this.router.push({ path: 'list' })
      } catch (error) {
        if (error.response.status === 422) {
          const dialog = alerts()
          if (error.response.data.message === 'The email has already been taken.') {
            dialog.infor('Cadastro', 'E-mail já existe, por favor realizar login')
          } else {
            dialog.infor('Cadastro', error.response.data.message)
          }
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleLogout () {
      await api.post('/logout')
      this.authUser = null
      // localStorage.removeItem('xtrc')
      this.clearUser()
      this.router.replace({ name: 'login' })
    },
    async handleForgotPassword (emailRecoverPassword) {
      this.authErrors = []
      this.getToken()
      try {
        const response = api.post('/forgot-password', {
          email: emailRecoverPassword
        })
        this.authStatus = response.data.status
        this.router.push({ name: 'infoForgotPassword' })
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleResetPassword (resetData) {
      this.authErrors = []
      try {
        const response = await api.post('/reset-password', resetData)
        this.authStatus = response.data.status
        const dialog = alerts()
        dialog.infor('Alterar Senha', 'Senha alterada.')
        this.router.push({ name: 'login' })
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    setUser (data) {
      if (data.id) this.id = data.id
      if (data.name) this.name = data.name
      if (data.email) this.email = data.email
    },
    clearUser () {
      this.id = null
      this.name = null
      this.email = null
    },
    isLoggedIn () {
      return !!this.getUserId
    }
  },
  persist: true
})
