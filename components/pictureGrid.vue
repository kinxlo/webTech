<template>
  <v-card
    flat
    @mouseenter="showOverlay"
    @mouseleave="showOverlay"
    class="sect_5_card rounded-0"
    height="360"
  >
    <v-img
      class="img-fluid"
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="img"
    ></v-img>
    <v-sheet
      color="var(--mainOverlay)"
      class="plus_icon d-none align-center justify-center"
    >
      <v-icon color="accent" size="50">{{ state.icon.mdiPlus }}</v-icon>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { mdiPlus } from "@mdi/js";
import { reactive } from "vue";
const state = reactive({
  icon: {
    mdiPlus,
  },
});

function showOverlay(e) {
  switch (e.type) {
    case `mouseenter`:
      e.target.children[1].classList.add(`d-flex`);
      break;
    case `mouseleave`:
      e.target.children[1].classList.remove(`d-flex`);
      break;
  }
}
</script>

<style></style>
