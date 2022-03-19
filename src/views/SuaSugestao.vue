<template>
  <div class="caixa-sugestoes">
    <h2>
      Sugestões de checagem
    </h2>
    <p>Você também pode ajudar no combate à desinformação. Recebeu uma notícia pelo 'zap' e não sabe se ela é confiável? Copie o texto da notícia, cole na caixa abaixo e clique em "Enviar". Sua mensagem será enviada para as agências de checagem parceiras.</p>
    <v-container fluid>
    <v-textarea
      autocomplete="email"
      label="Digite seu nome (opcional)"
    ></v-textarea>
  </v-container>
    
    <v-container fluid>
    <v-textarea
      autocomplete="email"
      label="Digite seu e-mail (opcional)"
    ></v-textarea>
    <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-textarea
          outlined
          name="input-7-4"
          label="Cole aqui a notícia (*obrigatório)"
          value="."
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
  </v-container>

  </div>
</template>

<script>

  export default {
    name: 'SuaSugestao',
  }
</script>
