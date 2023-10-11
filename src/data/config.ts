import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Paul-Cosmin Petrila - Software Developer',
    description:
      "A T-shaped developer that's been playing with programming since 2016. Always learning and building things. From software to DnD campaigns and 3d prints.",
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    // footer:
    // 'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
