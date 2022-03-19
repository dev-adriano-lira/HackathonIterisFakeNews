<template>
<v-card class="overflow-hidden">
    <v-app-bar class="pl-1"
      absolute
      color="grey lighten-3"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7">
      
      <v-toolbar-title>
         <v-row>
        <router-link to="/">
          <v-btn class="pl-0 pr-0"><v-img class="imagem mb-1" src="../../assets/logo.png"></v-img></v-btn>
        </router-link>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 50px;">
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
    name: 'AppBarraSuperior'

};
</script>

<style scoped>
 .app-bottom-bar a {
    text-decoration: none;
 }

 .imagem {
   width: 125px;
   margin-left: 1px;
  
 }
</style>