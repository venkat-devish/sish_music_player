import "../styles/results_card.scss";
import { formatModifier } from "../utilities/format-modifier";
import SongCard from "./SongCard";

const ResultsCard = ({ topResults, topMostResult }: any) => {
  const { title, images, subtitle } = topMostResult[0];
  console.log(topMostResult);
  return (
    <div className="results">
      <div className="results__top">
        <h1>Top Result</h1>
        <div className="results__details">
          <img src={images.coverarthq} alt="" />
          <div className="results__details--song">
            {formatModifier(title, "TOP_SONG_TITLE")}
          </div>
          <div className="results__details--artist">{subtitle}</div>
        </div>
      </div>
      <div className="results__songs">
        <h1>Songs</h1>
        <div className="results__songs--list">
          {topResults.map((item: any, idx: number) => {
            const { images, subtitle, title } = item;
            return (
              <SongCard
                key={idx}
                images={images}
                subtitle={subtitle}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
