"use client";

import { useMemo } from "react";

type ContainerProps = {
  children: React.ReactNode;
  isName?: boolean;
};

const Heading = ({ children, isName }: ContainerProps) => {
  const classes = useMemo(
    () =>
      `text-[3.2rem] font-bold leading-[3.87rem] ${isName ? "" : "mb-[3.9rem]"}`,
    [isName],
  );

  return <h3 className={classes}>{children}</h3>;
};

export default Heading;
