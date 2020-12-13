<template>
  <div>
      <h1>Agregar una pelicula</h1>
      <b-form @submit.prevent="addMovie">
          <Input
          v-model="pelicula.Titulo"
          label="Titulo"
          id="Titulo"
          placeholder="Ingrese el titulo de la pelicula"
          mensajeError="El titulo es obligatorio"
          maxlength="120"
          :error="erroresValidacion && !validacionTitulo"
          class="mb-2"/>
           <Input
           v-model="pelicula.Director"
          label="Director"
          id="Director"
          maxlength="100"
          placeholder="Ingrese el nombre del director"
          mensajeError="El autor es obligatorio"
          :error="erroresValidacion && !validacionDirector"
          class="mb-2"/>
           <Input
           v-model="pelicula.Anio"
          label="Anio"
          id="Anio"
          maxlength="4"
          placeholder="Ingrese el año de lanzamiento"
          mensajeError="El año es obligatorio"
          :error="erroresValidacion && !validacionAnio"
          class="mb-2"/>
          <Input
        v-model="pelicula.Genero"
          label="Genero"
          id="Genero"
          placeholder="Ingrese el genero de la pelicula"
          mensajeError="El genero es obligatorio"
          :error="erroresValidacion && !validacionGenero"
          class="mb-2"/>
          <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
      </b-form>
       
  </div>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
export default {
    name: 'addMovie',
    components:{
        Input
    },
    data(){
        return{
            pelicula:{
                Titulo: '',
                Director: '',
                Anio: '',
                Genero: ''
            },
            erroresValidacion: false
        }
    },
    computed:{
        validacionTitulo(){
            return(
                this.pelicula.Titulo !== undefined &&
                this.pelicula.Titulo.trim() !== ''
            )
        },
        validacionDirector(){
            return(
                this.pelicula.Director !== undefined &&
                this.pelicula.Director.trim() !== ''
            )
        },
        validacionAnio(){
            return(
                this.pelicula.Anio !== undefined &&
                this.pelicula.Anio.trim() !== '' &&
                this.pelicula.Anio.length == 4
            )
        },
        validacionGenero(){
            return(
                this.pelicula.Genero !== undefined &&
                this.pelicula.Genero.trim() !== ''
            )
        }
    },
    methods:{
        ...mapActions(['addMovie']),
        addMovie(){
            if(this.validacionTitulo && this.validacionDirector 
            && this.validacionAnio && this.validacionGenero){
             this.erroresValidacion = false
             this.addMovie({
                 params: this.pelicula,
                 onComplete: (response)=>{
                     this.$notify({
                        type:'success',
                        title: response.data.mensaje
                    });
                    this.$router.push({
                        name: 'Movies'
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