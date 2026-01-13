# Loja Temakeria

> ⚠️ **Projeto de Estudo**: Este sistema foi desenvolvido exclusivamente como um projeto de estudo para aprender Next.js e shadcn/ui. Não é um sistema de produção.

## 📋 Sobre o Projeto

Loja Temakeria é uma aplicação web de e-commerce para uma loja de comida japonesa, desenvolvida como projeto de estudo. O sistema permite visualizar produtos (sushi, temaki, combos e bebidas), adicionar itens ao carrinho e realizar checkout com coleta de dados do cliente.

## 🚀 Tecnologias Utilizadas

### Framework e Bibliotecas Principais
- **[Next.js 16.1.1](https://nextjs.org/)** - Framework React para produção
- **[React 19.2.3](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### UI e Estilização
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI construídos com Radix UI e Tailwind CSS
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Suporte a tema claro/escuro

### Gerenciamento de Estado e Formulários
- **[Zustand 5.0.10](https://zustand-demo.pmnd.rs/)** - Biblioteca de gerenciamento de estado leve
- **[React Hook Form 7.71.0](https://react-hook-form.com/)** - Biblioteca para gerenciamento de formulários
- **[Zod 4.3.5](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Resolvers para React Hook Form

### Outras Dependências
- **[Sonner](https://sonner.emilkowal.ski/)** - Biblioteca de notificações toast
- **[class-variance-authority](https://cva.style/)** - Utilitário para variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para construção de classes CSS

## 🛠️ Funcionalidades

- 📦 Catálogo de produtos organizado por categorias (Sushi, Temaki, Combos, Bebidas)
- 🛒 Carrinho de compras com gerenciamento de quantidade
- 📝 Formulário de checkout em múltiplas etapas
- 🌓 Suporte a tema claro/escuro
- 📱 Interface responsiva

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd loja-temakeria
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
# ou
yarn install
```

## 🚀 Como Executar

Execute o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter ESLint

## 📚 Aprendizados

Este projeto foi desenvolvido para estudar:
- Arquitetura e estrutura de projetos Next.js
- Integração e uso de componentes shadcn/ui
- Gerenciamento de estado com Zustand
- Validação de formulários com React Hook Form e Zod
- Implementação de temas claro/escuro
- Estruturação de componentes React modernos

## 📄 Licença

Este é um projeto de estudo e não possui licença específica.
