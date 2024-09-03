import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, BlocksIcon, UserIcon, SwordsIcon, Icon } from "lucide-react";

export const DATA = {
  name: "Mirko Fiorini",
  initials: "MF",
  url: "https://github.com/jmiccoDev",
  location: "Sicily, Italy",
  locationLink: "https://www.google.com/maps/place/italy",
  description:
    "🇮🇹 Italian Software Developer.\nI'm currently studying Computer Technologies at the University of Messina.",
  summary:
    "I’m an 18-year-old with a passion for all things tech, especially the world of programming. I love challenging myself by building anything I can imagine through code. My goal is to become a skilled **Full-Stack Developer**.",

  history: {
    born: {
      date: "29 March 2006",
      description: `No, I am not from Sicily; in fact, I am from Veneto. Born on March 29, 2006, I spent my early years there, attending kindergarten. During that brief period, I didn't know what **technology** was, mainly because there wasn't much of it around at the time. However, I remember that my interest in it began when a boy in my kindergarten class always brought his **Nintendo DS** to play **Super Mario 64**. I recall how every day, during the first few hours, I would get close to him, fascinated by that device he always held in his hands. Later, my parents decided to give me a **Wii** for Christmas, and I was thrilled with their gift. I spent hours and hours playing with it.`,
    },
    discoveryComputing: {
      date: "2011",
      description: `At the age of 5, I moved to Sicily, where I started elementary school. Initially, I lived with my grandparents, but after a couple of years, my parents bought a house, and from that day until now, I still live there. I remember one day when my parents were moving furniture from my grandparents' house to the new one, they brought along a **PC** with **Windows XP** installed on it. That day was the first time I got a taste of the world of **technology** and **computing**. Speaking of elementary school, in 2011, I had a **technology** lesson where I encountered **programming** for the first time, creating a simple HTML page with the classic "Hello, world!" However, strangely enough, it didn't captivate me immediately.`,
    },
    discoveryProgramming: {
      date: "2019",
      description: `In 2019, when I started high school at the institute in my hometown, Verona-Trento, I had been playing a game called [**Roblox**](https://www.roblox.com) for some time. I followed various American **content creators**, and one of them posted a video in which he developed a game using a software called [**Roblox Studio**](https://www.roblox.com/create). Watching him code lines of programming in that video fascinated me a lot. I decided to download it, but I didn't accomplish much because I had no idea where to start. I watched **tutorials**, read various **documentation** to understand something, and spent a lot of time learning. At my institute, between 2020 and 2024, I started programming in **C++**, **HTML & CSS**, **Java**, and **JavaScript**. Thanks to my school and a lot of discipline on my part, I quickly learned programming and began developing my first web applications, such as **Discord bots** in **Node.js** and systems created on the **Roblox Studio** development platform using the **LuaU** language.`,
    },
    present: {
      date: "2024",
      description: `Fast forward to 2024, I have continued to improve my knowledge, learning to create **interactive web pages** with frameworks like **Next.js** and **React**. I am currently attending the **University of Messina**, pursuing a degree in **Computer Science and Information Technologies**, aspiring to become a professional **Full-Stack programmer**.`,
    },
  },

  avatarUrl: "/me.png",
  skills: [
    {
      name: "Typescript",
      icon: <Icons.ts className="size-4" />,
    },
    {
      name: "Node.js",
      icon: <Icons.nodejs className="size-4" />,
    },
    {
      name: "React",
      icon: <Icons.react className="size-4" />,
    },
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-4" />,
    },
    {
      name: "Java",
      icon: <Icons.java className="size-4" />,
    },
    {
      name: "C++",
      icon: <Icons.cpp className="size-4" />,
    },
    {
      name: "LuaU",
      icon: <Icons.lua className="size-4" />,
    },
    {
      name: "MySQL",
      icon: <Icons.mysql className="size-4" />,
    },
    {
      name: "PHP",
      icon: <Icons.php className="size-4" />,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserIcon, label: "About" },
    { href: "/projects", icon: BlocksIcon, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jmiccoDev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  experience: [
    {
      company: "Change the World",
      href: "https://www.cwmun.org",
      badges: [],
      location: "New York City, NY",
      title: "Delegatig Germany during the CWMUN New York 2024",
      logoUrl: "/cwmun.png",
      start: "4 Apr 2024",
      end: "11 Apr 2024",
      description:
        "I had the opportunity to represent the Republic of Germany in the United Nations Economic and Social Council, discussing and debating on the most important topics of the international agenda.",
    },
  ],
  education: [
    {
      school: "Università degli Studi di Messina",
      href: "https://unime.it",
      degree: "University Degree in Computer Technologies",
      logoUrl: "/unime.png",
      start: "2024",
      end: "Now",
    },
    {
      school: "IIS Verona-Trento",
      href: "https://veronatrento.it",
      degree: "High School Diploma",
      logoUrl: "/vt.png",
      start: "2019",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "CWMUN New York 2024 Photogallery",
      href: "https://cwmun-new-york-2024-website-gallery.vercel.app",
      targetBlank: true,
      recentProject: true,
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "Developed a website to showcase the best moments of the CWMUN New York 2024 conference captured by me with my personal Camera.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://cwmun-new-york-2024-website-gallery.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/websitePhotogallery.png",
      video:
        "",
    },
    {
      title: "Ultimate Duels",
      href: "https://www.roblox.com/games/17817791724/Gun-Fight-REWORKED",
      targetBlank: true,
      recentProject: true,
      dates: "Jul 2024 - Now",
      active: true,
      description:
        "Working on a Roblox game that is a remake of a my classic game [Gun Fight](https://www.roblox.com/games/7085824203/BETA-Gun-Fight), with a lot of new features and improvements.",
      technologies: [
        "Roblox Studio",
        "Lua",
      ],
      links: [
        {
          type: "Game",
          href: "https://www.roblox.com/games/17817791724/Gun-Fight-REWORKED",
          icon: <Icons.game className="size-3" />,
        },
      ],
      image: "/UltimateDuels.png",
      video:
        "",
    },
    {
      title: "Discord Bots",
      href: "https://streamable.com/9xexpr",
      targetBlank: true,
      recentProject: false,
      dates: "",
      active: true,
      description:
        "Developed skills in creating Discord Bots using JavaScript and TypeScript, leveraging the Node.js execution environment. The bots I created are used in various servers, providing various API services. [Here is an example]('https://streamable.com/9xexpr')",
      technologies: [
        "Node.js",
        "JavaScript",
        "TypeScript",

      ],
      links: [
        {
          type: "Application",
          href: "https://streamable.com/9xexpr",
          icon: <Icons.bot className="size-3" />,
        },
      ],
      image: "/botWorking.png",
      video:
        "",
    }
  ],
  // hackathons: [
  //   {
  //     title: "NaoChallenge",
  //     dates: "March 26, 2024",
  //     location: "Firenze, Italy",
  //     description:
  //       "Developed a system that allows the NAO robot to recognize objects and interact with them.",
  //     image:
  //       "",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "",
  //       },
  //     ],
  //   },
  // ],
} as const;
