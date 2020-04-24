import { baseUrl } from "../constants";

const isAuthenticated = () => {
  let user = localStorage.getItem("user");
  return user !== null && user !== undefined;
};

const getToken = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user).token;
  }
  return null;
};

const getAuthenticatedUser = () => {
  // console.log("Authenticated user", localStorage.getItem("user"));
  if (localStorage.getItem("user"))
    return JSON.parse(localStorage.getItem("user")).data;
  return null;
};

const userIsUser = () => {
  const user = getAuthenticatedUser();
  return user.role[0] === "User";
};

const userIsModerator = () => {
  const user = getAuthenticatedUser();
  return user.role[0] === "Moderator";
};

const signout = () => {
  localStorage.removeItem("user");
  if (getAuthenticatedUser()) return false;
  return true;
};

const processPhoto = (photo) => {
  const result =
    process.env.NODE_ENV === "development"
      ? photo.replace(/^uploads\\/, baseUrl)
      : "/" + photo;

  return result;
};

export {
  isAuthenticated,
  getToken,
  getAuthenticatedUser,
  signout,
  userIsUser,
  userIsModerator,
  processPhoto,
};
