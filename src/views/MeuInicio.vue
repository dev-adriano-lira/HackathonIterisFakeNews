<template>
  <div class="sitesList">
    <h1>Sites</h1>
    <ul>
      <li>
        <h3>{{ listaSites.nome }}</h3>
        <img src="listaSites.imagem" alt="listaSites.nome" />
        <p>
          <strong>{{ listaSites.descricao }}</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
<<<<<<< Updated upstream
    name: 'MeuInicio',

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
        console.log(this.listaSites)
      })
    }
=======
  name: "MeuInicio",
>>>>>>> Stashed changes
};
</script>
