import { images, type ImageAsset } from "./assets";

export type CourseWorkItem = { title: string; text: string };

export type Course = {
  slug: string;
  name: string;
  /** Exact string this course corresponds to in the contact form's "Course
   * Interested In" dropdown (content/contact.ts's courseOptions) — kept as
   * its own field rather than assumed equal to `name`, since one course
   * ("Science" here vs "Science Group" in the dropdown) doesn't match
   * verbatim. Used to pre-select the dropdown when a visitor arrives at
   * /contact from a specific course page (see app/contact/page.tsx). */
  formOption: string;
  classes: string;
  category: "school" | "spoken-english";
  icon: string; // lucide icon name, kept as data so the icon set can change centrally
  cardBlurb: string;
  subheading: string;
  introduction: string;
  workOn: CourseWorkItem[];
  teachingFlow: string[]; // e.g. ["Understand", "Read", "Discuss", ...]
  closingHighlight: string;
  image: ImageAsset;
};

export const courses: Course[] = [
  {
    slug: "english",
    name: "English",
    formOption: "English",
    classes: "Classes 2–12",
    category: "school",
    icon: "book-open",
    cardBlurb: "Learn to read, write, speak and think with confidence.",
    subheading: "Building Strong Language Skills and Confidence",
    introduction:
      "At RARE, we help students develop a strong foundation in English through understanding, reading, writing and regular practice. We do not want students to simply memorise answers. We help them understand what they read, express their ideas clearly and use the language with greater confidence.",
    workOn: [
      { title: "Reading", text: "Students learn to read with understanding, find important information and think about what they have read." },
      { title: "Grammar", text: "Grammar is taught through clear explanations and examples so that students understand how the language works." },
      { title: "Writing", text: "Students practise organising their ideas and expressing them clearly in different forms of writing." },
      { title: "Vocabulary", text: "Students build their vocabulary through reading, classroom work and regular use of new words." },
      { title: "Comprehension", text: "Students learn to understand passages, identify key ideas and answer questions carefully." },
      { title: "Communication", text: "Students are encouraged to express themselves clearly and confidently, both in speaking and writing." },
    ],
    teachingFlow: ["Understand", "Read", "Discuss", "Practise", "Write", "Improve"],
    closingHighlight: "Good English is not only about getting the right answer. It is about understanding, thinking and expressing yourself clearly.",
    image: images.courseEnglish,
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    formOption: "Mathematics",
    classes: "Classes 4–8",
    category: "school",
    icon: "sigma",
    cardBlurb: "Build confidence with every problem.",
    subheading: "Building Clear Concepts and Problem-Solving Skills",
    introduction:
      "At RARE, we help students understand Mathematics instead of simply memorising rules and methods. We break difficult ideas into simpler steps, explain why a method works and give students regular opportunities to practise. This helps them become more confident when solving problems.",
    workOn: [
      { title: "Number Skills", text: "Students build a clear understanding of numbers and learn to work with them accurately." },
      { title: "Arithmetic", text: "Students practise calculations and learn how to choose and apply the right methods." },
      { title: "Algebra", text: "Students are guided to understand patterns, symbols and relationships step by step." },
      { title: "Geometry", text: "Students learn about shapes, measurements and geometric ideas through clear explanations and practice." },
      { title: "Problem Solving", text: "Students learn to understand what a problem is asking, plan their approach and work towards a solution." },
      { title: "Accuracy & Practice", text: "Regular practice helps students improve their speed, accuracy and confidence." },
    ],
    teachingFlow: ["Understand", "See an Example", "Try", "Practise", "Check", "Improve"],
    closingHighlight: "In Mathematics, understanding the method is more important than simply remembering the answer.",
    image: images.courseMathematics,
  },
  {
    slug: "science",
    name: "Science",
    formOption: "Science Group",
    classes: "Classes 4–8",
    category: "school",
    icon: "flask-conical",
    cardBlurb: "Discover how the world works.",
    subheading: "Understanding the World Through Questions and Discovery",
    introduction:
      "At RARE, we help students understand Science through clear explanations, observation, discussion and practice. Science is not only about remembering facts. We encourage students to ask questions, understand how things work and connect what they learn with the world around them.",
    workOn: [
      { title: "Understanding Concepts", text: "Students learn scientific ideas through simple explanations and examples before moving on to more difficult questions." },
      { title: "Observation", text: "Students are encouraged to observe carefully, notice patterns and think about what they see." },
      { title: "Questions & Reasoning", text: "Students learn to ask questions, look for explanations and use what they know to reason through problems." },
      { title: "Diagrams & Scientific Terms", text: "Students practise understanding and using important scientific terms, diagrams and explanations accurately." },
      { title: "Application", text: "Students learn to connect scientific ideas with familiar situations and everyday examples where appropriate." },
      { title: "Practice & Revision", text: "Regular practice and revision help students strengthen their understanding and prepare for written work and examinations." },
    ],
    teachingFlow: ["Observe", "Ask", "Understand", "Discuss", "Apply", "Practise"],
    closingHighlight: "Science begins with curiosity. When students understand what they are learning, they can ask better questions and think more deeply.",
    image: images.courseScience,
  },
  {
    slug: "biology",
    name: "Biology",
    formOption: "Biology",
    classes: "Classes 9–10",
    category: "school",
    icon: "dna",
    cardBlurb: "Learn life science with clarity.",
    subheading: "Understanding Life Through Observation and Clear Concepts",
    introduction:
      "At RARE, we help students understand Biology by making concepts clear and connecting them with the living world around us. We encourage students to look beyond memorising definitions and learn how to understand processes, relationships and important biological ideas.",
    workOn: [
      { title: "Understanding Concepts", text: "Students learn biological ideas through clear explanations before moving on to detailed information." },
      { title: "Diagrams & Labelling", text: "Students learn to understand, draw and label important biological diagrams carefully." },
      { title: "Processes & Functions", text: "Students learn how biological processes work and how different parts of living systems are connected." },
      { title: "Scientific Terms", text: "Students practise understanding and using important biological terms correctly." },
      { title: "Application & Reasoning", text: "Students are encouraged to use what they have learned to answer questions and explain biological situations." },
      { title: "Practice & Revision", text: "Regular practice helps students strengthen their understanding and improve their written answers." },
    ],
    teachingFlow: ["Observe", "Understand", "Connect", "Explain", "Practise", "Improve"],
    closingHighlight: "Biology becomes easier to learn when students understand how the parts fit together, rather than trying to remember isolated facts.",
    image: images.courseBiology,
  },
  {
    slug: "social-science",
    name: "Social Science",
    formOption: "Social Science",
    classes: "Classes 5–10",
    category: "school",
    icon: "globe",
    cardBlurb: "Understand the world around you.",
    subheading: "Understanding People, Places, Society and the World",
    introduction:
      "At RARE, we help students understand Social Science as a connected story about people, places, society and the world around us. We encourage students to understand ideas, events and relationships rather than simply memorising facts. Clear explanations, discussion and regular practice help students develop stronger understanding and confidence.",
    workOn: [
      { title: "History", text: "Students learn to understand important events, people and developments, and how they are connected." },
      { title: "Geography", text: "Students explore places, people, resources and the relationship between human life and the physical world." },
      { title: "Civics", text: "Students learn about society, government, rights, responsibilities and the way people live together." },
      { title: "Understanding Concepts", text: "Students are guided to understand ideas clearly before moving on to detailed information." },
      { title: "Maps, Sources & Diagrams", text: "Students practise working with maps, visual information and relevant sources as part of their learning." },
      { title: "Answer Writing", text: "Students learn how to organise their ideas, use appropriate information and write clear, well-structured answers." },
    ],
    teachingFlow: ["Understand", "Connect", "Discuss", "Organise", "Write", "Improve"],
    closingHighlight: "Social Science is not just about remembering what happened. It is about understanding why things happened and how they affect people and society.",
    image: images.courseSocialScience,
  },
  {
    slug: "bengali",
    name: "Bengali",
    formOption: "Bengali",
    classes: "Classes 5–10",
    category: "school",
    icon: "languages",
    cardBlurb: "Build confidence in your mother tongue.",
    subheading: "Building Strong Language Skills Through Reading and Expression",
    introduction:
      "At RARE, we help students develop a clear understanding of Bengali through reading, language work, writing and regular practice. We encourage students to understand what they read, express their ideas clearly and develop greater confidence in using the language.",
    workOn: [
      { title: "Reading & Understanding", text: "Students learn to read texts carefully, understand their meaning and identify important ideas." },
      { title: "Literature", text: "Students explore stories, poems and other literary texts with attention to meaning, ideas and language." },
      { title: "Grammar", text: "Grammar is explained through clear examples so that students understand how the language works." },
      { title: "Vocabulary", text: "Students develop their vocabulary through reading, classroom discussion and regular language practice." },
      { title: "Writing", text: "Students practise expressing their thoughts clearly and organising their answers appropriately." },
      { title: "Comprehension & Answer Writing", text: "Students learn to understand questions carefully and write answers that are clear, relevant and well organised." },
    ],
    teachingFlow: ["Read", "Understand", "Discuss", "Practise", "Write", "Improve"],
    closingHighlight: "A strong language foundation helps students understand better, express themselves clearly and enjoy what they read.",
    image: images.courseBengali,
  },
  {
    slug: "spoken-english",
    name: "Spoken English",
    formOption: "Spoken English",
    classes: "Beginner · Intermediate · Advanced",
    category: "spoken-english",
    icon: "mic",
    cardBlurb: "Speak naturally with confidence.",
    subheading: "Speak with Greater Confidence and Clarity",
    introduction:
      "At RARE, Spoken English learning is about helping students become more comfortable using English in everyday communication. We create opportunities for students to listen, speak, ask questions and express their thoughts. With regular practice and encouragement, students can gradually become more confident speakers.",
    workOn: [
      { title: "Everyday Conversation", text: "Students practise using English in familiar situations and everyday conversations." },
      { title: "Speaking Confidence", text: "Students get opportunities to speak without being afraid of making mistakes." },
      { title: "Vocabulary", text: "Students learn useful words and expressions and practise using them naturally." },
      { title: "Pronunciation", text: "Students are guided towards clearer pronunciation and more confident speech." },
      { title: "Listening", text: "Students practise listening carefully and understanding spoken English." },
      { title: "Expressing Ideas", text: "Students learn to organise their thoughts and express themselves clearly in English." },
    ],
    teachingFlow: ["Listen", "Understand", "Speak", "Practise", "Get Feedback", "Improve"],
    closingHighlight: "You do not become a confident speaker by being afraid of mistakes. You become confident by practising, learning and trying again.",
    image: images.courseSpokenEnglish,
  },
  {
    slug: "wbchse-english",
    name: "WBCHSE English",
    formOption: "WBCHSE English",
    classes: "Class XI · Limited Seats",
    category: "school",
    icon: "book-open",
    cardBlurb: "Focused, exam-aware support for higher-secondary English.",
    subheading: "Building Strong Language Skills for Class XI",
    introduction:
      "At RARE, our WBCHSE English support helps Class XI students read with understanding, write clear and well-organised answers and build the vocabulary and comprehension skills the higher-secondary syllabus expects — offered in limited batches to keep the same personal attention RARE is known for.",
    workOn: [
      { title: "Reading & Comprehension", text: "Students learn to read prescribed texts and unseen passages carefully, identifying key ideas and answering with precision." },
      { title: "Grammar & Usage", text: "Grammar is revised through clear explanation and practice, focused on the accuracy the board examination expects." },
      { title: "Writing Skills", text: "Students practise letters, reports, notices and other writing formats, learning to organise ideas clearly within the expected structure." },
      { title: "Literature", text: "Prescribed prose, poetry and drama are discussed for meaning, theme and language, not just memorised for quotations." },
      { title: "Vocabulary", text: "Students build subject-relevant vocabulary through reading and regular use in class." },
      { title: "Examination Practice", text: "Regular practice with previous years' patterns helps students manage time and structure answers confidently." },
    ],
    teachingFlow: ["Understand", "Read", "Discuss", "Practise", "Write", "Improve"],
    closingHighlight: "Higher-secondary English rewards students who understand what they read and can express it clearly — that is exactly what this programme builds towards.",
    image: images.courseEnglish,
  },
];

