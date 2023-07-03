import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Campos vacios");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error("Ocurrio un error");
    }
    if (user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, dispatch, isError, navigate]);

  return (
    <>
      <div className="animate-bounce fixed top-8 left-5 bg-[#0029ff] text-white px-3 py-2 rounded">
        <Link to="/">Home</Link>
      </div>
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
              <h2 className="text-[30px] font-semibold">
                Bienvenido otra vez.
              </h2>
              <p className="text-[15px] text-gray-500">
                Inicia sesion con tus credenciales.
              </p>
            </div>
            <form className="" onSubmit={onSubmit}>
              <div className="">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={onChange}
                  name="email"
                  placeholder="Enter your email"
                  className=" block w-full py-2 border-blue-500 border-b bg-[transparent] outline-none"
                />
              </div>
              <div className="my-5">
                <label htmlFor="">Contrasena</label>
                <input
                  className="border-b border-blue-500 px-2 py-2 block bg-[transparent] w-full outline-none"
                  name="password"
                  onChange={onChange}
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button className="bg-[#333] shadow-md text-white w-full rounded py-2  text-[17px]">
                  Login
                </button>
              </div>
              <Link to="/register">
                <p className="text-center mt-2 text-[15px] text-gray-500">
                  ¿No tienes una cuenta?{" "}
                  <span className="text-black underline">Registrate</span>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
