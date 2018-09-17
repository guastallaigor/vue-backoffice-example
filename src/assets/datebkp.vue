<template lang="pug">
v-flex(xs12 md6)
  v-menu(
    ref="menu"
    close-on-content-click
    v-model="datePickerMenu"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
    )
    v-text-field(
      slot="activator"
      label="Data de Cadastro"
      v-model="dateFormatted"
      mask="date"
      :rules="dateRule"
      return-masked-value
      @blur="payload.dataCadastro = parseDate(dateFormatted)"
      required
      )
    v-date-picker(
      v-model="payload.dataCadastro"
      @input="datePickerInput"
      color="primary"
      scrollable
      :max="maxDate"
      min="1920-01-01"
      locale="pt-BR"
      ref="picker"
      )
</template>

<script>
import moment from 'moment';

export default {
  data: () => ({
    datePickerMenu: false,
    dataCadastro: '',
    dateFormatted: null,
    dateRule: [(date) => {
      if (date && date.length === 10) {
        const diff = moment().locale('pt').diff(moment(date).format('DD/MM/YYYY'));
        if (diff < 0) return 'Data deve ser menor ou igual a hoje.';
      }

      if (!date) return 'Campo obrigatório.';
      return true;
    }],
  }),
  computed: {
    maxDate() {
      return moment().locale('pt').format('YYYY-MM-DD');
    },
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return null;
      }

      const isDataValida = moment(date).isValid();
      if (!isDataValida) {
        this.dateFormatted = null;
        return null;
      }

      return moment(date).format('DD/MM/YYYY');
    },
    parseDate(date) {
      if (!date) {
        return null;
      }

      const data = moment(date, ['DD/MM/YYYY']).format('YYYY-MM-DD');
      const isDataValida = moment(data).isValid();
      if (!isDataValida) {
        this.dateFormatted = null;
        return null;
      }

      return data;
    },
    datePickerInput(event) {
      this.dateFormatted = this.formatDate(event);
      this.datePickerMenu = false;
    },
  }
};
</script>

<style lang="css">
</style>
