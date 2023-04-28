import {
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  jobify,
  appie,
  breakout,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const tech = [
  {
    name: 'HTML 5',
    icon: html,
    color: '#ff6d00',
  },
  {
    name: 'CSS 3',
    icon: css,
    color: '#039be5',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    color: '#ffd600',
  },
  {
    name: 'React JS',
    icon: reactjs,
    color: '#53c1de',
  },

  {
    name: 'Node JS',
    icon: nodejs,
    color: '#21a366',
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    color: '#4caf50',
  },
  {
    name: 'git',
    icon: git,
    color: '#f4511e',
  },
];

const experience = {
  topics: [
    'Programming Foundation, Git & Github',
    'HTML, CSS & JS(ES6)',
    'React JS, Node JS, MongoDB',
    'AWS & Serverless Functions',
  ],
  tasks: ['HTML & CSS', 'Javascript', 'React JS', 'Node JS'],
};

const projects = [
  {
    name: 'Jobify - Job Tracking App',
    live: 'https://jobify-gryo.onrender.com/',
    github: 'https://github.com/Ginryo0/Jobify---MERN-Project',
    paragraph:
      'Jobify is a job tracking application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to track the status of their job applications. Jobify is a valuable tool for job seekers looking to streamline their job search process',
    tools: ['React', 'Express', 'MongoDB'],
    img: jobify,
  },
  {
    name: 'Appie - Landing Page',
    live: 'https://appie-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/Appie',
    paragraph: `Appie is a landing page built using HTML and CSS. The page has a clean layout and visually appealing design. It imitates a word press theme and It was actually my first task at`,
    inLink: {
      link: 'https://www.albonyanalmarsos.org/',
      name: 'Kalbonyan Almarsos',
    },
    tools: ['HTML', 'CSS'],
    img: appie,
  },
  {
    name: 'Breakout Game',
    live: 'https://breakout-gryo.netlify.app/',
    github:
      'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main/Projects/17-Breakout',
    paragraph:
      'Breakout is a classic arcade-style game that has been recreated as a web app using HTML, CSS, and JavaScript. I built it using canvas element. It involves controlling a paddle at the bottom of the screen to bounce a ball and break through a wall of bricks at the top of the screen. I added 3 difficulty levels each has different game settings and UI. It was a part of my',
    inLink: {
      link: 'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main/Projects',
      name: '20 Vanilla Web Projects',
    },
    tools: ['HTML', 'CSS', 'Javascript'],
    img: breakout,
  },
];

const additionalProjects = [
  {
    name: '20 Vanilla Web Projects',
    github:
      'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main/Projects',
    paragraph:
      'These are 20 Web Applications that focus heavily on Javascript and CSS. They utilize different browser APIs, External APIs, local storage and much more. I really encourage you to give them a look',
    tools: ['HTML', 'CSS', 'Javascript'],
  },

  {
    name: 'React Meals',
    live: 'https://food-order-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/ReactMeals',
    paragraph:
      'React meals is a food order App built with react. You get 5 dishes you can choose from. You can add any of them to cart, fill a form to place an order',
    tools: ['React', 'CSS'],
  },
  // {
  //   name: 'Kanban Board',
  //   live: 'https://kanbanboard-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/Kanban-Board',
  //   paragraph:
  //     'Kanban board is a visual tool used to manage tasks and workflow in a project. This project was built mainly with Javascript. It utilizes drag events, touch events and local storage to ensure a good user experience across different platforms. That was my second task at',
  //   inLink: {
  //     link: 'https://www.albonyanalmarsos.org/',
  //     name: 'Kalbonyan Almarsos',
  //   },
  //   tools: ['HTML', 'CSS', 'Javascript'],
  // },
  {
    name: 'Node Shop',
    live: 'https://node-4y1s.onrender.com/',
    github: 'https://github.com/Ginryo0/Node-Deployment',
    paragraph:
      'This is a shop application that is focused mainly on backend. It has many features including: adding new products, editing and deleting them by admin, shopping cart, integrating stripe for checkout , a PDF invoice for each order and much more',
    tools: ['Express', 'MongoDB', 'EJS', 'API', 'Stripe'],
  },
  {
    name: 'Omnifood',
    live: 'https://omnifood-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/omnifood',
    paragraph:
      'Omnifood is a Landing page for a tech company that uses AI to ensure customers eat healthy food',
    tools: ['HTML', 'CSS'],
  },
  // {
  //   name: 'Social Feed',
  //   live: 'https://social-feed-gryo.onrender.com/',
  //   github: 'https://github.com/Ginryo0/Node-Feed',
  //   paragraph:
  //     'Social Feed is a full stack project that imitates social media posts. It uses WebSockets to ensure feed posts are always up-to-date',
  //   tools: ['Express', 'MongoDB', 'WebSockets', 'GraphQl'],
  // },
  {
    name: 'Serverless Functions',
    live: 'https://serverless-fncs-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/Serverless-Functions',
    paragraph:
      'This is a project that focuses on AWS Serverless Lambda functions. It includes 8 mini applications like Weather App, Newsletter App and more',
    tools: ['CSS', 'Javascript', 'AWS Lambda'],
  },
  // {
  //   name: 'Redux Cart',
  //   live: 'https://redux-cart-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/ReduxCart',
  //   paragraph:
  //     'Redux Cart is a simple cart app that utilizes react redux and firebase to manage and store cart state',
  //   tools: ['React', 'Redux', 'Firebase'],
  // },
];

export { tech, experience, projects, additionalProjects };
