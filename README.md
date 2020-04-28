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

### Netlify Deployment Notes

##### [Netlify CMS Authentication Setup](https://www.netlifycms.org/docs/add-to-your-site/#enable-identity-and-git-gateway)

1. We're using Netlify's identity service. Go to **Settings > Identity** and enable the Identity Service.
2. We don't want to let anyone sign up, so we need to change the registration process to invitation only. Go to **Settings > Identity > Registration** and click "edit settings" to choose the "Invite Only" option. The free netlify only allows 5 invite-only users. 
3. We can skip the external google auth for now. 
4. Now we need to enable the logged-in user to make changes to the underlying git repository where all the content is. We're going to use the `git-gateway` backend. Go to **Settings > Identity > Services** and enable the "Git Gateway". It will ask you to authenticate a github user with access to this repository. We should probably create a new user specifically for this purpose called "cms_comrade". 

Now you can go to the **Identity** and invite new users to edit the CMS. They will receive an email and be asked to create a password. 

We are not doing anything with roles right now. Ignore all things about roles.

Note: we could skip the git-gateway and users could log in with github accounts. This is perhaps better security and auditing, but a bigger barrier to getting people added. 

##### CMS Changes and Build Settings

When users make a change in the CMS, it's basically like making a git commit. And for draft/review content, those commits are added to their own non-master branch. (This is the nature of working with static sites.) Netlify will create preview deployments for these branches so you can see what the final site will look like with your content added.

Currently, content changes are added to the `master` branch when they are "published". We'll need to update a configuration setting if there's a different flow needed. So in the Netlify go to **Settings > Build & Deploy > Deploy Contexts** to verify that the "Production Branch" is `master` and check that deploy previews are enabled.

Last things, check in **Settings > Build & Deploy > Build Settings** to make sure you have these values:

* Base Directory - not set
* Build command - "hugo"
* Publish Directory - "public"
* Log visibility - private
* Builds - Active

