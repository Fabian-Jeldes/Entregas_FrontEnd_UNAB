<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="mx-auto mt-5" elevation="8">
          <v-card-title class="text-h3 text-center primary white--text py-6">
            Bienvenido
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12">
                <p class="text-h5 text-center mb-6">
                  Exploración de Librerías UI para Vue.js y Server Side Rendering
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-card color="blue-lighten-5" elevation="2" class="h-100">
                  <v-card-title class="text-h5">
                    <v-icon left color="primary" class="mr-2">mdi-palette</v-icon>
                    Actividad 1
                  </v-card-title>
                  <v-card-text>
                    <p class="text-h6 mb-2">Librerías UI para Vue.js</p>
                    <p>
                      Comparativa detallada de las principales librerías de interfaces de usuario 
                      complementarias para Vue.js:
                    </p>
                    <ul class="ml-4 mt-3">
                      <li>BootstrapVue</li>
                      <li>Vuetify</li>
                      <li>Buefy</li>
                      <li>Element UI</li>
                    </ul>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" to="/ui-libraries" block>
                      Ver Comparativa
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card color="green-lighten-5" elevation="2" class="h-100">
                  <v-card-title class="text-h5">
                    <v-icon left color="green-darken-2" class="mr-2">mdi-server</v-icon>
                    Actividad 2
                  </v-card-title>
                  <v-card-text>
                    <p class="text-h6 mb-2">Server Side Rendering (SSR)</p>
                    <p>
                      Exploración de frameworks para renderizado en el servidor y su 
                      implementación con Nuxt.js:
                    </p>
                    <ul class="ml-4 mt-3">
                      <li>¿Qué es SSR?</li>
                      <li>Ventajas y desventajas</li>
                      <li>Nuxt.js y Quasar Framework</li>
                      <li>Casos de uso</li>
                    </ul>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="green-darken-2" to="/ssr" block>
                      Explorar SSR
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-6">
              <v-col cols="12">
                <v-alert type="info" variant="tonal">
                  <v-alert-title class="text-h6 mb-2">Objetivo del Proyecto</v-alert-title>
                  <p>
                    Este proyecto tiene como objetivo reconocer y comparar distintas librerías de 
                    interfaces de usuario para Vue.js, así como comprender el concepto de Server Side 
                    Rendering y sus aplicaciones prácticas.
                  </p>
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
