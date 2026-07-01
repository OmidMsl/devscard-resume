import type { DateRange, LinkButton, Section, LabelledValue, TagsList } from '../shared';

export interface ResearchItem {
  /**
   * Card title, such as "Conference Paper" or "Journal Article".
   */
  title: string;

  /**
   * The title of the research work itself.
   */
  researchTitle: string;

  /**
   * Optional date range for the research activity.
   */
  dates?: DateRange;

  /**
   * Name-value pairs with some key details about the research.
   */
  details: LabelledValue[];

  /**
   * A short overview of the research. You can use markdown syntax.
   */
  description: string;

  /**
   * Keywords related to the research.
   */
  keywords: TagsList;

  /**
   * Optional links related to the research (paper, DOI, repository, etc.).
   */
  links?: LinkButton[];
}

export interface ResearchSection extends Section {
  /**
   * List of your research items in a chronological order. Start with the most recent one.
   */
  researches: ResearchItem[];
}
