"use client";

import { useCallback } from "react";

import SKILLS_LIST, { SKILLS_TYPE } from "./skills.constant";
import Container from "../container";
import Heading from "../heading";

const Skills = () => {
  const renderSkill = useCallback(
    ({ id, label }: SKILLS_TYPE) => (
      <li id={id} key={id}>
        {label}
      </li>
    ),
    [],
  );

  return (
    <Container>
      <Heading>What I Work With</Heading>
      <ul className="flex gap-8 flex-wrap text-3xl font-semibold">
        {SKILLS_LIST.map(renderSkill)}
      </ul>
    </Container>
  );
};

export default Skills;
