FROM node:14-alpine as development

WORKDIR /app

COPY ./dist/apps/backend .

ENV PORT=3333
EXPOSE ${PORT}

RUN npm install

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PORT=3333
EXPOSE ${PORT}

WORKDIR /app

COPY ./dist/apps/backend .

RUN npm install --only=production

CMD ["node", "main"]