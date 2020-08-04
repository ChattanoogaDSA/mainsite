<template>
  <dsa-page>
    <div class="content container-center px-4">
      <div v-html="topic.content"></div>
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
        topic: this.topic.name
      }
    },
    computed: {
      topic () {
        return this.$page.topic
      },
    }
  }
</script>

<page-query>
  query ($id: ID!) {
    topic (id: $id) {
      id
      name
      rank
      content
      articles {
        id
        name
        rank
        path
      }
    }
  }
</page-query>