FROM node:latest
RUN npm install -g create-react-app
ADD . /app
WORKDIR /app
RUN npm install
CMD npm start