/**
 * Featured project showcase. Verified product facts and personal contributions only.
 * Do not add metrics, ownership claims, URLs, or confidential details.
 */
export type ArchitectureVariant = "linear" | "fork";

export type ArchitectureBranch = {
  label: string;
  steps: readonly string[];
};

export type ArchitectureDiagramData = {
  caption: string;
  variant: ArchitectureVariant;
  steps?: readonly string[];
  branches?: readonly ArchitectureBranch[];
  mergeSteps?: readonly string[];
};

export type FeaturedProject = {
  id: string;
  name: string;
  alsoKnownAs?: string;
  company: string;
  role: string;
  badge: string;
  status?: string;
  description: string;
  technologies: readonly string[];
  focusAreas?: readonly string[];
  overviewTitle: string;
  overviewItems?: readonly string[];
  contributionTitle: string;
  contributions: readonly string[];
  architecture: ArchitectureDiagramData;
  architectureSummary?: string;
};

export type SelectedProject = {
  id: string;
  name: string;
  company: string;
  role: string;
  badge: string;
  description: string;
  highlight?: string;
  technologies: readonly string[];
  contributions: readonly string[];
};

export const projectsIntro =
  "Selected enterprise platforms and products I've contributed to across insurance, cloud, full-stack engineering, and digital sales.";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "renewal-vault",
    name: "Renewal Vault",
    company: "Iorta Technology Pvt. Ltd.",
    role: "Tech Lead",
    badge: "Featured Project",
    description:
      "A large-scale data processing pipeline for managing lakhs of policy renewals across multiple lines of business.",
    technologies: [
      "Node.js",
      "AWS Step Functions",
      "AWS Lambda",
      "AWS Glue",
      "AWS Cognito",
      "AWS API Gateway",
      "AWS S3",
      "AWS SNS",
      "AWS SQS",
      "AWS CloudWatch",
    ],
    focusAreas: [
      "Large-scale processing",
      "AWS architecture",
      "Workflow orchestration",
      "ETL",
      "Backend engineering",
      "Technical leadership",
      "Reliability",
      "Monitoring",
    ],
    overviewTitle: "Business problem",
    contributionTitle: "Engineering contribution",
    contributions: [
      "Designed and implemented policy renewal workflows using AWS Step Functions and AWS Glue ETL.",
      "Built microservice APIs to improve performance and reliability.",
      "Managed authentication and authorization using AWS Cognito.",
      "Designed auditing dashboards for logs and process monitoring.",
    ],
    architectureSummary:
      "Conceptual AWS workflow: Glue ETL, Step Functions orchestration, Node.js services, and monitoring.",
    architecture: {
      caption: "Simplified architecture",
      variant: "linear",
      steps: [
        "Policy Data",
        "AWS Glue / ETL",
        "AWS Step Functions",
        "Node.js Services",
        "Renewal Processing",
        "Monitoring / Audit",
      ],
    },
  },
  {
    id: "icare",
    name: "iCare Platform",
    alsoKnownAs: "SalesVerse",
    company: "Iorta TechNXT Sdn Bhd",
    role: "Full Stack Developer",
    badge: "Featured · Production",
    status: "Live in Production",
    description:
      "A production insurance sales and distribution platform with separate Application and Admin experiences, backed by a shared Node.js/Express/TypeScript API and MongoDB.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "AWS ECS",
      "AWS Lambda",
      "AWS EventBridge",
      "Docker",
      "JWT",
      "Authentication/Authorization",
    ],
    overviewTitle: "Platform overview",
    overviewItems: [
      "Agent onboarding",
      "Broker onboarding",
      "Franchise recruitment",
      "iCare Biz",
      "Healthcare quotation",
      "Policy application",
      "Underwriting / QC",
      "Billing and payment",
      "Document management",
      "Sales workflows",
      "Admin configuration",
      "Role/access management",
      "Reports",
    ],
    contributionTitle: "My contribution",
    contributions: [
      "Designed and developed agent onboarding workflows.",
      "Designed and developed franchise recruitment modules.",
      "Implemented new OOTB features across multiple modules.",
      "Worked across frontend and backend components.",
      "Developed REST APIs and integrated frontend workflows with backend services.",
      "Worked with MongoDB.",
      "Collaborated with QA, Product, and business stakeholders.",
      "Delivered features to UAT.",
      "Project is now completed and live in Production.",
    ],
    architectureSummary:
      "Two React SPAs and one Node.js/Express modular monolith backend, with MongoDB, AWS services, and external integrations.",
    architecture: {
      caption: "Simplified architecture",
      variant: "fork",
      branches: [
        { label: "Application", steps: ["Application Users", "React Application"] },
        { label: "Admin", steps: ["Admin Users", "React Admin"] },
      ],
      mergeSteps: [
        "Node.js / Express API",
        "MongoDB",
        "AWS / External Integrations",
      ],
    },
  },
];

export const selectedProjects: readonly SelectedProject[] = [
  {
    id: "instalife-sale",
    name: "InstaLife Sale",
    company: "Iorta Technology Pvt. Ltd.",
    role: "Lead Developer",
    badge: "Selected Project",
    description:
      "A paperless life insurance sales application with secure payment integrations.",
    highlight: "Digital insurance sales and payment integration.",
    technologies: [
      "JavaScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Mowbly",
      "Oracle DB",
      "UPI",
      "Paynimo",
    ],
    contributions: [
      "Integrated UPI and Paynimo payment gateways.",
      "Enhanced customer experience through seamless digital onboarding.",
      "Built dashboards and visualization tools for sales teams.",
    ],
  },
  {
    id: "instafr-instagroup",
    name: "InstaFR & InstaGroup Sales",
    company: "Iorta Technology Pvt. Ltd.",
    role: "Developer",
    badge: "Selected Project",
    description:
      "Applications supporting insurance document submission and premium generation.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Mowbly",
      "Juci",
      "Oracle DB",
    ],
    contributions: [
      "Developed customizable forms with validation and PDF generation.",
      "Implemented mobile and web modules for insurance agents.",
      "Supported high availability for large-scale user bases.",
    ],
  },
  {
    id: "sales-assist",
    name: "Sales Assist",
    company: "Iorta Technology Pvt. Ltd.",
    role: "Developer",
    badge: "Selected Project",
    description:
      "A sales-team productivity application supporting enhanced workflows and customer engagement.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Mowbly", "Juci"],
    contributions: [
      "Added sales enablement features.",
      "Optimized UI/UX.",
      "Integrated APIs with third-party systems.",
      "Improved scalability and maintainability of existing modules.",
    ],
  },
];
