import { socials } from "../data/socials";

const Socials = () => {
  return (
    <>
      {socials.map((social) => {
        return (
          <a
            key={social.href}
            href={social.href}
            target='_blank'
            className='mr-5 text-gray-400 hover:text-blue-500 transition-colors duration-200'
          >
            {social.icon}
          </a>
        );
      })}
    </>
  );
};
 
export default Socials;
