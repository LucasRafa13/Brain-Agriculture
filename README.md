# 🌾 Brain Agriculture API

API REST desenvolvida com **NestJS + Prisma + PostgreSQL** para gerenciar o cadastro de produtores rurais, propriedades, safras e culturas plantadas, com dashboard dinâmico de dados.

---

## 🚀 Funcionalidades

- Cadastro de **produtores** com validação de CPF/CNPJ
- Cadastro de **fazendas** com validação da soma das áreas
- Registro de **safras** por fazenda
- Registro de **culturas** por safra
- **Dashboard** com:
  - Total de fazendas e hectares
  - Gráficos por estado
  - Gráficos por cultura plantada
  - Uso do solo: área agricultável vs vegetação

---

## 🧪 Testes E2E
- Automatizados com Jest + Supertest
- Executam fluxo completo dinamicamente
- Não exigem seed manual nem banco separado

---

## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger (OpenAPI)](http://localhost:3000/api)
- [Docker](https://www.docker.com/)

---

## 🧾 .env de exemplo

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/brain"
```

---
## Antes de tudo, certifique-se de ter o NodeJS e o Docker instalados.:

```bash
npm install
```

## 🐳 Rodando com Docker



1. Suba o banco de dados com Docker:

```bash
docker compose up -d
```

2. Execute as migrations:

```bash
npx prisma migrate dev
```

3. Inicie o servidor:

```bash
npm run start:dev
```

4. Acesse a documentação Swagger:

[http://localhost:3000/api](http://localhost:3000/api)

---

## 📊 Dashboard - Endpoints

| Recurso                      | Rota                        |
|-----------------------------|-----------------------------|
| Visão geral                 | `GET /dashboard/overview`   |
| Fazendas por estado         | `GET /dashboard/farms-by-state` |
| Culturas plantadas          | `GET /dashboard/cultures`   |
| Uso do solo                 | `GET /dashboard/land-use`   |

---

## 📦 Executar Testes

```bash
npm run test
```

> Os testes criam e removem seus próprios dados, usando o banco principal.

---

## 📚 Acesse a API via nuvem
A API está hospedada no Railway e pode ser acessada através do seguinte link:
[https://brain-agriculture-production.up.railway.app/api](https://brain-agriculture-production.up.railway.app/api)
---

## 🔥 Autor

Desenvolvido por **Lucas Rafael** como parte do desafio técnico da Brain Agriculture.