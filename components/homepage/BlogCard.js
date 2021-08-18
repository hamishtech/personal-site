import Link from "next/link";

const BlogCard = ({ title, subtitle, slug, date }) => {
  const milliseconds = date * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  const formattedDate = humanDateFormat.split(",");

  return (
    <Link href={"/blogs/" + slug}>
      <a>
        <div className='flex flex-col mt-10 group p-5 border-1 p-5 shadow-md hover:cursor-pointer  rounded-lg bg-gray-50 hover:bg-blue-50 '>
          <div className='flex justify-between'>
            <div className='font-semibold text-lg md:text-xl  tracking-tighter    text-gray-900  mr-5'>
              {title}
            </div>
            <div className='text-sm font-semibold md:text-md text-gray-400 '>
              {formattedDate[0]}
            </div>
          </div>
          <div className='mt-3 text-md font-light md:text-lg text-gray-700'>
            {subtitle}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
