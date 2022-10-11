<template>
  <main>
    <Banner
      title="Pricing"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <!-- section two -->
    <v-layout class="cc-wrapper v-spacing">
      <v-row no-gutters>
        <v-col
          v-for="item in pricing"
          :key="item._id"
          cols="12"
          md="4"
          class="d-flex justify-center mb-10 mb-md-0"
        >
          <PriceCard
            :title="item.title"
            :price="item.price"
            :subTitle="item.subTitle"
            :items="items1"
            :theme="item.theme"
          >
          </PriceCard>
        </v-col>
      </v-row>
    </v-layout>

    <!-- section three -->
    <v-sheet class="cc-wrapper v-spacing">
      <h3 class="text-center mb-13"><span class="head">Have</span> a Question?</h3>
      <v-expansion-panels accordion flat>
        <v-row>
          <v-col v-for="item in accordion" :key="item._id">
            <v-sheet color="#F8F8F9" width="555" class="accord" flat tile elevation="0">
              <v-expansion-panel >
                <v-expansion-panel-header class="v-expansion-panel-header" hide-actions>
                  <v-icon
                    @click="item.show = false"
                    v-if="item.show"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else
                    @click="item.show = true"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>{{ item.title }}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>{{ item.subTitle }}</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-sheet>
          </v-col>
        </v-row>
      </v-expansion-panels>
    </v-sheet>
  </main>
</template>

<script>
import { mdiMinus, mdiPlus } from "@mdi/js";
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "priceCard"] | order(number asc)`;
const accordionQuery = groq`*[_type == "priceAccordion"]`;

export default {
  data: () => ({
    nav: ["Pricing", "Contact"],
    icons: { mdiMinus, mdiPlus },
    items1: [
      "Donec tincidunt",
      "Etiam lobortis",
      "Nullam laoreet ante",
      "Etiam vulputate suscipit",
    ],

    themes: [`theme1`, `theme2`, `theme3`],
  }),

  async asyncData({app}) {
    const sanity = app.$sanity;
    const pricing = await sanity.fetch(query)
    const accordion = await sanity.fetch(accordionQuery)

    return {pricing, accordion}
  }
};
</script>

<style lang="scss" scoped>
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
.test {
  border: 1px solid red;
}

.v-expansion-panels .v-expansion-panel {
  background-color: #f8f8f9;
  color: rgba(0, 0, 0, 0.87);
  min-width: 100%;
}
.v-expansion-panel-header {
  .plus {
    padding: 0;
    flex: 0.1;
  }
}

@media screen and (max-width: 900px) {
.accord {
    width: 80%;
    border: 1px solid red;
  }
}
</style>
