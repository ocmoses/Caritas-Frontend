import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { verifyUserEmail } from "../services/user.service";
import { Container, Typography } from "@material-ui/core";
import { Colors } from "../constants";
import { Link } from "react-router-dom";
import { PrimaryAppBar } from "../commons";

const VerifyEmailPage = () => {
  const token = useParams().token;
  const [message, setMessage] = useState("Hang on...");
  const [success, setSuccess] = useState(false);

  const verifyEmail = async (token) => {
    const response = await verifyUserEmail(token);
    if (response.status === 200) {
      setMessage("Congrats. Your email has been verified successfully");
      setSuccess(true);
    } else {
      setMessage("Sorry, we couldn't verify your email");
    }
  };

  useEffect(() => {
    verifyEmail(token);
  }, []);

  return (
    <>
      <PrimaryAppBar />
      <Container
        style={{
          marginTop: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: Colors.appRed,
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          style={{
            width: "100%",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {message}
        </Typography>
        {success && (
          <Link to="/signin" style={{ display: "block", fontWeight: "bold" }}>
            You may sign in here
          </Link>
        )}
        {!success && (
          <p style={{ fontSize: "12px", textDecoration: "underline" }}>
            <Link to="/">Go Home</Link>
          </p>
        )}
      </Container>
    </>
  );
};

export default VerifyEmailPage;
