FROM node:15

WORKDIR /usr/src/site

COPY package.json ./
RUN npm install

COPY . .

CMD ["npx", "gatsby", "develop", "-H", "0.0.0.0"]

EXPOSE 8000
