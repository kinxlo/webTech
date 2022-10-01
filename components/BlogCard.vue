<template>
  <v-sheet width="760">
    <v-sheet max-height="366">
      <img :src="imageUrl" alt="img" />
    </v-sheet>
    <v-card class="mt-2 px-16 py-15" elevation="0">
      <h3 class="mb-4">{{ headtext }}</h3>
      <p class="mb-6">
        <span class="mr-12">{{ P_span_1 }}</span
        ><span class="mr-12">{{ P_span_2 }}</span
        ><span class="mr-12">{{ p_span_3 }}</span>
      </p>
      <p class="mb-12">{{ p_text }}</p>
      <slot> </slot>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BlogCard",
  props: {
    imageUrl: String,
    headtext: String,
    P_span_1: String,
    P_span_2: String,
    p_span_3: String,
    p_text: String,
  },
  data: () => {
    return {
      // imageUrl: ""
    };
  },
});
</script>

<style scoped>
.v-card h3 {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 27px;
  letter-spacing: 1px;
}

.v-card p {
  font-size: 15px;
  font-family: "poppins";
  font-weight: 400;
}
p {
  max-width: 590px;
}
</style>
