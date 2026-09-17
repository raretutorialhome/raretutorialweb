import { images } from "./assets";

export const homeHero = {
  eyebrow: "Founded in 1988",
  heading: "Helping Students Learn with Confidence Since 1988",
  subheading:
    "At RARE Tutorial, we believe that understanding comes before memorising. Since 1988, we have helped students build strong foundations, develop confidence and enjoy learning through patient teaching, personal attention and regular practice.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Our Courses",
  trustBadges: [
    { label: "Founded in 1988", icon: "calendar" },
    { label: "Small Batches", icon: "users" },
    { label: "Offline • Online • Hybrid", icon: "shuffle" },
    { label: "Personal Attention", icon: "heart" },
  ],
  image: images.hero,
};

export const homeWelcome = {
  eyebrow: "Where It All Began",
  heading: "A Mother's Wish Became a Lifelong Mission",
  paragraphs: [
    "RARE Tutorial began in 1988 when Mrs. Ruma Mukhopadhyay started helping her own children with their studies. As she taught them, she discovered something that would shape RARE for years to come: children learn best when they truly understand what they are learning.",
    "What began as a mother's wish to help her children gradually became RARE Tutorial — a place where every learner is understood, encouraged and given the personal attention they deserve.",
  ],
  cta: "Read Our Story",
  image: images.welcomeFounder,
};

export const homeWhyChoose = {
  eyebrow: "Why RARE",
  heading: "Why Choose RARE?",
  intro:
    "Every student learns differently. At RARE, we take the time to understand each learner and help them grow with confidence. Our focus is not only on good marks but also on building strong knowledge, clear thinking and a love for learning.",
  reasons: [
    { title: "Personal Attention", tagline: "Every student matters.", text: "We ensure that every student receives individual guidance, regular feedback and the support they need to improve.", icon: "heart" },
    { title: "Experienced Guidance", tagline: "Learning built on years of experience.", text: "Since 1988, RARE has been helping students learn with confidence through thoughtful teaching and careful preparation.", icon: "calendar" },
    { title: "Strong Concepts", tagline: "Learn to understand, not memorise.", text: "We help students build clear concepts so that they can answer questions with confidence and solve problems independently.", icon: "lightbulb" },
    { title: "Examination Readiness", tagline: "Prepare with confidence.", text: "Regular practice, revision and exam-oriented guidance help students perform to the best of their ability.", icon: "shield-check" },
    { title: "Reading & Communication", tagline: "Build skills for life.", text: "Good reading and communication skills help students succeed not only in examinations but also in everyday life.", icon: "book-open" },
    { title: "Flexible Learning", tagline: "Learn your way.", text: "Students can choose from offline, online or hybrid learning based on what works best for them.", icon: "shuffle" },
  ],
  closing: "At RARE, learning is about growing in knowledge, confidence and character.",
  image: images.homeClassroom,
};

export const homeFounder = {
  eyebrow: "Meet Our Founder",
  heading: "A Teacher's Dream That Continues to Inspire",
  paragraphs: [
    "RARE Tutorial was founded in 1988 by Mrs. Ruma Mukhopadhyay with a simple belief — that every child deserves patient guidance, personal attention and the opportunity to succeed.",
    "Over the years, she has taught and inspired thousands of students with her dedication, warmth and commitment to quality education. Her classrooms have always been places where students feel encouraged to ask questions, think independently and enjoy learning.",
    "The values she established continue to guide RARE today. Every class, every lesson and every interaction reflects the same care, discipline and love for learning that have been at the heart of RARE from the very beginning.",
  ],
  quote: {
    text: "Education is not only about scoring well in examinations. It is about helping every student become a confident learner and a responsible individual.",
    attribution: "Mrs. Ruma Mukhopadhyay",
  },
  cta: "Read Our Story",
  portrait: images.homeFounderPortrait,
  teaching: images.founderTeaching,
};

export const homeCoursesIntro = {
  eyebrow: "Programmes",
  heading: "Our Courses",
  intro:
    "At RARE, we offer carefully planned courses that help students build strong knowledge, improve their confidence and achieve their academic goals. Whether a student needs regular classroom support or wants to strengthen specific skills, we provide guidance every step of the way.",
  cta: "Explore All Courses",
  tiles: [
    { title: "School Programmes", icon: "graduation-cap", text: "English, Mathematics, Science, Biology, Social Science and Bengali — Classes 2 to 12." },
    { title: "Spoken English", icon: "mic", text: "Beginner to Advanced — practical communication from the very first class." },
    { title: "Learning Modes", icon: "shuffle", text: "Offline, Online or Hybrid — switch between modes whenever required." },
  ],
};

export const homeWayIntro = {
  eyebrow: "Our Philosophy",
  heading: "The RARE Way",
  cards: [
    { title: "Understanding Before Memorising", icon: "lightbulb" },
    { title: "Questions Are Welcome", icon: "message-circle" },
    { title: "Reading Builds Independent Learners", icon: "book-open" },
    { title: "Practice Builds Confidence", icon: "target" },
    { title: "Personal Attention", icon: "heart" },
    { title: "Technology Supports Teaching", icon: "laptop" },
  ],
  cta: "Discover The RARE Way",
};

