<template>
  <main>
    <Banner
      title="Services"
      :nav="state.nav"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664450831/webtech/Rectangle_6_n4i8bd.png"
    />
    <v-layout class="v-spacing cc-wrapper">
      <v-row>
        <v-col cols="4" v-for="n in 6" :key="n">
          <ServiceCard />
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  nav: ['About', 'Portfolio'],
});
</script>

<style></style>
