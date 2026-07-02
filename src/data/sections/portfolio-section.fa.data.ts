import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { download, github, website } from '../helpers/links';
import {
  angular,
  bale,
  ble,
  cloudflareWorkers,
  dart,
  django,
  docker,
  firebase,
  flutter,
  googleMaps,
  grafana,
  influxdb,
  llmApplications,
  mqtt,
  mysql,
  n8n,
  nginx,
  prometheus,
  rag,
  restApi,
  roboflow,
  sqlite,
} from '../helpers/skills';

const portfolioSectionDataFA = {
  config: {
    title: 'پروژه‌ها',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'تصاویر',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'فارمتک',
      image: import('@/assets/portfolio/farmtech-logo.png'),
      dates: [new Date('2021-06'), null],
      details: [
        { label: 'حجم تیم', value: '۸ نفر' },
        {
          label: 'نقش',
          value: ['توسعه دهنده فول استک (2021–2024)', 'توسعه دهنده ارشد بک اند و هوش مصنوعی (2024–اکنون)'],
        },
        { label: 'شرکت', value: 'توسعه فناوری ستاره سهیل' },
        { label: 'دسته‌بندی', value: ['اینترنت اشیا', 'هوش مصنوعی', 'کشاورزی هوشمند'] },
      ],
      pdfDetails: [{ label: 'Website', value: 'https://app.farmtech.ir/', url: '#' }],
      screenshots: [
        { src: import('@/assets/portfolio/farmtech_screenhsot_1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_3.jpg'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_4.jpg'), alt: 'Fourth screenshot' },
      ],
      description:
        'طراحی و توسعه یک پلتفرم عملیاتی اینترنت اشیا برای پایش و اتوماسیون گلخانه. فعالیت خود را با توسعه همزمان رابط کاربری Angular و بک‌اند Django آغاز کرده و در ادامه مسئولیت طراحی معماری بک‌اند و توسعه قابلیت‌های مبتنی بر هوش مصنوعی را بر عهده گرفتم.' +
        '<br />' +
        'طراحی پروتکل‌های ارتباطی مبتنی بر MQTT، سامانه همگام‌سازی داده در شرایط آفلاین، مکانیزم‌های بازیابی پس از خطا و سامانه هشدار چندکاناله با هدف حفظ پایداری عملکرد در شرایط قطعی اینترنت و برق. همچنین توسعه قابلیت‌هایی نظیر موتور قوانین، منطق فازی قابل پیکربندی، زمان‌بندی‌های تکرارشونده و رابط‌های کاربری مبتنی بر نقش.' +
        '<br />' +
        'پیاده‌سازی قابلیت‌های هوش مصنوعی شامل RAG، دستیار هوشمند مدیریت گلخانه، تشخیص بیماری گیاه با ترکیب Roboflow و مدل‌های زبانی بزرگ، ارائه پیشنهادهای هوشمند و سامانه پشتیبانی مبتنی بر هوش مصنوعی. همچنین مدیریت زیرساخت عملیاتی شامل Docker، Nginx، Prometheus، Grafana، GitLab و بهینه‌سازی MySQL و InfluxDB برای مدیریت حجم بالای داده‌های حسگرها.',
      tagsList: {
        title: 'تکنولوژی‌ها',
        tags: [
          django(),
          angular(),
          mqtt(),
          docker(),
          nginx(),
          mysql(),
          influxdb(),
          prometheus(),
          grafana(),
          llmApplications(),
          rag(),
          roboflow(),
          cloudflareWorkers(),
          bale(),
          n8n(),
        ],
      },
      links: [website({ url: 'https://app.farmtech.ir/' })],
    },
    {
      name: 'لایتنر فارسی',
      image: import('@/assets/portfolio/english_leitner_box.png'),
      dates: [new Date('2020-08'), new Date('2020-10')],
      details: [
        { label: 'حجم تیم', value: 'یک نفر' },
        { label: 'نقش', value: ['توسعه دهنده فلاتر'] },
        { label: 'دسته‌بندی', value: ['اپلیکیشن موبایل', 'آموزش'] },
      ],
      pdfDetails: [
        { label: 'دانلود', value: 'https://cafebazaar.ir/app/com.omidmsl.english_leitner_box', url: '#' },
        { label: 'Repository', value: 'https://github.com/OmidMsl/english_leitner_box', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/leitner_screenshot_1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/leitner_screenshot_2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/leitner_screenshot_3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/leitner_screenshot_4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/leitner_screenshot_5.png'), alt: 'Fifth screenshot' },
        { src: import('@/assets/portfolio/leitner_screenshot_6.png'), alt: 'Sixth screenshot' },
      ],
      description:
        'توسعه نرم‌افزار فلش‌کارت فارسی مبتنی بر روش یادگیری لایتنر با هدف افزایش ماندگاری واژگان از طریق مرور با فواصل زمانی. طراحی تجربه کاربری برای ایجاد، دسته‌بندی و مرور کارت‌ها همراه با نمایش آمار یادگیری و میزان پیشرفت کاربر.',
      tagsList: {
        title: 'تکنولوژی‌ها',
        tags: [flutter(), dart(), sqlite()],
      },
      links: [
        download({ url: 'https://cafebazaar.ir/app/com.omidmsl.english_leitner_box' }),
        github({ url: 'https://github.com/OmidMsl/english_leitner_box' }),
      ],
    },
    {
      name: 'ایرانگرد',
      image: import('@/assets/portfolio/flutter.png'),
      dates: [new Date('2021-08'), new Date('2021-10')],
      details: [
        { label: 'حجم تیم', value: 'یک نفر' },
        { label: 'نقش', value: ['توسعه دهنده فلاتر'] },
        { label: 'دسته‌بندی', value: ['گردشگری', 'اپلیکیشن موبایل'] },
      ],
      pdfDetails: [{ label: 'Repository', value: 'https://github.com/OmidMsl/iran_gard', url: '#' }],
      screenshots: [
        { src: import('@/assets/portfolio/irangard_screenshot_1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_5.png'), alt: 'Fifth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_6.png'), alt: 'Sixth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_7.png'), alt: 'Seventh screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_8.png'), alt: 'Eighth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_9.png'), alt: 'Ninth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_10.png'), alt: 'Tenth screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_11.png'), alt: 'Eleventh screenshot' },
        { src: import('@/assets/portfolio/irangard_screenshot_12.png'), alt: 'Twelfth screenshot' },
      ],
      description:
        'توسعه نرم‌افزار گردشگری با هدف معرفی جاذبه‌های طبیعی، تاریخی و گردشگری ایران. پیاده‌سازی قابلیت‌های مبتنی بر نقشه، خدمات مکان‌محور و رابط کاربری واکنش‌گرا برای دسترسی آسان کاربران به مکان‌های دیدنی اطراف.',
      tagsList: {
        title: 'تکنولوژی‌ها',
        tags: [flutter(), googleMaps(), firebase()],
      },
      links: [github({ url: 'https://github.com/OmidMsl/iran_gard' })],
    },
    {
      name: 'SPEC',
      image: import('@/assets/portfolio/spec.png'),
      dates: [new Date('2020-10'), new Date('2020-11')],
      details: [
        { label: 'حجم تیم', value: '۳ نفر' },
        { label: 'نقش', value: 'توسعه دهنده فلاتر' },
        { label: 'شرکت', value: 'SPEC' },
        { label: 'دسته‌بندی', value: ['اپلیکیشن موبایل', 'صنعتی'] },
      ],
      pdfDetails: [],
      screenshots: [
        { src: import('@/assets/portfolio/spec_screenshot_1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_5.png'), alt: 'Fifth screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_6.png'), alt: 'Sixth screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_7.png'), alt: 'Seventh screenshot' },
        { src: import('@/assets/portfolio/spec_screenshot_8.png'), alt: 'Eighth screenshot' },
      ],
      description:
        'توسعه نرم‌افزار Flutter جهت کنترل سیستم تهویه مطبوع صنعتی از طریق Bluetooth Low Energy (BLE). طراحی رابط کاربری و پیاده‌سازی فرآیند اتصال به کنترلر، ارسال فرمان و مدیریت تنظیمات دستگاه از طریق تلفن همراه.',
      tagsList: {
        title: 'تکنولوژی‌ها',
        tags: [flutter(), dart(), ble()],
      },
      links: [],
    },
    {
      name: 'MA App',
      image: import('@/assets/portfolio/ma_app.png'),
      dates: [new Date('2021-02'), new Date('2021-06')],
      details: [
        { label: 'حجم تیم', value: '۲ نفر' },
        { label: 'نقش', value: ['توسعه دهنده فلاتر'] },
        { label: 'دسته‌بندی', value: ['اپلیکیشن موبایل', 'تجارت الکترونیک'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/ma_screenshot_1.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_2.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_3.png'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_4.png'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_5.png'), alt: 'Fifth screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_6.png'), alt: 'Sixth screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_7.png'), alt: 'Seventh screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_8.png'), alt: 'Eighth screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_9.png'), alt: 'Ninth screenshot' },
        { src: import('@/assets/portfolio/ma_screenshot_10.png'), alt: 'Tenth screenshot' },
      ],
      description:
        'توسعه یک نرم‌افزار مالتی پلتفرم Flutter برای بازار آنلاین کاشی، سرامیک و مصالح ساختمانی که فروشندگان آن تولیدکنندگان محصولات بودند. پیاده‌سازی فرآیندهای مشاهده محصولات، ثبت سفارش و ارتباط با سرویس‌های بک‌اند با هدف ارائه تجربه‌ای روان برای مشتریان و پنل مدیریتی مناسب برای فروشندگان.',
      tagsList: {
        title: 'تکنولوژی‌ها',
        tags: [flutter(), firebase(), googleMaps(), restApi()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionDataFA;
