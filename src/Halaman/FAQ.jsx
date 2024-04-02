import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../Komponen/Navbar";
import LandingPage from "../Komponen/LandingPage";
import FooterA from "../Komponen/Footer";
import Card from "antd/es/card/Card";
import InformasiFaq from "../Komponen/InformasiFaq";

const Faq = () => {
  return (
    <>
      <Layout>
        <div className="mt-10">
          <Navbar user="Adrian" />
        </div>
        <div>
          <LandingPage backgroundImage="./public/bg2.png" />
          <Card className="mt-36 m-80">
            <InformasiFaq />
          </Card>
        </div>
        <div className="">
          <footer className="absolute inset-x-0 bottom bg-blue-950 text-white p-4 text-center">
            © 2024 Fakultas Ilmu Komputer. All rights reserved.
          </footer>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
