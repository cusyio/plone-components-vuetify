<template>
  <component :is="wrapper" class="c-plone-pagination">
    <div v-if="available" class="c-plone-pagination__results">
      <v-pagination
        v-if="batchLength > 1"
        v-model="currentPage"
        :length="batchLength"
        class="my-2 c-plone-pagination__links c-plone-pagination__links--top"
      ></v-pagination>
      <slot :visibleItems="visibleItems">
        <ul v-if="visibleItems" class="c-plone-pagination__items">
          <li
            v-for="item in visibleItems"
            :key="item.UID"
            class="c-plone-pagination__item"
          >
            {{ item.title }}
          </li>
        </ul>
      </slot>
      <v-pagination
        v-if="batchLength > 1"
        v-model="currentPage"
        :length="batchLength"
        class="c-plone-pagination__links c-plone-pagination__links--bottom"
      ></v-pagination>
    </div>
    <slot v-else class="c-plone-pagination__empty" name="empty">
      <PloneSectionCollectionNoItems />
    </slot>
  </component>
</template>

<script>
export default {
  name: 'PloneSectionPagination',
  props: {
    items: {
      type: [Array, null],
      default: () => [],
    },
    itemsPerBatch: {
      type: Number,
      default: 10,
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
    available() {
      return this.items.length;
    },
    batchLength() {
      const itemsTotal = this.items.length;
      return Math.ceil(itemsTotal / this.itemsPerBatch);
    },
    visibleItems() {
      return this.items.slice(
        (this.currentPage - 1) * this.itemsPerBatch,
        this.currentPage * this.itemsPerBatch,
      );
    },
  },
};
</script>
