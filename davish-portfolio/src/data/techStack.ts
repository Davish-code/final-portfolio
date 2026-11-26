export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: string;
  accentClass: string;
  borderClass: string;
  badgeClass: string;
  skills: string[];
}

export const techStackData: SkillCategory[] = [
  {
    id: "languages-frameworks",
    code: "01 // SYNTAX & RUNTIMES",
    title: "Languages & Frameworks",
    subtitle: "Core software languages, numerical computing & UI styling",
    icon: "code",
    accentClass: "text-primary",
    borderClass: "border-primary/30 group-hover:border-primary/60",
    badgeClass: "bg-primary/15 text-primary border-primary/20",
    skills: [
      "Python",
      "Java",
      "Embedded C",
      "C++",
      "HTML",
      "CSS",
      "OpenCV",
      "NumPy",
      "Tailwind CSS"
    ]
  },
  {
    id: "database",
    code: "02 // DATA STORAGE & CLOUD",
    title: "Database Systems",
    subtitle: "Relational database engines & serverless cloud stores",
    icon: "database",
    accentClass: "text-secondary",
    borderClass: "border-secondary/30 group-hover:border-secondary/60",
    badgeClass: "bg-secondary/15 text-secondary border-secondary/20",
    skills: [
      "MySQL",
      "Firebase (Cloud)",
      "Supabase (Cloud)",
      "SQLite3"
    ]
  },
  {
    id: "hardware",
    code: "03 // SILICON & EMBEDDED",
    title: "Hardware & Embedded",
    subtitle: "RTL design, microcontrollers & sensor interfaces",
    icon: "memory",
    accentClass: "text-tertiary",
    borderClass: "border-tertiary/30 group-hover:border-tertiary/60",
    badgeClass: "bg-tertiary/15 text-tertiary border-tertiary/20",
    skills: [
      "Verilog",
      "PCB Design",
      "Microcontrollers (IoT, ESP32, Arduino)",
      "Sensors",
      "ARM Cortex M3 (32-bit LPC1768)"
    ]
  },
  {
    id: "tools",
    code: "04 // TOOLCHAIN & EDA",
    title: "Engineering Tools",
    subtitle: "Simulation, circuit design, FPGA synthesis & VCS",
    icon: "construction",
    accentClass: "text-primary-fixed",
    borderClass: "border-primary-fixed/30 group-hover:border-primary-fixed/60",
    badgeClass: "bg-primary-fixed/15 text-primary-fixed border-primary-fixed/20",
    skills: [
      "MATLAB",
      "KiCad",
      "Vivado (FPGA)",
      "Multisim",
      "Git / GitHub",
      "Keil Micro-Vision 4/5"
    ]
  },
  {
    id: "academic-exposure",
    code: "05 // RESEARCH & SPECIALIZATION",
    title: "Academic Exposure",
    subtitle: "Digital signal processing & machine learning algorithms",
    icon: "psychology",
    accentClass: "text-amber-300",
    borderClass: "border-amber-300/30 group-hover:border-amber-300/60",
    badgeClass: "bg-amber-400/15 text-amber-300 border-amber-400/20",
    skills: [
      "Signal Denoising & AI Adaptive Modelling",
      "Adaptive Signal Filters"
    ]
  }
];
