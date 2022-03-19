<template>
  <div class="sitesList">
    <ul>
      <li v-for="site of listaSites" :key="site.id">
        <h3 class="mt-3">{{ site.nome }}</h3>
        <div>
          <a :href="site.site">
            <v-img :src="site.imagem" alt="site.nome" class="mb-3"></v-img>
          </a>
          <span v-for="ferramenta of site.ferramentas" :key="ferramenta.id">
            {{ ferramenta }};</span
          >
        </div>
        <p class="mr-5">
          {{ site.descricao }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MeuInicio",
  data() {
    return {
      listaSites: [],
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/fakeNews.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.listaSites = json;
        console.log(this.listaSites);
      });
  },
};
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
