export interface FooterColumn {
  title: string;
  links: string[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Company Info",
    links: ["About Us", "Career", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Career", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytics",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
  },
];
