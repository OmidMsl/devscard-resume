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

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
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

export const django = createSkillFactory({
  name: 'Django',
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  url: 'https://www.djangoproject.com/',
});

export const djangorestfreamwork = createSkillFactory({
  name: 'Django REST Framework',
  icon: 'simple-icons:django',
  iconColor: '#a30000',
  url: 'https://www.django-rest-framework.org/',
});

export const mqtt = createSkillFactory({
  name: 'MQTT',
  icon: 'simple-icons:mqtt',
  iconColor: '#3C00B0',
  url: 'https://mqtt.org/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angularjs',
  iconColor: '#DD0031',
  url: 'https://angular.dev/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#1D63ED',
  url: 'https://www.docker.com/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#000000',
  url: 'https://www.linux.org/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#00758F',
  url: 'https://www.mysql.com/',
});

export const restApi = createSkillFactory({
  name: 'Rest API',
  icon: 'simple-icons:postman',
  iconColor: '#f26f11',
  url: '/',
});

export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#027DFD',
  url: 'https://flutter.dev/',
});

export const dart = createSkillFactory({
  name: 'Dart',
  icon: 'simple-icons:dart',
  iconColor: '#027DFD',
  url: 'https://dart.dev/',
});

export const googleMaps = createSkillFactory({
  name: 'Google Maps',
  icon: 'simple-icons:googlemaps',
  iconColor: '#EA4335',
  url: 'https://maps.google.com/',
});

export const ble = createSkillFactory({
  name: 'Bluetooth Low Energy (BLE)',
  icon: 'simple-icons:bluetooth',
  iconColor: '#0082FC',
  url: 'https://en.wikipedia.org/wiki/Bluetooth_Low_Energy',
});

export const llmApplications = createSkillFactory({
  name: 'LLM Applications',
  icon: 'simple-icons:openai',
  iconColor: '#000000',
  url: 'https://en.wikipedia.org/wiki/Large_language_model#:~:text=A%20large%20language%20model%20(LLM,foundational%20technology%20behind%20modern%20chatbots.',
});

import huggingfaceIconUrl from '@/assets/skills-icons/huggingface.svg';
import ragIconUrl from '@/assets/skills-icons/clarifai.svg';
import CiCdIconUrl from '@/assets/skills-icons/ci-cd.svg';
import fineTuningIconUrl from '@/assets/skills-icons/noun-neural-network.svg';
import baleIconUrl from '@/assets/skills-icons/bale.svg';
import roboflowIconUrl from '@/assets/skills-icons/roboflow.svg';
import n8nIconUrl from '@/assets/skills-icons/n8n.svg';

export const rag = createSkillFactory({
  name: 'RAG',
  iconSvg: ragIconUrl,
  iconColor: '#006D41',
  url: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation',
});

export const promptEngineering = createSkillFactory({
  name: 'Prompt Engineering',
  icon: 'simple-icons:openai',
  iconColor: '#11d0f2',
  url: 'https://en.wikipedia.org/wiki/Prompt_engineering',
});

export const finetuning = createSkillFactory({
  name: 'Fine-tuning',
  iconSvg: fineTuningIconUrl,
  iconColor: '#d411f2',
  url: 'https://www.ibm.com/think/topics/fine-tuning',
});

export const modelEvaluation = createSkillFactory({
  name: 'Model Evaluation',
  icon: 'simple-icons:quicklook',
  iconColor: '#11d0f2',
  url: '/',
});

export const huggingFace = createSkillFactory({
  name: 'Hugging Face',
  iconSvg: huggingfaceIconUrl,
  iconColor: '#FFD21E',
  url: 'https://huggingface.co/',
});

export const googleColab = createSkillFactory({
  name: 'Google Colab',
  icon: 'simple-icons:googlecolab',
  iconColor: '#F9AB00',
  url: 'https://colab.research.google.com/',
});

export const nginx = createSkillFactory({
  name: 'Nginx',
  icon: 'simple-icons:nginx',
  iconColor: '#009639',
  url: 'https://nginx.org/',
});

export const gitlab = createSkillFactory({
  name: 'GitLab',
  icon: 'simple-icons:gitlab',
  iconColor: '#FC6D26',
  url: 'https://about.gitlab.com/',
});

export const cicd = createSkillFactory({
  name: 'CI/CD',
  iconSvg: CiCdIconUrl,
  iconColor: '#FC6D26',
  url: 'https://en.wikipedia.org/wiki/CI/CD',
});

export const prometheus = createSkillFactory({
  name: 'Prometheus',
  icon: 'simple-icons:prometheus',
  iconColor: '#E6522C',
  url: 'https://prometheus.io/',
});

export const grafana = createSkillFactory({
  name: 'Grafana',
  icon: 'simple-icons:grafana',
  iconColor: '#F46800',
  url: 'https://grafana.com/',
});

export const cloudflareWorkers = createSkillFactory({
  name: 'Cloudflare Workers',
  icon: 'simple-icons:cloudflare',
  iconColor: '#F38020',
  url: 'https://www.cloudflare.com/products/workers/',
});

export const influxdb = createSkillFactory({
  name: 'InfluxDB',
  icon: 'simple-icons:influxdb',
  iconColor: '#22ADF6',
  url: 'https://www.influxdata.com/',
});

export const python = createSkillFactory({
  name: 'python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const authentication = createSkillFactory({
  name: 'Authentication',
  icon: 'simple-icons:monkeytie',
  iconColor: '#1A52C2',
  url: '/',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://en.wikipedia.org/wiki/HTML',
});

export const bash = createSkillFactory({
  name: 'Bash',
  icon: 'simple-icons:gnubash',
  iconColor: '#4EAA25',
  url: 'https://www.w3schools.com/bash/bash_script.php',
});

export const telegram = createSkillFactory({
  name: 'Telegram Bot API',
  icon: 'simple-icons:telegram',
  iconColor: '#26A5E4',
  url: 'https://core.telegram.org/bots/api',
});

export const bale = createSkillFactory({
  name: 'Bale Messenger API',
  iconSvg: baleIconUrl,
  iconColor: '#43C79DFF',
  url: 'https://docs.bale.ai/',
});

export const roboflow = createSkillFactory({
  name: 'Roboflow',
  iconSvg: roboflowIconUrl,
  iconColor: '#6706CE',
  url: 'https://roboflow.com/',
});

export const n8n = createSkillFactory({
  name: 'n8n',
  iconSvg: n8nIconUrl,
  iconColor: '#EA4B71',
  url: 'https://n8n.io/',
});


export const sqlite = createSkillFactory({
  name: 'SQLite',
  icon: 'simple-icons:sqlite',
  iconColor: '#003B57',
  url: 'https://sqlite.org/',
});




