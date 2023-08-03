import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useNotify } from './Notify'
import { alerts } from './alerts'
import { useAuthStore } from './auth'
const notify = useNotify()

export const useDespesas = defineStore('despesas', {
  actions: {
    // Criar item
    async createDespesa (form) {
      const desc = form.description
      const dat = form.data
      const val = form.value
      try {
        const useAuth = useAuthStore()
        await api.post('api/despesas/', {
          description: desc,
          data: dat,
          value: val,
          user_id: useAuth.getUserId
        })
        notify.notify('Despesa salva com sucesso.', 'positive')
        // envio de email
        api.post('api/despesa-email/', {
          email: useAuth.getUserEmail,
          description: desc
        })
        // redireciona para pagina list
        this.router.push({ name: 'list' })
      } catch (error) {
        notify.notify('Problema ao tentar salvar despesa.', 'negative')
      }
    },
    // Editar item
    async editDespesa (form, id) {
      const desc = form.description
      const dat = form.data
      const val = form.value
      const user = '1'
      try {
        await api.put(`api/despesas/${id}`, {
          description: desc,
          data: dat,
          value: val,
          user_id: user
        })
        notify.notify('Despesa atualizada com sucesso.', 'positive')
        this.router.push({ name: 'list' })
      } catch (error) {
        notify.notify('Problema ao tentar atualizar despesa.', 'negative')
      }
    },
    // Listar itens
    async list () {
      const response = await api.get('/api/despesas')
      const data = response.data.data
      const res = await data.map(element => ({
        description: element.description,
        data: element.data,
        value: element.value,
        codigo: element.id
      }))
      return res
    },
    async getExpenseById (id) {
      return await api.get('api/despesas/' + id).then(function (response) {
        return response
      }).catch(function (error) {
        console.error(error)
        notify.notify(`não foi possível encontrada item [${id}]`, 'negative')
      })
    },
    // Excluir item
    async deleteMethod (data) {
      await api.delete('api/despesas/' + data.codigo).then(function () {
        notify.notify('"' + data.description + '" deletado com sucesso.', 'positive')
        setTimeout(() => {
          location.reload()
        }, 1000)
      }).catch(function (error) {
        console.error(error)
        notify.notify('Não foi possível excluir item.', 'negative')
      })
    },
    async deletar (data) {
      const dialog = alerts()
      dialog.confirm('Excluir', 'desaja realmente excluir "' + data.description + '" ?', this.deleteMethod, data)
    }
  }
})
