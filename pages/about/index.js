import Container from "../../components/container/container";

const About = () => {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 min-h-screen'>
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-5 text-gray-900 '>
          About
        </h1>{" "}
        <div className='text-xl md:text-2xl tracking-tight mb-5 text-gray-600'>
          I write one blog post per week. I write about life, my projects,
          fitness and other topics I find interesting.
        </div>
      </div>
    </Container>
  );
};

export default About;
