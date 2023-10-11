import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  cypress,
  eslint,
  csharp,
  nestJs,
  pnpm,
  react,
  docker,
  mysql,
  reactQuery,
  blazor,
  jest,
  tailwindCss,
  typescript,
  fastify,
  dotnet,
  nuget,
  vue,
  verilog,
  GitlabCI,
  mongoDb,
  postgreSql,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Junior back-end developer',
      company: 'Adservio Social Innovation',
      image: import('@/assets/logos/ads.png'),
      dates: [new Date('2022-08'), null],
      description: `
        - In the beginning I was changing and editing functions and modules inside the PHP monolith.
        - After that I developed microservices around the monolith using Fastify and Prisma ORM. We tested them using unit tests written in Jest.
        - Later we started using NestJS and Mikroorm to develop our microservices.
        - Recently I started being more involved in API and E2E testing using Cypress and CI/CD tools like GitlabCI and writing bash scripts.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          react(),
          fastify(),
          nestJs(),
          cypress(),
          jest(),
          GitlabCI(),
          docker(),
          mysql(),
          postgreSql(),
          mongoDb(),
        ],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Dotnet summer camp intern 2022',
      company: 'Pentalog',
      image: import('@/assets/logos//Pentalog.png'),
      dates: [new Date('2022-07'), new Date('2022-09')],
      description: `
        - Final project - Build an API to manage a restaurant with JWT authentication using the .NET framework
        - I've used Blazor components and ASP.NET to generate dynamic web pages
        - There was a lot of emphasis put into writing clean code. I learnt a lot about software philosophies like KISS, DRY, SOLID, CQS and other designing ACID complaint DBs
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), csharp(), blazor(), nuget()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Summer camp intern',
      company: 'AMD',
      image: import('@/assets/logos/amd-logo.png'),
      dates: [new Date('2022-06'), new Date('2022-07')],
      description: `
      I learnt the basics of Verilog programming, which is a method to programatically wire together logic gates.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [verilog()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
