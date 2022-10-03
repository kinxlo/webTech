<template>
  <v-card
    width="350"
    height="627"
    class="d-flex flex-column justify-start align-center pt-16"
    :class="{ base, medium, pro }"
    :color="color"
    elevation="0"
    tile
  >
    <h3 class="mb-5">{{ title }}</h3>
    <h6 class="card-h6 text-center subtitle-1 mb-11">
      {{ subTitle }}
    </h6>
    <v-list class="mb-12 px-0 py-0 list">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        class="justify-start mb-2"
      >
        <v-list-item-icon class="mr-0 px-0 py-0">
          <v-icon id="svg" x-small>{{ icons.mdiChevronRight }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="px-0 py-0 subtitle-1 list-item">
          {{ item }}
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-sheet>
      <div class="price d-flex justify-center align-center">
        <span class="pb-3">${{ price }}</span>
        <span>/month</span>
      </div>
      <v-btn elevation="0" tile text>Get Started</v-btn>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiChevronRight } from "@mdi/js";
export default Vue.extend({
  name: "PriceCard",
  props: [
    "title",
    "subTitle",
    "items",
    "price",
    "color",
    "board",
    "medium",
    "base",
    "pro",
  ],
  data: () => {
    return {
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
  background: #f9fafa;
}

.price {
  height: 50px;
  position: relative;

  span:nth-child(1) {
    font-size: 30;
    font-weight: 400;
    position: relative;
  }
}

.base {
  .list {
    background: #f9fafa;
  }

  #svg {
    color: #377dff;
  }

  .list-item {
    color: #5c6f87;
  }

  .price {
    background: #f9fafa;

    span:nth-child(1) {
      color: #377dff;
    }

    span:nth-child(2) {
      color: #5c6f87;
      font-weight: 400;
    }
  }

  .v-btn {
    border: 2px solid #377dff;
    background: #f9fafa;
    color: #141d28;
  }
}

.pro {
  h3 {
    color: #377dff;
  }

  h6 {
    color: #ffffff;
  }

  .list {
    background: #141d28;
    color: #ffffff;
  }

  #svg {
    color: #377dff;
  }

  .list-item {
    color: #ffffff;
  }

  .price {
    background: #141d28;

    span:nth-child(1) {
      color: #377dff;
    }

    span:nth-child(2) {
      color: #ffffff;
      font-weight: 400;
    }
  }

  .v-btn {
    border: none;
    background: #377dff;
    color: #f8f8f9;
  }
}

.medium {
  h3,
  h6 {
    color: #ffffff;
  }

  .list {
    background: #377dff;
  }

  #svg {
    color: #ffffff;
  }

  .list-item {
    color: #141d28;
  }

  .price {
    background: #377dff;
    span:nth-child(1) {
      color: #ffffff;
    }

    span:nth-child(2) {
      color: #141d28;
      font-weight: 400;
    }
  }

  .v-btn {
    border: 2px solid #f8f8f9;
    background: #377dff;
    color: #f8f8f9;
  }
}
</style>
