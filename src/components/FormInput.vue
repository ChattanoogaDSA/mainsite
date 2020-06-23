<template>
  <div>
    <label class="block text-xs text-red-100 uppercase font-bold tracking-widest"
           :for="name" v-html="label">

    </label>

    <input class="p-2 w-full bg-white-100 border-solid border-2 border-black-100"
           :name="name"
           :id="name"
           v-bind="$attrs" />
  </div>
</template>

<script>
  export default {
    props: {
      label: {type: String, required: true},
      name: {type: String, required: true},
    },
  }
</script>