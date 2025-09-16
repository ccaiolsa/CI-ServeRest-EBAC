FROM cypress/base
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install cypress@13.6.0
