<template>
  <v-card
    height="453"
    class="banner d-flex flex-column align-center justify-center overlay"
    :style="`background-image: url(${img})`"
  >
    <section class="text-center">
      <h1 style="font-size: 59px" class="accent--text letter-spacing my-3">
        {{ title }}
      </h1>
      <v-sheet color="transparent">
        <NuxtLink class="white--text" v-for="n in nav" :key="n" :to="`${n == 'Home' ? '/' : n}`">
          <span class="mx-5" style="font-size: 20px">{{ n }}</span>
        </NuxtLink>
      </v-sheet>
    </section>
  </v-card>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  img: String,
  nav: Array,
});
</script>
