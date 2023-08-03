<template>
  <q-page padding>
    <div class="row justify-center q-gutter-y-sm">
      <p class="col-12 text-h6 text-center q-mt-xl text-indigo-8"> RECUPERAR SENHA </p>
      <p class="col-md-12 q-mt-md text-center">Acesse seu email para recupar senha</p>

      <q-btn
          type="submit"
          label="Login"
          class="q-mt-lg text-white text-center bg-indigo-8"
          size="md"
          to="/"
        />

    </div>
  </q-page>
</template>

<script>

import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'inforRecoverPasswordPages',

  methods: {
  },

  setup () {
    onMounted(async () => {
    })
    return {
    }
  }

})
</script>
