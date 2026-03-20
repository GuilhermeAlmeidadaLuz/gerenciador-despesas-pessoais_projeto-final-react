# 💰 Gerenciador de Despesas Pessoais

Uma aplicação web desenvolvida em **React** para o controle financeiro pessoal. O projeto permite cadastrar gastos, categorizá-los e visualizar um resumo financeiro em tempo real, utilizando armazenamento local para que os dados não se percam ao fechar o navegador.

---

## 🚀 Funcionalidades

* **Dashboard de Controle:** Resumo automático do "Total Gasto" e "Quantidade de Despesas".
* **Cadastro de Gastos:** Formulário intuitivo com validação de campos (Nome, Valor e Categoria).
* **Categorização:** Organização por Alimentação, Transporte e Lazer.
* **Rotas Dinâmicas:** Página exclusiva para cada despesa (`/despesa/:id`) exibindo detalhes e data.
* **Persistência de Dados:** Integração com **LocalStorage** para salvar os dados no navegador.
* **Gerenciamento:** Opção de exclusão de despesas diretamente pela rota de detalhes.

---

## 🛠️ Tecnologias e Conceitos Utilizados

* **React.js:** Biblioteca principal para construção da UI.
* **React Router Dom (v6):** Gerenciamento de rotas e parâmetros dinâmicos.
* **Context API:** Gerenciamento de estado global para compartilhar dados entre o Dashboard e o Formulário.
* **Hooks (useState, useEffect, useContext):** Manipulação de ciclo de vida e estado.
* **CSS Modules:** Estilização componentizada para evitar conflitos de escopo.

---

## 📦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)