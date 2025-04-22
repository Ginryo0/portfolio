import { jobify, appie, breakout } from '../assets';

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
    name: 'Next.JS',
    color: '#21a366',
  },
  {
    name: 'React',
    color: '#53c1de',
  },

  {
    name: 'Node.JS',
    color: '#21a366',
  },
  {
    name: 'Tailwind',
    color: '#21a366',
  },
  {
    name: 'Redux',
    color: '#21a366',
  },
];

const EXPERIENCES = [
  {
    title: 'Full-Stack Developer',
    company: 'Magic Apps AI',
    date: 'May 2023 - Present (Contract)',
    description: [
      'Built and maintained 4 AI-powered SaaS apps over 2 years, handling full-stack development, performance tuning, and feature delivery across a remote team.',
      'Developed BrainChat.ai from scratch — a multi-agent AI chat platform supporting OpenAI, Gemini, Claude, Mistral, with tools like image generation, web search, and data analysis.',
      'Created Chatio.ai, a chatbot builder for websites that generates knowledge bases from crawled content.',
      'Contributed to WebMagic.ai and EmailMagic.ai, AI-based Chrome extensions with supporting web apps and dashboards for content summarization and user management.',
    ],
    stack: [
      'Next.js',
      'Node.js',
      'Langchain',
      'PostgreSQL',
      'AWS',
      'Redux',
      'Tailwind',
      'ShadCN',
    ],
  },
  {
    title: 'Frontend Web Developer',
    company: 'Quran Tab',
    date: 'Nov 2023 – Present (Seasonal)',
    description: [
      'Enhanced Quranic translation API for real-time accuracy.',
      'Developed an accessible user interface for translations.',
      'Implemented end-to-end tests for cross-browser stability.',
    ],
    stack: ['React', 'SCSS', 'Playwright', 'Chakra UI', 'TypeScript'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Kalbonyan Elmarsos',
    date: 'Dec 2022 – Jul 2023',
    description: [
      'Completed an extensive internship covering modern web development technologies and tools.',
      'Built multiple projects showcasing full-stack skills, emphasizing frontend-backend synergy.',
    ],
    stack: ['React', 'Node.js', 'CSS', 'MongoDB', 'AWS', 'Styled Components'],
  },
];

const projects = [
  {
    name: 'BrainChat.ai',
    live: 'https://app.brainchat.ai',
    github: '',
    description: [
      {
        highlight: true,
        text: 'AI-powered platform',
      },
      {
        highlight: false,
        text: ' with multi-model chat across leading providers like OpenAI, Gemini, and Claude. Includes advanced tools for',
      },
      {
        highlight: true,
        text: ' image generation, web search, and data analysis.',
      },
      {
        highlight: false,
        text: ' Supports custom',
      },
      {
        highlight: true,
        text: ' Agents',
      },
      {
        highlight: false,
        text: ' and',
      },
      {
        highlight: true,
        text: ' Prompts',
      },
      {
        highlight: false,
        text: ', with shared',
      },
      {
        highlight: true,
        text: ' workspaces',
      },
      {
        highlight: false,
        text: ' for team collaboration on Chats, Agents, and Prompts.',
      },
    ],
    stack: [
      'Next.js',
      'Node.js',
      'Redux',
      'Shadcn',
      'Langchain',
      'IndexedDB',
      'AWS',
      'PostgreSQL',
    ],
    images: [jobify, appie, breakout],
  },
  {
    name: 'Chatio.ai',
    live: 'https://app.chatio.ai',
    github: '',
    description: [
      {
        highlight: true,
        text: 'Custom chatbot builder',
      },
      {
        highlight: false,
        text: ' that crawls websites to generate a dynamic knowledge base for accurate, tailored responses.',
      },
      {
        highlight: false,
        text: ' With an',
      },
      {
        highlight: true,
        text: ' embeddable script',
      },
      {
        highlight: false,
        text: ', users can easily integrate chatbots into their sites to boost engagement.',
      },
    ],
    stack: ['Next.js', 'Langchain', 'Pinecone', 'Supabase'],
    images: [jobify, appie, breakout],
  },
  {
    name: 'Jobify - Job Tracking App',
    live: 'https://jobify-gryo.onrender.com/',
    github: 'https://github.com/Ginryo0/Jobify---MERN-Project',
    description: [
      {
        highlight: true,
        text: 'Job tracking app',
      },
      {
        highlight: false,
        text: ' built with the MERN stack to manage and monitor job applications.',
      },
      {
        highlight: false,
        text: ' It helps job seekers stay organized and streamline their search process.',
      },
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Styled Components'],
    images: [jobify, appie, breakout],
  },
  // {
  //   name: 'Appie - Landing Page',
  //   live: 'https://appie-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/Appie',
  //   paragraph: `Appie is a landing page built using HTML and CSS. The page has a clean layout and visually appealing design. It imitates a word press theme and It was actually my first task at`,
  //   inLink: {
  //     link: 'https://www.albonyanalmarsos.org/',
  //     name: 'Kalbonyan Almarsos',
  //   },
  //   tools: ['HTML', 'CSS'],
  //   img: appie,
  // },
  // {
  //   name: 'Breakout Game',
  //   live: 'https://breakout-gryo.netlify.app/',
  //   github:
  //     'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main/Projects/17-Breakout',
  //   paragraph:
  //     'Breakout is a classic arcade-style game that has been recreated as a web app using HTML, CSS, and JavaScript. I built it using canvas element. It involves controlling a paddle at the bottom of the screen to bounce a ball and break through a wall of bricks at the top of the screen. I added 3 difficulty levels each has different game settings and UI. It was a part of my',
  //   inLink: {
  //     link: 'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main/Projects',
  //     name: '20 Vanilla Web Projects',
  //   },
  //   tools: ['HTML', 'CSS', 'Javascript'],
  //   img: breakout,
  // },
];

const additionalProjects = [
  {
    name: 'WebMagi.ai',
    live: 'https://dashboard.webmagic.ai/login?callbackUrl=https%3A%2F%2Fdashboard.webmagic.ai%2F',
    github: '',
    paragraph:
      'A SaaS platform for generating summaries from web pages, files, and text. Offers a Chrome extension and dashboard where users can produce summaries with varying levels of complexity and contextual depth and share them with friends',
    tools: ['Next.js', 'Express.js', 'Prisma', 'AWS EC2'],
  },
  {
    name: 'EmailMagic.ai',
    live: 'https://chromewebstore.google.com/detail/emailmagic-ai-email-assis/kddkonheakdfpnffdbfifhnbjehkaini',
    github: '',
    paragraph:
      'Chrome extension for generating tailored emails directly within the Gmail UI, with topic and tone control—supported by a dashboard for account management and onboarding',
    tools: ['Fastify.js', 'React.js', 'PostgreSQL', 'Plasmo'],
  },
  {
    name: 'Serverless Functions - Mini Projects',
    live: 'https://serverless-fncs-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/Serverless-Functions',
    paragraph:
      'This is a project that focuses on AWS Serverless Lambda functions. It includes 8 mini applications like Weather App, Newsletter App and more',
    tools: ['CSS', 'Javascript', 'AWS Lambda'],
  },
  {
    name: '20 Vanilla Web Projects',
    github: 'https://github.com/Ginryo0/20-Vanilla-Web-Projects/tree/main',
    paragraph:
      'These are 20 Web Applications that focus heavily on Javascript and CSS. They utilize different browser APIs, External APIs, local storage and much more. I really encourage you to give them a look',
    tools: ['HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'Appie - Landing Page',
    live: 'https://appie-gryo.netlify.app/',
    github: 'https://github.com/Ginryo0/Appie',
    paragraph:
      'Appie is a landing page built with HTML and CSS. It mimics a WordPress theme with a clean layout and was my first project during my internship.',

    tools: ['HTML', 'CSS'],
  },
  // {
  //   name: 'React Meals',
  //   live: 'https://food-order-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/ReactMeals',
  //   paragraph:
  //     'React meals is a food order App built with react. You get 5 dishes you can choose from. You can add any of them to cart, fill a form to place an order',
  //   tools: ['React', 'CSS'],
  // },
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
  // {
  //   name: 'Node Shop',
  //   live: 'https://node-4y1s.onrender.com/',
  //   github: 'https://github.com/Ginryo0/Node-Deployment',
  //   paragraph:
  //     'This is a shop application that is focused mainly on backend. It has many features including: adding new products, editing and deleting them by admin, shopping cart, integrating stripe for checkout , a PDF invoice for each order and much more',
  //   tools: ['Express', 'MongoDB', 'EJS', 'API', 'Stripe'],
  // },
  // {
  //   name: 'Omnifood',
  //   live: 'https://omnifood-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/omnifood',
  //   paragraph:
  //     'Omnifood is a Landing page for a tech company that uses AI to ensure customers eat healthy food',
  //   tools: ['HTML', 'CSS'],
  // },
  // {
  //   name: 'Social Feed',
  //   live: 'https://social-feed-gryo.onrender.com/',
  //   github: 'https://github.com/Ginryo0/Node-Feed',
  //   paragraph:
  //     'Social Feed is a full stack project that imitates social media posts. It uses WebSockets to ensure feed posts are always up-to-date',
  //   tools: ['Express', 'MongoDB', 'WebSockets', 'GraphQl'],
  // },

  // {
  //   name: 'Redux Cart',
  //   live: 'https://redux-cart-gryo.netlify.app/',
  //   github: 'https://github.com/Ginryo0/ReduxCart',
  //   paragraph:
  //     'Redux Cart is a simple cart app that utilizes react redux and firebase to manage and store cart state',
  //   tools: ['React', 'Redux', 'Firebase'],
  // },
];

export { tech, EXPERIENCES, projects, additionalProjects };
