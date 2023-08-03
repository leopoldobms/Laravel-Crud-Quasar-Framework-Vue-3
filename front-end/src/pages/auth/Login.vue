<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="authStore.handleLogin(form)">
      <p class="col-12 text-h6 text-center q-mt-xl text-indigo-8"> ENTRAR </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input
          square
          v-model="form.email"
          class="col-12 q-pb-md q-pt-none"
          label="E-mail"
          :rules="[
            val => !!val || 'campo obrigatório',
            validate.isValidEmail
          ]"
        />
        <q-input
          square
          v-model="form.password"
          class="col-12"
          type="password"
          label="Senha"
          :rules="[
          val => !!val || '* campo obrigatório',
          val => val.length > 8 || 'Senha deve conter no mínimo 8 caracteres.',
        ]"
        />
        <q-btn
          type="submit"
          label="Login"
          class="full-width text-center q-mt-lg text-white bg-indigo-8"
          size="md"
        />
        <div class="col-12 text-center">
          <q-btn
            flat
            no-caps
            class="q-ml-none"
            color="indigo-6"
            label="Esqueceu a senha"
            size="md"
            to="/forgot-password"
          />
          <q-btn
            flat
            no-caps
            color="indigo-6"
            label="Cadastre-se"
            size="md"
            to="/register"
          />
      </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>

import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useValidate } from 'src/stores/validate'

export default defineComponent({
  name: 'loginPages',

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
    const validate = useValidate()

    onMounted(async () => {
    })
    return {
      form,
      router,
      authStore,
      validate
    }
  }

})
</script>
<style>
.q-btn .q-focus-helper{
  display:none;
}
</style>
