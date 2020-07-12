<template>
  <div class="container-center px-4">
    <form ref="form"
          v-if="!submitted && !submitting"
          action="https://ajax-send"
          @submit.prevent="onSubmit" >

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
                        name="email"
                        ref="inputEmail"
                        required />
        <dsa-form-input class="w-full md:w-1/2 xl:w-1/3"
                        label="First Name"
                        type="text"
                        name="fname"
                        ref="inputFname"
                        required />
      </div>

      <button type="submit" class="mt-2 btn">
        Subscribe
      </button>

    </form>

    <p v-if="submitting && !submitted" class="font-bold text-base tracking-wider uppercase text-black-60">
      Saving...
    </p>
    <p v-if="submitted" class="font-bold text-base md:text-xl">
      Thank you for subscribing to our email list. You'll hear from us soon!
    </p>

  </div>

</template>

<script>
  import submitMailchimpForm from './mailchimp'

  import DsaFormInput from '~/components/FormInput.vue'

  export default {
    components: {
      DsaFormInput,
    },
    data () {
      return {
        submitting: false,
        submitted: false,
      }
    },
    methods: {
      async onSubmit () {
        if (!this.validate()) {
          return
        }
        this.submitting = true

        await submitMailchimpForm(
          this.$refs.inputEmail.trimmedValue,
          this.$refs.inputFname.trimmedValue)

        this.submitting = false
        this.submitted = true
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
