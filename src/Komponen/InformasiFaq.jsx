import React, { useState } from "react";
import { Card } from "antd";

const InformasiFaq = () => {
  const cardData = [
    {
      title: "Cara Membuat Tiket",
      options: [
        "Akses laman https://halofilkom.ub.ac.id/index.php",
        "Klik Login jika sudah memiliki akun, apabila belum bisa melakukan registrasi",
        "Klik 'Buka Tiket Baru' untuk membuat tiketi",
        "Silahkan pilih 'Topik Bantuan'",
        "Isikan Subjek permasalahan dan isikan detail permohonan layanan atau keluhan dengan singkat dan jelas kemudian klik 'Buka Tiket'",
        "Gunakan Bahasa yang santun dan sesuai Kaidah Bahasa Indonesia yang baik agar mudah dipahami",
      ],
    },
    {
      title: "Masalah Kemahasiswaan",
      options: [
        "Untuk memeriksa jawaban atau balasan tiket Anda dapat dilakukan dengan cara klik 'Cek Status Tiket'"
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleCardDropdownClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div>
      <h1 className="text-2xl text-blue-900 font-bold mb-8 text-center">Frequently Asked Questions</h1>
      {cardData.map((data, index) => (
        <div key={index}>
          <Card
            title={<span className="text-black font-medium" onClick={() => handleCardDropdownClick(index)}>{data.title} ▼</span>} // Menambahkan event onClick untuk menangani klik dropdown card
            className={expandedIndex === index ? 'expanded' : ''}
          >
            <ul className="list-disc list-inside">
              {expandedIndex === index && 
                data.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="text-black font-normal">{option}</li>
                ))}
            </ul>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default InformasiFaq;
