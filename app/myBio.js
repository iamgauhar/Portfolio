// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiMysql, SiBootstrap, SiTailwindcss } from "react-icons/si"
import evallo from "../assets/evallo-logo.png"
import mcu from "../assets/mcu.png"
import masai from "../assets/masai.png"

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGitlab,
  SiPostman,
  // SiVisualstudiocode,
  SiAmazonwebservices,
  // SiMicrosoftazure,
  SiTrello,
  SiFigma,
  SiSlack,
  SiGoogle,
  SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";

const FigmaIcon = () => {
  return (
    <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.12856 25C6.40752 25 8.25711 23.1334 8.25711 20.8334V16.6669H4.12856C1.84959 16.6669 0 18.5335 0 20.8334C0 23.1334 1.84959 25 4.12856 25Z" fill="#23C881" />
      <path d="M0 12.4997C0 10.1998 1.84959 8.33313 4.12856 8.33313H8.25711V16.6663H4.12856C1.84959 16.6663 0 14.7997 0 12.4997Z" fill="#9C5DF4" />
      <path d="M0.00115967 4.16658C0.00115967 1.86663 1.85075 0 4.12972 0H8.25827V8.33317H4.12972C1.85075 8.33317 0.00115967 6.46654 0.00115967 4.16658Z" fill="#F04F2B" />
      <path d="M8.25781 0H12.3864C14.6653 0 16.5149 1.86663 16.5149 4.16658C16.5149 6.46654 14.6653 8.33317 12.3864 8.33317H8.25781V0Z" fill="#FD7366" />
      <path d="M16.5149 12.4997C16.5149 14.7997 14.6653 16.6663 12.3864 16.6663C10.1074 16.6663 8.25781 14.7997 8.25781 12.4997C8.25781 10.1998 10.1074 8.33313 12.3864 8.33313C14.6653 8.33313 16.5149 10.1998 16.5149 12.4997Z" fill="#2AB3EE" />
    </svg>
  )
}

export const skills = {
  tech: [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", Icon: SiReact, color: "#61DAFB" },
    { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", Icon: SiExpress, color: "#000000" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Mongoose", Icon: SiMongoose, color: "#880000" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "JWT Authentication", Icon: SiJsonwebtokens, color: "#4479A1" },
  ],

  tools: [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
    // { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
    { name: "AWS (EC2, S3)", Icon: SiAmazonwebservices, color: "#FF9900" },
    // { name: "Microsoft Azure", Icon: PiMicrosoftTeamsLogoFill, color: "#0078D4" },
    { name: "Figma", Icon: FigmaIcon, color: "#F24E1E" },
    { name: "Trello", Icon: SiTrello, color: "#0052CC" },
    { name: "Slack", Icon: SiSlack, color: "#4A154B" },
    { name: "Microsoft Teams", Icon: PiMicrosoftTeamsLogoFill, color: "#6264A7" },
    { name: "Google Workspace", Icon: SiGoogle, color: "#4285F4" },

  ],
};

export const experience = [
  {
    "orgName": "Evallo",
    "logo": evallo,
    "role": "Full-Stack Engineer",
    "duration": "Feb 2024 - Nov 2025",
    "desc": [
      "Redesigned and developed end-to-end authentication flows including Signup, Login, Email Verification, OTP logic, and Reset Password with improved UX and full backend integration.",
      "Developed data visualization dashboards using Chart.js and Recharts to support business analytics.",
      "Built and integrated complex admin settings features, including a custom sign-up form, an announcement system, and the corresponding back-end APIs.",
      "Used AWS (EC2/S3) for deployment and asset storage tasks where required.",
      "Collaborated closely with the UI/UX team to convert design wireframes into responsive, production-ready interfaces and maintain consistency across all frontend modules."
    ]
  }
]

export const education = [
  {
    course: "Computer Application",
    degree: "Bachelor's",
    university: "Makhanlal Chaturvedi National University, Bhopal",
    duration: "Aug 2019 - Jun 2022",
    logo: mcu
  },
  {
    course: "Full-Stack Development",
    degree: "Certification",
    university: " Masai School, Bengaluru",
    duration: "Jul 2022 - Jul 2023",
    logo: masai
  },
]

