<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="authStore.handleResetPassword(form)">
      <p class="col-12 text-h6 text-center q-mt-xl text-indigo-8"> ALTERAR SENHA </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input
          square
          v-model="form.password"
          class="col-12"
          type="password"
          label="Nova senha"
          :rules="[
          val => !!val || '* campo obrigatório',
          val => val.length > 8 || 'Senha deve conter no mínimo 8 caracteres.',
        ]"
        />
        <q-input
          square
          v-model="form.password_confirmation"
          class="col-12"
          type="password"
          label="Confirmar Senha"
          :rules="[
            val => !!val || '* campo obrigatório',
            val => val.length > 8 || 'Senha deve conter no mínimo 8 caracteres.',
            val => val === form.password || 'A senha não é igual a digitada acima.',
          ]"
        />
        <q-btn
          type="submit"
          label="Alterar"
          class="full-width q-mt-lg text-white bg-indigo-8"
          size="md"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>

import { defineComponent, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
    const route = useRoute()
    const form = ref({
      password: '',
      password_confirmation: '',
      email: route.query.email,
      token: route.params.token
    })

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
