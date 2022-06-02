<template>
  <div class="home">
      <router-link class=" self link" to="/form/1">
        <h1>Formulario Inicial</h1>
      </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.self{
  align-self: center;
}
</style>