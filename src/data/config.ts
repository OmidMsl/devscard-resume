import type { Config } from '@/types/data';
import { enUS, faIR } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const createConfig = (locale: typeof enUS | typeof faIR, direction: 'ltr' | 'rtl') =>
  ({
    i18n: {
      locale,
      direction,
      dateFormat: 'MMMM yyyy',
      translations: {
        now: locale.code === 'fa-IR' ? 'هم‌اکنون' : 'now',
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
        '',
    },
  }) as const satisfies ReadonlyDeep<Config>;

const englishConfig = createConfig(enUS, 'ltr');
const persianConfig = createConfig(faIR, 'rtl');

export const getConfig = (locale: 'en' | 'fa' = 'en') => (locale === 'fa' ? persianConfig : englishConfig);

export default englishConfig;
