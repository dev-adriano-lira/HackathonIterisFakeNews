<template>
  <v-app>
      <AppBarraSuperior/>
      <AppBarraNavegacao/>
      <v-main>
        <router-view/>
      </v-main>
      
    </v-app>
</template>

<script>
import AppBarraSuperior from './components/shared/AppBarraSuperior.vue'
import AppBarraNavegacao from './components/shared/AppBarraNavegacao.vue'

export default {
  name: 'App',    
  
  components: {
    AppBarraSuperior,
    AppBarraNavegacao,
  }
 
};
</script>