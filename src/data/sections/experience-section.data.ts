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

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Backend / AI Engineer',
      company: 'Setare Soheil Co.',
      image: import('@/assets/logos/ssoheil-logo.png'),
      dates: [new Date('2024-01'), null],
      description: `
      ***Responsibilities:***
        - Designed and developed the backend architecture for a large-scale **IoT** greenhouse management platform using Django.
        - Designed reliable communication systems for hundreds of IoT devices using **MQTT**, including custom messaging protocols, **fail-safe** mechanisms, and offline **recovery strategies**.
        - Built highly available **monitoring** and **alerting** infrastructure using **Prometheus**, **Grafana** and custom health monitoring services.
        - Developed **AI-powered features** including **Retrieval-Augmented Generation (RAG)**, **LLM integrations**, **prompt engineering**, **fine-tuning** pipelines, and intelligent greenhouse assistant capabilities.
        - Integrated numerous external services including Telegram, Bale Messenger, Roboflow, weather providers, Google Apps Script and Cloudflare Workers to improve **reliability under unstable internet** conditions.
        - Managed production infrastructure including **Docker, Nginx, GitLab, Jira, Bash automation**, FTP services and **deployment pipelines**.
        - Optimized storage architecture using **MySQL** and **InfluxDB** for transactional and time-series sensor data.
        &nbsp;
      `,
      tagsList: {
        title: 'Technologies',
        groups: [
          {
            subtitle: 'Backend',
            tags: [django(), djangorestfreamwork(), mqtt()],
          },
          {
            subtitle: 'AI',
            tags: [llmApplications(), rag(), promptEngineering(), modelEvaluation(), huggingFace()],
          },
          {
            subtitle: 'DevOps',
            tags: [docker(), nginx(), gitlab(), cicd(), prometheus(), grafana(), cloudflareWorkers()],
          },
          {
            subtitle: 'Databases',
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
      company: 'Setare Soheil Co.',
      image: import('@/assets/logos/ssoheil-logo.png'),
      dates: [new Date('2021-06'), new Date('2024-01')],
      description: `
        - Developed both frontend (Angular) and backend (Django) for an industrial IoT greenhouse monitoring platform.
        - Containerized services using Docker and deployed production environments on Linux servers.
        - Designed REST APIs and frontend dashboards for monitoring sensors and greenhouse controllers.
        - Collaborated closely with embedded and hardware teams for IoT integration.
      `,
      tagsList: {
        title: 'Technologies',
        groups: [
          {
            subtitle: 'Backend',
            tags: [django(), mysql(), restApi()],
          },
          {
            subtitle: 'Frontend & DevOps',
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
      role: 'Mid-Level Flutter Developer (Freelance)',
      company: 'Parscoders, Ponisha',
      image: import('@/assets/logos/parscoders-logo.png'),
      dates: [new Date('2020-03'), new Date('2021-12')],
      description: `
        - Developed multiple Flutter applications for clients across different industries.
        - Integrated Firebase services including Authentication, Cloud Messaging and Cloud Firestore.
        - Implemented Google Maps, location-based services and real-time tracking.
        - Developed Bluetooth communication modules for connecting and exchanging data with external hardware devices.
        - Delivered applications from design through deployment while working directly with clients.
      `,
      tagsList: {
        title: 'Technologies',
        groups: [
          {
            subtitle: 'Mobile',
            tags: [flutter(), dart()],
          },
          {
            subtitle: 'Services',
            tags: [firebase(), googleMaps(), ble()],
          },
        ],
      },
      links: [website({ url: 'https://pc0.ir/rsm/96994' }), website({ url: 'https://ponisha.ir/' })],
    },
    {
      role: 'Junior Android Developer (Freelance)',
      company: 'Parscoders, Ponisha',
      image: import('@/assets/logos/parscoders-logo.png'),
      dates: [new Date('2018-10'), new Date('2020-03')],
      description: `
        - Developed Android applications in Java with a focus on Augmented Reality features.
        - Built foundational experience in Android application architecture and mobile development.
      `,
      tagsList: {
        title: '',
        groups: [],
      },
      links: [website({ url: 'https://pc0.ir/rsm/96994' }), website({ url: 'https://ponisha.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
