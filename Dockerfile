FROM node:8.16.0-alpine
WORKDIR /mnt
COPY . .
RUN npm i
