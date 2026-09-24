export const profile = {
  name: "Davish Talreja",
  roles: ["B.Tech ECE Student", "Developer", "AI Enthusiast"],
  bio: `B.Tech Electronics & Communication Engineering student with a passion for 
technology that spans both hardware and software. From designing digital circuits 
in Verilog to building intelligent AI models and full-stack web applications, 
I love turning ideas into reality. My interdisciplinary skill set bridges hardware 
design and software development.`,
  stats: {
    projects: 4,
    technologies: 8,
    yearsCoding: 3,
  },
  location: "India",
  email: "davishtalreja13@gmail.com",
  socials: {
    github: "https://github.com/Davish-code",
    linkedin: "https://www.linkedin.com/in/davish-talreja-ba1bb0230/",
    twitter: "https://x.com/DavishTalr53045",
  },
  skills: [
    "Python", "Java", "Web Development", "Artificial Intelligence",
    "Verilog / HDL", "MATLAB", "Circuit Design (KiCad)", "Flutter",
  ],
  projects: [
    {
      name: "AI-Powered Data Analytics",
      subtitle: "UIDAI Hackathon",
      description: "An intelligent assistant built with Python and AI capabilities to identify anomalies in raw data.",
      tags: ["Python", "AI", "GPS"],
      category: "AI",
      image: "/assets/project-ai.png",
      links: {
        code: "https://github.com/Davish-code/UIDAI-HACKATHON",
        report: "/assets/Project_Drishti_Final_Report.pdf",
      },
    },
    // {
    //   name: "RISC-V Processor Design",
    //   description: "A 32-bit RISC-V processor implemented in Verilog HDL with pipelining, hazard detection, and full ALU support.",
    //   tags: ["Verilog", "FPGA", "Digital Design"],
    //   category: "Hardware",
    //   image: "/assets/project-verilog.png",
    //   links: { code: "" },
    // },
    {
      name: "E-Commerce Bakery",
      description: "A responsive real-time e-commerce website built with HTML, CSS, JavaScript, and Firebase real-time DB.",
      tags: ["JavaScript", "HTML/CSS", "API"],
      category: "Web",
      image: "/assets/project-web.png",
      links: { demo: "https://yumei-bake.davishtalreja11.workers.dev/" },
    },
    {
      name: "Driver Monitoring & Automatic Lane Changing",
      description: "An embedded IoT system using sensors and microcontrollers for real-time environmental monitoring with a web dashboard. Using YOLO for Object Detection & OpenCV for Streamline Detection.",
      tags: ["Python", "IoT", "Embedded"],
      category: "Hardware",
      image: "/assets/project-iot.png",
      links: { code: "https://github.com/Davish-code/Auto-Lane-Assists" },
    },
  ],
  journey: [
    { year: "2025 — Present", title: "B.Tech ECE", description: "Pursuing Electronics and Communication Engineering, focusing on VLSI design, signal processing, and embedded systems." },
    { year: "2025", title: "AI & Machine Learning", description: "Built projects with neural networks, NLP, and computer vision using Python." },
    { year: "2025", title: "Web Development", description: "Learned full-stack web development, building responsive websites and interactive web applications." },
    { year: "2022", title: "Started Coding Journey", description: "Began programming with Python and Java, building a strong foundation in data structures and algorithms." },
  ],
};