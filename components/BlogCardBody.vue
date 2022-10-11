<template>
  <div :class="format">
    <slot></slot>
    <h3 class="mb-4">{{ headtext }}</h3>
    <p v-if="showSpanText" class="mb-6">
      <span class="mr-12">{{ P_span_1 }}</span
      ><span class="mr-12">{{ P_span_2 }}</span
      ><span class="mr-12">{{ p_span_3 }}</span>
    </p>
    <div>
      <p v-if="showMainP" class="mb-12">{{ p_text }}</p>
      <v-sheet color="transparent" v-else id="sheeet" class="mb-12 d-flex align-center">
        <v-img
          v-if="emma"
          width="100"
          height="100"
          src="cardImage.png"
          alt="cardImage"
          class="mr-3"
        />
        <v-img
          v-else
          width="60"
          height="60"
          src="cardImage.png"
          alt="cardImage"
          class="mr-3"
        />
        <div>
          <p class="pl-4 py-1 border">
            Donec vulputate erat lectus, eu efficitur sem dignissim quis. Donec
            sapien est, dictum eget blandit ac, aliquet vitae orci. Fusce
            pellentesque justo at hendrerit hendrerit norbi tempor.
          </p>
          <p class="pl-4" v-if="emma" style="color: #377dff">emmajohnson</p>
        </div>
      </v-sheet>
    </div>
    <v-btn elevation="0" outlined tile v-if="showButton">{{ btn_text }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "BlogCardBody",
  props: {
    headtext: String,
    P_span_1: String,
    P_span_2: String,
    p_span_3: String,
    p_text: String,
    showButton: Boolean,
    showSpanText: Boolean,
    showMainP: Boolean,
    p_text_head: String,
    btn_text: String,
    cardImage: String,
    emma: Boolean,
    color: String,
    format: Boolean,
  },

  data: () => ({
    showSpanText: true,
  }),
  
};
</script>

<style lang="scss">
h3 {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 27px;
  letter-spacing: 1px;
}

p {
  font-size: 15px;
  font-family: "poppins";
  font-weight: 400;
}
p {
  max-width: 590px;
}

.border {
  border-left: 2px solid #377dff;
}

.format {
  h3,
  p {
    color: white;
  }

  .v-btn {
    color: white;
  }
}

#sheeet {
  background-color: none;

  .theme--light.v-sheet {
    background: none;
  }
}
</style>
