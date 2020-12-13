<template>
  <div>
      <h1>Peliculas</h1>
<<<<<<< HEAD
      <b-button variant="info" class="float-right mb-3" to="/add_movie">Agregar Pelicula</b-button>
      <Content :fields="campos" :itemssss="allPeliculas">
          <template slot="actions" slot-scope="{ item }">
                <b-button size="sm" variant="danger" 
                @click="onEliminar(item)">
                    Eliminar
                </b-button>
        </template>
      </Content>
=======
      <b-button variant="primary" class="float-right mb-3" to="/agregar_pelicula">Agregar Pelicula</b-button>
      <Tabla :fields="campos" :items="allPeliculas"/>
>>>>>>> main
  </div>
</template>

<script>
import{mapActions,mapGetters} from 'vuex'
import Content from '../components/Content.vue'
export default {
    name: 'Peliculas',
    components:{
        Content
        
    },
    methods:{
        ...mapActions(['setMovie', 'deleteMovie']),
        onEliminar(item){
            console.log(item);
            this.$bvModal.msgBoxConfirm('Esta opción es de forma permanente.', {
          title: '¿Seguro de eliminar el genero?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value){
                 this.deleteGenre({
                id: item.item.ID,
                onComplete:(response)=>{
                    this.$notify({
                        type: 'success',
                        title: response.data.msg
                    })
                    this.setGenre();
                },
                onError:(error)=>{
                    this.$notify({
                        type: 'error',
                        title: error.response.data.msg
                    })
                }
            })

            }
          })
        }
    },
    data(){
        return{
            campos:[
                {key: 'ID',label:'Clave'},
                {key: 'Titulo',label:'Titulo'},
                {key: 'Director',label:'Director'},
                {key: 'Anio',label:'Año'},
                {key: 'Genero',label:'Genero'},
                {key: 'actions',label:'Acciones'}

            ]
        }
    },
<<<<<<< HEAD
   methods:{
        ...mapActions(['setMovie', 'deleteMovie']),
        onEliminar(item){
            console.log(item);
            this.$bvModal.msgBoxConfirm('Esta opción es de forma permanente.', {
          title: '¿Seguro de eliminar la pelicula?',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value){
                 this.deleteGenre({
                id: item.item.ID,
                onComplete:(response)=>{
                    this.$notify({
                        type: 'success',
                        title: response.data.msg
                    })
                    this.setGenre();
                },
                onError:(error)=>{
                    this.$notify({
                        type: 'error',
                        title: error.response.data.msg
                    })
                }
            })

            }
          })
        }
    },
    created(){
        this.setGenero();
=======
    methods:{
        ...mapActions(['setPelicula'])
    },
    created(){
        this.setPelicula();
>>>>>>> main
    },
    computed:{
        ...mapGetters(['allPeliculas'])
    }

}
</script>

<style>

</style>