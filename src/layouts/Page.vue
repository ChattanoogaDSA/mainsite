<template>
  <dsa-main>
    <dsa-alert v-for="alert in alerts"
               :key="alert.id"
               :link-href="alert.link"
               :cookie-name="alert.cookieName">
      <template #title>
        {{ alert.name}}
      </template>

      <div class="content" v-html="alert.alert" />

      <template #link>
        {{alert.linkText}}
      </template>
    </dsa-alert>

    <dsa-nav-bar>
      <template #primary>
        <dsa-nav-item v-for="topic in topics"
                      :key="topic.id"
                      :to="topic.path"
                      :active="activeTopic && activeTopic.id === topic.id">
          {{ topic.name }}
        </dsa-nav-item>
        <dsa-nav-item to="/events" :active="/^\/event/.test($route.path)">
          Events
        </dsa-nav-item>
      </template>
      <template #secondary v-if="activeTopic">
        <dsa-nav-item-secondary v-for="article in activeTopic.articles"
                                :key="article.id"
                                :to="article.path"
                                :active="activeArticle && activeArticle.id === article.id">
          {{ article.name }}
        </dsa-nav-item-secondary>
      </template>
    </dsa-nav-bar>

    <slot/>

    <dsa-signup class="mb-8 mt-16"></dsa-signup>

    <dsa-footer>
      <template #icons>
        <dsa-social-icon v-for="link in socialIcons"
                         :key="link.href"
                         :href="link.link"
                         :title="link.helpText"
                         :icon="link.icon"
                         target="_blank"
                         rel="nofollow" />
      </template>

      <template #links>
        <dsa-footer-group v-for="fg in footerGroups" :key="fg.id">
          <template #header>
            {{fg.name}}
          </template>

          <dsa-footer-link v-for="link in fg.links"
                           :key="link.link"
                           target="_blank"
                           rel="nofollow"
                           :href="link.link">
            {{link.name}}
          </dsa-footer-link>
        </dsa-footer-group>
      </template>
    </dsa-footer>

  </dsa-main>
</template>

<script>
  import DsaAlert from '~/components/Alert'
  import DsaFooter from '~/components/Footer'
  import DsaFooterGroup from '~/components/FooterGroup'
  import DsaFooterLink from '~/components/FooterLink'
  import DsaMain from '~/layouts/Main'
  import DsaNavBar from '~/components/NavBar'
  import DsaNavItem from '~/components/NavItem'
  import DsaNavItemSecondary from '~/components/NavItemSecondary'
  import DsaSignup from '~/components/Signup'
  import DsaSocialIcon from '~/components/SocialIcon'

  export default {
    components: {
      DsaAlert,
      DsaFooter,
      DsaFooterGroup,
      DsaFooterLink,
      DsaMain,
      DsaNavBar,
      DsaNavItem,
      DsaNavItemSecondary,
      DsaSignup,
      DsaSocialIcon,
    },
    computed: {
      topics () {
        return this.$static.allTopic.edges.map(e => e.node)
      },
      alerts () {
        return this.$static.allAlert.edges.map(e => e.node)
      },
      footerGroups () {
        return this.$static.allFooterGroup.edges.map(e => e.node)
      },
      socialIcons () {
        return this.$static.allSettings.edges.flatMap(e => e.node.socialIcons)
      },
      activeTopic () {
        if (this.activeArticle) {
          return this.activeArticle.topic
        }
        if (this.$page) {
          return this.$page.topic
        }
        return null
      },
      activeArticle () {
        if (this.$page) {
          return this.$page.article
        }
        return null
      },
    },
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
  allTopic(
      sortBy: "rank",
      order: ASC
  ) {
    edges {
      node {
        id
        name
        path
      }
    }
  }
  allAlert {
    edges {
      node {
        id
        name
        link
        linkText
        alert
        cookieName
      }
    }
  }
  allFooterGroup {
    edges {
      node {
        id
        name
        links {
          name
          link
        }
      }
    }
  }
  allSettings {
    edges {
      node {
        socialIcons {
          icon
          link
          helpText
        }
      }
    }
  }
}
</static-query>
