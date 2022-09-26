<template>
  <client-only>
    <v-sheet class="py-2" color="navbarBg">
      <v-app-bar elevation="0" class="transparent">
        <v-layout class="cc-wrapper align-center">
          <v-app-bar-nav-icon v-show="false"> </v-app-bar-nav-icon>
          <v-toolbar-title class="pa-0">
            <v-img max-width="16.9rem" src="/Frame.svg" alt="logo"></v-img
          ></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-layout class="justify-space-between">
            <NuxtLink to="/" class="white--text"> Home </NuxtLink>
            <NuxtLink to="/" class="white--text"> Pages </NuxtLink>
            <NuxtLink to="/" class="white--text"> Services </NuxtLink>
            <NuxtLink to="/" class="white--text"> Portfolio </NuxtLink>
            <NuxtLink to="/" class="white--text"> Blog </NuxtLink>
            <NuxtLink to="/" class="white--text"> Contact Us </NuxtLink>
          </v-layout>
        </v-layout>
      </v-app-bar>
    </v-sheet>
  </client-only>
</template>
