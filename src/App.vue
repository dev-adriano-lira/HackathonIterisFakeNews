<template>
  <v-app>
      <AppBarraSuperior/>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
</template>

<script>
import AppBarraSuperior from './components/shared/AppBarraSuperior.vue'

export default {
  name: 'App',    
  
  components: {
    AppBarraSuperior,
  }
 
};
</script>
