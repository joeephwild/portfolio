import { careerup, crowdfund, netflix, pics, starbucks } from "../assets";

export type ProjectDataType = {
  id: string;
  sequence: number;
  title: string;
  text: string[];
  secondary: string[];
  githubLink: string;
  liveLink: string;
  next: string;
  leftFlex: 0 | 1 | 2 | 3;
  rightFlex: 0 | 1 | 2 | 3;
  thumbnailOffset: string;
  offsetX: number;
  offsetY: number;
  image: string;
};

export const ProjectData: ProjectDataType[] = [
  {
    id: "Netflix",
    image: netflix,
    sequence: 1,
    title: "Netflix-clone",
    text: [
      "After months on youtube tutorials been wondering can i build something all by myself, without no help from youtube tutorials, so i sat down and rebuit netflix entirely to my liking.",
      "The website was rebuilt with reactjs, styled with tailwind-css and film details was fetched from Tmdb Api."
    ],
    secondary: [
      "PWA",
      "React",
      "TypeScript",
      "Custom Hooks",
      "Data Visualization",
      "Interview/Survey",
      "CSS in JS",
      "UI/UX",
    ],
    githubLink: "https://github.com/joeephwild/netflix-clone-main",
    liveLink: "https://netflix-clone-main-seven.vercel.app/",
    next: "portfolio",
    leftFlex: 0,
    rightFlex: 1,
    thumbnailOffset: "60%",
    offsetX: 30,
    offsetY: -10,
  },
  {
    id: "CareerUP",
    image: careerup,
    sequence: 2,
    title: "CareerUP-Dapp",
    text: [
      "Huddle01 Holiday hacathon came and we were to build a projects using their sdk, so i thought of an idea and came wit a web3 job application site thats also connect the employers and applicants with a video call.",
      "CareerUP was a success thanks to my partner Diksha Sonic from india who we both built this project using thirdweb and Huddle01 sdk.",
     
    ],
    secondary: [
      "React",
      "TypeScript",
      "Custom Hooks",
      "Smooth Scroll",
      "Framer Motion",
      "Transitions",
      "CSS in JS",
      "UI/UX",
    ],
    githubLink: "https://github.com/joeephwild/careerdev",
    liveLink: "https://careerdev.vercel.app/",
    next: "xpensity-v1",
    leftFlex: 3,
    rightFlex: 1,
    thumbnailOffset: "20%",
    offsetX: 30,
    offsetY: -10,
  },
  {
    id: "Crowdfunding-Dapp",
    image: crowdfund,
    sequence: 3,
    title: "Crowdfunding-Dapp",
    text: [
      "Crowdfunding platforms are websites that enable interaction between fundraisers and the crowd. Financial pledges can be made and collected through the crowdfunding platform. Fundraisers are usually charged a fee by crowdfunding platforms if the fundraising campaign has been successful, now brought to the web3 platform, was an amazing journey.",
    ],
    secondary: [
      "Vue",
      "Vuex",
      "VueRouter",
      "TypeScript",
      "Scss/Sass",
      "Webpack",
      "UI/UX",
      "SPA",
    ],
    githubLink: "https://github.com/joeephwild/Crowdfunding-blockchain",
    liveLink: "https://crowdfunding-blockchain-seven.vercel.app/",
    next: "lava-ui",
    leftFlex: 1,
    rightFlex: 3,
    thumbnailOffset: "70%",
    offsetX: -10,
    offsetY: 5,
  },
  {
    id: "Starbucks-Clone",
    image: starbucks,
    sequence: 4,
    title: "Starbucks-Clone",
    text: [
      "A fully responsive frontend clone of starbucks built with reactjs, styled with tailwindcss and some other amazing tech stack. ",
      
    ],
    secondary: ["Vue", "Scss/Sass", "TypeScript", "UX/UI", "NPM"],
    githubLink: "https://github.com/joeephwild/Starbucks-clone",
    liveLink: "https://starbucks-clone-ivory.vercel.app/",
    next: "agency",
    leftFlex: 1,
    rightFlex: 1,
    thumbnailOffset: "10%",
    offsetX: -10,
    offsetY: -2,
  },
];
