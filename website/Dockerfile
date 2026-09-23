FROM node:26-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.30-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx-entrypoint.sh /docker-entrypoint.d/40-instance.sh
RUN chmod +x /docker-entrypoint.d/40-instance.sh
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]