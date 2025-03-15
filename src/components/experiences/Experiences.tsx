import Container from "../container";
import Heading from "../heading";

import { EXPERIENCES, ExperienceType } from "./experiences.constants";

type ExperiencesProps = {};

const Experiences = (props: ExperiencesProps) => {
  const renderExperience = (experience: ExperienceType) => {
    const { id, end, start, title, orgName } = experience;

    return (
      <li key={id} className="relative pl-8">
        <h5 className="text-[2rem] font-semibold before:content-[''] before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-green-400">
          {orgName}
        </h5>
        <h4 className="text-[2.4rem] font-bold">{title}</h4>
        <span className="font-semibold opacity-80">
          {start} - {end}
        </span>
      </li>
    );
  };

  return (
    <Container>
      <Heading>Experiences</Heading>
      <ul className="flex flex-col gap-16">
        {EXPERIENCES.map(renderExperience)}
      </ul>
    </Container>
  );
};

export default Experiences;
