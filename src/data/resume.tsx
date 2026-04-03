import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Sufiyan Shaikh",
  initials: "SS",
  url: "https://your-portfolio-link.com", // update if needed
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Frontend Engineer specializing in React.js, building scalable and high-performance web applications.",
  summary:
    "Frontend Engineer with strong experience in building responsive and dynamic web applications using React.js, Next.js, and modern UI tools. Experienced in full-stack development, SEO optimization, and delivering user-focused solutions. Passionate about clean UI/UX, performance, and scalable architecture.",

  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "JavaScript", icon: Typescript },
    { name: "Java", icon: Java },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "sufiwork2001@gmail.com",
    tel: "+919823202338",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hyperball123",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sufiyan-shaikh123/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Imagecurry",
      href: "#",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/imagecurry.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Built responsive web applications using React.js, Next.js, and Tailwind CSS. Translated client requirements into scalable UI components and improved UX using Figma-driven designs. Optimized web content for SEO and performance.",
    },
    {
      company: "Bright Forge Solutions",
      href: "#",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/brightforge.png",
      start: "Mar 2024",
      end: "Sep 2024",
      description:
        "Developed REST APIs and microservices using Java and Spring Boot. Built frontend interfaces with Angular and managed tasks using JIRA. Delivered scalable full-stack solutions with focus on performance.",
    },
    {
      company: "The Digital Junction",
      href: "#",
      location: "Internship",
      title: "Digital Marketing Intern",
      logoUrl: "/digitaljunction.png",
      start: "2021",
      end: "2021",
      description:
        "Worked on SEO, SEM, and PPC campaigns. Managed WordPress content and improved website traffic through keyword optimization and social media strategies.",
    },
  ],

  education: [
    {
      school: "Aki’s Poona College of Arts, Science & Commerce",
      href: "#",
      degree: "Bachelor of Computer Application (CGPA: 8.77)",
      logoUrl: "/college.png",
      start: "2020",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "The Wild Oasis",
      href: "https://thee-wildd-oasis.vercel.app/",
      dates: "",
      active: true,
      description:
        "Hotel management app with role-based access, enabling employees to manage bookings, cabins, and guests with full CRUD operations.",
      technologies: [
        "React.js",
        "Supabase",
        "React Query",
        "Context API",
        "Styled Components",
      ],
    },
    {
      title: "Worldwise",
      href: "https://hyperball123.github.io/Worldwise/",
      dates: "",
      active: true,
      description:
        "Interactive travel tracker with map integration allowing users to log visited cities and manage travel history.",
      technologies: ["React.js", "Leaflet", "Context API", "Custom Hooks"],
    },
    {
      title: "UsePopcorn",
      href: "https://hyperball123.github.io/usePopcorn/",
      dates: "",
      active: true,
      description:
        "Movie search and watchlist app using advanced React patterns like useReducer and custom hooks.",
      technologies: ["React.js", "JavaScript", "CSS"],
    },
    {
      title: "Omnifood",
      href: "https://hyperball123.github.io/Omnifood-Desktop/",
      dates: "",
      active: true,
      description:
        "Responsive landing page for a food subscription service focused on clean UI and modern CSS techniques.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],

  certifications: [
    "Web Development & Data Structures – Pepcoding",
    "Ultimate React Course – Udemy",
    "Responsive Web Design – Udemy",
    "OOPs in Java – Haris Infotech",
    "Digital Marketing – School of Digital Marketing",
  ],
} as const;