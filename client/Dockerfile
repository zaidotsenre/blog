# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.16.1
FROM node:${NODE_VERSION}-alpine as build
ENV NODE_ENV production
WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
USER node
COPY --chown=node:node . .
EXPOSE 3000
CMD npm start
