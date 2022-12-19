import shortid from "shortid";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";
import { useState } from "react";

const menuItems = [
  { id: shortid(), title: "home", link: "home" },
  { id: shortid(), title: "about", link: "about" },
  { id: shortid(), title: "planets", link: "planets" },
  { id: shortid(), title: "projects", link: "projects" },
  { id: shortid(), title: "blog", link: "blog" },
  { id: shortid(), title: "contacts", link: "contacts" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0 container mx-auto text-white z-50">
      <div className=" w-full flex justify-between gap-2 items-center p-5 lg:px-20">
        <div className=" uppercase logo">Spacepedia</div>

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.link}`}
                  className="capitalize text-lg tracking-wide text-gray-100 hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <input
            placeholder="Search..."
            type="text"
            className="bg-transparent ring-2 ring-gray-400 focus:ring-teal-500 py-1
             px-4 rounded-xl text-md hidden lg:block"
          />
        </div>

        <span
          className="md:hidden text-white cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          <UseAnimations
            animation={menu4}
            size={40}
            onClick={() => console.log("clicked")}
            strokeColor="white"
          />
        </span>
      </div>
      {/* For Moblie Responsive  */}

      <div
        className={`${
          showNav
            ? "scale-1 -translate-y-0 opacity-1"
            : "-translate-y-[1000px] opacity-0 scale-0"
        } duration-300 rounded md:hidden fixed top-1 right-2 bg-teal-400/20 backdrop-blur-md p-5 w-1/2 h-[300px]  flex justify-center z-50 items-center translate-y-6`}
      >
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => setShowNav(!showNav)}>
              <a
                href={`#${item.link}`}
                className="uppercase hover:text-teal-400"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <span
          className="absolute top-4 right-4 hover:text-red-500 text-lg duration-100 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          &#10005;
        </span>
      </div>


      {/* Social Links */}
      <div className="hidden md:block w-max p-2 space-x-7 font-thin uppercase tracking-wide text-sm -rotate-90 absolute top-[20rem] -left-[2rem] md:-left-[6rem]">
        <span>instagram</span>
        <span>facebook</span>
        <span>twitter</span>
      </div>
    </div>
  );
};

export default Navbar;
