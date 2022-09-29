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
        icon.mdiArrowLeftThinCircleOutline
      }}</v-icon>
      <v-layout>
        <hooper
          :centerMode="true"
          ref="carousel"
          id="carousel"
          :itemsToShow="3"
          class="hooper ma-0 pa-0"
        >
          <slide
            v-for="n in 10"
            :key="n"
            class="hopper_item d-flex align-center justify-center"
          >
            <v-avatar size="200">
              <v-img
                src="https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="img"
              ></v-img>
            </v-avatar>
          </slide>
        </hooper>
      </v-layout>
      <v-icon color="accent" @click="" size="60">{{
        icon.mdiArrowRightThinCircleOutline
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

<script lang="ts">
import Vue from "vue";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import {
  mdiArrowLeftThinCircleOutline,
  mdiArrowRightThinCircleOutline,
} from "@mdi/js";

export default Vue.extend({
  components: {
    Hooper,
    Slide,
  },

  data: () => ({
    icon: {
      mdiArrowLeftThinCircleOutline,
      mdiArrowRightThinCircleOutline,
    },
  }),

  methods: {},
});
</script>

<style lang="scss">
.hooper-track {
  padding-left: 0 !important;
}
</style>
