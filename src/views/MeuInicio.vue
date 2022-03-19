<template>
  <div class="sitesList">
    <h1>Sites</h1>
    <ul>
      <li v-for="site of listaSites" :key="site.id">
        <h3>{{ site.nome }}</h3>
        <img src="site.imagem" alt="site.nome" />
        <p>
          <strong>{{ listaSites.descricao }}</strong>
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
        this.listaSiste = json;
        console.log(this.listaSites);
      });
  },
};
</script>
