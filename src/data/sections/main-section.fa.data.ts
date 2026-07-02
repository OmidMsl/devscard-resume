import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { bale, github, instagram, linkedin, telegram, whatsapp } from '../helpers/links';

const mainSectionDataFA = {
  config: {
    icon: 'fa6-solid:user',
    title: 'پروفایل',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'امید مسلمانی',
  role: 'توسعه‌دهنده Senior بک‌اند | مهندس AI و LLM',
  details: [
    { label: 'تلفن', value: '۴۹۸۸ ۲۱۶ ۹۳۶', url: 'tel:+98 936 216 4988' },
    { label: 'ایمیل', value: 'omid.mosalmanii@gmail.com', url: 'mailto:omid.mosalmanii@gmail.com' },
    { label: 'محل زندگی', value: 'خوزستان، دزفول' },
    { label: 'سن', value: '۲۷' },
  ],
  pdfDetails: [
    { label: 'تلفن', value: '936 216 4988' },
    { label: 'ایمیل', value: 'omid.mosalmanii@gmail.com' },
    { label: 'LinkedIn', value: '/in/omid-mosalmani-6694761b2', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/OmidMsl', url: 'https://github.com' },
  ],
  description:
    '**توسعه‌دهنده ارشد بک‌اند** با **بیش از ۵ سال تجربه** در طراحی و توسعه سامانه‌های **بک‌اند** در محیط‌های عملیاتی. تمرکز اصلی من بر توسعه پلتفرم‌های قابل‌اعتماد در حوزه **اینترنت اشیا**، سامانه‌های **پایش و هشدار**، **اتوماسیون** و **راهکارهای مبتنی بر هوش مصنوعی** است. همچنین تجربه عملی در یکپارچه‌سازی **مدل‌های زبانی بزرگ (LLM)** و سامانه‌های **بازیابی-تولید (RAG)** در محصولات واقعی داشته و دارای مدرک **کارشناسی ارشد هوش مصنوعی** هستم.',
  tags: [
    { name: 'Backend Systems' },
    { name: 'IoT Platforms' },
    { name: 'AI & LLM' },
    { name: 'Machine Learning' },
    { name: 'DevOps' },
    { name: 'Automation' },
  ],
  action: {
    label: 'دانلود رزومه',
    url: '/cv-fa.pdf',
    downloadedFileName: 'CV-Omid_mosalmani-fa.pdf',
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

export default mainSectionDataFA;
