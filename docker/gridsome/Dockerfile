FROM node:14

# Apply user ID mapping so we can write files as if we were the host user
# Only works when built with DOCKER_XID args

ARG DOCKER_UID=-1
ARG DOCKER_GID=-1

RUN set -eu; \
  if [ "$DOCKER_UID" -gt -1 ]; then \
    usermod -u "$DOCKER_UID" node; \
    groupmod -g "$DOCKER_GID" node; \
    mkdir -p /home/node/.npm; \
    chown -R node:node /home/node; \
  fi;

ENV PATH=$PATH:./node_modules/.bin

WORKDIR /app

USER node

RUN yarn global add @gridsome/cli
RUN echo "export PATH=${PATH}:`yarn global bin`" >> /home/node/.bashrc

