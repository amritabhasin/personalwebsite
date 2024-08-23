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
  AmmieTwitter
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Amrita Bhasin",
  location: "San Francisco, CA",
  about:
    "Founder, Builder and Hacker",
  summary:
    "I am the Co-Founder Sotira, a startup to enable instant commerce companies to offload and monetize surplus inventory. I'm a builder at heart and I love hacking on random side projects that intrigue me. Areas I'm curious about are recommerce, circular economy, reverse logistics, third spaces, network states, tokentization and building tech for underserved industries largely ignored by Silicon Valley.",
///notsurewherebelowgoes
   //past professional experience:
    //"I have previous experience at Google working with SMBs and turned down an offer on Meta's commerce operations team to build Sotira.",
    avatarUrl: AmmieTwitter,
      
  contact: {
    tel:"",
    email: "amrita@sotira.co",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amrita-bhasin/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/amritakbhasin",
        icon: XIcon,
      }
    ],
  },
  education: [
    {
      school: "UC Berkeley"
    }
  ],
  personalWebsiteUrl: "amritabhasin.com",
  work: [
    {
      company: "Sotira",
      link: "https://www.sotira.co/",
      title: "Co-Founder and CEO",
      //logo: ParabolLogo,
      description:
        "Sotira is an integrated marketplace that uses artificial intelligence to bundle inventory and match suppliers to buyers. Sotira enables suppliers to get a return on their surplus inventory and cash upfront and saves buyers time and labor in sourcing, negotiating and purchasing top quality goods.",
    },
    {
      company: "Soma Capital",
      link: "https://www.google.com/url?q=https://medium.com/@vishnunagasrinivasan/announcing-the-soma-fellowship-ad0beac55372&sa=D&source=docs&ust=1707957778385100&usg=AOvVaw1Zi4gUU9N-6E8pms_ohZ93",
      title: "Startup Founder Fellow",
     //logo: JojoMobileLogo,
      description:
        "Selected as 1 of 28 companies out of 700 applications for the Soma Capital Fellowship for first time founders.",
    },
       {
      company: "Blackstone Launchpad",
      link: "https://clevertech.biz",
      title: "Startup Founder Fellow",
      //logo: ClevertechLogo,
      description:
        "Received Blackstone LaunchPad Fellowship grant in partnership with Future Founders.",
    },
    {
      company: "Ethereum Foundation",
      link: "https://amritabhasin.medium.com/my-experience-as-an-ethereum-foundation-devcon-scholar-in-bogota-colombia-1b41cbd290b3",
      title: "Devcon Scholar",
      //logo: NSNLogo,
      description: "Selected as 1 of 50 scholars and one of only a few Americans out of 400 applicants. Received full travel and hotel sponsorship to attend Devcon in Bogota, Colombia and connect with others in the Ethereum ecosystem and discuss my projects and ideas for public goods, regenerative finance and defi lending.",
    },
       {
      company: "Talent Protocol",
      link: "https://amritabhasin.medium.com/my-experience-as-an-ethereum-foundation-devcon-scholar-in-bogota-colombia-1b41cbd290b3",
      title: "Talent House Grant Finalist",
      //logo: NSNLogo,
      description: "Selected as 1 of 12 finalists to receive a grant from Talent Protocol.",
    },
  ]/*,
  `  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],*/
} as const;
