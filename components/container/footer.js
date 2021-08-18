import Socials from "../socials";

const Footer = () => {
  return (
    <div className='max-w-3xl mx-auto my-5'>
      <footer>
        <div class='border border-gray-200 dark:border-gray-600 w-full my-8'></div>{" "}
        <div className='flex justify-between '>
          <a className='text-gray-500' href='mailto:hamishcoding@gmail.com'>
            2021 - Hamish Boodhoo
          </a>{" "}
          <div className='flex items-center text-gray-500'>
            Thank you for visiting, have a nice day!
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
