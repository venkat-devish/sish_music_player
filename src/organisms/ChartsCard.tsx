import thumbnail from "../assets/thumbnail.jpg";
import "../styles/card.scss";

const ChartsCard = () => {
  return (
    <div className="card">
      <div className="card__info">
        <img src={thumbnail} alt="thumbnail" />
        <div className="card__info">
          <h5>TITLE</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
