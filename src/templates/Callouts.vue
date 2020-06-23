<template>
  <div>
    <template v-for="co in callouts">
      <dsa-callout v-if="co.template === 'calloutfieldssingle'" class="my-16">
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope" v-bind:co="co.callout" />
        </template>
      </dsa-callout>
      <dsa-callout-grid v-if="co.template === 'calloutfieldsgrid'" class="my-16">
        <dsa-callout v-for="(item, i) in co.callouts" :key="i" tight>
          <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope" v-bind:co="item" />
          </template>
        </dsa-callout>
      </dsa-callout-grid>
    </template>
  </div>
</template>

<script>
  // Note, this isn't a real gridsome template, but it's a component
  // that sits close to the data so, we're keeping it here

  import DsaCallout from '~/components/Callout'
  import DsaCalloutGrid from '~/components/CalloutGrid'

  export default {
    props: {
      callouts: Array,
    },
    components: {
      DsaCallout,
      DsaCalloutGrid,
    },
  }
</script>