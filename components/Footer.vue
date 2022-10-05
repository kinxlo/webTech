<template>
  <v-layout flex-column class="primary ">
    <v-footer color="transparent" class="cc-wrapper v-spacing px-10 px-lg-0" padless>
      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          class="pr-md-5 text-center text-sm-left text-md-left mb-16 mb-md-0"
        >
          <h4
            class="accent--text text-uppercase font-m"
            style="letter-spacing: 4.8px; font-size: 12px"
          >
            About Us
          </h4>
          <p class="white--text my-10 font-caption" style="line-height: 30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            nostrum explicabo! Quas voluptas officia doloremque cumque, nemo
            voluptate est, obcaecati repellendus inventore neque molestiae sint
            exercitationem consectetur nobis doloribus asperiores.
          </p>
          <v-layout justify-center justify-sm-start>
            <v-icon dark class="mr-5 hvr-float" color="">{{
              state.icon.mdiInstagram
            }}</v-icon>
            <v-icon dark class="mr-5 hvr-float" color="">{{
              state.icon.mdiBasketball
            }}</v-icon>
            <v-icon dark class="mr-5 hvr-float" color="">{{
              state.icon.mdiTwitter
            }}</v-icon>
            <v-icon dark class="mr-5 hvr-float" color="">{{
              state.icon.mdiYoutube
            }}</v-icon>
          </v-layout>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="px-md-5 text-center text-sm-left mb-16 mb-md-0"
        >
          <h4
            class="accent--text text-uppercase font-m mb-10"
            style="letter-spacing: 4.8px; font-size: 12px"
          >
            Recent post
          </h4>
          <v-layout flex-column justify-space-between>
            <div class="pb-5 bottom_border">
              <NuxtLink to="/" class="white--text d-flex align-start">
                <v-icon color="accent">{{ state.icon.mdiChevronRight }}</v-icon>
                <p class="white--text ml-2">Motion Animation And VR Headset</p>
              </NuxtLink>
            </div>
            <div class="py-5 bottom_border">
              <NuxtLink to="/" class="white--text d-flex align-start">
                <v-icon color="accent">{{ state.icon.mdiChevronRight }}</v-icon>
                <p class="white--text ml-2">
                  Awesome Tips to Become CEO Of Big NetWork Startup
                </p>
              </NuxtLink>
            </div>
            <div class="py-5 bottom_borde">
              <NuxtLink to="/" class="white--text d-flex align-start">
                <v-icon color="accent">{{ state.icon.mdiChevronRight }}</v-icon>
                <p class="white--text ml-2">
                  Awesome Tips to Become CEO Of Big NetWork Startup
                </p>
              </NuxtLink>
            </div>
          </v-layout>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="pl-md-5 text-center text-sm-left mb-16 mb-md-0"
        >
          <h4
            class="accent--text text-uppercase font-m mb-10"
            style="letter-spacing: 4.8px; font-size: 12px"
          >
            Contact Us
          </h4>
          <v-layout flex-column class="justify-space-between">
            <div to="/" class="white--text d-flex align-start mb-5">
              <v-icon color="accent">{{ state.icon.mdiMapMarker }}</v-icon>
              <p class="white--text ml-2">53 Hilltop Drive,Tx 79022</p>
            </div>

            <div to="/" class="white--text d-flex align-start mb-5">
              <v-icon color="accent">{{ state.icon.mdiPhone }}</v-icon>
              <p class="white--text ml-2">806-377-1600</p>
            </div>

            <div to="/" class="white--text d-flex align-start mb-5">
              <v-icon color="accent">{{ state.icon.mdiMail }}</v-icon>
              <p class="white--text ml-2">example@example.com</p>
            </div>
          </v-layout>
        </v-col>
      </v-row>
    </v-footer>
    <v-layout justify-center class="secondary py-3">
      <span
        style="letter-spacing: 4px; font-size: 12px"
        class="white--text text-uppercase"
      >
        copyright &copy; {{ year }} webtech
      </span>
    </v-layout>
  </v-layout>
</template>

<script setup>
import {
  mdiInstagram,
  mdiTwitter,
  mdiYoutube,
  mdiBasketball,
  mdiChevronRight,
  mdiMapMarker,
  mdiPhone,
  mdiMail,
} from "@mdi/js";

import { computed, reactive } from "vue";

const state = reactive({
  icon: {
    mdiInstagram,
    mdiTwitter,
    mdiBasketball,
    mdiYoutube,
    mdiChevronRight,
    mdiMapMarker,
    mdiPhone,
    mdiMail,
  },
});

const year = computed(() => {
  return new Date().getFullYear();
});
</script>
