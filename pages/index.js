import fs from "fs";
import graymatter from "gray-matter";
import Link from "next/link";
import path from "path";
import { RoughNotation } from "react-rough-notation";
import Container from "../components/container/container";
import HomePageProjectCard from "../components/homepage/ProjectCard";
import SeeMore from "../components/homepage/seeMore";
import { projects } from "../data/projects/projectList";

export default function Home({ blogs }) {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 '>
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-5 text-gray-900 '>
          Hi there, I’m Hamish.
        </h1>
        <h3 className='text-md md:text-lg font-light mb-4 text-gray-800 text-justify'>
          <p className='mb-5'>
            I'm a{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#abff4f'
              animationDuration={1500}
            >
              full-stack developer
            </RoughNotation>{" "}
            who is passionate about building{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#ff5d8f'
              animationDuration={1500}
            >
              software
            </RoughNotation>{" "}
            and{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#0aff99'
              animationDuration={1500}
            >
              entrepreneurship.
            </RoughNotation>{" "}
            I'm currently working as a Flutter developer for a software
            development agency.
            {/* Feel free to{" "}
            <Link href='/about'>
              <a className='text-blue-500'>
                <RoughNotation
                  type='underline'
                  multiline={true}
                  show={true}
                  color='#5fa4f9'
                  animationDuration={1500}
                >
                  learn more about myself and my skills.
                </RoughNotation>
              </a>
            </Link> */}
          </p>
          <p className='mb-5'>
            I'm also very interested in the concept of building{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#0aefff'
              animationDuration={1500}
            >
              profitable side-projects.
            </RoughNotation>{" "}
            My goal is to use my software development skills to build successful
            micro SaaS businesses. I aim to start a{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#c77dff'
              animationDuration={1500}
            >
              new startup each month.
            </RoughNotation>{" "}
            While you're here, you can
            <Link href='/projects'>
              <a className='text-blue-500'>
                {" "}
                <RoughNotation
                  type='underline'
                  multiline={true}
                  show={true}
                  color='#5fa4f9'
                  animationDuration={1500}
                >
                  check out my projects.
                </RoughNotation>{" "}
              </a>
            </Link>
          </p>
          {/* <p>
            Finally, I have a{" "}
            <RoughNotation
              type='highlight'
              multiline={true}
              show={true}
              color='#fbff12'
              animationDuration={1500}
            >
              personal blog
            </RoughNotation>
            . Where I write about various topics such as my experience building
            software. If you have some free time,
            <Link href='/blogs'>
              <a className='text-blue-500'>
                {" "}
                <RoughNotation
                  type='underline'
                  multiline={true}
                  show={true}
                  color='#5fa4f9'
                  animationDuration={1500}
                >
                  skim through my posts
                </RoughNotation>
                .
              </a>
            </Link>
          </p>{" "} */}
          <p className='mt-5 text-gray-700 font-semibold tracking-tighter'>
            Feel free to reach out if you want to hire a developer, have
            questions or just want to connect.
          </p>
        </h3>
        <div>
          <h1 className='font-bold mb-5 text-3xl md:text-4xl tracking-tight mt-20 text-gray-900 '>
            Main Projects
          </h1>
          {projects.map((project) => {
            return (
              <div key={project.title}>
                {project.highlighted ? (
                  <HomePageProjectCard
                    title={project.title}
                    github={project.github}
                    text={project.text}
                    link={project.link}
                    pic={project.pic}
                    techStack={project.techStack}
                  />
                ) : null}
              </div>
            );
          })}
          <SeeMore slug='/projects' />
        </div>
        {/* <div>
          <h1 className='font-bold mb-5 text-3xl md:text-4xl tracking-tight mt-20 text-gray-900 '>
            Recent Blog Posts
          </h1>
          {blogs.map((blog) => {
            return (
              <div key={blog.title}>
                <BlogCard
                  title={blog.title}
                  subtitle={blog.subtitle}
                  slug={blog.slug}
                  date={blog.date}
                />
              </div>
            );
          })}
          <SeeMore slug='/blogs' />
        </div> */}
      </div>
    </Container>
  );
}

export const getStaticProps = async (context) => {
  // get the blogs from the blog directory
  const blogFiles = fs.readdirSync(path.join("data/blogs"));

  // get the slugs from filename
  const rawBlogs = blogFiles.map((blog) => {
    let slug = blog.replace(".md", "");
    let blogFile = fs.readFileSync(path.join("data/blogs", blog), "utf-8");
    let { data: frontmatter } = graymatter(blogFile);
    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      subtitle: frontmatter.subtitle,
    };
  });

  let blogs = rawBlogs.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });

  blogs.splice(3);

  return {
    props: { blogs },
  };
};
