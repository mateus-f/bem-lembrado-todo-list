<img width="100%" alt="Banner" src="https://github.com/user-attachments/assets/47a3796f-83cb-4e95-941b-70c9cb6e1a57" />

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

## 💾 Armazenamento (LocalStorage)
O LocalStorage é responsável por guardar:

- Dados dos usuários cadastrados  
- Informações de login  
- Lista de tarefas  
- Status das tarefas (concluídas ou pendentes)

Tudo funciona no front-end, sem necessidade de API ou back-end.

## 🛠️ Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage**

## 📚 Objetivo
Este projeto foi desenvolvido para praticar:

- Manipulação do DOM  
- Persistência local de dados  
- Validação de formulários  
- Renderização dinâmica  
- Lógica de autenticação no front-end  

## 📄 Licença
Este projeto está licenciado sob a **MIT License**.
