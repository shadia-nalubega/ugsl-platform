import greetings from "../assets/greetings.jpg";
import family from "../assets/family.jpg";

export const LESSONS = [

  /* =========================================================
     GETTING STARTED
  ========================================================= */

  {
    id: "intro-to-ugsl",
    title: "Introduction to Uganda Sign Language",
    level: "Beginner",
    duration: "5 min",
    category: "Getting Started",
    canDoStatement: "Understand what UgSL is, why signing matters, and how this course works",
    videoUrl: "https://www.youtube.com/watch?v=-BlC8zZcGZw",
    isIntro: true,
  },


  /* =========================================================
     0. FOUNDATIONS
  ========================================================= */

{
  id: "basic-greetings",
  title: "Basic Greetings",
  level: "Beginner",
  duration: "6 min",
  category: "0. Foundations",
  canDoStatement: "I can greet someone using hello, good morning, good afternoon, and good evening.",
  dialogue: [
    { speaker: "Deaf Person", text: "Good morning!", ugslGloss: "MORNING GOOD" },
    { speaker: "Learner (You)", text: "Good morning! How are you?", ugslGloss: "MORNING GOOD | YOU HOW" }
  ],
  breakdownItems: [
    { sign: "Hello", description: "Open palm moving outward from the mouth or temple area.", tip: "Keep a warm facial expression — it's part of the greeting." },
    { sign: "Good morning", description: "Sign 'GOOD' followed by 'MORNING' (flat hand rising like a sunrise).", tip: "Use before midday." },
    { sign: "Good afternoon", description: "Sign 'GOOD' followed by 'AFTERNOON' (flat hand level, moving slightly forward).", tip: "Use from midday until early evening." },
    { sign: "Good evening", description: "Sign 'GOOD' followed by 'EVENING' (hand lowering, like a sunset).", tip: "Use after the sun goes down." }
  ],
  prompt: {
    partnerText: "Good afternoon!",
    partnerInstruction: "Watch the Deaf signer greet you in the afternoon.",
    learnerTask: "Sign back the correct greeting for the time of day shown.",
    modelAnswer: "AFTERNOON GOOD"
  }
},


  {
    id: "the-alphabet",
    title: "The Alphabet",
    level: "Beginner",
    duration: "___",
    category: "0. Foundations",
    canDoStatement: "I can fingerspell each letter of the alphabet.",
  },
  {
    id: "numbers",
    title: "Numbers",
    level: "Beginner",
    duration: "12 min",
    category: "0. Foundations",
    canDoStatement: "I can express amounts, quantities, and simple counts during a conversation.",
    dialogue: [
      { speaker: "Deaf Person", text: "How many items do you need?", ugslGloss: "ITEM YOU NEED HOW-MANY?" },
      { speaker: "Learner (You)", text: "I need three items, please.", ugslGloss: "I NEED ITEM THREE" }
    ],
    breakdownItems: [
      { sign: "Numbers 1 - 5", description: "Palm facing inward or outward depending on context count.", tip: "Hold palm steady at chest level." }
    ],
    prompt: {
      partnerText: " How many students are in your practice group today?",
      partnerInstruction: "Respond with a count between 1 and 20.",
      learnerTask: "Sign: 'We are five students here.'",
      modelAnswer: "STUDENT WE FIVE"
    }
  },


  /* =========================================================
     A. MEETING SOMEONE
  ========================================================= */

  {
    id: "spelling-your-name",
    title: "Spelling Your Name",
    level: "Beginner",
    duration: "___",
    category: "A. Meeting Someone",
    canDoStatement: "I can fingerspell my own name.",
  },
  {
    id: "introducing-yourself",
    title: "Introducing Yourself",
    level: "Beginner",
    duration: "8 min",
    category: "A. Meeting Someone",
    canDoStatement: "I can introduce myself to a Deaf person and understand their basic introduction.",
    thumbnail: greetings,
    videoUrl: "https://www.youtube.com/watch?v=zmP1Ym-ayxA",
    dialogue: [
      { speaker: "Deaf Person", text: "Hello! What is your name?", ugslGloss: "HELLO | NAME YOU WHAT" },
      { speaker: "Learner (You)", text: "Hello! My name is Shadia. Nice to meet you.", ugslGloss: "HELLO | MY NAME S-H-A-D-I-A | NICE MEET YOU" }
    ],
    breakdownItems: [
      { sign: "Hello", description: "Open palm moving outward from mouth/temple area.", tip: "Maintain natural eye contact and a warm posture." },
      { sign: "My name is...", description: "Flat hand against chest, followed by index/middle finger tap for 'NAME'.", tip: "Fingerspell your name clearly after this sign." },
      { sign: "Nice to meet you", description: "Flat dominant hand sweeps across non-dominant palm, then bring both index fingers together.", tip: "Smile to indicate friendly greeting intent." }
    ],
    prompt: {
      partnerText: " Hello! What is your name?",
      partnerInstruction: "Watch the Deaf signer greet you and ask your name.",
      learnerTask: "Sign your response clearly: 'Hello, my name is [Your Name]. Nice to meet you.'",
      modelAnswer: "HELLO | MY NAME [NAME] | NICE MEET YOU"
    }
  },
  {
    id: "asking-someones-name",
    title: "Asking Someone's Name",
    level: "Beginner",
    duration: "___",
    category: "A. Meeting Someone",
    canDoStatement: "I can ask someone their name and understand their fingerspelled reply.",
  },
  {
    id: "greeting-at-different-times",
    title: "Greeting at Different Times of Day",
    level: "Beginner",
    duration: "___",
    category: "A. Meeting Someone",
    canDoStatement: "I can choose the right greeting sign depending on the time of day.",
  },


  /* =========================================================
     B. FAMILY & FRIENDS
  ========================================================= */

  {
    id: "talking-about-your-family",
    title: "Talking About Your Family",
    level: "Beginner",
    duration: "10 min",
    category: "B. Family & Friends",
    canDoStatement: "I can share basic details about my family members in a conversation.",
    thumbnail: family,
    videoUrl: "https://www.youtube.com/watch?v=01_2GVNFI1k",
    dialogue: [
      { speaker: "Deaf Person", text: "Do you have brothers or sisters?", ugslGloss: "BROTHER SISTER YOU HAVE?" },
      { speaker: "Learner (You)", text: "I have one brother and one sister.", ugslGloss: "MY FAMILY | BROTHER ONE | SISTER ONE" }
    ],
    breakdownItems: [
      { sign: "Mother / Father", description: "Thumb placement on chin for Mother; forehead for Father.", tip: "UgSL uses high/low facial anchor points for gender distinctions." },
      { sign: "Brother / Sister", description: "Gender sign followed by the 'SAME' sign index alignment.", tip: "Keep movements fluid." }
    ],
    prompt: {
      partnerText: "👥 Tell me about your family. Who is in your house?",
      partnerInstruction: "Listen to the prompt and state two family members you live with.",
      learnerTask: "Sign: 'My family has my mother and my brother.'",
      modelAnswer: "MY FAMILY | MOTHER | BROTHER HAVE"
    }
  },
  {
    id: "describing-people-you-know",
    title: "Describing People You Know",
    level: "Beginner",
    duration: "___",
    category: "B. Family & Friends",
    canDoStatement: "I can describe what a friend or relative looks like.",
  },
  {
    id: "inviting-a-friend-over",
    title: "Inviting a Friend Over",
    level: "Beginner",
    duration: "___",
    category: "B. Family & Friends",
    canDoStatement: "I can invite a friend over and agree on a day and time.",
  },
  {
    id: "making-weekend-plans",
    title: "Making Weekend Plans",
    level: "Beginner",
    duration: "___",
    category: "B. Family & Friends",
    canDoStatement: "I can plan a weekend activity and settle on when to meet.",
  },


  /* =========================================================
     C. EVERYDAY NEEDS
  ========================================================= */

  {
    id: "asking-for-prices",
    title: "Asking for Prices",
    level: "Beginner",
    duration: "___",
    category: "C. Everyday Needs",
    canDoStatement: "I can ask how much something costs and understand the answer.",
  },
  {
    id: "telling-the-time",
    title: "Telling the Time",
    level: "Beginner",
    duration: "___",
    category: "C. Everyday Needs",
    canDoStatement: "I can ask for and tell the time.",
  },
  {
    id: "talking-about-the-weather",
    title: "Talking About the Weather",
    level: "Beginner",
    duration: "___",
    category: "C. Everyday Needs",
    canDoStatement: "I can comment on the weather and ask what it's like elsewhere.",
  },
  {
    id: "ordering-food",
    title: "Ordering Food",
    level: "Beginner",
    duration: "___",
    category: "C. Everyday Needs",
    canDoStatement: "I can order a meal and answer questions about my order.",
  },
  {
    id: "shopping-for-clothes",
    title: "Shopping for Clothes",
    level: "Beginner",
    duration: "___",
    category: "C. Everyday Needs",
    canDoStatement: "I can ask for a different size or color while shopping.",
  },


  /* =========================================================
     D. GETTING HELP IN PUBLIC
  ========================================================= */

  {
    id: "asking-for-directions",
    title: "Asking for Directions",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can ask for directions and follow them.",
  },
  {
    id: "at-the-pharmacy",
    title: "At the Pharmacy",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can explain what I need at a pharmacy.",
  },
  {
    id: "at-the-hospital",
    title: "At the Hospital",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can describe how I'm feeling to a nurse or doctor.",
  },
  {
    id: "talking-to-the-police",
    title: "Talking to the Police",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can explain a situation clearly to a police officer.",
  },
  {
    id: "at-the-bank",
    title: "At the Bank",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can explain what I need at the bank.",
  },
  {
    id: "emergency-communication",
    title: "Emergency Communication",
    level: "Beginner",
    duration: "___",
    category: "D. Getting Help in Public",
    canDoStatement: "I can signal for help and explain what's wrong quickly.",
  },


  /* =========================================================
     E. SCHOOL & WORK
  ========================================================= */

  {
    id: "talking-about-your-job",
    title: "Talking About Your Job",
    level: "Beginner",
    duration: "___",
    category: "E. School & Work",
    canDoStatement: "I can tell someone what I do for work.",
  },
  {
    id: "at-school",
    title: "At School",
    level: "Beginner",
    duration: "___",
    category: "E. School & Work",
    canDoStatement: "I can talk about my class, teacher, or subject.",
  },
  {
    id: "describing-your-daily-routine",
    title: "Describing Your Daily Routine",
    level: "Beginner",
    duration: "___",
    category: "E. School & Work",
    canDoStatement: "I can describe my daily routine.",
  },


  /* =========================================================
     F. GRAMMAR IN CONTEXT
  ========================================================= */

  {
    id: "asking-questions",
    title: "Asking Questions (WH & Yes/No)",
    level: "Beginner",
    duration: "___",
    category: "F. Grammar in Context",
    canDoStatement: "I can ask questions and recognize when I'm being asked one.",
  },
  {
    id: "saying-no",
    title: "Saying No & Disagreeing",
    level: "Beginner",
    duration: "___",
    category: "F. Grammar in Context",
    canDoStatement: "I can politely disagree or turn down a request.",
  },
  {
    id: "using-facial-expressions",
    title: "Using Facial Expressions",
    level: "Beginner",
    duration: "___",
    category: "F. Grammar in Context",
    canDoStatement: "I can use facial expressions to make my meaning clear.",
  },
  {
    id: "using-eye-gaze",
    title: "Using Eye Gaze in Conversation",
    level: "Beginner",
    duration: "___",
    category: "F. Grammar in Context",
    canDoStatement: "I can use eye gaze to show who or what I'm referring to.",
  },


  /* =========================================================
     G. DEAF CULTURE
  ========================================================= */

  {
    id: "intro-to-deaf-culture",
    title: "Introduction to Deaf Culture",
    level: "Beginner",
    duration: "___",
    category: "G. Deaf Culture",
    canDoStatement: "I can explain the basics of Deaf culture.",
  },
  {
    id: "respectful-communication",
    title: "Respectful Communication",
    level: "Beginner",
    duration: "___",
    category: "G. Deaf Culture",
    canDoStatement: "I can communicate respectfully with a Deaf person.",
  },
  {
    id: "deaf-etiquette",
    title: "Deaf Etiquette",
    level: "Beginner",
    duration: "___",
    category: "G. Deaf Culture",
    canDoStatement: "I can respectfully get someone's attention using proper etiquette.",
  },
  {
    id: "inclusion",
    title: "Inclusion",
    level: "Beginner",
    duration: "___",
    category: "G. Deaf Culture",
    canDoStatement: "I can recognize ways to make a Deaf person feel included.",
  },

];