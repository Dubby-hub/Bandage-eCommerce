export interface Category {
  id: string;
  title: string;
  image: string;
  size: "large" | "medium" | "small";
}

export const categories: Category[] = [
  {
    id: "furniture-main",
    title: "Furniture",
    image: "/images/categories/furniture-main.png",
    size: "large",
  },
  {
    id: "furniture-wide",
    title: "Furniture",
    image: "/images/categories/furniture-wide.png",
    size: "medium",
  },
  {
    id: "furniture-small-1",
    title: "Furniture",
    image: "/images/categories/furniture-small-1.png",
    size: "small",
  },
  {
    id: "furniture-small-2",
    title: "Furniture",
    image: "/images/categories/furniture-small-2.png",
    size: "small",
  },
];
