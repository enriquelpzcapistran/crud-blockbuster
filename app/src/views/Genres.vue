<template>
  <div>
      <h1>Generos</h1>
      <b-button variant="primary" class="float-right mb-3" to="/add_genre">Agregar Genero</b-button>
      <Content :fields="campos" :itemssss="allGeneros">
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
                {key: 'ID',label:'Clave'},
                {key: 'Genero',label:'Genero'},
                {key: 'actions',label:'Acciones'}

            ]
        }
    },
     methods:{
        ...mapActions(['setGenero', 'deleteGenre']),
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
    created(){
        this.setGenero();
    },
    computed:{
        ...mapGetters(['allGeneros'])
    }


}
</script>

<style>

</style>