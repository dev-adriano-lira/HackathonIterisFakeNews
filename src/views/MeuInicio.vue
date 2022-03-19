<template>
  <h1></h1>
</template>

<script>
export default {
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
};
</script>
