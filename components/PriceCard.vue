<template>
  <v-card
    width="350"
    height="627"
<<<<<<< HEAD
    class="d-flex flex-column align-center justify-space-around"
    :class="theme"
    flat
  >
    <section class="d-flex flex-column align-center">
      <div class="text-center px-16 mx-3 heading">
        <h3 style="font-size: 30px" class="mb-5">{{ title }}</h3>
        <p style="line-height: 20px" class="text-capitalize">
          {{ subTitle }}
        </p>
      </div>
      <v-list color="transparent" class="mt-10 mb-16 pa-0">
        <v-list-item
          style="min-height: 35px"
          v-for="(item, i) in items"
          :key="i"
          class="justify-start pa-0"
        >
          <v-list-item-icon class="pa-0 ma-0 my-auto">
            <v-icon class="icon">{{ icons.mdiChevronRight }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="pa-0 font-p list-item" color="#5C6F87">
            {{ item }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </section>

    <section>
      <div class="mb-5 price">
        <span class="pb-3 text-h4 amount">&dollar;{{ price }}</span>
        <span class="month">/month</span>
      </div>
      <v-btn text large class="px-10 py-6 rounded-0">Get Started</v-btn>
    </section>
=======
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
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiChevronRight } from "@mdi/js";
export default Vue.extend({
  name: "PriceCard",
<<<<<<< HEAD
  props: ["title", "subTitle", "items", "price", "color", "theme"],
=======
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
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
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

<<<<<<< HEAD
.theme1 {
  background: #f9fafa;
  .heading {
    p,
    h3 {
      color: var(--darkBg);
    }
  }

  .list-item {
    color: var(--darkBg);
    opacity: 0.5;
  }

  .icon {
    color: #377dff !important;
  }

  .price {
    .amount {
      color: #377dff;
    }
    .month {
      color: var(--darkBg);
    }
  }

  button {
    border: 1px solid #377dff;
    background: #fff !important;
=======
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
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
  }
}
.theme2 {
  background: #377dff;
  .heading {
    p,
    h3 {
      color: #fff;
    }
  }

<<<<<<< HEAD
  .icon {
    color: #fff !important;
  }

  .price {
    .amount {
      color: #fff;
    }
    .month {
      color: var(--darkBg);
    }
  }

  button {
    border: 1px solid #fff !important;
    color: #fff;
  }
}
.theme3 {
  background: var(--darkBg);
  .heading {
    p {
      color: #fff;
    }

    h3 {
      color: #377dff;
    }
  }
  .list-item {
    color: #fff;
  }

  .icon {
    color: #377dff !important;
  }

  .price {
    .amount {
      color: #377dff;
    }
    .month {
      color: #fff;
    }
  }

  button {
    background: #377dff !important;
    color: #fff;
=======
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
>>>>>>> ef46ae731b0a86b90ac12c61071e8a4b5cd65939
  }
}
</style>
