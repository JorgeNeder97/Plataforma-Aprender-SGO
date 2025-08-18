
# Etapa 1: build
FROM node:24-alpine3.21 AS builder

# Establece directorio de trabajo
WORKDIR /app

# Copia dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Construye el proyecto Next.js
RUN npm run build

# Etapa 2: runtime optimizado
FROM node:24-alpine3.21

WORKDIR /app

# Copia solo lo necesario para producción desde el build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expone el puerto por defecto de Next.js
EXPOSE 3030

# Comando de inicio de producción
CMD ["npm", "run", "start"]
