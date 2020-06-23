<template>
  <div class="my-1 flex">
    <span class="bg-black-100 rounded-full w-2 h-2 self-center mr-2">&nbsp;</span>
    <a class="no-underline hover:underline" v-bind="$attrs">
      <slot></slot>
    </a>
  </div>
</template>