<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="logo">
          <div class="logo-icon">
            <img src="../assets/tagcode.svg" alt="Code Icon">
          </div>
          <span class="logo-text">Fabián Jeldes</span>
        </div>
        <p class="footer-tagline">
          Analista Programador | Analista de Datos<br>
          Transformando ideas en código.
        </p>
      </div>

      <div class="footer-center">
        <h4>Navegación</h4>
        <ul class="footer-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-right">
        <h4>Conecta conmigo</h4>
        <div class="social-links">
          <a href="https://github.com/Fabian-Jeldes?tab=repositories" target="_blank" rel="noopener noreferrer" class="social-btn github" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/fabian-andres-jeldes-175483117/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Fabián Jeldes. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.main-footer {
  background: linear-gradient(180deg, #1e2430 0%, #252d3d 100%);
  color: #f0f0f0;
  padding: 60px 50px 30px;
  margin-top: 80px;
  border-top: 3px solid #e54c60;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.footer-left .logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-weight: bold;
  font-size: 20px;
  color: #f0f0f0;
}

.footer-tagline {
  color: #c0c0c0;
  line-height: 1.6;
  font-size: 14px;
}

.footer-center h4,
.footer-right h4 {
  color: #e54c60;
  margin-bottom: 20px;
  font-size: 18px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #c0c0c0;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 15px;
}

.footer-links a:hover {
  color: #e54c60;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background-color: rgba(229, 76, 96, 0.1);
  border: 2px solid transparent;
  border-radius: 8px;
  color: #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
}

.social-btn svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.social-btn:hover {
  background-color: #e54c60;
  border-color: #e54c60;
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(229, 76, 96, 0.3);
}

.social-btn.github:hover {
  background-color: #333;
  border-color: #333;
}

.social-btn.linkedin:hover {
  background-color: #0077b5;
  border-color: #0077b5;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(240, 240, 240, 0.1);
  color: #c0c0c0;
  font-size: 14px;
}

.footer-bottom p {
  margin: 5px 0;
}

.made-with {
  margin-top: 8px;
}

.heart {
  color: #e54c60;
  display: inline-block;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .main-footer {
    padding: 40px 30px 20px;
  }
}
</style>
