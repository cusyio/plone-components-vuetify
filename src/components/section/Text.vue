<!-- eslint-disable vue/no-v-html -->
<template>
  <component
    v-if="textData"
    v-html="textData"
    :is="wrapper"
    class="c-plone-text"
  ></component>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

export default {
  name: 'PloneSectionText',
  props: {
    text: {
      type: [String, Object, null],
      default: null
    },
    wrapper: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    textData() {
      const text = this?.text?.data || this?.text || '';
      return sanitizeHtml(this.updateLinksInHTML(text));
    }
  },
  methods: {
    updateLinksInHTML(html) {
      const regex = /href\s*=\s*(['"])(https?:\/\/.+?)\1/gi;
      let link;

      while ((link = regex.exec(html)) !== null) {
        if (link[2].startsWith(this.$plone.baseURL)) {
          const relativeUrl = link[2].replace(this.$plone.baseURL, '');
          html = html.replace(link[2], relativeUrl);
        }
      }

      return html;
    }
  }
};
</script>
