import { FaLocationArrow } from "react-icons/fa";
import Link from "../../utils/Link";
import { FaMobileAlt } from "react-icons/fa";

const footerLinks: Link[] = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop"
  },
  {
    id: 3,
    name: "About",
    link: "/#about"
  },
  {
    id: 4,
    name: "Blog",
    link: "/#blog"
  }
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4"> 
            <a
              href=""
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              ACHILE
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde odio numquam quasi
            </p>
            <p className="text-gray-500 mb-4">Made with 💖 by Danieldev</p>
            <a href="http://facebook.com/huycoder2k5" className="bg-primary/90 text-white py-2 px-4 mt-6 text-sm rounded-full">
            Visit my Facebook Profile
            </a>
          </div>
          {/* Footer Links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
                        <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             {/* Company Adress  */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
            <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-gray-500"/>
                <p className="text-nowrap">Ngu Hanh Son district, Danang City</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>035768***</p>
              </div>
            </div>
          </div>
          </div>

          {/* second links  */}


         
        </div>
      </div>
    </div>
  );
};

export default Footer;
