import { defineStore } from 'pinia'
import { Dialog } from 'quasar'
export const alerts = defineStore('alerts', {
  actions: {
    confirm (titleDialog, msg, method, data) {
      Dialog.create({
        title: titleDialog,
        message: msg,
        cancel: true,
        persistent: true
      }).onOk(() => {
        method(data)
      }).onCancel(() => {
      })
    },
    infor (titleDialog, msg) {
      Dialog.create({
        title: titleDialog,
        message: msg,
        persistent: true
      })
    }
  }
})
