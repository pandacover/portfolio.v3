export type ExperienceType = {
  id: string;
  end: string;
  start: string;
  title: string;
  orgName: string;
};

export type ExperiencesType = ExperienceType[];

const getFrontendTitle = (title: string) => `${title} (Frontend)`;

export const EXPERIENCES = [
  {
    id: "tekion-ase-1",
    title: getFrontendTitle("Associate Software Engineer"),
    end: "Present",
    start: "Jun 2023",
    orgName: "Tekion",
  },
  {
    id: "tekion-ase-intern-1",
    title: getFrontendTitle("Associate Software Engineer Intern"),
    end: "Jun 2023",
    start: "Jan 2023",
    orgName: "Tekion",
  },
];
