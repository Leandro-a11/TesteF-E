<template>
  <div class="btn">
    <div>
      <div v-if="pagina == 1" class="progress m-1" style="width: 300px">
        <div class="progress-bar" id="barra" style="width: 50%"></div>
      </div>
      <div v-if="pagina == 2" class="progress m-1" style="width: 300px">
        <div class="progress-bar" id="barra" style="width: 100%"></div>
      </div>
      <h5 v-if="pagina == 1" class="progressao">{{ Ordenacao }}</h5>
      <h5 v-if="pagina == 2" class="progressao">{{ Ordenacao }}</h5>
    </div>
    <br />
    <div class="botao">
      <button @click="Valid" v-if="pagina == 1" class="botao">
        <input class="submit" type="submit" />
        <router-link v-if="checkvalid" class="word" to="/form/2">
          PRÓXIMO
        </router-link>
        <p v-if="checkvalid == false" class=" mt-2 progressao">Clique acima</p>
      </button>
      <button v-if="pagina == 2" class="botao">
        <router-link class="word" to="/form/2"> PRÓXIMO </router-link>
      </button>
      <button v-if="pagina == 3" class="botao">
        <router-link class="word" to="/form/2"> CADASTRAR USUARIO </router-link>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "BtnButton",
  props: ["pagina", "Ordenacao"],
  data: function () {
    return {
      checkvalid: false,
    };
  },
  methods: {
    Valid() {
      const input = document.querySelector("[valid]");
      const input2 = document.querySelector("[valid2]");
      const input3 = document.querySelector("[valid3]");
      const input4 = document.querySelector("[valid4]");
      const input5 = document.querySelector("[valid5]");
      if (
        input.value != "" &&
        input2.value != "" &&
        input3.value != "" &&
        input4.value != "" &&
        input5.value != ""
      ) {
        this.checkvalid = true;
      } else {
        this.checkvalid = false;
      }
    },
  },
};
</script>

<style>
.btn {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
.progressao {
  color: #483698;
}
.word {
  text-decoration: none;
  color: white;
}
.botao {
  width: 300px;
  height: 40px;
  border-radius: 40px;
  background-color: #483698;
}
button {
  text-align: center;
  border: #483698 solid 1px;
}

#barra {
  background-color: #483698;
}
.submit {
  background-color: #483698;
  width: 0px;
  height: 0px;
}
</style>