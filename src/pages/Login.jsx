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
  }, [user, dispatch, isError]);

  return (
    <>
      <div className="animate-bounce fixed top-8 left-5 bg-[#0029ff] text-white px-3 py-2 rounded">
        <Link to="/">Home</Link>
      </div>
      <div className="h-screen flex items-center  mx-auto bg-[#333] px-5">
        <div className="max-w-[1200px]  rounded  bg-[#f3f3f3] mx-auto flex items-center justify-center gap-10">
          <div className="hidden md:block flex-[30%]">
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-vectorial-cosmonauta_1441-11.jpg?size=626&ext=jpg&ga=GA1.1.847048680.1686597033&semt=sph"
              alt="login img"
              className="rounded w-[100%]"
            />
          </div>
          <div className="flex-[20%] py-4 px-5 h-[400px] w-[350px] md:pr-4 ">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-[30px] font-semibold">
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
                {isLoading ? (
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <button className="bg-[#333] shadow-md text-white w-full rounded py-2 text-[17px]">
                    Login
                  </button>
                )}
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