export const homeTrust = {
  eyebrow: "Why Families Choose Us",
  heading: "Why Parents Trust RARE",
  cards: [
    { title: "Founded in 1988", icon: "calendar" },
    { title: "Small Batches", icon: "users" },
    { title: "Personal Attention", icon: "heart" },
    { title: "Flexible Learning", icon: "compass" },
    { title: "Honest Guidance", icon: "shield-check" },
    { title: "Learning Beyond Examinations", icon: "trending-up" },
  ],
};

export const homePeople = {
  eyebrow: "Our People",
  heading: "Meet RARE",
  people: [
    { name: "Mrs. Ruma Mukhopadhyay", role: "Founder", image: images.founderPortraitLetter },
    { name: "Shiladitya Mukhopadhyay", role: "Director", image: images.directorPortrait },
  ],
  text: "Together, they carry forward a philosophy built on patience, clarity and genuine care for every learner who walks through RARE's doors.",
  cta: "Meet Our Founder & Director",
};

export const homeResources = {
  eyebrow: "Learn Beyond the Classroom",
  heading: "Learn Beyond the Classroom",
  intro:
    "Learning does not stop when the class ends. Our Resources section shares useful ideas, study tips and learning guides to help students and parents make learning easier, more enjoyable and more effective. Whether you are preparing for an examination, improving your writing or building better study habits, you will find something useful here.",
  cta: "Explore All Resources",
  cards: [
    { title: "Study Smarter, Not Harder", text: "Simple study habits can make a big difference. Learn how to plan your time, revise effectively and prepare with confidence.", image: images.resourceIndependentStudy, slug: "study-smarter" },
    { title: "Become a Better Reader", text: "Reading every day improves vocabulary, writing, imagination and confidence. Discover how to build a lifelong reading habit.", image: images.resourceReading, slug: "better-reader" },
    { title: "Write Better Answers", text: "Good answers are not always long answers. Learn how to organise your ideas, write clearly and impress examiners.", image: images.resourceNotebook, slug: "write-better-answers" },
    { title: "Tips for Parents", text: "Parents play an important role in every child's learning journey. Find practical ways to encourage and support learning at home.", image: images.resourceParentAndChild, slug: "tips-for-parents" },
  ],
};

export const homeStories = {
  eyebrow: "Testimonials",
  heading: "Stories from the RARE Family",
  intro:
    "Every student has a different journey, and every success has a story behind it. Over the years, RARE has had the privilege of teaching and guiding students from different schools and boards. Nothing makes us happier than seeing our students grow in confidence, discover their strengths and achieve their goals.",
  testimonials: [
    { quote: "The teachers at RARE always explained every topic patiently. I became much more confident in English, and I also learned how to write better answers in my examinations.", name: "Class 10 Student", role: "Student" },
    { quote: "We always appreciated the personal attention our child received. The teachers genuinely cared about his progress and were always ready to help whenever he had difficulties.", name: "Parent", role: "Parent" },
    { quote: "The classes were well organised, and the regular practice helped me improve step by step. I felt well prepared before my board examinations.", name: "Former Student", role: "Former Student" },
  ],
  closing: "We are grateful to every student and parent who has trusted RARE over the years. Their journeys continue to inspire us every day.",
  cta: "Read More Stories",
};

export const homeFaqPreview = [
  {
    question: "Which classes do you teach?",
    answer:
      "We currently offer programmes in English (Classes 2–12), Mathematics (Classes 4–8), Science Group (Classes 4–8), Biology (Classes 9–10), Social Science (Classes 5–10), Bengali (Classes 5–10), Spoken English and WBCHSE English (limited).",
  },
  { question: "Do you offer online classes?", answer: "Yes. Students may choose offline, online or hybrid learning depending on their needs." },
  { question: "Can students switch between online and offline classes?", answer: "Yes. Whenever possible, students may switch between learning modes if circumstances require." },
  { question: "How are batches organised?", answer: "We believe in batch sizes that allow teachers to provide personal attention and encourage questions." },
  { question: "Do you provide personal attention?", answer: "Yes. Personal attention has always been one of the guiding principles of RARE." },
];

export const homeContactPreview = {
  eyebrow: "Let's Begin Your Learning Journey",
  heading: "We'd Love to Hear From You",
  text: "Choosing the right learning support is an important decision, and we are here to help. Whether you would like to know more about our courses, discuss your child's learning needs or visit RARE, we would be happy to speak with you. Get in touch with us today and let us help your child learn with confidence.",
};

export const homeClosingCta = {
  heading: "Let's Talk",
  text: "Whether you're looking for support in school subjects or Spoken English, we'd be happy to help you find the right programme.",
};
