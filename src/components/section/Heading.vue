<template>
  <component
    :class="['c-plone-heading', `text-h${level}`]"
    :id="level > 1 ? undefined : 'main-heading'"
    :is="`h${level}`"
  >
    {{ title }}
  </component>
</template>

<script>
export default {
  name: 'PloneSectionHeading',
  props: {
    title: {
      type: String,
      required: true
    },
    level: {
      type: [Number, String],
      default: 1
    }
  }
};
</script>
