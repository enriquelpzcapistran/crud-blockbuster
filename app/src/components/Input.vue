<template>
  <div>
      <label :for="id">{{label}}</label>
      <input :id="id"
             class="form-control"
             :type="type"
             :maxlength="maxlength"
             :value="value"
             :disabled="disabled"
             :placeholder="placeholder"
             @input="$emit('input', $event.target.value)"/>
    <span v-if="error" class="p-3 mb-2 bg-warning text-dark">{{msgError}}</span>
  </div>
</template>

<script>
export default {
    name: 'Input',
    props:{
        id:{
            type: [String,Number],
            default: ''
        },
        label:{
            type:String,
            default:''
        },
        type: {
            type: String,
            default: 'text'
        },
        maxlength: {
            type: [String,Number],
            default: 100
        },
        value:{
            type:[String,Number],
            default:''
        },
        disabled:{
            type: Boolean,
            default: false
        },
         placeholder:{
            type: String,
            default: 'Ingrese dato'
        },
        msgError:{
            type: String,
            default: 'Campo Obligatorio'
        },
        error:{
            type: Boolean,
            default: false
        }
    }

}
</script>

<style>

</style>