<template>
  <main>
    <Banner
      title="Services"
      :nav="state.nav"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664450831/webtech/Rectangle_6_n4i8bd.png"
    />
<<<<<<< HEAD
    <section class="v-spacing cc-wrapper">
      <v-row>
        <v-col md="4" v-for="n in 6" :key="n">
          <ServiceCard />
        </v-col>
      </v-row>
    </section>
=======
    <v-layout class="v-spacing cc-wrapper">
      <v-row>
        <v-col cols="4" v-for="n in 6" :key="n">
          <ServiceCard />
        </v-col>
      </v-row>
    </v-layout>
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
  </main>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { reactive } from "vue";

const state = reactive({
  nav: ["About", "Portfolio"],
=======
import { reactive } from 'vue';

const state = reactive({
  nav: ['About', 'Portfolio'],
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
});
</script>

<style></style>
