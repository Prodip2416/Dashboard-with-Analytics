import { Pie } from "@ant-design/plots";

const PieCard = () => {
  const config = {
    data: [
      { type: "Jan", value: 27 },
      { type: "Feb", value: 25 },
      { type: "Mar", value: 18 },
      { type: "Apr", value: 15 },
      { type: "May", value: 10 },
      { type: "Jun", value: 5 },
      { type: "Jul", value: 14 },
      { type: "Aug", value: 11 },
      { type: "Sep", value: 22 },
      { type: "Oct", value: 18 },
      { type: "Nov", value: 6 },
      { type: "Dec", value: 17 },
    ],
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "AntV\nCharts",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
          fontStyle: "bold",
        },
      },
    ],
  };
  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl">Month Wise Data</p>
      </div>
      <Pie {...config} />
    </div>
  );
};

export default PieCard;
