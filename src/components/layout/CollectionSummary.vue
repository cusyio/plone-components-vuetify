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
        <v-container>
          <v-row dense>
            <v-col
              class="c-plone-pagination__item c-plone-listing-summary"
              v-for="item in slotProps.visibleItems"
              :key="item.UID"
              cols="12"
            >
              <v-card outlined elevation="0">
                <div
                  class="
                    d-flex
                    flex-column-reverse flex-sm-row flex-no-wrap
                    justify-space-between
                  "
                >
                  <div>
                    <v-card-title
                      v-text="item.title"
                      class="text-h4"
                    ></v-card-title>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-actions>
                      <PloneSectionReadMore
                        :title="item.title"
                        :url="$plone.getLocalPath(item['@id'])"
                      />
                    </v-card-actions>
                  </div>
                  <div class="flex-shrink-0">
                    <PloneSectionLeadImage
                      :item="item"
                      aspect-ratio="1"
                      class="c-plone-listing-summary__lead-image ma-sm-3"
                      large="mini"
                    />
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
      return this.content?.item_count || this.content?.items_total || 5;
    },
  },
};
</script>
