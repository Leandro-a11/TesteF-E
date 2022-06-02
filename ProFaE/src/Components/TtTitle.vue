<template>
  <div class="titulo">
    <h1 class="title mb-5 mx-4">{{ title }}</h1>
      <div class="mt-2">
      <h4>
        <p class="mx-4">
          {{ subtitle }}
        </p>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style>
.titulo {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: column-reverse;
  color: #483968;
  font-family: "Comfortaa", cursive;
}
</style>