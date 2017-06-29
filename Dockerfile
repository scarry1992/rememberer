FROM node:8.1.2
EXPOSE 8080

RUN mkdir -p /usr/src/rememberer
WORKDIR /usr/src/rememberer

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/rememberer/
COPY . /usr/src/rememberer/

RUN npm install webpack webpack-dev-server -g
RUN npm install
RUN npm run dev
VOLUME /usr/src/rememberer