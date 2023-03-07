import thumbnail from "../assets/thumbnail.jpg";
import "../styles/card.scss";

const ChartsCard = () => {
  return (
    <div className="card">
      <div className="card__info">
        <img src={thumbnail} alt="thumbnail" />
        <div className="card__details">
          <div className="card__details--title">Title</div>
          <div className="card__details--description">DESCRIPTION</div>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
