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
  telegram,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Backend',
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
            'Designed custom MQTT communication protocols for IoT devices with reliability, fail-safe mechanisms, and offline recovery. Optimized for unstable network conditions and real-time device control.',
        }),
        authentication({
          level: 4,
          description:
            'Designed secure yet user-friendly authentication flows using Django Knox. Focused on simplifying login for non-technical users while maintaining strong security and token management.',
        }),
      ],
    },
    {
      title: 'AI & LLM',
      skills: [
        llmApplications({
          level: 5,
        }),
        rag({
          level: 4,
          description:
            'Built Retrieval-Augmented Generation (RAG) systems for contextual AI assistants, application support, and greenhouse-specific recommendations using user data and domain knowledge.',
        }),
        promptEngineering({
          level: 5,
          description:
            'Designed production prompts for AI assistants, automated recommendations, and reasoning workflows. Focused on consistency, accuracy, and structured outputs across different LLM providers.',
        }),
        finetuning({
          level: 5,
          description:
            'Worked with LLM and vision model fine-tuning during academic research, including dataset preparation, training workflows, and evaluation of model performance.',
        }),
        modelEvaluation({
          level: 3,
          description:
            'Evaluated LLM performance using benchmark-based and task-specific methods to compare prompts, models, and fine-tuned variants for real-world applications.',
        }),
        huggingFace({ level: 3 }),
        googleColab({ level: 5 }),
      ],
    },
    {
      title: 'Frontend',
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
      title: 'DevOps & Infrastructure',
      skills: [
        docker({
          level: 5,
          description:
            'Containerized backend services and managed production deployments using Docker and Docker Compose, simplifying updates and improving deployment reliability.',
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
            'Built monitoring dashboards and alerting systems for backend services and IoT infrastructure, enabling proactive detection of failures and performance issues.',
        }),
        grafana({ level: 4 }),
        cloudflareWorkers({
          level: 3,
          description:
            'Implemented Cloudflare Workers to bypass regional service restrictions and improve reliability when third-party services became inaccessible.',
        }),
      ],
    },
    {
      title: 'Databases',
      skills: [
        mysql({
          level: 5,
        }),
        influxdb({
          level: 5,
          description:
            'Used InfluxDB for high-volume time-series sensor data while leveraging MySQL for transactional data, optimizing storage and query performance.',
        }),
      ],
    },
    {
      title: 'Integrations',
      skills: [
        firebase({
          level: 4,
        }),
        telegram({
          level: 3,
        }),
        bale({
          level: 5,
        }),
        roboflow({
          level: 4,
          description:
            'Integrated Roboflow computer vision services into AI workflows for crop disease detection, combining vision models with LLM-generated recommendations.',
        }),
        n8n({
          level: 3,
          description:
            'Built automation workflows connecting AI services, messaging platforms, and backend systems to reduce manual operations and streamline business processes.',
        }),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:ir', name: 'Persian - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
