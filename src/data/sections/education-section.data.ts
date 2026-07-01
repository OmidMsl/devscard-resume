import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Artificial Intelligence and Robotics',
      institution: 'Shahid Chamran University of Ahvaz',
      image: import('@/assets/logos/chamran.jpeg'),
      dates: [new Date('2022.09'), new Date('2025.09')],
      description: 'Master degree',
      links: [website({ url: 'https://scu.ac.ir/' })],
    },
    {
      title: 'Computer Engineering',
      institution: 'Hamedan University of Technology',
      image: import('@/assets/logos/hut.png'),
      dates: [new Date('2017.09'), new Date('2021.05')],
      description: "Bachelor's degree. Specialization in AI",
      links: [website({ url: 'https://hut.ac.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
