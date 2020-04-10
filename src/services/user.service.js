import { Routes } from "../constants";
import axios from "axios";

const registerUser = async (user) => {
  return await axios
    .post(
      Routes.register,
      {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        role: user.role,
      },
      { "Content-Type": "application/json" }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const signinUser = async (user) => {
  return await axios
    .post(
      Routes.login,
      { email: user.email, password: user.password },
      { "Content-Type": "application/json" }
    )
    .then((res) => {
      console.log("response", res);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res;
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
};

export { registerUser, signinUser };
