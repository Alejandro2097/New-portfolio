// ==================== PROFILE DATA ====================
const profile = {
  name: "David Alejandro Huertas Castellanos",
  shortName: "Alejandro",
  role: "Full Stack Developer / Software Engineer",
  location: "Bogotá, Colombia",
  phone: "(+57) 301-695-8448",
  email: "huertas20971@gmail.com",
  website: "https://www.alejandro-huertas.com",
  github: "https://github.com/Alejandro2097",
  githubUsername: "Alejandro2097",
  linkedin: "https://www.linkedin.com/in/alejandro-huertas",
  linkedinHandle: "alejandro-huertas",
  profileImage: "/images/alejo1.JPEG",
  summary: [
    "Full Stack Developer with 5+ years of professional experience building scalable, high-performance applications using Go (Golang), React, Node.js, and AWS.",
    "Proven expertise delivering production-grade microservices for leading e-commerce and financial platforms including MercadoLibre, Scotiabank, and Banco de Bogotá.",
    "Strong proficiency in REST/GraphQL APIs, gRPC, event-driven architectures (Kafka, Pub/Sub), and cloud-native DevOps practices.",
    "Passionate about driving engineering excellence and continuous improvement."
  ]
};

// ==================== EXPERIENCE DATA ====================
const experience = [
  {
    id: 1,
    company: "MercadoLibre",
    role: "Full Stack Developer (Backend Focus)",
    location: "Bogotá, Colombia (Remote)",
    period: "December 2023 – September 2025",
    logo: "/images/mercadolibre-logo.png",
    highlights: [
      "Built Go (Golang) microservices for critical e-commerce flows (checkout, pricing, catalog)",
      "Implemented REST/gRPC/Protobuf with event-driven architecture using Kafka and AWS SQS/SNS",
      "Deployed on AWS (ECS, EKS, Lambda, S3, RDS) achieving 99.9% uptime",
      "Optimized performance reducing response times from ~220ms to ~120ms",
      "CI/CD with GitHub Actions, Terraform, observability with Prometheus, Grafana, OpenTelemetry"
    ]
  },
  {
    id: 2,
    company: "Scotiabank",
    role: "Full Stack Software Engineer",
    location: "Bogotá, Colombia (Hybrid)",
    period: "July 2023 – February 2024",
    logo: "/images/scotiabank-logo.png",
    highlights: [
      "Developed banking applications with high security standards",
      "Implemented full-stack solutions with React and Node.js",
      "Collaborated with cross-functional teams in Agile environment"
    ]
  },
  {
    id: 3,
    company: "Banco de Bogotá",
    role: "Full Stack Developer",
    location: "Bogotá, Colombia (On-site)",
    period: "October 2021 – July 2023",
    logo: "/images/bancobogota-logo.png",
    highlights: [
      "Built financial web applications serving thousands of users",
      "Implemented secure authentication and authorization flows",
      "Maintained and enhanced legacy systems"
    ]
  },
  {
    id: 4,
    company: "Accenture",
    role: "Frontend Developer",
    location: "Bogotá, Colombia (On-site)",
    period: "May 2021 – September 2021",
    logo: "/images/accenture-logo.png",
    highlights: [
      "Developed responsive user interfaces with modern frameworks",
      "Collaborated with UX/UI designers to implement pixel-perfect designs"
    ]
  },
  {
    id: 5,
    company: "FCB and FiRe",
    role: "Web Developer",
    location: "Bogotá, Colombia (On-site)",
    period: "August 2019 – April 2022",
    logo: "/images/fcb-logo.png",
    highlights: [
      "Built and maintained websites for various clients",
      "Implemented responsive designs and interactive features"
    ]
  }
];

// ==================== NAV & UI ====================
const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
    showOnMobile: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
    showOnMobile: false,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
    showOnMobile: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

// ==================== TECH STACK ====================
const techStack = [
  {
    category: "Backend",
    items: ["Go (Golang)", "Node.js", "Express", "gRPC", "REST APIs", "GraphQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (ECS, EKS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Databases & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "SQS/SNS"],
  },
  {
    category: "Monitoring & Tools",
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Git", "GitHub Actions"],
  },
];

// ==================== SOCIAL LINKS ====================
const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#333333",
    link: "https://github.com/Alejandro2097",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/alejandro-huertas",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/user.svg",
    bg: "#ea4335",
    link: "mailto:huertas20971@gmail.com",
  },
  {
    id: 4,
    text: "Website",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.alejandro-huertas.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/alejo1.JPEG",
  },
  {
    id: 2,
    img: "/images/alejo2.JPEG",
  },
  {
    id: 3,
    img: "/images/alejo3.JPEG",
  },
  {
    id: 4,
    img: "/images/alejo5.jpg",
  },
  {
    id: 5,
    img: "/images/alejo6.JPEG",
  },
];

