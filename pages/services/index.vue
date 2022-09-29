<template>
  <main>
    <Banner
      title="Services"
      :nav="nav"
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

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    nav: ["About", "Portfolio"],
  }),
});
</script>

<style></style>
