import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mikita Kuchunski",
  initials: "MK",
  location: "Dmitrov, Russia, CET+1",
  locationLink: "https://www.google.com/maps/place/Dmitrov",
  about: "Frontend developer who has a passion to build easy-to-use products.",
  summary:
    "I make websites look good and work well. I use HTML, CSS, and JavaScript to do this. I'm good at making things that work on different devices and web browsers. You can see examples of my work in my portfolio. I like working with others to make cool stuff online. I'm always learning new things to make better websites.",
  avatarUrl: "https://avatars.githubusercontent.com/n1ckdevops?s=200",
  personalWebsiteUrl: "https://github.com/n1ckdevops",
  contact: {
    email: "nickdevops6@gmail.com",
    tel: "+79014295249",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/n1ckdevops",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nickdevops/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/frontnotondev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Dmitrov University of Nature, Science and Society",
      degree: "Bachelor's Degree in Logistics Management",
      start: "2014",
      end: "2018",
    },
    {
      school: "Cambridge English Exam",
      degree: "First Certificate in English (FCE)",
      start: "2017",
      end: "2018",
    },
    {
      school: "Cambridge English Exam",
      degree: "Preliminary English Test (PET)",
      start: "2016",
      end: "2017",
    },
    {
      school: "Cambridge English Exam",
      degree: "Key English Test (KET)",
      start: "2015",
      end: "2016",
    },
  ],
  work: [
    {
      company: "GLO academy",
      link: "https://www.glo.academy/",
      badges: ["Remote"],
      title: "Mentor",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "Online courses on website development for beginners. HTML/CSS",
    },
  ],
  skills: [
    "HTML",
    "CSS(SASS,SCSS)",
    "Tailwind.css",
    "Bootstrap",
    "JavaScript",
    "Vue.js",
    "Figma",
    "Git",
  ],
  projects: [
    {
      title: "KUGOO",
      techStack: ["HTML", "CSS", "JavaScript"],
      description:
        "Electric scooter rental website for quick and convenient urban mobility",

      link: {
        label: "scooter-hiring.nickdevops.wuaze.com",
        href: "http://scooter-hiring.nickdevops.wuaze.com/?i=1",
      },
    },
    {
      title: "Aliance Production",
      techStack: ["HTML", "CSS", "JavaScript", "PHP"],
      description: "Complete business supplies and consumables.",

      link: {
        label: "aliance-production.nickdevops.wuaze.com",
        href: "http://aliance-production.nickdevops.wuaze.com/?i=1",
      },
    },
    {
      title: "3D Modeling Services",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "3D modeling services",

      link: {
        label: "3d-modeling-services.nickdevops.wuaze.com",
        href: "http://3d-modeling-services.nickdevops.wuaze.com/?i=1",
      },
    },
    {
      title: "Electrician Services",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "A website is the hub for our small electrical company",

      link: {
        label: "electrician-services.nickdevops.wuaze.com",
        href: "http://electrician-services.nickdevops.wuaze.com/",
      },
    },
    {
      title: "COMPAS",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Vue", "Nuxt3 JS"],
      description: "A website is for checking car fines",

      link: {
        label: "compas-project",
        href: "https://compas-project.vercel.app/",
      },
    },
  ],
} as const;
