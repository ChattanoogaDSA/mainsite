<template>
  <form ref="form"
        class="container-center px-4"
        action="https://ajax-send"
        @submit.prevent="onSubmit" >

    <input class="offscreen" type="text" name="b_30e8b4a961e3a2a2ecf92c181_70c3b63a7d" tabindex="-1" />

    <div class="flex flex-col md:flex-row">
      <dsa-form-input class="mr-0 md:mr-2 w-full md:w-1/2 xl:w-1/3"
                      label="Email Address"
                      type="email"
                      name="EMAIL"
                      required />
      <dsa-form-input class="w-full md:w-1/2 xl:w-1/3"
                      label="First Name"
                      type="text"
                      name="FNAME"
                      required />
    </div>

    <button type="submit" class="mt-2 btn">
      Subscribe
    </button>

  </form>
</template>

<script>
  import DsaFormInput from '~/components/FormInput.vue'
  export default {
    components: {
      DsaFormInput,
    },
    computed: {
      formSubmitUrl () {
        return `https://facebook.us15.list-manage.com/subscribe/post-json?u=30e8b4a961e3a2a2ecf92c181&amp;id=70c3b63a7d&c=?`
      },
    },
    methods: {
      onSubmit () {
        console.log('sending', this.formSubmitUrl)
      },
    },
  }
</script>
