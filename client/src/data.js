// All portfolio content lives here and comes from the resume.
// Empty links are hidden automatically: fill them in when they exist.
export const profile = {
  name: "Harshad Sawant",
  headline: "I build full-stack web apps with the MERN stack, and I'm learning to put machine learning behind them.",
  summary:
    "Computer Science Engineering undergraduate at D. Y. Patil College of Engineering & Technology (2023–2027). I build REST-backed web apps with React, Node, Express and MongoDB, and I'm working on an ML pipeline that predicts student placement readiness.",
  email: "harshadsawant1207@gmail.com",
  phone: "9699556705",
  github: "https://github.com/Harshad-2004", // verify this is your profile
  linkedin: "https://www.linkedin.com/in/-harshad-sawant",
  resume: "/Harshad-Sawant-Resume.pdf",
  photo: "/profile.jpg",
};

export const hireMe = `mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Harshad Sawant")}`;

// icon = Devicon slug (devicon.dev); mono = dark single-colour logo, inverted in dark mode.
export const skills = [
  { group: "Languages", items: [
    { name: "Python", icon: "python" }, { name: "JavaScript", icon: "javascript" }, { name: "C", icon: "c" },
    { name: "C++", icon: "cplusplus" }, { name: "Java", icon: "java" },
  ] },
  { group: "Web & mobile", items: [
    { name: "React.js", icon: "react" }, { name: "Node.js", icon: "nodejs" }, { name: "Express.js", icon: "express", mono: true },
    { name: "HTML5", icon: "html5" }, { name: "CSS3", icon: "css3" }, { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Android", icon: "android" },
  ] },
  { group: "Databases", items: [{ name: "MongoDB", icon: "mongodb" }, { name: "MySQL", icon: "mysql" }] },
  { group: "Tools & platforms", items: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github", mono: true }, { name: "Android Studio", icon: "androidstudio" },
    { name: "VS Code", icon: "vscode" }, { name: "Vercel", icon: "vercel", mono: true },
  ] },
  { group: "Core concepts", items: [
    { name: "Data Structures & Algorithms", abbr: "DSA" }, { name: "OOP", abbr: "{ }" },
    { name: "DBMS", abbr: "DB" }, { name: "REST APIs", abbr: "API" },
  ] },
];

export const projects = [
  {
    title: "DevSpotlight",
    subtitle: "Student developer portfolio platform",
    status: "",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    points: [
      "Lets students create developer profiles and showcase projects with descriptions, technologies, GitHub repositories and live demo links.",
      "Project discovery by technology or category, plus likes, comments and collaboration requests.",
      "Authentication with JWT and bcrypt, served by REST APIs built on Mongoose.",
    ],
    github: "",
    demo: "",
  },
  {
    title: "EduVerse",
    subtitle: "AI career prediction system",
    status: "In progress",
    tech: ["Python", "Machine learning", "NLP", "Random Forest", "XGBoost", "Docker"],
    points: [
      "Designing a 10-stage ML pipeline that builds a student's \"digital twin\" to predict placement readiness and pinpoint skill gaps.",
      "Building an NLP assistant and role-based dashboards; core ML modules are underway, with Docker deployment as the target.",
    ],
    github: "",
    demo: "",
  },
  {
    title: "Home appliances shop",
    subtitle: "Android e-commerce app",
    status: "",
    tech: ["Java", "XML", "Android Studio", "SQLite"],
    points: [
      "Android app for browsing home appliances with product details and add-to-cart, built with RecyclerView, Activities, Intents and SQLite.",
    ],
    github: "",
    demo: "",
  },
];

export const journey = [
  { when: "2025 – 2026", title: "Professional Development Committee Member", where: "Rotaract Club of DYP Sunshine, D. Y. Patil College of Engineering & Technology", text: "Contributing to professional development initiatives and club activities." },
  { when: "2024", title: "Participant, Smart India Hackathon 2024", where: "National-level hackathon", text: "Built an Agriculture E-Commerce Platform for farmers." },
];

export const internship = [
  {
    when: "Jan 2024",
    title: "Student Coordinator, Rural/Social Internship",
    where: "D. Y. Patil College of Engineering & Technology · Halsawade Village",
    points: [
      "Coordinated a team of 18 students for a 10-day rural internship and led interactions with Gram Panchayat officials.",
      "Surveyed 250+ households, identified key village problems (bus stand and open drainage) and presented solutions to local authorities.",
    ],
  },
];

export const education = [
  { when: "2023 – 2027", title: "B.E., Computer Science & Engineering", where: "D. Y. Patil College of Engineering & Technology, Kolhapur" },
  { when: "2023", title: "HSC, Class 12", where: "Chate School & Junior College of Science, Shahupuri, Kolhapur" },
  { when: "2021", title: "SSC, Class 10", where: "Chhatrapati Shahu Vidyalaya, Kolhapur" },
];
