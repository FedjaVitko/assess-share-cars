FROM node:8.2.1-alpine
RUN npm install -g create-react-app
RUN mkdir /app
WORKDIR /app
ADD . /app