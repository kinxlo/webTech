<template>
  <section>
    <v-card
      @mouseenter="showProfileSolcials"
      width="287"
      height="357"
      elevation="0"
      class="profile_card rounded-0"
    >
      <v-img
        class="img-fluid"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="img"
      ></v-img>
      <v-sheet
        id="profileSocials"
        width="100%"
        class="accent profile_socials pa-3 justify-center"
        :class="`d-none`"
      >
        <NuxtLink to="/" v-for="n in 5" :key="n" class="mx-2">
          <v-icon color="white">{{ icon.mdiFacebook }}</v-icon>
        </NuxtLink>
      </v-sheet>
    </v-card>
    <v-layout flex-column align-center class="mt-7">
      <h5 class="primary--text" style="font-size: 26px; letter-spacing: 1px">
        Kingsley Solomon
      </h5>
      <p
        class="text-uppercase info--text mt-2"
        style="font-size: 14px; letter-spacing: 2px"
      >
        Head of SEO
      </p>
    </v-layout>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiFacebook, mdiTwitter } from "@mdi/js";
export default Vue.extend({
  data: () => ({
    icon: {
      mdiTwitter,
      mdiFacebook,
    },
  }),

  methods: {
    showProfileSolcials(e): void {
      //   const elSocials: object = e.target.getElementById(`profileSocials`);
      console.log(e.target.children[1].classList.add(`d-flex`));
    },
  },
});
</script>
