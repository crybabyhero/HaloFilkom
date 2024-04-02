import { Link } from "react-router-dom";

const Notifikasi = () => {

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        className="bg-gray-100 shadow-md rounded-lg p-4 mt-4 flex flex-col md:flex-row items-center md:items-start mx-auto"
      >
        <div className="flex flex-col md:w-1/2 pr-4">
            <img src="./public/logo.png" alt="logo" height={40} width={120} className="mt-4"/>
          <h1 className="text-3xl text-blue-950 font-bold m-2 mt-7">
            Sukses
          </h1>
          <p className="text-3xl text-blue-950 font-bold m-2">
            Pembuatan Akun
          </p>
          <p className="text-xl font-medium m-2 mt-0 text-black-500 mb-10">
            Selamat Datang Di Webstie Halo FILKOM
          </p>  
          <button 
          Link to="/Login"
            className="bg-blue-900 text-white py-2 px-4 mt-2 rounded-md mb-2 w-full md:w-1/2 flex items-center justify-center mx-auto"
          >
            Lanjut
          </button>
          <div className="flex justify-center">
            <p className="text-gray-500 text-sm">
              <Link to="/Login" className="text-blue-800">
                Kembali Masuk
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

export default Notifikasi;
