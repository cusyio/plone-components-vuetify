<template>
  <component :is="wrapper" class="l-plone-document">
    <PloneSectionHeading :title="content.title" :level="level" />
    <PloneSectionDescription :description="content.description" />
    <PloneSectionText :text="content.text" />
  </component>
</template>

<script>
export default {
  name: 'PloneLayoutDocument',
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
