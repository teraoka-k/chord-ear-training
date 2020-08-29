FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

RUN find -not -path "./node_modules/*" -not -path "./.next/*" -delete

RUN npx next start -p $PORT