<template>
  <main>
    <Banner
      title="Contact Us"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664454637/webtech/Rectangle_8_d0lzrx.png"
      :nav="state.nav"
    />
    <!-- SECTION ONE -->
    <v-layout class="cc-wrapper v-spacing">
      <v-row>
        <v-col cols="12" md="3" v-for="n in 4" :key="n" class="mb-10 mb-md-0">
          <div class="d-flex align-start">
            <v-icon large color="accent">{{ state.icon.mdiCellphone }}</v-icon>
            <div class="ml-5">
              <h5 style="font-size: 20px" class="font-weight-bold mb-3">
                Phone
              </h5>
              <p style="font-size: 14px" class="info--text">
                Call customer services on 808-872-9343
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-layout>
    <!-- SECTION TWO -->
    <v-sheet height="20em">
      <v-img
        class="img-fluid"
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664456362/webtech/Mask_uqekkn.png"
        alt="map"
      ></v-img>
    </v-sheet>
    <!-- SECTION THREE -->
    <v-layout class="cc-wrapper">
      <v-form class="my-16">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="First name"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="last name"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                color="accent"
                type="email"
                solo
                hide-details
                outlined
                flat
                placeholder="Email Address"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="Subject"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="Write your message"
              ></v-textarea>
            </v-col>
            <v-col class="text-right">
              <v-btn color="accent rounded-0 px-10" large>Send message</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </main>
</template>

<script setup lang="ts">
import { mdiCellphone } from "@mdi/js";
import { reactive } from "vue";

const state = reactive({
  nav: ["Homepage", "service"],
  icon: {
    mdiCellphone,
  },
});
</script>

<style></style>
