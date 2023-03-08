import { useSelector } from "react-redux/es/exports";
import {
  globalCharts,
  globalPopCharts,
  isGlobalLoading,
} from "../redux/features/globalChartsSlice";
import { chartsData, isLoading } from "../redux/features/recommendedSlice";

import "../styles/discover.scss";
import ChartsRow from "./Charts/ChartsRow";

const Discover = () => {
  const isFetching = useSelector(isLoading);
  const isGlobalChartsFetching = useSelector(isGlobalLoading);
  const chartsDataRef = useSelector(chartsData);
  const globalChartsDataRef = useSelector(globalCharts);
  const globalPopChartsDataRef = useSelector(globalPopCharts);

  return (
    <div className="discover">
      <ChartsRow
        isFetching={isGlobalChartsFetching}
        chartsDataRef={globalChartsDataRef}
        heading="Top Global"
      />
      <ChartsRow
        isFetching={isFetching}
        chartsDataRef={chartsDataRef}
        heading="Made for you"
      />
      <ChartsRow
        isFetching={isGlobalChartsFetching}
        chartsDataRef={globalPopChartsDataRef}
        heading="Global pop hits"
      />
    </div>
  );
};

export default Discover;
