// skillData.js
import {
  FaCode,
  FaServer,
  FaCogs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiRedis,
  SiVercel,
  SiSupabase,
  SiLinux,
  SiNewrelic,
  SiJest,
  SiNetlify,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Client-Side",
    icon: <FaCode className="mr-2" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JS", icon: <FaJs /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Server-side",
    icon: <FaServer className="mr-2" />,
    skills: [
      { name: "Git/Github", icon: <FaGitAlt /> },
      { name: "Nodejs", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostMan", icon: <SiPostman /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
  {
    title: "Dev & Ops",
    icon: <FaCogs className="mr-2" />,
    skills: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "SupaBase", icon: <SiSupabase /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "New Relic", icon: <SiNewrelic /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];
