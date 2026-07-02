import type { ResearchSection } from '@/types/sections/research-section.types';
import type { ReadonlyDeep } from 'type-fest';

const researchSectionDataFA = {
  config: {
    title: 'پژوهش‌ها',
    slug: 'researches',
    icon: 'fa6-solid:microscope',
    visible: true,
  },
  researches: [
    {
      title: 'پایان‌نامه کارشناسی ارشد',
      researchTitle: 'طراحی و ساخت سیستم هوشمند ارائه توضیحات متنی در خصوص تصمیمات وسایل نقلیه خودران',
      dates: [new Date('2024-01'), new Date('2025-10')],
      details: [
        { label: 'موسسه', value: 'دانشگاه هشید چمران اهواز' },
        { label: 'درجه تحصیلی', value: 'کارشناسی ارشد هوش مصنوعی' },
        { label: 'وضعیت', value: 'تکمیل شده' },
      ],
      description:
        'طراحی و پیاده‌سازی یک چارچوب ترکیبی هوش مصنوعی توضیح‌پذیر (XAI) برای خودروهای خودران با ترکیب مدل تصمیم‌گیری ADAPT و مدل‌های زبانی بزرگ (Gemini و GPT). این سامانه با استفاده از تصمیم نهایی، نقشه‌های توجه و تکنیک‌های مهندسی پرامپت، توضیحاتی روان و قابل فهم برای انسان تولید می‌کند.' +
        '<br/>' +
        'در این پژوهش روش‌های مهندسی پرامپت، ریزتنظیم مدل‌ها، استدلال چندوجهی و هم‌ترازسازی اطلاعات بصری و متنی بر روی مجموعه‌داده BDD-X مورد بررسی قرار گرفت. نتایج آزمایش‌ها نسبت به مدل پایه بهبود قابل توجهی را نشان داد و افزایش ۱۱ درصدی در معیار CIDEr-D و ۲۸ درصدی در معیار METEOR حاصل شد که بیانگر تولید توضیحاتی روان‌تر و منطبق‌تر با دلایل واقعی تصمیم‌گیری خودرو است.',
      keywords: {
        title: 'کلمات کلیدی',
        tags: [
          { name: 'هوش صنوعی توضیح پذیر (XAI)' },
          { name: 'مدل های زبانی بزرگ' },
          { name: 'وسایل نقلیه خودران' },
          { name: 'بینایی ماشین' },
          { name: 'مهندسی پرامپت' },
          { name: 'Fine-tuning' },
          { name: 'هوش مصنوعی چندوجهی' },
        ],
      },
      links: [
        { name: 'Paper', icon: 'fa6-solid:file-lines', url: '/files/thesis.pdf' },
        { name: 'Slides', icon: 'fa6-solid:display', url: '/files/thesis_slides.pdf' },
      ],
    },
    {
      title: 'مقاله کنفرانسی',
      researchTitle: 'رویکردی مبتنی بر مدل‌های زبانی بزرگ برای تبیین تصمیمات مدل‌های بینایی در خودروهای خودران',
      dates: [new Date('2025-09'), new Date('2025-11')],
      details: [
        {
          label: 'کنفرانس',
          value: 'شانزدهمین کنفرانس بین‌المللی فناوری اطلاعات و دانش (IKT 2025 - IEEE)',
        },
      ],
      description:
        'ارائه یک چارچوب ترکیبی که با ادغام مدل بینایی ADAPT و مدل‌های زبانی بزرگ، توضیحاتی قابل اعتماد و قابل فهم برای تصمیمات خودروهای خودران تولید می‌کند. این روش با ایجاد ارتباط میان نقشه‌های توجه بصری و قابلیت‌های استدلال مدل‌های زبانی، شفافیت و تفسیرپذیری سامانه را در کاربردهای حساس به ایمنی افزایش می‌دهد.' +
        '<br/>' +
        'در این پژوهش مدل‌های مختلف Gemini و GPT در دو رویکرد مهندسی پرامپت و ریزتنظیم، بر روی مجموعه‌داده BDD-X ارزیابی شدند. نتایج نشان داد نسخه ریزتنظیم‌شده Gemini 2.5 Pro نسبت به مدل پایه عملکرد بهتری داشته و حدود ۲۸ درصد بهبود در معیار METEOR و ۱۱ درصد بهبود در معیار CIDEr-D به دست آورده است.',
      keywords: {
        title: 'کلمات کلیدی',
        tags: [
          { name: 'مدل های زبانی بزرگ' },
          { name: 'هوش مصنوعی توضیح‌پذیر' },
          { name: 'وسایل نقلیه خودران' },
          { name: 'مهندسی پرامپت' },
          { name: 'Fine-tuning' },
          { name: 'مدل‌های بینایی-زبان' },
        ],
      },
      links: [
        { name: 'Paper', icon: 'fa6-solid:file-lines', url: '/files/IKT_paper.pdf' },
        { name: 'Slides', icon: 'fa6-solid:display', url: '/files/IKT_slides.pdf' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ResearchSection>;

export default researchSectionDataFA;
