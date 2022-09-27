<template>
  <main>
    <!-- HERO SECTION -->
    <v-sheet height="63em" class="hero">
      <v-layout class="cc-wrapper" fill-height>
        <v-sheet
          color="d-flex align-center transparent"
          max-width="60%"
          width="100%"
          height="100%"
        >
          <v-layout class="flex-column white--text hero_desc mt-10">
            <v-layout class="align-center text-h3 mb-10">
              <h1 class="hero_title_number">01</h1>
              <div class="hero_title pl-5 ml-5">
                <p class="font-m mb-8">The Uniqe Creative</p>
                <p class="font-m accent--text">Design Agency</p>
              </div>
            </v-layout>
            <p class="mr-10">
              Always on the lookout for the hi-tech advancements. Build not only
              a
              <br />
              product that can sell well, but a platform through which to
              deliver it.
            </p>
            <v-layout class="mt-10">
              <v-btn
                class="rounded-pill mr-5 text-subtitle-1 px-10 text-capitalize"
                x-large
                color="accent"
                >start now</v-btn
              >
              <v-btn
                outlined
                class="rounded-pill mr-5 text-subtitle-1 px-10 text-capitalize"
                x-large
                color="accent"
                ><span class="white--text">learn more</span></v-btn
              >
            </v-layout>
          </v-layout>
        </v-sheet>
      </v-layout>
      <v-layout class="superhero">
        <v-img eager src="businessman.svg" alt="img"></v-img>
      </v-layout>
      <v-layout class="hero_overlay">
        <v-img eager src="/overlay.png"></v-img>
      </v-layout>
    </v-sheet>
    <!-- SECTION ONE -->
    <v-layout flex-column class="cc-wrapper text-center mb-16">
      <h2 class="text-h4 mb-16 font-weight-bold">
        <span class="font-m accent--text left_border pl-7">How</span>
        <span class="font-m">we Work</span>
      </h2>

      <v-layout align-center justify-space-between class="mt-5">
        <v-sheet class="text-center">
          <v-avatar color="accent" size="180">
            <v-img
              src="https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="img"
            ></v-img>
          </v-avatar>
          <h2>Planning</h2>
        </v-sheet>
        <div>
          <v-img src="/arrowUP.svg" alt="img"></v-img>
        </div>
        <v-sheet class="text-center">
          <v-avatar color="accent" size="180">
            <v-img
              class="img-fluid"
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            ></v-img>
          </v-avatar>
          <h2>Design</h2>
        </v-sheet>
        <div>
          <v-img width="100%" src="/arrowDown.svg" alt="img"></v-img>
        </div>
        <v-sheet class="text-center">
          <v-avatar color="accent" size="180">
            <v-img
              src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            ></v-img>
          </v-avatar>
          <h2>Development</h2>
        </v-sheet>
      </v-layout>
    </v-layout>
    <!-- SECTION TWO -->
    <v-layout class="secondary white--text py-16 my-16vb">
      <v-layout flex-column class="cc-wrapper">
        <v-row dense v-for="n in 2" key="n" class="my-7">
          <v-col v-for="n in 3" key="n" class="d-flex">
            <v-icon size="50" color="accent">{{
              icon.mdiFileDocumentOutline
            }}</v-icon>
            <v-layout class="ml-3" flex-column>
              <h4 style="font-size: 20px" class="my-4">SEO Ready Code</h4>
              <p>
                Tincidunt felis dignissim justo congue, non rutrum tortor
                volutpat .
              </p>
            </v-layout>
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION THREE -->
    <v-layout justify-space-between class="cc-wrapper my-16">
      <v-card
        elevation="0"
        width="287px"
        height="357px"
        class="d-flex flex-column align-start justify-end"
      >
        <h3
          class="left_border pl-5 py-3"
          style="font-size: 40px; line-height: 46px; letter-spacing: 1px"
        >
          <span class="accent--text">Our</span> Best <br />
          Workers
        </h3>
        <v-btn outlined color="accent" x-large class="rounded-0 mb-5 mt-16"
          ><span class="primary--text">View Team</span></v-btn
        >
      </v-card>
      <ProfileCard v-for="n in 3" :key="n" />
    </v-layout>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiAccount, mdiFileCheck, mdiFileDocumentOutline } from "@mdi/js";
export default Vue.extend({
  data: () => ({
    icon: {
      mdiAccount,
      mdiFileCheck,
      mdiFileDocumentOutline,
    },
  }),
});
</script>

<style></style>
