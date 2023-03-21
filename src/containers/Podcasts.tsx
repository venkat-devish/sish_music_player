import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsRow } from "../components";
import { getPodcastsResults } from "../data/api/getChartsData";
import { isPodcastsLoading, podcasts } from "../redux/features/podcastsSlice";
import "../styles/podcasts.scss";

const Podcasts = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const podcastsData = useSelector(podcasts);
  const isPodcastsFetching = useSelector(isPodcastsLoading);
  console.log(podcastsData);

  useEffect(() => {
    dispatch(getPodcastsResults());
  }, []);

  return (
    <div className="podcast">
      <ChartsRow
        isFetching={isPodcastsFetching}
        chartsDataRef={podcastsData}
        heading="Podcasts"
      />
    </div>
  );
};

export default Podcasts;
