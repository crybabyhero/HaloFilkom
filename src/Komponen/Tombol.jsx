import { Button } from "@coreui/coreui";

const Tombol = (props) => {
  const { button, button1 } = props;
    return (
    <div>
      <Button type="text" className="bg-blue-700 m-4 text-white">
        {button}
      </Button>
      <Button type="text" className="bg-green-700 text-white">
        {button1}
      </Button>
    </div>
  );
};

export default Tombol;
