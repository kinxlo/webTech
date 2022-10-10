<template>
  <v-card flat class="mx-auto" max-width="370" width="100%">
    <!-- <v-img
      class="white--text align-end img-fluid"
      height="276"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    
    </v-img> -->
    <SanityImage :asset-id="img" auto="format" />
    <v-sheet class="pa-16 py-10 pa-md-5 pa-lg-16">
      <v-card-subtitle
        style="font-size: 17px"
        class="pb-0 text-center font-weight-bold letter-spacing"
      >
        {{ title }}
      </v-card-subtitle>
      <hr style="height: 5px; width: 80px" class="accent mx-auto mt-5" />
      <v-card-text style="line-height: 30px" class="text--primary text-center"
        >{{ desc }}
      </v-card-text>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "ServiceCard",
  props: ["img", "title", "desc"],
};
</script>
