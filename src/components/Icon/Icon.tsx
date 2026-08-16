import type { ReactNode, SVGProps } from "react";
import "./Icon.css";

export type IconName =
  | "search"
  | "cart"
  | "heart"
  | "user"
  | "menu"
  | "phone"
  | "email"
  | "instagram"
  | "youtube"
  | "facebook"
  | "twitter"
  | "close"
  | "share"
  | "star"
  | "open-book"
  | "growth"
  | "textbook";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const iconPaths: Record<IconName, ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),

    cart: (
      <>
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),

    heart: (
      <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 8 4a5.2 5.2 0 0 1 4 2.1A5.2 5.2 0 0 1 16 4a4.8 4.8 0 0 1 4.8 4.8Z" />
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),

    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),

    phone: (
      <path d="M6.6 3.5 9 3l2 5-2.2 1.5a14 14 0 0 0 5.7 5.7L16 13l5 2 .5 2.4A3 3 0 0 1 18.6 21C10 20.4 3.6 14 3 5.4A3 3 0 0 1 6.6 3.5Z" />
    ),

    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),

    facebook: (
      <path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.4-.1-1.5-.2-2.7-.2-2.7 0-4.5 1.7-4.5 4.7V10H8v3h2.8v8H14Z" />
    ),

    twitter: (
      <path d="M19.8 7.2v.5c0 5.2-4 11.1-11.1 11.1-2.2 0-4.2-.6-5.9-1.7h.9c1.8 0 3.5-.6 4.8-1.6a3.9 3.9 0 0 1-3.6-2.7c.6.1 1.2.1 1.8-.1a3.9 3.9 0 0 1-3.1-3.8v-.1c.5.3 1.1.5 1.8.5A3.9 3.9 0 0 1 4.9 4c2 2.4 5 4 8.4 4.2-.1-.3-.1-.6-.1-.9A3.9 3.9 0 0 1 20 4.7a7.7 7.7 0 0 0 2.5-1 3.9 3.9 0 0 1-1.7 2.2 7.8 7.8 0 0 0 2.2-.6 8.2 8.2 0 0 1-2 1.9Z" />
    ),

    youtube: (
      <>
        <path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-3.8 26 26 0 0 0-.4-3.8Z" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </>
    ),

    share: (
      <>
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 11 8-5" />
        <path d="m8 13 8 5" />
      </>
    ),
    "open-book": (
      <>
        {/* Reader's head */}
        <circle cx="12" cy="4.5" r="1.5" fill="currentColor" stroke="none" />

        {/* Left side of open book */}
        <path
          d="M12 9.5C10.2 7.8 7.5 7 4 7v11c3.5 0 6.2.8 8 2.5"
          fill="currentColor"
        />

        {/* Right side of open book */}
        <path
          d="M12 9.5C13.8 7.8 16.5 7 20 7v11c-3.5 0-6.2.8-8 2.5"
          fill="currentColor"
        />

        {/* Center of the book */}
        <path d="M12 9.5v11" />
      </>
    ),

    growth: (
      <>
        <path d="M4 19 10 13l4 4 6-8" />
        <path d="M15 9h5v5" />
      </>
    ),

    textbook: (
      <>
        {/* Left page */}
        <path d="M12 5.5C10.2 4.2 7.6 3.5 4 3.5v15c3.6 0 6.2.7 8 2" />

        {/* Right page */}
        <path d="M12 5.5C13.8 4.2 16.4 3.5 20 3.5v15c-3.6 0-6.2.7-8 2" />

        {/* Center spine */}
        <path d="M12 5.5v15" />

        {/* Left page text */}
        <path d="M6 7.5h3.5" />
        <path d="M6 10h3.5" />
        <path d="M6 12.5h3.5" />
        <path d="M6 15h3.5" />

        {/* Right page text */}
        <path d="M14.5 7.5H18" />
        <path d="M14.5 10H18" />
        <path d="M14.5 12.5H18" />
        <path d="M14.5 15H18" />
      </>
    ),

    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),

    close: (
      <>
        <path d="m5 5 14 14" />
        <path d="m19 5-14 14" />
      </>
    ),
  };

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}

export default Icon;
