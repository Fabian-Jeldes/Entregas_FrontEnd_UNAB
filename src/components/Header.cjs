// Versión CommonJS del componente Header para que Jest (sin configuración ESM) lo pueda requerir
module.exports = {
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
