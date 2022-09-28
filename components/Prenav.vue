<template>
  <v-layout class="background">
    <v-layout class="align-center justify-space-between cc-wrapper py-3">
      <span class="white--text">+123 456 789</span>
      <!-- <v-spacer></v-spacer> -->
      <div>
        <v-icon dark small class="ml-5" color="">{{
          icon.mdiInstagram
        }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{
          icon.mdiBasketball
        }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{ icon.mdiTwitter }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{ icon.mdiYoutube }}</v-icon>
      </div>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiInstagram, mdiTwitter, mdiYoutube, mdiBasketball } from "@mdi/js";
export default Vue.extend({
  data: () => ({
    icon: {
      mdiInstagram,
      mdiTwitter,
      mdiBasketball,
      mdiYoutube,
    },
  }),
});
</script>

<style lang="scss" scoped>
  .background {
    max-height: 10%;
  }
</style>>

</style>
