import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import { useRegisterMemberMutation } from "../features/members/membersApiSlice";
import { motion } from "framer-motion";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [registerMember, { isLoading, isSuccess, isError }] =
    useRegisterMemberMutation();
  const onSubmit = (data) => {
    console.log(data);
    registerMember(data)
      .unwrap()
      .then((res) => {
        console.log(res);
        reset();
      });
  };
  return (
    <div className="flex w-full items-center justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex w-full items-center justify-center py-10"
      >
        <div className="flex w-11/12 max-w-[400px] flex-col sm:w-3/5 md:w-1/3 xl:w-3/12">
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
                  Registro de miembros
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
                        htmlFor="cod_ieee"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Código IEEE</span>
                        {errors.cod_ieee && (
                          <span className="text-xs text-error">
                            {errors.cod_ieee?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="cod_ieee"
                          {...register("cod_ieee", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 8,
                              message: "Como minimo 8 caracteres",
                            },
                          })}
                          placeholder="Código de miembro ieee"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    <div>
                      <label
                        htmlFor="anioRegister"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Año de ingreso a la IEEE</span>
                        {errors.anioRegister && (
                          <span className="text-xs text-error">
                            {errors.anioRegister?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <select
                          id="anioRegister"
                          {...register("anioRegister", {
                            required: "Este campo es requerido",
                          })}
                          className="input"
                        >
                          {/* <option value="" disabled defaultValue>
                            Seleccionar
                          </option> */}
                          {/* <option value="2022">2022</option> */}
                          <option value="2023" defaultValue>
                            2023
                          </option>
                        </select>
                      </div>
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
