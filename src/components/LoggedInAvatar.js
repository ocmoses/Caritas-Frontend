import React, { Fragment } from "react";
import { Avatar } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const LoggedInAvatar = props => {
  const location = useLocation();
  return (
    <Fragment
      style={{ display: "inline-block" }}
      onClick={() => {
        if (!location.pathname.includes("/dashboard"))
          window.location = "/dashboard";
      }}
    >
      <p
        style={{
          marginLeft: "50px",
          marginRight: "20px",
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "100%",
          display: "inline-block"
        }}
      >
        Hi, {props.user.fname}
      </p>
      <Avatar
        alt={props.user.fname}
        src={props.user.image}
        style={{ "-webkit-transform": "scale(1.5, 1.5)" }}
      />
    </Fragment>
  );
};

export default LoggedInAvatar;
