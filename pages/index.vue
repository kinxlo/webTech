<template>
  <v-app>
    <h1 class="name">{{ fullName }}</h1>
    <v-card width="10rem" height="10rem" color="primary" elevation="2"></v-card>
  </v-app>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "Home",

  data() {
    return {
      message:
        "This is a [Vue 2 | Nuxt 2 & Typescript] boiler plate template with type check and ts-runtime error display on browser",
      firstName: `kingsley`,
      lastName: `Solomon W`,
    };
  },

  computed: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    },
  },
});
</script>

<style scoped>
.name {
  font-family: "Montserrat", sans-serif;
}
</style>