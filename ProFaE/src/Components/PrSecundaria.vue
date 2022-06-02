<template>
  <div class="principal">
    <div class="m-5">
      <TtTitle
        class="d-flex justify-content-flex-start "
        title="Sobre o profissional"
        subtitle="Detalhes do Atendimento"
      />
    </div>
    <div class="div">
      <div>
        <FrForm class="mx-5" pagina="2" />
      </div>
      <ImgImagens class="img" Logo="2" />
    </div>
    <BtnButton Ordenacao="2 de 2" pagina="2" class="mx-5" />
  </div>
</template>

<script>
import TtTitle from "./TtTitle";
import ImgImagens from "./ImgImagens";
import FrForm from "../Forms/FrForm";
import BtnButton from "./BtnButton.vue";
export default {
  name: "PrSecundaria",
  components: {
    TtTitle,
    ImgImagens,
    FrForm,
    BtnButton,
  },
};
</script>

<style>
.principal {
  background-color: #ffffff;
  border-radius: 20px;
  width: 75%;
  height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.div {
  display: flex;
  justify-content: space-around;
}
</style>
