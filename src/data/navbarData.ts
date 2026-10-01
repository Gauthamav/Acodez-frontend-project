export type NavLink = {
  id: number;
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: 4, label: 'Products', href: '/products' },
  { id: 5, label: 'Projects', href: '/projects' },
  { id: 6, label: 'Insights', href: '/insights' },
];
