import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import educationDataEN from './education-section.data';
import educationDataFA from './education-section.fa.data';
import experienceDataEN from './experience-section.data';
import experienceDataFA from './experience-section.fa.data';
import favoritesDataEN from './favorites-section.data';
import favoritesDataFA from './favorites-section.fa.data';
import mainDataEN from './main-section.data';
import mainDataFA from './main-section.fa.data';
import portfolioDataEN from './portfolio-section.data';
import portfolioDataFA from './portfolio-section.fa.data';
import researchDataEN from './research-section.data';
import researchDataFA from './research-section.fa.data';
import skillsDataEN from './skills-section.data';
import skillsDataFA from './skills-section.fa.data';
import testimonialsDataEN from './testimonials-section.data';
import testimonialsDataFA from './testimonials-section.fa.data';

export const getLocalizedSections = (locale: 'en' | 'fa' = 'en') => {
  const isFA = locale === 'fa';
  return {
    main: isFA ? mainDataFA : mainDataEN,
    skills: isFA ? skillsDataFA : skillsDataEN,
    experience: isFA ? experienceDataFA : experienceDataEN,
    portfolio: isFA ? portfolioDataFA : portfolioDataEN,
    research: isFA ? researchDataFA : researchDataEN,
    education: isFA ? educationDataFA : educationDataEN,
    testimonials: isFA ? testimonialsDataFA : testimonialsDataEN,
    favorites: isFA ? favoritesDataFA : favoritesDataEN,
  } as const satisfies ReadonlyDeep<Sections>;
};

export const sections = getLocalizedSections('en');

export default sections;
