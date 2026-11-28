export const profile = {
  name: "Davish Talreja",
  roles: ["B.Tech ECE Student", "Developer", "AI Enthusiast"],
  bio: `B.Tech Electronics & Communication Engineering student at VIT AP University with a passion for 
technology that spans both hardware and software. From designing digital circuits 
in Verilog to building intelligent AI models and full-stack web applications, 
I love turning ideas into reality. My interdisciplinary skill set bridges hardware 
design and software development.`,
  stats: {
    projects: 4,
    technologies: 25,
    yearsCoding: 3,
  },
  location: "India",
  email: "davishtalreja@gmail.com",
  socials: {
    github: "https://github.com/Davish-code",
    linkedin: "https://www.linkedin.com/in/davish-talreja-ba1bb0230/",
    twitter: "https://x.com/DavishTalr53045",
  },
  skills: [
    "Python", "Java", "Embedded C", "C++", "HTML/CSS", "OpenCV", "NumPy", "Tailwind CSS",
    "MySQL", "Firebase", "Supabase", "SQLite3",
    "Verilog", "PCB Design", "Microcontrollers (ESP32, Arduino)", "Sensors", "ARM Cortex M3 (LPC1768)",
    "MATLAB", "KiCad", "Vivado (FPGA)", "Multisim", "Git/GitHub", "Keil Micro-Vision",
    "Signal Denoising & AI Adaptive Modelling", "Adaptive Signal Filters"
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
  experiences: [
    {
      type: "Internship",
      role: "AI Dataset & QA Intern",
      organization: "Shieldnex Aerospace",
      duration: "1st Decemeber 2026 to Present",
      description: "",
      skills: ["AI","Python","ML","QA","Data Labelling"],
    },
    {
      type: "Technical Member",
      role: "Technical Member",
      organization: "IETE Student Chapter",
      duration: "July 2026 to present",
      description: "",
      skills: ["IOT","Embedded Systems","Microcontrollers","Sensors"],
    },
  ],

  achievements: [
    {
      type: "Competetion Winner with 1st Rank",
      title: "Top Game Creator, Game On Night (1st Place)",
      issuer: "Google Student Ambassador Program",
      date: "25 November 2026",
      description: "Won 1st place in a Gemini-powered game design challenge by building an original 4-player co-op game, '11:59 PM: Final_Final_v3', with Gemini and Nano Banana and pitching it in 60 seconds.",
      tags: ["Gemini", "Nano Banana", "Game Design", "Pitching"],
    },
    {
      type: "Course Completion Certificate",
      title: "AI-Driven Adaptive Modeling & Signal Denoising",
      issuer: "School of Electronics Engineering (SENSE), VIT-AP University",
      date: "4 January 2026 to 23 April 2026",
      description: "Semester-long Value Added Course on adaptive modeling and signal denoising using AI and machine learning.",
      tags: ["Adaptive Modeling", "Signal Denoising", "Machine Learning", "DSP"],
    },
    {
      type: "Course Completion Certificate",
      title: "Digital - Certified Intelligent Data Center (O&M)",
      issuer: "IIT Madras Pravartak",
      date: "27 July 2026 — 14 September 2026",
      description: "Successfully completed the rigorous certification course titled 'Digital - Certified Intelligent Data Center - O&M', conducted jointly by IITM Pravartak Technologies Foundation (Technology Innovation Hub of IIT Madras), SWAYAM Plus, and Vertiv.",
      tags: ["Data Center", "Operations & Maintenance", "Critical Infrastructure Management", "Facility Management", "Digital Transformation", "IT Infrastructure", "Networking", "HVAC Systems", "Power Systems", "Data Center Security", "Monitoring & Analytics", "Best Practices", "Professional Development"]
    },
    {
      type: "Competetion Winner with 1st Rank",
      title: "Voice of Students — An Ideathon",
      issuer:"IEI-CSE Club, VIT AP University",
      date: "24 January 2025",
      description: "Secured First Place in the university-wide 'Voice of Students – An Ideathon' organized by the Institution of Engineers (India) CSE Students' Chapter on the occasion of International Day of Education.",
      tags: []
    }  
  ],
};