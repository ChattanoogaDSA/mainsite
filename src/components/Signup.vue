<template>
  <div class="container-center px-4">
    <form action="https://gmail.us10.list-manage.com/subscribe/post?u=568b434ef4d56d01e40c874e0&amp;id=00174e30ac"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          @submit="onSubmit">

      <div class="pb-4">
        <h3 class="font-extrabold text-lg md:text-xl tracking-wider uppercase">Stay informed</h3>

        <p class="text-base md:text-xl">
          Getting on our email list is the easiest way to follow what
          Chattanooga DSA is doing and to find ways you can get involved.
        </p>
      </div>

      <div class="flex flex-col md:flex-row">
        <dsa-form-input class="mr-0 md:mr-2 w-full md:w-1/2 xl:w-1/3"
                        label="Email Address"
                        type="email"
                        name="EMAIL"
                        ref="inputEmail"
                        required />
        <dsa-form-input class="w-full md:w-1/2 xl:w-1/3"
                        label="First Name"
                        type="text"
                        name="FNAME"
                        ref="inputFname"
                        required />
      </div>

      <!-- Mailchimp's bot catcher -->
      <input class="offscreen"
             type="text"
             name="b_568b434ef4d56d01e40c874e0_00174e30ac"
             tabindex="-1" />

      <button type="submit" class="mt-2 btn">
        Subscribe
      </button>
    </form>
  </div>

</template>

<script>
  import DsaFormInput from '~/components/FormInput.vue'

  export default {
    components: {
      DsaFormInput,
    },
    methods: {
      onSubmit (e) {
        if (!this.validate()) {
          e.preventDefault()
        }
        return true
      },
      validate () {
        return [
          this.$refs.inputEmail.validate(),
          this.$refs.inputFname.validate(),
        ].every(x => x)
      },
    },
  }
</script>
