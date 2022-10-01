<template>
  <v-card
    width="350"
    height="627"
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
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiChevronRight } from "@mdi/js";
export default Vue.extend({
  name: "PriceCard",
  props: ["title", "subTitle", "items", "price", "color", "theme"],
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
  }
}
</style>
