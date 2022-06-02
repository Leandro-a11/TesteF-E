<template>
  <div class="font">
    <div>
      <div class="formulario">
        <div id="pg1" v-if="pagina == 1">
          <form method="dialog" class="form" action="">
            <label class="mx-3" for="nome">Nome Completo *</label>
            <input
              valid
              minlength="3"
              maxlength="45"
              class="mx-3"
              type="text"
              id="nome"
              required
              placeholder="   Digite o nome completo"
            />
            <label class="mx-3" for="cpf">CPF *</label>
            <input
              valid2
              minlength="10"
              maxlength="15"
              class="mx-3"
              required
              type="number"
              id="cpf"
              placeholder="    Digite um CPF"
            />
            <label class="mx-3" for="tel">Numero De Celular *</label>
            <input
              valid3
              minlength="11"
              maxlength="15"
              class="mx-3"
              required
              type="tel"
              id="tel"
              placeholder="    (00)0 0000-0000"
            />
            <label class="mx-3" for="estado"
              >Estado *
              <label class="label mx-3" for="cidade">Cidade *</label>
            </label>
            <div @click="ClickCidade">
              <select
                valid4
                required
                name="estado"
                class="funcao mx-3"
                id="estado"
              >
                <option value=""></option>
                <option value="SC">Santa Catarina</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="PR">Paraná</option>
                <option value="GO">Goiás</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
              </select>
              <Rs v-if="Rs" />
              <Sc v-if="Sc" />
              <Mt v-if="Mt" />
              <Ms v-if="Ms" />
              <Pr v-if="Pr" />
              <Go v-if="Go" />
            </div>
            <BtnButton Ordenacao="1 de 2" pagina="1" class="mx-5" />
          </form>
        </div>
        <div id="pg2" v-if="pagina == 2">
          <form class="form" action="">
            <label class="mx-3" for="profissao">Especialidade principal</label>
            <select
              class="mx-3"
              id="profissao"
              required
              placeholder="Digite o nome completo"
            >
              <option disabled selected hidden value="none">Selecione</option>
              <option value="1">Cardiologista</option>
              <option value="2">Cirurgia Geral</option>
              <option value="3">Dermatologia</option>
              <option value="4">Endocrinologia e Metabologia</option>
              <option value="5">Ginecologia e Obstetrícia</option>
              <option value="6">Hepatologia</option>
              <option value="7">Neurologia</option>
              <option value="8">Nutricionista</option>
              <option value="9">Oftamologia</option>
              <option value="10">Ortopedia e Traumatologia</option>
              <option value="11">Pediatria</option>
              <option value="12">Psiquiatria</option>
            </select>

            <label class="mx-3" for="preco">Informe o preço da Consulta</label>
            <div class="span mx-4">
              <div class="textC">R$</div>
              <input
                class="mx-0"
                required
                type="number"
                id="preco"
                placeholder="Valor"
              />
            </div>

            <label class="m-3" for="">Formas de pagamento da Consulta</label>
            <div class="mx-4 my-2 dinheiro">
              <input type="checkbox" required id="dinheiro" />
              <label class="mx-2" id="labelpay" for="dinheiro"
                >Em Dinheiro</label
              >
            </div>
            <div class="mx-4 my-2 pix">
              <input type="checkbox" required id="pix" />
              <label class="mx-2" id="labelpay" for="pix">Pix</label>
            </div>
            <div @click="ClickCartao" class="mx-4 my-2 mb-4 cartao">
              <input
                type="checkbox"
                name="CartaoCredito"
                required
                id="cartao"
              />
              <label class="mx-2" id="labelpay" for="cartao"
                >Cartao de Crédito
              </label>
            </div>
            <div @click="ClickPagamento" v-show="cartao & vez1">
              <div class="mx-4 my-2 cartao">
                <input type="checkbox" required id="cartao1" />
                <label class="mx-2" id="labelpay" for="cartao1">1 Vez</label>
              </div>
            </div>
            <div
              @click="ClickPagamento"
              v-show="cartao & vez2"
              class="mx-4 my-2 cartao"
            >
              <input type="checkbox" required id="cartao2" />
              <label class="mx-2" id="labelpay" for="cartao2">2 Vezes</label>
            </div>
            <div
              @click="ClickPagamento"
              v-show="cartao & vez3"
              class="mx-4 my-2 cartao"
            >
              <input type="checkbox" required id="cartao3" />
              <label class="mx-2" id="labelpay" for="cartao3">3 Vezes</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rs from "./citys/RioRs";
