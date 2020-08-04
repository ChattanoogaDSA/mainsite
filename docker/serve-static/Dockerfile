FROM node:13

ENV PATH=$PATH:./node_modules/.bin:/home/node/.yarn/bin

WORKDIR /app

USER node

RUN yarn global add serve
RUN echo "export PATH=${PATH}:`yarn global bin`" >> /home/node/.bashrc

CMD serve /app/dist
