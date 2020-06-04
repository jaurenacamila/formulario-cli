<template>

  <section class="src-components-lista-usuarios">
     <div class="jumbotron mt-3">
        <h2>Componente Usuarios</h2>
        <hr>

        <button class="btn btn-success mx-3" @click="getUsuarios()">GET</button>
        <button class="btn btn-info mx-3" @click="postUsuario()">POST</button>

        <div class="media alert alert-info mt-3" v-for="(usuario, index) in usuarios" :key="index">
          <img :src="usuario.foto" width="330" :style="{'border-radius': '20px'}" :alt="usuario.nombre">
          <div class="media body ml-3">
            <ul>
            <h5><u>Usuario {{index + 1}} - ID: {{ usuario.id }} - creado: {{ usuario.createAt }}</u></h5>
            <br>
              <p>Nombre: <b>{{ usuario.nombre }}</b></p>
              <p>Descripcion: <i>{{  usuario.descripcion }}</i></p>
              <p>Comentarios: {{  usuario.comentarios }}</p>
              <p>Coordenadas: <i><b>{{  usuario.coordenadas }}</b></i></p>
              <p>Dirección: <i><u>{{  usuario.direccion }}</u></i></p>

            <button class="btn btn-warning m-3" @click="putUsuario(usuario.id)">PUT</button>
            <button class="btn btn-danger m-3" @click="deleteUsuario(usuario.id)">DELETE</button>

             </ul>

          </div> 
        </div>

        <hr>
        
     </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-lista-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-lista-usuarios {

  }
</style>
