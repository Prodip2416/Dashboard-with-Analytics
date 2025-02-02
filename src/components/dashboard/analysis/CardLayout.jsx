import { Divider } from "antd";

const CardLayout = ({ children, target, ratio }) => {
  return (
    <div>
      <div className="overflow-hidden" >{children}</div>
      <Divider />
      <div className="flex justify-between">
        <div className="text-base font-bold">Target: {target}</div>
        <div className="text-base font-bold">Ratio: {ratio}</div>
      </div>
    </div>
  );
};

export default CardLayout;
