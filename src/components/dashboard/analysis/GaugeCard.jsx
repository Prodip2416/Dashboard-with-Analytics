import { Gauge } from "@ant-design/plots";
import CardLayout from "./CardLayout";
const GaugeCard = () => {
  const target = 159;
  const total = 400;
  const ratio = (target / total) * 100;
  const config = {
    // width: 300,
    height: 250,
    autoFit: true,
    data: {
      target: target,
      total: total,
      name: "score",
      thresholds: [100, 200, 400],
    },
    // legend: true,
    scale: {
      color: {
        range: ["#F4664A", "#FAAD14", "green"],
      },
    },
    // style: {
    //   textContent: (target, total) =>
    //     `Target：${target}\nRatio${(target / total) * 100}%`,
    // },
  };
  return (
    <CardLayout target={target} ratio={ratio}>
      <Gauge {...config} />
    </CardLayout>
  );
};

export default GaugeCard;
