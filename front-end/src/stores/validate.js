import { defineStore } from 'pinia'
import { date } from 'quasar'
export const useValidate = defineStore('validate', {
  actions: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Email inválido.'
    },
    isValidDate (val) {
      let dataAtual = Date.now()
      dataAtual = date.formatDate(dataAtual, 'YYYY-MM-DD')
      return dataAtual > val || 'Não é permitido data futura.'
    }
  }
})
