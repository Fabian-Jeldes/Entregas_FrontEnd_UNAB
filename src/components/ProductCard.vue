<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image"/>
    <div class="product-body">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-meta">
        <span class="price">{{ formatPrice(product.price) }}</span>
        <span class="stock" :class="{ 'out': product.stock === 0 }">Stock: {{ product.stock }}</span>
      </div>
  <button @click="buy" :disabled="product.stock === 0" class="buy-btn">{{ product.stock === 0 ? 'Agotado' : 'Comprar' }}</button>
    </div>
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { product } = defineProps({
  product: { type: Object, required: true }
})
const emit = defineEmits(['buy'])

function formatPrice (price) {
  const clp = Math.round(Number(price) * 1000)
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(clp)
}

function buy () {
  if (product && product.stock > 0) {
    emit('buy', product.id)
  }
}
</script>

<style scoped>
.product-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: stretch;
  box-shadow: 0 6px 18px rgba(2,6,23,0.3);
}
.product-image {
  width: 100%;
  height: 160px;
  /* show the whole product without cropping */
  object-fit: contain;
  object-position: center;
  border-radius: 6px;
  background: #f6f7f9; /* subtle neutral background for letterboxing */
  padding: 8px; /* gives the image some breathing room */
}
.product-title { margin: 0; font-size: 1.05rem; }
.product-desc { font-size: 0.9rem; color: #bfc7d1; }
.product-meta { display:flex; justify-content: space-between; align-items:center; gap:0.5rem; margin-top:0.4rem; }
.price { font-weight:700; color: #ffd54a; }
.stock { font-size: 0.85rem; padding: 0.25rem 0.5rem; border-radius: 6px; background: rgba(255,255,255,0.03); }
.stock.out { opacity: 0.6; }
.buy-btn { margin-top: 0.5rem; width: 100%; background:#28a745; color: white; border: none; padding: 0.6rem; border-radius: 6px; }
.buy-btn[disabled] { background: #6c757d; cursor: not-allowed; }
</style>
