# 📝 TodoColor

## 📋 Sobre o Projeto

TodoColor é uma aplicação de lista de tarefas (To-Do List) desenvolvida para praticar e consolidar conceitos fundamentais do React. O projeto permite criar, gerenciar e acompanhar o progresso de suas tarefas de forma simples e intuitiva, com uma interface limpa e reativa.

---

## ✨ Funcionalidades

-   ✅ **Adicionar Tarefas:** Crie e adicione novas tarefas à sua lista.
-   ✅ **Marcar como Concluída:** Alterne o status de uma tarefa entre pendente e concluída.
-   ✅ **Excluir Tarefas:** Remova tarefas da lista com um modal de confirmação.
-   ✅ **Progresso Visual:** Uma barra de progresso exibe a porcentagem de tarefas concluídas.
-   ✅ **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador, para que não se percam.
-   ✅ **Validação de Entrada:** Impede a adição de tarefas vazias ou duplicadas.
-   ⏳ **Edição de Tarefas:** Permitir que o usuário edite o texto de uma tarefa existente. (Funcionalidade em desenvolvimento)
-   ⏳ **Filtro de Tarefas:** Filtrar a visualização entre tarefas pendentes e concluídas. (Funcionalidade em desenvolvimento)

---

## 🎯 Objetivo do Projeto

O principal objetivo do TodoColor é aplicar conhecimentos de React em um projeto prático e funcional. Cada funcionalidade foi pensada para exercitar um conceito específico da biblioteca.

Nesse aspecto:

1.  **Gerenciamento de Tarefas (CRUD):** A base do projeto foi implementada para treinar a manipulação de estado com o hook `useState`. Foram aplicados métodos de array essenciais como `map`, `filter`, e `some` para adicionar, remover, atualizar e validar as tarefas, reforçando a lógica de programação em JavaScript.

2.  **Modais com Portals:** Para criar uma experiência de usuário mais robusta, foram desenvolvidos modais de alerta e exclusão. Esta foi uma oportunidade para aplicar o `createPortal` do React, que permite renderizar um componente em um nó do DOM diferente da sua hierarquia pai, ideal para elementos como modais, notificações e pop-ups.

3.  **Persistência de Dados com `useEffect`:** A funcionalidade de salvar as tarefas foi implementada para treinar o uso do hook `useEffect`. Ele é utilizado para "observar" mudanças no estado das tarefas e sincronizá-lo com o `localStorage`, garantindo que os dados não sejam perdidos ao recarregar a página.

---

## 🚀 Tecnologias Utilizadas

<p align="left">
  <a href="https://react.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
  </a>
  <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  </a>
  <a href="https://mui.com/" target="_blank" rel="noreferrer"> 
    <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material UI"/>
  </a>
</p>

---

## 🏗️ Estrutura de Componentes

A aplicação é centralizada no componente `Lista`, que gerencia todo o estado e a lógica das tarefas. Os componentes `DeleteModal` e `AlertModal` são renderizados condicionalmente a partir de `Lista` e utilizam Portals para serem injetados diretamente no corpo do documento HTML, garantindo que fiquem sobrepostos a todo o conteúdo da página.

---

## 💡 Próximos Passos

Como próximos passos, tenho o objetivo de:

-   [ ] Implementar a funcionalidade de edição de tarefas.
-   [ ] Adicionar filtros para visualizar tarefas (todas, pendentes, concluídas).
-   [ ] Refatorar o gerenciamento de estado com `useReducer` para lidar com lógicas mais complexas.
-   [ ] Adicionar animações na lista para uma melhor experiência do usuário.
-   [ ] Adcionar funcionalidade de alteração de cores da lista e matérias (Color).

---

## 🔧 Instruções de Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/Lucasmenezes08/Todo-color
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd todocolor
    ```

3.  Novamente navegue até o diretório do projeto:
    ```bash
    cd todocolor
    ```


4.  Instale todas as dependências necessárias:
    ```bash
    npm install
    ```

5.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

Após executar esses comandos, o projeto estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).