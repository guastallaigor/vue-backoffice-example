export default [
  {
    path: '/employee-new',
    name: 'New employee',
    component: () => import('./EmployeeForm'),
    meta: {
      routerBack: 'employee',
      domain: 'employee',
      sidebar: false,
      icon: 'keyboard_backspace',
      title: 'Employee',
    },
    children: [
      {
        name: 'Edit employee',
        path: '/employee-edit/:id',
        meta: {
          sidebar: false,
          routerBack: '/employee',
          domain: 'Employee',
          title: 'Edit employee',
          icon: 'keyboard_backspace',
        },
      },
    ],
  },
];
