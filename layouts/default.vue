<template>
  <v-app class="px-5">
    <Prenav />
    <Navbar ref="nav" :setFixed="fixed" />
    <Nuxt />

    <Footer />
    <v-btn dark color="accent" ref="topButton" fab large @click.stop="scrollToTop" class="d-none">
      <v-icon>{{ icon.up }}</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import { mdiArrowUp } from "@mdi/js";

export default {
  data: () => ({
    fixed: false,
    icon: {
      up: mdiArrowUp,
    },
  }),

  mounted() {
    this.fixNavbar();
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); //very simple function
    },

    fixNavbar() {
      document.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("scroll", () => {
          let { clientHeight } = this.$refs.nav.$el;
          window.scrollY > clientHeight ? (this.fixed = true) : (this.fixed = false);

          window.scrollY > 1000
            ? this.$refs.topButton.$el.classList.remove("d-none")
            : this.$refs.topButton.$el.classList.add("d-none");
        });
      });
    },
  },
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
