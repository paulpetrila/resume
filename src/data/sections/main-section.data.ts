import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, goodreads, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/eu-transparent.png'),
  fullName: 'Paul-Cosmin Petrila',
  role: 'Fullstack Developer',
  details: [
    { label: 'Phone', value: '075 185 1229', url: 'tel:075 185 1229' },
    { label: 'Email', value: 'petrila.paulcosmin@gmail.com', url: 'mailto:petrila.paulcosmin@gmail.com' },
    { label: 'From', value: 'Iasi, Romania' },
    { label: 'Hobbies', value: '3D printing, DnD, reading, electronics ' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '075 185 1229' },
    { label: 'Email', value: 'petrila.paulcosmin@gmail.com' },
    { label: 'LinkedIn', value: '/in/paul-cosmin', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/pauwul', url: 'https://github.com' },
    { label: 'Goodreads', value: '/paul-petrila', url: 'https://www.goodreads.com/user/show/130496502-paul-petrila' },
    { label: 'Website', value: 'paulpetrila.com', url: 'https://paulpetrila.com', fullRow: true },
  ],
  description:
    "I'm just a guy who's looking to craft really <mark>*awesome*</mark> software and to have fun while doing it.",
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Paul-Petrila.pdf',
  },
  links: [
    facebook({ url: 'https://www.facebook.com/paulcosmin.petrila' }),
    github({ url: 'https://github.com/pauwul/' }),
    linkedin({ url: 'https://www.linkedin.com/in/paul-cosmin/' }),
    goodreads({ url: 'https://www.goodreads.com/https://www.goodreads.com/user/show/130496502-paul-petrila' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
