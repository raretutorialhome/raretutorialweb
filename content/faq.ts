import { images } from "./assets";

export const faqBanner = {
  heading: "Frequently Asked Questions",
  intro: "Find quick answers to some of the questions parents ask us most often.",
  image: images.faqBanner,
};

export type FaqItem = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; subtitle: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "about",
    title: "About RARE",
    subtitle: "Questions About Who We Are and How We Work",
    items: [
      { question: "What is RARE Tutorial?", answer: "RARE Tutorial is a learning community that helps students understand their subjects clearly, build confidence and develop good learning habits. RARE was founded in 1988 by Mrs. Ruma Mukhopadhyay." },
      { question: "What does RARE stand for?", answer: "RARE stands for Ruma Aunty's Realm of Education." },
      { question: "When was RARE founded?", answer: "RARE Tutorial was founded in 1988." },
      { question: "Who founded RARE?", answer: "RARE was founded by Mrs. Ruma Mukhopadhyay, who began by teaching her own two school-going children." },
      { question: "What is The RARE Way?", answer: "The RARE Way is the teaching philosophy that guides RARE. It is based on understanding before memorising, personal attention, questions, regular practice, reading, confidence and meaningful learning." },
      { question: "Does RARE focus only on examinations?", answer: "No. Examinations are important, but RARE also aims to help students build understanding, confidence, communication skills, curiosity and independent learning habits." },
      { question: "How does RARE approach different learners?", answer: "Every child is different. Some students understand quickly, while others need more time. RARE begins by understanding the learner and adapts explanations and guidance according to the student's needs." },
      { question: "Are students encouraged to ask questions?", answer: "Yes. RARE believes that questions are an important part of learning. Students should feel comfortable saying, \u201cI don't understand.\u201d" },
      { question: "Does RARE encourage reading?", answer: "Yes. Reading is an important part of the RARE approach. RARE believes that reading helps students develop language, vocabulary, thinking, imagination and independence." },
      { question: "Who leads RARE today?", answer: "Shiladitya Mukhopadhyay joined RARE in 2000 and is its current Director." },
      { question: "What makes RARE different?", answer: "RARE does not follow a secret formula or try to teach every child in exactly the same way. The focus is on understanding the learner, explaining ideas clearly, encouraging questions and building confidence through practice." },
      { question: "Is RARE only about classroom teaching?", answer: "No. Learning can take place in different ways. RARE supports offline, online and hybrid learning while keeping personal guidance and meaningful teaching at the centre." },
    ],
  },
  {
    id: "courses",
    title: "Courses & Learning",
    subtitle: "Questions About Subjects, Classes and Learning",
    items: [
      { question: "What subjects does RARE offer?", answer: "RARE offers learning support in English, Mathematics, Science, Biology, Social Science, Bengali and Spoken English." },
      { question: "How do I know which course is suitable for my child?", answer: "Every student has different needs. If you are unsure, contact us and tell us about your child's class, subject and learning needs. We can discuss the available options with you." },
      { question: "Does RARE offer offline classes?", answer: "Yes. Students can learn through classroom-based, offline teaching." },
      { question: "Does RARE offer online classes?", answer: "Yes. RARE also offers online learning for students who prefer or need to learn from home." },
      { question: "What is hybrid learning?", answer: "Hybrid learning combines offline and online learning. It can provide the flexibility of online learning while allowing students to learn in the classroom when appropriate." },
      { question: "Is the teaching the same in all three learning modes?", answer: "The learning mode may change, but the principles of The RARE Way remain the same. RARE aims to provide clear teaching, personal guidance, questions, practice and encouragement whether learning takes place offline, online or through a combination of both." },
      { question: "Does RARE teach only for school examinations?", answer: "No. Examination preparation is an important part of learning, but RARE also focuses on strong concepts, clear thinking, communication, confidence and independent learning." },
      { question: "How does RARE help students who find a subject difficult?", answer: "We begin by trying to understand where the student is having difficulty. We then explain the ideas clearly, break difficult work into smaller steps, encourage questions and provide practice and feedback." },
      { question: "Do students have to memorise everything?", answer: "No. RARE believes that understanding should come before memorising. Students are encouraged to understand ideas first and then remember important information through meaningful learning and practice." },
      { question: "Are students given regular practice?", answer: "Practice is an important part of learning at RARE. Students may practise through writing, problem-solving, revision and other subject-appropriate activities." },
      { question: "Can a student ask questions during class?", answer: "Yes. Questions are welcome. Students should feel comfortable sharing their doubts and saying when they do not understand something." },
      { question: "Does RARE help students develop English communication skills?", answer: "Yes. RARE offers Spoken English and also works on reading, writing, vocabulary, comprehension and communication as part of language learning." },
      { question: "Does RARE encourage students to read outside their textbooks?", answer: "Yes. RARE believes that reading beyond textbooks can help students develop vocabulary, thinking, imagination, concentration and independence." },
    ],
  },
  {
    id: "parents",
    title: "Parents & Learning",
    subtitle: "Questions About Supporting Your Child",
    items: [
      { question: "What role do parents play in a child's learning?", answer: "Parents are important partners in a child's education. At RARE, we believe that teachers and parents work together towards the same goal: helping children become capable, confident and responsible learners." },
      { question: "Do parents need to teach their children at home?", answer: "No. Parents do not need to become teachers. Simple support at home — such as encouraging reading, talking about what the child has learnt, encouraging curiosity and providing a quiet place to study — can make a meaningful difference." },
      { question: "Should parents put pressure on children to get better marks?", answer: "We believe encouragement works better than pressure. Parents can recognise sincere effort, celebrate progress and remind children that learning is a journey." },
      { question: "What should I ask my child about their studies?", answer: "Try asking questions such as \u201cWhat did you learn today?\u201d, \u201cWhat did you find interesting?\u201d, \u201cWas anything difficult?\u201d or \u201cIs there anything you would like help with?\u201d These questions can encourage children to think about their learning rather than focus only on marks." },
      { question: "What if my child is struggling with a subject?", answer: "Talk to the teacher and try to understand where the difficulty lies. Sometimes a child needs more time, a different explanation or additional practice. Honest and respectful communication can help teachers and parents find the right way forward." },
      { question: "What if my child's progress is slower than expected?", answer: "Progress is not always the same for every learner. At RARE, we believe such situations should be discussed honestly and compassionately, with the focus on finding solutions rather than assigning blame." },
      { question: "How should parents communicate with teachers?", answer: "Parents should feel comfortable asking questions, while teachers should be able to share their observations. Good communication should remain respectful, constructive and focused on helping the learner grow." },
      { question: "What if the teacher notices something that we have not noticed at home?", answer: "That can be useful. Parents and teachers see different parts of a child's learning journey. Sharing these observations can give everyone a fuller understanding of the learner." },
      { question: "How can I encourage my child to read?", answer: "Make books available, help your child find things they enjoy reading and talk about what they read. Reading should become an enjoyable habit rather than another source of pressure." },
      { question: "What if my child makes mistakes?", answer: "Mistakes are a natural part of learning. Encourage your child to understand what went wrong, learn from it and try again. The aim is not to avoid every mistake but to learn from them." },
      { question: "Does RARE expect parents to follow a particular method at home?", answer: "No. The aim is not to turn parents into teachers. What matters is creating a supportive environment where children can learn, ask questions, practise and grow in confidence." },
    ],
  },
  {
    id: "practical",
    title: "Fees, Timings & Practical Questions",
    subtitle: "Things You May Want to Know Before Joining",
    items: [
      { question: "Where is RARE located?", answer: "RARE Tutorial is located in Ballygunge, Kolkata." },
      { question: "What learning modes are available?", answer: "RARE offers offline, online and hybrid learning options." },
      { question: "How can I find out the current class timings?", answer: "Class timings can change depending on the course, class and current arrangements. Please contact RARE for the latest timings." },
      { question: "How can I find out the current fees?", answer: "Fees may vary depending on the course and learning arrangement. Please contact RARE for the current fee details." },
      { question: "How do I enquire about a course?", answer: "You can contact RARE by phone, WhatsApp or email, or use the enquiry form on the Contact Us page." },
      { question: "What information should I provide when making an enquiry?", answer: "It is helpful to provide the student's name, current class or grade, subject you are interested in, preferred learning mode (if known) and your main question. You do not need to provide unnecessary personal information." },
      { question: "Can I contact RARE if I am not sure which course or learning mode I need?", answer: "Yes. You can contact us even if you are still deciding. We are happy to discuss your child's learning needs and explain the available options." },
      { question: "Does RARE offer support only to students in Kolkata?", answer: "RARE offers offline, online and hybrid learning. Please contact RARE to check whether the required course is available for your location." },
    ],
  },
  {
    id: "contact",
    title: "Contact & Support",
    subtitle: "Still Have Questions?",
    items: [
      { question: "How can I contact RARE?", answer: "You can contact RARE by phone, WhatsApp or email. You can also use the enquiry form on the Contact Us page." },
      { question: "Can I speak to someone before deciding?", answer: "Yes. If you have questions about a course, subject or learning mode, you are welcome to contact us and discuss your needs." },
      { question: "What if I do not know which course is right for my child?", answer: "That is perfectly fine. Tell us about your child's class, subject and learning needs. We can explain the available options and help you understand what may be suitable." },
      { question: "Can I ask questions about my child's learning needs?", answer: "Yes. We encourage parents to ask questions and share what they have noticed about their child. Parents and teachers can understand a learner better when they share their observations." },
      { question: "What if RARE is not the right choice for my child?", answer: "We believe that the learner's needs should come first. If we genuinely believe another teacher or programme would serve your child better, we would tell you honestly rather than recommend something that is not suitable." },
      { question: "Can I send a question through WhatsApp?", answer: "Yes. WhatsApp can be used for enquiries." },
      { question: "Can I send an email instead?", answer: "Yes. You can use the verified RARE email address shown on the Contact Us page." },
      { question: "What if I cannot find the answer to my question here?", answer: "Please contact us. Not every question can be answered on a website, and sometimes a simple conversation is the best place to begin." },
    ],
  },
];

/** A short subset shown inline on the Home page. */
export const homeFaqPreviewIds = [
  "What is RARE Tutorial?",
  "Does RARE offer online classes?",
  "What subjects does RARE offer?",
  "How can I find out the current fees?",
  "What role do parents play in a child's learning?",
];

export const faqClosing = {
  heading: "Still Have Questions?",
  subheading: "We Are Happy to Help",
  text: "Sometimes the best way to understand something is simply to ask. If you have a question that is not answered here, please get in touch. Tell us what you would like to know, and we will do our best to guide you clearly and honestly. You do not need to know exactly what you are looking for before you contact us.",
  supporting: "Every learner is different. Every question matters.",
  closingNote: "At RARE, we believe that good communication begins with listening.",
};
