
# Laravel e Quasar Framework - CRUD
Para executar o projeto:
- É necessário ter o `Docker compose` instalado  
- baixe o projeto:
```
  git clone git@github.com:leopoldobms/Laravel-Crud-Quasar-Framework-Vue-3.git
```
- Na raiz do projeto execute pelo terminal o comando para conceder permissão e execução do arquivo chamado **install.sh**:  
```
  sudo chmod +x ./install.sh
  ./install.sh
```
- Acesse seu browser com a rota
```
  http://localhost:9000
```
- As informações das despesas se na tabela chamada **despesas**

# Documentação API 

**Criar usuário**
```
  Dominio: http://localhost:8080
  POST /register
```
```JSON
{
  "nome": "Jose Alves",
  "email": "jose@alves.com",
  "password": "@oe#Hz55"
  "password_confirmation": "@oe#Hz55"
}
```
&nbsp;

**Login usuário**
```JSON
{
  "email": "jose@alves.com",
  "password": "@oe#Hz55"
}
```
**Resetar senha**

É enviado email para redefinir senha
```JSON
{
  "email": "jose@alves.com",
}
```

Após receber email, clique no link para redefinir senha
```JSON
{
  "token": "aa902d0eba3f0b ..."
  "email": "jose@alves.com",
  "password": "@oe#Hz55"
}
```
| Parâmetro   | Tipo       | Descrição                           |  Obrigatório      |
| :---------- | :--------- | :---------------------------------- | :-----------------|
| `nome` | `string` | Nome do usuário | sim |
| `email` | `string` | Email do usuário  | sim |
| `password` | `string` | Senha do usuário | sim |
| `password_confirmation` | `string` | Confirmação de senha do usuário | sim |
| `token` | `string` | Token gerado, recebido por email | sim |

&nbsp;
# Despesas API 


**Criar Despesa**
```
POST api/despesas
```
```JSON
{
  "description": "Despesa 1",
  "data": "2023-07-27",
  "user_id": 1,
  "value": "123.00"
}
```

**Editar Despesa**
```
PUT api/despesas/{id}
```
```JSON
{
  "description": "Despesa 1",
  "data": "2023-07-27",
  "user_id": 1,
  "value": "123.00"
}
```

**Exibir despesas**

```
GET api/despesas
```
```JSON
{
  "user_id": 1
}
```

**Excluir despesa**
```
DELETE api/despesas/{id}
```
```JSON
{
  "id": 1,
  "user_id": 1
}
```
| Parâmetro   | Tipo       | Descrição                           |  Obrigatório      |
| :---------- | :--------- | :---------------------------------- | :-----------------|
| `description` | `string` | Descrição de despesa | sim |
| `data` | `date` | Data da despesa  | sim |
| `user_id` | `int` | id do usuário, vinculado a despesa | sim |
| `value` | `decimal` | valor da despesa | sim |
| `id` | `int` | id da despesa | sim |

