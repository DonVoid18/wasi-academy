import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import { useRegisterSoliMemberMutation } from "../features/members/membersApiSlice";
import { motion } from "framer-motion";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [registerSoliMember, { isLoading, isSuccess, isError }] =
    useRegisterSoliMemberMutation();

  const onSubmit = (data) => {
    console.log(data);
    registerSoliMember(data)
      .unwrap()
      .then((res) => {
        console.log(res);
        reset();
      });
  };
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex h-full w-full items-center justify-center"
      >
        <div className="flex h-full w-11/12 max-w-[400px] flex-col py-20 sm:w-3/5 md:w-1/3 xl:w-3/12">
          <div className="flex w-full items-center justify-center">
            <Link to="/" className="flex select-none items-center gap-3">
              <img className="w-14" src={Logo} alt="Logo page" />
              <h1 className="text-2xl font-bold sm:text-3xl">IEEE UNHEVAL</h1>
            </Link>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col gap-5">
              <div className="pt-3 ">
                <h2 className="text-center text-2xl font-bold">
                  Solicitud para ser miembro
                </h2>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        htmlFor="address"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Dirección</span>
                        {errors.address && (
                          <span className="text-xs text-error">
                            {errors.address?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="address"
                          {...register("address", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Dirección de domicilio"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Correo electrónico</span>
                        {errors.email && (
                          <span className="text-xs text-error">
                            {errors.email?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          {...register("email", {
                            required: "Este campo es requerido",
                            pattern: /^\S+@\S+$/i,
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="example@gmail.com"
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
                          placeholder="123456789"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1 grid grid-cols-[50px_1fr]">
                        <div className="flex items-center justify-center">
                          <input
                            id="terms"
                            type="checkbox"
                            className="relative h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                            {...register("terms", {
                              required:
                                "Debes aceptar los términos y condiciones para continuar",
                            })}
                          />
                        </div>
                        <div className="">
                          <label htmlFor="terms">
                            Acepto los {""}
                            <a
                              href="https://www.ieee.org/about/help/site-terms-conditions.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              Términos y Condiciones
                            </a>
                            {""}, {""}
                            <a
                              href="https://www.ieee.org/security-privacy.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              IEEE Política de privacidad
                            </a>{" "}
                            {""}y{" "}
                            <a
                              href="https://www.ieee.org/about/corporate/governance/p9-26.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              Política de No discriminación
                            </a>
                          </label>
                        </div>
                      </div>
                      <label
                        htmlFor="terms"
                        className="flex items-center justify-end text-base font-semibold"
                      >
                        {errors.terms && (
                          <span className="text-xs text-error">
                            {errors.terms?.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`btn w-full bg-primary ${
                        isLoading && "cursor-no-drop"
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex w-full justify-center">
                          <Spinner />
                        </span>
                      ) : (
                        "Registrar datos"
                      )}
                    </button>
                  </div>
                </form>
                {isError && (
                  <div className="mt-3 text-center text-error">
                    Tenemos problemas para registrar tus datos
                  </div>
                )}
                {isSuccess && (
                  <div className="mt-3 text-center">
                    Se registró correctamente
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Login;
