import type { ResearchSection } from '@/types/sections/research-section.types';
import type { ReadonlyDeep } from 'type-fest';

const researchSectionData = {
  config: {
    title: 'Researches',
    slug: 'researches',
    icon: 'fa6-solid:microscope',
    visible: true,
  },
  researches: [
    {
      title: 'M.Sc. Thesis',
      researchTitle: 'Design and Implementation of an AI Explanation System for Self-Driving Vehicle Decisions',
      dates: [new Date('2024-01'), new Date('2025-10')],
      details: [
        { label: 'Institution', value: 'Shahid Chamran University of Ahvaz' },
        { label: 'Degree', value: 'M.Sc. in Artificial Intelligence' },
        { label: 'Status', value: 'Completed' },
      ],
      description:
        'Designed and implemented a hybrid Explainable AI (XAI) framework for autonomous driving by combining the ADAPT decision-making model with Large Language Models (Gemini and GPT families). The system generates concise, human-understandable explanations using driving decisions, visual attention maps, and prompt engineering techniques.' +
        '<br/>' +
        'The research investigated prompt engineering, fine-tuning, multimodal reasoning, and visual grounding using the BDD-X dataset. Experimental results demonstrated significant improvements over the baseline model, achieving up to 11% higher CIDEr-D and 28% higher METEOR scores while producing explanations that were both more fluent and better aligned with the actual driving decisions.',
      keywords: {
        title: 'Keywords',
        tags: [
          { name: 'Explainable AI (XAI)' },
          { name: 'Large Language Models' },
          { name: 'Autonomous Driving' },
          { name: 'Computer Vision' },
          { name: 'Prompt Engineering' },
          { name: 'Fine-tuning' },
          { name: 'Multimodal AI' },
        ],
      },
      links: [
        { name: 'Paper', icon: 'fa6-solid:file-lines', url: '/files/thesis.pdf' },
        { name: 'Slides', icon: 'fa6-solid:display', url: '/files/thesis_slides.pdf' },
      ],
    },
    {
      title: 'Conference Paper',
      researchTitle: 'An LLM-Based Approach for Clarifying the Decisions of Vision Models in Autonomous Vehicles',
      dates: [new Date('2025-09'), new Date('2025-11')],
      details: [
        {
          label: 'Conference',
          value: '2025 16th International Conference on Information and Knowledge Technology (IKT) (IEEE)',
        },
      ],
      description:
        'Proposed a hybrid framework that combines the ADAPT vision model with Large Language Models to generate trustworthy natural-language explanations for autonomous driving decisions. The approach bridges visual attention maps and LLM reasoning, improving both explainability and user interpretability in safety-critical systems.' +
        '<br/>' +
        'The study evaluated multiple Gemini and GPT models, comparing prompt engineering and fine-tuning strategies using the BDD-X benchmark. Results showed that the fine-tuned Gemini 2.5 Pro model substantially outperformed the baseline across semantic evaluation metrics, with improvements of approximately 28% in METEOR and 11% in CIDEr-D.',
      keywords: {
        title: 'Keywords',
        tags: [
          { name: 'LLMs' },
          { name: 'Explainable AI' },
          { name: 'Autonomous Vehicles' },
          { name: 'Prompt Engineering' },
          { name: 'Fine-tuning' },
          { name: 'Vision-Language Models' },
        ],
      },
      links: [
        { name: 'Paper', icon: 'fa6-solid:file-lines', url: '/files/IKT_paper.pdf' },
        { name: 'Slides', icon: 'fa6-solid:display', url: '/files/IKT_slides.pdf' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ResearchSection>;

export default researchSectionData;
