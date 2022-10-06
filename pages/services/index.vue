<template>
  <main>
    <Banner
      title="Services"
      :nav="nav"
      img="https://res.cloudinary.com/kingsleysolomon/image/upload/f_auto,q_auto/v1664450831/webtech/Rectangle_6_n4i8bd.png"
    />
    <section class="v-spacing cc-wrapper">
      <v-row>
        <v-col md="4" v-for="n in 6" :key="n">
          <ServiceCard />
        </v-col>
      </v-row>
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
    nav: ["About", "Portfolio"],
  }),
};
</script>

<style></style>
