<template>
  <div>
      <h1>Generos</h1>
      <b-button variant="primary" class="float-right mb-3" to="/AddGenre">Agregar Genero</b-button>
      <Content :fields="campos" :items="allGenre">
          <template slot="actions" slot-scope="{ item }">
      <b-button size="sm" variant="danger" 
      @click="onEliminar(item)">
        Eliminar
      </b-button>
    </template>
      </Content>
  </div>
</template>

<script>
import{mapActions,mapGetters} from 'vuex'
import Content from '../components/Content.vue'
export default {
    name: 'Genres',
    components:{
        Content
    },
     data(){
        return{
            campos:[
                {key: 'id',label:'Clave'},
                {key: 'genero',label:'Genero'},
                {key: 'actions',label:'Acciones'}

            ]
        }
    },
     methods:{
        ...mapActions(['setGenre', 'deleteGenre']),
        onEliminar(item){
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
                id: item.item.id,
                onComplete:(response)=>{
                    this.$notify({
                        type: 'success',
                        title: response.data.mensaje
                    })
                    this.setGenre();
                },
                onError:(error)=>{
                    this.$notify({
                        type: 'error',
                        title: error.response.data.mensaje
                    })
                }
            })

            }
          })
        }
    },
    created(){
        this.setGenre();
    },
    computed:{
        ...mapGetters(['allGenres'])
    }


}
</script>

<style>

</style>