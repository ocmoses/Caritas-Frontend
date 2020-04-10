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

const signout = () => {
  localStorage.removeItem("user");
  if (getAuthenticatedUser()) return false;
  return true;
};

export { isAuthenticated, getToken, getAuthenticatedUser, signout };
