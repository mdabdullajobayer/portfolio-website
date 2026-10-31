export interface SpeakingTalk {
  id: string;
  title: string;
  subtitle: string;
  speaker: string;
  event: string;
  description: string;
  embedUrl: string;
  slidesUrl: string;
  tags: string[];
  keyTopics: {
    title: string;
    description: string;
  }[];
}

export const speakingTalks: SpeakingTalk[] = [
  {
    id: "ai-powered-ecommerce-laravel",
    title: "Building AI-Powered E-commerce with Laravel",
    subtitle: "From Semantic Search to Intelligent Chatbots",
    speaker: "MD Abdulla Jobayer",
    event: "Laravel Meetup",
    description:
      "A technical talk delivered at Laravel Meetup exploring how modern Laravel backends integrate with artificial intelligence capabilities—demonstrating semantic product search with vector representations and conversational AI assistants for e-commerce platforms.",
    embedUrl:
      "https://docs.google.com/presentation/d/1Ft-_ABnAZLEoShdqrvdjuA_AXOqo6VE_NCMN4RPBCfI/embed?start=false&loop=false&delayms=3000",
    slidesUrl:
      "https://docs.google.com/presentation/d/1Ft-_ABnAZLEoShdqrvdjuA_AXOqo6VE_NCMN4RPBCfI/edit?usp=sharing",
    tags: ["Laravel", "Laravel Meetup", "AI Integration", "Semantic Search", "Intelligent Chatbots", "E-Commerce Architecture"],
    keyTopics: [
      {
        title: "Semantic Vector Search",
        description:
          "Moving beyond basic keyword queries to contextual, intent-driven product discovery using embeddings.",
      },
      {
        title: "Conversational Chatbots",
        description:
          "Connecting intelligent chat agents to Laravel backend services and product catalog APIs.",
      },
      {
        title: "Architecture & Integration",
        description:
          "Structuring reliable, high-performance API pipelines between relational databases and AI services.",
      },
    ],
  },
];
