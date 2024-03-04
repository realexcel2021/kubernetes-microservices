FROM node:15-alpine

LABEL version="1.0.0"
ARG basedir="frontend"
ENV NODE_ENV production
WORKDIR /app

# Copy package.json
COPY ./package*.json ./

# Install npm packages
RUN npm install --silent

RUN npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-http express @opentelemetry/resources @opentelemetry/semantic-conventions --force


# Copy project files to the workdir.
COPY . .

# Install bash inside container. Only if you need to debug app inside of the container.
RUN apk update && apk add bash

EXPOSE 9000
CMD npm start