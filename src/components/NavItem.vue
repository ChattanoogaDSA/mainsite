<template>
  <g-link class="md:text-xl font-black whitespace-no-wrap
            no-underline
            first:ml-0 mr-2 ml-2 lg:ml-4 lg:ml-4
            outline-none
            border-solid border-b-4
            hover:text-red-100 hover:border-black-100"
     :class="active ? 'border-red-100': 'border-transparent'"
     v-bind="$attrs">
    <slot></slot>
  </g-link>
</template>

<script>
  export default {
    props: {
      active: {type: Boolean, default: false},
    },
  }
</script>