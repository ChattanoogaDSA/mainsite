<template>
  <span class="rounded-full bg-black-100 h-16 w-16 ml-4 first:ml-0 flex items-center justify-center">
    <a class="bg-white-100 text-red-100 hover:text-black-100 text-2xl
              rounded-full h-12 w-12
              flex items-center justify-center"
       v-bind="$attrs">
      <fa-icon :icon="faIcon"></fa-icon>
    </a>
  </span>
</template>

<script>
  export default {
    props: {
      icon: {type: [String, Array], default: 'blank'},
    },
    computed: {
      faIcon () {
        if (Array.isArray(this.icon)) {
          return this.icon
        }
        switch (this.icon) {
          case 'twitter':
            return ['fab', 'twitter']
          case 'facebook-f':
          case 'facebook':
            return ['fab', 'facebook-f']
          case 'instagram':
            return ['fab', 'instagram']
          case 'email':
          case 'envelope':
            return ['fas', 'envelope']
          case 'meetup':
            return ['fab', 'meetup']
          case 'call':
          case 'phone':
            return ['fas', 'phone']
          case 'blank':
          default:
            return ['fas', 'meh-blank']
        }
      },
    },
  }
</script>