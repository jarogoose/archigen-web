FROM node:alpine3.16 as ion-build

WORKDIR /app

COPY package*.json /app/

RUN npm install -g ionic

RUN npm install

COPY ./ /app/

RUN ionic build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=ion-build /app/www/ /usr/share/nginx/html/
