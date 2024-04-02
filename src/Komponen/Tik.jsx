import { Button } from 'antd';
import React from 'react';

const Tiket = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl text-blue-900 font-bold mb-2 text-center">Buka Tiket Baru</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            <div className='justify-center'>
            <h3>Topik Bantuan</h3>
            </div>
          </label>
          <select
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
          >
            <option value="">-- Pilih Topik Bantuan --</option>
            <option value="option1">Akademik</option>
            <option value="option2">Akademik/Praktik Kerja Lapangan (PKL)</option>
            <option value="option3">Akademik/Proses Belajar Mengajar</option>
            <option value="option3">Akademik/Semester Antara</option>
            <option value="option3">Akademik/Ujian (UTS/UAS)</option>
            <option value="option3">Akademik/Yudisium</option>
            <option value="option3">Jurnal (J-PTIIK, JTIIK, JITeCs)</option>
            <option value="option3">Kemahasiswaan</option>
            <option value="option3">Kemahasiswaan/Beasiswa</option>
            <option value="option3">Kemahasiswaan/Satuan Kegiatan Mahasiswa</option>
            <option value="option3">Keuangan</option>
          </select>

          <h3 className='text-xl font-semibold'>Formulir Tiket</h3>
          <p className='text-sm font-semibold'>Silahkan mengisi formulir berikut, yaitu bagian judul tiket dan detail permasalahan</p>
          <h4 className='text-xl font-semibold'>Ringkasan Masalah</h4>
          <p className='text-sm font-semibold'>Tuliskan judul tiket yang singkat, padat dan mudah dipahami konteksnya</p>
          <textarea
            className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="1"
            placeholder="Ringkasan Masalah"
          ></textarea>
        </div>
        {/* Form Tulisan Panjang */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            <h3>Deskrpsikan Masalah</h3>
          </label>
          <textarea
            className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="10"
            cols="30"
            placeholder="Uraikan secara detail permasalahan yang Anda hadapi di sini. jika perlu, lampirkan beberapa tampilan gambar yang mendukung agar kami mudah memahami permasalahan yang dimaksud."
          ></textarea>
        </div>

        <div className="flex justify-center">
          <Button type="primary" className="mr-4">
            Submit
          </Button>
          <Button type="text" className='bg-gray-500 text-white '>
            Reset
          </Button>
          <Button danger type="primary" className="ml-4">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tiket;
