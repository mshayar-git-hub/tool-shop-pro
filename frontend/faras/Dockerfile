FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG VITE_SERVER_BASE_URL
ARG VITE_SERVER_BASE_URL_ROOT
ARG VITE_TOKEN_REFRESH_URL

ENV VITE_SERVER_BASE_URL=$VITE_SERVER_BASE_URL
ENV VITE_SERVER_BASE_URL_ROOT=$VITE_SERVER_BASE_URL_ROOT
ENV VITE_TOKEN_REFRESH_URL=$VITE_TOKEN_REFRESH_URL

RUN npm run build


# =========================
# Stage 2: Serve with Nginx
# =========================

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

# React Router fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]