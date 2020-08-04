<template>
  <ul class="flex flex-col
              mr-0 sm:mr-4 mt-4 p-4
              max-w-sm
              text-white-100 bg-black-100">
    <h3 class="font-bold text-xl pb-2">
      <slot name="header"></slot>
    </h3>

    <slot></slot>
  </ul>
</template>