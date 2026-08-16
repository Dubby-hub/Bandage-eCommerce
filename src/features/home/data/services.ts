import type { IconName } from "../../../components/Icon/Icon";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    id: "easy-wins",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
    icon: "open-book",
  },
  {
    id: "concrete",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
    icon: "textbook",
  },
  {
    id: "hack-growth",
    title: "Hack Growth",
    description: "Overcome any hurdle on any or other problem.",
    icon: "growth",
  },
];
