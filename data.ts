
import { Education, Experience, Award, Project } from './types';

export const name = "Dr.-Ing. Sujit Kumar Sikder";
export const position = "Senior Scientist";
export const institution = "Leibniz Institute of Ecological Urban and Regional Development (IOER), Dresden, Germany";

export const researchInterests = [
  "Actionable spatial insights for pathways toward a net-zero future",
  "Integrated perspectives on land use, energy, and mobility systems",
  "Urban Science, Spatial Transformation",
  "Spatial Analysis, Hybrid Modelling, Geocomputation",
  "Open Data, Data Management"
];

export const experience: Experience[] = [
  {
    role: "Senior Scientist",
    institution: "Leibniz Institute of Ecological Urban and Regional Development (IOER), Dresden",
    period: "Since 08/2017",
    details: [
      "Research Area - Spatial Information and Modeling (FBM) and Research Data Centre (IOER-RDC)"
    ]
  },
  {
    role: "Research Associate & PhD Fellow",
    institution: "University of Bonn, Institute of Geodesy and Geoinformation (IGG)",
    period: "2012 – 2017",
    details: []
  },
  {
    role: "Research Intern & Data Analyst",
    institution: "United Nations University (UNU), Bonn",
    period: "2012",
    details: []
  },
  {
    role: "Urban Planner & Technical Consultant",
    institution: "Geoinformation Consulting, Bangladesh",
    period: "2006 – 2009",
    details: []
  }
];

export const education: Education[] = [
  {
    degree: "PhD in Engineering (Dr.-Ing.)",
    institution: "University of Bonn",
    period: "2012 – 2017"
  },
  {
    degree: "Master of Science (M.Sc.)",
    institution: "Technical University of Munich (TUM)",
    period: "2009 – 2011"
  },
  {
    degree: "Bachelor of Urban and Rural Planning",
    institution: "Khulna University",
    period: "2001 – 2005"
  }
];

export const memberships = [
  "Area Co-Editor, Journal of Data & Policy",
  "Grant Proposal Reviewer, UKRI/ESRC",
  "Grant Proposal Reviewer, NFDI4Earth/DFG",
  "Grant Proposal Reviewer, New European Bauhaus Call/Horizon Europe",
  "Associate Editor (Guest), Frontiers in Sustainable Cities",
  "Reviewer for Nature, PLOS ONE, and other high-impact journals",
  "Member: DVW (Germany), RDA (Germany), BIP (Bangladesh)"
];

export const awards: Award[] = [
  { title: "KAAD Doctoral Fellowship", detail: "Full 36-month scholarship for doctoral studies in Germany" },
  { title: "DAAD Postgraduate Fellowship", detail: "20-month fellowship for M.Sc. studies at TU Munich" },
  { title: "Jury Award: Climate KIC-Hessen", detail: "Recognized for Innovative Retrofit Ideas in sustainability" },
  { title: "International Conference Travel Grant", detail: "Awarded by BMBF (Germany)" }
];

export const projects: Project[] = [
  {
    name: "Development of the Social-Spatial Science Research Data Infrastructure SoRa: FAIR, smart, inclusive",
    description: "Contributing as a Research Associate to the DFG-funded SoRa project, focusing on spatial information and modelling frameworks.",
    tags: ["Spatial Modelling", "DFG", "Urban Science", "Geolinking"]
  },
  {
    name: "Open data for teaching and research in spatial study programs",
    description: "Developing Open Educational Resources for geoinformation and open data analytics, funded by BMVI.",
    tags: ["BMVI", "Geodata", "eLearning"]
  },
  {
    name: "IOER -Research Data Centre",
    description: "Supporting the Research Data Centre at IOER, managing complex datasets for urban and regional development research.",
    tags: ["Data Management", "IOER", "Infrastructure"]
  }
];
