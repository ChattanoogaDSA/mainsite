<template>
  <header class="container-center px-4 mb-8">
    <div class="flex flex-col">
      <g-link to="/" class="flex my-8 lg:my-16 no-underline">
        <logo-image></logo-image>
        <logo-text></logo-text>
      </g-link>
      <div>
        <nav class="flex overflow-x-auto overflow-indicator pb-4 -mr-4">
          <slot name="primary"></slot>
        </nav>
        <nav class="flex flex-wrap -mr-6">
          <slot name="secondary"></slot>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoImage from './LogoImage'
  import LogoText from './LogoText'

  export default {
    components: {
      LogoImage,
      LogoText,
    }
  }
</script>