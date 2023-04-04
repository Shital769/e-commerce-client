FROM node:19-alpine

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]