export {
  profile,
  experience,
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: Stock App
    {
      id: 5,
      name: "Stock App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Stock App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Stock App is a real-time stock market visualization and tracking application designed for investors and traders.",
            "Instead of juggling multiple platforms, you get clean data visualization, price tracking, and portfolio insights all in one place.",
            "Think of it like having Bloomberg Terminal vibes—but accessible, modern, and built for everyone.",
            "It's built with React and TypeScript, consuming financial data APIs to deliver real-time market updates with a smooth, responsive interface.",
          ],
        },
        {
          id: 2,
          name: "stock-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stock-nr3jv10tv-alejandro2097s-projects.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github-repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Alejandro2097/Stock-app",
          position: "top-32 right-20",
        },
        {
          id: 4,
          name: "stock-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2: GTA VI Clone
    {
      id: 6,
      name: "Grand Theft Auto VI - Landing Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "GTA VI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A pixel-perfect clone of the official Grand Theft Auto VI landing page, showcasing advanced frontend skills.",
            "Instead of just static content, this project features smooth animations, responsive design, and attention to every visual detail.",
            "Think of it like recreating a blockbuster movie poster—but interactive, animated, and fully responsive across all devices.",
            "It's built with HTML5, CSS3, and JavaScript, focusing on performance, animations, and delivering a console-quality web experience.",
          ],
        },
        {
          id: 2,
          name: "gtavi-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://alejandro2097.github.io/Grand-Theft-Auto-VI/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "github-repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Alejandro2097/Grand-Theft-Auto-VI",
          position: "top-40 left-20",
        },
        {
          id: 4,
          name: "gta-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3: E-commerce
    {
      id: 7,
      name: "E-commerce Web App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "E-commerce Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-featured e-commerce platform with product catalog, shopping cart, and checkout flow.",
            "Instead of basic product listings, this delivers a complete shopping experience with filtering, search, cart management, and order processing.",
            "Think of it like a mini-Amazon—clean architecture, smooth UX, and all the essential e-commerce features.",
            "It's built with React and modern frontend practices, demonstrating scalable component architecture and state management patterns.",
          ],
        },
        {
          id: 2,
          name: "ecommerce.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://e-commerce-8hciuksy4-alejandro2097s-projects.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github-repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Alejandro2097/e-commerce",
          position: "top-32 right-20",
        },
        {
          id: 4,
          name: "ecommerce.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4: Reddit Clone
    {
      id: 8,
      name: "Reddit Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 left-40",
      windowPosition: "top-[46vh] left-7",
      children: [
        {
          id: 1,
          name: "Reddit Clone Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A functional Reddit clone featuring posts, voting system, comments, and community interactions.",
            "Instead of just mimicking the UI, this project implements core Reddit mechanics—upvotes, downvotes, nested comments, and real-time updates.",
            "Think of it like building a social network from scratch—complex state management, user interactions, and dynamic content rendering.",
            "It's built with React and backend integration, showcasing full-stack capabilities with authentication, data persistence, and real-time features.",
          ],
        },
        {
          id: 2,
          name: "reddit-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://reddit-clone-kappa-teal.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "github-repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Alejandro2097/Reddit-Clone",
          position: "top-32 right-20",
        },
        {
          id: 4,
          name: "reddit-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png", // TODO: Replace with actual Reddit Clone screenshot
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/alejo1.JPEG",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/alejo2.JPEG",
    },
    {
      id: 3,
      name: "professional-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/alejo3.JPEG",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/alejo1.JPEG",
      description: [
        "Hey! I'm Alejandro, a Full Stack Developer with 5+ years of experience building scalable, high-performance applications.",
        "I specialize in Go (Golang), React, Node.js, and AWS—delivering production-grade microservices for leading e-commerce and financial platforms like MercadoLibre, Scotiabank, and Banco de Bogotá.",
        "I'm passionate about clean code, system architecture, event-driven design, and building software that scales. From REST/GraphQL APIs to Kafka streaming and cloud-native DevOps, I love solving complex engineering challenges.",
        "When I'm not coding, you'll find me exploring new technologies, optimizing performance metrics, or diving deep into distributed systems architecture.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
