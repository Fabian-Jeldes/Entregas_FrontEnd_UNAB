<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 text-center mb-6">Server Side Rendering (SSR)</h1>
      </v-col>
    </v-row>

    <!-- ¿Qué es SSR? -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" class="mb-6">
          <v-card-title class="bg-primary text-h5 white--text">
            <v-icon left class="mr-2">mdi-information</v-icon>
            ¿Qué es Server Side Rendering?
          </v-card-title>
          <v-card-text class="pa-6">
            <p class="text-body-1 mb-4">
              <strong>Server Side Rendering (SSR)</strong> es una técnica donde el HTML de una aplicación 
              web se genera en el servidor en lugar de en el navegador del cliente. En lugar de enviar un 
              archivo JavaScript grande que construye la página en el navegador, el servidor genera el HTML 
              completo y lo envía al cliente.
            </p>
            <v-divider class="my-4"></v-divider>
            <h3 class="text-h6 mb-3">Proceso de SSR:</h3>
            <v-stepper alt-labels>
              <v-stepper-header>
                <v-stepper-item title="Solicitud" value="1">1</v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item title="Servidor Procesa" value="2">2</v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item title="Genera HTML" value="3">3</v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item title="Envía al Cliente" value="4">4</v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item title="Hidratación" value="5">5</v-stepper-item>
              </v-stepper-header>
            </v-stepper>
            <v-alert type="info" variant="tonal" class="mt-4">
              La <strong>hidratación</strong> es el proceso donde Vue.js toma el HTML renderizado en el 
              servidor y lo convierte en una aplicación interactiva en el cliente.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- SSR vs CSR -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" class="mb-6">
          <v-card-title class="bg-deep-purple-darken-1 text-h5 white--text">
            <v-icon left class="mr-2">mdi-compare</v-icon>
            Comparación: SSR vs Client Side Rendering (CSR)
          </v-card-title>
          <v-card-text class="pa-0">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left bg-blue-grey-lighten-4">Aspecto</th>
                  <th class="text-left bg-green-lighten-4">SSR (Servidor)</th>
                  <th class="text-left bg-orange-lighten-4">CSR (Cliente)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-weight-bold">Primer Renderizado</td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Rápido</v-chip>
                    HTML completo llega inmediatamente
                  </td>
                  <td>
                    <v-chip color="orange" size="small" class="mr-2">Lento</v-chip>
                    Requiere descargar y ejecutar JS
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">SEO</td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Excelente</v-chip>
                    Motores de búsqueda ven contenido completo
                  </td>
                  <td>
                    <v-chip color="orange" size="small" class="mr-2">Regular</v-chip>
                    Puede requerir renderizado especial
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Tiempo hasta Interactividad</td>
                  <td>
                    <v-chip color="orange" size="small" class="mr-2">Medio</v-chip>
                    Visible rápido, interactivo después
                  </td>
                  <td>
                    <v-chip color="orange" size="small" class="mr-2">Variable</v-chip>
                    Todo sucede al mismo tiempo
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Carga del Servidor</td>
                  <td>
                    <v-chip color="red" size="small" class="mr-2">Alta</v-chip>
                    Procesa cada solicitud
                  </td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Baja</v-chip>
                    Solo sirve archivos estáticos
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Complejidad</td>
                  <td>
                    <v-chip color="red" size="small" class="mr-2">Alta</v-chip>
                    Requiere servidor Node.js
                  </td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Baja</v-chip>
                    Simple hosting estático
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Navegación entre páginas</td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Rápida</v-chip>
                    Después de carga inicial
                  </td>
                  <td>
                    <v-chip color="green" size="small" class="mr-2">Rápida</v-chip>
                    Cambios instantáneos
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Ventajas y Desventajas -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card color="green-lighten-5" elevation="4" class="h-100">
          <v-card-title class="text-h5 green-darken-2 white--text">
            <v-icon left class="mr-2">mdi-check-circle</v-icon>
            Ventajas del SSR
          </v-card-title>
          <v-card-text class="pa-4">
            <v-list bg-color="transparent">
              <v-list-item v-for="(advantage, index) in advantages" :key="index">
                <template v-slot:prepend>
                  <v-icon color="green">mdi-check-bold</v-icon>
                </template>
                <v-list-item-title class="font-weight-medium">{{ advantage.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ advantage.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card color="red-lighten-5" elevation="4" class="h-100">
          <v-card-title class="text-h5 red-darken-2 white--text">
            <v-icon left class="mr-2">mdi-alert-circle</v-icon>
            Desventajas del SSR
          </v-card-title>
          <v-card-text class="pa-4">
            <v-list bg-color="transparent">
              <v-list-item v-for="(disadvantage, index) in disadvantages" :key="index">
                <template v-slot:prepend>
                  <v-icon color="red">mdi-close-circle</v-icon>
                </template>
                <v-list-item-title class="font-weight-medium">{{ disadvantage.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ disadvantage.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Nuxt.js -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-green-darken-2 text-h5 white--text">
            <v-icon left class="mr-2">mdi-nuxt</v-icon>
            Nuxt.js - Framework SSR para Vue.js
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">¿Qué es Nuxt.js?</h3>
                <p class="text-body-1 mb-4">
                  Nuxt.js es un framework de alto nivel construido sobre Vue.js que facilita la creación 
                  de aplicaciones universales (SSR), estáticas y SPA. Proporciona una estructura de proyecto 
                  convencional y muchas características listas para usar.
                </p>
                <v-chip color="primary" class="mr-2 mb-2">Vue.js 3</v-chip>
                <v-chip color="primary" class="mr-2 mb-2">SSR</v-chip>
                <v-chip color="primary" class="mr-2 mb-2">SSG</v-chip>
                <v-chip color="primary" class="mr-2 mb-2">Auto-routing</v-chip>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">Características Principales</h3>
                <v-list density="compact">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-folder-network</v-icon>
                    </template>
                    <v-list-item-title>Sistema de rutas basado en archivos</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-code-tags</v-icon>
                    </template>
                    <v-list-item-title>Code splitting automático</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-server-network</v-icon>
                    </template>
                    <v-list-item-title>Server-side rendering</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-file-document-multiple</v-icon>
                    </template>
                    <v-list-item-title>Generación de sitios estáticos (SSG)</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-cog</v-icon>
                    </template>
                    <v-list-item-title>Configuración zero-config</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quasar Framework -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-blue-darken-2 text-h5 white--text">
            <v-icon left class="mr-2">mdi-atom</v-icon>
            Quasar Framework
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">¿Qué es Quasar?</h3>
                <p class="text-body-1 mb-4">
                  Quasar es un framework Vue.js que permite crear aplicaciones para múltiples plataformas 
                  con una sola base de código: web (SPA, SSR, PWA), móvil (iOS y Android) y escritorio 
                  (Electron, Capacitor).
                </p>
                <v-alert type="info" variant="tonal">
                  <strong>Write once, deploy everywhere:</strong> Un solo código para todas las plataformas.
                </v-alert>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-3">Capacidades Multiplataforma</h3>
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="blue">mdi-web</v-icon>
                    </template>
                    <v-list-item-title>SPA / SSR / PWA</v-list-item-title>
                    <v-list-item-subtitle>Aplicaciones web completas</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="green">mdi-cellphone</v-icon>
                    </template>
                    <v-list-item-title>iOS / Android</v-list-item-title>
                    <v-list-item-subtitle>Apps móviles nativas con Cordova/Capacitor</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="purple">mdi-monitor</v-icon>
                    </template>
                    <v-list-item-title>Desktop</v-list-item-title>
                    <v-list-item-subtitle>Apps de escritorio con Electron</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="orange">mdi-extension</v-icon>
                    </template>
                    <v-list-item-title>Browser Extension</v-list-item-title>
                    <v-list-item-subtitle>Extensiones de navegador</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Comparación Nuxt vs Quasar -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-indigo-darken-1 text-h5 white--text">
            <v-icon left class="mr-2">mdi-scale-balance</v-icon>
            Nuxt.js vs Quasar Framework
          </v-card-title>
          <v-card-text class="pa-0">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left bg-blue-grey-lighten-4">Característica</th>
                  <th class="text-left bg-green-lighten-4">Nuxt.js</th>
                  <th class="text-left bg-blue-lighten-4">Quasar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-weight-bold">Enfoque Principal</td>
                  <td>SSR y generación de sitios estáticos</td>
                  <td>Desarrollo multiplataforma</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Plataformas</td>
                  <td>Web (SPA, SSR, SSG)</td>
                  <td>Web, Móvil, Desktop, Extensions</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Componentes UI</td>
                  <td>Necesita librería externa</td>
                  <td>Incluye componentes propios (Material Design)</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Configuración</td>
                  <td>Más simple para proyectos web</td>
                  <td>Más opciones de configuración</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Curva de Aprendizaje</td>
                  <td>Media</td>
                  <td>Media-Alta</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Mejor Para</td>
                  <td>Sitios web, blogs, e-commerce</td>
                  <td>Apps empresariales multiplataforma</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">SEO</td>
                  <td>Excelente (enfoque principal)</td>
                  <td>Bueno (con modo SSR)</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Comunidad</td>
                  <td>Muy grande</td>
                  <td>Grande y activa</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Cuándo usar SSR -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="4">
          <v-card-title class="bg-amber-darken-2 text-h5 white--text">
            <v-icon left class="mr-2">mdi-help-circle</v-icon>
            ¿Cuándo usar SSR?
          </v-card-title>
          <v-card-text class="pa-4">
            <v-row>
              <v-col cols="12" md="6">
                <v-card color="green-lighten-5" elevation="2">
                  <v-card-title class="text-h6">
                    <v-icon left color="green">mdi-check-circle</v-icon>
                    Casos Ideales para SSR
                  </v-card-title>
                  <v-card-text>
                    <v-list bg-color="transparent" density="compact">
                      <v-list-item v-for="(use, index) in whenToUseSSR" :key="index">
                        <template v-slot:prepend>
                          <v-icon color="green" size="small">mdi-arrow-right</v-icon>
                        </template>
                        <v-list-item-title>{{ use }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card color="orange-lighten-5" elevation="2">
                  <v-card-title class="text-h6">
                    <v-icon left color="orange">mdi-alert</v-icon>
                    Casos donde NO usar SSR
                  </v-card-title>
                  <v-card-text>
                    <v-list bg-color="transparent" density="compact">
                      <v-list-item v-for="(notUse, index) in whenNotToUseSSR" :key="index">
                        <template v-slot:prepend>
                          <v-icon color="orange" size="small">mdi-close</v-icon>
                        </template>
                        <v-list-item-title>{{ notUse }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Mejoras con Nuxt.js -->
    <v-row class="mt-6 mb-6">
      <v-col cols="12">
        <v-alert type="success" prominent variant="tonal">
          <v-alert-title class="text-h6 mb-3">
            <v-icon left>mdi-lightning-bolt</v-icon>
            Cómo Nuxt.js Mejora el Rendimiento y SEO
          </v-alert-title>
          <v-row>
            <v-col cols="12" md="4">
              <h4 class="mb-2">
                <v-icon color="success">mdi-speedometer</v-icon>
                Rendimiento
              </h4>
              <ul>
                <li>Time to First Byte (TTFB) reducido</li>
                <li>First Contentful Paint (FCP) más rápido</li>
                <li>Code splitting automático</li>
                <li>Prefetching inteligente</li>
                <li>Caché de páginas renderizadas</li>
              </ul>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="mb-2">
                <v-icon color="success">mdi-search-web</v-icon>
                SEO
              </h4>
              <ul>
                <li>HTML completo para crawlers</li>
                <li>Meta tags dinámicos por ruta</li>
                <li>Open Graph y Twitter Cards</li>
                <li>Sitemap.xml automático</li>
                <li>Structured data (JSON-LD)</li>
              </ul>
            </v-col>
            <v-col cols="12" md="4">
              <h4 class="mb-2">
                <v-icon color="success">mdi-account-group</v-icon>
                Experiencia de Usuario
              </h4>
              <ul>
                <li>Contenido visible inmediatamente</li>
                <li>Mejor en conexiones lentas</li>
                <li>Funciona sin JavaScript</li>
                <li>Navegación fluida post-hidratación</li>
                <li>Progressive Enhancement</li>
              </ul>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SSRInfo',
  data() {
    return {
      advantages: [
        {
          title: 'Mejor SEO',
          description: 'Los motores de búsqueda pueden indexar el contenido fácilmente'
        },
        {
          title: 'Carga Inicial Rápida',
          description: 'El usuario ve contenido inmediatamente'
        },
        {
          title: 'Mejor Rendimiento en Dispositivos Lentos',
          description: 'El servidor hace el trabajo pesado'
        },
        {
          title: 'Social Media Sharing',
          description: 'Las previews funcionan correctamente'
        },
        {
          title: 'Accesibilidad',
          description: 'Funciona incluso sin JavaScript'
        }
      ],
      disadvantages: [
        {
          title: 'Mayor Complejidad',
          description: 'Requiere servidor Node.js y más configuración'
        },
        {
          title: 'Mayor Carga en el Servidor',
          description: 'Cada request consume recursos del servidor'
        },
        {
          title: 'Costos de Hosting',
          description: 'Más costoso que hosting estático'
        },
        {
          title: 'Time to Interactive (TTI) Mayor',
          description: 'Aunque se ve rápido, tarda en ser interactivo'
        },
        {
          title: 'Limitaciones de Código',
          description: 'No todas las librerías funcionan en servidor'
        }
      ],
      whenToUseSSR: [
        'Sitios de contenido (blogs, noticias, documentación)',
        'E-commerce y páginas de productos',
        'Aplicaciones que requieren excelente SEO',
        'Sitios con mucho contenido público',
        'Landing pages y páginas de marketing',
        'Aplicaciones con usuarios en conexiones lentas',
        'Portales corporativos e institucionales'
      ],
      whenNotToUseSSR: [
        'Aplicaciones admin/dashboard privadas',
        'Herramientas internas de empresa',
        'Aplicaciones que requieren autenticación constante',
        'Apps con interacciones en tiempo real',
        'Proyectos con presupuesto limitado',
        'Apps principalmente client-side',
        'Prototipos y MVPs simples'
      ]
    }
  }
}
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
