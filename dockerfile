# Stage 1: AS BASE
FROM node:17-alpine as base
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

# STAGE 2 AS BUILDER
FROM base as builder 
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# STAGE 3 AS DEV
FROM base as dev 
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Stage 4: AS PROD
FROM nginx:1.19.0 as prod
EXPOSE 8000
EXPOSE 443
WORKDIR /usr/share/nginx/html
# Copiar archivos de la aplicación
COPY --from=builder /app/dist /usr/share/nginx/html
# Agregar configuración personalizada de Nginx para el manejo de rutas en SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]