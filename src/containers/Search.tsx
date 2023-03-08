import "../styles/search.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { debounce } from "../utilities/debounce";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../data/api/getChartsData";
import { ThunkDispatch } from "@reduxjs/toolkit";
// import { searchResults } from "../redux/features/searchDataSlice";

const Search = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // const loadedResults = searchResults(searchResults);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(loadedResults);
  const _handleSearchInput = (e: any) => {
    setSearchTerm(e.target.value);
    dispatch(getSearchResults(searchTerm));
  };

  const fetchData = debounce(_handleSearchInput, 1000);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="What do you want to listen to?"
        onChange={fetchData}
      />
      <div className="search__logo">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
