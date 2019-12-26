# BUILD STAGE
FROM node:10-alpine as build

#RUN apk -u add git openssh

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# FINAL STAGE
FROM nginx:1.15
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY nginx/conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template

ENV PORT=80
CMD /bin/bash -c "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"

# docker build -t reciclame-app .
# docker run --rm -p 8080:80 reciclame-app
