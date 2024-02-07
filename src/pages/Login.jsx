import React, { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.toLowerCase() === "admin@admin.com" &&
      password.toLowerCase() === "admin"
    ) {
      login({ email, password });
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Login",
        text: "Click on email and password",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-200 font-montserrat">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-8 flex justify-between flex-col">
        <div className="flex justify-center items-center gap-1">
          <span className="h-[40px] w-[5px] bg-red-800"></span>
          <h1 className="font-semibold uppercase text-3xl">Batuhan Store</h1>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-2xl">SIGN IN</h3>
          <p className="text-gray-400 text-[14px]">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="email"
              className="login-label hover:after:content-['admin@admin.com']"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email (admin@admin.com)"
              required
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="pass"
              className="login-label hover:after:content-['admin']"
            >
              Password
            </label>
            <input
              className="login-input"
              type="password"
              name="pass"
              placeholder="Enter your password (admin)"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full h-11 bg-green-500 my-4 uppercase text-white">
            Sign In
          </button>
          <p className="text-center">
            <span className="font-[500] text-gray-600 text-[14px]">
              Forgot your password?{" "}
            </span>
            <span className="font-[500] text-red-600 underline text-[12px]">
              Reset Password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
