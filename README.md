# 📝 Bem Lembrado — To-Do List

O **Bem Lembrado** é um projeto de lista de tarefas com autenticação simples utilizando **LocalStorage**.  
O usuário pode criar uma conta, fazer login e gerenciar suas tarefas diretamente no navegador, com dados persistidos localmente.

## 🚀 Funcionalidades

### 🔐 Autenticação
- **Login**
  - Verifica se o usuário existe no LocalStorage.
  - Confere se a senha está correta.
  - Exibe mensagens de erro quando houver inconsistências.

- **Criar Conta**
  - Validação completa nos campos:
    - **Apelido**
    - **E-mail**
    - **Senha**
    - **Confirmar senha**
  - Impede o cadastro caso algum campo seja inválido.

## 📌 Tela Principal
Após o login, o sistema:

- Exibe o **nome/apelido** do usuário logado.
- Mostra:
  - ✔️ Total de tarefas concluídas  
  - ⏳ Total de tarefas pendentes
- Renderiza dinamicamente a lista de tarefas vinculada ao usuário.

## 🏆 Sistema de Rank
O sistema de rank é baseado na quantidade total de tarefas concluídas pelo usuário, funcionando como um sistema de pontuação e progressão.

👉 Veja a lista completa de ranks em [RANKS.md](./RANKS.md)

## 🧪 Testes Unitários
O projeto inclui **testes com Jest** para garantir que:

- Usuários sejam criados corretamente.  
- Ações relacionadas às tarefas (adicionar, completar e remover) funcionem conforme esperado.

## 💾 Armazenamento (LocalStorage)
O LocalStorage é responsável por guardar:

- Dados dos usuários cadastrados  
- Informações de login  
- Lista de tarefas  
- Status das tarefas (concluídas ou pendentes)

Tudo funciona no front-end, sem necessidade de API ou back-end.

## 🛠️ Tecnologias Utilizadas
<img src="https://skillicons.dev/icons?i=javascript,jest,html,css,figma,git" />

## 📚 Objetivo
Este projeto foi desenvolvido para praticar:

- Manipulação do DOM  
- Persistência local de dados  
- Validação de formulários  
- Renderização dinâmica  
- Lógica de autenticação no front-end  

## 📄 Licença
Este projeto está licenciado sob a **MIT License**.
