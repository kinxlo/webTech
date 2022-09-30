<template>
  <main>
    <section class="py-5 text-center">
      <h2
        style="font-size: 40px"
        class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline"
      >
        Our
      </h2>
      <h2 style="font-size: 40px" class="font-m py-2 font-weight-bold d-inline">
        Testimonials
      </h2>
    </section>
    <section class="d-flex align-center">
      <v-icon color="accent" @click.prevent="" size="60">{{
        state.icon.mdiArrowLeftThinCircleOutline
      }}</v-icon>
      <v-layout>
        <Hooper
          :centerMode="true"
          ref="carousel"
          id="carousel"
          :itemsToShow="3"
          class="hooper ma-0 pa-0"
        >
          <slide
            v-for="(head, i) in state.sectionSeven"
            :key="i"
            class="hopper_item d-flex align-center justify-center"
          >
            <v-avatar size="200">
              <SanityImage :asset-id="head.img.asset._ref" auto="format" />
            </v-avatar>
          </slide>
        </Hooper>
      </v-layout>
      <v-icon color="accent" @click="" size="60">{{
        state.icon.mdiArrowRightThinCircleOutline
      }}</v-icon>
    </section>
    <section class="text-center py-5 px-16">
      <p style="font-size: 20px" class="info--text">
        Donec eget elit vel urna varius pharetra. Suspendisse sodales venenatis
        lorem nec tincidunt. Donec dignissim purus ut nulla ultricies.
      </p>
      <h4
        style="font-size: 27px; letter-spacing: 1px"
        class="primary--text mt-7 mb-1"
      >
        Ronal C. Hartung
      </h4>
      <p style="letter-spacing: 4px" class="info--text text-uppercase">
        marketer
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import {
  mdiArrowLeftThinCircleOutline,
  mdiArrowRightThinCircleOutline,
} from "@mdi/js";
import { reactive } from "vue";
import { groq } from "@nuxtjs/sanity";
import { useAsync, useContext } from "@nuxtjs/composition-api";

const state = reactive({
  sectionSeven: {},

  icon: {
    mdiArrowLeftThinCircleOutline,
    mdiArrowRightThinCircleOutline,
  },
});
const sectionSeven = groq`*[_type == "workSeven"]`;

const sanity = useContext().app.$sanity;

state.sectionSeven = useAsync(() => sanity.fetch(sectionSeven));
console.log(state.sectionSeven);
</script>

<style lang="scss">
.hooper-track {
  padding-left: 0 !important;
}
</style>
