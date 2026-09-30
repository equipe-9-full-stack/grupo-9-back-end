# STOCK.IO · Back-end

API REST do **STOCK.IO**, plataforma do Grupo 9 onde usuários cadastram **lojas** e **produtos** e publicam **avaliações** e **comentários** sobre eles. Feita com NestJS, Prisma e PostgreSQL, com autenticação por JWT.

> O front-end desta aplicação está em [grupo-9-front-end](https://github.com/equipe-9-full-stack/grupo-9-front-end).

## Tecnologias

![NestJS](https://img.shields.io/badge/NestJS_11-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_6-2D3748?style=flat-square&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)

- **Autenticação:** Passport (estratégias `local` e `jwt`), `@nestjs/jwt` e `bcrypt` para o hash das senhas
- **Validação:** `class-validator` e `class-transformer` (`ValidationPipe` global)
- **Banco de dados:** PostgreSQL acessado com Prisma ORM, com migrations versionadas

## Funcionalidades

- Cadastro de usuários e login com token JWT
- CRUD de lojas (nome, descrição, endereço, logo, banner e sticker)
- CRUD de produtos, com preço, estoque, categoria e galeria de imagens
- Avaliações (nota e comentário) de lojas e de produtos
- Comentários nas avaliações
- Todas as rotas exigem token, exceto `POST /auth/login` e `POST /usuarios`

## Modelo de dados

```
Usuario ─┬─< Loja ──< Produto >── Categoria (com subcategorias)
         │              │
         │              ├──< ImagemProduto
         │              ├──< Movimentacao (entrada / saida)
         │              └──< AvaliacaoProduto ─┐
         ├──< AvaliacaoLoja ───────────────────┼──< ComentarioAvaliacao
         └──< ComentarioAvaliacao <────────────┘
```

O schema completo está em [`prisma/schema.prisma`](prisma/schema.prisma).

## Endpoints

| Recurso | Rotas |
| --- | --- |
| Autenticação | `POST /auth/login` (pública) |
| Usuários | `POST /usuarios` (pública), `GET /usuarios`, `GET /usuarios/:id`, `PUT /usuarios/:id`, `DELETE /usuarios/:id` |
| Lojas | `POST /lojas`, `GET /lojas`, `GET /lojas/:id`, `PUT /lojas/:id`, `DELETE /lojas/:id` |
| Produtos | `POST /produtos`, `GET /produtos`, `GET /produtos/:id`, `PATCH /produtos/:id`, `DELETE /produtos/:id` |
| Imagens de produto | `POST /imagens-produto`, `GET /imagens-produto`, `GET /imagens-produto/:id`, `PATCH /imagens-produto/:id`, `DELETE /imagens-produto/:id` |
| Avaliações de loja | `POST /avaliacao-loja`, `GET /avaliacao-loja`, `GET /avaliacao-loja/:id`, `PATCH /avaliacao-loja/:id`, `DELETE /avaliacao-loja/:id` |
| Avaliações de produto | `POST /avaliacao-produto`, `GET /avaliacao-produto`, `GET /avaliacao-produto/:id`, `PATCH /avaliacao-produto/:id`, `DELETE /avaliacao-produto/:id` |
| Comentários | `POST /comentarios-avaliacao`, `GET /comentarios-avaliacao`, `GET /comentarios-avaliacao/:id`, `PATCH /comentarios-avaliacao/:id`, `DELETE /comentarios-avaliacao/:id` |

As rotas protegidas esperam o cabeçalho `Authorization: Bearer <token>`, com o token retornado por `POST /auth/login`.

## Como executar

### Pré-requisitos

- Node.js 20 ou superior
- Uma instância de PostgreSQL (local ou na nuvem)

### Passo a passo

```bash
# 1. Clone o repositório e entre na branch de desenvolvimento
git clone https://github.com/equipe-9-full-stack/grupo-9-back-end.git
cd grupo-9-back-end
git checkout dev

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# edite o .env com os dados do seu banco

# 4. Aplique as migrations e gere o Prisma Client
npx prisma migrate deploy
npx prisma generate

# 5. Inicie a API em modo de desenvolvimento
npm run start:dev
```

A API sobe em **http://localhost:3001**.

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `DATABASE_URL` | String de conexão do PostgreSQL, por exemplo `postgresql://usuario:senha@host/banco?sslmode=require` |
| `JWT_SECRET` | Chave usada para assinar os tokens JWT. Defina uma chave própria e nunca a versione. |

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run start:dev` | Inicia a API com recarregamento automático |
| `npm run build` | Compila o projeto para `dist/` |
| `npm run start:prod` | Executa a versão compilada |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com o Prettier |
| `npm test` | Roda os testes unitários |
| `npm run test:e2e` | Roda os testes end-to-end |

## Estrutura

```
src/
├── auth/                  # login, guards e estratégias JWT/local
├── usuarios/
├── lojas/
├── produtos/
├── imagens-produto/
├── avaliacao-loja/
├── avaliacao-produto/
├── comentarios-avaliacao/
├── prisma/                # PrismaModule e PrismaService
└── main.ts                # bootstrap (CORS, ValidationPipe, porta 3001)
prisma/
├── schema.prisma
└── migrations/
postman/                   # coleção para testar a API
```

## Fluxo de trabalho

1. Crie uma branch a partir da `dev` (`feat/nome-da-feature`).
2. Abra um Pull Request para a `dev`.
3. Depois da revisão, a `dev` é integrada à `main`.

## Equipe

Projeto desenvolvido pelo **Grupo 9** (organização [equipe-9-full-stack](https://github.com/equipe-9-full-stack)):

- [@lianeiv](https://github.com/lianeiv)
- [@Lulu-souza](https://github.com/Lulu-souza)
- [@mahluoliveira](https://github.com/mahluoliveira)
- [@LeticiaSantosss](https://github.com/LeticiaSantosss)
