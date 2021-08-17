import Link from "next/link";

const BlogCard = ({ title, subtitle, slug, date }) => {
  const milliseconds = date * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  const formattedDate = humanDateFormat.split(",");

  return (
    <Link href={"/blogs/" + slug}>
      <a>
        <div className='flex flex-col mt-10 group'>
          <div className='flex justify-between'>
            <div className='font-semibold text-xl md:text-3xl text-gray-900 group-hover:text-green-500'>
              {title}
            </div>
            <div className='text-md font-semibold md:text-xl text-gray-400 group-hover:text-green-500'>
              {formattedDate[0]}
            </div>
          </div>
          <div className='mt-3 text-xl font-light md:text-2xl text-gray-700 group-hover:text-green-500'>
            {subtitle}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
