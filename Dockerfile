FROM node:24-alpine
WORKDIR /app
COPY . .
RUN npm install cypress@13.6.0
