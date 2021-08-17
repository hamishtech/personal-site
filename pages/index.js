import fs from "fs";
import graymatter from "gray-matter";
import Link from "next/link";
import path from "path";
import Container from "../components/container/container";
import BlogCard from "../components/homepage/BlogCard";
import HomePageProjectCard from "../components/homepage/ProjectCard";
import SeeMore from "../components/homepage/seeMore";
import { projects } from "../data/projects/projectList";

export default function Home({ blogs }) {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 '>
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-5 text-gray-900 '>
          Hey there, I’m Hamish Boodhoo
        </h1>
        <h3 className='text-md md:text-lg font-light mb-4 text-gray-800 text-justify'>
          I'm a self-taught developer who previously worked in finance. I am
          passionate about building software and entrepreneurship. I use this
          site to showcase my projects and personal blog. {""}
          <Link href='/projects'>
            <alert>
              <span className='underline hover:cursor-pointer text-blue-500'>
                Check out my projects
              </span>
            </alert>
          </Link>
          , {""}
          <Link href='/blogs'>
            <a>
              <span className='underline hover:cursor-pointer text-blue-500'>
                read my blog
              </span>{" "}
            </a>
          </Link>
          or{" "}
          <Link href='/about'>
            <a>
              <span className='underline hover:cursor-pointer text-blue-500 '>
                learn more about me.
              </span>
            </a>
          </Link>
        </h3>
        <div>
          <h1 className='font-bold mb-5 text-3xl md:text-4xl tracking-tight mt-20 text-gray-900 '>
            Highlighted Projects
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
        <div>
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
        </div>
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
