import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  html,
  css,
  javascript,
  bootstrap,
  chakraUi,
  eslint,
  firebase,
  jest,
  laravel,
  nestJs,
  keras,
  nextJs,
  nx,
  docker,
  pnpm,
  postgreSql,
  prettier,
  react,
  java,
  sass,
  python,
  typescript,
  flask,
  springBoot,
  nodejs,
  express,
  passportjwt,
  aws,
  jenkins,
  GitlabCI,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Mentor @ Health Innovation Zone',
      image: import('@/assets/logos/hizbydiz.png'),
      dates: [new Date('2023-03'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [],
      screenshots: [],
      description:
        'I entered the Health Innovation Zone program as a challenge to myself. I mentor 4 awesome teams in their journey to better the health industry. ',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'FiiPractic',
      image: import('@/assets/logos/fiipractic.png'),
      dates: [new Date('2023-03'), new Date('2023-04')],
      details: [],
      pdfDetails: [],
      screenshots: [],
      description:
        'I participated at 3 workshops: "Cloud Development by Levi9", "DevOps by Yonder", "PHP by CloudLab" which taught me a great deal about deploying to the cloud, local infrastructure, CI/CD and developing webapps with Laravel. ',
      tagsList: {
        title: 'Technologies',
        tags: [docker(), aws(), docker(), jenkins(), GitlabCI(), laravel()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Pocket Cats',
      image: import('@/assets/portfolio/pocketcat.png'),
      dates: [new Date('2023-01'), new Date('2023-06')],
      details: [
        { label: 'Team size', value: '4 person' },
        { label: 'My role', value: ['Team Lead and Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
        { label: 'Github', value: 'https://github.com/Pauwul/PocketCats', url: '#' },
      ],
      pdfDetails: [],
      screenshots: [],
      description:
        'An open-source web app that identifies cats, made as a project for one of our classes. The app is built using NextJS, Java, Python and PostgreSQL. The people that I worked with had no real knowledge about web development, I taught them everything I know. ***Seeing them grow was such a joy***.  ',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), react(), java(), springBoot(), python(), keras(), flask(), postgreSql(), docker()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'The Odin Project',
      image: import('@/assets/portfolio/odinlogo.png'),
      dates: [new Date('2020-03'), new Date('2021-06')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Fullstack Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [],
      screenshots: [],
      description:
        'Thanks to this Free and Open Source project, I was able to learn a lot about software development. I made a lot of small websites to learn concepts such as React and how to integrate it with APIs and write your own with Nodejs and Express. It introduced a lot of tooling that I now use every day. ',
      tagsList: {
        title: 'Technologies',
        tags: [react(), nodejs(), express(), passportjwt(), html(), css(), javascript(), jest()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Scoala Pentru Valori Autentice',
      image: '',
      dates: [new Date('2018'), new Date('2018')],
      details: [
        { label: 'Team size', value: '4 person' },
        { label: 'My role', value: ['Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [],
      screenshots: [],
      description:
        'During High School I was part of many initiatives, one of them was a project called "Scoala Pentru Valori Autentice" for ISJ. It was the first fullstack app I helped develop. I was mainly tasked with writing the frontend in Bootstrap, but I got to learn how Laravel 5 works and learnt a lot about the whole process. ',
      tagsList: {
        title: 'Technologies',
        tags: [laravel(), css(), html(), javascript(), bootstrap()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
