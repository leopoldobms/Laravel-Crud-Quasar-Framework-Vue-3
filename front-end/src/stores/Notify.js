import { defineStore } from 'pinia'
import { Notify } from 'quasar'

export const useNotify = defineStore('notify', {
  actions: {
    notify (messageNotify, typeNotify = 'positive', positionNotify = 'top', time = 3500) {
      Notify.create({
        type: typeNotify,
        position: positionNotify,
        textColor: 'white',
        timeout: time,
        message: messageNotify
      })
    }
  }
})
