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
        console.log('Error HTTP', error)
      })
      },

    postUsuario(){
      let usuario = {
        nombre: "Pamela",
        foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png",
        descripcion: "Alumno Vue.js",
        coordenadas: "123456",
        comentarios: "Hello!",
        direccion: "CABA 456"
      }
      this.axios.post(urlPosts, usuario, {
          'content-type' : 'application/json'
      })
      .then( res => {
        let usuario = res.data
          console.log(usuario)
          //this.getUsuarios()
          this.usuarios.push(usuario)
      })
      .catch(error =>{
        console.log('Error POST HTTP', error)
      })
    },

  putUsuario(id){
      let usuario = {
        nombre: "Maria",
        descripcion: "Alumno Vue.js",
        coordenadas: "123456",
        comentarios: "Hola como estas?",
        direccion: "CABA 123"
      }
      this.axios.put(urlPosts+id, usuario, {
          'content-type' : 'application/json'
      })
      .then( res => {
        let usuario = res.data
          console.log(usuario)
          this.getUsuarios()
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)
          this.usuarios[offset] = usuario
         // this.usuarios.splice(offset, 1, usuario)
          
      })
      .catch(error =>{
        console.log('Error PUT HTTP', error)
      })
    },

       /* --------------*/
      /* API REST DELETE */
      /* ------------ */
  deleteUsuario(id){
         this.axios.delete(urlPosts+id)
          .then(res =>{
          console.log(res.data)
           //this.getUsuarios()
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)
         // this.usuarios[offset] = usuario
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
