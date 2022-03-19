<template>
  <div class="overflow-hidden">
    <v-bottom-navigation :value="value" background-color="gray" app grow>
      

      <router-link to="/">
      <v-btn depressed elevation="3" large plain align="center" justify="space-around">
        <span>Início</span>
        <v-icon>mdi-home-circle-outline</v-icon>
      </v-btn>
      </router-link>
      
      <router-link to="/sobrenos">
        <v-btn depressed elevation="3" large plain align="center" justify="space-around">
         <span>Informações</span>

        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
       </router-link>

      <router-link to="/suasugestao">
      <v-btn depressed elevation="3" large plain align="center" justify="space-around">
        <span>Sugestões</span>
        <v-icon>mdi-message-text-outline</v-icon>
      </v-btn>
      </router-link>

      

    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
    name: 'AppBarraNavegacao'

    
}
</script>

<style>

 .overflow-hidden a {
    text-decoration: none;
}

</style>