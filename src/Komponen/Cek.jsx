import { Button } from "antd";

const Cek = () => {
  return(
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl text-blue-900 font-bold mb-8 text-center">
        Cek Status Tiket
        </h1>
        <div className="mb-4">
            <div className="justify-center">
              <h3>Masukan Nomor Tiket </h3>
            </div>
          <textarea
            className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="1"
            placeholder=""
          ></textarea>
        </div>

        <div className="flex justify-center">
          <Button type="primary" className="mr-4">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cek;
