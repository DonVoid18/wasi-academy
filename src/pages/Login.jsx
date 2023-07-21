import { useState } from "react";
import banner2 from "../assets/banner2.jpg";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Login = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-24 flex min-h-screen w-full items-center justify-center">
      <div className="grid h-full w-full xl:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex h-full w-full flex-col justify-between"
        >
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-sm flex-col gap-8">
              <div>
                <h2 className="text-center text-4xl font-bold xl:text-left">
                  ¡Envía tus datos!
                </h2>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Nombres</span>
                        {errors.name && (
                          <span className="text-xs text-error">
                            {errors.name?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          {...register("name", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Nombres completos"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Apellidos</span>
                        {errors.lastName && (
                          <span className="text-xs text-error">
                            {errors.lastName?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastName"
                          {...register("lastName", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Ingresa tus apellidos"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="dni"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>DNI</span>
                        {errors.dni && (
                          <span className="text-xs text-error">
                            {errors.dni?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="dni"
                          {...register("dni", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 8,
                              message: "Como minimo 8 caracteres",
                            },
                          })}
                          placeholder="12345678"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="numberPhone"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Número de celular</span>
                        {errors.numberPhone && (
                          <span className="text-xs text-error">
                            {errors.numberPhone?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="numberPhone"
                          {...register("numberPhone", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 9,
                              message: "Como minimo 9 caracteres",
                            },
                          })}
                          placeholder="923929304"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <button className="btn w-full bg-primary">
                    Enviar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 text-center text-base text-colorTextSecundary">
            Los datos recopilados se utilizarán para el registro de estudiantes.
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
          className="hidden h-full w-full xl:block"
        >
          <img
            className="h-full w-full object-cover"
            src={banner2}
            alt="Imagen Login"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Login;
