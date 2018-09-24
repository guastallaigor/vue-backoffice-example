<template lang="pug">
  v-form(:ref="domain" @submit.prevent="save")
    page
      slot(name="form-inputs")
      v-card-text
        v-layout(justify-end row v-if="showFormButton")
          v-btn(flat :to="routerBack") Cancel
          v-btn(
              color="primary"
              type="submit"
              :loading="loader"
              :disabled="loader"
              ) Save
            span.custom-loader.rotate(slot="loader")
              v-icon(light) cached
</template>

<script>
import Page from '@/arch/Page.vue';
import Service from '@/services/Service';
import EventBus from '@/core/event-bus';

export default {
  components: {
    Page,
  },
  props: {
    service: Service,
    payload: Object,
    showFormButton: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    loader: false,
  }),
  computed: {
    routerBack() {
      const { meta, params } = this.$route;
      const { routerBack } = meta;

      if (routerBack.includes(':id')) {
        return routerBack.replace(':id', params.id);
      }

      return routerBack;
    },
    id() {
      const { params, fullPath } = this.$route;

      if (fullPath.includes('new') && params.id) {
        return null;
      }

      return params.id;
    },
    domain() {
      return this.$route.meta.domain;
    },
  },
  methods: {
    success(msg) {
      EventBus.$emit('snackbar', { active: true, color: 'success', msg });
      this.$router.push(this.routerBack);
    },
    error(msg) {
      EventBus.$emit('snackbar', { active: true, color: 'error', msg });
    },
    save() {
      if (!this.$refs[this.domain].validate()) return;
      this.loader = true;

      if (this.id) {
        this.service
          .edit(this.payload)
          .then(() => {
            this.success('Edited successfully!');
            EventBus.$emit('advance-step');
          })
          .catch((error) => {
            this.error(error);
          });
        this.loader = false;
        return;
      }

      this.service
        .save(this.payload)
        .then(() => {
          this.success('Saved successfully!');
          EventBus.$emit('advance-step');
        })
        .catch((error) => {
          const { message } = error.response.data;
          this.error(message);
        });
      this.loader = false;
    },
  },
  name: 'Form',
};
</script>

<style lang="sass">
.custom-loader.rotate
  animation: loadingAnimation 1s infinite
  display: flex
</style>
