<template>
  <main>
    <Banner
      title="Portfolio"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664454274/webtech/Rectangle_7_zce5yx.png"
      :nav="state.nav"
    />
<<<<<<< HEAD
    <section class="cc-wrapper v-spacing">
      <v-row>
        <v-col md="4" v-for="n in 6" :key="n">
=======
    <v-layout class="cc-wrapper v-spacing">
      <v-row>
        <v-col cols="4" v-for="n in 6" :key="n">
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
          <PortfolioCard
            img="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            desc=" Lorem ipsum dolor sit amet consectetur, adipisicing."
          />
        </v-col>
      </v-row>
<<<<<<< HEAD
    </section>
=======
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
