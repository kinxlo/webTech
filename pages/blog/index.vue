<template>
  <main>
    <Banner
      title="Blog"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/v1664417563/webtech/Rectangle_4_whmbrs.png"
      :nav="nav"
    />
    <v-layout class="cc-wrapper v-spacing">
      <v-row class="align-flex-start">
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

          <v-card
            class="px-16 py-16 mb-16"
            style="background-color: #141d28"
            elevation="0"
            tile
            outlined
          >
            <BlogCardBody
              class="format"
              showMainP
              showSpanText
              headtext="Sample Post Format: Aside"
              P_span_1="emmajohnson"
              P_span_2="May 17, 2019"
              p_span_3="Leave a comment"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            >
              <v-btn class="mb-7 btnn" color="#377DFF" elevation="0" tile
                >security</v-btn
              >
            </BlogCardBody>
          </v-card>

          <v-card
            class="px-16 py-16 mb-16"
            elevation="0"
            style="background-image: url('software.svg')"
            tile
            outlined
          >
            <BlogCardBody
              class="format"
              showButton
              showSpanText
              btn_text="Software"
              headtext="Some of New Trends in Social Media"
              P_span_1="emmajohnson"
              P_span_2="May 17, 2019"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
            >
              <v-btn class="mb-7 btnn" color="#377DFF" elevation="0" tile
                >Software</v-btn
              >
            </BlogCardBody>
          </v-card>

          <v-card
            class="px-16 py-16"
            elevation="0"
            style="background-image: url('security.png')"
            tile
            outlined
          >
            <BlogCardBody
              class="format"
              emma
              showButton
              showSpan
              btn_text="New"
              headtext="Signs to Love UX Design"
              p_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae est accumsan, efficitur velit eu, ullamcorper sapien. Suspendisse aliquam libero euismod, tempus nisl."
              p_text_head="okay"
            >
              <v-btn class="mb-7 btnn" color="#377DFF" elevation="0" tile
                >security</v-btn
              >
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

          <v-sheet
            height="66"
            color="#F8F8F9"
            class="pr-8 mt-5 mb-4 d-flex justify-space-between align-center facebook"
          >
            <div class="ban d-flex justify-center align-center">
              <v-icon color="#FFFFFF">{{ icons.mdiFacebook }}</v-icon>
            </div>
            <p>facebook</p>
            <p>fan</p>
          </v-sheet>
          <v-sheet
            height="66"
            color="#F8F8F9"
            class="pr-8 mb-4 d-flex justify-space-between align-center twitter"
          >
            <div class="ban d-flex justify-center align-center">
              <v-icon color="#FFFFFF">{{ icons.mdiTwitter }}</v-icon>
            </div>
            <p>Twitter</p>
            <p>Followers</p>
          </v-sheet>
          <v-sheet
            height="66"
            color="#F8F8F9"
            class="pr-8 mb-11 d-flex justify-space-between align-center google"
          >
            <div class="ban d-flex justify-center align-center">
              <v-icon color="#FFFFFF">{{ icons.mdiGooglePlus }}</v-icon>
            </div>
            <p>Google+</p>
            <p>Followers</p>
          </v-sheet>

          <v-sheet max-width="306" class="mt-16">
            <h4>Popular Posts</h4>
            <v-list
              v-for="(pos, i) in Posts"
              :key="i"
              class="d-flex align-center justify-space-around mb-8"
            >
              <v-img max-width="70" max-height="70" :src="pos.img" />
              <div class="text-left ml-3">
                <p>{{ pos.headText }}</p>
                <p class="ml-3">{{ pos.date }}</p>
              </div>
            </v-list>
          </v-sheet>

          <v-sheet class="mt-16 tags">
            <h4 class="mb-5">Tags</h4>
            <div class="d-flex flex-wrap">
              <v-btn
                class="mr-3 mb-2"
                v-for="(btn, i) in button"
                :key="i"
                elevation="0"
                tile
                color="#fffff"
                >{{ btn }}</v-btn
              >
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-layout>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { ref } from 'vue'
import BlogCard from "../../components/BlogCard.vue";
import BlogCardBody from "~/components/BlogCardBody.vue";
import {
  mdiChevronRight,
  mdiFacebook,
  mdiTwitter,
  mdiGooglePlus,
} from "@mdi/js";

interface Post {
  img: String;
  headText: String;
  date: String;
}

type button = String;

export default {
  components: { BlogCard, BlogCardBody },

  data: () => ({
    nav: ["Homepage", "Blog"],
    icons: { mdiChevronRight, mdiFacebook, mdiTwitter, mdiGooglePlus },

    showSpanText: true,
    showMainP: true,
  }),

  setup (){
    const Posts: Post[] = [
      {
        img: "post1.png",
        headText: "Motion Animation And VR Headset",
        date: "May 17, 2019",
      },
      {
        img: "post2.png",
        headText: "Top 5 Amazing changing For The Social Media Industry",
        date: "May 17, 2019",
      },
      {
        img: "post3.svg",
        headText: "Awesome Tips to Become CEO Of Big NetWork Startup",
        date: "May 17, 2019",
      },
    ]

    const button: button[]= ["Digital", "Networking", "New", "Security", "Software"]

    const showSpan = (showSpanText: Boolean) => {
      return !showSpanText;
    }

    return {Posts, button, showSpan}
  }
};
</script>

<style lang="scss" scoped>
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

.ban {
  width: 60px;
  height: 100%;
}

.facebook {
  .ban {
    background: #3b5998;
  }

  p {
    color: black;
  }
}

.twitter {
  .ban {
    background: #1dcaff;
  }

  p {
    color: black;
  }
}

.google {
  .ban {
    background: #dd4b39;
  }

  p {
    color: black;
  }
}

.tags {
  h4 {
    font-family: Montserrat;
    color: #141d28;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
