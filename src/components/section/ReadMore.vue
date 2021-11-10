<template>
  <v-btn :to="url" class="ml-2 my-2" nuxt outlined rounded small
    >Read more
    <span class="d-sr-only">about &quot;{{ title }}&quot;</span></v-btn
  >
</template>

<script>
export default {
  name: 'PloneSectionReadMore',
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
