# --- BUILDING ----------------------------------------------------------------

FROM node:9-alpine AS build

# Create working directory
WORKDIR /application

# Install app dependencies
COPY package.json /application
RUN npm install

# Bundle the application code
COPY . /application

# Build the application
RUN npm run build

# --- SERVING -----------------------------------------------------------------

FROM nginx:latest

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Create working directory
WORKDIR /application

# Copy previously built static files
COPY --from=build /application/build /application/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
