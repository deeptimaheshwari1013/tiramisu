export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  emoji: string;
  thumbnailColor: string;
};

export const posts: Post[] = [
  {
    slug: "what-pointers-actually-are",
    title: "What pointers actually are — and why I spent 3 hours on one bug",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "cs notes",
    excerpt:
      "I kept getting a segmentation fault I couldn't explain. Turns out I'd been misunderstanding how stack memory works this whole time. Here's what finally made it click for me.",
    emoji: "💻",
    thumbnailColor: "#e8ddd3",
  },
  {
    slug: "end-of-semester-chaos",
    title: "End of semester chaos, chai breaks, and a surprisingly good hackathon",
    date: "April 18, 2026",
    readTime: "4 min read",
    category: "college life",
    excerpt:
      "Three all-nighters, one project I'm actually proud of, and the most chaotic week of my second year. Also: I tried making chai from scratch and it was okay.",
    emoji: "👾",
    thumbnailColor: "#dde8e0",
  },
  {
    slug: "attention-mechanisms",
    title: "I read 3 papers on attention mechanisms so you don't have to",
    date: "April 14, 2026",
    readTime: "8 min read",
    category: "research",
    excerpt:
      "Started with \"Attention is All You Need\" and ended up in a rabbit hole. Here's my plain-English summary of what transformers are actually doing under the hood.",
    emoji: "📚",
    thumbnailColor: "#e0e8dd",
  },
  {
    slug: "week-in-fragments",
    title: "Tuesday was slow. Wednesday wasn't. A week in fragments.",
    date: "April 10, 2026",
    readTime: "3 min read",
    category: "daily log",
    excerpt:
      "Some weeks don't have a theme. This one had deadlines, one really good conversation, a cancelled class I was weirdly sad about, and too much chai.",
    emoji: "☕",
    thumbnailColor: "#ede8e0",
  },
  {
    slug: "graph-traversal",
    title: "Graph traversal finally clicked — here's the mental model that helped",
    date: "April 6, 2026",
    readTime: "6 min read",
    category: "cs notes",
    excerpt:
      "BFS and DFS always felt the same to me until I drew them out on paper. Turns out visualizing the queue vs stack is the whole key.",
    emoji: "🗂️",
    thumbnailColor: "#e8e4d8",
  },
];

export const latestPost = posts[0];
export const recentPosts = posts.slice(1);
