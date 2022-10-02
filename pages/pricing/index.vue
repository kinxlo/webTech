<template>
  <main>
    <Banner
      title="Pricing"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <!-- section two -->
    <v-layout class="cc-wrapper v-spacing">
      <v-row no-gutters>
        <v-col
          v-for="theme in themes"
          :key="theme"
          cols="4"
          class="d-flex justify-center"
        >
          <PriceCard
            title="Base"
            :price="55"
            subTitle="Vivamus blandit gravida erat id aliquam"
            :items="items1"
            :theme="theme"
          >
          </PriceCard>
        </v-col>
      </v-row>
    </v-layout>

    <!-- section three -->
    <v-sheet class="cc-wrapper v-spacing">
      <h3 class="text-center mb-13">
        <span class="head">Have</span> a Question?
      </h3>
      <v-row class="mb-5" justify="space-between">
        <v-card color="#F8F8F9" width="555" class="px-8 py-7" elevation="0">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiMinus }}
            </v-icon>
            <p>
              Lorem ipsum dolor sit amet, consec
              <br />
              <br />
              Phasellus pulvinar, nunc nec congue efficitur, velit risus
              interdum augue, dapibus lacinia dui massa a lorem. Nulla a
              bibendum ex. Maecenas vel erat convallis.
            </p>
          </div>
        </v-card>
        <v-card color="#F8F8F9" width="555" class="px-8 py-7" elevation="0">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiMinus }}
            </v-icon>
            <p>
              Fusce id dolor eget felis pretium
              <br />
              <br />
              Maecenas gravida sollicitudin lacinia. Donec ut ultrices arcu, a
              ullamcorper enim. Pellentesque elementum eget dolor eu maximus.
              Maecenas at porta lacus.
            </p>
          </div>
        </v-card>
      </v-row>
      <v-row class="mb-5" justify="space-between">
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Nullam non ipsum dignissim, con</p>
          </div>
        </v-card>
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Nulla diam nunc, tristique quis</p>
          </div>
        </v-card>
      </v-row>
      <v-row class="mb-5" justify="space-between">
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Sem suscipit fringilla et sit amet sem.</p>
          </div>
        </v-card>
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Orci varius natoque penatibus et magn</p>
          </div>
        </v-card>
      </v-row>
      <v-row class="mb-5" justify="space-between">
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Ut luctus est nunc, at tinci</p>
          </div>
        </v-card>
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Mauris efficitur vel turpis ut laoreet.</p>
          </div>
        </v-card>
      </v-row>
      <v-row class="mb-5" justify="space-between">
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Curabitur convallis vel ante in posuere.</p>
          </div>
        </v-card>
        <v-card color="#F8F8F9" width="555" elevation="0" class="px-8 py-7">
          <div class="d-flex justify-start align-start">
            <v-icon color="#377DFF">
              {{ icons.mdiPlus }}
            </v-icon>
            <p>Etiam molestie ante id risus suscipit</p>
          </div>
        </v-card>
      </v-row>
    </v-sheet>
  </main>
</template>

<script lang="ts">
import { mdiMinus, mdiPlus } from "@mdi/js";
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    nav: ["Homepage", "pricing"],
    icons: { mdiMinus, mdiPlus },
    items1: [
      "Donec tincidunt",
      "Etiam lobortis",
      "Nullam laoreet ante",
      "Etiam vulputate suscipit",
    ],

    themes: [`theme1`, `theme2`, `theme3`],
  }),
});
</script>

<style scoped>
main {
  box-sizing: border-box;
}

.text-center {
  font-size: 40px;
}

.head {
  border-left: 3px solid #377dff;
  padding-left: 33.5px;
  color: #377dff;
}

.styles {
  border: 1px solid red;
}
</style>
