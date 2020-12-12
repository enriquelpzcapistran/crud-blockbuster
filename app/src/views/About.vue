<template>
  <div>
      <h1>Agregar un genero</h1>
      <b-form @submit.prevent="guardarGenero">
          <Input
          v-model="genero.genero"
          label="Genero Nombre"
          id="Genero"
          placeholder="Ingresar un genero nuevo"
          mensajeError="Información obligatoria"
          :error="erroresValidacion && !validacionGenero"
          class="mb-2"
          />
          <b-button type="submit" variant="outline-primary" class="float-right mt-3">Guardar</b-button>
      </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
export default {
    name: 'AddGenre',
    components:{
      Input
    },
    data(){
      return{
        genero:{
          genero: ''
        },
        erroresValidacion: false
      }
    },
    computed:{
        validacionGenero(){
            return (
                this.genero.genero !== undefined &&
                this.genero.genero.trim() !== ''
            )
        }
    },
       methods:{
        ...mapActions(['agregarGenero']),
        guardarGenero(){
            if(this.validacionGenero){
             this.erroresValidacion = false
             this.agregarGenero({
                 params: this.genero,
                 onComplete: (response)=>{
                     this.$notify({
                        type:'success',
                        title: response.data.mensaje
                    });
                    this.$router.push({
                        name: 'Generos'
                    })
                 },
                 onError:(error)=>{
                   this.$notify({
                        type:'error',
                        title: error.response.data.mensaje
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