<template>
  <div>
    {{hola}}
    <b-table striped bordered :items="itemssss" :fields="fields">

      <template #cell(actions)="data">
        <slot name="actions" :item="data"></slot>
      </template>
      
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    hola: {
      type: String
    },
    itemssss: {
      type: Array,
    },
    fields: Array,
  },
};
</script>

<style>
</style>