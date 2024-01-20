import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import * as allicons from "/src/assets";

// import {
//   htmlIcon,
//   cssIcon,
//   jsIcon,
//   reactIcon,
//   gitIcon,
//   githubIcon,
//   viteIcon,
//   nodeIcon,
//   figmaIcon,
//   bookshelf,
//   finder,
//   messenger,
//   moviedb,
//   phonebook,
//   webstudio,
//   yachts,
//   avatar,
// } from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon: allicons.htmlIcon,
  cssIcon: allicons.cssIcon,
  jsIcon: allicons.jsIcon,
  reactIcon: allicons.reactIcon,
  gitIcon: allicons.gitIcon,
  githubIcon: allicons.githubIcon,
  viteIcon: allicons.viteIcon,
  nodeIcon: allicons.nodeIcon,
  figmaIcon: allicons.figmaIcon,
  avatar: allicons.avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "My name is Andrii, and I am a frontend developer with a strong analytical mindset based in Kyiv. I have a strong passion for programming, learning new technologies and implementing them in projects",
    "I'm a responsible, punctual and motivated individual who is always willing to learn and gain new experience. Motivated to continually develop and improve my skills. The ability to find solutions to any problem is also one of my strengths. Friendly team player, always willing to help.",

    "I'm always happy to collaborate with people and teams who genuinely support my passion for creating something new, distinctive, and useful. I really appreciate your visit to my portfolio!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Messenger",
    description:
      "Individual project. Chat app with user authorisation, user search, ability to send messages, photos. Stack: HTML / SASS, styled-components, React, Firebase Authentication, Firestore",
    image: allicons.messenger,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "Bookshelf",
    description:
      "Team project. A website with a responsive layout, auth, filterd by cathegory, add book to wishlist. Role: SCRUM, developer, header/ modal/ auth. Stack: HTML, CSS, JavaScript, REST API, Firebase",
    image: allicons.bookshelf,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "Phonebook",
    description:
      "Individual project. Phonebook app with user authorisation, user filter, ability to add/remove user, connected to Swagger backend API. Stack: HTML, React, Redux Toolkit, MUI.",
    image: allicons.phonebook,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "MoviesDB",
    description:
      "Individual project. Movies base app with recent movies, movie search, movie details, connected to themoviedb.org.  Stack: HTML, React, Styled Components, Axios, REST API",
    image: allicons.moviedb,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "Finder",
    description:
      "Individual project. A website with a responsive layout for search photo/video on Pixabay.com, included search via tags. Stack: HTML, CSS, JavaScript, REST API, Parcel",
    image: allicons.finder,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "Yacht Adventures",
    description:
      "Team project. A website with a pesponsive layout. Role: SCRUM, developer, gallery section/page animations. Stack: HTML, CSS, JavaScript, SwiperJS, AOS, Vite Vanilla",
    image: allicons.yachts,
    source_code_link: "",
    demo_link: "",
  },
  {
    name: "Web Studio",
    description:
      "Individual project. A website with a pesponsive layout. Stack: HTML, CSS, Vite",
    image: allicons.webstudio,
    source_code_link: "",
    demo_link: "",
  },
];

const memoji = {
  image: [allicons.avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: allicons.htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: allicons.cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: allicons.jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: allicons.reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },

  {
    id: "git",
    title: "Git",
    icon: allicons.gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: allicons.githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },

  {
    id: "vite",
    title: "Vite",
    icon: allicons.viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },

  {
    id: "node",
    title: "Node",
    icon: allicons.nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: allicons.figmaIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
