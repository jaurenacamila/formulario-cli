<template>

  <section class="src-components-lista-usuarios">
     <div class="jumbotron mt-3">
        <h2>Usuarios</h2>
        <hr>

        <button class="btn btn-dark mx-3" @click="getUsuarios()">MOSTRAR LA LISTA</button>

        <div class="media alert alert-info mt-3" v-for="(usuario, index) in usuarios" :key="index">
          <div class="media body ml-3">
            <ul>
             <h5><u>Usuario {{index + 1}} - ID: {{ usuario.id }}</u></h5>
             <br>
              <p>Nombre: {{ usuario.nombre }}</p>
              <p>Edad: {{ usuario.edad }}</p>
              <p>Email: {{ usuario.email }}</p>

             <button class="btn btn-danger m-3" @click="deleteUsuario(usuario.id)">ELIMINAR</button>
            </ul>

          </div> 
        </div>

        <hr>
        
     </div>

  </section>

</template>

<script lang="js">

  import { urlPosts } from '../urls'
  

  export default  {
    name: 'src-components-lista-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        usuarios : []

      }
    },
    methods: {

   
      getUsuarios(){
          this.axios.get(urlPosts)
          .then(res =>{
          console.log(res.data)
          this.usuarios = res.data
      })
      .catch(error =>{
        console.log('Error', error)
      })
      },

  deleteUsuario(id){
         this.axios.delete(urlPosts+id)
          .then(res =>{
          console.log(res.data)
     
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)

         this.usuarios.splice(offset, 1)
      })
      .catch(error =>{
        console.log('Error DELETE', error)
      })
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-lista-usuarios {

  }
  .jumbotron {
  background-color: rgb(177, 65, 0);
  color: white;
}
hr {
  background-color: white;
}
.media {
  background-color: rgb(255, 142, 77);
  color: white;
}
</style>
