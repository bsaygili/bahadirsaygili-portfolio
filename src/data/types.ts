export type Article = {
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  slug: string;
  sections: Array<{ heading: string; paragraphs: string[]; code?: string }>;
};

export type Application = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  playstoreUrl?: string;
  appStoreUrl?: string;
};
