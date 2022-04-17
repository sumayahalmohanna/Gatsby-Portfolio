import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sam Almohanna | Front-end Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Sam Almohanna\'s portfolio website built using Gatsbyjs.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Howdy! I\'m ',
  name: 'Sam Almohanna',
  subtitle: 'a UI Designer and Web Developer based in the US.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.png',
  paragraphOne: 'I am a UI designer focused on creating user friendly Web and Mobile interfaces. My strong programming background and experience enable me to see a project through every stage of production alongside developers and product owners. Over the past 6 years I have gained experience working freelance on a multitude of projects in vastly different industries. I am passionate about creating accessible and engaging Web and Mobile UI’s.',
  paragraphTwo: 'I\'m currently working in a medical office where I quickly put my skills to use. Unifying brand presence across mediums, developing a standard operating procedures technology manual, and maintaining the website.',
  paragraphThree: 'I look forward to joining a talented team that is ready to take their user experience to the next level.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dailyui-3.jpg',
    title: 'UI Designs',
    info: 'I\'m currently participating in the Daily UI Challenge 100. Daily UI is a series of design challenges aimed to inspire and sharpen skills in 100 days.',
    info2: 'Follow along on my Dribbble account to see all my designs!',
    btnlabel: 'Visit Dribbble',
    url: 'https://dribbble.com/Sam_A',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactjs-portfolio-v1.png',
    title: 'Portfolio Website',
    info: 'Since graduating and building my first portfolio website, every few years I like to take the time to update and redesign my website. This is a chance for me to test new ideas, experiment with styles, and utilize new technologies. This year I built a new portfolio website using Reactjs, MaterialUI, and a few other libraries. My target audience are recruiters and hiring managers so I utilized Google Analytics as well as Hotjar to track their interactions. ',
    info2label: 'Challenges:',
    info2: 'After several months of closely tracking user interactions on my website I found that most recruiters never actually visited my website. The few who did visit my website spent a couple seconds on the landing page, glanced at the skills section then left. For the few who did move to the case studies page, they glanced through the images and left without reading the copy. (not judging, just observing)',
    info3label: 'Solutions:',
    info3: 'Redesigned my website as a Single Page Application, removed the skills section that was being used as a check list to see if I perfectly match a position, and kept it simple! For this redesign I used a Gatsbyjs starter, GraphQL, and Sass.',
    btnlabel: 'Visit old website',
    url: 'https://sumayahalmohanna.github.io/porfolioReactApp',
    repo: 'https://github.com/sumayahalmohanna/portfolioReactApp/tree/master', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to hire me? Connect with me on Linkedin today!',
  btn: 'Let\'s Chat',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sumayahalmohanna/',
    },
    {
      id: nanoid(),
      name: 'dribbble',
      url: 'https://dribbble.com/Sam_A',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sumayahalmohanna',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
