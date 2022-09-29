<template>
  <main>
    <Banner
      title="About"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <!-- SECTION TWO -->
    <!-- SECTION THREE -->
    <v-layout class="about_section_3">
      <v-layout flex-column class="cc-wrapper v-spacing">
        <div class="py-5 text-center mb-16">
          <h2
            style="font-size: 40px"
            class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline"
          >
            Our
          </h2>
          <h2
            style="font-size: 40px"
            class="font-m py-2 font-weight-bold d-inline"
          >
            Best Workers
          </h2>
        </div>
        <v-row dense no-gutters>
          <v-col
            cols="4"
            v-for="n in 3"
            :key="n"
            class="d-flex align-center justify-center"
          >
            <ProfileCard :width="387" :height="481" />
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION FOUR -->
    <v-layout>
      <PictureGrid />
    </v-layout>
    <!-- SECTION FIVE -->
    <v-sheet class="cc-wrapper d-flex flex-column v-spacing">
      <TestimonialCarousel />
    </v-sheet>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    nav: ["Homepage", "service"],
  }),
});
</script>

<style></style>
