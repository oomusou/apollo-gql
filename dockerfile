FROM node:lts-alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn install
COPY dist/* .
CMD [ "node", "index.js" ]