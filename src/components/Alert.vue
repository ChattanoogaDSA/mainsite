<template>
  <div>
    <div v-if="!isClosed" role="alert" class="flex justify-center bg-black-100 text-white-100 p-2">
      <div class="flex flex-col container-center px-4">
        <div v-if="hasTitleSlot" class="uppercase font-bold tracking-wider">
          <slot name="title" />
        </div>
        <div>
          <slot />
        </div>
        <a v-if="hasLinkSlot" :href="linkHref" v-bind="linkAttrs">
          <slot name="link" />
        </a>
      </div>
      <button title="close alert" style="display: inherit;" @click="close">
        <span class="px-2 -mt-1 text-4xl leading-none">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  import {slugify} from 'gridsome/lib/utils'

  export default {
    props: {
      linkHref: String,
      cookieName: String,
    },
    data () {
      return {
        closed: true,
      }
    },
    mounted () {
      this.closed = localStorage.getItem(this.fullCookieName) === 'closed'
    },
    computed: {
      isClosed () {
        return this.closed
      },
      hasTitleSlot () {
        return !!this.$slots.title
      },
      hasLinkSlot () {
        return this.linkHref && !!this.$slots.link
      },
      linkAttrs () {
        if (this.linkHref.startsWith('/')) {
          return {}
        }
        return {
          target: '_blank',
          rel: 'nofollow'
        }
      },
      fullCookieName () {
        const cookie = this.cookieName || ''
        return slugify(`alert:${cookie}:${this.linkHref}`)
      },
    },
    methods: {
      close () {
        localStorage.setItem(this.fullCookieName, 'closed')
        this.closed = true
      },
    },
  }
</script>