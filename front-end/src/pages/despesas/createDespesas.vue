<template>
    <q-page padding>
      <q-btn label="Lista" class="q-mt-xl q-mr-xl float-right" color="indigo-8" :to="{ name: 'list' }"/>
      <q-form class="row justify-center" @submit.prevent="useDespesasCreate.createDespesa(form)">
        <p class="col-12 text-h6 text-center q-mt-xl text-indigo-8"> CADASTRAR DESPESA </p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm">
          <q-input
            square
            v-model="form.value"
            label="Valor"
            mask="#.##"
            prefix="R$"
            unmasked-value
            reverse-fill-mask
            input-class="text-right"
            :rules="[
              val => !!val || '* campo obrigatório'
            ]"
          />
          <q-input
            square
            v-model="form.data"
            class="col-12"
            type="date"
            label="data"
            mask="##-##-####"
            :rules="[
              val => !!val || '* campo obrigatório',
              validate.isValidDate
            ]"
          />
          <q-input
            label="Descrição"
            v-model="form.description"
            square
            autogrow
            class="q-mt-none"
            :rules="[
              val => !!val || '* campo obrigatório'
            ]"
          />
          <q-btn
            type="submit"
            label="Cadastrar"
            class="full-width q-mt-lg text-white bg-indigo-8"
            size="md"
          />
        </div>
      </q-form>
    </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useDespesas } from '../../stores/despesas'
import { useValidate } from 'src/stores/validate'

export default defineComponent({
  name: 'createDespesas',
  setup () {
    const validate = useValidate()
    const form = ref([])
    const useDespesasCreate = useDespesas()
    onMounted(async () => {
    })
    return {
      form,
      useDespesasCreate,
      validate
    }
  }
})

</script>
