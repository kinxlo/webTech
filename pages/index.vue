<template>
  <main>
    <!-- HERO SECTION -->
    <v-sheet height="63em" class="hero">
      <v-layout class="cc-wrapper" fill-height>
        <v-sheet
          color="d-flex align-md-center justify-center justify-lg-start transparent"
          width="100%"
          height="100%"
        >
          <section class="d-flex flex-column align-center align-sm-start justify-center hero_desc">
            <section
              style="font-size: 50px; line-height: 50px"
              class="d-flex flex-column flex-sm-row align-end align-sm-center justify-center justify-md-start mb-md-10"
            >
              <h1 class="hero_title_number grey--text">01</h1>

              <div class="hero_title pl-5 ml-5">
                <p class="font-m mb-8 white--text" style="font-size: 50px; line-height: 50px">
                  The Uniqe Creative
                </p>
                <p class="font-m accent--text" style="font-size: 50px; line-height: 50px">
                  Design Agency
                </p>
              </div>
            </section>
            <section class="mt-16 mt-md-0">
              <p class="mr-md-10 white--text">
                Always on the lookout for the hi-tech advancements. Build not only a
                <br />
                product that can sell well, but a platform through which to deliver it.
              </p>
              <v-layout flex-column flex-sm-row class="mt-10 px-16 px-sm-0">
                <v-btn
                  class="rounded-pill mr-sm-5 my-5 text-subtitle-1 px-10 text-capitalize"
                  x-large
                  color="accent"
                >
                  start now</v-btn
                >
                <v-btn
                  outlined
                  class="rounded-pill mr-sm-5 my-5 text-subtitle-1 px-10 text-capitalize"
                  x-large
                  color="accent"
                  ><span class="white--text">learn more</span></v-btn
                >
              </v-layout>
            </section>
          </section>
        </v-sheet>
      </v-layout>
      <v-layout class="superhero d-none d-lg-block">
        <v-img eager src="businessman.svg" alt="img"></v-img>
      </v-layout>
      <v-layout class="hero_overlay">
        <v-img eager src="/overlay.png"></v-img>
      </v-layout>
    </v-sheet>
    <!-- SECTION ONE -->
    <v-layout flex-column class="cc-wrapper text-center mb-16">
      <div class="py-5 text-center">
        <h2 class="font-m font-header accent--text left_border pl-7 py-2 font-weight-bold d-inline">
          How
        </h2>
        <h2 class="font-m font-header py-2 font-weight-bold d-inline">We Work</h2>
      </div>

      <v-layout flex-column flex-md-row align-center justify-space-between class="my-16">
        <v-sheet class="text-center mb-16 mb-md-0">
          <v-avatar color="accent" size="180">
            <SanityImage :asset-id="state.sectionOne[0].img.asset._ref" auto="format" />
          </v-avatar>
          <h2 class="font-title mt-3">
            {{ state.sectionOne[0].desc }}
          </h2>
        </v-sheet>
        <div class="d-none d-md-block">
          <v-img src="/arrowUP.svg" alt="img"></v-img>
        </div>
        <v-sheet class="text-center mb-16 mb-md-0">
          <v-avatar color="accent" size="180">
            <SanityImage :asset-id="state.sectionOne[1].img.asset._ref" auto="format" />
          </v-avatar>
          <h2 class="font-title mt-3">
            {{ state.sectionOne[1].desc }}
          </h2>
        </v-sheet>
        <div class="d-none d-md-block">
          <v-img width="100%" src="/arrowDown.svg" alt="img"></v-img>
        </div>
        <v-sheet class="text-center mb-16 mb-md-0">
          <v-avatar color="accent" size="180">
            <SanityImage :asset-id="state.sectionOne[2].img.asset._ref" auto="format" />
          </v-avatar>
          <h2 class="font-title mt-3">
            {{ state.sectionOne[2].desc }}
          </h2>
        </v-sheet>
      </v-layout>
    </v-layout>
    <!-- SECTION TWO -->
    <v-layout class="secondary white--text py-5">
      <v-layout flex-column class="cc-wrapper py-16">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(article, i) in state.sectionTwo"
            :key="i"
            class="d-flex flex-column flex-md-row align-center align-md-start my-10"
          >
            <v-avatar size="40" class="transparent rounded-0 mt-2">
              <SanityImage :asset-id="article.img.asset._ref" auto="format" />
            </v-avatar>
            <v-layout class="ml-md-3 text-center text-md-left" flex-column>
              <h4 style="font-size: 20px" class="my-4 white--text">SEO Ready Code</h4>
              <p class="white--text">
                Tincidunt felis dignissim justo congue, non rutrum tortor volutpat .
              </p>
            </v-layout>
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION THREE -->
    <v-layout
      flex-column
      flex-md-row
      justify-space-between
      align-center
      align-md-start
      class="cc-wrapper v-spacing"
    >
      <v-card
        elevation="0"
        width="287px"
        height="357px"
        class="d-flex flex-column align-start justify-end"
      >
        <h3
          class="left_border pl-5 py-3 font-header font-weight-bold"
          style="line-height: 46px; letter-spacing: 1px"
        >
          <span class="accent--text font-weight-bold">Our</span>
          Best <br />
          Workers
        </h3>
        <v-btn outlined color="accent" x-large class="rounded-0 mb-5 mt-16"
          ><span class="primary--text">View Team</span>
        </v-btn>
      </v-card>
      <v-layout>
        <v-row no-gutters>
          <v-col
            cols="12"
            md="6"
            lg="4"
            class="d-flex justify-center mb-16 mb-md-0"
            v-for="(person, i) in state.sectionThree"
            :key="i"
          >
            <ProfileCard
              :width="287"
              :height="356"
              :name="person.name"
              :title="person.title"
              :img="person.img.asset._ref"
            />
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION FOUR -->
    <v-layout class="section_4">
      <v-layout flex-column class="cc-wrapper py-10">
        <h3
          class="left_border pl-5 my-13 text-capitalize font-header"
          style="letter-spacing: 1px; line-height: 46px"
        >
          Few reasons <br />
          <span class="accent--text font-weight-bold font-m">why choose us</span>
        </h3>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="accent--text">.01</h5>
          <h6 class="my-8 font-weight-bold" style="font-size: 16px; letter-spacing: 1px">
            Clients
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quas error odio quia
            commodi, vitae in laboriosam. Voluptate quisquam beatae ipsa amet, odit repudiandae
            placeat qui aspernatur officiis explicabo ad.
          </p>
        </v-sheet>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="info--text">.02</h5>
          <h6 class="my-8 font-weight-bold" style="font-size: 16px; letter-spacing: 1px">
            Projects
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quas error odio quia
            commodi, vitae in laboriosam. Voluptate quisquam beatae ipsa amet, odit repudiandae
            placeat qui aspernatur officiis explicabo ad.
          </p>
        </v-sheet>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="info--text">.03</h5>
          <h6 class="my-8 font-weight-bold" style="font-size: 16px; letter-spacing: 1px">
            Reporting & Analysis
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quas error odio quia
            commodi, vitae in laboriosam. Voluptate quisquam beatae ipsa amet, odit repudiandae
            placeat qui aspernatur officiis explicabo ad.
          </p>
        </v-sheet>
      </v-layout>
    </v-layout>
    <!-- SECTION FIVE -->
    <v-layout class="overflow-x-auto">
      <PictureGrid v-for="n in 4" :key="n" />
    </v-layout>
    <!-- SECTION SIX -->
    <v-sheet class="cc-wrapper d-flex flex-column v-spacing">
      <TestimonialCarousel />
    </v-sheet>
    <!-- SECTION SEVEN -->
    <v-sheet height="635" class="secondary my-16">
      <v-layout justify-center fill-height class="cc-wrapper">
        <v-sheet height="100%" class="transparent sec_7_img_container d-none d-lg-block">
          <v-img
            class="sec_7_img"
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664405024/webtech/Rectangle_2_eaeuym.png"
            alt="img"
          ></v-img>
        </v-sheet>
        <v-sheet
          class="text-center text-md-left transparent d-flex flex-column align-center align-md-start justify-center"
        >
          <h1 class="white--text font-weight-bold font-jumbo">
            A New Era of <br />
            <span class="accent--text font-weight-medium">Innovation</span>
          </h1>
          <p class="white--text my-10 font-m" style="font-size: 18px; letter-spacing: 1px">
            Always on the lookout for the hi-tech advancements. Build a product that will sell well
          </p>
          <div class="d-flex flex-column flex-md-row">
            <v-btn color="accent" x-large class="px-7 rounded-0 mr-md-5 my-5">Start Now</v-btn>
            <v-btn color="accent" outlined x-large class="px-7 rounded-0 mr-md-5 my-5"
              ><span class="white--text">Learn More</span></v-btn
            >
          </div>
        </v-sheet>
      </v-layout>
    </v-sheet>
    <!-- SECTION EIGHT -->
    <v-layout flex-column class="cc-wrapper v-spacing">
      <div class="py-5 text-center mb-16">
        <h2 class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline font-header">
          Our
        </h2>
        <h2 class="font-m py-2 font-weight-bold d-inline font-header">News</h2>
      </div>
      <v-row no-gutters>
        <v-col cols="12" md="7" lg="8" class="pr-md-3 d-flex flex-column align-center">
          <v-card class="rounded-0">
            <v-img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664407849/webtech/Rectangle_3_dggxie.png"
              alt="img"
            >
              <v-chip class="ma-5 rounded-0 accent">Software</v-chip>
            </v-img>
          </v-card>
          <v-layout flex-column class="pa-sm-16 mt-5 mt-sm-0">
            <h4 class="letter-spacing">Motion Animation And VR Headset</h4>
            <div class="info--text mt-3 mb-7">
              <span class="text-body-2 text-capitalize mr-16">emmajohnson</span>
              <span class="text-body-2 text-capitalize mr-16">May 17, 2019</span>
            </div>
            <p class="info--text mb-5 mb-md-16" style="line-height: 30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur deleniti
              natus corrupti asperiores ratione alias laboriosam saepe harum mollitia ad eligendi at
              deserunt, doloribus numquam maxime velit beatae temporibus autem, accusantium
              molestias aliquid. Quos repudiandae iure, animi ipsum fugiat blanditiis fuga dolore
              aperiam quidem, amet accusamus cum numquam harum dolorum doloremque eligendi.
            </p>
            <div>
              <v-btn text class="font-weight-bold text-left">View Details</v-btn>
            </div>
          </v-layout>
        </v-col>
        <v-col cols="12" md="5" lg="4" class="pl-md-3 mt-16 mt-md-0 d-flex flex-column align-center">
          <v-card
            v-for="n in 2"
            :key="n"
            max-width="30rem"
            width="100%"
            height="393"
            elevation="0"
            class="rounded-0 transparent mb-10 mb-md-6"
          >
            <v-sheet height="60%">
              <v-img
                class="img-fluid"
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664407849/webtech/Rectangle_3_dggxie.png"
                alt="img"
              >
                <v-chip class="ma-5 rounded-0 accent">Security</v-chip>
              </v-img>
            </v-sheet>
            <v-sheet height="40%" class="primary d-flex flex-column justify-center px-7">
              <h3 class="white--text letter-spacing font-subtitle">
                Awesome Tips to Become CEO Of Big NetWork Startup
              </h3>
              <div class="info--text my-3 white--text d-flex justify-space-between">
                <span class="text-capitalize mr-md-16 text-caption">emmajohnson</span>

                <span class="text-capitalize mr-md-16 text-caption">May 17, 2019</span>
              </div>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script setup lang="ts">
import { mdiAccount, mdiFileCheck, mdiFileDocumentOutline, mdiPlus } from "@mdi/js";
import { groq } from "@nuxtjs/sanity";
import { useAsync, useContext } from "@nuxtjs/composition-api";
import { reactive } from "vue";

const state = reactive({
  sectionOne: {},
  sectionTwo: {},
  sectionThree: {},
  icon: {
    mdiAccount,
    mdiFileCheck,
    mdiFileDocumentOutline,
    mdiPlus,
  },
});
const sectionOne = groq`*[_type == "workOne"]`;
const sectionTwo = groq`*[_type == "workTwo"]`;
const sectionThree = groq`*[_type == "workThree"]`;
const sanity = useContext().app.$sanity;

state.sectionOne = useAsync(() => sanity.fetch(sectionOne));
state.sectionTwo = useAsync(() => sanity.fetch(sectionTwo));
state.sectionThree = useAsync(() => sanity.fetch(sectionThree));
</script>

<style></style>
