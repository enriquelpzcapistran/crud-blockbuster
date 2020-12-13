<template>
  <div>
      <h1>Agregar un genero</h1>
      <b-form @submit.prevent="saveGenre">
          <Input
            v-model="genero.Genero"
            label="Nombre del genero"
            id="genero"
            placeholder="Ingrese el nuevo genero"
            mensajeError="El nombre del genero es obligatorio"
            :error="erroresValidacion && !validacionGenero"
            class="mb-2"
          />
          <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
      </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
    name: 'AddGenre',
    components:{
      Input
    },
    data(){
      return{
        genero:{
          Genero: ''
        },
        erroresValidacion: false
      }
    },
    computed:{
        validacionGenero(){
            return (
                this.genero.Genero !== undefined &&
                this.genero.Genero.trim() !== ''
            )
        }
    },
       methods:{
        ...mapActions(['addGenero']),
        saveGenre(){
            if(this.validacionGenero){
             this.erroresValidacion = false
             this.addGenero({
                 params: this.genero,
                 onComplete: (response)=>{
                     this.$notify({
                        type:'success',
                        title: response.data.msg
                    });
                    this.$router.push({
                        name: 'Genre'
                    })
                 },
                 onError:(error)=>{
                   this.$notify({
                        type:'error',
                        title: error.response.data.msg
                    });  
                 }
             })   
            } else{
                this.erroresValidacion = true
            }
        }
    }

}
</script>

<style>

</style>