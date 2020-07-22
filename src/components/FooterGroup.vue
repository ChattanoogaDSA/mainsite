<template>
  <div class="flex flex-col mr-0 sm:mr-4 mt-4 text-black-100 bg-white-100 border border-black-60 p-4">
    <h1 class="font-bold text-xl pb-2">
      <slot name="header"></slot>
    </h1>

    <slot></slot>
  </div>
</template>