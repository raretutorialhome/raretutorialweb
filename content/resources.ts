import { images } from "./assets";

export const resourcesBanner = {
  heading: "Learning Beyond the Classroom",
  intro: "Explore resources that help students, parents and lifelong learners continue growing.",
  image: images.resourcesBanner,
};

export const resourcesWelcome = {
  heading: "Welcome to the RARE Resource Centre",
  text: "Learning is a journey that continues beyond the classroom. At RARE, we believe that curiosity, reading and regular practice help students become confident, independent learners. Our Resource Centre brings together articles, study tips, educational videos and learning guides to support students and parents throughout that journey.",
};

export type ResourceArticle = {
  slug: string;
  title: string;
  category: "Study Tips" | "Grammar & Writing" | "Reading Recommendations" | "Parent Guides";
  summary: string;
  body: string[];
  image: (typeof images)[keyof typeof images];
};

export const resourceCategories = [
  { title: "Study Tips", icon: "pencil", desc: "Simple strategies to improve learning, revision and examination preparation." },
  { title: "Grammar & Writing", icon: "book-open", desc: "Articles that help students strengthen their English." },
  { title: "Reading Recommendations", icon: "book", desc: "Books that encourage better language skills and a lifelong love of reading." },
  { title: "Parent Guides", icon: "users", desc: "Helpful articles for parents supporting their children's education." },
  { title: "Educational Videos", icon: "video", desc: "Learning videos created by RARE." },
  { title: "Downloads", icon: "download", desc: "Worksheets, revision sheets and useful learning materials." },
];

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "study-smarter",
    title: "Study Smarter, Not Harder",
    category: "Study Tips",
    summary: "Learning begins with understanding, not repetition. A few honest habits make revision far more effective than long, unfocused hours.",
    body: [
      "Many students believe that studying for longer hours automatically leads to better results. In reality, understanding a concept clearly and revising it at the right intervals is far more effective than repeating the same page for hours.",
      "Start by understanding a topic before trying to memorise it. Break your revision into short, focused sessions, and test yourself instead of simply re-reading your notes. A short break after each session helps your mind absorb what you have just learned.",
      "Planning your time honestly — including time for difficult subjects, not just the ones you enjoy — makes a noticeable difference before examinations.",
    ],
    image: images.resourceIndependentStudy,
  },
  {
    slug: "better-reader",
    title: "Become a Better Reader",
    category: "Reading Recommendations",
    summary: "Reading every day improves vocabulary, writing, imagination and confidence.",
    body: [
      "Reading is one of the simplest and most effective habits a student can build. It naturally improves vocabulary, sentence structure and comprehension — skills that help in every subject, not only in English or Bengali.",
      "The best way to build a reading habit is to start with books that genuinely interest you. Understanding matters more than speed. Talking about what you have read, even briefly, helps ideas stay with you for longer.",
      "A little reading every day, over time, builds a stronger and more confident learner than occasional long reading sessions.",
    ],
    image: images.resourceReading,
  },
  {
    slug: "write-better-answers",
    title: "Write Better Answers",
    category: "Grammar & Writing",
    summary: "Good answers are not always long answers. Clear organisation matters more than length.",
    body: [
      "Examiners look for clarity, not length. A well-organised answer that directly addresses the question usually scores better than a long answer that wanders.",
      "Before writing, take a moment to understand exactly what the question is asking. Organise your points in a logical order, and use clear, simple language rather than trying to sound complicated.",
      "Reviewing your answer once you have written it — checking that it actually answers the question — is a habit that improves results more than almost anything else.",
    ],
    image: images.resourceNotebook,
  },
  {
    slug: "tips-for-parents",
    title: "Tips for Parents",
    category: "Parent Guides",
    summary: "Parents do not need to become teachers. Simple support at home can make a meaningful difference.",
    body: [
      "Parents play an important role in every child's learning journey, though this role does not require becoming a teacher at home.",
      "Simple support — encouraging reading, talking about what your child has learnt, encouraging curiosity and providing a quiet place to study — can make a meaningful difference.",
      "Encouragement tends to work better than pressure. Recognising sincere effort and celebrating progress, however small, reminds children that learning is a journey rather than a race.",
    ],
    image: images.resourceParentAndChild,
  },
];

export const readingChangesLives = {
  heading: "Reading Changes Lives",
  text: "Reading has always been an important part of life at RARE. Books help students improve vocabulary, grammar, imagination and confidence while encouraging independent thinking. We hope every learner develops the habit of reading — not just for examinations, but for life.",
  cta: "Explore Reading Recommendations",
};

export const resourcesClosing = {
  heading: "Keep Learning",
  text: "Every new idea begins with curiosity. We invite you to continue learning with us through our articles, videos and educational resources.",
};
