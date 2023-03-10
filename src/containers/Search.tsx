import "../styles/search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { debounce } from "../utilities/debounce";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../data/api/getChartsData";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  isSearching,
  searchResults,
  topMostResultData,
  topResultsData,
} from "../redux/features/searchDataSlice";
import { ChartsRow } from "../components";
import {
  globalCharts,
  globalTopSearchPopCharts,
  isGlobalLoading,
} from "../redux/features/globalChartsSlice";
import { ResultsCard } from "../organisms";

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const _handleSearchInput = debounce((e: any) => {
    dispatch(getSearchResults(e.target.value));
  }, 1000);

  const isGlobalChartsFetching = useSelector(isGlobalLoading);
  const isSearchResultLoading = useSelector(isSearching);
  const loadedResults = useSelector(searchResults);
  const loadedTopResults = useSelector(topResultsData);
  const loadedTopResult = useSelector(topMostResultData);
  const globalTopSearchDataRef = useSelector(globalTopSearchPopCharts);
  console.log(loadedResults);

  useEffect(() => {
    dispatch(getSearchResults(""));
  }, []);

  return (
    <div className="search">
      <input
        className="logo"
        type="text"
        placeholder="What do you want to listen to?"
        onChange={_handleSearchInput}
      />
      <div className="search__logo">
        <SearchIcon />
      </div>
      <div className="search__grid">
        {loadedResults.length === 0 ? (
          <ChartsRow
            isFetching={isGlobalChartsFetching}
            chartsDataRef={globalTopSearchDataRef}
            heading="Top Searched"
          />
        ) : (
          <ResultsCard
            topResults={loadedTopResults}
            topMostResult={loadedTopResult}
          />
          // <ChartsRow
          //   isFetching={isSearchResultLoading}
          //   chartsDataRef={loadedResults}
          //   heading="Results"
          // />
        )}
      </div>
    </div>
  );
};

export default Search;
