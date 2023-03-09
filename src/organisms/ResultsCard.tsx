import "../styles/results_card.scss";
import SongCard from "./SongCard";

const ResultsCard = () => {
  return (
    <div className="results">
      <div className="results__top">
        <h1>Top Result</h1>
        <div className="results__details">
          <img src="https://i.ibb.co/Y06xX3d/headset.jpg" alt="" />
          <div className="results__details--song">Song</div>
          <div className="results__details--artist">Artist</div>
        </div>
      </div>
      <div className="results__songs">
        <h1>Songs</h1>
        <div className="results__songs--list">
          <SongCard />
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
