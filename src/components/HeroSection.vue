<template>
  <section class="hero-section">
    <div class="content">
      <h1>Hello, I'm <span class="highlight">Fabián Jeldes</span></h1>
      
      <p class="tagline">
        Analista Programador | Analista de Datos | Productor y Gestor de Proyectos<br>
        Especializado en desarrollo web, análisis de datos y gestión de proyectos,<br>
        con experiencia en Python, JavaScript, SQL y metodologías ágiles.
      </p>

      <div class="hero-actions">
        <a href="#contact" class="btn-primary">Contact Me</a>
        
        <div class="social-icons">
          <a href="https://github.com/Fabian-Jeldes?tab=repositories" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a href="https://www.linkedin.com/in/fabian-andres-jeldes-175483117/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="profile-photo">
      <div class="photo-circle">
        <img src="../assets/FJ_CV_Profile.jpg" alt="Developer Photo">
        <span class="photo-placeholder"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 50px 100px 50px; /* Añadido padding-top para el header fijo */
  position: relative;
  min-height: 80vh;
}

.content {
  max-width: 55%;
}

.content h1 {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #f0f0f0;
}

.content h1 .highlight {
  color: #e54c60;
}

.content .tagline {
  font-size: 18px;
  line-height: 1.5;
  color: #c0c0c0;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-primary {
  display: inline-block;
  background-color: #e54c60;
  color: white;
  padding: 14px 30px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(229, 76, 96, 0.3);
}

.btn-primary:hover {
  background-color: #d13a50;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(229, 76, 96, 0.4);
}

.social-icons {
  display: flex;
  gap: 15px;
  align-items: center;
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 0.1);
  border: 2px solid rgba(240, 240, 240, 0.2);
  border-radius: 50%;
  color: #f0f0f0;
  transition: all 0.3s ease;
}

.social-icon svg {
  width: 22px;
  height: 22px;
}

.social-icon:hover {
  background-color: #e54c60;
  border-color: #e54c60;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(229, 76, 96, 0.4);
}

/* Marco circular para la foto */
.profile-photo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-circle {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e54c60 0%, #d13a50 100%);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(229, 76, 96, 0.4);
  position: relative;
  overflow: hidden;
}

.photo-circle::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #1e2430;
  transform: scale(0.95);
}

.photo-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%; /* Ajusta la posición: centro horizontal, 20% desde arriba */
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.photo-placeholder {
  position: relative;
  z-index: 1;
  color: #e54c60;
  font-size: 20px;
  font-weight: 600;
}

/* Media Queries para Responsive */
@media (max-width: 1024px) {
  .hero-section {
    padding: 120px 30px 80px 30px;
  }

  .content h1 {
    font-size: 48px;
  }

  .content .tagline {
    font-size: 16px;
  }

  .photo-circle {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column-reverse;
    padding: 100px 20px 60px 20px;
    text-align: center;
    min-height: auto;
  }

  .content {
    max-width: 100%;
  }

  .content h1 {
    font-size: 36px;
  }

  .content .tagline {
    font-size: 15px;
    line-height: 1.6;
  }

  .content .tagline br {
    display: none;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .photo-circle {
    width: 250px;
    height: 250px;
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 15px 40px 15px;
  }

  .content h1 {
    font-size: 28px;
  }

  .content .tagline {
    font-size: 14px;
  }

  .btn-primary {
    padding: 12px 24px;
    font-size: 14px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-icon svg {
    width: 18px;
    height: 18px;
  }

  .photo-circle {
    width: 200px;
    height: 200px;
  }
}
</style>