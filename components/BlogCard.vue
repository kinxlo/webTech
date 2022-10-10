<template>
  <v-responsive width="760" md-width="300"> 
    <v-sheet max-height="366">
      <!-- <img :src="imageUrl" alt="img" /> -->
      <!-- <SanityImage :asset-id="img" auto="format" /> -->
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
import BlogBodyCard from "./BlogCardBody.vue";

export default{
  components: {BlogBodyCard},
  name: "BlogCard",
  // props: {
  //   img: String,
  //   imageUrl: String,
  //   headtext: String,
  //   P_span_1: String,
  //   P_span_2: String,
  //   p_span_3: String,
  //   p_text: String,
  // },
  props: ["img", "imageUrl", "headtext", "P_span_1", "P_span_2", "p_span_3", "p_text"]
};
</script>

<style></style>
