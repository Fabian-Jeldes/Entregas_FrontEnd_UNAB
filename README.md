# 🇨🇱 Feriados Chile - Visor Web

Aplicación web simple para consultar y visualizar los feriados oficiales de Chile del año actual, consumiendo datos desde una API externa.

## 📋 Descripción

Este proyecto forma parte del **Módulo 5 - AE5: Manipulación de APIs** del programa Front-end Trainee. Permite a los usuarios ver una tabla ordenada con todos los feriados chilenos, incluyendo fecha, nombre y tipo de cada feriado.

## ✨ Características

- 📅 **Visualización de feriados**: Muestra todos los feriados oficiales de Chile
- 🎨 **Interfaz responsive**: Diseño adaptable usando Bootstrap 5
- ⚡ **Carga asíncrona**: Datos obtenidos dinámicamente via API
- 🛡️ **Manejo de errores**: Mensajes informativos en caso de fallos
- 🔄 **Detección automática**: Identifica diferentes estructuras de datos de la API

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados + Bootstrap 5
- **JavaScript (ES6+)**: Lógica de aplicación
- **jQuery**: Manipulación del DOM simplificada
- **Fetch API**: Consumo de servicios REST


## 📁 Estructura del Proyecto

```
M5AE5-ABP4/
├── index.html              # Página principal
├── Assets/
│   ├── CSS/
│   │   └── styles.css      # Estilos personalizados
│   └── JS/
│       └── main.js         # Lógica principal
└── README.md              # Este archivo
```

## 🔗 API Utilizada

- **Endpoint**: `https://api.boostr.cl/feriados/en.json`
- **Método**: GET
- **Formato**: JSON
- **Descripción**: API gratuita que proporciona los feriados oficiales de Chile

## Funcionalidades
### Principales
- Carga automática de feriados al iniciar
- Tabla responsive con formato atractivo
- Manejo de estados de carga y error
- Soporte para múltiples estructuras de datos


## 👨‍💻 Autor
Fabián Jeldes 
Desarrollado como parte del **Módulo 5 - AE5: Manipulación de APIs**  
Programa: Front-end Trainee
---
