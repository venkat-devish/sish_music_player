import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  artistAlbums,
  isArtistAlbumsLoading,
} from "../../redux/features/topArtists";
import ChartsRow from "../Charts/ChartsRow";

const ArtistAlbums = () => {
  const isFetching = useSelector(isArtistAlbumsLoading);
  const albumsData = useSelector(artistAlbums);
  const { name } = useParams();
  console.log(isFetching);
  return (
    <div className="discover">
      <ChartsRow
        isFetching={isFetching}
        chartsDataRef={albumsData}
        heading={name ? name : "Artist Albums"}
      />
    </div>
  );
};

export default ArtistAlbums;
