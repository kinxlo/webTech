<template>
  <main>
    <Banner
      title="Contact Us"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664454637/webtech/Rectangle_8_d0lzrx.png"
      :nav="state.nav"
    />
    <!-- SECTION ONE -->
    <v-layout class="cc-wrapper v-spacing">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="item in contactItem"
          :key="item._id"
          class="mb-10 mb-md-0 d-flex justify-center"
        >
          <div class="d-flex align-start">
            <SanityImage :asset-id="item.img.asset._ref" auto="format" />
            <div class="ml-5">
              <h5 style="font-size: 20px" class="font-weight-bold mb-3">{{ item.title }}</h5>
              <p style="font-size: 14px" class="info--text">
                {{ item.desc }}
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
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664456362/webtech/Mask_uqekkn.png"
        alt="map"
      ></v-img>
    </v-sheet>
    <!-- SECTION THREE -->
    <v-layout class="cc-wrapper">
      <v-form ref="form"  class="my-16 mx-auto">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="First name"
                name="user_firstName"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="last name"
                name="user_lastName"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                color="accent"
                type="email"
                solo
                hide-details
                outlined
                flat
                placeholder="Email Address"
                name="user_email"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                color="accent"
                solo
                hide-details
                outlined
                flat
                placeholder="Subject"
                name="user_subject"
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
                name="message"
              ></v-textarea>
            </v-col>
            <v-col class="text-right">
              <v-btn @click.prevent="handleSubmit" color="accent rounded-0 px-10" large>Send message</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </main>
</template>

<script setup lang="ts">
import { mdiCellphone } from "@mdi/js";
import { ref, reactive } from "vue";
import { useAsync, useContext } from "@nuxtjs/composition-api";
import { groq } from "@nuxtjs/sanity";
import emailjs from "@emailjs/browser";

const state = reactive({
  nav: ["Home", "About"],
  icon: {
    mdiCellphone,
  },
});

const form = ref();

// console.log( this.$ref.form)

const handleSubmit = () => {
  console.log("form");

  emailjs
    .sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      // this.$ref.form,
      process.env.EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};

const sanity = useContext().app.$sanity;
const query = groq`*[_type == "contact"]`;
const contactItem = ref<any>([]);
contactItem.value = useAsync(() => sanity.fetch(query));
</script>

<style></style>
