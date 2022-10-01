<template>
  <v-card
    width="350"
    height="627"
    class="d-flex flex-column justify-start align-center pt-16"
    :class="board"
    :color="color"
    elevation="0"
    tile
  >
    <h3 class="mb-5">{{title}}</h3>
    <h6 class="card-h6 text-center subtitle-1 mb-11">
      {{subTitle}}
    </h6>
    <v-list color="#F9FAFA" class="mb-12 px-0 py-0">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        class="justify-start mb-2"
      >
        <v-list-item-icon class="mr-0 px-0 py-0">
          <v-icon color="#377DFF" x-small>{{ icons.mdiChevronRight }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content
          class="px-0 py-0 subtitle-1 list-item"
          color="#5C6F87"
        >
          {{ item }}
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-sheet>
      <div class="price d-flex justify-center align-center">
        <span class="pb-3">${{price}}</span>
        <span>/month</span>
      </div>
      <v-btn elevation="0" outlined tile text backgoundColor="#5C6F87">Get Started</v-btn>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiChevronRight } from "@mdi/js";
export default Vue.extend ({
  name: "PriceCard",
  props: ['title', 'subTitle', "items", 'price', "color", "board"],
  data: () => {
    return {
      items: [],
      icons: { mdiChevronRight },
    };
  },
  
});
</script>

<style lang="scss" scoped>
.card-h6 {
  max-width: 190px;
}

.list-item {
  max-width: 161px;
}

.v-btn {
    background: #F9FAFA;
}

.price {
    height: 50px;
    position: relative;
    background: #F9FAFA;

    span:nth-child(1){
        color: #377DFF;
        font-size: 30;
        font-weight: 400;
        position: relative;
    }
}

</style>
