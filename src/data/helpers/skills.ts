import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});
export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'logos:aws',
  iconColor: '#FFCA28',
  url: 'https://aws.amazon.com/',
});

export const jenkins = createSkillFactory({
  name: 'Jenkins',
  icon: 'simple-icons:jenkins',
  iconColor: '#FFCA28',
  url: 'https://www.jenkins.io/',
});
export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});
export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'simple-icons:rust',
  iconColor: '#000000',
  url: 'https://www.rust-lang.org/',
});
export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const dotnet = createSkillFactory({
  name: '.NET',
  icon: 'logos:dotnet',
  iconColor: '#C21325',
  url: 'https://dotnet.microsoft.com/',
});

export const csharp = createSkillFactory({
  name: 'C#',
  icon: 'simple-icons:csharp',
  iconColor: '#178600',
  url: 'https://docs.microsoft.com/en-us/dotnet/',
});

export const blazor = createSkillFactory({
  name: 'Blazor',
  icon: 'simple-icons:blazor',
  iconColor: '#178600',
  url: 'https://entityframework.io/',
});
export const nuget = createSkillFactory({
  name: 'NuGet',
  icon: 'simple-icons:nuget',
  iconColor: '#000000',
  url: 'https://www.nuget.org/',
});

export const verilog = createSkillFactory({
  name: 'Verilog',
  icon: 'file-icons:vhdl',
  iconColor: '#000000',
  url: 'https://www.verilog.org/',
});

// export const mikroorm = createSkillFactory({
//   name: 'MikroORM',
//   icon: 'simple-icons:mikroorm',
//   iconColor: '#000000',
//   url: 'https://mikro-orm.io/',
// });

export const fastify = createSkillFactory({
  name: 'Fastify',
  icon: 'simple-icons:fastify',
  iconColor: '#000000',
  url: 'https://www.fastify.io/',
});

export const GitlabCI = createSkillFactory({
  name: 'GitLab CI',
  icon: 'simple-icons:gitlab',
  iconColor: '#E24329',
  url: 'https://about.gitlab.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'logos:python',
  iconColor: '#3776ab',
  url: 'https://www.python.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'logos:java',
  iconColor: '#ea4c89',
  url: 'https://www.java.com/',
});

export const keras = createSkillFactory({
  name: 'Keras',
  icon: 'simple-icons:keras',
  iconColor: '#000000',
  url: 'https://keras.io/',
});

export const springBoot = createSkillFactory({
  name: 'Spring Boot',
  icon: 'simple-icons:spring',
  iconColor: '#5e8d5a',
  url: 'https://spring.io/',
});

export const flask = createSkillFactory({
  name: 'Flask',
  icon: 'logos:flask',
  iconColor: '#000000',
  url: 'https://flask.palletsprojects.com/en/1.1.x/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#1488C6',
  url: 'https://www.docker.com/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'logos:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

export const laravel = createSkillFactory({
  name: 'Laravel',
  icon: 'simple-icons:laravel',
  iconColor: '#000000',
  url: 'https://laravel.com/',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#563d7c',
  url: 'https://getbootstrap.com/',
});

export const nodejs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/en/',
});

export const express = createSkillFactory({
  name: 'Express',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/',
});

export const passportjwt = createSkillFactory({
  name: 'Passport.js',
  icon: 'simple-icons:passport',
  iconColor: '#000000',
  url: 'https://www.passportjs.org/',
});
