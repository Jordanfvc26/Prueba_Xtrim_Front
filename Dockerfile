
FROM node:20.10.0

WORKDIR /app


COPY . /app


RUN npm install


RUN npm run build


EXPOSE 80

CMD ["npm", "start"]
