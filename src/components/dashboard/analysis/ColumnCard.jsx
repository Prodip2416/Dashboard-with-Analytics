import CardLayout from "./CardLayout";
import { Column } from '@ant-design/plots';
const ColumnCard = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json",
    },
    xField: "月份",
    yField: "月均降雨量",
    colorField: "name",
    height: 180,
    group: true,
    style: {
      inset: 5,
    },
    onReady: ({ chart }) => {
      try {
        chart.on("afterrender", () => {
          chart.emit("legend:filter", {
            data: { channel: "color", values: ["London"] },
           
          });
          console.log(chart)
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
  return (
    <CardLayout target={100} ratio={19.00}>
      <div className="mb-10">
        <p className="text-2xl">Weather Temp</p>
      </div>
      <Column {...config} />
    </CardLayout>
  );
};

export default ColumnCard;
