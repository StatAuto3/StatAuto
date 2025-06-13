export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "StatAuto",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "New Pilote",
      href: "/newpilote"
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    },
  ],
  auth: {
    login: {
      label: "Login",
      href: "/login",
    },
    register: {
      label: "Register",
      href: "/register",
      color: 'primary',
    }
  },
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
