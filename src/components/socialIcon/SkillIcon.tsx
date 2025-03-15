import Image from "next/image";
import Link from "next/link";

type SkillIconProps = {
  src: string;
  alt: string;
  href: string;
};

const SkillIcon = ({ src, alt, href }: SkillIconProps) => {
  return (
    <Link href={href}>
      <figure className="w-[30px] h-[30px] border border-gray-200 flex items-center justify-center rounded-lg hover:border-2 hover:border-green-200">
        <Image width={14} height={14} alt={alt} src={src} />
      </figure>
    </Link>
  );
};

export default SkillIcon;
