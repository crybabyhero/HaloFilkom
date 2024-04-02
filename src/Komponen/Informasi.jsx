import React from "react";
import { Card } from "antd";

const Informasi = () => {
  const cardData = [
    {
      title: "Masalah Akademik",
      options: [
        "Masalah Akademik",
        "Permintaan Nilai Praktikum Secara Daring untuk Semester Antara",
        "Tautan Surat Daring Layanan Pengurus Surat Akademik",
      ],
    },
    {
      title: "Masalah Kemahasiswaan",
      options: [
        "Masalah Kemahasiswaan",
        "Tahapan Pendaftaran Wisuda",
        "Informasi Beasiswa",
      ],
    },

    {
      title: "Masalah Keuangan",
      options: [
        "Masalah Keuangan",
        "Ketentuan UKT 50% bagi Mahasiswa Semester Akhir",
        "Ketentuan Mahasiswa dibebaskan dari kewajiban membayar UKT",
        "Pengajuan Bantuan Keuangan",
        "Tata Cara Pembayaran UKT",
      ],
    },
    {
      title: "Masalah PSIK",
      options: [
        "Masalah PSIK",
        "Pengajuan Proposal Skripsi di Luar Periode Pengajuan Proposal",
      ],
    },
    {
      title: "MBKM",
      options: [
        "MBKM",
        "Permohonan Surat Rekomendasi mengikuti kegiatan Merdeka Belajar Kampus Merdeka (MBKM)",
      ],
    },
    {
      title: "Sarana Prasarana",
      options: [
        "Sarana Prasarana",
        "Peminjaman Barang Milik Negara / Aset Filkom UB",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-blue-900 font-bold mb-8 text-center">Basis Informasi</h1>
      {cardData.map((data, index) => (
        <div key={index}>
          <Card title={data.title}>
            <select
              className="border rounded-md w-full mb-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`category-${index}`}
            >
              {data.options.map((option, optionIndex) => (
                <option key={optionIndex} value={`option${optionIndex}`}>
                  {option}
                </option>
              ))}
            </select>
          </Card>
        </div>
      ))}
    </div>  
  );
};

export default Informasi;
