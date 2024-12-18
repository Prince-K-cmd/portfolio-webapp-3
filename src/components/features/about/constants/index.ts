import { ExperienceItem, EducationItem, AboutMetadata } from "../types/about";

export const ABOUT_METADATA: AboutMetadata = {
  name: "Prince Kyeremeh",
  professionalTitle: "Full Stack Developer & Data Engineer",
  shortBio:
    "Innovative software engineer transforming complex challenges into elegant solutions.",
  longBio: `A passionate software engineer with a robust background in full-stack development. 
            Specializing in creating scalable, efficient, and user-centric applications. 
            Committed to continuous learning and pushing technological boundaries.`,
  profileImage: "/images/profile.jpg",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of cloud-native applications using React and Node.js.",
  },
  {
    title: "Software Developer",
    company: "Startup Name",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack web applications.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2018 - 2022",
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    period: "2023",
  },
];

export const INTERESTS = [
  "Open Source",
  "AI/ML",
  "Game Development",
  "Photography",
  "Hiking",
];
