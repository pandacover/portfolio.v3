"use client";

import { useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import Heading from "../heading";
import SocialIcon from "../socialIcon";
import SOCIAL_ICONS from "./header.icons";

const Header = () => {
  const renderSocialIcon = useCallback(
    (icon: (typeof SOCIAL_ICONS)[0], ind: number) => (
      <SocialIcon key={ind} {...icon} />
    ),
    [],
  );

  return (
    <header className="flex flex-row mb-14 justify-between">
      <section className="">
        <Heading isName>Luv Makin</Heading>
        <div className="flex items-center bg-green-400 text-black rounded-md">
          <figure>
            <Image
              width={14}
              height={14}
              alt="location"
              src="icons/location.svg"
            />
          </figure>
          &nbsp;<span>Bangalore, India </span>
        </div>
      </section>
      <section className="">
        <div className="flex h-[3.87rem] items-center gap-4">
          {SOCIAL_ICONS.map(renderSocialIcon)}
        </div>
        <div>
          <button>Download CV</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
