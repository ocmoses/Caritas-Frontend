const host = "http://localhost:5000/api/";
const baseUrl = "http://localhost:5000/";
const Colors = {
  appBackground: "#FFF5F4",
  appRed: "#FC636B",
  appGreen: "#3BE8B0",
  appOrange: "#FFB900",
  appBlue: "#0E2DD6",
  appBlack: "#707070",
  active: "#349EE8",
  navItems: "#3A3A3A",
};

const Routes = {
  register: host + "users/register",
  login: host + "users/login",

  ceate_cause: host + "cause/create",
  all_causes: host + "cause",
  get_cause: host + "cause/", //the cause id must be appended
};

const Actions = {
  show: "SHOW",
  hide: "HIDE",
  navigate: "NAVIGATE",
  collapse: "COLLAPSE",
  switchTab: "SWITCHTAB",
};

export { Colors, Actions, Routes, baseUrl };