export const schoolProgrammes = courses.filter((c) => c.category === "school");

export const spokenEnglishCourse = courses.find((c) => c.slug === "spoken-english")!;

export const howCoursesWork = {
  title: "How Our Courses Work",
  heading: "Learning Begins with Understanding",
  intro:
    "We do not believe that every student should be taught in exactly the same way. We first try to understand the learner, their needs and the areas where they need support. We then guide them through clear explanations, practice and regular feedback.",
  steps: [
    { title: "Understand", text: "We explain concepts clearly and make sure students understand the ideas behind what they are learning." },
    { title: "Ask", text: "Students are encouraged to ask questions and share their doubts." },
    { title: "Practise", text: "Regular writing, problem-solving, revision and other forms of practice help students strengthen their learning." },
    { title: "Improve", text: "We help students identify their difficulties and work on them step by step." },
    { title: "Grow in Confidence", text: "As understanding and practice improve, students become more confident and independent learners." },
  ],
  highlight: {
    title: "Choose the Learning Mode That Works for You",
    subtitle: "Offline • Online • Hybrid",
    text: "The same care and commitment guide our teaching in every mode.",
  },
};

export const learningModes = [
  { title: "Offline", icon: "building-2", desc: "Attend classroom sessions in a small-batch learning environment." },
  { title: "Online", icon: "monitor", desc: "Join live interactive classes from anywhere." },
  { title: "Hybrid", icon: "shuffle", desc: "Combine classroom learning with online flexibility." },
];

export const whyFamiliesChooseCourses = [
  { title: "Small Batches", icon: "users" },
  { title: "Personal Attention", icon: "heart" },
  { title: "Flexible Learning", icon: "compass" },
  { title: "Founded in 1988", icon: "calendar" },
];

export const coursesCallToAction = {
  heading: "Find the Right Learning Support",
  text: "Every student has different needs. The right guidance can help make learning clearer, more meaningful and more enjoyable. If you would like to know more about our courses or discuss what kind of learning support may be suitable for your child, we would be happy to talk to you.",
  modes: [
    { title: "Offline", text: "Learn with us in our classroom environment." },
    { title: "Online", text: "Join live interactive classes from anywhere." },
    { title: "Hybrid", text: "Combine both, based on what suits you best." },
  ],
};
