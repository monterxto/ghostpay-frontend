# GhostsPay Frontend

Este é o frontend da aplicação GhostsPay. Construído com **Next.js**, utiliza o **Atomic Design** para organizar componentes de forma modular e reutilizável.

## Executando o Projeto

Para rodar o projeto localmente e testá-lo, siga os passos abaixo:

### Pré-requisitos
- Node.js e npm instalados.
- Servidor backend rodando em `http://localhost:3001`.

1. Clone o repositório:
``bash
git clone https://github.com/monterxto/ghostspay-frontend.git
cd ghostspay-frontend
``

2. Instale as dependências:
``bash
npm install
``

3. Inicie o servidor de desenvolvimento:
``bash
npm run dev
``

4. Acesse `http://localhost:3000` no navegador.

O projeto recarrega automaticamente ao editar os arquivos.

## Estrutura do Projeto

- **app/**: Páginas e layouts do Next.js (ex.: `checkout`, `confirmation`).
- **components/**: Componentes organizados com Atomic Design:
  - `atoms/`: Elementos básicos (ex.: `Button`, `Input`).
  - `molecules/`: Combinações de átomos (ex.: `FormGroup`).
  - `organisms/`: Estruturas complexas (ex.: `CheckoutForm`).
  - `templates/`: Layouts de página (ex.: `CheckoutTemplate`).
- **services/**: Chamadas de API (ex.: `api.ts`).
- **styles/**: Estilos globais com Tailwind CSS.
- **utils/**: Funções utilitárias (ex.: `formatCurrency`).

O projeto usa **React Query** para gerenciar estado assíncrono e **TypeScript** para tipagem segura.