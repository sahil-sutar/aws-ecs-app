FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production || true
EXPOSE 8080
CMD ["npm","start"]
