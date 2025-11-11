<template>
  <section class="contact-section">
    <h3 class="contact-title">Connect with me</h3>
    <form @submit.prevent="submitForm" class="contact-form">
      <input type="email" v-model="formData.email" placeholder="Email" required>
      <textarea v-model="formData.message" placeholder="Message" required></textarea>
      
      <button type="submit" class="submit-button">
        Stay Connected <span class="arrow-icon">▶</span>
      </button>
    </form>
    
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        message: ''
      },
      successMessage: ''
    };
  },
  methods: {
    submitForm() {
      // 1. Simulación de validación (el 'required' de HTML ayuda)
      if (!this.formData.email || !this.formData.message) {
        alert('Por favor, complete ambos campos.');
        return;
      }
      
      // 2. Aquí iría la llamada a la API de Backend (Axios, Fetch, etc.)
      // EJEMPLO: axios.post('/api/contact', this.formData)
      
      // 3. Simulación de éxito (sin backend)
      console.log('Datos a enviar:', this.formData);
      this.successMessage = '¡Mensaje enviado con éxito! (Simulación)';
      
      // 4. Limpiar formulario
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.contact-section {
  padding: 80px 50px;
  background-color: #171c26;
}

.contact-title {
  color: #e54c60; 
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form input, 
.contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #1e2430;
  border: 1px solid #333941;
  color: #f0f0f0;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #e54c60;
}

.contact-form textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  width: 100%;
  background-color: #e54c60;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(229, 76, 96, 0.3);
}

.submit-button:hover {
  background-color: #d13a50;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(229, 76, 96, 0.4);
}

.arrow-icon {
  font-size: 12px;
  transition: transform 0.3s;
}

.submit-button:hover .arrow-icon {
  transform: translateX(5px);
}

.success-message {
  text-align: center;
  color: #4caf50;
  margin-top: 20px;
  font-weight: 600;
}
</style>