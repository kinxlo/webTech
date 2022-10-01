<template>
  <main>
    <Banner
      title="Blog"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <v-layout class="cc-wrapper v-spacing">
      <v-row align="flex-start">
        <v-col>
          <BlogCard
            imageUrl="motion.png"
            headtext="Motion Animation And VR Headset"
            P_span_1="Emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="4 Comments"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
          >
            <v-btn outlined elevation="0" tile>Networking</v-btn>
            <v-btn outlined elevation="0" tile>Security</v-btn>
          </BlogCard>
          <BlogCard
            imageUrl="chess.png"
            headtext="Motion Animation And VR Headset"
            P_span_1="Emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            btn_1="Networking"
            btn_2="Security"
          >
            <v-btn outlined elevation="0" tile>Networking</v-btn>
            <v-btn outlined elevation="0" tile>Security</v-btn>
          </BlogCard>
          <BlogCard
            imageUrl="changes.png"
            headtext="Motion Animation And VR Headset"
            P_span_1="Emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            btn_1="Networking"
            btn_2="Security"
          >
            <v-btn outlined elevation="0" tile>Networking</v-btn>
            <v-btn outlined elevation="0" tile>Security</v-btn>
          </BlogCard>
          <BlogCard
            imageUrl="chat.png"
            headtext="Sample Post Format: Link"
            P_span_1="Emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="https://www.example.com/"
          >
            <v-row class="rows">
              <v-col class="cols">Steave:</v-col>
              <v-col>In pellentesque id nisl cursus finibus?</v-col>
            </v-row>
            <v-row class="rows last-row">
              <v-col class="cols">Anna:</v-col>
              <v-col
                >In pellentesque id nisl cursus finibus. Proin maximus diam ut
                scelerisque scelerisque.</v-col
              >
            </v-row>
            <v-row class="rows">
              <v-col class="cols">Steave:</v-col>
              <v-col
                >. Pellentesque fringilla lorem vel lectus sagittis, id accumsan
                arcu varius. Maecenas quis ligula id dui finibus
                fermentum.</v-col
              >
            </v-row>
            <v-row class="rows last-row">
              <v-col class="cols">Anna:</v-col>
              <v-col
                >Donec mollis pretium egestas. Fusce ornare id sapien at
                ultrices.</v-col
              >
            </v-row>
          </BlogCard>
          <v-card class="px-16 py-16 mb-16" elevation="0" tile outlined>
            <BlogCardBody
              showMainP
              showSpanText
              headtext="Sample Post Format: Aside"
              P_span_1="emmajohnson"
              P_span_2="May 17, 2019"
              p_span_3="Leave a comment"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            >
              <v-btn class="mb-7" elevation="0" tile outlined>security</v-btn>
            </BlogCardBody>
          </v-card>
          <v-card class="px-16 py-16 mb-16" elevation="0" tile outlined>
            <BlogCardBody
              showButton
              showSpanText
              btn_text="Software"
              headtext="Some of New Trends in Social Media"
              P_span_1="emmajohnson"
              P_span_2="May 17, 2019"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            >
              <v-btn class="mb-7" elevation="0" tile outlined>Software</v-btn>
            </BlogCardBody>
          </v-card>
          <v-card class="px-16 py-16" elevation="0" tile outlined>
            <BlogCardBody
              emma
              showButton
              showSpan
              btn_text="New"
              headtext="Signs to Love UX Design"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
              p_text_head="okay"
            >
              <v-btn class="mb-7" elevation="0" tile outlined>security</v-btn>
            </BlogCardBody>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="px-10 py-8 mb-16" color="#F9FAFA" elevation="0" tile>
            <v-card-title>Search</v-card-title>
            <v-card-actions>
              <v-text-field
                placeholder="search"
                append-icon="mdi-magnify"
                solo
                flat
              ></v-text-field>
            </v-card-actions>
          </v-card>
          <v-sheet class="mt-5 mb-16">
            <h4>Categories</h4>
            <v-divider />
            <div class="d-flex justify-flex-start my-3">
              <v-icon color="accent">{{ icons.mdiChevronRight }}</v-icon>
              <p>Digital</p>
            </div>
            <v-divider />
            <div class="d-flex justify-flex-start my-3">
              <v-icon color="accent">{{ icons.mdiChevronRight }}</v-icon>
              <p>Networking</p>
            </div>
            <v-divider />
            <div class="d-flex justify-flex-start my-3">
              <v-icon color="accent">{{ icons.mdiChevronRight }}</v-icon>
              <p>New</p>
            </div>
            <v-divider />
            <div class="d-flex justify-flex-start my-3">
              <v-icon color="accent">{{ icons.mdiChevronRight }}</v-icon>
              <p>Security</p>
            </div>
            <v-divider />
            <div class="d-flex justify-flex-start my-3">
              <v-icon color="accent">{{ icons.mdiChevronRight }}</v-icon>
              <p>Software</p>
            </div>
            <v-divider />
          </v-sheet>
          <v-sheet class="mt-5 mb-16"> okay </v-sheet>
          <v-sheet class="mt-5 mb-16"> okay </v-sheet>
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import BlogCard from "../../components/BlogCard.vue";
import BlogCardBody from "../../components/BlogCardBody.vue";
import { mdiChevronRight } from "@mdi/js";

export default Vue.extend({
  components: { BlogCard, BlogCardBody },
  data: () => ({
    nav: ["Homepage", "Blog"],
    icons: { mdiChevronRight },

    showSpanText: true,

    showSpan: (showSpanText: Boolean) => {
      return !showSpanText;
    },

    p_text: () => {},
  }),
});
</script>

<style scoped>
.test {
  border: 1px solid red;
}
.rows {
  border: 0.5px solid rgba(20, 29, 40, 0.1);
  border-bottom: none;
  border-radius: none;
}
.cols {
  max-width: 81px;
}

.last-row {
  border-bottom: 0.5px solid rgba(20, 29, 40, 0.1);
  background: #f8f8f9;
}
</style>
