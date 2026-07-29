export type Education = {
  school: string;
  degree: string;
  gpa?: string;
  location: string;
  dates: string;
};

export const education: Education[] = [
  {
    school: "BMS College of Engineering",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    gpa: "GPA 8.9/10",
    location: "Bangalore, India",
    dates: "Dec 2021 – Jun 2025",
  },
];
