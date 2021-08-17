import { useRouter } from "next/dist/client/router";

const SeeMore = ({ slug }) => {
  let router = useRouter();
  return (
    <div className='flex justify-center items-center mt-5'>
      {" "}
      <button
        type='button'
        className='flex items-center text-sm md:text-md my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 '
        onClick={() => router.push(slug)}
      >
        See all{" "}
        <svg
          className='h-4 w-4 ml-1'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
    </div>
  );
};

export default SeeMore;
