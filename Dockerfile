FROM node:16.19.1-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat=1.2.3-r4
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --audit false --fund false

FROM node:16.19.1-alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate

ENV DATABASE_URL=postgresql://postgres:postgres@db:5432/db

CMD ["npm", "run", "start:dev", "--workspace", "service"]
