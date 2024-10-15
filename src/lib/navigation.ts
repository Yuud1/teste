export const navigation = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Condomínios',
    href: '/dashboard/condos',
    items: [
      {
        label: 'Cadastro',
        href: '/dashboard/condos',
      },
      {
        label: 'Manutenções',
        href: '/dashboard/maintenances',
      },
      {
        label: 'Estruturas',
        href: '/dashboard/structures',
      },
    ],
  },
  {
    label: 'Chamados',
    href: '/dashboard/calls',
  },
  {
    label: 'Serviços',
    href: '/dashboard/services',
  },
];
