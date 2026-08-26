import greetings from "../assets/greetings.jpg";
import family from "../assets/family.jpg";
import numbers from "../assets/numbers.jpg";

export const LESSONS = [
  {
    id: "greetings",
    title: "Introducing Yourself",
    level: "Beginner",
    duration: "8 min",
    category: "Meeting Someone",
    canDoStatement: "I can introduce myself to a Deaf person and understand their basic introduction.",
    thumbnail: greetings,
    
    // 1. Full Real-Life Dialogue Scenario
    dialogue: [
      { speaker: "Deaf Person", text: "Hello! What is your name?", ugslGloss: "HELLO | NAME YOU WHAT" },
      { speaker: "Learner (You)", text: "Hello! My name is Shadia. Nice to meet you.", ugslGloss: "HELLO | MY NAME S-H-A-D-I-A | NICE MEET YOU" }
    ],

    // 2. Vocabulary & Phrase Breakdown
    breakdownItems: [
      { sign: "Hello", description: "Open palm moving outward from mouth/temple area.", tip: "Maintain natural eye contact and a warm posture." },
      { sign: "My name is...", description: "Flat hand against chest, followed by index/middle finger tap for 'NAME'.", tip: "Fingerspell your name clearly after this sign." },
      { sign: "Nice to meet you", description: "Flat dominant hand sweeps across non-dominant palm, then bring both index fingers together.", tip: "Smile to indicate friendly greeting intent." }
    ],

    // 3 & 4. Interactive Turn-Taking Challenge
    prompt: {
      partnerText: " Hello! What is your name?",
      partnerInstruction: "Watch the Deaf signer greet you and ask your name.",
      learnerTask: "Sign your response clearly: 'Hello, my name is [Your Name]. Nice to meet you.'",
      modelAnswer: "HELLO | MY NAME [NAME] | NICE MEET YOU"
    }
  },
  {
    id: "family",
    title: "Talking About Your Family",
    level: "Beginner",
    duration: "10 min",
    category: "Family & Friends",
    canDoStatement: "I can share basic details about my family members in a conversation.",
    thumbnail: family,
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
    id: "numbers",
    title: "Numbers in Daily Life",
    level: "Beginner",
    duration: "12 min",
    category: "Everyday Needs",
    canDoStatement: "I can express amounts, quantities, and simple counts during a conversation.",
    thumbnail: numbers,
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
  }
];