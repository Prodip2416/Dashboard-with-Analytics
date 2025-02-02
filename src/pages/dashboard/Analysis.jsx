import { useEffect } from "react";
import dashboardService from "../../services/dashboardService";
import GaugeCard from "../../components/dashboard/analysis/GaugeCard";
import AreaCard from "../../components/dashboard/analysis/AreaCard";
import ColumnCard from "../../components/dashboard/analysis/ColumnCard";
import RingCard from "../../components/dashboard/analysis/RingCard";
import LineWithDetails from "../../components/dashboard/analysis/LineWithDetails";
import PieCard from "../../components/dashboard/analysis/PieCard";
import UserDataTable from "../../components/dashboard/analysis/UserDataTable";
import MultiLineCard from "../../components/dashboard/analysis/MultiLineCard";

const Analysis = () => {
  useEffect(() => {
    getData(); // example fetch data
  }, []);

  const getData = async () => {
    try {
      const response = await dashboardService.getAnalysisData();
      console.log(response);
      // setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      // Handle error appropriately
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white p-4 shadow">
          <ColumnCard />
        </div>
        <div className="bg-white p-4 shadow">
          <GaugeCard />
        </div>
        <div className="bg-white p-4 shadow">
          <AreaCard />
        </div>
        <div className="bg-white p-4 shadow">
          <RingCard />
        </div>
        <div className="col-span-1 sm:col-span-2 md:grid-cols-2 lg:col-span-4 xl:col-span-4 bg-white p-4 shadow">
          <LineWithDetails />
        </div>{" "}
        <div className="col-span-1 sm:col-span-1 md:grid-cols-2 lg:col-span-2 xl:col-span-2 bg-white p-4 shadow">
          <PieCard />
        </div>{" "}
        <div className="col-span-1 sm:col-span-1 md:grid-cols-2 lg:col-span-2 xl:col-span-2 bg-white p-4 shadow">
          <UserDataTable />
        </div>
        <div className="col-span-1 sm:col-span-2 md:grid-cols-2 lg:col-span-4 xl:col-span-4 bg-white p-4 shadow">
          <MultiLineCard />
        </div>{" "}
      </div>{" "}
    </main>
  );
};

export default Analysis;
