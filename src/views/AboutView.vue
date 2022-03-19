<template>
  <div class="about">
    <v-container>
      <v-card
        
        elevation="2"
        class="d-center-flex pa-2 rounded-lg"
        outlined
        tile
      >
      <h2 class="text-h5 text-center "> <b>Sobre o "Fake Inspect" </b> </h2>
      </v-card>
      <p></p>
      
      <v-card

        elevation="2"
        class="d-center-flex  pa-2 rounded-lg "
        outlined
        tile
        >
        <p class="text-center">O “Fake Inspect” é um projeto desenvolvido pelos Decolers do Hackathon Decola 10ª edição Luna, que tem como objetivo ajudar na propagação de notícias verdadeiras, evitando assim as “Fake News”. O projeto foi desenvolvido por toda a equipe de Decolers e conta com diversos sites que ajudam na verificação de matérias e artigos, ajudando a combater a desinformação.
        </p>
        </v-card>


      <br>
      <v-card

        elevation="2"
        class="d-flex pa-3 rounded-lg "
        outlined
        tile
        >

        <div class="CorpoEquipe">


        <h3 class="py-3"> <b>Corpo da equipe: </b></h3>
        

        <v-row class="pa-4" justify="right">
          <v-avatar>
            <img 
              src="../assets/Adriano.jpg"
              alt="Adriano"
            >
            
          </v-avatar>
          <span class="pl-3">  Adriano Santos <br>
          <a href="https://github.com/dev-adriano-lira" class="pl-6"> @dev-adriano-lira </a>
          </span>
        </v-row>

        <v-row class="pa-4" justify="right">
          <v-avatar>
            <img
              src="../assets/Daniele.jpg"
              alt="Daniele"
            >
            
          </v-avatar>
          <span class="pl-3">  Daniele Lira <br>
          <a href="https://github.com/DanieleLira" class="pl-6"> @DanieleLira  </a>
          </span>
        </v-row>

        <v-row class="pa-4" justify="right">
          <v-avatar>
            <img
              src="../assets/Isabela.jpg"
              alt="Isabela"
            >
            
          </v-avatar>
          <span class="pl-3">  Isabela Pinheiro <br>
          <a href="https://github.com/IsabelaPinheiroS" class="pl-6"> @IsabelaPinheiroS </a>
          </span>
        </v-row>

        <v-row class="pa-4" justify="right">
          <v-avatar>
            <img
              src="../assets/Lucas.jpeg"
              alt="Lucas"
            >
            
          </v-avatar>
          <span class="pl-3">  Lucas Borges <br>
          <a href="https://github.com/borgeslucaass" class="pl-6"> @borgeslucaass</a>
          </span>
        </v-row>

        <v-row class="pa-4" justify="right">
          <v-avatar>
            <img
              src="../assets/Rodrigo.jpg"
              alt="Rodrigo"
            >
            
          </v-avatar>
          <span class="pl-3">  Rodrigo Modesto <br>
          <a href="https://github.com/RodrigoModesto33" class="pl-6">  @RodrigoModesto33</a>
          </span>
        </v-row>
        </div>
        
        </v-card>






     
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'AboutView',
  }
</script>

<style scoped>


</style>
