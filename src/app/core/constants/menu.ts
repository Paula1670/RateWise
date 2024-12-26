import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Comercios',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Restaurantes',
          route: '/dashboard/business', //business  //nfts

        },


      ],
    },
    {
      group: 'Collaboration',
      separator: true,
      items: [

        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '/components/table',
        },
      ],
    },

  ];
}
