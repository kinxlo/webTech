<template>
  <main>
    <Banner
      title="Services"
      :nav="nav"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664450831/webtech/Rectangle_6_n4i8bd.png"
    />
    <section class="v-spacing cc-wrapper">
      <v-row>
        <v-col md="4" v-for="item in service" :key="item._id">
          <ServiceCard 
             :img="item.img.asset._ref"
             :title="item.title" 
             :desc="item.desc"
          />
        </v-col>
      </v-row>
    </section>
  </main>
</template>

<script lang="ts">
import { ref } from "vue";
import { groq } from "@nuxtjs/sanity";
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  data() {
    return {
      nav: ["About", "Portfolio"],
      result: {
        type: Array,
      },
    };
  },

  setup() {
    interface Service {
      img: String;
      title: String;
      desc: String;
    }

    const sanity = useContext().app.$sanity;

    const query = groq`*[_type == "services"]`;
    const service = ref<any>([]);
    service.value = useAsync(() => sanity.fetch<Service[]>(query));

    return { service };
  },
};
</script>

<style></style>
