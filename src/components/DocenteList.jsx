import { motion } from "framer-motion";
// import { useGetMembersQuery } from "../features/members/membersApiSlice";

const DocenteList = ({ docentes, title }) => {
  // aqui realizar la solicitud
  // const { data: members, isLoading, isError } = useGetMembersQuery();

  // if (isError)
  //   return (
  //     <p>
  //       En este momento estamos teniendo problemas para mostrar los miembros...
  //     </p>
  //   );
  if (docentes?.lenght === 0)
    return <p>No se encontraron miembros registrados</p>;
  return (
    <div className="flex w-full flex-col gap-14 overflow-hidden text-main">
      <div className="flex w-full flex-col gap-5">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-10">
        {docentes.map((docente, index) => (
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
                className="h-full w-full object-contain drop-shadow-[0px_25px_25px_rgba(0,0,0,0.75)]"
                src={docente.urlImagen}
                alt={docente.nombre}
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">
                {docente.nombre.toUpperCase()}
              </p>
              <p className="text-lg">{docente.curso.toUpperCase()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DocenteList;
