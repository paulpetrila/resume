import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  css,
  cypress,
  docker,
  dotnet,
  eslint,
  firebase,
  html,
  laravel,
  mongoDb,
  nestJs,
  nodejs,
  pnpm,
  postgreSql,
  prettier,
  react,
  rust,
  sass,
  supabase,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        html({ level: 4 }),
        css({ level: 4 }),
        react({
          level: 3,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        nodejs({ level: 4 }),
        nestJs({
          level: 4,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        docker({ level: 3 }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 3 }),
        firebase({ level: 1 }),
        laravel({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [rust(), react(), dotnet()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:ro', name: 'Romanian - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
