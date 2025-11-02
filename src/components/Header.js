// Componente Header exportado como objeto JS para facilitar pruebas con Jest
export default {
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
