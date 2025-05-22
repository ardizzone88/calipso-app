<template>
  <!-- v-app es obligatorio como contenedor principal de Vuetify -->
  <v-app>
    <v-main>
      <v-container class="py-6">
        <FormView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import FormView from './views/FormView.vue'
</script>

<style scoped>
/* Estilos globales opcionales */
</style>
