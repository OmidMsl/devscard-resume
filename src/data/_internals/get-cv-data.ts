import type { ReadonlyDeep } from 'type-fest';
import type { Data } from '@/types/data';
import transformData from './transform-data';
import { getConfig } from '../config';
import { getLocalizedSections } from '../sections';

const createCvData = (locale: 'en' | 'fa' = 'en') => {
  const configData = getConfig(locale);
  const sectionsData = getLocalizedSections(locale);
  const data = { config: configData, sections: sectionsData } as const satisfies ReadonlyDeep<Data>;

  return transformData(data);
};

export type PreciseData = ReturnType<typeof createCvData> extends (...args: any[]) => infer T ? T : never;

const getCvData = createCvData();

export const getLocalizedCvData = createCvData;

export default getCvData;
