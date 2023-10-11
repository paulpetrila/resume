import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Information Technology',
      institution: 'Gheorghe Asachi Technical University of Iasi',
      image: import('@/assets/logos/cropped-logo_ac_iasi.png'),
      dates: [new Date('2020.10'), new Date('2024.07')],
      description: 'Bachelor of Science, Computer Science and Automatic Control.',
      links: [website({ url: 'https://ac.tuiasi.ro/' })],
    },
    {
      title: 'Information Technology',
      institution: 'Grigore Moisil Technical High School',
      image: import('@/assets/logos/logoliis.png'),
      dates: [new Date('2016.09'), new Date('2020.07')],
      description: 'High School Diploma.',
      links: [website({ url: 'https://www.liis.ro/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
