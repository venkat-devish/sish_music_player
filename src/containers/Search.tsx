import "../styles/search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { debounce } from "../utilities/debounce";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumResults, getSearchResults } from "../data/api/getChartsData";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  isSearching,
  searchResults,
  topMostResultData,
  topResultsData,
} from "../redux/features/searchDataSlice";
import { AlbumRow, ChartsRow } from "../components";
import {
  globalCharts,
  globalTopSearchPopCharts,
  isGlobalLoading,
} from "../redux/features/globalChartsSlice";
import { Loading, ResultsCard } from "../organisms";

import { ObjectType } from "../redux/features/recommendedSlice";

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const isGlobalChartsFetching: boolean = useSelector(isGlobalLoading);
  const isSearchResultLoading: boolean = useSelector(isSearching);
  const loadedResults: ObjectType = useSelector(searchResults);
  const loadedTopResults: ObjectType = useSelector(topResultsData);
  const loadedTopResult: ObjectType = useSelector(topMostResultData);
  const globalTopSearchDataRef = useSelector(globalTopSearchPopCharts);

  const _handleSearchInput = debounce((e: any) => {
    dispatch(getSearchResults(e.target.value));
  }, 600);

  useEffect(() => {
    dispatch(getAlbumResults(loadedTopResult?.id));
  }, [loadedTopResult?.id]);

  useEffect(() => {
    dispatch(getSearchResults(""));
  }, []);

  return (
    <div className="search">
      <div className="search__input">
        <button className="search__input--btn search__input--btn-search">
          <SearchIcon />
        </button>
        <input
          className="logo"
          type="text"
          placeholder="What do you want to search?"
          onChange={_handleSearchInput}
        />
      </div>
      {isSearchResultLoading ? (
        <Loading />
      ) : (
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
          )}
        </div>
      )}
      {loadedTopResult?.id && <AlbumRow id={loadedTopResult.id} />}
      {/* <ChartsRow
        isFetching={isSearchResultLoading}
        chartsDataRef={loadedResults}
        heading="Results"
      /> */}
    </div>
  );
};

export default Search;
