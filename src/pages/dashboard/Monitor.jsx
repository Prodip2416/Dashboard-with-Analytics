import BaloonCard from "../../components/dashboard/monitor/BaloonCard";
import NetworkGraphCard from "../../components/dashboard/monitor/NetworkGraphCard";
import PolarCard from "../../components/dashboard/monitor/PolarCard";
import RadialBarCard from "../../components/dashboard/monitor/RadialBarCard";
import TinyWave from "../../components/dashboard/monitor/TinyWave";
import WordCloudCard from "../../components/dashboard/monitor/WordCloudCard";

const Monitor = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 bg-white p-4 shadow h-165">
          <NetworkGraphCard />
        </div>
        <div className="col-span-1">
          <div className="grid gap-5">
            <div className="col-span-1 h-80 bg-white p-4 shadow">
              <BaloonCard />
            </div>
            <div className="col-span-1 h-80 bg-white p-4 shadow">
              <PolarCard />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5   gap-5 mt-5">
        <div className=" lg:col-span-3 xl:col-span-3 bg-white p-4 shadow">
          <TinyWave />
        </div>
        <div className="bg-white p-4 shadow">
          <WordCloudCard />
        </div>
        <div className="bg-white p-4 shadow">
          <RadialBarCard />
        </div>
      </div>
    </main>
  );
};

export default Monitor;
