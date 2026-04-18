// Shared lecture data for both Learn and LectureDetail components.
//
// Schema:
//   id           stable key (number for progression, string like 'add-1' for additional)
//   title        display title (do not prefix "Lesson N" — derived from array order)
//   description  short blurb
//   slidesPath   optional — URL to reveal.js deck. Presence of this = "published".
//   notesPath    optional — URL to markdown notes file.
//   youtubeLink  optional — YouTube URL. Only present if a recording exists.
//   instructor   optional — only shown when youtubeLink is present.

export const lectureProgression = [
  {
    id: 1,
    title: "How to Play Texas Hold'em",
    description: "Rules, game flow, and the math behind hand rankings",
    slidesPath: "/slides/poker-basics.html",
    notesPath: "/lecture-notes/1-how-to-play.md",
    youtubeLink: "https://youtu.be/5roo2xOsrJg?si=DM_flyTTsFIEb6fa",
    instructor: "David Eyal"
  },
  {
    id: 2,
    title: "Basic Strategy",
    description: "Hand selection, positional awareness, bet sizing, and common mistakes",
    slidesPath: "/slides/lesson-2-basic-strategy.html",
    notesPath: "/lecture-notes/2-basic-strategy.md"
  },
  {
    id: 3,
    title: "Positions, Ranges, Pot Odds & Equity",
    description: "How position shapes ranges, and the math that decides calls",
    slidesPath: "/slides/lesson-3-positions-ranges-equity.html",
    notesPath: "/lecture-notes/3-positions-ranges-equity.md",
    youtubeLink: "https://youtube.com/watch?v=example2",
    instructor: "Jonah Aden"
  },
  {
    id: 4,
    title: "Lesson 4",
    description: "Coming soon"
  },
  {
    id: 5,
    title: "Lesson 5",
    description: "Coming soon"
  },
  {
    id: 6,
    title: "Lesson 6",
    description: "Coming soon"
  },
  {
    id: 7,
    title: "Lesson 7",
    description: "Coming soon"
  }
];

export const additionalLectures = [
  {
    id: 'add-1',
    title: "How to Play Tournament Poker",
    description: "Tournament-specific strategies, structure, and gameplay differences",
    youtubeLink: "https://youtu.be/KCCoB3suWNM?si=yUXLVV28UkJqsNMQ",
    instructor: "Andrew Fahey"
  }
];

export const isPublished = (lecture) => Boolean(lecture.slidesPath);

export const getAllLectures = () => [...lectureProgression, ...additionalLectures];

export const findLectureById = (id) => {
  const allLectures = getAllLectures();
  return allLectures.find(l => l.id.toString() === id);
};
