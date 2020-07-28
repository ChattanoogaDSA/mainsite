<template>
  <div class="flex flex-col
              mr-0 sm:mr-4 mt-4 p-4
              max-w-sm
              text-white-100 bg-black-100">
    <h1 class="font-bold text-xl pb-2">
      <slot name="header"></slot>
    </h1>

    <slot></slot>
  </div>
</template>