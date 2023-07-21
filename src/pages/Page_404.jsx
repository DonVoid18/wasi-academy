import Image404 from "../assets/page_404.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Page_404 = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex min-h-screen w-full flex-col items-center overflow-hidden pt-40 pb-24 text-center text-main"
    >
      <img src={Image404} alt="404 Not Found" className="mb-8 h-96 w-96" />
      <h1 className="mb-2 text-4xl font-bold">Oops! Página no encontrada.</h1>
      <p className="mb-8 text-lg text-colorTextSecundary">
        La página que buscas no existe
      </p>
      <Link className="btn bg-btnColorSecondary" to="/">
        Ir al inicio
      </Link>
    </motion.div>
  );
};
export default Page_404;
