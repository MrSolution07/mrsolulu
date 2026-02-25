export const articles = [
  {
    year: 2024,
    posts: [
      {
        id: "001",
        emoji: "🚀",
        title: "Starting...",
        description: "Describing my purpose and goals for this blog.",
        readTime: "2 min read",
        link: "/blog/001-starting",
        active: true,
        date: "Feb 3, 2024",
        dateTime: "2024-02-03",
        tags: ["Blog", "Goals"],
      },
    ],
  },
  {
    year: 2025,
    posts: [
      {
        id: "002",
        emoji: "🎯",
        title: "First contact with code",
        description:
          "My first steps into OOP ",
        readTime: "1 min read",
        link: "/blog/002",
        active: true,
        date: "Mar 3, 2025",
        dateTime: "2025-03-03",
        tags: ["Programming", "OOP"],
      },
      {
        id: "003",
        emoji: "💻",
        title: "How I really chose Programming",
        description: "My first steps into coding.",
        readTime: "4 min read",
        link: "/blog/003",
        active: true,
        date: "Jan 3, 2025",
        dateTime: "2025-01-03",
        tags: ["Programming", "Career"],
      },
      {
        id: "004",
        emoji: "💻",
        title: "What is coding ?",
        description: "",
        readTime: "4 min read",
        link: "/blog/004",
        active: true,
        date: "Mar 3, 2025",
        dateTime: "2025-03-03",
        tags: ["Programming", "Basics"],
      },
    ]
  },
  {
    year: 2026,
    posts: [
      {
        id: "005",
        emoji: "🤔",
        title: "Are We Ready to Become Dumb?",
        description: "",
        readTime: "4 min read",
        link: "/blog/005",
        active: true,
        date: "Feb 17, 2026",
        dateTime: "2026-02-17",
        tags: ["AI", "Learning", "Philosophy"],
      },
    ]
  }
];

/** Get a single post by its link path (e.g. "/blog/002") */
export function getPostByLink(link) {
  for (const group of articles) {
    const post = group.posts.find((p) => p.link === link);
    if (post) return post;
  }
  return null;
}
