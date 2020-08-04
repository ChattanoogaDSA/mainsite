<template>
  <dsa-page>
    <div class="container-center px-4">
      <div ref="calendarWrap" v-if="calendarReady">
        <full-calendar ref="fc"
                       :plugins="calendarPlugins"
                       :events="calendarEvents"
                       :header="calendarHeader" />
      </div>
    </div>
  </dsa-page>
</template>

<script>
  import DsaPage from '~/layouts/Page'

  export default {
    components: {
      DsaPage,
      async FullCalendar () {
        if (!process.isClient) {
          return {}
        }
        return import('@fullcalendar/vue')
      },
    },
    metaInfo: {
      title: 'Chattanooga DSA Events',
    },
    data () {
      return {
        calendarReady: false,
      }
    },
    async mounted () {
      if (!process.isClient) {
        return
      }

      this.calPlugins = (await Promise.all([
        import('@fullcalendar/daygrid'),
        import('@fullcalendar/timegrid'),
        import('@fullcalendar/list'),
      ])).map(p => p.default)

      this.calendarReady = true
    },
    computed: {
      calendarPlugins () {
        return this.calPlugins
      },
      calendarHeader () {
        return {
          left: 'title',
          center: '',
          right: 'today prev,next dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        }
      },
      calendarEvents () {
        return this.events.map(e => {
          const out = {
            id: e.id,
            title: e.name,
            url: e.path,
          }
          const date = new Date(Date.parse(e.date))
          out.start = new Date(date.getFullYear(), date.getMonth(), date.getDate())

          if (e.startTime) {
            const start = new Date(Date.parse(e.startTime))
            out.start.setHours(start.getHours(), start.getMinutes())
          }

          if (e.endTime) {
            const end = new Date(Date.parse(e.endTime))
            out.end = new Date(date.getFullYear(), date.getMonth(), date.getDate())
            out.end.setHours(end.getHours(), end.getMinutes())
          }

          return out
        })
      },
      events () {
        return this.$page.allEvent.edges.map(e => e.node)
      },
    },
  }
</script>

<page-query>
  query {
    allEvent {
      edges {
        node {
          id
          path
          name
          date
          startTime
        }
      }
    }
  }
</page-query>