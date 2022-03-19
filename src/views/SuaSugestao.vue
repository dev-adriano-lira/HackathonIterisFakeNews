<template>
  <div class="caixa-sugestoes mt-3">
    <v-container>
      <v-card
        
        elevation="2"
        class="d-center-flex pa-2 rounded-lg"
        outlined
        tile
      >
      <h2 class="text-h5 text-center "> <strong>Sugestões </strong> </h2>
  </v-card>
  <br>
      <v-card
       
       elevation="2"
       class="d-center-flex pa-2 rounded-lg"
       outlined
       tile

        >
        <p class="text-center"> <strong>Você também pode ajudar no combate à desinformação!</strong>  Recebeu uma notícia pelo 'zap' e não sabe se ela é confiável? Copie o texto da notícia, cole na caixa abaixo e clique em "Enviar". Sua mensagem será enviada para as agências de checagem parceiras
        </p>
        </v-card>    
        </v-container>

    <v-container>
      <v-card
       
       elevation="2"
        class="d-center-flex pa-2 rounded-lg mt-2"
        outlined
        tile        
        >

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >

          <v-text-field
            v-model="first"
            label="Digite seu nome (opcional)"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="last"
            label="Digite seu e-mail (opcional)"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      
    </v-container>
    <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="2"
      >
        <v-textarea
          outlined
          name="input-7-4"
          label="Cole aqui a notícia* (obrigatório)"
          value=" "
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
      
    >
    Enviar
      
    </v-btn>
  </div>
      </v-card>
        </v-container>

  

  </div>
</template>

<script>

  export default {
    name: 'SuaSugestao',
  }
</script>

<style scoped>

</style>
