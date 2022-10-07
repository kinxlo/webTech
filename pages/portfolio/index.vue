<template>
  <main>
    <Banner
      title="Portfolio"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664454274/webtech/Rectangle_7_zce5yx.png"
      :nav="state.nav"
    />
    <section class="cc-wrapper v-spacing">
      <v-row>
        <v-col md="4" v-for="item in portfolio" :key="item._id">
          <PortfolioCard
            :img="item.img.asset._ref"
            :desc="item.desc"
          />
        </v-col>
      </v-row>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { groq } from "@nuxtjs/sanity";
import { useAsync, useContext } from "@nuxtjs/composition-api";

const state = reactive({
  nav: ["Services", "Blog"],
});

const portfolio = ref<any>([])
const sanity = useContext().app.$sanity;
const query = groq `*[_type == "portfolio"]`;
portfolio.value = useAsync(() => sanity.fetch(query));



</script>

<style></style>
