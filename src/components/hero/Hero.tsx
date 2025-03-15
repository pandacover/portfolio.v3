import Container from "../container";

type HeroProps = {
  orgName: string;
};
const Hero = ({ orgName }: HeroProps) => {
  return (
    <Container>
      <p className="font-medium text-3xl leading-12 md:leading-10 mb-4">
        I&apos;m a Software Engineer with 2+ years of experience specializing in
        Frontend / Web Development.{" "}
      </p>
      <p className="font-medium text-3xl leading-12 md:leading-10">
        I&apos;m currently working at {orgName}.
      </p>
    </Container>
  );
};

export default Hero;
