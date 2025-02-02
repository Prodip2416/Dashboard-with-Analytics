import { Liquid } from "@ant-design/plots";
import { Divider } from "antd";
const BaloonCard = () => {
  const config = {
    percent: 0.7,
    height:230,
    style: {
      shape: "pin",
      textFill: "#fff",
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
      height:120
    },
  };
  return (
    <div>
        <p className="mx-4 text-base font-bold">Liquid Chart</p>
        <Divider/>
      <Liquid {...config} />
    </div>
  );
};

export default BaloonCard;
