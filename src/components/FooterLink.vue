<template>
  <li class="my-1 flex">
    <span class="bg-white-100 w-2 h-2 self-center mr-2" aria-hidden="true">&nbsp;</span>
    <a class="no-underline hover:underline" v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>