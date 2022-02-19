FROM node:alpine3.15

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8181

EXPOSE 8181

CMD [ "npm", "start" ]