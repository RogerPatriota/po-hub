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

## Stack Utilizada
- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4 + [DaisyUI](https://daisyui.com/) 5
- [React Query](https://tanstack.com/query/latest) 5
- [Lucide React](https://lucide.dev/)
- [React Day Picker](https://react-day-picker.js.org/)

## Estrutura de Pastas
```
src/
  app/           # Páginas e layout principal
  components/    # Componentes reutilizáveis (Navbar, Modal, DataCard, etc)
  services/      # Hooks de integração com Azure DevOps
  styles/        # Estilos globais e específicos
```

## Comandos

### Instalar dependências
```bash
npm install
```

### Rodar em modo desenvolvimento
```bash
npm run dev
```

### Build de produção
```bash
npm run build
```

### Rodar build de produção
```bash
npm start
```

## Observações
- Para integração com Azure DevOps, configure as credenciais no arquivo de serviço correspondente em `src/services/azure/`.
- O formulário externo para novas demandas utiliza Microsoft Forms, mas é possível registrar manualmente pela plataforma.
