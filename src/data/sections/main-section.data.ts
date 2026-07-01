import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { bale, github, instagram, linkedin, telegram, whatsapp } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Omid Mosalmani',
  role: 'Senior Backend Developer | AI & LLM Engineer',
  details: [
    { label: 'Phone', value: '936 216 4988', url: 'tel:+98 936 216 4988' },
    { label: 'Email', value: 'omid.mosalmanii@gmail.com', url: 'mailto:omid.mosalmanii@gmail.com' },
    { label: 'From', value: 'Iran, Khouzestan, Dezful' },
    { label: 'Age', value: '27' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '936 216 4988' },
    { label: 'Email', value: 'omid.mosalmanii@gmail.com' },
    { label: 'LinkedIn', value: '/in/omid-mosalmani-6694761b2', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/OmidMsl', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    "**Senior Backend Developer** with **5+ years of experience** designing and building **production backend systems**. My primary focus is developing reliable platforms that combine **IoT**, **monitoring** and **alerting**, **automation**, and **AI-powered services**. I have hands-on experience integrating **LLMs** and **Retrieval-Augmented Generation (RAG)** into production applications, supported by a Master's degree in **Artificial Intelligence**.",
  tags: [
    { name: 'Backend Systems' },
    { name: 'IoT Platforms' },
    { name: 'AI & LLM' },
    { name: 'Machine Learning' },
    { name: 'DevOps' },
    { name: 'Automation' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Omid_mosalmani.pdf',
  },
  links: [
    telegram({ url: 'https://t.me/omidMsl' }),
    bale({ url: 'https://ble.ir/omidmsl' }),
    whatsapp({ url: 'https://wa.me/qr/OUCIYNKFH73RG1' }),
    github({ url: 'https://github.com/OmidMsl' }),
    linkedin({ url: 'https://linkedin.com/in/omid-mosalmani-6694761b2' }),
    instagram({ url: 'https://www.instagram.com/omid.mosalmani/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
