# PO Hub

## Objetivo

O PO Hub é uma plataforma para Product Owners gerenciarem demandas, projetos e roadmaps de forma centralizada. O sistema permite visualizar o status das demandas, acompanhar o progresso dos times e facilitar o registro de novos projetos, integrando-se ao Azure DevOps para consulta de work items.

## Funcionalidades

- Visualização geral das demandas por time
- Filtros por data e trimestre
- Registro de novas demandas via formulário externo (Microsoft Forms) ou preenchimento manual
- Dashboard com cards de status (total, concluídas, em desenvolvimento, backlog)
- Seleção de time e alternância de tema (claro/escuro)
- Integração com Azure DevOps para consulta de work items

---

## Estrutura do Projeto

```
po-hub/
  backend/   # Servidor API NestJS
  frontend/  # Aplicação web Next.js
```

---

## Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v16+)
- [npm](https://www.npmjs.com/) (já vem com o Node.js)
- (Opcional) [Nest CLI](https://docs.nestjs.com/cli/overview) para desenvolvimento backend

---

### Backend (NestJS)

1. Acesse o diretório do backend:
    ```bash
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install ou npm i
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run start:dev
    ```

4. O backend estará disponível em [http://localhost:8080](http://localhost:8080) por padrão.

---

### Frontend (Next.js)

1. Acesse o diretório do frontend:
    ```bash
    cd frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. O frontend estará disponível em [http://localhost:3000](http://localhost:3000) por padrão.

---

## Scripts

Cada pacote (`backend` e `frontend`) possui seus próprios scripts.  
Execute os comandos dentro do respectivo diretório.

- **Backend**
  - `npm run start:dev` — Inicia o NestJS em modo desenvolvimento
  - `npm run build` — Compila o backend

- **Frontend**
  - `npm run dev` — Inicia o Next.js em modo desenvolvimento
  - `npm run build` — Compila o frontend

---

## Visão Geral das Pastas

- **backend/**
  - `src/` — Código-fonte do NestJS (módulos, controllers, DTOs, schemas)
  - `test/` — Configuração e arquivos de teste

- **frontend/**
  - `src/` — Código-fonte do Next.js (páginas, componentes, serviços, estilos)
  - `public/` — Arquivos estáticos

