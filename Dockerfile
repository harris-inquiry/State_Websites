FROM node:15-alpine

# RUN mkdir -p /user/src/site && chown -R node:node /user/src/site
WORKDIR /usr/src/site

COPY package*.json ./
RUN npm install

COPY . .

# CMD ["npx", "gatsby", "develop", "-H", "0.0.0.0"]

EXPOSE 8000

# unprivledge user 
# USER node
