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
  rag, restApi,
  roboflow,
  sqlite,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'FarmTech',
      image: import('@/assets/portfolio/farmtech-logo.png'),
      dates: [new Date('2021-06'), null],
      details: [
        { label: 'Team size', value: '8 people' },
        {
          label: 'My role',
          value: ['Full Stack Developer (2021–2024)', 'Senior Backend & AI Engineer (2024–Present)'],
        },
        { label: 'Company', value: 'Setare Soheil Co.' },
        { label: 'Category', value: ['IoT', 'AI', 'Smart Agriculture'] },
      ],
      pdfDetails: [{ label: 'Website', value: 'https://app.farmtech.ir/', url: '#' }],
      screenshots: [
        { src: import('@/assets/portfolio/farmtech_screenhsot_1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_3.jpg'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/farmtech_screenhsot_4.jpg'), alt: 'Fourth screenshot' },
      ],
      description:
        'Designed and developed a production IoT platform for greenhouse monitoring and automation. Started as a full-stack developer building the Angular frontend and Django backend, then transitioned to leading backend architecture and AI-powered features.\n' +
        '<br />' +
        'Designed reliable MQTT communication protocols, offline data synchronization, fail-safe recovery mechanisms, and multi-channel alerting to ensure stable operation despite unreliable internet and power conditions. Built advanced automation features including rule-based controllers, configurable fuzzy logic, recurring scheduling, and role-based interfaces tailored for users with different technical expertise.\n' +
        '<br />' +
        'Integrated modern AI capabilities including Retrieval-Augmented Generation (RAG), greenhouse-aware AI assistants, crop disease detection using Roboflow and LLMs, contextual recommendations, and intelligent application support. Managed production infrastructure using Docker, Nginx, Prometheus, Grafana, GitLab, Bash automation, and optimized MySQL and InfluxDB for large-scale sensor and operational data.',
      tagsList: {
        title: 'Technologies',
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
      name: 'Persian Leitner',
      image: import('@/assets/portfolio/english_leitner_box.png'),
      dates: [new Date('2020-08'), new Date('2020-10')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Flutter Developer'] },
        { label: 'Category', value: ['Mobile Application', 'Education'] },
      ],
      pdfDetails: [
        { label: 'Download', value: 'https://cafebazaar.ir/app/com.omidmsl.english_leitner_box', url: '#' },
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
        'Developed a Persian flashcard application based on the Leitner learning method to improve vocabulary retention through spaced repetition. Designed an intuitive user experience for creating, organizing, and reviewing study cards while providing learning statistics and progress tracking.',
      tagsList: {
        title: 'Technologies',
        tags: [flutter(), dart(), sqlite()],
      },
      links: [
        download({ url: 'https://cafebazaar.ir/app/com.omidmsl.english_leitner_box' }),
        github({ url: 'https://github.com/OmidMsl/english_leitner_box' }),
      ],
    },
    {
      name: 'IranGard',
      image: import('@/assets/portfolio/flutter.png'),
      dates: [new Date('2021-08'), new Date('2021-10')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Flutter Developer'] },
        { label: 'Category', value: ['Tourism', 'Mobile Application'] },
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
        'Developed a tourism application introducing attractions, historical places, and travel destinations across Iran. Implemented interactive maps, location-based features, and responsive mobile interfaces to provide users with an easy way to discover nearby places of interest.',
      tagsList: {
        title: 'Technologies',
        tags: [flutter(), googleMaps(), firebase()],
      },
      links: [github({ url: 'https://github.com/OmidMsl/iran_gard' })],
    },
    {
      name: 'SPEC',
      image: import('@/assets/portfolio/spec.png'),
      dates: [new Date('2020-10'), new Date('2020-11')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: 'Flutter Developer' },
        { label: 'Company', value: 'SPEC' },
        { label: 'Category', value: ['Mobile Application', 'Industrial'] },
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
        'Developed a Flutter mobile application for controlling an industrial air conditioning system through Bluetooth Low Energy (BLE). Built the user interface and device communication flow to allow users to connect to the controller, send commands, and manage AC settings directly from their mobile devices.',
      tagsList: {
        title: 'Technologies',
        tags: [flutter(), dart(), ble()],
      },
      links: [],
    },
    {
      name: 'MA App',
      image: import('@/assets/portfolio/ma_app.png'),
      dates: [new Date('2021-02'), new Date('2021-06')],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Flutter Developer'] },
        { label: 'Category', value: ['Mobile Application', 'E-commerce'] },
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
        'Developed a cross-platform Flutter application for an online marketplace focused on ceramic tiles and related building materials, where sellers were also the producers. Implemented product browsing, ordering workflows, and backend integration to provide a smooth shopping experience for customers and a practical management interface for vendors.',
      tagsList: {
        title: 'Technologies',
        tags: [flutter(), firebase(), googleMaps(), restApi()],
      },
      links: [github({ url: 'https://github.com/OmidMsl/iran_gard' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
