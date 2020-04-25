## Chattanooga DSA

This is the repository for the Chattanooga DSA website ([dsachattanooga.org](https://dsachattanooga.org)). It is a [static site](https://davidwalsh.name/introduction-static-site-generators) built with basic [hugo](https://gohugo.io/) . 

### Local Development

> Note that this site was built with and currently running **hugo version 0.31**. When developing, you'll need to use that version too until we can upgrade.

##### With Docker

1. Clone the project

   ```
   git clone git@github.com:ChattanoogaDSA/mainsite.git
   cd mainsite
   ```

2. Build the hugo container

   ```
   docker-compose build hugo
   
   # or if you're on linux, set container user IDs to match host
   docker-compose build --build-arg DOCKER_UID=$(id -u) --build-arg DOCKER_GID=$(id -g) hugo 
   ```

3. Running individual hugo commands

   ```
   # build static site
   docker-compose run --rm hugo
   
   # run the local server @ http://localhost:1313
   docker-compose run --rm --service-ports hugo hugo server -b http://localhost:1313 --bind 0.0.0.0
   
   # or just shell into the container and work from there
   docker-compose run --rm --service-ports hugo bash
   $ hugo server -b http://localhost:1313 --bind 0.0.0.0
   ```

