import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://blog-api-i1y5.onrender.com/api/users/";

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "register", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
    if (response.status == 400) {
      toast.error("Error")
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, login, logout };

export default authService;
