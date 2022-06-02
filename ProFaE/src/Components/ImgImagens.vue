<template>
  <div class="AltLarg">
    <img
      v-if="Logo == 1"
      src="../assets/Logo1.png"
      alt="Logo 1"
    />
    <img v-if="Logo == 2" src="../assets/Logo2.png" alt="Logo 2" />
    <img v-if="Logo == 3" src="../assets/Logo3.png" alt="Logo 3" />
  </div>
</template>

<script>
export default {
  props: ["Logo"],
};
</script>

<style>
img {
  width: 100%;
}
</style>