<template>
  <li class="my-1 flex">
    <span class="bg-white-100 w-2 h-2 mt-2 mr-2 flex-shrink-0" aria-hidden="true">&nbsp;</span>
    <a class="no-underline hover:underline" :href="href" :target="target" :rel="rel" v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>

<script>

  // taken from https://github.com/sindresorhus/is-absolute-url/blob/master/index.js
  const isAbsoluteUrl = url => {
      if (typeof url !== 'string') {
        throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
      }

      // Don't match Windows paths `c:\`
      if (/^[a-zA-Z]:\\/.test(url)) {
        return false;
      }

      // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
      // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
      return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
    }

  export default {
    props: {
      href: String,
    },
    computed: {
      isExternalLink () {
        if (!this.href) {
          return false
        }
        return isAbsoluteUrl(this.href)
      },
      target () {
        return this.isExternalLink ? '_blank' : false
      },
      rel () {
        return this.isExternalLink ? 'noopener noreferrer' : false
      },
    }
  }
</script>
