<template>
  <v-responsive width="760" md-width="300">
    <v-sheet max-height="366">
      <img :src="imageUrl" alt="img" />
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

<script>

export default {
  name: "BlogCard",
  props: ["img", "imageUrl", "headtext", "P_span_1", "P_span_2", "p_span_3", "p_text", "info"],

  setup(props) {
    console.log('proportion', props.info);
        
  }
};
</script>

<style></style>
