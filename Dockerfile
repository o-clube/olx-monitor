FROM node:16

RUN apt-get update -y \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
CMD ["npm", "start"]
