import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { register as registerUser, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const schema = yup.object().shape({
    name: yup.string().min(4).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    if (!name || !email || !password) {
      alert("Campos vacios");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(registerUser(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, dispatch, navigate]);

  return (
    <div className="h-screen flex items-center  w-full mx-auto bg-[#333]">
      <div className="max-w-[1200px]  rounded  bg-[#f3f3f3] mx-auto flex items-center justify-center gap-10">
        <div className="flex-[30%]">
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-vectorial-cosmonauta_1441-11.jpg?size=626&ext=jpg&ga=GA1.1.847048680.1686597033&semt=sph"
            alt="login img"
            className="rounded w-[100%]"
          />
        </div>
        <div className="flex-[20%] pr-4 ">
          <div className="text-center mb-10">
            <h2 className="text-[30px] font-semibold">Bienvenido .</h2>
            <p className="text-[15px] text-gray-500">
              Registrate con tus credenciales.
            </p>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="">Username</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your username"
                value={name}
                name="name"
                onChange={onChange}
                className=" block w-full py-2 border-blue-500 border-b bg-[transparent] outline-none"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="my-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                {...register("email")}
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                className=" block w-full py-2 border-blue-500 border-b bg-[transparent] outline-none"
              />
            </div>
            <p>{errors.name?.message}</p>
            <div className="my-5">
              <label htmlFor="">Contrasena</label>
              <input
                className="border-b border-blue-500 px-2 py-2 block bg-[transparent] w-full outline-none"
                type="password"
                {...register("password")}
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <button className="bg-[#333] text-white w-full rounded py-2  text-[17px]">
                Registrate
              </button>
            </div>
            <Link to="/login">
              <p className="text-center mt-2 text-[15px] text-gray-500">
                ¿Ya tienes una cuenta?{" "}
                <span className="text-black underline">Inicia sesion</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
