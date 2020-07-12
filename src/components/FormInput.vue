<template>
  <div>
    <label class="block text-xs text-red-100 uppercase font-bold tracking-widest"
           :for="name" v-html="label">

    </label>

    <input class="p-2 w-full bg-white-100 border-solid border-2"
           :class="error ? 'border-red-100': 'border-black-100'"
           :name="name"
           :id="name"
           :type="type"
           required="required"
           v-on="mergedListeners"
           v-model="value"
           v-bind="$attrs" />

    <div v-if="error" class="text-white-100 bg-red-100 pl-1 font-bold text-xs">{{error}}</div>
  </div>
</template>

<script>
  // https://emailregex.com/
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  export default {
    props: {
      label: {type: String, required: true},
      name: {type: String, required: true},
      required: {type: Boolean, default: false},
      type: {type: String, default: 'text'},
    },
    data () {
      return {
        error: false,
        value: '',
      }
    },
    computed: {
      trimmedValue () {
        return this.value.trim()
      },
      mergedListeners () {
        return {
          ...this.$listeners,
          focus: this.clearError.bind(this)
        }
      }
    },
    methods: {
      validate () {
        if (this.required) {
          if (this.trimmedValue === '') {
            this.error = "This field is required"
            return false
          }
        }
        if (this.type === 'email') {
          if (!emailRegex.test(this.trimmedValue)) {
            this.error = "Please enter a valid email address"
            return false
          }
        }
        return true
      },
      clearError () {
        this.error = false
      },
    }
  }
</script>