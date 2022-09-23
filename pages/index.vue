<template>
  <h1>{{ fullName }}</h1>
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

<style></style>
