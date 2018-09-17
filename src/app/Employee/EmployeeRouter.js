export default [
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('./EmployeeList'),
    meta: {
      routerGo: '/employee-new',
      routerEdit: '/employee-edit',
      domain: 'Employee',
      sidebar: true,
      icon: 'account_circle',
      title: 'Employee',
      noCaps: 'employee',
    },
  },
];
