<script setup>
import Header from './components/Header.vue'
import ProductCard from './components/ProductCard.vue'
import { ref } from 'vue'

const products = ref([
  { id: 1, title: 'Auriculares Inalámbricos', description: 'Sonido nítido, cancelación de ruido y batería de larga duración.', price: 59.990, stock: 12, image: 'https://factorytech.cl/cdn/shop/files/AURICULARES-INALAMBRICOS-DIADEMA-BLUETOOTH-HOCO-W35-NEGRO-1_84335a7b-19a8-43d6-af24-a29e7e2d4b81_809x.jpg?v=1715442244' },
  { id: 2, title: 'Smartwatch Pro', description: 'Monitor de actividad, pantalla AMOLED y GPS integrado.', price: 129.990, stock: 5, image: 'https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/0ea81c26-1497-4a1f-a876-19d4a4e8d5a8/MKIDNSPNJY/MKIDNSPNJY-1/1732224637178-MKIDNSPNJY-1-1.jpg' },
  { id: 3, title: 'Cámara ActionCam 4K', description: 'Resistente al agua, estabilización avanzada y 4K a 60fps.', price: 199.950, stock: 0, image: 'https://prophonechile.cl/wp-content/uploads/2020/02/mi-action-camera-4k-3-4c8a59d9-3e15-4ad0-98e1-c7d16d8f03ce-fa6751dc-1d4e-4c45-a541-a1fbeab74c8b.jpg' },
  { id: 4, title: 'Teclado Mecánico RGB', description: 'Teclas táctiles, retroiluminación RGB y conexión USB-C.', price: 79.500, stock: 8, image: 'https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_SL1500_.jpg' },
  { id: 5, title: 'Mouse Gaming Pro', description: 'Sensor óptico 16000 DPI, botones programables.', price: 49.900, stock: 20, image: 'https://media.spdigital.cl/thumbnails/products/snbujg5__29f7dd61_thumbnail_4096.jpg' },
  { id: 6, title: 'Parlante Bluetooth', description: 'Sonido potente, resistente al agua y batería 24h.', price: 89.000, stock: 6, image: 'https://clsonyb2c.vtexassets.com/arquivos/ids/463862-1600-auto?v=638756644637400000&width=1600&height=auto&aspect=true' },
  { id: 7, title: 'SSD NVMe 1TB', description: 'Lectura 3500MB/s, SATA3, ideal para juegos y edición.', price: 119.990, stock: 15, image: 'https://images-na.ssl-images-amazon.com/images/I/71KeDAkw+0L.jpg' },
  { id: 8, title: 'Cargador 65W', description: 'Carga USB-C y PD compatible con laptops y móviles.', price: 29.500, stock: 30, image: 'https://gaseicl.vtexassets.com/arquivos/ids/166822/mgcharger65-5.jpg?v=638905450624330000' }
])

const carousel = ref(null)

function scrollLeft () {
  if (!carousel.value) return
  carousel.value.scrollBy({ left: -carousel.value.clientWidth * 0.7, behavior: 'smooth' })
}

function scrollRight () {
  if (!carousel.value) return
  carousel.value.scrollBy({ left: carousel.value.clientWidth * 0.7, behavior: 'smooth' })
}

function handleBuy (id) {
  const idx = products.value.findIndex(p => p.id === id)
  if (idx !== -1 && products.value[idx].stock > 0) {
    products.value[idx].stock = products.value[idx].stock - 1
  }
}
</script>

<template>
  <div id="app">
    <Header title="Techno Chile" color="#0b6eeb" />

    <main class="products-section">
      <h2 class="section-title">Productos destacados</h2>

      <div class="carousel-wrap">
        <button class="carousel-btn left" @click="scrollLeft">◀</button>
        <div class="carousel" ref="carousel">
          <ProductCard v-for="p in products" :key="p.id" :product="p" @buy="handleBuy"></ProductCard>
        </div>
        <button class="carousel-btn right" @click="scrollRight">▶</button>
      </div>
    </main>
  </div>
</template>

<style>
.products-section { margin-top: 1.25rem; text-align: left; }
.section-title { margin: 0 0 1rem 0; font-size: 1.4rem; }
.carousel-wrap { position: relative; }
.carousel { display: flex; gap: 1rem; overflow-x: auto; scroll-behavior: smooth; padding: 0.5rem 0.5rem; }
.carousel::-webkit-scrollbar { height: 10px; }
.carousel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 6px; }
.carousel > * { min-width: 240px; max-width: 280px; flex: 0 0 auto; }
.carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); z-index: 5; background: rgba(0,0,0,0.5); border: none; color: white; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; }
.carousel-btn.left { left: -10px; }
.carousel-btn.right { right: -10px; }

@media (max-width: 480px) {
  .carousel > * { min-width: 88%; }
  .carousel-btn { display: none; }
}
</style>