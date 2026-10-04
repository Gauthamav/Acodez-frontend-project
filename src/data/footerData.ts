type Types = {
  id: number;
  image: string;
  alt: string;
};

export const socialMediaData: Types[] = [
  { id: 1, image: '/icons/instagram.svg', alt: 'Instagram' },
  { id: 2, image: '/icons/facebook.svg', alt: 'Facebook' },
  { id: 3, image: '/icons/linkedin.svg', alt: 'LinkedIn' },
  { id: 4, image: '/icons/x.svg', alt: 'X' },
];

type FooterLink = {
  id: number;
  name: string;
  path: string;
};

export const footerCompanyData: FooterLink[] = [
  { id: 1, name: 'About', path: '/about' },
  { id: 2, name: 'Case Studies', path: '/case-studies' },
  { id: 3, name: 'Blogs', path: '/blogs' },
  { id: 4, name: 'Contact', path: '/contact' },
];

export const footerIndustryData: FooterLink[] = [
  { id: 1, name: 'Agriculture & Irrigation', path: '/industries/agriculture-irrigation' },
  { id: 2, name: 'Plumbing', path: '/industries/plumbing' },
  { id: 3, name: 'Civil Engineering and Construction', path: '/industries/civil-engineering-construction' },
  { id: 4, name: 'Mining', path: '/industries/mining' },
  { id: 5, name: 'Defence', path: '/industries/defence' },
  { id: 6, name: 'Architectural Industry', path: '/industries/architectural' },
  { id: 7, name: 'Road Transport', path: '/industries/road-transport' },
];
