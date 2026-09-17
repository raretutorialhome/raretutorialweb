export const siteConfig = {
  name: "RARE Tutorial",
  shortName: "RARE",
  founded: 1988,
  tagline: "Empowering Students to Perform Better Since 1988",
  description:
    "RARE Tutorial has helped students in Kolkata learn with confidence since 1988, through patient teaching, personal attention and strong academic concepts — offline, online and hybrid.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.raretutorial.example",
  locale: "en_IN",
  meaning: {
    acronym: "RARE",
    expansion: "Ruma Aunty's Realm of Education",
  },
} as const;

export const brandColors = {
  primary: "#134A78",
  primaryDark: "#0F2E48",
  primaryDarker: "#0A2338",
  gold: "#D9A431",
  goldDark: "#8A6015",
  cream: "#F6F1E6",
  border: "#E9E2D0",
} as const;
