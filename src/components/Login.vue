<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        required
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Contraseña" 
        required
      />
      <button type="submit">Ingresar</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
    
    <div class="register-link">
      <p>¿No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/services/firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async handleLogin() {
      this.error = null
      
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        // Si llega aquí, login exitoso
        // Firebase automáticamente actualiza currentUser
        this.$router.push('/home')
      } catch (err) {
        // Si hay error, mostrar mensaje
        this.error = 'Credenciales incorrectas'
        console.error('Error en login:', err)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-container h1 {
  color: white;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.login-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.login-container input {
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.login-container input:focus {
  outline: none;
  border-color: #667eea;
}

.login-container button {
  padding: 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.login-container button:hover {
  background: #5568d3;
}

.error {
  color: #e74c3c;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

.register-link {
  margin-top: 20px;
  color: white;
  text-align: center;
}

.register-link a {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.register-link a:hover {
  color: #ffed4e;
  text-decoration: underline;
}

.register-link p {
  margin: 0;
  font-size: 1rem;
}
</style>
