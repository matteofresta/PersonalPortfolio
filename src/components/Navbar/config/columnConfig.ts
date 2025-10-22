import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

export const columnConfig = [
  {
    key: 'home',
    label: 'navbar.Home',
    path: '/',
    component: Home,
  },
  {
    key: 'about',
    label: 'navbar.About',
    path: '/about',
    component: About,
  },
  {
    key: 'contact',
    label: 'navbar.Contact',
    path: '/contact',
    component: Contact,
  },
];
