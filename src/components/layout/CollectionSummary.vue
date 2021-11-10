<template>
  <component :is="wrapper" class="l-plone-collection-summary">
    <PloneSectionHeading :title="content.title" :level="level" />
    <PloneSectionDescription :description="content.description" />
    <PloneSectionText :text="content.text" />

    <PloneSectionPagination
      :items="content.items"
      :items-per-batch="itemsPerBatch"
    >
      <template #default="slotProps">
        <section
          v-for="item in slotProps.visibleItems"
          :key="item.UID"
          class="c-plone-pagination__item c-plone-listing-summary"
        >
          <h2 class="text-h4 c-plone-listing-summary__heading">
            <nuxt-link
              :to="$plone.getLocalPath(item['@id'])"
              class="c-plone-listing-summary__heading-link"
              >{{ item.title }}</nuxt-link
            >
          </h2>
          <nuxt-link
            v-if="item.image"
            :to="$plone.getLocalPath(item['@id'])"
            class="c-plone-listing-summary__lead-image-link"
          >
            <SectionLeadImage
              :item="item"
              aspect-ratio="1"
              class="c-plone-listing-summary__lead-image"
              large="mini"
            />
          </nuxt-link>
          <p
            v-if="item.description"
            class="c-plone-listing-summary__description"
          >
            {{ item.description }}
          </p>
        </section>
      </template>
    </PloneSectionPagination>
  </component>
</template>

<script>
export default {
  name: 'PloneLayoutCollectionSummary',
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
    itemsPerBatch() {
      return this.content?.item_count || this.content?.items_total || 1;
    },
  },
};
</script>
