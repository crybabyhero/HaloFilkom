import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Navbar = ({ user = "Login", linkTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tiketMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/CekTiket">Cek Tiket</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/BuatTiket">Buat Tiket Baru</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/RiwayatTiket">Riwayat Tiket</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-11/12 shadow-md p-0 rounded-lg z-10 opacity-90 ${isScrolled ? 'py-2' : 'py-1'}`}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-start w-full mr-10">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto justify-right ml-10"
                src="./public/logo.png"
                alt="Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto justify-right ml-10"
                src="./public/logo.png"
                alt="Logo"
                height={50}
              />
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-auto">
              <Link to="/" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Home</Link>
              <Link to="/BasisInformasi" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Basis Informasi</Link>
              <Dropdown overlay={tiketMenu}>
                <span className="ant-dropdown-link text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">
                  Tiket <DownOutlined />
                </span>
              </Dropdown>
              <Link to="/FAQ" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">FAQ</Link>
              <Link to="/TentangKami" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Tentang Kami</Link>
              <Link to={linkTo} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">{user}</Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
