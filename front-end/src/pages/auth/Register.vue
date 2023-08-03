<template>
  <q-page q-pt-none>
    <form class="row justify-center" @submit.prevent="authStore.handleRegister(form)">
      <p class="col-12 text-h5 text-center q-mt-xl text-indigo-8">CRIAR NOVA CONTA</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
        <q-input square v-model="form.name" class="q-pt-none col-12" label="Nome" />
        <q-input
          square
          v-model="form.email"
          class="col-12"
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
        <q-input
          square
          v-model="form.password_confirmation"
          type="password"
          class="col-12"
          label="Confirmar Senha"
          :rules="[
            val => !!val || '* campo obrigatório',
            val => val.length > 8 || 'Senha deve conter no mínimo 8 caracteres.',
            val => val === form.password || 'A senha não é igual a digitada acima.',
          ]"
        />
        <q-btn type="submit" unelevated class="full-width q-mt-md bg-indigo-8 text-white" label="Criar" />
        <q-btn
          type="submit"
          flat
          outline
          color="indigo-8"
          label="Entrar"
          class="full-width q-mt-md"
          size="md"
          to="/login"
        />
      </div>
    </form>
  </q-page>
</template>

<script>

import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'
import { useValidate } from 'src/stores/validate'

export default defineComponent({
  name: 'registerPages',

  methods: {
  },

  setup () {
    const authStore = useAuthStore()
    const router = useRouter()
    const form = ref([])
    const validate = useValidate()
    return {
      form,
      router,
      authStore,
      validate
    }
  }

})
</script>
