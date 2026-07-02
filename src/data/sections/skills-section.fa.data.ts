import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  angular,
  authentication,
  bale,
  bash,
  cloudflareWorkers,
  django,
  djangorestfreamwork,
  docker,
  finetuning,
  firebase,
  flutter,
  gitlab,
  googleColab,
  grafana,
  html,
  huggingFace,
  influxdb,
  linux,
  llmApplications,
  modelEvaluation,
  mqtt,
  mysql,
  n8n,
  nginx,
  prometheus,
  promptEngineering,
  python,
  rag,
  restApi,
  roboflow,
  sqlite,
  telegram,
  typescript,
} from '../helpers/skills';

const skillsSectionDataFA = {
  config: {
    title: 'مهارت‌ها',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'بک‌اند',
      skills: [
        python({
          level: 5,
        }),
        django({
          level: 5,
        }),
        djangorestfreamwork({
          level: 5,
        }),
        restApi({ level: 4 }),
        mqtt({
          level: 4,
          description:
            'طراحی پروتکل‌های ارتباطی اختصاصی مبتنی بر MQTT برای دستگاه‌های اینترنت اشیا، همراه با مکانیزم‌های تحمل خطا، بازیابی پس از قطعی و ارتباط پایدار در شرایط ناپایدار شبکه.',
        }),
        authentication({
          level: 4,
          description:
            'طراحی فرآیندهای احراز هویت امن و در عین حال ساده با استفاده از Django Knox، با تمرکز بر تجربه کاربری مناسب برای کاربران غیرمتخصص، در کنار مدیریت امن توکن‌ها.',
        }),
      ],
    },
    {
      title: 'هوش مصنوعی و مدل های زبانی',
      skills: [
        llmApplications({
          level: 5,
        }),
        rag({
          level: 4,
          description:
            'توسعه سامانه‌های RAG برای دستیارهای هوشمند، پشتیبانی از نرم‌افزار و ارائه پیشنهادهای تخصصی بر اساس اطلاعات کاربران و دانش حوزه گلخانه.',
        }),
        promptEngineering({
          level: 5,
          description:
            'طراحی پرامپت‌های عملیاتی برای دستیارهای هوشمند، سامانه‌های پیشنهاددهنده و جریان‌های استدلال، با تمرکز بر دقت، پایداری و خروجی‌های ساختاریافته در مدل‌های زبانی مختلف.',
        }),
        finetuning({
          level: 5,
          description:
            'انجام fine-tuning مدل‌های زبانی و بینایی در پروژه‌های پژوهشی، شامل آماده‌سازی داده‌ها، فرآیند آموزش و ارزیابی عملکرد مدل‌ها.',
        }),
        modelEvaluation({
          level: 3,
          description:
            'ارزیابی عملکرد مدل‌های زبانی با استفاده از بنچمارک‌ها و معیارهای تخصصی، به‌منظور مقایسه مدل‌ها، پرامپت‌ها و نسخه‌های ریزتنظیم‌شده در کاربردهای واقعی.',
        }),
        huggingFace({ level: 3 }),
        googleColab({ level: 5 }),
      ],
    },
    {
      title: 'فرانت‌اند',
      skills: [
        flutter({
          level: 4,
        }),
        angular({
          level: 3,
        }),
        typescript({
          level: 2,
        }),
        html({ level: 3 }),
      ],
    },
    {
      title: 'DevOps و زیرساخت',
      skills: [
        docker({
          level: 5,
          description:
            'کانتینرسازی سرویس‌های بک‌اند و مدیریت استقرار عملیاتی با استفاده از Docker و Docker Compose، با هدف ساده‌سازی فرآیند انتشار و افزایش پایداری استقرار.',
        }),
        nginx({
          level: 4,
        }),
        gitlab({
          level: 4,
        }),
        linux({ level: 4 }),
        bash({ level: 4 }),
        prometheus({
          level: 4,
          description:
            'طراحی داشبوردهای پایش و سامانه‌های هشدار برای سرویس‌های بک‌اند و زیرساخت اینترنت اشیا، با هدف شناسایی پیشگیرانه خطاها و مشکلات عملکردی.',
        }),
        grafana({ level: 4 }),
        cloudflareWorkers({
          level: 3,
          description:
            'پیاده‌سازی Cloudflare Workers برای رفع محدودیت‌های دسترسی منطقه‌ای و افزایش پایداری سرویس‌ها در زمان عدم دسترسی به سرویس‌های شخص ثالث.',
        }),
      ],
    },
    {
      title: 'پایگاه‌های داده',
      skills: [
        mysql({
          level: 5,
        }),
        influxdb({
          level: 4,
          description:
            'بهینه‌سازی ساختار پایگاه داده سری زمانی برای داده‌های حجیم حسگرهای اینترنت اشیا، با هدف ذخیره‌سازی، جستجو و تحلیل کارآمد داده‌های پایشی.',
        }),
        firebase({ level: 2 }),
        sqlite({ level: 2 }),
      ],
    },
    {
      title: 'سایر',
      skills: [
        n8n({
          level: 3,
          description:
            'طراحی گردش‌کارهای بدون کدنویسی (No-Code) برای یکپارچه‌سازی سامانه‌ها، زمان‌بندی وظایف و هماهنگ‌سازی سرویس‌های مختلف.',
        }),
        roboflow({ level: 3 }),
        telegram({ level: 2 }),
        bale({ level: 2 }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionDataFA;
