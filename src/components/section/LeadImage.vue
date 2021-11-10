<template>
  <v-avatar class="ma-3" rounded :size="avatarWidth" v-if="imageData">
    <v-img
      aspect-ratio="1"
      v-bind="$attrs"
      v-if="imageData"
      :lazy-src="imageData.preview"
      :src="imageData.large"
    >
      <slot></slot>
    </v-img>
  </v-avatar>
</template>

<script>
export default {
  name: 'PloneSectionLeadImage',
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true,
    },
    fullImage: {
      type: Boolean,
      default: false,
    },
    preview: {
      type: String,
      default: 'tile',
    },
  },
  computed: {
    avatarWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%';
        default:
          return this.imageData.size;
      }
    },
    large() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'preview';
        case 'sm':
          return 'thumb';
        case 'md':
          return 'mini';
        case 'lg':
          return 'mini';
        case 'xl':
          return 'mini';
        default:
          return 'thumb';
      }
    },
    imageData() {
      let image = this.item?.image || this.item?.default_page?.image;
      if (!image) {
        return;
      }

      const height = this.fullImage
        ? image.height
        : image.scales[this.large].height;
      const width = this.fullImage
        ? image.width
        : image.scales[this.large].width;
      const large = this.fullImage
        ? image.download
        : image.scales[this.large].download;

      return {
        height: height,
        width: width,
        preview: image.scales[this.preview].download,
        large: large,
        size: Math.max(height, width),
      };
    },
  },
};
</script>
