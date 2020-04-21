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
        phone_number: user.phone,
        password: user.password,
        role: user.role,
        address: user.address,
        bank_name: user.bankName,
        account_number: user.accountNumber,
        account_name: user.accountName,
        account_type: user.accountType,
      },
      { "Content-Type": "application/json" }
    )
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      console.log(err.response);
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
      console.log("Gotten token", res.headers["x-auth-token"]);
      if (res.status === 200) {
        res.data.token = res.headers["x-auth-token"];
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
};

const verifyUserEmail = async (token) => {
  return await axios
    .put(Routes.verify_email + token, { "Content-Type": "application/json" })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
};

const forgotPassword = async (email) => {
  return await axios
    .post(Routes.forgot_password, { email: email })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
};

const resetPassword = async (password, token) => {
  return await axios
    .put(Routes.reset_password + token, { password: password })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
};

export {
  registerUser,
  signinUser,
  verifyUserEmail,
  forgotPassword,
  resetPassword,
};
