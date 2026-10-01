import agriculture from '/icons/agriculture.svg';
import defence from '/icons/defence.svg';
import plumbing from '/icons/plumbing.svg';
import architectural from '/icons/architecture.svg';
import civil from '/icons/civil.svg';
import transport from '/icons/transport.png';
import mining from '/icons/mining.svg';

export type Type = {
  id: number;
  label: string;
  icon: string;
};

export const navigationMenuData: Type[] = [
  { id: 1, label: 'Agriculture & Irrigation', icon: agriculture },
  { id: 2, label: 'Plumbing', icon: plumbing },
  { id: 3, label: 'Civil Engineering & Construction', icon: civil },
  { id: 4, label: 'Mining & Mining-Related Applications', icon: mining },
  { id: 5, label: 'Defence', icon: defence },
  { id: 6, label: 'Architectural Industry', icon: architectural },
  { id: 7, label: 'Road Transport', icon: transport },
];
