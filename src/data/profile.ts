/**
 * Verified professional information only.
 * Do not add roles, projects, technologies, dates, or metrics unless confirmed.
 */
export const profile = {
  name: "Bhaskar Keelu",
  headlineRole: "Technology Lead",
  yearsOfExperienceLabel: "8+ years",
  mobile: "8885486832",
  coreTechnologies: [
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "AWS",
    "MongoDB",
    "REST APIs",
    "Docker",
  ],
} as const;

export const site = {
  title: `${profile.name} — Professional IT Portfolio`,
  description: `${profile.name}, ${profile.headlineRole} with ${profile.yearsOfExperienceLabel} of experience in Node.js, TypeScript, React, AWS, and full-stack development.`,
} as const;

export const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const upcomingSections = [
  {
    id: "about",
    title: "About",
    summary: "A concise professional summary will be added from verified information.",
  },
  {
    id: "experience",
    title: "Experience",
    summary:
      "Role history will be added from verified titles, employers, and dates only.",
  },
  {
    id: "projects",
    title: "Projects",
    summary:
      "Selected work will be described from verified project facts, without confidential details.",
  },
  {
    id: "skills",
    title: "Skills",
    summary: "A structured skills section will be built from the verified technology list.",
  },
  {
    id: "contact",
    title: "Contact",
    summary: "Additional contact options will be added when a public email or profile URL is provided.",
  },
] as const;
