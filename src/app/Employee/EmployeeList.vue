<template lang="pug">
  list(
    :headers="headers"
    :items="employees"
    )
    template(slot="table-rows" slot-scope="props")
      td {{ props.item.full_name }}
      td {{ props.item.br_cpf | brCpfMask }}
      td {{ props.item.email }}
      td
        v-btn(
          :color="getBtnColor(props.item.active)"
          @click.stop.prevent="statusBtnAction(props.item)"
          outline
          ) {{ getBtnText(props.item.active) }}
</template>

<script>
import List from '@/components/List.vue';
import EmployeeService from '@/services/EmployeeService';
import RequestMixin from '@/mixins/request-mixin';

export default {
  components: {
    List,
  },
  data: () => ({
    EmployeeService,
    employees: [],
    headers: [
      {
        text: 'Full name',
        align: 'left',
        sortable: true,
        value: 'full_name',
        width: '40%',
      },
      {
        text: 'Br. Individual Registration',
        align: 'left',
        sortable: false,
        value: 'br_cpf',
        width: '15%',
      },
      {
        text: 'E-mail',
        align: 'left',
        sortable: true,
        value: 'email',
        width: '35%',
      },
      {
        text: 'Status',
        align: 'left',
        sortable: true,
        value: 'status',
        width: '10%',
      },
      {
        text: 'Actions',
        align: 'left',
        sortable: false,
        width: '5%',
      },
    ],
  }),
  mixins: [RequestMixin],
  filters: {
    brCpfMask(cpf) {
      return cpf;
    },
  },
  created() {
    this.getEmployees();
  },
  methods: {
    getBtnColor(active) {
      return active ? 'error' : 'success';
    },
    getBtnText(active) {
      return active ? 'Inactivate' : 'Activate';
    },
    statusBtnAction(payload) {
      if (payload.active) {
        this.activeOrInactiveEmployee(payload, false);
        return;
      }

      this.activeOrInactiveEmployee(payload);
    },
    activeOrInactiveEmployee(payload, active = true) {
      const serviceMethod = active
        ? EmployeeService.active(payload.id)
        : EmployeeService.inactive(payload.id);

      serviceMethod
        .then(() => {
          const msg = active ? 'Activated' : 'Inactivated';
          this.getEmployees();
          this.success(`${msg} successfully!`);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
    getEmployees() {
      EmployeeService
        .getList()
        .then(({ data }) => {
          this.employees = data.data;
          this.$forceUpdate();
        });
    },
  },
};
</script>
