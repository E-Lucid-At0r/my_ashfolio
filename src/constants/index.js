import {
  mobile,
  backend,
  creator,
  web,
  github,
  itchio,
  eye,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ataribreakout,
  zombieslayer,
  playground,
  fourfun,
  ascendant,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    flag: false,
  },
  {
    id: "work",
    title: "Work",
    flag: false,
  },
  {
    id: "contact",
    title: "Contact",
    flag: false,
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Game Designer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "3D Modelling and Animation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Atari Breakout 3D",
    description:
      "A simple remake of a very old retro game Atari Breakout, but in 3D, A game made in Unreal Engine 5.",
    tags: [
      {
        name: "ue5",
        color: "blue-text-gradient",
      },
      {
        name: "gamedev",
        color: "green-text-gradient",
      },
      {
        name: "gameprogramming",
        color: "pink-text-gradient",
      },
    ],
    image: ataribreakout,
    icon: github,
    icon_2: itchio,
    source_code_link: "https://github.com/E-Lucid-At0r/AtariBreakout2",
    source_code_link_2: "https://lucid-works.itch.io/ataribreakout3d",
    gamedev: true,
  },
  {
    name: "Zombie Slayer",
    description:
      "Zombie Slayer is a third-person survival horror game, made in Unreal Engine 5.",
    tags: [
      {
        name: "ue5",
        color: "blue-text-gradient",
      },
      {
        name: "gamedev",
        color: "green-text-gradient",
      },
      {
        name: "gameprogramming",
        color: "pink-text-gradient",
      },
    ],
    image: zombieslayer,
    icon: github,
    icon_2: itchio,
    source_code_link: "https://github.com/",
    source_code_link_2: "https://lucid-works.itch.io/zombie-slayer",
    gamedev: true,
  },
  {
    name: "G2M Playground Game Exercise",
    description:
      "An exercise done during my diploma in 'Gamer2Maker' for breaking down the gameplay mechanics of a simple children's game - Chain Link.",
    tags: [
      {
        name: "gamedesign",
        color: "blue-text-gradient",
      },
      {
        name: "gamer2maker",
        color: "green-text-gradient",
      },
      {
        name: "g2m",
        color: "pink-text-gradient",
      },
    ],
    image: playground,
    icon: eye,
    source_code_link: "https://www.canva.com/design/DAFYA74p4a8/oC8COjTYL6lWUuXurhtoVA/view?website#2",
    gamedev: false,
  },
  {
    name: "G2M Four Kinds of Fun Exercise",
    description:
      "An exercise done during my diploma in 'Gamer2Maker' for breaking down the four kinds of fun and analysing the gameplay of - Forspoken.",
    tags: [
      {
        name: "gamedesign",
        color: "blue-text-gradient",
      },
      {
        name: "gamer2maker",
        color: "green-text-gradient",
      },
      {
        name: "g2m",
        color: "pink-text-gradient",
      },
    ],
    image: fourfun,
    icon: eye,
    source_code_link: "https://www.canva.com/design/DAFZ-bCrDTo/qtKtSPvUFnSpGVb3sXjEiQ/view?website#2",
    gamedev: false,
  },
  {
    name: "Project Ascendant Concept Pitch Document",
    description:
      "The concept document for the game 'Ascendant', currently under development.",
    tags: [
      {
        name: "gamedesign",
        color: "blue-text-gradient",
      },
      {
        name: "gamer2maker",
        color: "green-text-gradient",
      },
      {
        name: "conceptdoc",
        color: "pink-text-gradient",
      },
    ],
    image: ascendant,
    icon: eye,
    source_code_link: "https://www.canva.com/design/DAFookusUNo/ZtkckIUi9cY_MIK5dcahYw/view?website#2:ascendant",
    gamedev: false,
  },
];

export { services, technologies, experiences, testimonials, projects };
