import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ withCredentials: true, baseURL: import.meta.env.VITE_API_BASE_URL })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file
  axios.defaults.withCredentials = true
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
