import Link from "next/link";
import Footer from "./footer";

const Container = ({ children }) => {
  return (
    <>
      <nav className='flex items-center justify-between max-w-6xl p-8 mx-auto text-gray-900 bg-white sticky-nav md:my-5 bg-opacity-60'>
        <div>
          <Link href='/'>
            <img
              className='object-contain h-40 w-full hover:cursor-pointer'
              src='https://i.imgur.com/dHTtf4U.png'
            ></img>
          </Link>
        </div>
        <div>
          {NavBar.map((nav) => {
            return (
              <Link key={nav.text} href={nav.href}>
                <a className='text-gray-900 md:p-4 md:text-2xl text-xl p-2 hover:underline hover:text-green-600'>
                  {nav.text}
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default Container;

const NavBar = [
  { text: "Home", href: "/" },
  { text: "Projects", href: "/projects" },
  { text: "Blog", href: "/blogs" },
  { text: "About Me", href: "/about" },
];
