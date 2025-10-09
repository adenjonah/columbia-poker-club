// Shared lecture data for both Learn and LectureDetail components

export const lectureProgression = [
  {
    id: 1,
    title: "1. How to Play Texas Hold'em",
    description: "Basic rules, hand rankings, and fundamental gameplay mechanics",
    date: "2025-02-28",
    instructor: "David Eyal",
    status: "completed",
    youtubeLink: "https://youtu.be/5roo2xOsrJg?si=DM_flyTTsFIEb6fa",
    notesLink: "/notes/texas-holdem-basics"
  },
  {
    id: 2,
    title: "2. Positions, Ranges, and Mathematical Concepts",
    description: "Positions, ranges, GTO vs exploitative play, equity, and pot odds",
    date: "2025-10-5",
    instructor: "Jonah Aden",
    status: "completed",
    youtubeLink: "https://youtube.com/watch?v=example2",
    notesLink: "/notes/positions-ranges-math"
  },
  {
    id: 3,
    title: "TBD",
    description: "Topic to be determined",
    date: "2025-10-26",
    instructor: "TBD",
    status: "upcoming",
    youtubeLink: null,
    notesLink: null
  },
  {
    id: 4,
    title: "TBD",
    description: "Topic to be determined",
    date: "2025-11-9",
    instructor: "TBD",
    status: "upcoming",
    youtubeLink: null,
    notesLink: null
  },
  {
    id: 5,
    title: "TBD",
    description: "Topic to be determined",
    date: "2025-11-16",
    instructor: "TBD",
    status: "upcoming",
    youtubeLink: null,
    notesLink: null
  },
  {
    id: 6,
    title: "TBD",
    description: "Topic to be determined",
    date: "2024-12-07",
    instructor: "TBD",
    status: "upcoming",
    youtubeLink: null,
    notesLink: null
  },
  {
    id: 7,
    title: "TBD",
    description: "Topic to be determined",
    date: "2024-12-08",
    instructor: "TBD",
    status: "upcoming",
    youtubeLink: null,
    notesLink: null
  }
];

export const additionalLectures = [
  {
    id: 'add-1',
    title: "How to Play Tournament Poker",
    description: "Tournament-specific strategies, structure, and gameplay differences",
    date: "2025-3-02",
    instructor: "Andrew Fahey",
    status: "completed",
    youtubeLink: "https://youtu.be/KCCoB3suWNM?si=yUXLVV28UkJqsNMQ",
    notesLink: null
  }
];

// Helper function to get all lectures
export const getAllLectures = () => [...lectureProgression, ...additionalLectures];

// Helper function to find a lecture by ID
export const findLectureById = (id) => {
  const allLectures = getAllLectures();
  return allLectures.find(l => l.id.toString() === id);
};
