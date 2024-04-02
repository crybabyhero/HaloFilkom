const Tabel = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="text-xl text-blue-900 font-bold mb-8 text-center">
            Riwayat Tiket
          </h1>
        </div>
      </div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-yellow-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black-900 uppercase tracking-wider"
            >
              Kategori Masalah
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black-900 uppercase tracking-wider"
            >
              Tanggal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black-900 uppercase tracking-wider"
            >
              Nomor Tiket
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Contoh data tabel */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Masalah 1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              2024-03-30
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              123456
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Masalah 2
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              2024-04-01
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              234567
            </td>
          </tr>
          {/* Tambahkan baris tabel sesuai data yang Anda miliki */}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
