<template>
  <!-- <v-sheet height="100vh"> -->
  <v-card
    width="50vw"
    class="pa-5 text-center d-flex flex-column align-center ma-auto"
  >
    <v-img max-width="5rem" src="/vuetify-logo.svg" class="mb-3"></v-img>
    <v-img max-width="1.5rem" src="/favicon.ico" class="mb-3"></v-img>
    <v-card-text>{{ message }}</v-card-text>
    <br />
    <a target="_blank" href="https://github.com/kinxlo/Nuxt-Typescript-Template"
      >[ Github ]</a
    >
    <v-card-text class="author text-caption"
      >Setup by {{ fullName.toLocaleUpperCase() }}</v-card-text
    >
  </v-card>
  <!-- </v-sheet> -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Intro",

  data() {
    return {
      message:
        "This is a [Vue 2 | Nuxt 2 & Typescript] boiler plate template with type check and TS-runtime error display on browser",
      firstName: `kingsley`,
      lastName: `Solomon`,
    };
  },

  computed: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.author {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  bottom: 1em;
  right: 1em;
}
a {
  text-decoration: none;
}
</style>
