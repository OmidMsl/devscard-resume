import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionDataFA = {
  config: {
    title: 'Testimonials', // TODO: Replace with 'توصیه‌ها'
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: false,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/testimonial-1.jpeg'),
      author: 'Howard Stewart', // TODO: Replace with Persian name if desired
      relation: 'We work together as front-end developers at Google', // TODO: Replace with Persian relation
      content:
        'In nec mattis sem. Morbi purus lorem, euismod ac varius at, aliquet vitae augue. Pellentesque ut facilisis felis. In sed dui blandit, aliquet odio eu, elementum leo. In facilisis dapibus tortor ac volutpat. Cras cursus nec odio maximus elementum.', // TODO: Replace with Persian content
      links: [github({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      image: import('@/assets/testimonials/testimonial-2.jpeg'),
      author: 'Jean Richards', // TODO: Replace with Persian name if desired
      relation: 'My project manager at GitLab', // TODO: Replace with Persian relation
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.', // TODO: Replace with Persian content
      links: [linkedin({ url: '#' })],
    },
    {
      image: import('@/assets/testimonials/testimonial-3.jpeg'),
      author: 'Jason Fisher', // TODO: Replace with Persian name if desired
      relation: 'My customer for sidewing.com website', // TODO: Replace with Persian relation
      content:
        'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.', // TODO: Replace with Persian content
      links: [github({ url: '#' }), website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionDataFA;
