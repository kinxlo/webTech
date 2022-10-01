<template>
  <v-card class="mx-auto portfolio_card" max-width="370">
    <v-img :src="state.img" alt="img"> </v-img>
    <v-sheet
      color="var(--mainOverlay)"
      height="100%"
      class="text-center d-flex flex-column align-center justify-center px-16"
    >
      <p class="white--text mb-10">{{ state.desc }}</p>
      <v-btn color="accent" large class="rounded-0 px-10"
        >view details</v-btn
      >
    </v-sheet>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  img: String,
  desc: String,
});
</script>

<style></style>
