export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: 'hackathons' | 'courses';
  categoryLabel: string;
  issuer: string;
  issuerOrg?: string;
  date: string;
  description: string;
  credentialId?: string;
  award?: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-ideathon-vitap",
    title: "Voice of Students — An Ideathon",
    subtitle: "First Place Winner",
    category: "hackathons",
    categoryLabel: "Hackathons",
    issuer: "Institution of Engineers (India) – CSE Students' Chapter",
    issuerOrg: "VIT-AP University",
    date: "24 January 2026",
    award: "1st Place (First Position)",
    description: "Secured First Place in the university-wide 'Voice of Students – An Ideathon' organized by the Institution of Engineers (India) CSE Students' Chapter on the occasion of International Day of Education.",
    tags: ["Ideathon", "Innovation", "1st Place", "VIT-AP", "IEI"],
    image: "/assets/certificates/hackathons/vit-ap-ideathon-cert.jpg",
    featured: true
  },
  {
    id: "course-dicom-iitm-vertiv",
    title: "Digital - Certified Intelligent Data Center (O&M)",
    subtitle: "Professional Certification",
    category: "courses",
    categoryLabel: "Courses",
    issuer: "IITM Pravartak Technologies Foundation (IIT Madras)",
    issuerOrg: "SWAYAM Plus & Vertiv",
    date: "27 July 2026 — 14 September 2026",
    description: "Successfully completed the rigorous certification course titled 'Digital - Certified Intelligent Data Center - O&M', conducted jointly by IITM Pravartak Technologies Foundation (Technology Innovation Hub of IIT Madras), SWAYAM Plus, and Vertiv.",
    tags: ["Data Center O&M", "Cloud & Infra", "IIT Madras", "SWAYAM Plus", "Vertiv"],
    image: "/assets/certificates/courses/dicom-iitm-vertiv-cert.jpg",
    featured: true
  },
  {
    id: "course-hedera-hcda",
    title: "Hedera Certified Developer Associate (HCDA)",
    subtitle: "Developer Associate Certification",
    category: "courses",
    categoryLabel: "Courses",
    issuer: "The Hashgraph Association",
    issuerOrg: "Built on Hedera",
    date: "29 July 2026",
    description: "Official developer certification validating proficiency in building decentralized applications, smart contract deployment, consensus services, and token services on the Hedera Hashgraph DLT network.",
    tags: ["Hedera Hashgraph", "Smart Contracts", "Web3 / DLT", "Consensus", "HCDA"],
    image: "/assets/certificates/courses/hedera-hcda-cert.jpg",
    featured: true
  },
  {
    id: "course-hedera-hcf",
    title: "Hedera Certified Foundation (HCF)",
    subtitle: "Foundational Certification",
    category: "courses",
    categoryLabel: "Courses",
    issuer: "The Hashgraph Association",
    issuerOrg: "Built on Hedera",
    date: "28 July 2026",
    description: "Certified foundation credential assessing core architectural knowledge of the Hedera Hashgraph network, asynchronous Byzantine Fault Tolerant (ABFT) consensus, and enterprise distributed ledger ecosystem.",
    tags: ["Hedera", "ABFT Consensus", "Distributed Ledger", "HCF"],
    image: "/assets/certificates/courses/hedera-hcf-cert.jpg",
    featured: false
  },
  {
    id: "course-vitap-ai-adaptive-modeling",
    title: "AI-Driven Adaptive Modeling & Signal Denoising",
    subtitle: "Value Added Course (SENSE)",
    category: "courses",
    categoryLabel: "Courses",
    issuer: "School of Electronics Engineering (SENSE)",
    issuerOrg: "VIT-AP University",
    date: "4 January 2026 — 23 April 2026",
    credentialId: "Reg. No. 25BEC7089",
    description: "Semester-long specialized Value Added Course covering modern machine learning methodologies, adaptive filtering, neural networks, and mathematical modeling tailored for audio/RF signal denoising.",
    tags: ["Adaptive Modeling", "Signal Denoising", "Machine Learning", "DSP", "VIT-AP"],
    image: "/assets/certificates/courses/vit-ap-adaptive-ai-cert.jpg",
    featured: false
  }
];
