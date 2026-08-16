export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface TestimonialImage {
  id: string;
  image: string;
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Regina Miles",
    role: "Designer",
    review:
      "This is the best product I have used. The experience was excellent and the quality exceeded my expectations.",
    rating: 5,
    image: "/images/testimonials/regina-miles.png",
  },
];

export const testimonialImages: TestimonialImage[] = [
  {
    id: "gallery-1",
    image: "/images/testimonials/gallery-1.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-2",
    image: "/images/testimonials/gallery-2.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-3",
    image: "/images/testimonials/gallery-3.png",
    alt: "Featured gallery image3",
  },
  {
    id: "gallery-4",
    image: "/images/testimonials/gallery-4.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-5",
    image: "/images/testimonials/gallery-5.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-6",
    image: "/images/testimonials/gallery-6.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-7",
    image: "/images/testimonials/gallery-7.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-8",
    image: "/images/testimonials/gallery-8.png",
    alt: "Featured gallery image",
  },
  {
    id: "gallery-9",
    image: "/images/testimonials/gallery-9.png",
    alt: "Featured gallery image",
  },
];
