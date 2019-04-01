FROM node:alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
ENV NODE_ENV production
RUN npm run build
CMD ["npm", "start"]