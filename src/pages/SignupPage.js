import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import API from "../api";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const res = await API.post("/auth/signup", data);
      localStorage.setItem("token", res.data.token);
      alert("Signup completed!");
      navigate("/");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleSignup} type="signup" />
    </>
  );
};

export default SignupPage;
