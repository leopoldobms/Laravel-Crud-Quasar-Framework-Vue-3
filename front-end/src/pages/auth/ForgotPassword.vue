<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="authStore.handleForgotPassword(form.email)">
      <p class="col-12 text-h6 text-center q-mt-xl text-indigo-8"> RECUPERAR SENHA </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input
          square
          v-model="form.email"
          class="q-pb-md q-pt-none col-12"
          label="E-mail"
          :rules="[
            val => !!val || 'campo obrigatório',
            isValidEmail
          ]"
        />
        <q-btn
          type="submit"
          label="Recuperar"
          class="full-width q-mt-lg text-white bg-indigo-8"
          size="md"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>

import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
  name: 'forgotPasswordPages',

  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Email inválido.'
    }
  },

  setup () {
    const authStore = useAuthStore()
    const router = useRouter()
    const form = ref([])

    onMounted(async () => {
    })
    return {
      form,
      router,
      authStore
    }
  }

})
</script>
