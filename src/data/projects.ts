export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  desc: string;
  longDesc: string;
  image: string;
  imageSmall: string;
  link?: string;
  tags: string[];
  color: string;
  emoji: string;
  challenge: string;
  solution: string;
  impact: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sarathi",
    name: "Sarathi",
    category: "MOBILITY",
    year: "2026",
    emoji: "🚗",
    desc: "A route-based ride-sharing app that matches riders heading between the same origin and destination.",
    longDesc:
      "Sarathi helps riders choose their origin and destination, find others traveling along the same route, and share a ride together.",
    image: "/sarathi.webp",
    imageSmall: "/sarathi-800.webp",
    tags: ["Expo CLI", "React Native", "TypeScript", "PostgreSQL", "Supabase"],
    color: "hsl(0 0% 20%)",
    challenge:
      "Riders traveling along similar routes need a simple way to find one another and coordinate a shared ride.",
    solution:
      "Sarathi lets riders select their starting point and destination, then matches them with others heading along the same route so they can share a ride.",
    impact:
      "Brings route selection, rider matching, and ride sharing together in one mobile app experience.",
  },
{
  slug: "merosanstha",
  name: "MeroSanstha",
  category: "SAAS PLATFORM",
  year: "2026",
  emoji: "🚀",
  desc: "A streamlined client onboarding and workflow automation platform for modern agencies.",
  longDesc:
    "MeroSanstha is a full-featured SaaS platform designed for digital agencies to collect client requirements, automate reminders, schedule follow-ups, and streamline client onboarding with integrations for Slack and Google Sheets.",
      image: "/agencify.webp",
    imageSmall: "/agencify-800.webp",
  link: "https://tryagencify.com",
  tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  color: "hsl(142 71% 35%)",
  challenge:
    "Agencies often struggle with scattered client requirements, manual follow-ups, and disconnected tools, making the onboarding process time-consuming and difficult to manage.",
  solution:
    "Built a unified dashboard with customizable onboarding forms, automated reminders, scheduled follow-ups, and integrations with Slack and Google Sheets to keep client information organized.",
  impact:
    "Designed to simplify client onboarding, reduce manual administrative work, and improve coordination between agencies and their clients.",
},
  {
    slug: "buildmyvita",
    name: "BuildMyVita",
    category: "PRO TOOL",
    year: "2025",
    emoji: "📄",
    desc: "A high-performance resume builder with real-time AI-powered optimization.",
    longDesc:
      "BuildMyVita lets users craft polished, ATS-friendly resumes with an intuitive drag-and-drop editor and AI suggestions that tailor content to specific job descriptions.",
    image: "/buildmyvita.webp",
    imageSmall: "/buildmyvita-800.webp",
    link: "https://buildmyvita.com",
    tags: ["Next.js", "PostgreSQL", "Node.js", "Zod"],
    color: "hsl(142 71% 45%)",
    challenge:
      "Job seekers were spending hours reformatting resumes for different roles and still getting filtered out by ATS systems.",
    solution:
      "Implemented a real-time AI layer that analyzes job descriptions and suggests keyword-optimized resume rewrites, paired with clean exportable templates.",
    impact:
      "Helped hundreds of users land interviews at top-tier companies by improving resume match scores.",
  },
  {
    slug: "whoknows",
    name: "Who Knows?",
    category: "GAME DESIGN",
    year: "2025",
    emoji: "🎮",
    desc: "Social word game challenging knowledge and intuition across global communities.",
    longDesc:
      "Who Knows? is a multiplayer social game where players compete to guess words based on cryptic clues. The game blends general knowledge with intuition and social dynamics.",
    image: "/who.webp",
    imageSmall: "/who-800.webp",
    link: "https://whoknowstheword.vercel.app",
    tags: ["React Native", "Styled Components", "Expo CLI"],
    color: "hsl(38 92% 50%)",
    challenge:
      "Most trivia games feel stale and solo. Players wanted something that felt social, fast-paced, and replayable.",
    solution:
      "Designed a real-time multiplayer system with dynamic question pools, emoji reactions, and a leaderboard that refreshes daily.",
    impact:
      "Achieved strong early retention with users averaging 3+ sessions per week in beta testing.",
  },
  {
    slug: "vutungtung",
    name: "Vutungtung",
    category: "MOBILITY",
    year: "2025",
    emoji: "🚲",
    desc: "End-to-end vehicle rental ecosystem with real-time tracking and verification.",
    longDesc:
      "Vutungtung is a full-stack mobility platform for Nepal's rental vehicle market — connecting owners and renters with live GPS tracking, digital contracts, and identity verification.",
    image: "/vutungtung.webp",
    imageSmall: "/vutungtung-800.webp",
    link: "https://vutungtung-rental.vercel.app",
    tags: ["React", "MySQL", "Supabase", "Tailwind"],
    color: "hsl(0 72% 51%)",
    challenge:
      "Nepal's vehicle rental market lacked trust. Renters couldn't verify vehicles and owners had no protection against fraud.",
    solution:
      "Built a two-sided marketplace with NID verification, real-time GPS embedding, and digital rental agreements signed via OTP.",
    impact:
      "Launched in Butwal with positive reception from local rental businesses seeking to digitize operations.",
  },
];
