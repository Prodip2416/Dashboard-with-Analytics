import { Tiny } from "@ant-design/plots";
import CardLayout from "./CardLayout";
const AreaCard = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ].map((value, index) => ({ value, index }));

  const config = {
    data,
    height: 180,
    padding: 8,
    shapeField: "smooth",
    xField: "index",
    yField: "value",
    legend: true,
    style: {
      fill: "linear-gradient(-90deg, white 0%, darkgreen 100%)",
      fillOpacity: 0.6,
    },
  };

  return (
    <CardLayout target={"10,488"} ratio={"476.73"}>
      <div className="mb-10">
        <p className="text-2xl">Area</p>
      </div>
      <Tiny.Area {...config} />
    </CardLayout>
  );
};

export default AreaCard;
