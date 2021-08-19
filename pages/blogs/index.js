import Container from "../../components/container/container";
import fs from "fs";
import path from "path";
import graymatter from "gray-matter";
import BlogCard from "../../components/homepage/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <Container>
      <div className='max-w-3xl mx-auto md:p-5 p-10 min-h-screen'>
        <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-5 text-gray-900 '>
          Blog
        </h1>{" "}
        <div className='text-md md:text-xl tracking-tight mb-5 text-gray-600'>
          I write one blog post per week. I write about my experience building
          software and about other topics such as fitness and life.
        </div>
        <div className='text-3xl md:text-4xl mt-10 font-semibold tracking-tight mb-5 text-gray-900'>
          All Articles
        </div>
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.title}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              slug={blog.slug}
            />
          );
        })}{" "}
      </div>
    </Container>
  );
};

export default Blogs;

export const getStaticProps = async (context) => {
  const files = fs.readdirSync("data/blogs");

  let rawBlogs = files.map((file) => {
    let slug = file.replace(".md", "");
    let blogFile = fs.readFileSync(path.join("data/blogs", file), "utf-8");
    let { data: frontMatter } = graymatter(blogFile);
    return {
      slug,
      title: frontMatter.title,
      subtitle: frontMatter.subtitle,
      date: frontMatter.date,
    };
  });

  let blogs = rawBlogs.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });

  return {
    props: { blogs },
  };
};
