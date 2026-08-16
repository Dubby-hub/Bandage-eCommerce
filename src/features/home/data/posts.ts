export interface Post {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  comments: number;
  date: string;
}

export const posts: Post[] = [
  {
    id: "post-1",
    category: "English Department",
    title: "Graphic Design",
    description: "We focus on ergonomics and meeting you where you work.",
    image: "/images/posts/post-1.png",
    comments: 10,
    date: "22 April 2026",
  },
  {
    id: "post-2",
    category: "English Department",
    title: "Graphic Design",
    description: "We focus on ergonomics and meeting you where you work.",
    image: "/images/posts/post-2.png",
    comments: 10,
    date: "22 April 2026",
  },
  {
    id: "post-3",
    category: "English Department",
    title: "Graphic Design",
    description: "We focus on ergonomics and meeting you where you work.",
    image: "/images/posts/post-3.png",
    comments: 10,
    date: "22 April 2026",
  },
];
