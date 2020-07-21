<template>
  <dsa-page>
    <div class="content container-center px-4">
      <div v-html="home.content"></div>
    </div>

    <callouts-template :callouts="home.callouts">
      <template v-slot:title="{co}">
        {{co.header}}
      </template>
      <template v-slot:subtitle="{co}">
        {{co.subheader}}
      </template>
      <template v-slot:default="{co}">
        <div v-html="co.content"></div>
      </template>
      <template v-slot:links="{co}">
        <dsa-callout-btn v-for="btn in co.buttons"
                         :key="btn.link"
                         :href="btn.link">
          {{btn.buttonText}}
        </dsa-callout-btn>
      </template>
    </callouts-template>
  </dsa-page>
</template>

<script>
  import CalloutsTemplate from '~/templates/Callouts'
  import DsaCalloutBtn from '~/components/CalloutBtn'
  import DsaPage from '~/layouts/Page'

  export default {
    components: {
      CalloutsTemplate,
      DsaCalloutBtn,
      DsaPage,
    },
    metaInfo () {
      return {
        title: this.home.name,
      }
    },
    computed: {
      home () {
        return this.$page.allHome.edges[0].node
      },
    },
  }
</script>

<page-query>
  query {
    allHome (limit: 1) {
      edges {
        node {
          content
          callouts {
            template
            callout {
              id
              header
              subheader
              content
              buttons {
                link
                buttonText
              }
            }
            callouts {
              id
              header
              subheader
              content
              buttons {
                link
                buttonText
              }
            }
          }
        }
      }
    }
  }
</page-query>