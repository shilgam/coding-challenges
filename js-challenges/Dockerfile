FROM node:20.17.0-alpine

ENV  PATH="$PATH:/node_modules"

ARG APP_DIR=/usr/src/app

WORKDIR $APP_DIR

COPY package*.json ./
RUN  npm install --quiet
ENV  PATH="$PATH:$APP_DIR/node_modules/.bin"

COPY . ./
