<template>
  <main class="about">
    <Banner
      title="About"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="state.nav"
    />
    <!-- SECTION TWO -->
    <v-layout
      flex-column-reverse
      flex-lg-row
      align-center
      class="cc-wrapper my-16 py-16"
    >
      <v-card
        flat
        class="about_img_sec_2 rounded-0 mr-md-16"
        width="470"
        height="630"
      >
        <v-img
          class="img-fluid"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664420899/webtech/Rectangle_5_u8qgms.png"
          alt="img"
        ></v-img>
      </v-card>
      <section class="pl-md-10 d-flex flex-column align-center align-md-start">
        <div class="py-5 mb-16 font-title text-center text-md-left">
          <h2
            class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline letter-spacing"
          >
            About
          </h2>
          <h2 class="font-m py-2 font-weight-bold d-inline letter-spacing">
            Us
          </h2>
        </div>
        <p class="info--text" style="line-height: 30px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          laudantium ullam similique nobis adipisci magnam dicta rerum, et
          numquam voluptatibus.
        </p>
        <section class="pl-lg-10 my-10">
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
              v-for="n in 4"
              :key="n"
              class="mb-10 mb-md-0 d-flex justify-center"
            >
              <div class="pa-lg-3 pr-md-15 info--text">
                <h4
                  class="mb-3 font-weight-bold text-center text-md-left"
                  style="font-size: 20px"
                >
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
            cols="12"
            md="4"
            v-for="(person, i) in state.sectionThree"
            :key="i"
            class="d-flex align-center justify-center mb-16 mb-md-0"
          >
            <ProfileCard
              :width="481"
              :height="387"
              :name="person.name"
              :title="person.title"
              :img="person.img.asset._ref"
            />
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION FOUR -->
    <v-layout class="overflow-x-auto">
      <PictureGrid v-for="n in 4" :key="n" />
    </v-layout>
    <!-- SECTION FIVE -->
    <v-sheet class="cc-wrapper d-flex flex-column v-spacing">
      <TestimonialCarousel />
    </v-sheet>
  </main>
</template>

<script setup lang="ts">
import { useAsync, useContext } from "@nuxtjs/composition-api";
import { reactive } from "vue";
import { groq } from "@nuxtjs/sanity";

const sectionThree = groq`*[_type == "workThree"]`;
const sanity = useContext().app.$sanity;

const state = reactive({
  sectionThree: {},
  nav: ["Home", "Services"],
});

state.sectionThree = useAsync(() => sanity.fetch(sectionThree));
</script>

<style></style>
