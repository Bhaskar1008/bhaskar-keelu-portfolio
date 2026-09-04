/**
 * Verified career history only.
 * Do not add responsibilities, metrics, technologies, or ownership claims unless confirmed.
 */
export type ExperienceStatus = "upcoming" | "completed";

export type ExperienceDetailLevel = "upcoming" | "full" | "standard" | "compact";

export type ExperienceProject = {
  name: string;
  role?: string;
  technologies: readonly string[];
  highlights: readonly string[];
  defaultExpanded: boolean;
  statusNote?: string;
  architectureNote?: string;
};

export type ExperienceRole = {
  id: string;
  company: string;
  position: string;
  location?: string;
  dateDisplay: string;
  status: ExperienceStatus;
  statusLabel?: string;
  detailLevel: ExperienceDetailLevel;
  projects: readonly ExperienceProject[];
};

export const careerProgression = [
  { id: "software-engineer", label: "Software Engineer" },
  { id: "team-lead", label: "Team Lead" },
  { id: "technology-lead", label: "Technology Lead" },
  {
    id: "senior-product-engineer",
    label: "Senior Product Engineer – 3",
    upcoming: true,
  },
] as const;

export const experienceIntro =
  "Career history from software engineering through technical leadership, with an upcoming Senior Product Engineer – 3 role.";

export const experience: readonly ExperienceRole[] = [
  {
    id: "compiq",
    company: "CompIQ AI Ventures Pvt. Ltd. (CompIQ)",
    position: "Senior Product Engineer – 3",
    dateDisplay: "Joining 9 September 2026",
    status: "upcoming",
    statusLabel: "Upcoming",
    detailLevel: "upcoming",
    projects: [],
  },
  {
    id: "iorta-technxt",
    company: "Iorta TechNXT Sdn Bhd",
    position: "Technology Lead",
    location: "Chennai, India",
    dateDisplay: "May 2025 – 9 September 2026",
    status: "completed",
    detailLevel: "full",
    projects: [
      {
        name: "Salesverse Product Development",
        role: "Backend Developer",
        technologies: ["Node.js", "Express", "REST APIs", "SonarQube", "MongoDB"],
        defaultExpanded: true,
        highlights: [
          "Developed Node.js APIs supporting lead management and backend workflows.",
          "Enhanced SonarQube code coverage.",
          "Broke down requirements, estimated effort, prioritized tasks, and supported sprint execution/releases.",
          "Used AI-enabled coding practices to improve productivity.",
          "Worked with frontend and QA teams to deliver OOTB features to production.",
        ],
      },
      {
        name: "iCare Platform",
        role: "Full Stack Developer",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "TypeScript",
          "JavaScript",
          "REST APIs",
          "MongoDB",
          "AWS",
        ],
        defaultExpanded: true,
        statusNote: "Completed and live in production.",
        architectureNote:
          "Modular monolith. Application and Admin are separate applications.",
        highlights: [
          "Designed and developed agent onboarding workflows.",
          "Designed and developed franchise recruitment modules.",
          "Implemented new OOTB features across multiple modules.",
          "Deployed features to UAT.",
        ],
      },
    ],
  },
  {
    id: "iorta-technology",
    company: "Iorta Technology Pvt. Ltd.",
    position: "Technology Lead",
    location: "Hyderabad, India",
    dateDisplay: "August 2019 – April 2025",
    status: "completed",
    detailLevel: "standard",
    projects: [
      {
        name: "Renewal Vault",
        role: "Tech Lead",
        technologies: [
          "Node.js",
          "AWS Step Functions",
          "Lambda",
          "Glue",
          "Cognito",
          "API Gateway",
          "S3",
          "SNS",
          "SQS",
          "CloudWatch",
        ],
        defaultExpanded: true,
        highlights: [
          "Designed and implemented policy renewal workflows using Step Functions and Glue ETL.",
          "Built microservice APIs.",
          "Managed authentication and authorization using AWS Cognito.",
          "Designed auditing dashboards for logs and process monitoring.",
          "Pipeline processed lakhs of policy renewals.",
        ],
      },
      {
        name: "InstaLife Sale",
        role: "Lead Developer",
        technologies: [
          "JavaScript",
          "Node.js",
          "HTML5",
          "CSS3",
          "Mowbly",
          "Oracle DB",
        ],
        defaultExpanded: false,
        highlights: [
          "Integrated UPI and Paynimo payment gateways.",
          "Enhanced digital insurance onboarding.",
          "Built dashboards and visualization tools for sales teams.",
        ],
      },
      {
        name: "InstaFR & InstaGroup Sales",
        role: "Developer",
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Mowbly",
          "Juci",
          "Oracle DB",
        ],
        defaultExpanded: false,
        highlights: [
          "Developed customizable forms with validation and PDF generation.",
          "Implemented mobile and web insurance-agent modules.",
          "Supported high availability for large user bases.",
        ],
      },
      {
        name: "Sales Assist",
        role: "Developer",
        technologies: ["JavaScript", "HTML5", "CSS3", "Mowbly", "Juci"],
        defaultExpanded: false,
        highlights: [
          "Added sales enablement features.",
          "Optimized UI/UX.",
          "Integrated third-party APIs.",
          "Improved scalability and maintainability.",
        ],
      },
    ],
  },
  {
    id: "mtw-labs",
    company: "MTW Labs Pvt. Ltd.",
    position: "Team Lead — Mowbly Team",
    location: "Hyderabad, India",
    dateDisplay: "May 2018 – August 2019",
    status: "completed",
    detailLevel: "compact",
    projects: [
      {
        name: "Insurance Mobility Solutions",
        technologies: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Mowbly",
          "Juci",
          "Oracle DB",
        ],
        defaultExpanded: false,
        highlights: [
          "Led a team of developers.",
          "Developed document-submission platforms.",
          "Developed premium-calculation modules.",
          "Coordinated client requirements.",
          "Managed delivery timelines.",
        ],
      },
    ],
  },
  {
    id: "cloudpact",
    company: "Cloudpact",
    position: "Software Engineer",
    location: "Hyderabad, India",
    dateDisplay: "June 2016 – January 2018",
    status: "completed",
    detailLevel: "compact",
    projects: [
      {
        name: "HDFC Life Mobility Applications",
        technologies: ["JavaScript", "HTML5", "CSS3", "Mowbly", "Juci"],
        defaultExpanded: false,
        highlights: [
          "Built document-submission workflows with file validation.",
          "Developed premium calculators and reporting modules.",
          "Improved application performance and scalability.",
          "Developed mobile and web insurance applications.",
        ],
      },
    ],
  },
];
