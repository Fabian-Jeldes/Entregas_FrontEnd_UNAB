<script>
export default {
  name: 'UserTable',
  data() {
    return {
      usuarios: [
        { nombre: 'Ana', apellido: 'Pérez', nacimiento: '1995-03-12', edad: 30 },
        { nombre: 'Luis', apellido: 'García', nacimiento: '1988-11-02', edad: 36 },
        { nombre: 'Carla', apellido: 'Ramírez', nacimiento: '2001-07-25', edad: 24 },
      ],
    }
  },
}
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-4">Tablita de usuarios: </h1>

    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha Nacimiento</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, idx) in usuarios" :key="idx">
            <td>{{ u.nombre }}</td>
            <td>{{ u.apellido }}</td>
            <td>{{ u.nacimiento }}</td>
            <td>{{ u.edad }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container.py-5 {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }}
</style>
