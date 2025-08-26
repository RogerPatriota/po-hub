# PO Hub

A monorepo project featuring a **NestJS** backend and a **Next.js** frontend.  
PO Hub is designed to streamline project management and collaboration.

---

## Project Structure

```
po-hub/
  backend/   # NestJS API server
  frontend/  # Next.js web application
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- (Optional) [Nest CLI](https://docs.nestjs.com/cli/overview) for backend development

---

### Backend Setup (NestJS)

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install or npm i
    ```

3. Start the development server:
    ```bash
    npm run start:dev
    ```

4. The backend server will run on [http://localhost:8080](http://localhost:8080) by default.

---

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. The frontend app will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Scripts

Each package (`backend` and `frontend`) contains its own scripts.  
Run all commands from within the respective directory.

- **Backend**
  - `npm run start:dev` — Start NestJS in development mode
  - `npm run build` — Build the backend

- **Frontend**
  - `npm run dev` — Start Next.js in development mode
  - `npm run build` — Build the frontend

---

## Folder Overview

- **backend/**
  - `src/` — NestJS source code (modules, controllers, DTOs, schemas)
  - `test/` — Test configuration and files

- **frontend/**
  - `src/` — Next.js source code (pages, components, services, styles)
  - `public/` — Static assets
