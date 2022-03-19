<template>
  <div class="sitesList">
    <ul>
      <li v-for="site of listaSites" :key="site.id">
        <h3>{{ site.nome }}</h3>
        <a :href="site.site"><img :src="site.imagem" alt="site.nome" /></a>
        <p>
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
