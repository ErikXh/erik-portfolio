import { useState } from "react";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleNavbar = () => {
    setClicked(!clicked);
  };

  const NAV_LINKS = [
    { href: '#', key: 'Home', label: 'Home' },
    { href: '#Tech', key: 'Technologies', label: 'Technologies' },
    { href: '#Projects', key: 'Projects', label: 'Projects' },
    { href: '#Contact', key: 'Contact', label: 'Contact' },
  ];

  return (
    <div className="fixed z-10 w-full">
      <nav className="py-2 w-full flex justify-evenly md:justify-around">
        <div className="w-[80%] flex justify-between my-0 mx-auto bg-white rounded-lg shadow-lg px-4 md:px-8">

        <div className="w-auto font-bold text-xl md:px-2 lg:px-3 py-[1.2rem]">
          <a className="hover:text-gray-600"
          href={NAV_LINKS[0].href} 
          label={NAV_LINKS[0].label}>
          {NAV_LINKS[0].key}
          </a>
        </div>

        <div className="w-80 hidden lg:block pt-[0.7rem] pb-4 text-center">
            <ul className="flex justify-evenly">
                <li className="md:p-[0.70rem] sm:p-4 text-center">
                    <a 
                    className="hover:text-gray-600"
                    href={NAV_LINKS[1].href} 
                    label={NAV_LINKS[1].label}>
                    {NAV_LINKS[1].key}
                    </a>
                </li>
                <li className="md:p-[0.7rem] sm:p-4 text-center">
                    <a 
                    className="hover:text-gray-600"
                    href={NAV_LINKS[2].href} 
                    label={NAV_LINKS[2].label}>
                    {NAV_LINKS[2].key}
                    </a>
                </li>
                <li className="md:p-[0.7rem] sm:p-4">
                    <a 
                    className="hover:text-gray-600"
                    href={NAV_LINKS[3].href} 
                    label={NAV_LINKS[3].label}>
                    {NAV_LINKS[3].key}
                    </a>
                </li>
            </ul>
        </div>

          <div className="lg:hidden">
            <div
              className="md:px-2 lg:px-6 py-[1.2rem]"
              onClick={toggleNavbar}
            >
              <i className="ri-menu-line text-2xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${clicked ? 'block' : 'hidden'} mx-auto w-[80%] md:w-[60%] lg:hidden duration-500`}
      >
        <div className="flex justify-between bg-white rounded-lg shadow-lg px-8 w-full">
          <ul className="flex flex-col justify-evenly w-full">
            <li
              className={`p-[0.70rem] sm:p-4 text-center transition duration-800 ease-in-out`}
              onClick={toggleNavbar}
            >
              <a
                className="hover:text-gray-600"
                href={NAV_LINKS[1].href}
                label={NAV_LINKS[1].label}
              >
                {NAV_LINKS[1].key}
              </a>
            </li>
            <li
              className="p-[0.7rem] sm:p-4 text-center"
              onClick={toggleNavbar}
            >
              <a
                className="hover:text-gray-600"
                href={NAV_LINKS[2].href}
                label={NAV_LINKS[2].label}
              >
                {NAV_LINKS[2].key}
              </a>
            </li>
            <li
              className="p-[0.7rem] sm:p-4 text-center"
              onClick={toggleNavbar}
            >
              <a
                className="hover:text-gray-600"
                href={NAV_LINKS[3].href}
                label={NAV_LINKS[3].label}
              >
                {NAV_LINKS[3].key}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;