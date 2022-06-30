FROM node:16.13

WORKDIR /usr/local/user

ENV PORT=3000
ENV DBPASS=RPp2dTBjj6de8kr4

COPY package.json package-lock.json /usr/local/user/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]