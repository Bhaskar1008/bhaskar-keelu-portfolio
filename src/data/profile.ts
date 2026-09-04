/**
 * Verified professional information only.
 * Do not add roles, projects, technologies, dates, or metrics unless confirmed.
 */
export const profile = {
  name: "Bhaskar Keelu",
  headlineRole: "Technology Lead",
  positioning: "Technology Lead / Full Stack Engineer",
  yearsOfExperienceLabel: "8+ years",
  mobile: "8885486832",
  email: "bhaskarkeelu.92@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/bhaskar-keelu-b7a209138",
    github: "https://github.com/BhaskarKeelu1008",
  },
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

export const about = {
  title: "About Me",
  paragraphs: [
    `I am a ${profile.positioning} with ${profile.yearsOfExperienceLabel} of experience building and leading software solutions. My work covers backend engineering, full-stack development, AWS and cloud architecture, enterprise platforms, API development, and technical leadership.`,
    "I have contributed to large-scale insurance technology platforms, including Renewal Vault and its AWS-based policy renewal workflows, and the iCare platform — specifically agent onboarding and franchise recruitment workflows. I also build backend and API services with Node.js and cloud-based systems on AWS.",
    "My leadership practice includes technical leadership, sprint planning, code reviews, testing, observability, quality, security, and technical debt management, along with AI-enabled coding and modern engineering practices.",
  ],
  strengths: [
    "Full Stack Development",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "AWS",
    "REST APIs",
    "Microservices Architecture",
    "Enterprise Platforms",
    "Technical Leadership",
  ],
} as const;

export const contact = {
  title: "Let's Connect",
  intro:
    "I am open to conversations about technology leadership, full-stack engineering, and enterprise platform work.",
  channels: [
    {
      id: "email",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/bhaskar-keelu-b7a209138",
      href: profile.links.linkedin,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/BhaskarKeelu1008",
      href: profile.links.github,
      external: true,
    },
  ],
} as const;

export type SkillEmphasis = "primary" | "secondary";

export type Skill = {
  name: string;
  emphasis: SkillEmphasis;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: readonly Skill[];
};

export const skillsIntro =
  "Technical expertise spanning full-stack engineering, cloud platforms, enterprise architecture, and technical leadership, with a strong focus on Node.js, AWS, and enterprise applications.";

export const coreExpertise = [
  "Node.js",
  "AWS",
  "Full Stack",
  "React",
  "TypeScript",
  "Enterprise Platforms",
  "Cloud Architecture",
  "Technical Leadership",
] as const;

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Node.js", emphasis: "primary" },
      { name: "TypeScript", emphasis: "primary" },
      { name: "JavaScript", emphasis: "primary" },
      { name: "Python", emphasis: "secondary" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", emphasis: "primary" },
      { name: "HTML5", emphasis: "secondary" },
      { name: "CSS3", emphasis: "secondary" },
      { name: "Mowbly", emphasis: "secondary" },
      { name: "Juci", emphasis: "secondary" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", emphasis: "primary" },
      { name: "REST APIs", emphasis: "primary" },
      { name: "Express", emphasis: "secondary" },
      { name: "Microservices Architecture", emphasis: "secondary" },
      { name: "JWT", emphasis: "secondary" },
      { name: "Authentication & Authorization", emphasis: "secondary" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & AWS",
    skills: [
      { name: "AWS", emphasis: "primary" },
      { name: "AWS Lambda", emphasis: "secondary" },
      { name: "AWS Step Functions", emphasis: "secondary" },
      { name: "AWS Glue", emphasis: "secondary" },
      { name: "AWS API Gateway", emphasis: "secondary" },
      { name: "AWS S3", emphasis: "secondary" },
      { name: "AWS SNS", emphasis: "secondary" },
      { name: "AWS SQS", emphasis: "secondary" },
      { name: "AWS CloudWatch", emphasis: "secondary" },
      { name: "AWS CloudTrail", emphasis: "secondary" },
      { name: "AWS Cognito", emphasis: "secondary" },
      { name: "AWS IAM", emphasis: "secondary" },
      { name: "AWS EC2", emphasis: "secondary" },
      { name: "AWS ECS", emphasis: "secondary" },
      { name: "AWS EventBridge", emphasis: "secondary" },
      { name: "AWS CloudFormation", emphasis: "secondary" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", emphasis: "primary" },
      { name: "DynamoDB", emphasis: "secondary" },
      { name: "Oracle", emphasis: "secondary" },
      { name: "SQL Server", emphasis: "secondary" },
      { name: "SQLite", emphasis: "secondary" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Engineering",
    skills: [
      { name: "Docker", emphasis: "secondary" },
      { name: "CI/CD", emphasis: "secondary" },
      { name: "SonarQube", emphasis: "secondary" },
      { name: "Git", emphasis: "secondary" },
      { name: "Kustomize", emphasis: "secondary" },
      { name: "Planton/Tekton", emphasis: "secondary" },
      { name: "ESLint", emphasis: "secondary" },
      { name: "Prettier", emphasis: "secondary" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    skills: [
      { name: "Jest", emphasis: "secondary" },
      { name: "Supertest", emphasis: "secondary" },
      { name: "Vitest", emphasis: "secondary" },
      { name: "Testing Library", emphasis: "secondary" },
      { name: "MSW", emphasis: "secondary" },
      { name: "Unit Testing", emphasis: "secondary" },
      { name: "Integration Testing", emphasis: "secondary" },
    ],
  },
  {
    id: "architecture-leadership",
    title: "Architecture & Leadership",
    skills: [
      { name: "Full Stack Development", emphasis: "primary" },
      { name: "Cloud Architecture", emphasis: "primary" },
      { name: "Enterprise Application Development", emphasis: "primary" },
      { name: "REST API Design", emphasis: "secondary" },
      { name: "Microservices Architecture", emphasis: "secondary" },
      { name: "Technical Architecture", emphasis: "secondary" },
      { name: "System Design", emphasis: "secondary" },
      { name: "Technical Debt Management", emphasis: "secondary" },
      { name: "Code Quality", emphasis: "secondary" },
      { name: "Security by Design", emphasis: "secondary" },
      { name: "Observability", emphasis: "secondary" },
      { name: "Technical Leadership", emphasis: "secondary" },
      { name: "Team Leadership", emphasis: "secondary" },
      { name: "Architecture & Design Discussions", emphasis: "secondary" },
      { name: "Requirement Analysis", emphasis: "secondary" },
      { name: "Sprint Planning", emphasis: "secondary" },
      { name: "Delivery Management", emphasis: "secondary" },
      { name: "Mentoring", emphasis: "secondary" },
      { name: "Cross-functional Collaboration", emphasis: "secondary" },
      { name: "Debugging", emphasis: "secondary" },
      { name: "Problem Solving", emphasis: "secondary" },
    ],
  },
];
