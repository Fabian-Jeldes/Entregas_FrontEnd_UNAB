<template>
  <div class="register-container">
    <h1>Crear Cuenta</h1>
    <form @submit.prevent="handleRegister">
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        required
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Contraseña (mínimo 6 caracteres)" 
        required
        minlength="6"
      />
      <input 
        v-model="confirmPassword" 
        type="password" 
        placeholder="Confirmar Contraseña" 
        required
      />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Registrando...' : 'Registrarse' }}
      </button>
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>
    </form>
    
    <div class="login-link">
      <p>¿Ya tienes cuenta? <router-link to="/login">Inicia Sesión</router-link></p>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/services/firebase'

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
      success: null,
      loading: false
    }
  },
  methods: {
    async handleRegister() {
      // Limpiar mensajes anteriores
      this.error = null
      this.success = null
      
      // Validar que las contraseñas coincidan
      if (this.password !== this.confirmPassword) {
        this.error = 'Las contraseñas no coinciden'
        return
      }
      
      // Validar longitud de contraseña
      if (this.password.length < 6) {
        this.error = 'La contraseña debe tener al menos 6 caracteres'
        return
      }
      
      this.loading = true
      
      try {
        // Crear usuario en Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          this.email, 
          this.password
        )
        
        // Usuario creado exitosamente
        console.log('Usuario creado:', userCredential.user)
        this.success = '¡Cuenta creada exitosamente! Redirigiendo...'
        
        // Esperar 1 segundo y redirigir al home
        setTimeout(() => {
          this.$router.push('/home')
        }, 1000)
        
      } catch (err) {
        // Manejar errores específicos de Firebase
        console.error('Error en registro:', err)
        
        switch (err.code) {
          case 'auth/email-already-in-use':
            this.error = 'Este email ya está registrado'
            break
          case 'auth/invalid-email':
            this.error = 'Email inválido'
            break
          case 'auth/weak-password':
            this.error = 'La contraseña es muy débil'
            break
          default:
            this.error = 'Error al crear la cuenta. Intenta de nuevo.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

h1 {
  color: white;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

form {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #e74c3c;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  background: #fde8e8;
  border-radius: 5px;
}

.success {
  color: #27ae60;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  background: #e8f8f5;
  border-radius: 5px;
}

.login-link {
  margin-top: 20px;
  color: white;
  text-align: center;
}

.login-link a {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.login-link a:hover {
  color: #ffed4e;
  text-decoration: underline;
}

.login-link p {
  margin: 0;
  font-size: 1rem;
}
</style>
