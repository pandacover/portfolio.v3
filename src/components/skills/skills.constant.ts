const SKILLS = [
  "Javascript",
  "Typescript",
  "Reactjs",
  "Nextjs",
  "Node.js",
  "Express.js",
  "Tailwind",
  "Sass",
  "HTML",
  "CSS",
  "Webpack",
  "Babel",
  "Git",
  "MongDB",
  "Java",
  "Cpp",
];

const SKILLS_LIST = SKILLS.map((skill) => ({
  id: skill.toLowerCase(),
  label: skill,
}));

export type SKILLS_TYPE = {
  id: string;
  label: string;
};

export default SKILLS_LIST;
