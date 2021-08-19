import Container from "../../components/container/container";
import HomePageProjectCard from "../../components/homepage/ProjectCard";
import { projects } from "../../data/projects/projectList";

const Projects = () => {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 min-h-screen'>
        <div className='flex justify-between items-center mb-5'>
          {" "}
          <h1 className='font-bold text-4xl md:text-5xl tracking-tight text-gray-900 '>
            My Projects
          </h1>
        </div>
        <div className='text-lg md:text-xl tracking-tight mb-5 text-gray-600'>
          Check out the list of my projects below. It contains SaaS businesses
          and hobby projects.
        </div>

        {projects.map((project) => {
          return (
            <>
              <HomePageProjectCard
                key={project.title}
                title={project.title}
                text={project.text}
                github={project.github}
                link={project.link}
                pic={project.pic}
                techStack={project.techStack}
              />
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
