<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const search = ref('')

const products = computed(() => store.getters.allProducts)
const featured = computed(() => products.value.filter(p => p.destacado))
const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return products.value
  return products.value.filter(p => p.nombre.toLowerCase().includes(q))
})

const totalProducts = computed(() => store.getters.totalProductsCount)
const totalStock = computed(() => store.getters.totalStock)

function onAdd(e) {
  e.preventDefault()
  const form = e.target
  const codigo = form.codigo.value.trim()
  const nombre = form.nombre.value.trim()
  const stock = Number(form.stock.value || 0)
  const precio = Number(form.precio.value || 0)
  const color = form.color.value.trim() || 'n/a'
  const destacado = form.destacado.checked
  if (!codigo || !nombre) return alert('Código y nombre son obligatorios')
  // prevent duplicate codes
  if (products.value.some(p => p.codigo === codigo)) return alert('El código ya existe')
  store.dispatch('addProduct', { codigo, nombre, stock, precio, color, destacado })
  form.reset()
}

function onDelete(codigo) {
  if (!confirm('¿Eliminar producto ' + codigo + '?')) return
  store.dispatch('deleteProduct', codigo)
}

function onEdit(product) {
  const newName = prompt('Editar nombre', product.nombre)
  if (newName === null) return
  const updated = { ...product, nombre: newName.trim() || product.nombre }
  store.dispatch('updateProduct', updated)
}
</script>

<template>
  <div>
    <div class="mb-4 d-flex justify-content-between align-items-center controls">
      <div style="position:relative;max-width:380px;flex:1">
        <i class="bi bi-search" style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--text-muted)"></i>
        <input v-model="search" class="form-control" placeholder="Buscar productos por nombre..." style="padding-left:2.75rem" />
      </div>
      <div class="stat-badge">
        <i class="bi bi-box-seam"></i>
        <span>Productos: <strong>{{ totalProducts }}</strong></span>
      </div>
      <div class="stat-badge">
        <i class="bi bi-stack"></i>
        <span>Stock: <strong>{{ totalStock }}</strong></span>
      </div>
    </div>

    <div v-if="featured.length" class="featured-grid mb-4">
      <div v-for="f in featured" :key="f.codigo" class="product-card">
        <div style="display:flex;justify-content:space-between;width:100%">
          <div>
            <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem">
              <span class="product-color" :style="{background: f.color}"></span>
              <strong style="font-size:1.125rem">{{ f.nombre }}</strong>
            </div>
            <div class="meta"><i class="bi bi-upc-scan"></i> {{ f.codigo }} • <i class="bi bi-box"></i> {{ f.stock }} unidades</div>
          </div>
          <div style="text-align:right">
            <div class="product-badge"><i class="bi bi-star-fill"></i> Destacado</div>
            <div style="font-weight:700;font-size:1.25rem;margin-top:.75rem;color:var(--primary)">${{ f.precio.toLocaleString() }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-5">
        <div class="card">
          <h5 class="card-title mb-3" style="display:flex;align-items:center;gap:.5rem">
            <i class="bi bi-plus-circle-fill" style="color:var(--primary)"></i>
            Añadir producto
          </h5>
          <form @submit="onAdd">
            <div class="mb-3">
              <label class="form-label">Código</label>
              <input name="codigo" class="form-control" placeholder="Ej: 0005" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input name="nombre" class="form-control" placeholder="Ej: Mouse Gamer" required />
            </div>
            <div class="row g-2 mb-3">
              <div class="col">
                <label class="form-label">Stock</label>
                <input name="stock" type="number" class="form-control" placeholder="100" />
              </div>
              <div class="col">
                <label class="form-label">Precio</label>
                <input name="precio" type="number" class="form-control" placeholder="15000" />
              </div>
            </div>
            <div class="row g-2 mb-3">
              <div class="col">
                <label class="form-label">Color</label>
                <input name="color" class="form-control" placeholder="blue, red, #ff5733" />
              </div>
              <div class="col d-flex align-items-end">
                <label class="form-check-label" style="cursor:pointer;padding:.625rem">
                  <input name="destacado" type="checkbox" class="form-check-input me-2"/>
                  <i class="bi bi-star"></i> Destacado
                </label>
              </div>
            </div>
            <button class="btn btn-primary w-100" type="submit">
              <i class="bi bi-plus-lg"></i> Añadir producto
            </button>
          </form>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="card table-custom">
          <h5 class="card-title mb-3" style="display:flex;align-items:center;gap:.5rem;padding:1rem 1rem 0">
            <i class="bi bi-table" style="color:var(--primary)"></i>
            Listado de productos
          </h5>
          <div style="overflow:auto">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th><i class="bi bi-upc-scan me-1"></i>Código</th>
                  <th><i class="bi bi-tag me-1"></i>Nombre</th>
                  <th><i class="bi bi-box me-1"></i>Stock</th>
                  <th><i class="bi bi-currency-dollar me-1"></i>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in filtered" :key="p.codigo">
                  <td><code style="background:var(--surface);padding:0.25rem 0.5rem;border-radius:0.25rem">{{ p.codigo }}</code></td>
                  <td><strong>{{ p.nombre }}</strong></td>
                  <td>{{ p.stock }}</td>
                  <td><strong style="color:var(--primary)">${{ p.precio.toLocaleString() }}</strong></td>
                  <td class="text-end">
                    <button class="btn btn-sm btn-outline-secondary me-1" @click="onEdit(p)" style="padding:0.25rem 0.625rem">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" @click="onDelete(p.codigo)" style="padding:0.25rem 0.625rem">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr v-if="filtered.length === 0">
                  <td colspan="5" class="text-center text-muted" style="padding:2rem">
                    <i class="bi bi-inbox" style="font-size:2rem;display:block;margin-bottom:0.5rem;opacity:0.3"></i>
                    No hay productos para mostrar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
}
.card-title {
  margin: 0;
  font-size: 1.125rem;
}
code {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
