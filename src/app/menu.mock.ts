import {Menu} from './menu.model';

export const menuMock: Menu = [
  {
    label: 'Dashboard',
    target: '/',
    isOpen: false,
    children: [
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      }

    ]
  },
  {
    label: 'Kontakt',
    target: '/',
    isOpen: false,
    children: [
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      }

    ]
  },
  {
    label: 'Rabattübersicht',
    target: '/',
    isOpen: false,
    children: [
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      }

    ]
  }, {
    label: 'Impressum',
    target: '/',
    isOpen: false,
    children: [
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      },
      {
        label: 'Level 2',
        target: '/',
      }

    ]
  }
];
