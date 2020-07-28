<template>
  <div class="flex flex-col bg-red-100 text-white-100 p-4" :class="tight ? 'w-full md:w-1/2 lg:w-1/3' : 'container-center'">
    <div class="flex-grow">
      <div class="mb-8">
        <h3 class="font-black pb-2" :class="tight ? 'text-2xl leading-tight' : 'text-4xl'">
          <slot name="title"></slot>
        </h3>
      </div>
      <div class="content content-inverted mb-4" :class="{'content-tight': tight}">
        <slot></slot>
      </div>
    </div>

    <div class="flex justify-end flex-wrap">
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tight: Boolean,
    },
  }
</script>