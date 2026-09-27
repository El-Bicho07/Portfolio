export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Protosem", href: "/protosem" },
  { label: "IoT", href: "/iot" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:Suryakumar2007jsk@gmail.com",
    iconName: "Mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suryakumar-jayakumar-68214432a",
    iconName: "Linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/El-Bicho07",
    iconName: "Github",
  },
];
