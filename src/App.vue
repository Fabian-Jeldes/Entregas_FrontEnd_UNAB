<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5 font-weight-bold">
        Exploración Vue.js - Librerías UI y SSR
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Inicio" to="/"></v-list-item>
        <v-list-item 
          prepend-icon="mdi-palette" 
          title="Librerías UI" 
          to="/ui-libraries">
        </v-list-item>
        <v-list-item 
          prepend-icon="mdi-server" 
          title="Server Side Rendering" 
          to="/ssr">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <v-row justify="center" no-gutters>
        <v-col class="text-center white--text" cols="12">
          <span class="white--text">{{ new Date().getFullYear() }} — Actividad AE5-ABP5</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
