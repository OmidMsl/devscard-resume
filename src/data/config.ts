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
    title: 'Omid Mosalmani - Senior Backend Developer',
    description:
      'Senior Backend Developer with 5+ years of experience building distributed backend systems, AI-powered applications, and production infrastructure. Experienced in Python, Django, LLMs, RAG, Docker, System Design, and DevOps with previous experience in Full Stack and Flutter development.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
