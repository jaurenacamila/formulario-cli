import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue";
import ListaUsuarios from "./components/ListaUsuarios.vue";

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [

      {path: '/formulario', component: Formulario},
      {path: '/listaUsuarios', component: ListaUsuarios}
    ]
  })