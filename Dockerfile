FROM node:latest AS builder

WORKDIR usr/src/app

RUN yarn global add 

RUN yarn global add concurrently typescript

COPY ./package.json .

RUN yarn install --force

COPY . .

RUN yarn build

FROM nginx:1.13.9-alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
