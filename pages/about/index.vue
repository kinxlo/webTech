<template>
  <main class="about">
    <Banner
      title="About"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <!-- SECTION TWO -->
    <v-layout class="cc-wrapper v-spacing">
      <v-card
        flat
        class="about_img_sec_2 rounded-0 mr-16"
        width="470"
        height="630"
      >
        <v-img
          class="img-fluid"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664420899/webtech/Rectangle_5_u8qgms.png"
          alt="img"
        ></v-img>
      </v-card>
      <section class="pl-10">
        <div class="py-5 mb-16">
          <h2
            style="font-size: 40px"
            class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline letter-spacing"
          >
            About
          </h2>
          <h2
            style="font-size: 40px"
            class="font-m py-2 font-weight-bold d-inline letter-spacing"
          >
            Us
          </h2>
        </div>
        <p class="info--text" style="line-height: 30px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          laudantium ullam similique nobis adipisci magnam dicta rerum, et
          numquam voluptatibus.
        </p>
        <section class="pl-10 my-10">
          <v-row no-gutters>
            <v-col cols="6" v-for="n in 4" :key="n">
              <div class="pa-3 pr-15 info--text">
                <h4 class="mb-3 font-weight-bold" style="font-size: 20px">
                  Awesome Features
                </h4>
                <p class="info--text" style="line-height: 24px">
                  Easy-to-use, dynamic colors, grid, video, map and much more .
                </p>
              </div>
            </v-col>
          </v-row>
        </section>
      </section>
    </v-layout>
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
