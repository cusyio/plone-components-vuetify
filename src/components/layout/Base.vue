<template>
  <component :is="wrapper" class="l-plone-base">
    <PloneSectionHeading :title="content.title" :level="level" />
    <PloneSectionDescription :description="content.description" />
    <PloneSectionText :text="content.text" />
  </component>
</template>

<script>
export default {
  name: 'PloneLayoutBase',
  props: {
    content: {
      type: Object,
      required: true,
    },
    level: {
      type: [Number, String],
      default: 1,
    },
    wrapper: {
      type: String,
      default: 'div',
    },
  },
};
</script>
