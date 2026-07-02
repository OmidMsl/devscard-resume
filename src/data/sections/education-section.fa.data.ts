import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionDataFA = {
  config: {
    title: 'تحصیلات',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'هوش مصنوعی و رباتیکز',
      institution: 'دانشگاه شهید چمران اهواز',
      image: import('@/assets/logos/chamran.jpeg'),
      dates: [new Date('2022.10'), new Date('2025.10')],
      description: ' کارشناسی ارشد',
      links: [website({ url: 'https://scu.ac.ir/' })],
    },
    {
      title: 'مهندسی کامپیوتر',
      institution: 'دانشگاه صنعتی همدان',
      image: import('@/assets/logos/hut.png'),
      dates: [new Date('2017.10'), new Date('2021.06')],
      description: 'کارشناسی. گرایش: نرم افزار',
      links: [website({ url: 'https://hut.ac.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionDataFA;
