<template>
  <main>
    <Banner
      title="Blog"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <v-layout class="cc-wrapper v-spacing">
      <v-row>
        <v-col>
          <BlogCard
            imageUrl="motion.png"
            headtext="Motion Animation And VR Headset"
            P_span_1="emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="4 Comments"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
          >
            <v-btn outlined elevation="0" tile>Networking</v-btn>
            <v-btn outlined elevation="0" tile>Security</v-btn>
          </BlogCard>
          <BlogCard
            headtext="Motion Animation And VR Headset"
            P_span_1="emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            btn_1="Networking"
            btn_2="Security"
          >
          <p>okay</p></BlogCard>
          <BlogCard
            headtext="Motion Animation And VR Headset"
            P_span_1="emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            btn_1="Networking"
            btn_2="Security"
          />
          <BlogCard
            headtext="Sample Post Format: Link"
            P_span_1="emmajohnson"
            P_span_2="May 17, 2019"
            p_span_3="Leave a comment"
            p_text="https://www.example.com/"
          />
        </v-col>
        <v-col>
          <p>second</p>
          <p>second</p>
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import BlogCard from "../../components/BlogCard.vue";
export default Vue.extend({
  components: { BlogCard },
  data: () => ({
    nav: ["Homepage", "Blog"],
    imageUrl: "../../assets/motion.png"
  }),
});
</script>

<style scoped>
.test {
  border: 1px solid red;
}
</style>
