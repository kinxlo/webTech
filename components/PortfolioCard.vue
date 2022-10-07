<template>
  <v-card class="mx-auto portfolio_card" max-width="370">
    <!-- <v-img :src="img" alt="img"> </v-img> -->
    <SanityImage :asset-id="img" auto="format" />
    <v-sheet
      color="var(--mainOverlay)"
      height="100%"
      class="text-center d-flex flex-column align-center justify-center px-16"
    >
      <p class="white--text mb-10">{{ desc }}</p>
      <v-btn color="accent" large class="rounded-0 px-10">view details</v-btn>
    </v-sheet>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  img: String,
  desc: String,
});
</script>

<style></style>
