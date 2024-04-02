import { Button } from "antd";

const About = () => {
  return(
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl text-blue-900 font-bold mb-4 text-center">
          Tentang Kami
        </h1>
        <h3 className="text-orange-400">HaloFilkom - Tangguh Tanggap Tepat Terjamin</h3>
        <p className="text-justify"> 
          Dalam rangka peningkatan kualitas bantuan pelayanan daring bagi mahasiswa, <span className="font-bold">Fakultas Ilmu Komputer Universitas Brawijaya</span> meluncurkan <span className="font-bold">“HaloFilkom”. HaloFilkom</span> hadir untuk membantu para mahasiswa/orang tua mahasiswa yang membutuhkan informasi terkait dengan pertanyaan, pelayanan, dukungan teknis, atau penyampaian komplain terhadap seluruh layanan di FILKOM UB dengan memanfaatkan sistem e-ticketing yang memudahkan penelusuran terhadap tindakan penyelesaian yang dikoordinasi oleh suatu tim.
        </p>
      </div>
    </div>
  );
};

export default About;