import Sc from "./citys/SantaSc";
import Pr from "./citys/ParanaPr";
import Mt from "./citys/MatoMt";
import Ms from "./citys/MatoMs";
import Go from "./citys/GoianiaGo";
import BtnButton from "../Components/BtnButton.vue";
export default {
  props: ["pagina"],
  components: { Rs, Sc, Pr, Mt, Ms, Go, BtnButton },
  data: function () {
    return {
      Sc: false,
      Mt: false,
      Ms: false,
      Go: false,
      Pr: false,
      Rs: false,
      none: false,
      cartao: false,
      vez1: true,
      vez2: true,
      vez3: true,
    };
  },
  methods: {
    ClickCidade() {
      const Estado = document.getElementsByClassName("funcao")[0];
      const ValorSelecionado = Estado.value;
      if (ValorSelecionado == "RS") {
        this.Rs = true;
        this.Sc = false;
        this.Mt = false;
        this.Ms = false;
        this.Go = false;
        this.Pr = false;
      } else if (ValorSelecionado == "SC") {
        this.Rs = false;
        this.Sc = true;
        this.Mt = false;
        this.Ms = false;
        this.Go = false;
        this.Pr = false;
      } else if (ValorSelecionado == "PR") {
        this.Rs = false;
        this.Sc = false;
        this.Mt = false;
        this.Ms = false;
        this.Go = false;
        this.Pr = true;
      } else if (ValorSelecionado == "MS") {
        this.Rs = false;
        this.Sc = false;
        this.Mt = false;
        this.Ms = true;
        this.Go = false;
        this.Pr = false;
      } else if (ValorSelecionado == "MT") {
        this.Rs = false;
        this.Sc = false;
        this.Mt = true;
        this.Ms = false;
        this.Go = false;
        this.Pr = false;
      } else if (ValorSelecionado == "GO") {
        this.Rs = false;
        this.Sc = false;
        this.Mt = false;
        this.Ms = false;
        this.Go = true;
        this.Pr = false;
      } else if (ValorSelecionado == "") {
        this.Rs = false;
        this.Sc = false;
        this.Mt = false;
        this.Ms = false;
        this.Go = false;
        this.Pr = false;
      }
    },
    ClickCartao() {
      let cartao = document.getElementById("cartao");
      if (cartao.checked) {
        this.cartao = true;
      } else {
        this.cartao = false;
      }
    },
    ClickPagamento() {
      let Pvez1 = document.getElementById("cartao1");
      let Pvez2 = document.getElementById("cartao2");
      let Pvez3 = document.getElementById("cartao3");
      if (Pvez1.checked) {
        this.vez1 = true;
        this.vez2 = false;
        this.vez3 = false;
      } else if (Pvez2.checked) {
        this.vez1 = false;
        this.vez2 = true;
        this.vez3 = false;
      } else if (Pvez3.checked) {
        this.vez1 = false;
        this.vez2 = false;
        this.vez3 = true;
      } else if (Pvez1.checked == !true) {
        this.vez1 = true;
        this.vez2 = true;
        this.vez3 = true;
      } else if (Pvez2.checked == !true) {
        this.vez1 = true;
        this.vez2 = true;
        this.vez3 = true;
      } else if (Pvez3.checked == true) {
        this.vez1 = true;
        this.vez2 = true;
        this.vez3 = true;
      }
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}
input,
select {
  border: solid 1px #483698;
  border-radius: 4px;
  width: 500px;
  height: 50px;
}

input,
label,
select {
  padding: 5px;
  position: relative;
  left: 10px;
}

.font {
  font-family: "Open Sans", cursive;
  font-size: 1.1rem;
}

#cpf,
#tel {
  width: 350px;
}

#estado,
#cidade {
  width: 200px;
}
.subtitle {
  position: relative;
  bottom: 50px;
  left: 30px;
}

.label {
  position: absolute;
  left: 200px;
  bottom: 0px;
}

.span {
  width: 50px;
  height: 50px;
  background-color: #483698;
  border-radius: 4px;
}
.textC {
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #483698;
  color: white;
  font-weight: bold;
}

#profissao {
  width: 400px;
}
#preco {
  width: 350px;
}
#pix,
#dinheiro,
#cartao,
#cartao1,
#cartao2,
#cartao3 {
  width: 15px;
}

.pix,
.dinheiro,
.cartao {
  border-radius: 10px;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.3);
  border: solid 1px #fff;
  background-color: #f9f9f9;
  width: 400px;
  display: flex;
  align-items: center;
}
#labelpay {
  font-weight: bold;
}
</style>