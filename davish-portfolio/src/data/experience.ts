export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyOrg?: string;
  location: string;
  type: string;
  period: string;
  isCurrent: boolean;
  orderNumber: string;
  description: string[];
  skills: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "shieldnex-intern",
    role: "AI Dataset Labelling & QA Intern",
    company: "Shieldnex Aerospace",
    companyOrg: "Aerospace & Defense AI",
    location: "Remote / Hybrid",
    type: "Internship",
    period: "Dec 2025 — Present",
    isCurrent: true,
    orderNumber: "02 // CURRENT POSITION",
    description: [
      "Conducting precision AI dataset annotation, segmentation, and quality assurance workflows for mission-critical aerospace vision models.",
      "Executing rigorous QA checks on ground-truth training datasets to minimize error margins and enhance deep learning model inference accuracy.",
      "Collaborating with engineering teams to optimize data validation pipelines and streamline training data curation."
    ],
    skills: ["AI Dataset QA", "Computer Vision", "Data Annotation", "Model Validation", "Aerospace Systems"]
  },
  {
    id: "iete-technical-member",
    role: "Technical Member",
    company: "IETE Student Forum",
    companyOrg: "VIT-AP University",
    location: "Amaravati, India",
    type: "Technical Club & Organization",
    period: "Aug 2025 — Present",
    isCurrent: false,
    orderNumber: "01 // INITIAL APPOINTMENT",
    description: [
      "Actively managing and executing core technical projects, hackathons, and technical symposiums hosted by the IETE student chapter.",
      "Coordinating hardware and software demonstrations, assisting students with hands-on embedded systems and coding challenges.",
      "Spearheading technical event operations and project mentoring across university-wide initiatives."
    ],
    skills: ["Technical Project Management", "Hardware & Software", "Embedded Systems", "Event Operations", "Team Leadership"]
  }
];
