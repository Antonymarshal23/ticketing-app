FROM node:alpine

WORKDIR /app
COPY package.json .
# No dev dependecy will be installed while rebuild the image
RUN npm install
COPY . .

CMD ["npm", "start"]