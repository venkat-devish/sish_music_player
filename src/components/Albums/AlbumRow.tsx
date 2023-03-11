import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumResults } from "../../data/api/getChartsData";
import {
  albumsData,
  isAlbumsLoading,
} from "../../redux/features/recommendedSlice";
import ChartsRow from "../Charts/ChartsRow";

const AlbumRow = ({ id }: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const relatedAlbumsData = useSelector(albumsData);
  const isAlbumsFetching = useSelector(isAlbumsLoading);
  console.log(isAlbumsFetching);

  useEffect(() => {
    dispatch(getAlbumResults(id));
  }, [id]);

  return (
    <div>
      <ChartsRow
        isFetching={isAlbumsFetching}
        chartsDataRef={relatedAlbumsData}
        heading="Top Result Related Albums"
      />
    </div>
  );
};

export default AlbumRow;
