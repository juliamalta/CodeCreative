FROM node:18.19.0-slim

WORKDIR /app

COPY . ./

RUN yarn install
RUN yarn run build

EXPOSE 3001
CMD ["yarn", "start"]
