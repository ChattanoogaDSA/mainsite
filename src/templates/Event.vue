<template>
  <dsa-page>
    <div class="content container-center px-4">
      <div v-html="event.content"></div>
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
        event: this.event.name
      }
    },
    computed: {
      event () {
        return this.$page.event
      },
    }
  }
</script>

<page-query>
  query ($id: ID!) {
    event (id: $id) {
      id
      name
      date
      startTime
      content
    }
  }
</page-query>