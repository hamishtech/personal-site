import fs from "fs";
import path from "path";
import { format } from "date-fns";
import graymatter from "gray-matter";
import marked from "marked";
import Container from "../../components/container/container";
import readingTime from "reading-time";

const BlogPage = ({ frontMatter, content }) => {
  const time = readingTime(content);
  var date = format(new Date(frontMatter.date * 1000), "dd MMMM, yyyy");

  return (
    <Container>
      <article className='p-5'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black'>
            {frontMatter.title}
          </h1>
          <div className='flex justify-between items-center text-lg md:text-xl text-gray-500 my-7'>
            <div>{date}</div> <div>{time.text}</div>
          </div>
          <div className='text-xl md:text-2xl text-gray-600 my-7 italic'>
            {frontMatter.subtitle}
          </div>
          {frontMatter.img && <img src={frontMatter.img} />}
        </div>
        <div className='prose lg:prose-xl text-justify max-w-5xl mx-auto mt-10'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </article>
    </Container>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const blogFiles = fs.readdirSync(path.join("data/blogs"));
  let blogParams = blogFiles.map((file) => {
    let slug = file.replace(".md", "");
    return { params: { slug } };
  });
  return {
    paths: blogParams,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let blogFile = fs.readFileSync(
    path.join("data/blogs", params.slug + ".md"),
    "utf-8"
  );

  let matter = graymatter(blogFile);
  console.log(matter);

  return {
    props: { frontMatter: matter.data, content: matter.content },
  };
};
