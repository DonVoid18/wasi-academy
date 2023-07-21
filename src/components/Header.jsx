import { useState } from "react";
import BtnBurger from "./buttonsToggle/BtnBurger";
import BtnClosed from "./buttonsToggle/BtnClosed";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo.svg";
const DashHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const linkActive = () => {
    return ({ isActive }) => (isActive ? "link text-primary" : "link");
  };
  // list menu
  const menu = [
    {
      text: "Conócenos",
      link: "conocenos",
    },
    {
      text: "Docentes",
      link: "docentes",
    },
    {
      text: "Matricúlate ahora",
      link: "matricula",
    },
    {
      text: "Noticias",
      link: "noticias",
    },
    {
      text: "Ubicación",
      link: "ubicacion",
    },
  ];

  return (
    <>
      <div className="fixed top-0 z-10 flex h-header w-full items-center justify-center bg-white text-header">
        <header className="flex w-containerWitdh max-w-containerMax items-center justify-between">
          <div>{logoHTML}</div>
          <div className="flex items-center justify-center xl:hidden">
            <BtnBurger funct1={setToggleMenu} />
          </div>
          <div className="hidden xl:block">
            <nav>
              <ul className="flex gap-10">
                {menu.map((item, index) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    key={index}
                  >
                    <NavLink
                      to={`/${item.link.toLowerCase()}`}
                      className={linkActive()}
                    >
                      {item.text}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:block">
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link className="btn bg-secondary_2" to="/matricula">
                    ¡Regístrate!
                  </Link>
                </li>
                <li>
                  <a
                    className="btn bg-primary"
                    href="https://www.facebook.com/Yachaywasi1210"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/* header nav toggle */}
      <div
        className={`fixed top-0 z-20 flex h-screen w-full flex-col items-center bg-white text-header duration-500 ease-in-out xl:hidden ${
          toggleMenu ? `left-0` : "left-full"
        }`}
      >
        <div className="flex h-header w-containerWitdh items-center justify-between">
          {logoHTML}
          <div className="flex items-center justify-center">
            <BtnClosed funct1={setToggleMenu} />
          </div>
        </div>
        <div className="flex w-11/12 flex-col gap-12 py-4">
          <div>
            <nav>
              <ul className="flex flex-col items-center justify-center gap-10">
                {menu.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${item.link.toLowerCase()}`}
                      className={linkActive()}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="">
            <nav className="">
              <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                  <Link
                    className="btn block bg-btnColorSecondary text-center hover:opacity-70"
                    to="/matricula"
                  >
                    ¡Regístrate!
                  </Link>
                </li>
                <li>
                  <a
                    className="btn block bg-primary text-center"
                    href="https://www.facebook.com/Yachaywasi1210"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
const logoHTML = (
  <Link to="/" className="flex select-none items-center gap-3">
    <img className="w-16" src={logo} alt="Logo page" />
    <h1 className="text-4xl font-bold">WASI</h1>
  </Link>
);

export default DashHeader;
