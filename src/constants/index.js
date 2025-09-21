export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Social',
    href: '#social',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    position: 'Tech Lead at Mercado Libre',
    img: 'assets/review1.png',
    review:
      'Working with Alejandro was exceptional. His expertise in Go and Java backend development helped us scale our e-commerce platform to handle millions of users. His attention to performance and security is outstanding.',
  },
  {
    id: 2,
    name: 'Ana Rodriguez',
    position: 'Senior Developer at ScotiaTech',
    img: 'assets/review2.png',
    review:
      'Alejandro\'s skills in Angular and Java development were crucial for our banking platform. He delivered robust, secure solutions that met all compliance requirements. A true professional with deep technical knowledge.',
  },
  {
    id: 3,
    name: 'David Torres',
    position: 'Project Manager at Banco de Bogotá',
    img: 'assets/review3.png',
    review:
      'Alejandro led the development of our banking applications with expertise in full-stack development. His knowledge of AWS, Terraform, and agile methodologies ensured successful project delivery.',
  },
  {
    id: 4,
    name: 'María González',
    position: 'Marketing Director at Coca-Cola',
    img: 'assets/review4.png',
    review:
      'Alejandro\'s work on our Forme Player campaign was outstanding. He created a seamless video streaming platform that perfectly integrated our brand and delivered an exceptional user experience for our Sony Pictures content.',
  },
];

export const myProjects = [
  {
    title: 'Reddit Clone',
    desc: 'A full-featured Reddit clone developed while following freeCodeCamp courses. Built with React, Chakra UI, and Firebase, this project demonstrates modern web development practices and user interface design.',
    subdesc:
      'Features include user authentication, post creation, voting system, and real-time updates. Implemented responsive design and modern UI/UX principles using Chakra UI components.',
    href: 'https://reddit-clone-kappa-teal.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/reddit.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Chakra UI',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/typescript.png',
      }
    ],
  },
  {
    title: 'Halo Infinite Landing Page',
    desc: 'A responsive landing page for Halo Infinite built with HTML5, CSS, and vanilla JavaScript. Features dark/light mode detection and modern web design principles.',
    subdesc:
      'Developed using Vite for build optimization and deployed on GitHub Pages. The website automatically adapts to user\'s system theme preferences and provides an immersive gaming experience.',
    href: 'https://alejandro2097.github.io/HaloInfiniteWeb/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML5',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS3',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Maps Application with Angular',
    desc: 'A comprehensive mapping application using MapBox API that allows users to search places worldwide and get directions similar to Google Maps. Features location-based services and interactive maps.',
    subdesc:
      'Built with Angular and MapBox API, includes geolocation services, place search, and routing functionality. Responsive design optimized for both desktop and mobile devices.',
    href: 'https://maps-angular-xd.netlify.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MapBox API',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      }
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mercado Libre',
    pos: 'Backend Developer',
    duration: 'Dec 2023 - Present',
    title: "Working as a Backend Developer in one of Latin America's largest e-commerce platforms. Developing scalable backend services using Go and Java, contributing to high-performance systems that serve millions of users.",
    icon: '/assets/mercadolibre_logo.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ScotiaTech',
    pos: 'Software Engineer Associate',
    duration: 'Jul 2023 - Feb 2024',
    title: "Developed full-stack applications using Java and Angular. Collaborated with cross-functional teams to deliver robust banking solutions and financial technology applications.",
    icon: '/assets/scotiatech_logo.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Banco de Bogotá',
    pos: 'Semi-Senior Full Stack Developer',
    duration: 'May 2022 - Jul 2023',
    title: "Led development of banking applications using Angular, Stencil, Node.js, and TypeScript. Implemented Infrastructure as Code with Terraform for AWS, and developed REST APIs following agile methodologies.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Banco de Bogotá',
    pos: 'Junior Full Stack Developer',
    duration: 'Oct 2021 - May 2022',
    title: "Started as Junior Developer working with Angular 12+, TypeScript/Node.js backend development, and AWS infrastructure management using Terraform. Developed REST APIs and implemented agile methodologies.",
    icon: '/assets/banco_de_bogota_logo.jpg',
    animation: 'idle',
  },
  {
    id: 5,
    name: 'Accenture Colombia',
    pos: 'Frontend Developer',
    duration: 'May 2021 - Sept 2021',
    title: "Developed applications using Java 8/Spring Boot and Angular 11+. Implemented Docker containers and participated in Accenture Academy to acquire DevOps skills and best practices.",
    icon: '/assets/accenture_colombia_logo.jpg',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'FCB&FiRe',
    pos: 'Web Developer',
    duration: 'Aug 2019 - Apr 2021',
    title: "Developed and implemented custom web applications. Managed MySQL databases and contributed to various web development projects, gaining foundational experience in full-stack development.",
    icon: '/assets/fcbfrst_logo.jpg',
    animation: 'salute',
  },
];
