<template lang="pug">
  page
    v-card.elevation-0
      v-card-title
        v-text-field(
          v-model="search"
          append-icon="search"
          label="Search..."
          single-line
          hide-details
          )
    template(slot="button-bar")
      v-tooltip(left)
        v-btn(
          color="primary"
          :to="routerGo"
          slot="activator"
          fab
          fixed
          small
          bottom
          right
          )
          v-icon add
        span Add
    v-data-table(
      :items="items"
      :headers="headers"
      :search="search"
      :no-results-text="noResultsFound"
      :no-data-text="noResultsFound"
      rows-per-page-text="Registros por página"
      :rows-per-page-items="[10, 30, 50]"
      :hide-actions="items && !items.length"
      )
      template(slot="items" slot-scope="props")
        tr
          slot(
            name="table-rows"
            :item="props.item"
            )
          td
            v-tooltip(top)
              v-btn(
                fab
                flat
                dark
                small
                color="primary"
                @click.stop.prevent="edit(props.item)"
                slot="activator"
                )
                v-icon edit
              span Editar
</template>

<script>
import Page from '@/arch/Page.vue';

export default {
  components: {
    Page,
  },
  data: () => ({
    pagination: {
      sortBy: 'name',
    },
    search: '',
  }),
  props: [
    'items',
    'headers',
  ],
  computed: {
    noResultsFound() {
      return `No ${this.$route.meta.noCaps} found`;
    },
    routerGo() {
      const { meta, params } = this.$route;
      const { routerGo } = meta;

      if (routerGo.includes(':id')) {
        return routerGo.replace(':id', params.id);
      }

      return routerGo;
    },
    routerEdit() {
      const { meta, params } = this.$route;
      const { routerEdit } = meta;

      if (routerEdit.includes(':id')) {
        return routerEdit.replace(':id', params.id);
      }

      return routerEdit;
    },
  },
  methods: {
    edit(item) {
      this.$router.push({ path: `${this.routerEdit}/${item.entityId}`, params: { item } });
    },
  },
  name: 'List',
};
</script>
