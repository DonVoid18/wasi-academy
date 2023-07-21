import banner1 from "../assets/banner1.jpg";
import { Link } from "react-router-dom";
import classroom from "../assets/classroom.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faBuildingColumns,
  faAddressCard,
  faSackDollar,
  faPeopleCarryBox,
  faUsers,
  faHeart,
  faRankingStar,
  faVideo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden text-left sm:text-center xl:text-left">
      <div className="flex min-h-screen w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 pt-52 xl:flex-row xl:gap-20 xl:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[600px] sm:w-[600px] xl:min-h-[530px] xl:min-w-[530px]"
          >
            <img className="w-full" src={classroom} alt="Image Banner" />
            <div className="ctn-tiket-hd bottom-12 sm:bottom-auto sm:top-36 sm:left-1/3">
              <div className="shadow-violetC flex h-10 w-10 items-center justify-center rounded-full bg-[#8567db]">
                <FontAwesomeIcon
                  icon={faPeopleCarryBox}
                  className="text-white"
                />
              </div>
              Confianza
            </div>
            <div className="ctn-tiket-hd bottom-28 sm:bottom-32 sm:left-5">
              <div className="shadow-greenC flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946]">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
              Motivación
            </div>
            <div className="ctn-tiket-hd bottom-44 sm:bottom-44 sm:left-2/3">
              <div className="shadow-greenLightC flex h-10 w-10 items-center justify-center rounded-full bg-[#1fddd2]">
                <FontAwesomeIcon icon={faUsers} className="text-white" />
              </div>
              Dedicación
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <h1 className="text-5xl font-bold md:text-6xl md:leading-12">
                Academia universitaria <br />
                <span className="bg-gradient-to-r from-rose-600 to-blue-700 bg-clip-text text-transparent">
                  YACHAYWASI
                </span>
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-xl text-colorTextSecundary">
                Si desean adentrarse en un viaje de aprendizaje emocionante y
                significativo, los invitamos a que se unan a la familia
                YachayWASI. Juntos, construiremos un futuro en el que el
                conocimiento sea la llave que abra todas las puertas.
              </p>
            </div>
            <div className="pt-9 text-main">
              <Link className="btn bg-btnColorSecondary p-5" to="/matricula">
                ¡Únete ahora!
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-colorSection_1">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-12 py-28 md:gap-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start gap-8 text-main sm:items-center xl:items-start"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Qué es YACHAYWASI?
            </h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              YachayWASI surgió en el año 2019, en plena pandemia, como un
              proyecto educativo innovador. Inicialmente, se centraba en la
              enseñanza presencial; sin embargo, debido a las restricciones
              provocadas por el covid, se vio en la necesidad de suspender
              temporalmente sus actividades en el aula. Pero, lejos de
              detenerse, YachayWASI dio un salto hacia adelante, llevando su
              compromiso educativo a otro nivel al ser pioneros en ofrecer una
              enseñanza virtual de alta calidad.
            </p>
            <p className="text-justify text-xl text-colorTextSecundary">
              Este ambicioso proyecto educativo fue fundado por un grupo de seis
              docentes altamente reconocidos en la ciudad de Huánuco. Su
              experiencia y pasión por la educación impulsaron la creación de
              YachayWASI, con el objetivo de brindar una formación integral y
              accesible para los estudiantes, incluso en tiempos difíciles.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex w-full items-center justify-center"
          >
            <div className="flex w-full items-center justify-center md:w-10/12 xl:w-full">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
              >
                {imagenesCarrusel.map((imagen, index) => (
                  <div className="h-96">
                    <img
                      key={index}
                      src={imagen}
                      alt={`Imagen ${index}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-primary text-white shadow-3xl">
        <div className="flex w-containerWitdhMain max-w-containerMax flex-col gap-12 py-28 md:gap-20">
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Nuestros ingresantes 2023
            </h2>
            <p className="w-3/4 text-xl">
              Estos estudiantes demostraron una dedicación y esfuerzo
              excepcionales al perseguir su objetivo de ingresar a la
              universidad de sus sueños. Sus logros son un testimonio del poder
              de la determinación y la pasión por el conocimiento.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {ingresantes.map((ingresante, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  key={index}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex h-44 w-44 items-start justify-center overflow-hidden rounded-full">
                    <img
                      className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.95)]"
                      src={ingresante.urlFoto}
                      alt={ingresante.nombre}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold">
                      {ingresante.nombre.toUpperCase()}
                    </p>
                    <p className="text-xl text-colorTextFooter">
                      {ingresante.puesto}° puesto - {ingresante.carrera}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden xl:h-[700px] xl:flex-row">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-14 py-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start justify-start gap-5 sm:items-center xl:items-start"
          >
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Cómo pertener a YACHAYWASI?
            </h3>
            <p className="text-xl text-colorTextSecundary">
              YachayWASI es una oportunidad única para todos los estudiantes que
              deseen prepararse y alcanzar sus metas de ingresar a las
              universidades más prestigiosas del país. Si estás listo para dar
              el primer paso hacia tu futuro académico y profesional, sigue
              estos sencillos pasos:
            </p>
            <Link className="btn bg-black p-5" to="/matricula">
              Completar formulario
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
            className="flex items-center justify-center text-left"
          >
            <div className="relative flex flex-col gap-16">
              <div className="absolute top-10 left-8 h-5/6 w-1 bg-gradient-to-t from-teal-500 to-blue-600 max-[380px]:hidden"></div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-primary p-5">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">Fotografía personal</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Para celebrar tu ingreso a la universidad y destacar tus
                      logros, nos gustaría contar con tu foto personal para
                      incluirte en los banners de nuestra academia junto a
                      nuestros mejores alumnos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-black p-5">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">Copia de tu DNI</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Para fines de identificación y registro en nuestro
                      sistema, requerimos una copia de tu DNI. Esto nos
                      permitirá asegurar tu participación en nuestra academia de
                      manera efectiva y brindarte una experiencia académica
                      óptima.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-teal-500 p-5">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">Pagar la matrícula</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Solo tienes que pagar la matrícula para empezar a
                      prepararte para ingresar a la universidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-primary text-white xl:h-[580px] xl:flex-row">
        <div className="md:px-10 xl:absolute xl:-left-64 xl:h-full min-[1400px]:-left-52">
          <img className="xl:h-full" src={banner1} alt="Imagen banner1" />
        </div>
        <div className="grid w-10/12 max-w-7xl py-20 xl:grid-cols-2 xl:gap-20">
          <div></div>
          <div className="flex flex-col items-start justify-center gap-7 sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Beneficios por ser nuestro estudiante
            </h3>
            <p className="text-xl">
              Ser estudiante de la academia YACHAYWASI ofrece muchos beneficios,
              tales como:
            </p>
            <div className="grid w-full grid-cols-1 gap-2 text-main md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-teal-500 p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
                </div>
                <div className="font-medium">Cursos online</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-secondary_2 p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faRankingStar} className="h-6 w-6" />
                </div>
                <div className="font-medium">Becas de estudio</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#2b2d42] p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faVideo} className="h-6 w-6" />
                </div>
                <div className="font-medium">Live de facebook</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#e63946] p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faBook} className="h-6 w-6" />
                </div>
                <div className="font-medium">Libros y exámenes</div>
              </motion.div>
            </div>
            <Link
              className="btn w-full bg-btnColorSecondary p-5 text-center"
              to="/matricula"
            >
              ¡Convierte en estudiante ahora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const ingresantes = [
  {
    nombre: "Patrick Rios",
    urlFoto: "https://i.ibb.co/ThRvvLq/1.png",
    puesto: "1",
    carrera: "Ingeniería de sistemas",
  },
  {
    nombre: "Patrick Rios",
    urlFoto: "https://i.ibb.co/1GhLRGm/2.png",
    puesto: "1",
    carrera: "Ingeniería de sistemas",
  },
  {
    nombre: "Patrick Rios",
    urlFoto: "https://i.ibb.co/LSS7nRZ/3.png",
    puesto: "1",
    carrera: "Ingeniería de sistemas",
  },
  {
    nombre: "Patrick Rios",
    urlFoto: "https://i.ibb.co/xHS07xd/4.png",
    puesto: "1",
    carrera: "Ingeniería de sistemas",
  },
];
const imagenesCarrusel = [
  "https://i.ibb.co/wWrxHQ3/124554727-105161731410111-5053235880352910546-n.jpg",
  "https://i.ibb.co/hsqsN2h/337156771-591448326368049-8807731325605110556-n.jpg",
  "https://i.ibb.co/4SvsRKt/268103374-370296878229927-8482320742235681183-n.jpg",
];

export default Home;
