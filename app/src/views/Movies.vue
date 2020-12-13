<template>
  <div>
      <h1>Peliculas</h1>
      <b-button variant="info" class="float-right mb-3" to="/AddMovie">Agregar Pelicula</b-button>
      <Content :fields="campos" :items="allPeliculas"/>
  </div>
</template>

<script>
import{mapActions,mapGetters} from 'vuex'
import Content from '../components/Content.vue'
export default {
    name: 'Movies',
    components:{
        Content
    },
    data(){
        return{
            campos:[
                {key: 'id',label:'Clave'},
                {key: 'titulo',label:'Titulo'},
                {key: 'director',label:'Director'},
                {key: 'anio',label:'Año'},
                {key: 'genero',label:'Genero'},
                {key: 'actions',label:'Acciones'}

            ]
        }
    },
    methods:{
        ...mapActions(['setMovie'])
    },
    created(){
        this.setMovie();
    },
    computed:{
        ...mapGetters(['allMovies'])
    }

}
</script>

<style>

</style>