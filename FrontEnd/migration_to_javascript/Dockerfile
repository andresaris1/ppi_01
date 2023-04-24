FROM node:17-alpine



WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "dev"]