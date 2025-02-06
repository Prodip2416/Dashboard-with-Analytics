import CardLayout from "./CardLayout";
import { Tiny } from "@ant-design/plots";
const RingCard = () => {
  const percent = 0.7;
  const config = {
    percent,
    height: 180,
    color: ["#E8EFF5", "#66AFF4"],
    annotations: [
      {
        type: "text",
        style: {
          text: `${percent * 100}%`,
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 16,
          fontStyle: "bold",
        },
      },
    ],
  };

  return (
    <CardLayout target={.9} ratio={.7}>
      <div className="mb-10">
        <p className="text-2xl">Parcantage</p>
      </div>
      <div>
        {" "}
        <Tiny.Ring {...config} />
      </div>
    </CardLayout>
  );
};

export default RingCard;
