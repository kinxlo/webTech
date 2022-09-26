<template>
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
              <p class="font-m primary--text">Design Agency</p>
            </div>
          </v-layout>
          <p class="mr-10">
            Always on the lookout for the hi-tech advancements. Build not only a
            <br />
            product that can sell well, but a platform through which to deliver
            it.
          </p>
          <v-layout class="mt-10">
            <v-btn
              class="rounded-pill mr-5 text-subtitle-1 px-10 text-capitalize"
              x-large
              color="primary"
              >start now</v-btn
            >
            <v-btn
              outlined
              class="rounded-pill mr-5 text-subtitle-1 px-10 text-capitalize"
              x-large
              color="primary"
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
</template>

<script>
export default {};
</script>

<style></style>
