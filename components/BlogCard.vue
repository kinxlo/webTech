<template>
  <v-responsive width="760">
    <v-sheet max-height="366">
      <img :src="imageUrl" alt="img" />
      <!-- <SanityImage :asset-id="assetId" alt="alt" /> -->
    </v-sheet>
    <v-card class="mt-2 px-16 py-15" elevation="0">
      <BlogCardBody
        showMainP
        showSpanText
        :headtext="headtext"
        :P_span_1="P_span_1"
        :P_span_2="P_span_2"
        :p_span_3="p_span_3"
        :p_text="p_text"
      />
      <slot> </slot>
    </v-card>
  </v-responsive>
</template>

<script lang="ts">
import Vue from "vue";
import BlogBodyCard from "./BlogCardBody.vue";
import { SanityImage } from '@nuxtjs/sanity/dist/components/sanity-image'

export default Vue.extend({
  components: { BlogBodyCard, SanityImage  },
  name: "BlogCard",
  props: {
    assetId: String,
    imageUrl: String,
    headtext: String,
    P_span_1: String,
    P_span_2: String,
    p_span_3: String,
    p_text: String,
  },
});



</script>

<style scoped></style>
