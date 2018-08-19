FROM node:9.4.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN apk add --no-cache --virtual .gyp \
        python \
        bash \
        git \
        openssh \
        make \
        g++ \
        && npm install -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
