<template>
  <main>
    <Banner
      title="Pricing"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <!-- section two -->
    <v-sheet
      class="cc-wrapper v-spacing d-flex flex-row flex-wrap justify-space-around align-content-space-between"
    >
      <PriceCard
        title="Base"
        subTitle="Vivamus blandit gravida erat id aliquam"
        price="55"
        :items="items1"
        class="base mb-2"
        color="#F9FAFA"
      />
      <PriceCard
        title="Medium"
        subTitle="Vivamus blandit gravida erat id aliquam"
        price="65"
        :items="items1"
        color="#377DFF"
        class="medium mb-2"
      />
      <PriceCard
        title="Pro"
        class="pro mb-2"
        subTitle="Vivamus blandit gravida erat id aliquam"
        price="105"
        :items="items1"
        color="#141D28"
        styles="style1"
      />
    </v-sheet>

    <!-- section three -->
    <v-sheet class="cc-wrapper v-spacing">
      <h3 class="text-center mb-13">
        <span class="head">Have</span> a Question?
      </h3>
      <v-row>
        <v-col>
          <v-card width="555" elevation="0" flat tile>
            <v-expansion-panels accordion flat>
              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <v-col>
          <v-card width="555" elevation="0" flat tile>
            <v-expansion-panels accordion flat>
              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel color="#F8F8F9" class="mb-5">
                <v-expansion-panel-header
                  class="v-expansion-panel-header"
                  @click="handleIconToggle"
                  hide-actions
                >
                  <v-icon
                    v-if="toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiMinus }}
                  </v-icon>
                  <v-icon
                    v-else="!toggleIcon"
                    color="#377DFF"
                    class="plus mr-3 px-0 py-0"
                  >
                    {{ icons.mdiPlus }}
                  </v-icon>
                  <p>Lorem ipsum dolor sit amet, consec</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ml-9">
                  <p>
                    Maecenas gravida sollicitudin lacinia. Donec ut ultrices
                    arcu, a ullamcorper enim. Pellentesque elementum eget dolor
                    eu maximus. Maecenas at porta lacus.
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </v-card>
        </v-col>
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

    toggleIcon: false,
  }),

  methods: {
    handleIconToggle() {
      this.toggleIcon = !this.toggleIcon;
      console.log("icon");
    },
  },
});
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
</style>
