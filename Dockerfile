FROM node:18.16.0-slim

WORKDIR /app

COPY . ./

RUN yarn install
RUN yarn run build

CMD ["yarn", "start"]