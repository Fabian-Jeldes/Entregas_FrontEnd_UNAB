<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-6">Comparativa de Librerías UI para Vue.js</h1>
      </v-col>
    </v-row>

    <!-- Tabla Comparativa Principal -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-primary text-h5 white--text">
            <v-icon left class="mr-2">mdi-table-large</v-icon>
            Comparación General
          </v-card-title>
          <v-card-text class="pa-0">
            <v-table class="elevation-1" fixed-header height="auto">
              <thead>
                <tr>
                  <th class="text-left bg-blue-grey-lighten-4">Característica</th>
                  <th class="text-left bg-orange-lighten-4">BootstrapVue</th>
                  <th class="text-left bg-blue-lighten-4">Vuetify</th>
                  <th class="text-left bg-cyan-lighten-4">Buefy</th>
                  <th class="text-left bg-indigo-lighten-4">Element UI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-weight-bold">Basado en</td>
                  <td>Bootstrap 4</td>
                  <td>Material Design</td>
                  <td>Bulma CSS</td>
                  <td>Diseño Propio</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Número de Componentes</td>
                  <td>85+ componentes</td>
                  <td>80+ componentes</td>
                  <td>40+ componentes</td>
                  <td>60+ componentes</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Tamaño del Bundle</td>
                  <td>~200KB</td>
                  <td>~250KB</td>
                  <td>~100KB</td>
                  <td>~220KB</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Personalización</td>
                  <td>Media</td>
                  <td>Alta</td>
                  <td>Media-Alta</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Curva de Aprendizaje</td>
                  <td>Baja (si conoces Bootstrap)</td>
                  <td>Media</td>
                  <td>Baja</td>
                  <td>Media</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Compatibilidad Vue</td>
                  <td>Vue 2 (BootstrapVue 3 para Vue 3)</td>
                  <td>Vue 2 y Vue 3</td>
                  <td>Vue 2 y Vue 3</td>
                  <td>Vue 2 principalmente</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Documentación</td>
                  <td>Excelente</td>
                  <td>Excelente</td>
                  <td>Buena</td>
                  <td>Buena</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Comunidad</td>
                  <td>Grande</td>
                  <td>Muy Grande</td>
                  <td>Media</td>
                  <td>Grande</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tarjetas Individuales con Detalles -->
    <v-row class="mt-6">
      <v-col cols="12" md="6" lg="3" v-for="lib in libraries" :key="lib.name">
        <v-card :color="lib.color" elevation="6" class="h-100">
          <v-card-title class="text-h5 white--text">
            <v-icon left size="large" class="mr-2">{{ lib.icon }}</v-icon>
            {{ lib.name }}
          </v-card-title>
          <v-card-text class="white pa-4">
            <div class="mb-4">
              <h3 class="text-h6 mb-2">
                <v-icon color="green">mdi-check-circle</v-icon>
                Ventajas
              </h3>
              <ul class="ml-4">
                <li v-for="(pro, index) in lib.pros" :key="index" class="mb-1">
                  {{ pro }}
                </li>
              </ul>
            </div>
            <v-divider class="my-3"></v-divider>
            <div>
              <h3 class="text-h6 mb-2">
                <v-icon color="red">mdi-alert-circle</v-icon>
                Desventajas
              </h3>
              <ul class="ml-4">
                <li v-for="(con, index) in lib.cons" :key="index" class="mb-1">
                  {{ con }}
                </li>
              </ul>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-chip :color="lib.chipColor" text-color="white" class="ma-2">
              {{ lib.bestFor }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Casos de Uso Recomendados -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-green-darken-1 text-h5 white--text">
            <v-icon left class="mr-2">mdi-lightbulb-on</v-icon>
            Casos de Uso Recomendados
          </v-card-title>
          <v-card-text class="pa-4">
            <v-expansion-panels>
              <v-expansion-panel v-for="useCase in useCases" :key="useCase.title">
                <v-expansion-panel-title>
                  <strong>{{ useCase.title }}</strong>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p class="mb-2"><strong>Librería Recomendada:</strong> {{ useCase.library }}</p>
                  <p><strong>Razón:</strong> {{ useCase.reason }}</p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Conclusión -->
    <v-row class="mt-6 mb-6">
      <v-col cols="12">
        <v-alert type="success" prominent variant="tonal">
          <v-alert-title class="text-h6 mb-3">Conclusión de la Evaluación</v-alert-title>
          <p class="text-body-1">
            <strong>Vuetify</strong> se destaca como la librería más completa y versátil para proyectos 
            profesionales que requieren una interfaz moderna basada en Material Design. Ofrece la mejor 
            combinación de componentes, personalización y documentación.
          </p>
          <p class="text-body-1 mt-3">
            <strong>BootstrapVue</strong> es ideal para equipos familiarizados con Bootstrap o proyectos 
            que requieren una implementación rápida con diseño conocido.
          </p>
          <p class="text-body-1 mt-3">
            <strong>Buefy</strong> es perfecto para aplicaciones ligeras que priorizan el rendimiento y 
            un diseño minimalista.
          </p>
          <p class="text-body-1 mt-3">
            <strong>Element UI</strong> es excelente para aplicaciones empresariales que necesitan una 
            interfaz profesional y consistente.
          </p>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UILibraries',
  data() {
    return {
      libraries: [
        {
          name: 'BootstrapVue',
          color: 'orange-darken-2',
          chipColor: 'orange',
          icon: 'mdi-bootstrap',
          pros: [
            'Familiaridad con Bootstrap',
            'Gran cantidad de componentes',
            'Excelente documentación',
            'Grid system robusto',
            'Compatible con Vue 3 (v3)'
          ],
          cons: [
            'Bundle relativamente grande',
            'Menos moderno visualmente',
            'Personalización limitada del tema',
            'Dependencia de jQuery (v2)'
          ],
          bestFor: 'Proyectos Bootstrap existentes'
        },
        {
          name: 'Vuetify',
          color: 'blue-darken-2',
          chipColor: 'blue',
          icon: 'mdi-vuetify',
          pros: [
            'Material Design completo',
            'Altamente personalizable',
            'Excelente documentación',
            'Gran comunidad activa',
            'Componentes complejos listos'
          ],
          cons: [
            'Bundle más grande',
            'Curva de aprendizaje media',
            'Puede ser excesivo para proyectos simples',
            'Opiniones fuertes sobre diseño'
          ],
          bestFor: 'Aplicaciones profesionales completas'
        },
        {
          name: 'Buefy',
          color: 'cyan-darken-2',
          chipColor: 'cyan',
          icon: 'mdi-feather',
          pros: [
            'Muy ligero (~100KB)',
            'Diseño limpio y moderno',
            'Fácil de aprender',
            'Buena documentación',
            'Basado en Flexbox'
          ],
          cons: [
            'Menos componentes disponibles',
            'Comunidad más pequeña',
            'Personalización limitada',
            'Menos actualizaciones recientes'
          ],
          bestFor: 'Aplicaciones ligeras y rápidas'
        },
        {
          name: 'Element UI',
          color: 'indigo-darken-2',
          chipColor: 'indigo',
          icon: 'mdi-hexagon-multiple',
          pros: [
            'Diseño profesional y limpio',
            'Buenos componentes de formulario',
            'Ideal para aplicaciones admin',
            'Buena documentación en inglés',
            'Componentes empresariales'
          ],
          cons: [
            'Principalmente para Vue 2',
            'Menos popular en occidente',
            'Personalización moderada',
            'Comunidad más oriental'
          ],
          bestFor: 'Aplicaciones empresariales/admin'
        }
      ],
      useCases: [
        {
          title: 'Aplicación Web Corporativa con Dashboard',
          library: 'Vuetify',
          reason: 'Ofrece componentes complejos como data tables, charts integration, y un sistema de navegación robusto. Material Design proporciona una apariencia profesional.'
        },
        {
          title: 'Migración de Proyecto Bootstrap Existente',
          library: 'BootstrapVue',
          reason: 'Mantiene la familiaridad con Bootstrap, permite reutilizar conocimientos y estilos existentes, facilitando la transición a Vue.js.'
        },
        {
          title: 'Landing Page o Sitio Web Pequeño',
          library: 'Buefy',
          reason: 'Su tamaño ligero mejora el tiempo de carga, suficientes componentes para páginas simples, y diseño limpio sin complejidad innecesaria.'
        },
        {
          title: 'Sistema de Gestión Interno (ERP/CRM)',
          library: 'Element UI',
          reason: 'Componentes especializados para formularios complejos, tablas de datos, y interfaces administrativas. Diseño enfocado en funcionalidad.'
        },
        {
          title: 'Aplicación Mobile-First Responsive',
          library: 'Vuetify',
          reason: 'Excelente soporte para responsive design, componentes móviles nativos, y sistema de breakpoints bien implementado.'
        },
        {
          title: 'Prototipo Rápido o MVP',
          library: 'Buefy o BootstrapVue',
          reason: 'Permiten desarrollo rápido con componentes predefinidos, documentación clara, y curva de aprendizaje baja para crear prototipos funcionales.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.v-card-text {
  flex-grow: 1;
}
</style>
