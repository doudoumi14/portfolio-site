export interface EducationEntry {
  school: string;
  credential: string;
  period: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    school: "Université Laval",
    credential: "MBA, Business Analytics",
    period: "Expected 2027",
    note: "AACSB and EQUIS accredited: strategic management, financial intelligence, data-driven leadership",
  },
  {
    school: "Polytechnique Montréal",
    credential: "B.Eng., Software Engineering",
    period: "Graduated 2023",
  },
  {
    school: "Ordre des ingénieurs du Québec (OIQ)",
    credential: "Professional Engineer (P.Eng.)",
    period: "",
  },
];

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: CertificationEntry[] = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024 – 2027" },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford (via Coursera)",
    year: "2025",
  },
  { name: "AI For Everyone", issuer: "DeepLearning.AI", year: "2024" },
];
