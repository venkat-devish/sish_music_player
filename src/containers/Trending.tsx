import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistAlbumResults } from "../data/api/getChartsData";
import "../styles/trending.scss";
import { topArtists } from "../utilities/trending-options";

const Trending = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleArtist = (id: any) => {
    dispatch(getArtistAlbumResults(id));
  };

  return (
    <div className="trending">
      {topArtists.map((el: any) => (
        <NavLink className="navlink" to={`/albums/${el.Title}`}>
          <div
            onClick={() => handleArtist(el.artistId)}
            className="trending__card"
            style={{ backgroundColor: el.bgColor }}
          >
            {el.Title}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Trending;
