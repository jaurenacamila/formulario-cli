<template>
  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h3>INGRESO DE UN NUEVO USUARIO</h3>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">

        <label for="nombre">Nombre</label>
         <input 
          type="text" 
          id="nombre" 
          class="form-control" 
          autocomplete="off" 
          name="nombre"
          v-model.trim="formData.nombre" 
          required 
          :minlength="nombreCharMin"
          :maxlength="nombreCharMax"
          > 

          <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger">Campo nombre requerido</div>
              <div slot="minlenght" class="alert alert-danger">Debe ingresar como minimo {{nombreCharMin}} letras</div>
              <div slot="maxlength" class="alert alert-danger">Máximo de carateres alcanzados ({{nombreCharMax}} letras)</div>
          </field-messages>

      </validate>
      <br>

      <validate tag="div">
        <label for="edad">Edad</label>
        <input type="number" 
               id="edad" 
               class="form-control" 
               autocomplete="off" 
               name="edad" 
               v-model.number="formData.edad" 
               required 
               :min="edadMin" 
               :max="edadMax"
        >
      
      <field-messages name="edad" show="$dirty">
        <div slot="required" class="alert alert-danger">Campo edad requerido</div>
        <div slot="min" class="alert alert-danger">La edad minima es {{edadMin}}</div>
        <div slot="max" class="alert alert-danger">La edad maxima es {{edadMax}}</div>        
      </field-messages>
      
      </validate>
      <br>

      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control" 
          autocomplete="off" 
          name="email" 
          v-model="formData.email" 
          required
          >

        
        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
          <div slot="email" class="alert alert-danger my-1">Email no valido</div>
      </field-messages>

      </validate>
      <br>

      <button class="btn btn-dark my-4" :disabled="formState.$invalid || enviando" type="submit">Enviar</button>

    </vue-form>
   
  </div>
  </section>

</template>

<script lang="js">

import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
      formState:{},
      formData: this.getInitialData(),
      edadMin:18,
      edadMax:120,
      enviando: false,
      nombreCharMin: 5,
      nombreCharMax: 15
      }
    },
    methods: {
      getInitialData() {
      return{
        nombre: '',
        edad:'',
        email: ''
      }
    },
    enviar(){
      this.enviando = true
      console.log(this.formData)
      this.axios.post(urlPosts, this.formData,{
        'contente-type' : 'application/json'
      })
      .then( res =>{
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset() 
        this.enviando = false
      })
      .catch(error =>{
        console.log('ERROR POST',error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {
  }
  .jumbotron {
    background-color: rgb(177, 65, 0);
    color: white;
  }
  hr {
    background-color: white;
  }
  h3{
    font-family: helvetica;
  }
</style>
