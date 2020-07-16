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
      <input class="offscreen" type="text" :name="mailchimpDecoyName" tabindex="-1" />

      <button type="submit" class="mt-2 btn">
        Subscribe
      </button>

    </form>

    <p v-if="submitting && !submitted" class="font-bold text-base tracking-wider uppercase text-black-60">
      <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin"></fa-icon> Saving...
    </p>
    <p v-if="submitted" class="font-bold text-base md:text-xl">
      Thank you for subscribing to our email list. You'll hear from us soon!
    </p>
    <p v-if="submissionError" class="mt-4 text-base md:text-xl text-red-100">
      {{submissionError}}
    </p>

  </div>

</template>

<script>
  import {FormSubmitError, default as submitMailchimpForm} from './mailchimp'

  import DsaFormInput from '~/components/FormInput.vue'

  export default {
    components: {
      DsaFormInput,
    },
    data () {
      return {
        submitting: false,
        submitted: false,
        submissionError: false,
        mailchimpFormId: '568b434ef4d56d01e40c874e0&amp;id=00174e30acx',
        mailchimpDecoyName: 'b_568b434ef4d56d01e40c874e0_00174e30ac',
      }
    },
    methods: {
      async onSubmit () {
        if (!this.validate()) {
          return
        }
        this.submitting = true

        try {
          await submitMailchimpForm(
            this.mailchimpFormId,
            this.mailchimpDecoyName,
            this.$refs.inputEmail.trimmedValue,
            this.$refs.inputFname.trimmedValue)
          this.submitted = true
        } catch (error) {
          if (error instanceof FormSubmitError) {
            this.submissionError = error
          } else {
            this.submissionError = 'There was an unexpected error when submitting the form'
            console.error(error)
          }
        } finally {
          this.submitting = false
        }
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
