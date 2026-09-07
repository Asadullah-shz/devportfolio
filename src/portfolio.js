/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hi! I'm Asadullah",
  logo_name: "Asadullah Shahbaz",
  nickname: "",
  subTitle:
    "Software Engineer specializing in Backend and Full-Stack Development with 1.5 years of experience in Node.js, Express.js, TypeScript, and MongoDB 💻🚀",
  resumeLink: "https://asadsdev.vercel.app",
  portfolio_repository: "https://github.com/asadshzdev",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/asadshzdev",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/asadullah-shahbaz",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:asadshzdev@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Portfolio",
    link: "https://asadsdev.vercel.app",
    fontAwesomeIcon: "fa-globe",
    backgroundColor: "#4F46E5",
  },
];
const socialMediaLinksHome = [...socialMediaLinks];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building and maintaining scalable backend services and REST APIs using Node.js, TypeScript, Express.js, and Microservices",
        "⚡ Developing responsive and intuitive frontend interfaces using React.js, Next.js, TypeScript, and modern CSS/Tailwind",
        "⚡ Designing and optimizing MongoDB schemas and Redis caching layers for high performance and reliable persistence",
        "⚡ Implementing background job queues with BullMQ, event-driven RabbitMQ architectures, and seamless third-party integrations",
      ],

      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Cloud & AI Solutions",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting cloud deployments, serverless functions, and containerized microservices using AWS, Docker, and Vercel",
        "⚡ Integrating Gemini AI and OpenAI models for context-aware automation, conversational intelligence, and document analytics",
        "⚡ Building automated multi-tenant workflow pipelines connecting Stripe, WhatsApp Business, Google Sheets, Notion, and Airtable",
        "⚡ Implementing resilient CI/CD delivery pipelines, environment observability, and secure API gateways",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#008CDD",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
    {
      title: "Cross-Platform & Desktop Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Engineering cross-platform desktop applications using Electron, TypeScript, and modern desktop APIs",
        "⚡ Designing monorepo architectures with shared core packages, developer CLI tools, and automated build pipelines",
        "⚡ Building real-time file synchronization engines with workspace conflict resolution and network transfer monitoring",
        "⚡ Configuring reverse proxies, self-hosted web servers with Caddy, and cross-platform native system integrations",
      ],
      softwareSkills: [
        {
          skillName: "Electron",
          fontAwesomeClassname: "simple-icons:electron",
          style: {
            color: "#47848F",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Caddy",
          fontAwesomeClassname: "simple-icons:caddy",
          style: {
            color: "#22B573",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/asadshzdev",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/asadullah-shahbaz",
    },
    {
      siteName: "Portfolio",
      iconifyClassname: "simple-icons:vercel",
      style: {
        color: "#000000",
      },
      profileLink: "https://asadsdev.vercel.app",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National College of Business Administration & Economics",
      subtitle: "BS Computer Science",
      logo_path: "nust-logo.png",
      alt_name: "NCBA&E",
      duration: "Expected 2028",
      descriptions: [
        "⚡ Pursuing Bachelor of Science in Computer Science with a strong focus on Software Engineering, Data Structures, Algorithms, and Distributed Systems.",
        "⚡ Leading university project teams by coordinating technical tasks, responsibilities, and sprint timelines from requirements analysis through final delivery.",
        "⚡ Guiding teammates through technical problem-solving, Git/GitHub workflows, and architectural implementation decisions.",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Best Intern Award",
      subtitle: "Developers Hub Corporation",
      logo_path: "uol-logo.png",
      certificate_link: "https://www.linkedin.com/in/asadullah-shahbaz",
      alt_name: "Developers Hub Corporation",
      color_code: "#4F46E5",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Work & Leadership",
  description:
    "Software Engineer with 1.5 years of experience specializing in Backend and Full-Stack Development, building scalable APIs, event-driven microservices, distributed queues, and modern web applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Backend Software Engineer",
          company: "Hashloops Technologies",
          company_url: "#",
          logo_path: "company-logos/hashloops_technologies_logo.webp",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Sep 2026 - Present",
          location: "Lahore, PK",
          description:
            "• Built and maintained scalable backend services using Node.js, TypeScript, and Express.js across multiple projects, delivering clean and reliable APIs within an agile team environment.\n• Developed background job systems with BullMQ and Redis to handle tasks like notifications, data processing, and report generation reliably at scale.\n• Designed and optimized MongoDB schemas with Mongoose, improving query performance by 30% through proper indexing, data structuring, and write optimization across different project databases.\n• Contributed to migrating backend services to AWS Lambda and AWS API Gateway, helping the team reduce infrastructure overhead and keep response times consistently under one second.\n• Tested and validated APIs across projects using Jest, Supertest, and Postman, making sure all endpoints were stable and production-ready before every release.\n• Identified and resolved backend bottlenecks across projects through profiling and query analysis, consistently improving response times and reducing server load.\n• Followed clean code practices and participated in peer code reviews on GitHub, helping maintain consistency and catching bugs early before they reached production.",
          color: "#4F46E5",
        },
        {
          title: "Backend Developer Intern",
          company: "Live Pakistan",
          company_url: "#",
          logo_path: "company-logos/Live_Pakistan_logo.webp",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Aug 2026 - Sep 2026",
          location: "Islamabad, PK",
          description:
            "• Developed backend services and RESTful APIs using Node.js, Express.js, and TypeScript for scalable web applications and SaaS platforms.\n• Designed and implemented modular backend architectures, authentication flows, business logic, validation, error handling, and third-party integrations.\n• Worked with MongoDB and Redis for data persistence, caching, session management, and performance optimization.\n• Built webhook-driven and event-based workflows, including asynchronous processing and reliable service communication.\n• Integrated external services such as Stripe, Gemini API, WhatsApp, Google Sheets, Notion, and Airtable into backend systems.\n• Implemented multi-tenant functionality, role-based access controls, idempotent transaction handling, and secure administrative operations.\n• Used Git, GitHub, Postman, Docker, and deployment platforms to support development, testing, and production workflows.",
          color: "#0E6BA8",
        },
        {
          title: "Frontend Developer Intern",
          company: "Developers Hub Corporation",
          company_url: "#",
          logo_path: "company-logos/developershub-icon-black.webp",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          duration: "Jan 2026 - June 2026",
          location: "Islamabad, PK",
          description:
            "• Developed responsive React 18 + TypeScript applications using Tailwind CSS and reusable components.\n• Integrated REST APIs, improved frontend workflows, and collaborated through Git/GitHub.\n• Received Best Intern Award for technical performance.",
          color: "#10B981",
        },
        {
          title: "Onboarding Research Manager",
          company: "Insite Life",
          company_url: "#",
          logo_path: "company-logos/insite.webp",
          duration: "Jan 2026 - Present",
          location: "London, England, UK",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          description:
            "• Lead onboarding research to identify user behavior, friction points, and activation opportunities.\n• Collaborate with Product, UX, Engineering, and Marketing to turn research into product improvements.\n• Analyze user feedback and onboarding experiments to improve user experience and engagement.",
          color: "#F59E0B",
        },
        {
          title: "Product Management Intern",
          company: "Insite Life",
          company_url: "https://www.linkedin.com/in/asadullah-shahbaz/",
          logo_path: "company-logos/insite.webp",
          duration: "Oct 2025 - Jan 2026",
          location: "London, England, UK",
          imageWrapperStyles: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          description:
            "• Collaborated with cross-functional teams to evaluate product features, user workflows, and overall platform usability.\n• Conducted product research and competitive analysis to support feature prioritization and roadmap planning.\n• Prepared technical documentation and product reports to communicate findings and recommendations effectively.\n• Contributed to early-stage product strategy by identifying opportunities to improve user experience and product adoption.\n• Gained practical experience in product development processes, agile collaboration, and software lifecycle management.",
          color: "#E11D48",
        },
      ],
    },
    {
      title: "Leadership & Activities",
      experiences: [
        {
          title: "Technical Team Lead",
          company: "University Projects",
          company_url: "#",
          logo_path: "gdsc-itu.jpeg",
          duration: "2024 - Present",
          location: "Lahore, PK",
          description:
            "• Lead university project teams by coordinating technical tasks, responsibilities, and timelines from requirements analysis through final implementation.\n• Guide teammates through technical problem-solving, Git/GitHub workflows, and implementation decisions while keeping projects aligned with requirements and deadlines.",
          color: "#4F46E5",
        },
        {
          title: "Tech Researcher & Open Source Contributor",
          company: "Independent Research",
          company_url: "#",
          logo_path: "github_logo.png",
          duration: "Ongoing",
          location: "Remote",
          description:
            "• Continuously research and experiment with emerging technologies, developer tools, AI frameworks, and modern engineering practices, applying relevant tools to personal and academic projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of full-stack, distributed backend systems, microservices, and AI-powered platforms engineered with modern scalable architectures.",
  avatar_image_path: "projects_image.svg",
};

const blogs = {
  title: "Blogs",
  subtitle:
    "Articles and insights on backend engineering, distributed systems, API performance, and modern web development. Coming soon!",
  link: "/",
  avatar_image_path: "blogs_image.svg",
  section: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "address_image.svg",
    description:
      "I am actively seeking full-time backend-focused software engineering roles. Feel free to reach out for inquiries, collaboration, or opportunities in Node.js, Express, TypeScript, and distributed systems.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Punjab, Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Lahore,Pakistan",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 (326) 016-1968",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  socialMediaLinksHome,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  blogs,
};
