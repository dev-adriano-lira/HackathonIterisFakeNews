<template>
  <div class="sitesList mt-3">

    <v-card
      v-for="site of listaSites"
      :key="site.id"
      class="mx-auto mb-3"
      max-width="350"
    >
      <div>
        <a :href="site.site">
          <v-img :src="site.imagem" alt="site.nome"></v-img>
        </a>
      </div>
      <v-card-title>
        <h3>{{ site.nome }}</h3>
      </v-card-title>

      <v-card-subtitle>
        <span v-for="ferramenta of site.ferramentas" :key="ferramenta.id">
          {{ ferramenta }};
        </span>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn class="botao-saibaMais" color="white" text> Saiba Mais </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p>
              {{ site.descricao }}
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MeuInicio",
  data() {
    return {
      listaSites: [],
      show: false,
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.listaSites = json;
      });
  },
};
</script>

<style scoped>
  
  .botao-saibaMais {
    background-color: black
  }
  
  p {
    text-align: justify;
  }


</style>
