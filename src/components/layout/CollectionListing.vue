<template>
  <component :is="wrapper" class="l-plone-collection-listing">
    <SectionHeading :title="content.title" :level="level" />
    <SectionDescription :description="content.description" />
    <SectionText :text="content.text" />

    <PloneSectionPagination
      :items="content.items"
      :items-per-batch="itemsPerBatch"
    >
      <template #default="slotProps">
        <v-list class="c-plone-pagination__items" subheader three-line>
          <v-list-item
            v-for="item in slotProps.visibleItems"
            :key="item.UID"
            :nuxt="isNuxt"
            :to="$plone.getLocalPath(item['@id'])"
            class="c-plone-pagination__item"
          >
            <v-list-item-avatar
              v-if="
                item.image || (item.default_page && item.default_page.image)
              "
              rounded
              size="64"
            >
              <PloneSectionImage :item="item" large="thumb" aspect-ratio="1" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>

              <v-list-item-subtitle
                v-text="item.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </PloneSectionPagination>
  </component>
</template>

<script>
export default {
  name: 'PloneLayoutCollectionListing',
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
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    isNuxt() {
      return this?.$root?.nuxt ? true : false;
    },
    itemsPerBatch() {
      return this.content?.item_count || this.content?.items_total || 5;
    },
  },
};
</script>
