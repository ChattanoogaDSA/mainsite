<template>
  <footer class="pattern-topo text-white-100 pb-32 pt-8 mt-8 lg:mt-16 border-black-100 border-t-2">
    <div class="container-center p-4">
      <ul class="flex lg:justify-center flex-wrap mb-8">
        <slot name="icons"></slot>
      </ul>
      <div class="flex flex-col sm:flex-row sm:flex-wrap lg:justify-center sm:-mr-8">
        <slot name="links"></slot>
      </div>
      <div class="flex justify-center mt-32">
        <dsa-logo-image-national></dsa-logo-image-national>
      </div>
    </div>
  </footer>
</template>

<script>
  import DsaLogoImageNational from './LogoImageNational'

  export default {
    components: {
      DsaLogoImageNational
    }
  }
</script>