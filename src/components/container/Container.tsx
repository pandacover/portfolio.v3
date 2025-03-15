type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <section className="mb-[5.8rem]">{children}</section>;
};

export default Container;
