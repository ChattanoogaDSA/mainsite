<template>
  <g-link class="mr-2 mt-2 px-1 outline-none
            text-xs md:text-sm font-black text-white-100 whitespace-no-wrap"
     :class="active ? 'bg-red-100 underline hover:bg-black-100 hover:no-underline': 'bg-black-100 no-underline hover:underline'"
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