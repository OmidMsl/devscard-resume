import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { instagram, linkedin, website } from '../helpers/links';
import {
  docker,
  django,
  linux,
  firebase,
  angular,
  mysql,
  restApi,
  flutter,
  dart,
  googleMaps,
  ble,
  djangorestfreamwork,
  mqtt,
  llmApplications,
  rag,
  promptEngineering,
  modelEvaluation,
  huggingFace,
  nginx,
  gitlab,
  cicd,
  prometheus,
  grafana,
  cloudflareWorkers,
  influxdb,
} from '../helpers/skills';

const experienceSectionDataFA = {
  config: {
    title: 'سابقه کاری',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'توسعه دهنده (Senior) بک‌اند / هوش مصنوعی',
      company: 'شرکت توسعه فناوری ستاره سهیل',
      image: import('@/assets/logos/ssoheil-logo.png'),
      dates: [new Date('2024-01'), null],
      description: `
      ***مسئولیت‌ها:***
        - طراحی و توسعه معماری بک‌اند یک پلتفرم مقیاس‌پذیر مدیریت گلخانه مبتنی بر **اینترنت اشیا** با استفاده از Django.
        - طراحی سامانه ارتباطی پایدار برای صدها دستگاه IoT مبتنی بر **MQTT** شامل پروتکل اختصاصی، مکانیزم‌های **Fail-safe** و **بازیابی پس از قطعی**.
         - توسعه زیرساخت **پایش** و **هشدار** با دسترس‌پذیری بالا با استفاده از **Prometheus**، **Grafana** و سرویس‌های اختصاصی پایش سلامت سامانه.
        - توسعه قابلیت‌های **مبتنی بر هوش مصنوعی** شامل **RAG**، **یکپارچه‌سازی مدل‌های زبانی بزرگ**، **مهندسی پرامپت**، **fine-tuning** مدل‌ها و دستیار هوشمند مدیریت گلخانه.
        - یکپارچه‌سازی سرویس‌های خارجی از جمله تلگرام، پیام‌رسان بله، Roboflow، سرویس‌های هواشناسی، Google Apps Script و Cloudflare Workers به‌منظور افزایش **پایداری** سامانه در شرایط ناپایداری اینترنت.
        - مدیریت زیرساخت عملیاتی شامل **Docker، Nginx، GitLab، Jira**، **اسکریپت‌های Bash**، سرویس‌های FTP و **فرآیندهای استقرار**.
        - بهینه‌سازی معماری ذخیره‌سازی داده با استفاده از **MySQL** و **InfluxDB** برای داده‌های تراکنشی و داده‌های سری زمانی حسگرها.
        &nbsp;
      `,
      tagsList: {
        title: 'تکنولوژی‌ها',
        groups: [
          {
            subtitle: 'بک‌اند',
            tags: [django(), djangorestfreamwork(), mqtt()],
          },
          {
            subtitle: 'هوش مصنوعی',
            tags: [llmApplications(), rag(), promptEngineering(), modelEvaluation(), huggingFace()],
          },
          {
            subtitle: 'DevOps',
            tags: [docker(), nginx(), gitlab(), cicd(), prometheus(), grafana(), cloudflareWorkers()],
          },
          {
            subtitle: 'پایگاه‌های داده',
            tags: [mysql(), influxdb()],
          },
        ],
      },
      links: [
        website({ url: 'https://farmtech.ir/' }),
        website({ url: 'https://ssoheil.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/ssoheil/' }),
        instagram({ url: 'https://www.instagram.com/ssoheilco/' }),
      ],
    },
    {
      role: 'Mid-Level Full Stack Developer',
      company: 'شرکت توسعه فناوری ستاره سهیل',
      image: import('@/assets/logos/ssoheil-logo.png'),
      dates: [new Date('2021-06'), new Date('2024-01')],
      description: `
        - توسعه همزمان رابط کاربری (Angular) و بک‌اند (Django) برای سامانه صنعتی پایش و مدیریت گلخانه مبتنی بر اینترنت اشیا.
        - کانتینرسازی سرویس‌ها با Docker و استقرار آن‌ها روی سرورهای لینوکسی.
        - طراحی REST API و داشبوردهای مدیریتی برای پایش حسگرها و کنترل تجهیزات گلخانه.
        - همکاری نزدیک با تیم‌های سخت‌افزار و سیستم‌های نهفته جهت یکپارچه‌سازی تجهیزات IoT.
      `,
      tagsList: {
        title: 'تکنولوژی‌ها',
        groups: [
          {
            subtitle: 'بک‌اند',
            tags: [django(), mysql(), restApi(), mqtt()],
          },
          {
            subtitle: 'DevOps و فرانت‌اند',
            tags: [angular(), docker(), linux()],
          },
        ],
      },
      links: [
        website({ url: 'https://farmtech.ir/' }),
        website({ url: 'https://ssoheil.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/ssoheil/' }),
        instagram({ url: 'https://www.instagram.com/ssoheilco/' }),
      ],
    },
    {
      role: 'توسعه‌دهنده (Mid-Level) Flutter (فریلنسر)',
      company: 'پارسکدرز، پونیشا',
      image: import('@/assets/logos/parscoders-logo.png'),
      dates: [new Date('2020-03'), new Date('2021-12')],
      description: `
        - توسعه چندین نرم‌افزار Flutter برای مشتریان در حوزه‌های مختلف.
        - پیاده‌سازی سرویس‌های Firebase شامل احراز هویت، اعلان‌های ابری و Cloud Firestore.
        - توسعه قابلیت‌های مبتنی بر Google Maps، موقعیت‌یابی و رهگیری بلادرنگ.
        - پیاده‌سازی ارتباط Bluetooth Low Energy (BLE) جهت اتصال و تبادل داده با تجهیزات سخت‌افزاری.
        - اجرای کامل پروژه‌ها از مرحله طراحی تا استقرار و انتشار، همراه با ارتباط مستقیم با کارفرمایان.
      `,
      tagsList: {
        title: 'تکنولوژی‌ها',
        groups: [
          {
            subtitle: 'موبایل',
            tags: [flutter(), dart()],
          },
          {
            subtitle: 'سرویس‌ها',
            tags: [firebase(), googleMaps(), ble()],
          },
        ],
      },
      links: [website({ url: 'https://pc0.ir/rsm/96994' }), website({ url: 'https://ponisha.ir/' })],
    },
    {
      role: 'توسعه‌دهنده اندروید (جونیور) (فریلنسر)',
      company: 'پارسکدرز، پونیشا',
      image: import('@/assets/logos/parscoders-logo.png'),
      dates: [new Date('2018-10'), new Date('2020-03')],
      description: `
        - توسعه نرم‌افزارهای اندرویدی مبتنی بر Java با تمرکز بر قابلیت‌های واقعیت افزوده (Augmented Reality).
        - کسب تجربه در معماری نرم‌افزارهای اندرویدی و توسعه اپلیکیشن‌های موبایل.
      `,
      tagsList: {
        title: '',
        groups: [],
      },
      links: [website({ url: 'https://pc0.ir/rsm/96994' }), website({ url: 'https://ponisha.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionDataFA;
