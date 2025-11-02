<template>
  <header class="site-header" :style="{ backgroundColor: color || '#0d6efd' }">
    <div class="container header-inner">
      <div class="brand">
        <h1 class="site-title">{{ title }}</h1>
      </div>
      <nav class="main-nav">
        <!-- <a href="#" class="nav-link">Inicio</a>
        <a href="#" class="nav-link">Productos</a>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Contacto</a> -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.site-header {
  padding: 0.75rem 1rem;
  color: white;
  border-radius: 10px;
}
.header-inner { display:flex; align-items:center; justify-content:space-between; gap:1rem; max-width:1200px; margin:0 auto; }
.site-title { margin: 0; font-size: 1.4rem; font-weight: 800; }
.main-nav { display:flex; gap:0.75rem; }
.nav-link { color: rgba(255,255,255,0.95); padding: 0.45rem 0.7rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background-color 0.18s, transform 0.08s; }
.nav-link:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

@media (max-width: 640px) {
  .main-nav { display:none; }
}
</style>
