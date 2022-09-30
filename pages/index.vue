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
              <h1 class="hero_title_number grey--text">01</h1>
              <div class="hero_title pl-5 ml-5">
                <p class="font-m mb-8 white--text">The Uniqe Creative</p>
                <p class="font-m accent--text">Design Agency</p>
              </div>
            </v-layout>
            <p class="mr-10 white--text">
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
    <v-layout flex-column class="cc-wrapper text-center v-spacing">
      <div class="py-5 text-center">
        <h2
          style="font-size: 40px"
          class="font-m accent--text left_border pl-7 py-2 font-weight-bold d-inline"
        >
          How
        </h2>
        <h2
          style="font-size: 40px"
          class="font-m py-2 font-weight-bold d-inline"
        >
          We Work
        </h2>
      </div>

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
    <v-layout class="secondary white--text v-padding">
      <v-layout flex-column class="cc-wrapper">
        <v-row dense v-for="n in 2" :key="n" class="my-7">
          //where is 2 from?????
          <v-col v-for="n in 3" :key="n" class="d-flex">
            <v-icon size="50" color="accent">{{
              icon.mdiFileDocumentOutline
            }}</v-icon>
            <v-layout class="ml-3" flex-column>
              <h4 style="font-size: 20px" class="my-4 white--text">
                SEO Ready Code
              </h4>
              <p class="white--text">
                Tincidunt felis dignissim justo congue, non rutrum tortor
                volutpat .
              </p>
            </v-layout>
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION THREE -->
    <v-layout justify-space-between class="cc-wrapper my-16 py-16">
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
      <v-layout>
        <v-row no-gutters>
          <v-col cols="4" class="d-flex justify-center" v-for="n in 3" :key="n">
            <ProfileCard :width="287" :height="356" />
          </v-col>
        </v-row>
      </v-layout>
    </v-layout>
    <!-- SECTION FOUR -->
    <v-layout class="section_4">
      <v-layout flex-column class="cc-wrapper py-10">
        <h3
          class="left_border pl-5 my-13 text-capitalize"
          style="font-size: 40px; letter-spacing: 1px; line-height: 46px"
        >
          Few reasons <br />
          <span class="accent--text font-weight-bold font-m"
            >why choose us</span
          >
        </h3>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="accent--text">.01</h5>
          <h6
            class="my-8 font-weight-bold"
            style="font-size: 16px; letter-spacing: 1px"
          >
            Clients
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quas error odio quia commodi, vitae in laboriosam. Voluptate
            quisquam beatae ipsa amet, odit repudiandae placeat qui aspernatur
            officiis explicabo ad.
          </p>
        </v-sheet>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="info--text">.02</h5>
          <h6
            class="my-8 font-weight-bold"
            style="font-size: 16px; letter-spacing: 1px"
          >
            Projects
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quas error odio quia commodi, vitae in laboriosam. Voluptate
            quisquam beatae ipsa amet, odit repudiandae placeat qui aspernatur
            officiis explicabo ad.
          </p>
        </v-sheet>
        <v-sheet max-width="50em" width="100%" class="my-10 transparent">
          <h5 style="font-size: 44px" class="info--text">.03</h5>
          <h6
            class="my-8 font-weight-bold"
            style="font-size: 16px; letter-spacing: 1px"
          >
            Reporting & Analysis
          </h6>
          <p class="info--text" style="line-height: 30px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quas error odio quia commodi, vitae in laboriosam. Voluptate
            quisquam beatae ipsa amet, odit repudiandae placeat qui aspernatur
            officiis explicabo ad.
          </p>
        </v-sheet>
      </v-layout>
    </v-layout>
    <!-- SECTION FIVE -->
    <v-layout>
      <PictureGrid />
    </v-layout>
    <!-- SECTION SIX -->
    <v-sheet class="cc-wrapper d-flex flex-column v-spacing">
      <TestimonialCarousel />
    </v-sheet>
    <!-- SECTION SEVEN -->
    <v-sheet height="635" class="secondary my-16">
      <v-layout fill-height class="cc-wrapper">
        <v-sheet height="100%" class="transparent sec_7_img_container">
          <v-img
            class="sec_7_img"
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664405024/webtech/Rectangle_2_eaeuym.png"
            alt="img"
          ></v-img>
        </v-sheet>
        <v-sheet
          class="transparent d-flex flex-column align-start justify-center"
        >
          <h1
            class="white--text font-weight-bold"
            style="font-size: 70px; letter-spacing: 1px; line-height: 80px"
          >
            A New Era of <br />
            <span class="accent--text font-weight-medium">Innovation</span>
          </h1>
          <p
            class="white--text my-10 font-m"
            style="font-size: 18px; letter-spacing: 1px"
          >
            Always on the lookout for the hi-tech advancements. Build a product
            that will sell well
          </p>
          <div>
            <v-btn color="accent" x-large class="px-7 rounded-0 mr-5"
              >Start Now</v-btn
            >
            <v-btn color="accent" outlined x-large class="px-7 rounded-0 mr-5"
              ><span class="white--text">Learn More</span></v-btn
            >
          </div>
        </v-sheet>
      </v-layout>
    </v-sheet>
    <!-- SECTION EIGHT -->
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
          News
        </h2>
      </div>
      <v-row no-gutters>
        <v-col cols="8" class="pr-3">
          <v-card class="rounded-0">
            <v-img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664407849/webtech/Rectangle_3_dggxie.png"
              alt="img"
            >
              <v-chip class="ma-5 rounded-0 accent">Software</v-chip>
            </v-img>
          </v-card>
          <v-layout flex-column class="pa-16">
            <h4 class="letter-spacing">Motion Animation And VR Headset</h4>
            <div class="info--text mt-3 mb-7">
              <span class="text-body-2 text-capitalize mr-16">emmajohnson</span>
              <span class="text-body-2 text-capitalize mr-16"
                >May 17, 2019</span
              >
            </div>
            <p class="info--text mb-16" style="line-height: 30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              tenetur deleniti natus corrupti asperiores ratione alias
              laboriosam saepe harum mollitia ad eligendi at deserunt, doloribus
              numquam maxime velit beatae temporibus autem, accusantium
              molestias aliquid. Quos repudiandae iure, animi ipsum fugiat
              blanditiis fuga dolore aperiam quidem, amet accusamus cum numquam
              harum dolorum doloremque eligendi.
            </p>
            <p class="text-overline font-weight-bold">View Details</p>
          </v-layout>
        </v-col>
        <v-col cols="4" class="pl-3">
          <v-card
            v-for="n in 2"
            :key="n"
            height="393"
            elevation="0"
            class="rounded-0 transparent mb-6"
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
            <v-sheet height="40%" class="primary pa-7">
              <h6 style="font-size: 18px" class="white--text letter-spacing">
                Awesome Tips to Become CEO Of Big NetWork Startup
              </h6>
              <div class="info--text mt-3 mb-7 white--text">
                <span class="text-body-2 text-capitalize mr-16"
                  >emmajohnson</span
                >
                <span class="text-body-2 text-capitalize mr-16"
                  >May 17, 2019</span
                >
              </div>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiAccount,
  mdiFileCheck,
  mdiFileDocumentOutline,
  mdiPlus,
} from "@mdi/js";

export default Vue.extend({
  data: () => ({
    icon: {
      mdiAccount,
      mdiFileCheck,
      mdiFileDocumentOutline,
      mdiPlus,
    },
  }),
});
</script>

<style></style>
