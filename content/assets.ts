/**
 * Centralised image map. Every image path used anywhere in the site is
 * declared here — components and content files reference `images.xxx`
 * rather than raw string paths, so a photograph can be swapped by editing
 * one line in this file.
 *
 * Source: the supplied "Rare Website Content" asset library. Several of the
 * source photographs are reused across more than one section in the brief
 * itself (e.g. the same classroom photograph doubles as both a course-page
 * portrait and a section image) — that reuse is preserved here rather than
 * invented.
 */

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  // Home
  hero: {
    src: "/images/home/hero-image.jpg",
    width: 1490,
    height: 1056,
    alt: "Ruma Mukhopadhyay teaching a small group of students at RARE Tutorial",
  } satisfies ImageAsset,
  welcomeFounder: {
    src: "/images/home/founder.jpg",
    width: 1300,
    height: 1210,
    alt: "Mrs. Ruma Mukhopadhyay, founder of RARE Tutorial",
  } satisfies ImageAsset,
  homeClassroom: {
    src: "/images/home/classroom.jpg",
    width: 1536,
    height: 1024,
    alt: "A bright classroom at RARE Tutorial with students engaged in a lesson",
  } satisfies ImageAsset,
  homeFounderPortrait: {
    src: "/images/home/founder-portrait.jpg",
    width: 1199,
    height: 1312,
    alt: "Portrait of Mrs. Ruma Mukhopadhyay",
  } satisfies ImageAsset,
  homeStudentsTogether: {
    src: "/images/home/students-together.jpg",
    width: 1370,
    height: 1148,
    alt: "A small group of smiling students after class at RARE",
  } satisfies ImageAsset,
  resourceBooks: {
    src: "/images/home/books.jpg",
    width: 1448,
    height: 1086,
    alt: "A neat stack of books",
  } satisfies ImageAsset,
  resourceLibrary: {
    src: "/images/home/library.jpg",
    width: 1448,
    height: 1086,
    alt: "Bookshelves and a reading corner",
  } satisfies ImageAsset,
  resourceNotebook: {
    src: "/images/home/notebook.jpg",
    width: 1536,
    height: 1024,
    alt: "An open notebook with neat handwritten work",
  } satisfies ImageAsset,
  resourceReading: {
    src: "/images/home/reading.jpg",
    width: 1448,
    height: 1086,
    alt: "A student reading naturally",
  } satisfies ImageAsset,
  resourceParentAndChild: {
    src: "/images/home/parent-and-child.jpg",
    width: 1372,
    height: 1147,
    alt: "A parent helping a child study",
  } satisfies ImageAsset,

  // About
  aboutBanner: {
    src: "/images/about/about-banner.jpg",
    width: 1536,
    height: 1024,
    alt: "Students learning and a teacher interacting in a bright, warm classroom",
  } satisfies ImageAsset,
  founderTeaching: {
    src: "/images/about/founder-teaching-2.jpg",
    width: 1448,
    height: 1086,
    alt: "Mrs. Ruma Mukhopadhyay teaching a genuine classroom moment",
  } satisfies ImageAsset,
  todaysClassroom: {
    src: "/images/rare-way/happy-classroom.jpg",
    width: 1448,
    height: 1086,
    alt: "A bright, natural photograph of a present-day RARE classroom",
  } satisfies ImageAsset,
  founderPortraitMain: {
    src: "/images/about/founder-portrait-2.jpg",
    width: 1199,
    height: 1312,
    alt: "Mrs. Ruma Mukhopadhyay, Founder of RARE Tutorial",
  } satisfies ImageAsset,
  founderWithStudents: {
    src: "/images/about/founder-with-students.jpg",
    width: 1448,
    height: 1086,
    alt: "Mrs. Ruma Mukhopadhyay with a group of students, a happy learning moment",
  } satisfies ImageAsset,
  handwrittenNote: {
    src: "/images/about/handwritten-note.jpg",
    width: 2172,
    height: 724,
    alt: "A short handwritten note in Mrs. Ruma Mukhopadhyay's own hand",
  } satisfies ImageAsset,
  missionVision: {
    src: "/images/about/mission-vision.jpg",
    width: 1536,
    height: 1024,
    alt: "A teacher interacting with students who are listening with interest",
  } satisfies ImageAsset,
  valuesClassroom: {
    src: "/images/about/values-classroom.jpg",
    width: 1536,
    height: 1024,
    alt: "A teacher talking with students in a warm classroom atmosphere",
  } satisfies ImageAsset,
  learningStudentsLearning: {
    src: "/images/about/students-learning.jpg",
    width: 1536,
    height: 1024,
    alt: "Students listening attentively during a lesson",
  } satisfies ImageAsset,
  learningTeacherExplaining: {
    src: "/images/about/teacher-explaining.jpg",
    width: 1536,
    height: 1024,
    alt: "A teacher explaining a concept to the class",
  } satisfies ImageAsset,
  learningIndividualGuidance: {
    src: "/images/about/individual-guidance.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher helping one student individually",
  } satisfies ImageAsset,
  learningWritingPractice: {
    src: "/images/about/writing-practice.jpg",
    width: 1536,
    height: 1024,
    alt: "Students writing during a practice session",
  } satisfies ImageAsset,
  learningOnlineClass: {
    src: "/images/about/online-class.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher teaching an online class",
  } satisfies ImageAsset,
  learningHybrid: {
    src: "/images/about/hybrid-learning.jpg",
    width: 1536,
    height: 1024,
    alt: "A hybrid learning session combining classroom and online teaching",
  } satisfies ImageAsset,
  aboutCtaFamily: {
    src: "/images/about/family.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher warmly welcoming a student and parent",
  } satisfies ImageAsset,

  // The RARE Way
  wayBanner: {
    src: "/images/rare-way/warm-classroom-photograph.jpg",
    width: 1448,
    height: 1086,
    alt: "A warm, natural classroom photograph",
  } satisfies ImageAsset,
  wayStudentAskingQuestion: {
    src: "/images/rare-way/student-asking-question.jpg",
    width: 1448,
    height: 1086,
    alt: "A student confidently asking a question in class",
  } satisfies ImageAsset,
  wayOneToOneGuidance: {
    src: "/images/rare-way/one-to-one-guidance.jpg",
    width: 1377,
    height: 1142,
    alt: "One-to-one guidance between a teacher and a student",
  } satisfies ImageAsset,
  wayPracticeSession: {
    src: "/images/rare-way/practice-session.jpg",
    width: 1448,
    height: 1086,
    alt: "Students during a regular practice session",
  } satisfies ImageAsset,
  wayHappyClassroom: {
    src: "/images/rare-way/happy-classroom.jpg",
    width: 1448,
    height: 1086,
    alt: "A happy, engaged classroom at RARE",
  } satisfies ImageAsset,
  wayReadingTogether: {
    src: "/images/rare-way/reading-together.jpg",
    width: 1536,
    height: 1024,
    alt: "Students reading together",
  } satisfies ImageAsset,
  wayClassroomDiscussion: {
    src: "/images/rare-way/classroom-discussion.jpg",
    width: 1536,
    height: 1024,
    alt: "Students engaged in a classroom discussion",
  } satisfies ImageAsset,
  wayTeacherListening: {
    src: "/images/rare-way/teacher-listening.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher listening carefully to a student",
  } satisfies ImageAsset,
  wayParentMeeting: {
    src: "/images/rare-way/parent-meeting.jpg",
    width: 1448,
    height: 1086,
    alt: "A parent meeting with a RARE teacher",
  } satisfies ImageAsset,
  wayStudentSmiling: {
    src: "/images/rare-way/student-smiling.jpg",
    width: 1535,
    height: 1024,
    alt: "A student smiling with confidence",
  } satisfies ImageAsset,
  wayParentAndTeacher: {
    src: "/images/rare-way/parent-and-teacher.jpg",
    width: 1448,
    height: 1086,
    alt: "A parent and teacher in conversation",
  } satisfies ImageAsset,
  wayFounderWithStudent: {
    src: "/images/rare-way/founder-with-student.jpg",
    width: 1536,
    height: 1024,
    alt: "Mrs. Ruma Mukhopadhyay guiding a student",
  } satisfies ImageAsset,
  founderPortraitLetter: {
    src: "/images/rare-way/ruma-mukhopadhyay-founder.jpg",
    width: 1086,
    height: 1448,
    alt: "Mrs. Ruma Mukhopadhyay, Founder",
  } satisfies ImageAsset,
  directorPortrait: {
    src: "/images/rare-way/shiladitya-mukhopadhyay-director.jpg",
    width: 1527,
    height: 1030,
    alt: "Shiladitya Mukhopadhyay, Director",
  } satisfies ImageAsset,

  // Courses
  coursesBanner: {
    src: "/images/rare-way/warm-classroom-photograph.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher actively teaching a small group of students",
  } satisfies ImageAsset,
  courseEnglish: {
    src: "/images/courses/teaching-english.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher conducting an English class",
  } satisfies ImageAsset,
  courseMathematics: {
    src: "/images/courses/mathematics-teaching.jpg",
    width: 1448,
    height: 1086,
    alt: "A teacher explaining a Mathematics concept",
  } satisfies ImageAsset,
  courseScience: {
    src: "/images/courses/science-teaching.jpg",
    width: 1377,
    height: 1142,
    alt: "A Science class in progress",
  } satisfies ImageAsset,
  courseBiology: {
    src: "/images/courses/science-teaching.jpg",
    width: 1377,
    height: 1142,
    alt: "A teacher discussing a Biology diagram with a student",
  } satisfies ImageAsset,
  courseSocialScience: {
    src: "/images/contact/social-science-teaching.jpg",
    width: 1377,
    height: 1142,
    alt: "A Social Science class discussion",
  } satisfies ImageAsset,
  courseBengali: {
    src: "/images/courses/bengali-teaching.jpg",
    width: 1377,
    height: 1142,
    alt: "A Bengali language class",
  } satisfies ImageAsset,
  courseSpokenEnglish: {
    src: "/images/courses/spoken-english-teaching.jpg",
    width: 1377,
    height: 1142,
    alt: "A Spoken English practice session",
  } satisfies ImageAsset,
  coursePracticeSession: {
    src: "/images/rare-way/practice-session.jpg",
    width: 1448,
    height: 1086,
    alt: "Students during a guided practice session",
  } satisfies ImageAsset,

  // Resources
  resourcesBanner: {
    src: "/images/home/reading.jpg",
    width: 1448,
    height: 1086,
    alt: "A student reading, part of RARE's resource library",
  } satisfies ImageAsset,
  resourceIndependentStudy: {
    src: "/images/resources/independent-study.jpg",
    width: 1377,
    height: 1142,
    alt: "A student engaged in independent study",
  } satisfies ImageAsset,

  // Stories
  storiesBanner: {
    src: "/images/stories/classroom-activity.jpg",
    width: 1448,
    height: 1086,
    alt: "A lively classroom activity at RARE",
  } satisfies ImageAsset,
  storiesStudentsTogether: {
    src: "/images/home/students-together.jpg",
    width: 1370,
    height: 1148,
    alt: "Students smiling together after class",
  } satisfies ImageAsset,

  // Contact
  contactBanner: {
    src: "/images/home/classroom.jpg",
    width: 1536,
    height: 1024,
    alt: "The learning environment at RARE Tutorial",
  } satisfies ImageAsset,

  // FAQ
  faqBanner: {
    src: "/images/rare-way/parent-and-teacher.jpg",
    width: 1448,
    height: 1086,
    alt: "A parent and teacher in a supportive conversation",
  } satisfies ImageAsset,
} as const;

export type ImageKey = keyof typeof images;
