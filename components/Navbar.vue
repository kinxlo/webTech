<template>
  <client-only>
    <v-sheet class="py-2" color="navbarBg">
      <v-app-bar elevation="0" class="transparent">
        <v-layout class="cc-wrapper align-center">
          <v-app-bar-nav-icon v-show="false">
          </v-app-bar-nav-icon>
          <v-toolbar-title class="pa-0">
            <v-img
              max-width="16.9rem"
              src="/Frame.svg"
              alt="logo"
            ></v-img
          ></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-layout class="justify-space-between">
            <NuxtLink to="/" class="white--text">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="white--text">
              About
            </NuxtLink>
            <NuxtLink to="/services" class="white--text">
              Services
            </NuxtLink>
            <NuxtLink to="/portfolio" class="white--text">
              Portfolio
            </NuxtLink>
            <NuxtLink to="/blog" class="white--text">
              Blog
            </NuxtLink>
            <NuxtLink to="/pricing" class="white--text">
              Pricing
            </NuxtLink>
            <NuxtLink to="/contact" class="white--text">
              Contact Us
            </NuxtLink>
          </v-layout>
        </v-layout>
      </v-app-bar>
    </v-sheet>
  </client-only>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  firstName: `kingsley`,
  lastName: `you`,
  img: `https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
});
</script>
