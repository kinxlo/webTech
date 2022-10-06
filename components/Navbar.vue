<template>
  <client-only>
    <v-sheet class="py-2" color="navbarBg">
      <v-app-bar :fixed="setFixed" flat class="navbarBg">
        <v-layout class="cc-wrapper align-center pa-0">
          <NuxtLink to="/">
            <v-toolbar-title class="pa-0">
              <v-img class="logo" src="/Frame.svg" alt="logo"></v-img>
            </v-toolbar-title>
          </NuxtLink>

          <v-spacer></v-spacer>
          <v-layout class="justify-space-between d-none d-md-flex">
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/"> Home </NuxtLink>
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/about"> About </NuxtLink>
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/services"> Services </NuxtLink>
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/portfolio"> Portfolio </NuxtLink>
            <!-- <NuxtLink class="hover-accent hvr-grow pa-3" to="/blog"> Blog </NuxtLink> -->
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/pricing"> Pricing </NuxtLink>
            <NuxtLink class="hover-accent hvr-grow pa-3" to="/contact"> Contact Us </NuxtLink>
          </v-layout>
          <v-icon dark @click="drawer = !drawer" class="d-md-none">{{ icon.menu }} </v-icon>
        </v-layout>
      </v-app-bar>

      <v-navigation-drawer height="100%" temporary app v-model="drawer">
        <v-list-item>
          <v-list-item-content>
            <v-img max-width="16.9rem" src="/Frame.svg" alt="logo"></v-img>
            <v-list-item-subtitle
              style="font-size: 6px !important; letter-spacing: 2px !important"
              class="font-weight-bold text-overline info--text"
            >
              By Kingsley and Tobi</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <NuxtLink class="hvr-grow" to="/">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.home }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>

          <NuxtLink class="hvr-grow" to="/about">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.about }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">About</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
          <NuxtLink class="hvr-grow" to="/services">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.service }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Service</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
          <NuxtLink class="hvr-grow" to="/portfolio">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.portfolio }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Portfolio</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
          <!-- <NuxtLink class="hvr-grow" to="/blog">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.blog }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Blog</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink> -->
          <NuxtLink class="hvr-grow" to="/pricing">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.pricing }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Pricing</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
          <NuxtLink class="hvr-grow" to="/contact">
            <v-list-item class="my-3">
              <v-list-item-icon
                style="height: fit-content !important"
                class="accent pa-3 rounded-xl"
              >
                <v-icon dark small>{{ icon.contact }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Contact Us</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
        </v-list>
        <v-divider></v-divider>
        <section style="position: absolute; bottom: 0">
          <p class="text-caption">Lorem ipsum dolor sit amet.</p>
        </section>
      </v-navigation-drawer>
    </v-sheet>
  </client-only>
</template>

<script>
import {
  mdiAccountCreditCard,
  mdiFaceAgent,
  mdiFileTree,
  mdiHome,
  mdiInformationVariant,
  mdiMenu,
  mdiPost,
} from "@mdi/js";

export default {
  props: {
    setFixed: Boolean,
  },
  data: () => ({
    firstName: `kingsley`,
    lastName: `you`,
    img: `https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
    icon: {
      menu: mdiMenu,
      home: mdiHome,
      about: mdiInformationVariant,
      service: mdiFaceAgent,
      portfolio: mdiFileTree,
      blog: mdiPost,
      pricing: mdiAccountCreditCard,
      contact: mdiFaceAgent,
    },
    drawer: null,
  }),
};
</script>
