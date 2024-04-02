import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './Halaman/Dashboard.jsx'
import Login from './Halaman/Login.jsx'
import Signup from './Halaman/SignUp.jsx'
import Notifikasi from './Halaman/Notifikasi.jsx'
import DashboardLogin from './Halaman/DashboardLogin.jsx'
import BasisInformasi from './Halaman/BasisInformasi.jsx'
import CekTiket from './Halaman/CekTiket.jsx'
import RiwayatTiket from './Halaman/RiwayatTiket.jsx'
import FAQ from './Halaman/FAQ.jsx'
import TentangKami from './Halaman/TentangKami.jsx'
const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/SignUp",
      element: <Signup/>,
    },
    {
      path: "/Notifikasi",
      element: <Notifikasi/>,
    },
    {
      path: "/BuatTiket",
      element: <DashboardLogin/>,
    },
    {
      path: "/BasisInformasi",
      element: <BasisInformasi/>,
    },
    {
      path: "/CekTiket",
      element: <CekTiket/>,    
    },
    {
      path: "/RiwayatTiket",
      element: <RiwayatTiket/>,
    },
    {
      path: "/FAQ",
      element: <FAQ/>,
    },
    {
      path: "/TentangKami",
      element: <TentangKami/>,
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Router} />
  </React.StrictMode>,
)
