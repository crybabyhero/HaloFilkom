import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../Komponen/Navbar";
import LandingPage from "../Komponen/LandingPage";
import FooterA from "../Komponen/Footer";
import Card from "antd/es/card/Card";
import Cek from "../Komponen/Cek";

const CekTiket = () => {
  return (
    <>
      <Layout>
        <div className="mt-10">
          <Navbar user="Adrian" />
        </div>
        <div>
          <LandingPage backgroundImage="./public/bg2.png"/>
          <Card className="mt-36 m-80">
            <Cek />
          </Card>
        </div>
        <div>
          <FooterA />
        </div>
      </Layout>
    </>
  );
};

export default CekTiket;
