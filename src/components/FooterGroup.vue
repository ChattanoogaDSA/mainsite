<template>
  <div class="flex flex-col mr-0 sm:mr-4 mt-4 text-black-100 bg-white-100 border-2 border-black-100 p-4">
    <h1 class="font-black text-2xl">
      <slot name="header"></slot>
    </h1>

    <slot></slot>
  </div>
</template>