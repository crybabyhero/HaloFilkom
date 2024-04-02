import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan logika pendaftaran di sini
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start mx-auto"
      >
        <div className="flex flex-col md:w-1/2 pr-4">
            <img src="./public/logo.png" alt="logo" height={40} width={120} className="mt-4"/>
          <h1 className="text-3xl text-blue-950 font-bold m-2 mt-1">
            Masuk
          </h1>
          <p className="text-xl font-medium m-2 mt-0 text-black-500 mb-10">
            Selamat Datang Di Webstie Halo FILKOM
          </p>
          <label htmlFor="email" className="mb-2 ml-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 p-2 mb-2 ml-2 rounded-md"
            required
          />
          <label htmlFor="password" className="mb-2 ml-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 p-2 mb-2 ml-2 rounded-md"
            required
          />
          <div className="flex justify-end">
            <Link to="" className="text-blue-800 text-sm mb-3">
              Lupa Password?
            </Link>
          </div>
          <button 
          Link to="/Login"
            className="bg-blue-900 text-white py-2 px-4 mt-2 rounded-md mb-2 w-full md:w-1/2 flex items-center justify-center mx-auto"
          >
            Login
          </button>
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              Belum punya akun?{" "}
              <Link to="/SignUp" className="text-blue-800">
                Daftar
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 ml-8">
          <img
            src="./public/login.png"
            alt="Login"
            height={600}
            className="h-800 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Login1;
