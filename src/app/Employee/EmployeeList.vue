<template lang="pug">
  list(
    :headers="headers"
    :items="employess"
    )
    template(slot="table-rows" slot-scope="props")
      td {{ props.item.fullName }}
      td {{ props.item.brCpf | brCpfMask }}
      td {{ props.item.email }}
      td
        v-btn(
          :color="getBtnColor(props.item.deleted)"
          @click.stop.prevent="statusBtnAction(props.item)"
          outline
          ) {{ getBtnText(props.item.deleted) }}
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
    employess: [],
    headers: [
      {
        text: 'Full name',
        align: 'left',
        sortable: true,
        value: 'fullName',
        width: '40%',
      },
      {
        text: 'Br. Individual Registration',
        align: 'left',
        sortable: false,
        value: 'brCpf',
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
      return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 12)}`;
    },
  },
  created() {
    this.getEmployees();
  },
  methods: {
    getBtnColor(deleted) {
      return deleted ? 'success' : 'error';
    },
    getBtnText(deleted) {
      return deleted ? 'Activate' : 'Inactivate';
    },
    statusBtnAction(payload) {
      if (payload.deleted) {
        this.activeOrInactiveEmployee(payload);
        return;
      }

      this.activeOrInactiveEmployee(payload, false);
    },
    activeOrInactiveEmployee(payload, active = true) {
      const params = {
        entityId: payload.entityId,
        entityVersion: payload.entityVersion,
      };

      const serviceMethod = active
        ? EmployeeService.active(params)
        : EmployeeService.inactive(params);

      serviceMethod
        .then(() => {
          const msg = active ? 'Activated' : 'Inactivated';
          this.success(`${msg} successfully!`);
        })
        .catch((error) => {
          const { message } = error.response.data;
          this.error(message);
        });
    },
    getEmployees() {
      EmployeeService
        .getList()
        .then(({ data }) => {
          const { objects } = data;
          this.employess = objects;
        });
    },
  },
};
</script>
