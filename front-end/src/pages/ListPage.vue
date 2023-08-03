<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-table
        title="Despesas"
        :rows="rows"
        :columns="columns"
        row-key="actions"
        class="col-12"
      >
      <q-dialog></q-dialog>
      <template v-slot:top>
        <span class="text-h6 text-indigo-8"> Despesas</span>
        <q-space />
        <q-btn label="+ NOVO" class="q-mt-md" color="indigo-8" :to="{ name: 'novo' }"/>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-x-sm">
          <q-btn icon="edit" color="indigo-8" dense size="md" flat @click="edit(props.row.codigo)">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn icon="delete" color="red" dense size="md" flat @click="despesasList.deletar(props.row)">
            <q-tooltip>Deletar</q-tooltip>
          </q-btn>
        </q-td>
      </template>
      </q-table>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDespesas } from 'src/stores/despesas'

const columns = [
  { name: 'description', align: 'left', label: 'Descrição', field: 'description', sortable: true },
  { name: 'value', align: 'left', label: 'Valor', field: 'value', sortable: true },
  { name: 'data', align: 'left', label: 'Data', field: 'data', sortable: true },
  { name: 'actions', align: 'right', label: 'Ações', field: 'actions' }
]

export default defineComponent({
  name: 'ListPage',
  setup () {
    const router = useRouter()
    const despesasList = useDespesas()
    const rows = ref([])
    const listRows = async () => {
      rows.value = await despesasList.list()
    }
    const edit = (id) => {
      router.push({ name: 'edit', params: { id } })
    }
    onMounted(() => {
      listRows()
    })

    return {
      columns,
      despesasList,
      listRows,
      edit,
      rows
    }
  }
})
</script>
