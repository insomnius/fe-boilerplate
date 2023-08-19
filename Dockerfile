FROM node:20.5.0-bullseye AS build

WORKDIR /app
COPY . .

RUN yarn

RUN yarn build

FROM node:20.5.0-bullseye

WORKDIR /app

COPY --from=build /app/.output .

WORKDIR /app/server

EXPOSE 3000

CMD ["node", "index.mjs"]
