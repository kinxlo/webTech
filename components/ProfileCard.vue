<template>
  <section>
    <v-card
      @mouseenter="showProfileSolcials"
      @mouseleave="showProfileSolcials"
      :max-width="width"
      width="100%"
      :height="height"
      elevation="0"
      class="profile_card rounded-0"
    >
      <SanityImage :asset-id="img" auto="format" />
      <Transition>
        <v-sheet
          v-if="state.show"
          id="profileSocials"
          width="100%"
          class="accent profile_socials pa-3 justify-center d-flex"
        >
          <NuxtLink to="/" v-for="n in 5" :key="n" class="mx-2">
            <v-icon color="white">{{ state.icon.mdiFacebook }}</v-icon>
          </NuxtLink>
        </v-sheet>
      </Transition>
    </v-card>
    <v-layout flex-column align-center class="mt-7">
      <h5 class="primary--text" style="font-size: 26px; letter-spacing: 1px">
        {{ name }}
      </h5>
      <p class="text-uppercase info--text mt-2" style="font-size: 14px; letter-spacing: 2px">
        {{ title }}
      </p>
    </v-layout>
  </section>
</template>

<script setup lang="ts">
import { mdiFacebook, mdiTwitter } from "@mdi/js";
import { reactive } from "vue";

defineProps({
  width: Number,
  height: Number,
  name: String,
  title: String,
  img: String,
});

const state = reactive({
  show: false,
  icon: {
    mdiTwitter,
    mdiFacebook,
  },
});

function showProfileSolcials(e): void {
  switch (e.type) {
    case `mouseenter`:
      state.show = !state.show;
      break;
    case `mouseleave`:
      state.show = !state.show;
      break;
  }
}
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
