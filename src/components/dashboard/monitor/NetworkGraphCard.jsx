import { NetworkGraph } from "@ant-design/graphs";
import { useEffect, useState } from "react";

const NetworkGraphCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://assets.antv.antgroup.com/g6/graph.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: "view",
    data,
    height: 600,
    node: {
      palette: {
        field: "group",
        color: ["#D580FF", "#4292C6"],
      },
    },
    animation: false,
  };
  return (
    <div>
      <NetworkGraph {...options} />
    </div>
  );
};

export default NetworkGraphCard;
