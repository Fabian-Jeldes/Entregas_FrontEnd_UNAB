<template>
  <header class="main-header">
    <div class="logo">
      <div class="logo-icon">
        <img src="../assets/tagcode.svg" alt="Code Icon">
      </div>
      <span class="logo-text">Fabián Jeldes</span>
    </div>
    <nav>
      <ul>
        <li><a href="#skills" class="nav-btn">Skillset</a></li>
        <li><a href="#contact" class="nav-btn">Contact me</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #252d3d;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.main-header::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(to bottom, rgba(37, 45, 61, 0.6), transparent);
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 45px;
  height: 45px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-weight: bold;
  font-size: 22px;
  color: #f0f0f0;
  letter-spacing: 0.5px;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0;
}

.nav-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e54c60;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(229, 76, 96, 0.3);
}

.nav-btn:hover {
  background-color: #d13a50;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(229, 76, 96, 0.4);
}

/* Media Queries para Responsive */
@media (max-width: 768px) {
  .main-header {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }

  .logo-text {
    font-size: 18px;
  }

  .logo-icon {
    width: 35px;
    height: 35px;
  }

  nav ul {
    gap: 10px;
  }

  .nav-btn {
    padding: 8px 15px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-header {
    padding: 12px 15px;
  }

  .logo-text {
    font-size: 16px;
  }

  .logo-icon {
    width: 30px;
    height: 30px;
  }

  nav ul {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>