<template>
  <v-layout class="background">
    <v-layout
      class="align-center justify-space-between cc-wrapper py-5 px-lg-0"
    >
      <span class="white--text">+123 456 789</span>
      <!-- <v-spacer></v-spacer> -->
      <div>
        <v-icon dark small class="ml-5" color="">{{
          state.icon.mdiInstagram
        }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{
          state.icon.mdiBasketball
        }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{
          state.icon.mdiTwitter
        }}</v-icon>
        <v-icon dark small class="ml-5" color="">{{
          state.icon.mdiYoutube
        }}</v-icon>
      </div>
    </v-layout>
  </v-layout>
</template>

<script setup lang="ts">
import {
  mdiInstagram,
  mdiTwitter,
  mdiYoutube,
  mdiBasketball,
} from '@mdi/js';
import { reactive } from 'vue';

const state = reactive({
  icon: {
    mdiInstagram,
    mdiTwitter,
    mdiBasketball,
    mdiYoutube,
  },
});
</script>

<style lang="scss" scoped>
.background {
  max-height: 10%;
}
</style>
