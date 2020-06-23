<template>
  <dsa-page>
    <div class="content container-center px-4">
      <div v-html="article.content"></div>
    </div>
  </dsa-page>
</template>

<script>
  import DsaPage from '~/layouts/Page'

  export default {
    components: {
      DsaPage,
    },
    metaInfo () {
      return {
        article: this.article.name
      }
    },
    computed: {
      article () {
        return this.$page.article
      },
    }
  }
</script>

<page-query>
  query ($id: ID!) {
    article (id: $id) {
      id
      name
      rank
      content
      topic {
        id
        name
        path
        articles {
          id
          name
          rank
          path
        }
      }
    }
  }
</page-query>