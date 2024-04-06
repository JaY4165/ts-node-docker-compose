FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g ts-node-dev

COPY . .

EXPOSE 8080

RUN npm run build