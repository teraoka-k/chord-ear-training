FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build
RUN echo 1

CMD npx next start -p $PORT