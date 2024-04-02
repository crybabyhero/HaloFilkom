import Layout, { Content } from "antd/es/layout/layout";
import Navbar from "../Komponen/Navbar";
import LandingPage from "../Komponen/LandingPage";
import FooterA from "../Komponen/Footer";
import { Button } from "antd";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="mt-10">
          <Navbar linkTo="/Login" />
        </div>
        <div>
          <Content>
            <LandingPage
              h1="HALO FILKOM"
              p="Tangguh, Tanggap, Tepat Terjamin"
            />
            <div className="flex justify-center mt-96">
              <Button type="text" className='bg-blue-700 ml-4 text-white'>Buka Tiket</Button>
              <Button linkTo="/CekTiket" type="text" className='bg-green-700 ml-4 text-white'>Cek Status</Button>
            </div>
          </Content>
        </div>
        <div className="">
          <footer className="absolute inset-x-0 bottom-0 bg-blue-950 text-white p-4 text-center">
            © 2024 Fakultas Ilmu Komputer. All rights reserved.
          </footer>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
