import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [programStudi, setProgramStudi] = useState('');
  const [nomorTelpon, setNomorTelpon] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleNimChange = (event) => {
    setNim(event.target.value);
  };

  const handleProgramStudiChange = (event) => {
    setProgramStudi(event.target.value);
  };

  const handleNomorTelponChange = (event) => {
    setNomorTelpon(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKonfirmasiPasswordChange = (event) => {
    setKonfirmasiPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan logika pendaftaran di sini
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col md:w-1/2 pr-4">
          <img src="./public/logo.png" alt="logo" height={40} width={120} className="mt-4"/>
          <h1 className='text-3xl text-blue-950 font-bold m-2 mt-0'>Daftar Akun</h1>
          <p className='text-xl font-bold m-2 mt-0 text-orange-500'>Halo FILKOM</p>
          <label htmlFor="nama" className="mb-2 ml-2">Nama:</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={handleNamaChange}
            className="border border-gray-300 mb-2 ml-2 rounded-md"
            required
          />
          <label htmlFor="nim" className="mb-2 ml-2">NIM:</label>
          <input
            type="text"
            id="nim"
            value={nim}
            onChange={handleNimChange}
            className="border border-gray-300 mb-2 ml-2 rounded-md"
            required
          />
          <label htmlFor="programStudi" className="mb-2 ml-2">Program Studi:</label>
          <select
            id="programStudi"
            value={programStudi}
            onChange={handleProgramStudiChange}
            className="border border-gray-300 mb-2 ml-2 rounded-md"
            required
          >
            <option value="" className="opacity-50">Pilih Program Studi</option>
            <option value="Informatika">Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Komputerisasi Akuntansi">Teknologi Informasi</option>
            <option value="Komputerisasi Akuntansi">Teknik Komputer</option>
            <option value="Sistem Informasi">Pendidikan Teknologi Informasi</option>
          </select>
          <label htmlFor="email" className="mb-2 ml-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 p-2 mb-2 ml-2 rounded-md"
            required
          />
          <label htmlFor="password" className="mb-2 ml-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 p-2 mb-2 ml-2 rounded-md"
            required
          />
          <label htmlFor="konfirmasiPassword" className="mb-2 ml-2">Konfirmasi Password:</label>
          <input
            type="password"
            id="konfirmasiPassword"
            value={konfirmasiPassword}
            onChange={handleKonfirmasiPasswordChange}
            className="border border-gray-300 p-2 mb-2 ml-2 rounded-md"
            required
          />
          <button type="submit" className="bg-blue-900 text-white py-2 px-4 mt-2 rounded-md mb-2 w-full md:w-1/2 flex items-center justify-center mx-auto">Daftar
          </button>
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">Sudah punya akun? <Link to="/Login" className="text-blue-800">Masuk</Link></p>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-4 mt-10">
        <img 
        src="./public/sign.png" 
        alt="Login" 
        className="w-full h-auto rounded-md" />
        </div>
      </form>   
    </div>
  );
};

export default Signup;
