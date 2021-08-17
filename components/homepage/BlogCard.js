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
            <div className='font-semibold text-lg md:text-xl text-gray-900 group-hover:text-blue-500 mr-5'>
              {title}
            </div>
            <div className='text-sm font-semibold md:text-lg text-gray-400 group-hover:text-blue-500'>
              {formattedDate[0]}
            </div>
          </div>
          <div className='mt-3 text-md font-light md:text-xl text-gray-700 group-hover:text-blue-500'>
            {subtitle}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
