import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

function Login() {
  const navigate = useNavigate();

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) navigate("/");
  });

  const handleGoogleAuthSuccess = res => {
    localStorage.setItem("token", res.credential);
    navigate("/");
  };

  const handleGoogleAuthFailure = err => {
    console.log(err);
  };

  return (
    <Box
      sx={{
        paddingX: "80px",
        paddingY: "40px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px lightgray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        gap: "10px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }}
    >
      <Typography align="center" color="#266767" fontSize="24px">
        Welcome to TTFY
      </Typography>

      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin onSuccess={handleGoogleAuthSuccess} onError={handleGoogleAuthFailure} />
      </GoogleOAuthProvider>
    </Box>
  );
}

export default Login;
