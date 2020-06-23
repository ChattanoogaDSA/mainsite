# Chattanooga DSA - Website

### Local Development

##### With Docker

1. Clone the project

   ```
   git clone git@github.com:ChattanoogaDSA/mainsite.git
   cd mainsite
   ```

2. Build the gridsome/node container (for production)

   ```
   docker-compose build gridsome
   
   # or if you're on linux, set container user IDs to match host
   docker-compose build --build-arg DOCKER_UID=$(id -u) --build-arg DOCKER_GID=$(id -g) gridsome 
   ```

3. Install dependencies

   ```
   docker-compose run --rm gridsome yarn install
   ```

4. Running individual gridsome commands

   ```
   # build static site
   docker-compose run --rm gridsome gridsome build
   
   # run the local server @ http://localhost:8080
   docker-compose run --rm --service-ports gridsome gridsome develop
   
   # or just shell into the container and work from there
   docker-compose run --rm --service-ports gridsome bash
   $ gridsome develop
   
   # view the built site (as it would be in production)
   docker-compose run --rm --service-ports --name dsasite-static serve-static
   ```

### Notes

##### Relative Image Paths

In order for content images to work, Forestry should be set up to render all image paths as starting with `"../media"` and to store all image files in `/content/media`. This is because [remark only works with relative image paths currently](https://github.com/gridsome/gridsome/issues/594). For this to work, we'll need to make sure that `"../media"`  is a valid path for all images which means all content markdown files need to live in `/content/{dir}/{file}.md`. 

### Content Guide

The content for this site is managed by [Forestry CMS])(https://forestry.io/). For the sake of costs, everyone who has access to the Forestry CMS is an administrator and has the potential to mess up the site settings. 

##### Drafts

Previews of the CMS in the Forestry CMS will always show all drafts. Drafts are never visible on the production/live site. 

##### Topics & Articles

Topics are the top-level pages and show up in primary navigation. Articles are one-level under a topic and their navigation is only visible one their topic is the active page. 