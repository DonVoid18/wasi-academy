import { useEffect, useState } from "react";
import DocenteList from "../components/DocenteList";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";

const docentes = [
  {
    nombre: "Luis Guerrero",
    urlImagen: "https://i.ibb.co/qxxpbsJ/luis-guerrero.png",
    curso: "Álgebra",
    categoria: "matematica",
  },
  {
    nombre: "Ricardo Villafuente",
    urlImagen: "https://i.ibb.co/hWnGPQQ/Ricardo-Villafuente.png",
    curso: "Aritmética",
    categoria: "matematica",
  },
  {
    nombre: "Erick Farfán",
    urlImagen: "https://i.ibb.co/m9cHWs9/Erick-Farfan.png",
    curso: "Trigonometría",
    categoria: "matematica",
  },
  {
    nombre: "Meyer Rojas",
    urlImagen: "https://i.ibb.co/YXhCSRy/Meyer-Rojas.png",
    curso: "Raz.Matemático",
    categoria: "matematica",
  },
  {
    nombre: "Krem Masgo",
    urlImagen: "https://i.ibb.co/0trQcJh/Krem-Masgo.png",
    curso: "Física",
    categoria: "matematica",
  },

  {
    nombre: "Damaris Villogas",
    urlImagen: "https://i.ibb.co/g41JJdY/Damaris-Villogas.png",
    curso: "Biología",
    categoria: "ciencias",
  },

  {
    nombre: "Yeny Mendoza",
    urlImagen: "https://i.ibb.co/j5tGNG0/Yeny-mendoza.png",
    curso: "Raz.Verbal",
    categoria: "ciencias",
  },
  {
    nombre: "Karen Enriquez",
    urlImagen: "https://i.ibb.co/4tff68G/Karen-enriquez.png",
    curso: "Lenguaje",
    categoria: "ciencias",
  },
  {
    nombre: "Alex Mejia",
    urlImagen: "https://i.ibb.co/gj5LtGs/Alex-mejia.png",
    curso: "Psicología",
    categoria: "ciencias",
  },
  {
    nombre: "Mario Nicho",
    urlImagen: "https://i.ibb.co/DGKpPWC/Mario-nicho.png",
    curso: "Química",
    categoria: "ciencias",
  },
];
const Docentes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (isLoading)
    return (
      <div className="min-h-screen pt-36">
        <Spinner />
      </div>
    );

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden pt-36 pb-20 text-main">
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <DocenteList
          docentes={docentes.filter(
            (value) => value.categoria === "matematica"
          )}
          title="Docentes de matemática"
        />
      </section>
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <DocenteList
          docentes={docentes.filter((value) => value.categoria === "ciencias")}
          title="Docentes de ciencias"
        />
      </section>
    </div>
  );
};
export default Docentes;
