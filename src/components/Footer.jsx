import React from "react";
import logo from "/logo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const DashFooter = () => {
  return (
    <div className="flex w-full items-center justify-center bg-colorSection_2 bg-[url('/public/footer-bkg-white.png')] bg-cover bg-no-repeat py-14 text-header text-white">
      <footer className="flex w-containerWitdhMain max-w-containerMax flex-col items-center justify-between gap-10 max-[500px]:w-9/12 md:flex-row">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-4">
              <img className="w-12" src={logo} alt="Logo page" />
              <h1 className="text-3xl font-bold">Wasi</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-xl font-bold">Redes Sociales</div>
            <div>
              <ul className="flex flex-col gap-3 text-colorTextFooter">
                {/* <li>
                  <a href="" className="link-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-6"
                    >
                      <path
                        d="M3.922 4.798a1.459 1.459 0 100-2.918 1.459 1.459 0 000 2.918zm2.836 1.105v8.093h2.513V9.994c0-1.056.198-2.079 1.508-2.079 1.291 0 1.307 1.208 1.307 2.145v3.936H14.6V9.558c0-2.18-.47-3.855-3.017-3.855-1.224 0-2.044.671-2.379 1.307H9.17V5.903H6.758zm-4.095 0H5.18v8.093H2.663V5.903z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Linkedin
                  </a>
                </li> */}
                <li>
                  <a href="" className="link-footer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6"
                    >
                      <path
                        d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.83-.403a2.515 2.515 0 001.768-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Yachaywasi1210"
                    target="_blank"
                    className="link-footer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-6"
                    >
                      <path
                        d="M9.532 13.998V8.534h1.843l.274-2.14H9.532V5.033c0-.617.172-1.04 1.058-1.04h1.122V2.085A14.89 14.89 0 0010.068 2c-1.63 0-2.748.995-2.748 2.82v1.57H5.488v2.14h1.836v5.468h2.208z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-xl font-bold">Políticas</div>
            <div>
              <ul className="flex flex-col gap-3 text-colorTextFooter">
                <li>
                  <a href="" className="link-footer">
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a href="" className="link-footer">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="" className="link-footer">
                    Términos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-start gap-2"
        >
          <Link to="/" className="flex select-none items-center gap-3">
            <img className="w-16" src={logo} alt="Logo page" />
            <h1 className="text-4xl font-bold">Wasi</h1>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-center text-colorTextFooter"
        >
          <p>© 2023 IEEE - Todos los derechos reservados.</p>
        </motion.div> */}
      </footer>
    </div>
  );
};

export default DashFooter;
