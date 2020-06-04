<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
        <h1>FORMULARIO</h1>
        <hr>
        <Navbar />
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color:#2c3e50;
  font-family: helvetica
}

</style>
