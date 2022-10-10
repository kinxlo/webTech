<template>
  <main class="about">
    <Banner
      title="About"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664417563/webtech/Rectangle_4_whmbrs.png"
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
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664420899/webtech/Rectangle_5_u8qgms.png"
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
              v-for="item in sectionTwo.slice(2)" 
              :key="item._id"
              class="mb-10 mb-md-0 d-flex justify-center"
            >
              <div class="pa-lg-3 pr-md-15 info--text">
                <h4
                  class="mb-3 font-weight-bold text-center text-md-left"
                  style="font-size: 20px"
                >
                  {{item.title}}
                </h4>
                <p class="info--text" style="line-height: 24px">
                  {{item.desc}}
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
            v-for="(person, i) in sectionThree"
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
    <v-layout class="overflow-x-auto layout">
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
import { reactive, ref } from "vue";
import { groq } from "@nuxtjs/sanity";


const sanity = useContext().app.$sanity;

const state = reactive({
  nav: ["Home", "Services"],
});

const sectionTwoQuery = groq`*[_type == "workTwo"]`;
const sectionTwo = ref<any>([]);
sectionTwo.value = useAsync(() => sanity.fetch(sectionTwoQuery));

const sectionThreeQuery = groq`*[_type == "workThree"]`;
const sectionThree = ref<any>([]);
sectionThree.value = useAsync(() => sanity.fetch(sectionThreeQuery));

</script>

<style>
::-webkit-scrollbar {
    width: 1vw;
    height: 1vh;
}

::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #f90;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}

::-webkit-scrollbar-thumb:hover {
    background-color: #ec8f02;
}
  
</style>
