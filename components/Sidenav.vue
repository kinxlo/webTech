<template>

</template>
<script>
export default {
  props: {
    drawer: Boolean,
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
