import { Project, SkillCategory, Education } from './types';

export const RESEARCH_PROJECTS: Project[] = [
  {
    title: "Sono-Ink",
    category: "Biomaterials Research",
    description: "Presented a novel ultrasound-responsive polymer bio-ink designed for biomedical casting and bone repair applications.",
    points: [
      "Demonstrated translational potential of ultrasound-triggered biomaterials.",
      "Targeted rehabilitation and regenerative medicine.",
      "Presented at International Conference 2024."
    ],
    tags: ["Biomaterials", "Ultrasound", "Regenerative Medicine"],
    link: "https://github.com/suducodes"
  },
  {
    title: "Green Synthesis Nanoparticles",
    category: "Independent Research",
    description: "Synthesized eco-friendly copper nanoparticles using banana peel extract as a green reducing agent.",
    points: [
      "Evaluated antibacterial activity against pathogens.",
      "Used agar diffusion assays for validation.",
      "Sustainable nanotechnology approach."
    ],
    tags: ["Nanotech", "Green Chemistry", "Microbiology"],
    link: "https://github.com/suducodes"
  },
  {
    title: "Wound Healing Patch",
    category: "Product Development",
    description: "Developed a bio-active wound dressing using banana peel extract and aloe vera gel to enhance tissue regeneration.",
    points: [
      "Studied effects on inflammation and cell growth.",
      "Natural biomaterial formulation.",
      "Focus on accessible healthcare solutions."
    ],
    tags: ["Tissue Engineering", "Wound Care", "Formulation"],
    link: "https://github.com/suducodes"
  }
];

export const TECH_PROJECTS: Project[] = [
  {
    title: "BioVision",
    category: "Software Engineering",
    description: "Designed a software platform for visualizing and analyzing biomedical images to interpret tissue structures.",
    points: [
      "Improved interpretation of cellular patterns.",
      "Analyzing experimental results.",
      "Python-based image processing pipeline."
    ],
    tags: ["Python", "Image Processing", "Data Viz"],
    link: "https://github.com/suducodes"
  },
  {
    title: "3D-Convertor",
    category: "Visualization Tool",
    description: "Built a tool to convert biomedical/biological data (MRI/CT NRRD) into three-dimensional visual models.",
    points: [
      "Converts complex medical datasets into 3D models.",
      "Aids in understanding complex tissue structures.",
      "Bridge between radiology and 3D visualization."
    ],
    tags: ["3D Modeling", "Medical Imaging", "DICOM/NRRD"],
    link: "https://github.com/suducodes/3D-Convertor" 
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Wet-Lab & Bio",
    skills: ["Microbial Culturing", "Aseptic Techniques", "Biomaterial Fabrication", "Microscopy (Optical/Compound)", "Nanoparticle Synthesis", "Biocompatibility Testing"]
  },
  {
    title: "Computation",
    skills: ["Python", "MATLAB", "C", "Java", "HTML/CSS", "Biomedical Data Viz", "Image Processing"]
  },
  {
    title: "Instrumentation",
    skills: ["Arduino", "RP2040", "Medical Device Prototyping", "Sensor Interfacing", "Electronics Design"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E. Biomedical Engineering",
    institution: "KPR Institute of Engineering and Technology",
    year: "2023 - 2027",
    details: "CGPA: 8.4 / 10 | Academic Topper (3rd in Batch)"
  },
  {
    degree: "Higher Secondary (Grade 12)",
    institution: "KSIRS International School",
    year: "Completed 2023",
    details: "Percentage: 88.6%"
  }
];