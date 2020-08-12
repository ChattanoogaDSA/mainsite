<template>
  <dsa-page>
    <div class="content container-center px-4">
      <h2>
        {{event.name}}
      </h2>
      <h3>
        {{ formattedDates }}
      </h3>

      <div v-html="event.content"></div>
    </div>
  </dsa-page>
</template>

<script>
  import DsaPage from '~/layouts/Page'

  export default {
    components: {
      DsaPage,
    },
    metaInfo () {
      return {
        event: this.event.name
      }
    },
    computed: {
      event () {
        return this.$page.event
      },
      formattedDates () {

        const d = new Date(this.event.date)
        const date = d.toLocaleDateString(undefined, {
          weekday: 'short',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })

        const times = []
        const start = new Date(this.event.startTime)
        times.push(start.toLocaleTimeString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
          dayPeriod: 'short',
        }).replace(/\s/, '').toLowerCase())
        if (this.event.endTime) {
          const end = new Date(this.event.endTime)
          times.push(end.toLocaleTimeString(undefined, {
            hour: 'numeric',
            minute: 'numeric',
            dayPeriod: 'short',
          }).replace(/\s/, '').toLowerCase())
        }

        return `${date} ${times.join(' - ')}`
      },
    }
  }
</script>

<page-query>
  query ($id: ID!) {
    event (id: $id) {
      id
      name
      date
      startTime
      endTime
      content
    }
  }
</page-query>