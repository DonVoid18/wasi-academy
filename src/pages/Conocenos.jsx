import Mision from "../assets/mision.svg";
import Vision from "../assets/vision.svg";
import Objetivos from "../assets/objetivos.svg";
import { motion } from "framer-motion";
const Conocenos = () => {
  return (
    <div className="mt-24 flex min-h-screen w-full flex-col items-center overflow-hidden text-main">
      {/* section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex max-w-containerMax items-center justify-center pt-32"
      >
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h2 className="text-6xl font-bold">
              Conoce más sobre nuestra academia YACHAYWASI
            </h2>
            <p className="text-xl text-colorTextSecundary">
              YachayWASI se ha consolidado como una de las mejores academias
              preuniversitarias en la región de Huánuco. Desde su fundación en
              2019, ha sido reconocida por la excelencia de su enseñanza y
              cuenta con un equipo de docentes altamente respetados en la
              región. El desafío de la pandemia en 2020 no fue obstáculo para
              YachayWASI, ya que rápidamente se adaptaron y desarrollaron una
              plataforma de enseñanza virtual de primer nivel. Esta transición
              les permitió mantener su compromiso de brindar educación de
              calidad a sus estudiantes, demostrando su capacidad de innovación
              y enfoque en el progreso educativo.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src="https://i.ibb.co/VqFK82V/yachaywasi.jpg"
                alt="Image 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex max-w-containerMax items-center justify-center pt-20"
      >
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-start justify-center gap-5 text-left">
            <h2 className="text-4xl font-bold">Docentes fundadores</h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              Los miembros fundadores de YachayWASI, quienes con una dedicación
              incansable lograron edificar esta academia excepcional. Todos
              ellos son docentes apasionados, lo que les permitió conocer a los
              estudiantes a fondo y, gracias a esta cercanía, construyeron una
              academia sumamente prestigiosa y reconocida en la ciudad de
              Huánuco.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {fundadores.map((funder, index) => (
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
                    className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.75)]"
                    src={funder.urlImagen}
                    alt={funder.nombre}
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">
                    {funder.nombre.toUpperCase()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <section className="flex max-w-containerMax items-center justify-center py-24">
        <div className="flex max-w-containerMax items-center justify-center">
          <div className="flex w-containerWitdhMain_2 flex-col gap-24">
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col gap-5"
              >
                <h2 className="text-4xl font-bold">Misión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  Nuestra misión se fundamenta en brindar una enseñanza de
                  calidad, con un equipo de docentes altamente calificados y
                  comprometidos con el crecimiento y éxito de cada estudiante.
                  Buscamos cultivar el pensamiento crítico, la creatividad y el
                  trabajo en equipo, alentando a nuestros alumnos a alcanzar su
                  máximo potencial y descubrir sus vocaciones y pasiones. En
                  esencia, la misión de YachayWASI es formar líderes con sólidos
                  valores éticos, conocimientos académicos sobresalientes y
                  habilidades para afrontar los retos del futuro, contribuyendo
                  así al desarrollo social, cultural y económico de nuestra
                  comunidad y el país en su conjunto.
                </p>
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
                className="flex w-full items-center justify-center"
              >
                <div className="w-5/6">
                  <img src={Mision} alt="Imagen misión" />
                </div>
              </motion.div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="order-2 flex w-full items-center justify-center xl:order-1"
              >
                <div className="w-5/6">
                  <img src={Vision} alt="Imagen visión" />
                </div>
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
                className="order-1 flex flex-col gap-5 xl:order-2 xl:text-right"
              >
                <h2 className="text-4xl font-bold">Visión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  En YachayWASI, nuestra visión es ser reconocidos como una
                  academia líder en la formación de estudiantes excepcionales,
                  preparados para postular y acceder a las mejores universidades
                  del Perú, incluyendo instituciones de prestigio como la
                  <strong>
                    Universidad Nacional Mayor de San Marcos (UNMSM)
                  </strong>
                  , <strong>la Universidad Nacional de Ingeniería (UNI)</strong>
                  ,{" "}
                  <strong>
                    la Universidad Nacional Hermilio Valdizán (UNHEVAL)
                  </strong>{" "}
                  y muchas otras.
                </p>
              </motion.div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col gap-5"
              >
                <h2 className="text-4xl font-bold">Objetivos</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  <strong>1. Brindar educación de calidad</strong>: En
                  YachayWASI, nos esforzamos por ofrecer una educación de alta
                  calidad, centrada en el aprendizaje efectivo y la adquisición
                  de conocimientos sólidos en todas las materias. <br />
                  <strong>2. Motivar y empoderar a los estudiantes</strong>: En
                  YachayWASI, nos esforzamos por motivar y empoderar a nuestros
                  estudiantes, creando un ambiente de aprendizaje positivo y
                  apoyándolos en su crecimiento personal y académico.
                  <br /> <strong>3. Promover la excelencia académica</strong>:
                  Buscamos destacar como una academia que promueve la excelencia
                  académica, tanto en el rendimiento de nuestros estudiantes
                  como en el desempeño de nuestros docentes.
                </p>
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
                className="flex w-full items-center justify-center"
              >
                <div className="w-5/6">
                  <img src={Objetivos} alt="Imagen objetivos" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const fundadores = [
  {
    nombre: "Elí Ramos",
    urlImagen: "https://i.ibb.co/P9NXj63/El-Ramos-removebg-preview.png",
  },
  {
    nombre: "Tomás Ríos",
    urlImagen:
      "https://i.ibb.co/rM8kTFV/Tomas-Rodriguez-Rios-removebg-preview.png",
  },
  {
    nombre: "José Grados",
    urlImagen: "https://i.ibb.co/bRcCf5Q/Jose-Grados-removebg-preview.png",
  },
  {
    nombre: "Jorge Cabanillas",
    urlImagen: "https://i.ibb.co/5BvpQf2/Jorge-Cabanillas-removebg-preview.png",
  },
  {
    nombre: "Granizo Villogas",
    urlImagen: "https://i.ibb.co/x2fXDGS/Granizo-Villogas-removebg-preview.png",
  },
  {
    nombre: "Ambrosio Rojas Meyer",
    urlImagen:
      "https://i.ibb.co/bHq1Sbs/Ambrosio-Rojas-Meyer-removebg-preview.png",
  },
];
export default Conocenos;
