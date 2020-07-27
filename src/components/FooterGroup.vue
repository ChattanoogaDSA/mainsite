<template>
  <ul class="flex flex-col mr-2 sm:mr-4 mt-4 text-white-100 bg-black-100 p-4 pl-8">
    <h3 class="font-bold text-xl pb-2">
      <slot name="header"></slot>
    </h3>

    <slot></slot>
  </ul>
</template>