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
  url: "https://your-portfolio-link.com",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "Frontend Engineer | React.js & Web Developer | Digital Marketing Enthusiast",
  summary:
    "Passionate Frontend Engineer with hands-on experience building responsive and dynamic web applications using React.js, Next.js, and modern UI tools. Strong understanding of SEO, performance optimization, and user-centric design. Experienced in full-stack development, content strategy, and delivering scalable, high-quality solutions.",

  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "JavaScript", icon: Typescript },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "Tailwind CSS", icon: ReactLight },
    { name: "HTML5", icon: ReactLight },
    { name: "CSS3", icon: ReactLight },
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
      company: "TomTom",
      href: "https://www.tomtom.com/",
      location: "Hybrid",
      title: "Technical Support Professional",
      logoUrl: "https://prod3-assets.sprinklr.com/spr-uploads-prod3/150030/ACCOUNT/IMAGE/35E495CE5342463F7A9C00D01073708B",
      start: "May 2025",
      end: "Present",
      description:
        "Delivered technical support by diagnosing and resolving product issues efficiently. Managed customer queries via Zendesk, ensuring high satisfaction through clear communication and quick resolutions. Contributed to process improvements by identifying recurring issues and optimizing workflows.",
    },
    {
      company: "Pronttera",
      href: "https://www.pronttera.com/",
      location: "Hybrid",
      title: "Content Creator & Digital Marketing Associate",
      logoUrl: "https://www.pronttera.com/assets/brand-C7V-uIQP.png",
      start: "Dec 2024",
      end: "May 2025",
      description:
        "Created engaging social media content and short-form videos for platforms like Instagram and YouTube. Developed SEO-optimized website content to boost organic traffic and supported client growth through digital marketing strategies.",
    },
    {
      company: "Imagecurry",
      href: "https://www.imagecurry.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/image-curry.jpeg",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Built responsive web applications using React.js, Next.js, and Tailwind CSS. Translated client requirements into intuitive UI components and improved UX using Figma. Focused on performance and SEO optimization.",
    },
    {
      company: "Bright Forge Solutions",
      href: "#",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://cdn-icons-png.freepik.com/256/18362/18362209.png?semt=ais_white_label",
      start: "Mar 2024",
      end: "Sep 2024",
      description:
        "Developed REST APIs and microservices using Java and Spring Boot. Built frontend interfaces with Angular and managed tasks via JIRA. Delivered scalable full-stack applications.",
    },
    {
      company: "The Digital Junction",
      href: "https://www.thedigitaljunction.com/",
      location: "Internship",
      title: "Digital Marketing Intern",
      logoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEVHcEwmTZknQZErU6EfQJEySZRghb/0Z1HlKRrmLiAcO44YO48dQJMkQJHkKBrlJg7lIwzlKRvpWFDqQzQnPo7mKhvlKBiOnsA7mOUZiOMykOM9k+QyR5LlNi2uhIb3AAAAHnRSTlMAR40wbGAcF4hstf//5dv//8YpSZ248QxO3WSIgGBuaBGiAAABGElEQVR4Ac3R0ZZFIBSA4Z1UsZ0Kp8Lw/q857dIaY6y5Pv8V+bQBPiXWAG9SrWASlO66Tpc6yPWIIIYSvpgytuTGaYbUO60TqPXgy3WtXN5iyAARf4SxIVg9OUsgIoHIOWeiKaIBKl2/gAVKbwIoITX/AmsVfd3iBqASSaevJ7DBksmrzLiDuAJ8LXUGsj8AtmWTnEB+E/EwAta40s47gf0JgPfqX+CtNXVE+wSMteH+kMdtBxcvr9ml8/kKaOG4fChDN1RQf04oj9CcE0a4ApphPfSYJyhLEyroI08plxbHGFsGcNisT9DIAVNsJuFG3elARwZO0HIcKORZ1EwsQLYChxIKNZ7EOQ01ubc1EWHSYwjGH/BBfQNuWRtxvRd/kAAAAABJRU5ErkJggg==",
      start: "2021",
      end: "2021",
      description:
        "Worked on SEO, SEM, and PPC campaigns. Managed WordPress content and improved website traffic using keyword optimization and social media strategies.",
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
      image: "thee-wildd-oasis.vercel.app_login",
      video: "",
      links: [],
    },
    {
      title: "Worldwise",
      href: "https://hyperball123.github.io/Worldwise/",
      dates: "",
      active: true,
      description:
        "Interactive travel tracker with map integration allowing users to log visited cities and manage travel history.",
      technologies: ["React.js", "Leaflet", "Context API", "Custom Hooks"],
      image: "hyperball123.github.io_Worldwise_.png",
      video: "",
      links: [],
    },
    {
      title: "UsePopcorn",
      href: "https://hyperball123.github.io/usePopcorn/",
      dates: "",
      active: true,
      description:
        "Movie search and watchlist app using advanced React patterns like useReducer and custom hooks.",
      technologies: ["React.js", "JavaScript", "CSS"],
      image: "hyperball123.github.io_usePopcorn_.png",
      video: "",
      links: [],
    },
    {
      title: "Omnifood",
      href: "https://hyperball123.github.io/Omnifood-Desktop/",
      dates: "",
      active: true,
      description:
        "Responsive landing page for a food subscription service focused on clean UI and modern CSS techniques.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "hyperball123.github.io_Omnifood-Desktop_.png",
      video: "",
      links: [],
    },
  ],

  certifications: [
    "Web Development & Data Structures – Pepcoding",
    "The Ultimate React Course 2024 – Udemy",
    "Build Responsive Real-World Websites – Udemy",
    "OOPs in Java – Haris Infotech",
    "Digital Marketing – School of Digital Marketing",
  ],
} as const;