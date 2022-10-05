<template>
  <v-app class="px-5">
    <Prenav />
    <Navbar ref="nav" :setFixed="state.fixed" />
    <Nuxt />

    <Footer />
    <v-btn dark color="accent" ref="topButton" fab large @click.stop="scrollToTop" class="d-none">
      <v-icon>{{ state.icon.up }}</v-icon>
    </v-btn>
  </v-app>
</template>

<script setup>
import { mdiArrowUp } from "@mdi/js";
import { onMounted, reactive, ref } from "vue";

const nav = ref(null);
const topButton = ref(null);
const state = reactive({
  fixed: false,
  icon: {
    up: mdiArrowUp,
  },
});

function scrollToTop() {
  window.scrollTo(0, 0); //very simple function
}

onMounted(() => {
  fixNavbar();
});

const fixNavbar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
      let { clientHeight } = nav.value.$el;
      window.scrollY > clientHeight ? (state.fixed = true) : (state.fixed = false);

      window.scrollY > 1000
        ? topButton.value.$el.classList.remove("d-none")
        : topButton.value.$el.classList.add("d-none");
    });
  });
};
</script>

<style lang="scss" scoped>
.v-btn {
  position: fixed;
  bottom: 2em;
  right: 2em;
  z-index: 999;
}
</style>
