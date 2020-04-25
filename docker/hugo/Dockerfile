# see https://hub.docker.com/r/monachus/hugo/dockerfile
FROM debian:buster

# Install some dependencies for downloading Hugo
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates

# Download and nstall Hugo
ARG HUGO_VERSION
ENV HUGO_VERSION ${HUGO_VERSION:-0.69.2}
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.deb
RUN curl -sL -o /tmp/hugo.deb \
    https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} && \
    dpkg -i /tmp/hugo.deb && \
    rm /tmp/hugo.deb

# Run hugo user with specific IDs so volume writes map to host user (linux hosts only)
ARG DOCKER_UID=1000
ARG DOCKER_GID=1000

RUN set -eu; \
  addgroup --system --gid "$DOCKER_GID" hugo; \
  adduser --system  --uid "$DOCKER_UID" --disabled-login --ingroup hugo --home /home/hugo --gecos "hugo user" --shell /bin/bash hugo;

USER hugo

# Set a specify mount point for our site
VOLUME /app
WORKDIR /app

# This is the default Hugo port
EXPOSE 1313

# Just run the basic command for now
CMD hugo