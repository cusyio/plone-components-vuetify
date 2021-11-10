<template>
  <p v-if="description" :class="['c-plone-description', cssClass]">
    {{ description }}
  </p>
</template>

<script>
export default {
  name: 'PloneSectionDescription',
  props: {
    cssClass: {
      type: [String, null],
      default: 'body-2',
    },
    description: {
      type: [String, null],
      default: null,
    },
  },
};
</script>
