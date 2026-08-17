import greetings from "../assets/greetings.jpg";
import family from "../assets/family.jpg";
import numbers from "../assets/numbers.jpg";

export const LESSONS = [
  {
    id: "greetings",
    title: "Greetings",
    level: "Beginner",
    duration: "8 min",
    description: "Learn common greetings",
    thumbnail: greetings,
    signs: ["Hello", "Good morning", "How are you", "Goodbye"],
    phrases: ["How are you?", "Nice to meet you"],
  },
  {
    id: "family",
    title: "Family",
    level: "Beginner",
    duration: "10 min",
    description: "Signs about family members",
    thumbnail: family,
    signs: ["Mother", "Father", "Sister", "Brother", "Family"],
    phrases: ["This is my family"],
  },
  {
    id: "numbers",
    title: "Numbers",
    level: "Beginner",
    duration: "12 min",
    description: "Learn numbers 1 - 20",
    thumbnail: numbers,
    signs: ["One", "Two", "Three", "Ten", "Twenty"],
    phrases: ["I am one of twenty students"],
  },
];