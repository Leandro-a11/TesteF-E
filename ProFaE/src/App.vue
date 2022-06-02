<template>
  <div class="index m-4">
    <TtTitle class="mt-5" title="Cadastro Profissional" />
    <BootStrapFonts />
    <router-link class="link" to="/hm">
      <h1>Home</h1>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import BootStrapFonts from "./styles/css/AllStyles.vue";
import TtTitle from "./Components/TtTitle.vue";
export default {
  name: "App",
  components: {
    BootStrapFonts,
    TtTitle,
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}

html body {
  background-color: #fbde40;
}

.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
}
.link {
  color: #483698;
  text-decoration: none;
}
</style>