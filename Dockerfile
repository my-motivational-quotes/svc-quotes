FROM node:22 AS build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:22

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY babel.config.json .
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist

CMD ["npm", "start"]
